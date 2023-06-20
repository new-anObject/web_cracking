import execjs
import time
import random
path = 'D:\\zhihuipro\\yuanqu_crawl\\slide_demo\\dzdp_s\\dzdp_login\\'
class EncLogin:
    def __init__(self):
        with open(path + 'login.js', 'r', encoding='utf-8') as ft:
            code1 = ft.read()
        self.ctx1 = execjs.compile(code1, cwd=r'D:\nodejs\node_global\node_modules')
        with open(path + 'login_finger.js', 'r', encoding='utf-8') as ft2:
            code2 = ft2.read()
        self.ctx2 = execjs.compile(code2, cwd=r'D:\nodejs\node_global\node_modules')

    def encrypt_mobile(self, data, type):
        res = ''
        if type == 0:
            res = self.ctx1.call('o', data)
        else:
            res = self.ctx1.call('o', data, True)
        return res
    def encrypt_finger(self):
        localId = "1678183404233MASOOAOfd79fef3d01d5e9aadc18ccd4d0c95073393"
        dfpId = "u2163w683z9159y60uvwzv84xzu2w70z813yy130v0u9795889z2z979"
        return self.ctx2.call("getFinger", localId, dfpId)

class EncToken:
    def __init__(self):
        with open(path + 'token_re.js', 'r', encoding='utf-8') as ft:
            code1 = ft.read()
        self.ctx1 = execjs.compile(code1, cwd=r'D:\nodejs\node_global\node_modules')

    def encrypt_token(self, rqc, type, ts_arr, sms):
        return self.ctx1.call("process", rqc, type, ts_arr, sms)

class EncFactory:
    def get_enc_utils(self, enc_type):
        enc_util = None
        if enc_type == 0:
            enc_util = EncLogin()
        else:
            enc_util = EncToken()
        return enc_util

if __name__ == '__main__':
    def get_ts_arr():
        ts_arr = []
        cur_ts = int(time.time() * 1e3)
        temp = cur_ts;
        for i in range(0,9):
            e = temp - (283 + int(1e3 * random.random()));
            ts_arr.insert(0,e)
            temp = e
        return ts_arr
    enc_fac = EncFactory()
    enc_login = enc_fac.get_enc_utils(0)
    enc_token = enc_fac.get_enc_utils(1)
    enc_passwd = enc_login.encrypt_mobile('xiemin0801', 1)
    print(enc_passwd)
    enc_t = enc_token.encrypt_token('34af5c21ce064621a47ac413a505a14a', 0, get_ts_arr(), 123456)
    print(enc_t)
