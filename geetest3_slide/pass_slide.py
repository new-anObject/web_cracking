import time
import re
import requests
import json
import re_img
import jsonpath
import execjs
from urllib.parse import urljoin
class Slider:
    headers_get = {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'

    }
    def __init__(self):
        with open('w.js', 'r', encoding='utf-8') as fp:
            code = fp.read()
        self.ctx = execjs.compile(code, cwd='D:\\nodejs\\node_global\\node_modules')

    def get_ch(self):
        ts = str(int(time.time() * 1e3))
        url = 'https://www.geetest.com/demo/gt/register-slide?t=' + ts
        resp = requests.get(url, headers=self.headers_get)
        resp_obj = json.loads(resp.text)
        challenge = resp_obj['challenge']
        gt = resp_obj['gt']
        return {'challenge':challenge,'gt':gt}

    def get_c_s(self, gt, challenge):
        ts = str(int(time.time() * 1e3))
        url = 'https://apiv6.geetest.com/get.php'
        param = {
            'gt': gt,
    'challenge': challenge,
    'lang': 'zh-cn',
    'pt': 0,
    'client_type': 'web',
            'callback': 'geetest_' + ts
        }
        resp = requests.get(url, headers=self.headers_get, params=param)
        resp_obj = self.load_text(resp.text)
        data = resp_obj['data']
        return {
            'gt':gt,
            'challenge':challenge,
            'c':data['c'],
            's':data['s'],

        }
    def get_verify_type(self, g, ch):
        ts = str(int(time.time() * 1e3))
        url = 'https://api.geetest.com/ajax.php'
        param = {
            'gt': g,
            'challenge': ch,
            'lang': 'zh-cn',
            'pt': 0,
            'client_type': 'web',
            'callback': 'geetest_' + ts
        }
        resp = requests.get(url, params=param, headers=self.headers_get)
        resp_obj = self.load_text(resp.text)
        return {'result':resp_obj['data']['result']}

    def get_pic_info(self, g, ch):
        ts = str(int(time.time() * 1e3))
        url = 'https://api.geetest.com/get.php'
        param = {
            "is_next": True,
            "type": "slide3",
            "gt": g,
            "challenge": ch,
            "lang": "zh-cn",
            "https": "true",
            "protocol": "https://",
            "offline": "false",
            "product": "popup",
            "api_server": "api.geetest.com",
            "isPC": "true",
            "autoReset": "true",
            "width": "100%",
            "callback": "geetest_" + ts
        }
        resp = requests.get(url, params=param, headers=self.headers_get)
        print(resp.text)
        resp_obj = self.load_text(resp.text)
        return {
            'c':resp_obj['c'],
            's': resp_obj['s'],
            'bg': resp_obj['bg'],
            'fullbg': resp_obj['fullbg'],
            'slice': resp_obj['slice'],
            'gct_path': resp_obj['gct_path'],
            'gt':resp_obj['gt'],
            'challenge':resp_obj['challenge']
        }

    def load_text(self, text):
        obj_text = re.findall('geetest_\d+\((.+)\)',text)[0]
        obj = json.loads(obj_text)
        return obj

    def process(self):
        res1 = self.get_ch()
        gt = res1['gt']
        ch = res1['challenge']
        print(res1)
        res2 = self.get_c_s(res1['gt'], res1['challenge'])
        print(res2)
        res3 = self.get_verify_type(gt, ch)
        print(res3)
        res4 = self.get_pic_info(gt, ch)
        print(res4)
        bg_url = 'https://static.geetest.com/' + res4['bg']
        resp_bg = requests.get(bg_url, headers=self.headers_get)
        reco_bg = self.reco_img(resp_bg.content)
        distance = self.get_slide_x(reco_bg)
        pass_time, trace_arr = self.get_slide_trace(distance)
        code1,code2 = self.get_gct(res4['gct_path'])
        enc_p = {
            'x':distance,
            'challenge_new':res4['challenge'],
            'gt':res4['gt'],
            'passtime':pass_time,
            'c':res4['c'],
            's':res4['s'],
            'code1':code1,
            'code2':code2,
            'trace':trace_arr
        }
        print(distance)
        time.sleep(2)
        enc_w = self.ctx.call('get_w_new', enc_p)
        print(enc_w)

        self.do_slide(res4['gt'], res4['challenge'], enc_w)

    def reco_img(self, d):
        return re_img.parse_bg_captcha(d, im_show=False)


    def down_img(self, res, fn):
        #fn = res['']
        url = 'https://static.geetest.com/' + res['bg']
        resp = requests.get(url, headers=self.headers_get)
        re_img.parse_bg_captcha(resp.content, im_show=False, save_path='.//slide_img//train//images//{}.jpg'.format(fn))

    def get_slide_x(self, d):
        resp = requests.post('http://127.0.0.1:5200/v1/img/point', files={'image':d})

        resp_obj = json.loads(resp.text)
        data = resp_obj['data']
        x = self.calc(data)
        return x
    def calc(self, d):
        loc_list = jsonpath.jsonpath(d, '$..location')
        print(loc_list)
        target = loc_list[0]

        if len(loc_list) > 1:
            if loc_list[0][0] > loc_list[1][0]:
                target = loc_list[1]
        return int(target[0] + int(abs(target[0] - target[2]) / 2)) - 5


    def get_slide_trace(self, x):
        from slide_trace_code import GTrace
        gtrace = GTrace()
        pass_time, trace_arr = gtrace.get_mouse_pos_path(x)
        return pass_time, trace_arr

    def get_gct(self, gct_path):
        url = urljoin('https://static.geetest.com', gct_path)
        resp = requests.get(url, headers=self.headers_get)
        stjc = re.findall("(function StJC\(t\).+)return function\(t\)",resp.text)[0]
        rbfk = re.findall("(function Rbfk\(t\).+)function StJC\(t\)",resp.text)[0]
        print(len(stjc))
        print(len(rbfk))
        return stjc,rbfk

    def do_slide(self, g, ch, w):
        ts = str(int(time.time() * 1e3))
        url = 'https://api.geetest.com/ajax.php'
        param = {
            'gt': g,
            'challenge': ch,
            'lang': 'zh-cn',
            '$_BCX': 0,
            'client_type': 'web',
            'callback': 'geetest_' + ts,
            'w':w
        }
        resp = requests.get(url, params=param, headers=self.headers_get)
        print(resp.text)

if __name__ == '__main__':
    slider = Slider()
    for i in range(20):

        slider.process()
        time.sleep(2)
        print("###################################################################")
    # for i in range(90, 110):
    #     slider.process(i)
    #     time.sleep(1.5)

