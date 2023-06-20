from enc_tools import EncFactory
from dologin import PwdLogin
from get_sms import SmsGetter
from submit_sms import SubmitSms
from token_get import TokenGet
import sys
import time
import random
def get_ts_arr():
    ts_arr = []
    cur_ts = int(time.time() * 1e3)
    temp = cur_ts;
    for i in range(0, 9):
        e = temp - (283 + int(1e3 * random.random()));
        ts_arr.insert(0, e)
        temp = e
    return ts_arr
if __name__ == '__main__':
    enc_factory = EncFactory()
    enc_login = enc_factory.get_enc_utils(0)
    enc_sms = enc_factory.get_enc_utils(1)
    ts_arr = get_ts_arr()
    pwd_login = PwdLogin(enc_login, "your telephone", "your password")
    resp_obj = pwd_login.process()
    if not resp_obj:
        print("密码登录失败")
        sys.exit(0)
    rqc = resp_obj['request_code']
    ticket = resp_obj['ticket']
    sms_get = SmsGetter(enc_sms)
    if not sms_get.process(rqc, ts_arr):
        print("获取验证失败")
    #获取验证码








