const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `
 ➲ ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋
 
 ➲ INFO USER:
      Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
      Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
      Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
      Balance : $${toCommas(getBalance(sender, balance))}

 ➲ INFO BOT:
      Nama : ${setting.botName}
      Library : Baileys-MD
      Prefix : ( ${prefix} )
      Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
      Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

 ${setting.sa} MAIN MENU
 ${setting.sb} ${prefix}owner
 ${setting.sb} ${prefix}infobot
 ${setting.sb} ${prefix}sewabot
 ${setting.sb} ${prefix}donasi
 ${setting.sb} ${prefix}speed
 ${setting.sb} ${prefix}runtime
 ${setting.sb} ${prefix}cekprem
 ${setting.sb} ${prefix}listprem
 ${setting.sb} ${prefix}join
 ${setting.sc}
 ${setting.sd}

 ${setting.sa} CONVERTER/TOOLS
 ${setting.sb} ${prefix}sticker
 ${setting.sb} ${prefix}toimg
 ${setting.sb} ${prefix}tovid
 ${setting.sc}
 ${setting.sd}
  
 ${setting.sa} GROUP MENU
 ${setting.sb} ${prefix}linkgrup
 ${setting.sb} ${prefix}setppgrup
 ${setting.sb} ${prefix}setnamegc
 ${setting.sb} ${prefix}setdesc
 ${setting.sb} ${prefix}group
 ${setting.sb} ${prefix}welcome
 ${setting.sb} ${prefix}revoke
 ${setting.sb} ${prefix}hidetag
 ${setting.sb} ${prefix}tagall
 ${setting.sb} ${prefix}listadmin
 ${setting.sb} ${prefix}infogc
 ${setting.sb} ${prefix}promote
 ${setting.sb} ${prefix}demote
 ${setting.sb} ${prefix}add
 ${setting.sb} ${prefix}kick
 ${setting.sc}
 ${setting.sd}

 ${setting.sa} DOWNLOADER
 ${setting.sb} ${prefix}play
 ${setting.sb} ${prefix}tiktok 
 ${setting.sb} ${prefix}ytmp4
 ${setting.sb} ${prefix}ytmp3
 ${setting.sb} ${prefix}getvideo
 ${setting.sb} ${prefix}getmusic
 ${setting.sb} ${prefix}instagram 
 ${setting.sb} ${prefix}facebook
 ${setting.sc}
 ${setting.sd}
  
 ${setting.sa} RANDOM MENU
 ${setting.sb} ${prefix}quote
 ${setting.sb} ${prefix}cecan
 ${setting.sb} ${prefix}cogan
 ${setting.sc}
 ${setting.sd}
  
 ${setting.sa} SEARCH MENU
 ${setting.sb} ${prefix}lirik
 ${setting.sb} ${prefix}grupwa
 ${setting.sb} ${prefix}ytsearch
 ${setting.sb} ${prefix}pinterest
 ${setting.sc}
 ${setting.sd}
 
 ${setting.sa} GAME MENU
 ${setting.sb} ${prefix}tictactoe
 ${setting.sb} ${prefix}delttc
 ${setting.sb} ${prefix}tebakgambar
 ${setting.sb} ${prefix}caklontong
 ${setting.sb} ${prefix}asahotak
 ${setting.sb} ${prefix}tebakjenaka
 ${setting.sc}
 ${setting.sd}

 ${setting.sa} TEXT PRO MENU
 ${setting.sb} ${prefix}circuit
 ${setting.sb} ${prefix}sketch
 ${setting.sb} ${prefix}hallowen
 ${setting.sb} ${prefix}rainbow
 ${setting.sb} ${prefix}scfi
 ${setting.sb} ${prefix}blue
 ${setting.sb} ${prefix}juice
 ${setting.sb} ${prefix}purple
 ${setting.sb} ${prefix}toxic
 ${setting.sb} ${prefix}peridot
 ${setting.sb} ${prefix}metal
 ${setting.sb} ${prefix}realistic
 ${setting.sb} ${prefix}impressive
 ${setting.sb} ${prefix}cracked
 ${setting.sb} ${prefix}magma
 ${setting.sb} ${prefix}berry
 ${setting.sb} ${prefix}transformer
 ${setting.sb} ${prefix}horror
 ${setting.sb} ${prefix}metallic
 ${setting.sc}
 ${setting.sd}
  
 ${setting.sa} PAYMENT & BANK
 ${setting.sb} ${prefix}buylimit
 ${setting.sb} ${prefix}buyglimit
 ${setting.sb} ${prefix}transfer
 ${setting.sb} ${prefix}limit
 ${setting.sb} ${prefix}balance
 ${setting.sc}
 ${setting.sd}
  
 ${setting.sa} OWNER MENU
 ${setting.sb} > evalcode
 ${setting.sb} x evalcode-2
 ${setting.sb} $ executor
 ${setting.sb} ${prefix}masuk
 ${setting.sb} ${prefix}bc
 ${setting.sb} ${prefix}setppbot
 ${setting.sb} ${prefix}exif
 ${setting.sb} ${prefix}leave
 ${setting.sb} ${prefix}addprem
 ${setting.sb} ${prefix}delprem
 ${setting.sb} ${prefix}ban
 ${setting.sb} ${prefix}unban
 ${setting.sc}
 ${setting.sd}
`
}
