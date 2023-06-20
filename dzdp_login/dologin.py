import requests
import execjs
import re
import json
import jsonpath
from enc_tools import EncFactory

# path = 'D:\\zhihuipro\\yuanqu_crawl\\slide_demo\\dzdp_s\\'
# with open(path + 'login.js', 'r', encoding='utf-8') as f1:
#     code1 = f1.read()
# with open(path + 'login_finger.js', 'r', encoding='utf-8') as f2:
#     code2 = f2.read()
# print(code2[221208:221310])
# code2 = re.sub('\u200b', '', code2)
# code2 = re.sub('\x85', '', code2)
# str11 = '\u200b'
# print(str11)
# code2 = code2e.decode('utf-8')
# ctx1 = execjs.compile(code1, cwd=r'D:\nodejs\node_global\node_modules')
# ctx2 = execjs.compile(code2, cwd=r'D:\nodejs\node_global\node_modules')
uuid = "187ffcc2e9fc8-0618091c3df12d-26031b51-100200-187ffcc2e9fc8"
#187ffcc2e9fc8-0618091c3df12d-26031b51-100200-187ffcc2e9fc8
# localId = "1678183404233MASOOAOfd79fef3d01d5e9aadc18ccd4d0c95073393"
# dfpId = "u2163w683z9159y60uvwzv84xzu2w70z813yy130v0u9795889z2z979"
# aa = ctx2.call("getFinger", localId, dfpId)
# print(aa)
class PwdLogin:
    def __init__(self, enc_util, phone, pwd):
        self.enc_util = enc_util
        self.mobile = phone
        self.password = pwd
    headers_post = {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78"
    }

    def process(self):
        # enc_login = self.enc_factory.get_enc_util(0)
        print("密码登录==========")
        payload = {
            "encryptMobile": self.enc_util.encrypt_mobile(self.mobile, 0),
            "countryCode": 86,
            "encryptPassword": self.enc_util.encrypt_mobile(self.password, 1),
            "uuid": uuid,
            'cx': 'cxcxcx',
            'setCookie': True,
            'platform': 1,
            'siteType': 'PC',
            "h5_fingerprint": self.enc_util.encrypt_finger()
        }
        url = 'https://accountapi.dianping.com/mlogin/dp/api/v1/account/passwordlogin/login'
        resp = requests.post(url, headers=self.headers_post, data=payload)
        text = resp.text
        print(text)
        text_obj = json.loads(text)
        if jsonpath.jsonpath(text_obj, '$..succCallbackUrl'):
            ticket = jsonpath.jsonpath(text_obj, '$..ticket')[0]
            rqc = jsonpath.jsonpath(text_obj, '$..ticket')[0]
            return {"request_code": rqc, 'ticket':ticket}
        else:
            return None

        '''
        {
  "trace_id": "2477649429562518612",
  "error": {
    "code": 101157,
    "type": "user_login_need_verify",
    "message": "检测到您的账号存在异常，请进行验证",
    "data": {
      "param": "action\u003dloginverification\u0026requestCode\u003dg4f02101d62d41308802ed384208e4f1",
      "jumpUrl": "https://verify.meituan.com/v2/web/general_page",
      "ticket": "tihdNZNkczRHfhrzouHlbhzQlngHCMzqlFjlghDB",
      "succCallbackUrl": "https://verify.meituan.com/success",
      "popSecondaryMobile": true,
      "requestCode": "g4f02101d62d41308802ed384208e4f1"
    }
  }
}
        '''

if __name__ == '__main__':
    enc_factory = EncFactory()
    enc_util = enc_factory.get_enc_utils(0)
    pwd_login = PwdLogin(enc_util, "your telephone", "your password")
    pwd_login.process()






