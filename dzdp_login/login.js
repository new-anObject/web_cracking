const JSEncrypt = require('node-jsencrypt')
//import { JSEncrypt } from 'jsencrypt'

var n = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtABocAwAJuxcPN8tsrXwHA0kQrFezWwFwQDi6F1QYHVib4NBnQNuq712x0lxHrAbYc85tR8881W3y8DqcbpkGn82AYVXVi4eijFcJCnBO4tZRaPEtKFq6n4aXx0rOEumYsFUPXkSf5foS5zJl7RxZkRCadp1WkJfg51ZkiNoJ4Aav8pSUg+lrmf69nApsZXW3UCgOL1R0Lo2rh3w67QLJ+Z0KGH/H2tOJioBEMTON55VyePfXnk81zFhnNOnHXCMJl5VmhvJYf/Xp1GgxZJPCD4owgExia0dApzauqyFaJcQulBIvftJ+mAsU04sycfTrpjD0gSgXA2Iu1oKWRxHAQIDAQAB"
              , r = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCRD8YahHualjGxPMzeIWnAqVGMIrWrrkr5L7gw+5XT55iIuYXZYLaUFMTOD9iSyfKlL9mvD3ReUX6Lieph3ajJAPPGEuSHwoj5PN1UiQXK3wzAPKcpwrrA2V4Agu1/RZsyIuzboXgcPexyUYxYUTJH48DeYBGJe2GrYtsmzuIu6QIDAQAB";
function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , o = new JSEncrypt();
                return t ? o.setPublicKey(r) : o.setPublicKey(n),
                o.encrypt(e)
}
 // console.log(o('xiemin11111', !0))
