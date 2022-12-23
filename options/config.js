/* My Info
* New Base Multi Device By Zora
* Please Follow Me On All Sosial Media
* Instagram : https://instagram.com/nozex___
* Tiktok : https://tiktok.com/@.nozex
* Github : https://github.com/Zora3mk
* Youtube : https://youtube.com/VIOEDITING
* Contact Me on wa.me/961713508i3
*/

/* My Web
* Rest Api : https://zeroyt7-api.xyz
* Olshop : https://zeroyt7.xyz
*/

/* Thanks To
* Zer
* Dhika Ardiant
* Mhankbarbar
* Chaliph
* Allah S.W.T
* Ortu
* All Creator Bot
* All Subscriber Ku
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
ZeroYT7: 'https://zeroyt7-api.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'Your Apikey',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

global.owner = ['96171350883']
global.premium = ['96171350883']
global.botname = 'ZoraBot'
global.packname = 'Zora'
global.author = 'Zora'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'ميزة للادمن فقط!',
botAdmin: 'لازم اكون ادمن!',
owner: 'ميزة لزورا و بس.',
group: 'ميزة تستخدم في القروبات بس!',
private: 'ميزة تستخدم في الخاص بس!',
bot: 'ميزات خاصة لمستخدمي البوت',
wait: 'انتظر قليلا...',
endLimit: '....',
}
global.limitawal = {
premium: "Infinity",
free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
