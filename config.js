const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masterhelper@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mihirukdilshan1:qTnAIbaBjri0GQvD@cluster0.djsffwt.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "94720797915@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWWZa1G3R3c4TPADo0M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2368f1b5d6ff724ae0c51.jpg";
global.devs = "94766969406";
global.sudo = process.env.SUDO || "94778764083,94766969406";
global.owner = process.env.OWNER_NUMBER || "94778764083";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUU3Y2dhcXptUUxLRXRHb04zK29qSGNHc0J3c01GczZpVGhmSjYwZHdWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmhBeUU1amJPRCtvaGRuYnlGNGs4QTNqYkFCeWZHLzFVNzNjU2hYRzh6RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQktGTVB5N2ZLVnd2VVl6WW12MVhUQWdUTjF5eUNwSW42MnFaVUtDSzJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRaGVsNmpoZTlhMEM0UnZLWjdod29QbjUrZlNxTm9sc2lwTXg3S1ZzakFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHR3htSkVuUjNiMUg5NEM5MjU2aE9XK2NFcDJrMnVmWUVvSmI3bDZrMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5xZFFJRDl0dDgxSXM2dW50MzZSWTBhK2p6dTdFYklBSGhWZFREaHhLR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0htNVFKR2JTQW9vb0pnVk0ya0t2cVB3NWQ0MndEc1ZHY2FHUlFnUkxWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWRwbFR2MVU4d2kyNExielY2Z2tMcWp3S2ZzNy9wdXZ0cVBvMmNnVTVraz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLVTVJL21QdGZjOWRFZ0NZSzNjU0dtQVBMOTJUYzd6a045K1N5TkVVNmo5c2NQSGUvUlJ4ZmNjUnpZeTBReWxRTE9XcTN1bllIOUZWZjA3REV3RkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJMa0JlUUszckhURXRRaXBhMU4yUU9tVVNFZCtHRVpGQXNRWUxzZERKV01nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4NzY0MDgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhCNkY4MTFDMEQ5ODU4MDJGQURFOUJFNTA1MzQ3NkIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA3NzMyNTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijh2U2VVT0hvVDU2UjQtWUJsVGVZWmciLCJwaG9uZUlkIjoiYWM3YzJmMDktM2QzMC00YTk3LWEwOWYtZDU0M2RhNDlhZWZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRkNmY4Mmt5cTFwdWk0bjNVZFVLYis3VnFYND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOS3hDbzNHNXdUanJaNkUvMTFCL3d6QW5Sa0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0tLS1NQRTYiLCJtZSI6eyJpZCI6Ijk0Nzc4NzY0MDgzOjM0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON1hxWjBERVBMVXc3UUdHQ0FnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQRHR0TXViVzV4VjZSc0ZQeDlaeG5xbGJxcWk2ZmdCNmh6a0M4d3hLdXlJPSIsImFjY291bnRTaWduYXR1cmUiOiJLdjFMUVFpZXJmcThDbWVQVVMvc2d2OTBtSUxlOHp2VENBMlJic25TNmZxMU5ZSDNqd1NmN1Z2a2dKUmgralZldXVqUlQwOFpaR0syR2tjTWsvR2dDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXBzbUNmVFJOa3RBeUxxN3VIYjI1WW1iMFprRGFhTnNhTUdBVnZBODFnYnV0dkdjVWp2TldMSlB2cWdCemRqU2RGUEsrVStXN0N0eGxhNjVWNG03QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3ODc2NDA4MzozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUdzdiVExtMXVjVmVrYkJUOGZXY1o2cFc2cW91bjRBZW9jNUF2TU1TcnNpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNzczMjQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9TOCJ9"
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
