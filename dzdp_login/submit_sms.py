import random
import time
import requests
import json
import jsonpath
class SubmitSms:
    def __init__(self, enc_util):
        self.enc_util = enc_util

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
    def process(self, request_code, sms, ts_arr):

        print("输入验证码==========")
        url = 'https://verify.meituan.com/v2/ext_api/loginverification/verify?id=4'
        payload = {
            'request_code':request_code,
            'smscode': sms,
            'mobile':None,

            'listIndex': 0,
            '_token':self.enc_util.encrypt_token(request_code,1, ts_arr, sms)
        }
        print(payload)
        resp = requests.post(url, headers=self.headers_post, data=payload)
        print(resp.text)
        text_obj = json.loads(resp.text)
        '''{"status":1,"data":{"response_code":"9d9db3f9ab974b4199e18453fd9c6bbc"},"error":null}'''
        rpc_li = jsonpath.jsonpath(text_obj, '$.data.response_code')
        if rpc_li:
            return {'response_code':rpc_li[0]}
        else:
            print("输入验证码失败")
            return None






if __name__ == '__main__':
    sms_get = SubmitSms()
    sms_get.process("34af5c21ce064621a47ac413a505a14a", 777101)
    # '015c2e72defe482785084a332d9c348e'
    #IdPvtbrWZmfCXmeyUTZPNKNEhZWFvCQOeYeBjlTO



'''
_lxsdk_cuid=1879815322bc8-002da1c38e53de-26031b51-100200-1879815322bc8;
_lxsdk=1879815322bc8-002da1c38e53de-26031b51-100200-1879815322bc8;
_hc.v=e8f891cd-3a69-bdc7-017f-0547d2714f05.1683541379; 
WEBDFPID=x8259v10w9x05yy000yz8x6uu513yuz6812uzv7217197958091w9x62-1998901378922-1683541377944CWIIGOGfd79fef3d01d5e9aadc18ccd4d0c95073799;
qruuid=49540f99-29cf-4b48-8a28-2c444ebaffb3; 
ll=7fd06e815b796be3df069dec7836c3df;
_lxsdk_s=187fae2bc22-13f-35a-52a%7C%7C14
dper=b3acd25ff50c979aac38f16e0dee380421fe9dbd22a658919833b6bee92244adf458cdb5034da56db6d4fa2028f260d902f82ef4b3bb451c15377d9e7a78d054;
Path=/;HttpOnly;Domain=.dianping.com;Expires=Thu, 08-Jun-2023 10:32:44 GMT;Max-Age=2678400
'''

'''
_lxsdk_cuid=1879815322bc8-002da1c38e53de-26031b51-100200-1879815322bc8;
_lxsdk=1879815322bc8-002da1c38e53de-26031b51-100200-1879815322bc8; 
_hc.v=a4e44a20-b6c2-faf4-1a9e-6fc9772a1fd4.1683541913; 
WEBDFPID=89uz69uwuzy35y530050zy7935839uw3812uzvzz82497958897u21z8-1998901913778-1683541912590CQUKYGSfd79fef3d01d5e9aadc18ccd4d0c95074079; 
dper=b3acd25ff50c979aac38f16e0dee380421fe9dbd22a658919833b6bee92244adf458cdb5034da56db6d4fa2028f260d902f82ef4b3bb451c15377d9e7a78d054; 
qruuid=32ed8e89-40d6-40b1-a67d-1d9360047ca7; 
ll=7fd06e815b796be3df069dec7836c3df; 
fspop=test; 
cy=156; 
cye=dezhou; 
Hm_lvt_602b80cf8079ae6591966cc70a3940e7=1683542497; 
s_ViewType=10; 
Hm_lpvt_602b80cf8079ae6591966cc70a3940e7=1683542512; 
_lxsdk_s=187faeae072-8e8-342-e2d||63
logan_session_token=ebgcllgxprxvvzg6yl16
'''