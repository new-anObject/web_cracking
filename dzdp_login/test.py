import jsonpath
import json
str11 = '''{
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
}'''
#,
jobj = json.loads(str11)
succ = jsonpath.jsonpath(jobj, "$..succCallbackUrl")
print(succ)