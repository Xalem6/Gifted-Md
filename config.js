//GIFTED-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.devs = "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.owner = process.env.OWNER_NUMBER || "254741360958";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0d4VzRJd3RhYnVTMVU4ckg4aGJJbGZGTkhJbE9RYk13TDBNTGNmaEQyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2NaL2YvSEY5SGFzUDdxWW92SWZoWG9vdllkTWlXRVBSaVRkaU1GZnJIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQ3ZXQVdrVHBmK3ZIQnlKQWVNSEFrMXdocVREMHZrNnp3V0lrZHhEUm5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QVJoT3lQV1hxZlI4VDdZM2pQd083YlRiVVBVdEFZYVVWRlpVelNGZWx3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZENmxDRWVaUnhMMDNzMEs1VithQlY1N2NBSGszVThQK3c0Tk9UQllLR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIyM25tWEpsMjR3WXFCbkJ1aHBLTTlXMmIva2xocTJvNnZUWVVmNEFaMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUExZGVyRGlveExROTI0WVRaaVkvZXo5U1h3NXpQZjh5TDJGemhVNzZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFBXTEwxRi9taXRXOXo2MWlLZ2RiNXZhYmV3dkQvd0tsT1NyLzgveXpoND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF6M2U5MjIvQS9pTmxFVXJHMFJYRGRNaGxCQWNkZ01FRVBtZVJodDZ3ZkUyZDlIaGp5NDQwV1orS3hpWERWV280R1NGUDFhdFpKdThNNVpNUTlSbUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IjJJUDkydmkxYjZsV1JBMXhmTFNKY1pQdGRIR0R2T0hyQnFRK0NXQ24rdVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzYyNDY5MjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRFRTQzN0E1QkE0RTFCMkFDNDBGMzUwMDZENkJDNzM2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTUzOTYyOTR9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilc4V2dlcWF3U3BhY2J0NW53djd5b1EiLCJwaG9uZUlkIjoiOWY4YmMwM2EtY2ZlOC00NmM4LTgzZmMtZjBmNjJkMzM4YTFmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl5RVlJOE93cFFWSjkySmNnNGxuRG1HaC90Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrYm1QTXJuU3BsdWgwTWlNTWNtVE5NaldJRTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1dUNkg2VEIiLCJtZSI6eyJpZCI6IjI1NDc2MjQ2OTIyOTo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IldhcmlkafCfjYPwn4y0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNlpxLzBHRUxXOSs3RUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvNjFiWTkyUzdLNk9oYUE4OW4rSDR6TmsyWnVVcHF5a0ZkQlFEQWJoeXhnPSIsImFjY291bnRTaWduYXR1cmUiOiJMREwyd3dPRnNKcjZ2WGZPUnVka2NYYmhhTUNEdVpaL0k2VGRjNVBodzgrL3ByeDV5Q1RGdUxBRHlJTnFWK2JqaXpCSWU5eTN5SFJpZEN0YnRLVzBEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWXdKdG9rZVdaWnZjTGJwT2N6TkZHc0sxb1JYZExiWDd3dkxxNUZlNW5xQTZYYlZmN3JGb0hBYUNRR2pzdFZNMDBldU9haThZUm9FSFM0ZEwvWktGQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NjI0NjkyMjk6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhT3RXMlBka3V5dWpvV2dQUFovaCtNelpObWJsS2FzcEJYUVVBd0c0Y3NZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1Mzk2MjkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZDciJ9"
module.exports = {
  menu: process.env.MENU || "2", /*Leave to Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*",
  author: process.env.PACK_AUTHER || "Gifted Tech",
  packname: process.env.PACK_NAME || "Gifted-Md♥️",
  botname: process.env.BOT_NAME || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
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
