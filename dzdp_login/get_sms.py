#获取短信验证码接口，验证码接收需要自动接码相关技术， 如手机接码app、接码平台等
import requests
import execjs
import random
import json
import re
import time
import jsonpath
# path = 'D:\\zhihuipro\\yuanqu_crawl\\slide_demo\\dzdp_s\\'
class SmsGetter:
    def __init__(self, enc_util):
        self.enc_util = enc_util
        # with open(path + 'token_re.js', 'r', encoding='utf-8') as ft:
        #     code1 = ft.read()
        # self.ctx1 = execjs.compile(code1, cwd=r'D:\nodejs\node_global\node_modules')
    headers_post = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "2244",
    "Content-Type": "application/x-www-form-urlencoded",
    # "Cookie": "_lxsdk_cuid=183df612195c8-082e1d610e6339-26021c51-100200-183df612196c8; ci=108; iuuid=BD6571398C66927C13933EE15093DC47BDD972BF7716A5AAEA788E334B338EF3; cityname=%E7%8F%A0%E6%B5%B7; _lxsdk=BD6571398C66927C13933EE15093DC47BDD972BF7716A5AAEA788E334B338EF3; _yoda_verify_resp=m3UFh%2BrN6ssf0l%2Fv3efp1ggBU3EywPVYXRZZBYjSPpVriP4KMMYGyE4Pan%2FB1sGI54HBVDGIKCrW220dZ5FeyPmtFRK%2BaQgyzsligLEtV7Gk2WjzVx%2BND0H52Z53H5jtWZ6eASTD8ZI5RpktpWRCN6ZR8Hjzn7GPAWchXG7CfSiOEqH7PSRyCswEN9VkRD7eKXiWzv4vQDIkyvx0RwTQEwqj2aEGHqV5B2DZyjnCk1QMNLCPV2jF3xsg6K%2BTmiUVVBC6zSklNiyw1M2%2BzWctyfEo5Z7ol8pvLWb5A0Dchl7WiYjzWoVL4E6brygpLuao9Y5sIqwpMG6xjQtIuOayJrxVqynDB9hngQupIbR7k%2Fy1FkzzWCb0P1MUO69%2B4A46; _yoda_verify_rid=16e39ce0adc32052",
    "Host": "verify.meituan.com",
    "Origin": "https://verify.meituan.com",
    "Pragma": "no-cache",
    "Referer": "https://verify.meituan.com/v2/web/general_page?action=loginverification&requestCode=e074392683644e1dbe7b911ac413a52f&succCallbackUrl=https%3A%2F%2Faccount.dianping.com%2Fpclogin%3Fredir%3Dhttps%253A%252F%252Fwww.dianping.com%252Fcitylist",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
}
    def get_ts_arr(self):
        ts_arr = []
        cur_ts = int(time.time() * 1e3)
        temp = cur_ts;
        for i in range(0,9):
            e = temp - (283 + int(1e3 * random.random()));
            ts_arr.insert(0,e)
            temp = e
        return ts_arr
    def process(self, request_code, ts_arr):
        print("获取验证码==========")
        url = 'https://verify.meituan.com/v2/ext_api/loginverification/info?id=4'
        payload = {
            'request_code':request_code,
            'mobile':None,
            'moduleEnable': True,
            'mobileInterCode': 86,
            'listIndex': 0,
            '_token':self.enc_util.encrypt_token(request_code,0, ts_arr, 123456)
        }
        print(payload)
        resp = requests.post(url, headers=self.headers_post, data=payload)
        '''{"status":1,"data":{"prompt":{"mobile":"186*****141"}},"error":null}'''
        text_obj = json.loads(resp.text)
        if jsonpath.jsonpath(text_obj, '$.data.promot.mobile'):
            return True
        else:
            return False
        print(resp.text)

if __name__ == '__main__':
    sms_get = SmsGetter()
    sms_get.process("34af5c21ce064621a47ac413a505a14a")
    #IdPvtbrWZmfCXmeyUTZPNKNEhZWFvCQOeYeBjlTO
    #777101