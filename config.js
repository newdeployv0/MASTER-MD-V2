const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masterhelper@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94720797915@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWWZa1G3R3c4TPADo0M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2368f1b5d6ff724ae0c51.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94778764083,94766969406";
global.owner = process.env.OWNER_NUMBER || "94778764083";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "94778764083";
global.read_status_from = process.env.READ_STATUS_FROM || "94778764083";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFoTzBUVjl4RTBHVlVVdW5IRWlDY016YTMwSmlvL0NEMWx2Wi81dzlHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFNFa3VEUFJzOHdxSFBGZmdyeURkdW0zZDFRUFhYUi9EZW5ZMWhibkRqND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTTFVbjFhd0djWTByZ25Jb3hKUW5TRHdiRC9tTDVCZ2lkdHNVMCtzclZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCOGpWaGo4anJ0NzhqUDlqVHJTL3VWcVNvbTUzZkNsOHFjYkx2SzVGakc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktINEVsandGd1kyR0tBOHBwM0pQbGcxVTZJaWcrVUtRRnhCNWYyRnZPM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxEYUFYTEtTK1BNOWEzSWxVRjB5Z3llaGJWZjBHVWdGb2JCbyt2a1ZUQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0V6aEhsclowZGlpK1ZCL0ZSV3ZYaHh4TzRvenRkY3BvYWQ3ZTBoVnJrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFBLOUYvMW1jZnRscC9aa2dHRS9SY2V4M09rQlZFTTVzcGZ6UUJyeS9qRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRhcVBjWVg2NFdJU3hxOVNLVHVFbFVYYlpsZEhpVUtSOWUxMHc3Mm5xeEpvNHRmWXVTQzVrekEzU1dOVldnUGltOEtkb0JoSTFtOVlWaUNwN0Z4R2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IjNJZWJ6UDlWKzJuSGR6SWo1WTFkVmRZUnhqYmk4OXhvT1U0ajNoNGJtcE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDEwNzMwMzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEY1QkE0OEFFQjA1NEE4MzRDRjkzOUY5NTY2RjJCMjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDYyNzI3MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDEwNzMwMzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjdGRDBGODBENkZCMDVDMDIyQzkzNzhBRDlCQkNBOTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDYyNzI3MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYVBockVfTmJUZWk5MW82SkhJQzBtZyIsInBob25lSWQiOiI0ZDExOTNiYy02ZDhhLTQ5NzUtYWQxMy1jMzFhMGVjYjI1YzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnpMSVJjQ0g0R1VFcXI1TlJjRHNjZXpRRnhjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMzYWVMRlZjNEZlbDFLNlZmZ3JjYXY1QzJlQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzMllNNTdGNSIsIm1lIjp7ImlkIjoiOTQ3MDEwNzMwMzc6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUFJPSkVDVCA0MDQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0puVzY2a0ZFTGJndXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFRQTlZa3BvU3krd0dabjd6RjVOVG1JM0FLbnpWVEZpZTRlZ0xBSlBNVzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJrdktRWC9VbUc5TWtPdUp4eUdiSEc4dmN0b29uUTJ1dXRFUHZ1U05nWk8waU1OVXl0YWU2a0EwTVNXVkdCS0ZCV21IVlBHUUhzWk5Ea1JKR3h3SkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrZVJtTGJrZExlTWw5Wjl0V2ZiYXkwUVBya3lIS2FEWHBvK1o2VzRPaGZRcjlXZEZ0Uk5WanZMOGRIWTF4c0N5WVdCUDdzZ2hXNnduaHdOR25CL2dqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxMDczMDM3OjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVFQVBXSkthRXN2c0JtWis4eGVUVTVpTndDcDgxVXhZbnVIb0N3Q1R6RnYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2MjcyNjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzBEIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴍɪʜɪʀᴜᴋ ᴏꜰᴄ",
  author: process.env.PACK_AUTHER || "Mihiruk",
  packname: process.env.PACK_NAME || "MIHIRUK-MD COMING SOON",
  botname: process.env.BOT_NAME || "•ᴍᴀꜱᴛᴇʀ-ᴍᴅ•",
  ownername: process.env.OWNER_NAME || "MR MIHIRUK",
  errorChat: process.env.ERROR_CHAT || "94720797915",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
