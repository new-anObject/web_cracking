import requests
import json
import jsonpath
from redis import StrictRedis
class TokenGet:
    headers_post = {
        "Content-Type": "application/x-www-form-urlencoded",
        # "Cookie": "_lxsdk_cuid=183df612195c8-082e1d610e6339-26021c51-100200-183df612196c8; ci=108; iuuid=BD6571398C66927C13933EE15093DC47BDD972BF7716A5AAEA788E334B338EF3; cityname=%E7%8F%A0%E6%B5%B7; _lxsdk=BD6571398C66927C13933EE15093DC47BDD972BF7716A5AAEA788E334B338EF3; _yoda_verify_resp=m3UFh%2BrN6ssf0l%2Fv3efp1ggBU3EywPVYXRZZBYjSPpVriP4KMMYGyE4Pan%2FB1sGI54HBVDGIKCrW220dZ5FeyPmtFRK%2BaQgyzsligLEtV7Gk2WjzVx%2BND0H52Z53H5jtWZ6eASTD8ZI5RpktpWRCN6ZR8Hjzn7GPAWchXG7CfSiOEqH7PSRyCswEN9VkRD7eKXiWzv4vQDIkyvx0RwTQEwqj2aEGHqV5B2DZyjnCk1QMNLCPV2jF3xsg6K%2BTmiUVVBC6zSklNiyw1M2%2BzWctyfEo5Z7ol8pvLWb5A0Dchl7WiYjzWoVL4E6brygpLuao9Y5sIqwpMG6xjQtIuOayJrxVqynDB9hngQupIbR7k%2Fy1FkzzWCb0P1MUO69%2B4A46; _yoda_verify_rid=16e39ce0adc32052",

        # "Referer": "https://account.dianping.com/",

        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
    }
    def get_token(self, rqc, rpc, tk):
        url = 'https://accountapi.dianping.com/api/passport/api/v1/account/verifylogin'
        payload = {
            'userTicket':tk,
            'siteType':'PC',
            'responseCode': rpc,
            'requestCode': rqc,
            'reOpen':None,
            'fromDp':True
        }
        resp = requests.post(url, headers=self.headers_post, data=payload)
        print(resp.text)
        text_obj = json.loads(resp.text)
        token_li = jsonpath.jsonpath(text_obj, '$..token')
        if token_li:
            r = StrictRedis(host='127.0.0.1', db=2, port=6379, password="tycrediscon189")
            r.set('dzdp:login:cookies', "dper=" + token_li[0]+ ';')
            r.close()
        else:
            print("获取token失败")

if __name__ == '__main__':
    token_getter = TokenGet()
    token_getter.get_token("34af5c21ce064621a47ac413a505a14a", 'f1a1a18628ce4f8bb9cdb02450a722ee','IdPvtbrWZmfCXmeyUTZPNKNEhZWFvCQOeYeBjlTO')