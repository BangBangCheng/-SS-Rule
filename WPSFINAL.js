#!name=WPS会员
#!desc=WPS解锁本地会员
#!icon= https://raw.githubusercontent.com/deezertidal/private/main/icons/wps.png
#!homepage=https://raw.githubusercontent.com/BangBangCheng/-SS-Rule/master/wps11.25.0.js


^https?:\/\/.*?account\.wps\.(com|cn)(:\d+)?\/api\/users\/\w+\/overview$ url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/WPSOffice/Script/WPS.js


hostname = account.wps.cn *account.wps.com
