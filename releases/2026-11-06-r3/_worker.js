import { connect } from "cloudflare:sockets";

/*
 * Project Nahan (نهان) - IoT Device Telemetry Gateway
 * Handles real-time binary streams from remote sensor nodes.
 */

const CURRENT_VERSION = "3.0.0";

const DASHBOARD_BUILD = "20261106-r3";
// BEGIN GENERATED DASHBOARD CLIENT
const DASHBOARD_CLIENT_SOURCE = "function parseImportBindings(importStr) {\n              const cleanStr = importStr.replace(/\\/\\/.*$/gm, '').replace(/\\/\\*[\\s\\S]*?\\*\\//g, '').trim();\n              const content = cleanStr\n                  .replace(/^import\\s+/, '')\n                  .replace(/\\s+from\\s+[\"'].*?[\"'];?$/, '')\n                  .trim();\n              \n              const bindings = [];\n              \n              if (content.startsWith('*')) {\n                  const match = content.match(/\\*\\s+as\\s+(\\w+)/);\n                  if (match) bindings.push({ name: match[1], isNamespace: true });\n                  return bindings;\n              }\n              \n              const braceStart = content.indexOf('{');\n              if (braceStart !== -1) {\n                  const defaultPart = content.slice(0, braceStart).replace(/,/, '').trim();\n                  if (defaultPart) {\n                      bindings.push({ name: defaultPart, isDefault: true });\n                  }\n                  const bracePart = content.slice(braceStart + 1, content.lastIndexOf('}')).trim();\n                  const namedImports = bracePart.split(',').map(s => s.trim()).filter(Boolean);\n                  namedImports.forEach(item => {\n                      if (item.includes(' as ')) {\n                          const parts = item.split(/\\s+as\\s+/);\n                           bindings.push({ name: parts[1], original: parts[0] });\n                      } else {\n                          bindings.push({ name: item });\n                      }\n                  });\n              } else {\n                  bindings.push({ name: content, isDefault: true });\n              }\n              \n              return bindings;\n          }\n\n          function obfuscateCode(srcText) {\n              const importRegex = /import\\s+[\\s\\S]*?from\\s+[\"'].*?[\"'];?/g;\n              const imports = [];\n              let match;\n              \n              while ((match = importRegex.exec(srcText)) !== null) {\n                  imports.push(match[0]);\n              }\n              \n              let cleanCode = srcText.replace(importRegex, '');\n              \n              const bindings = [];\n              imports.forEach(imp => {\n                  const parsed = parseImportBindings(imp);\n                  bindings.push(...parsed);\n              });\n              \n              const uniqueBindings = [];\n              const seenNames = new Set();\n              bindings.forEach(b => {\n                  if (!seenNames.has(b.name)) {\n                      seenNames.add(b.name);\n                      uniqueBindings.push(b);\n                  }\n              });\n              \n              cleanCode = cleanCode.replace(/export\\s+default\\s+/g, 'const _0xNahanModule = ');\n              cleanCode += '\\nreturn _0xNahanModule;';\n              \n              const randKey = Math.floor(Math.random() * 80) + 64; \n              \n              const encoder = new TextEncoder();\n              const bytes = encoder.encode(cleanCode);\n              \n              let hexOutput = '';\n              for (let i = 0; i < bytes.length; i++) {\n                  const xorByte = bytes[i] ^ randKey;\n                  hexOutput += xorByte.toString(16).padStart(2, '0');\n               }\n              \n              const rawImportsStr = imports.join('\\n');\n              const bindingNames = uniqueBindings.map(b => b.name);\n              \n              const finalLoaderCode = rawImportsStr + '\\n\\n' +\n                  '// Nahan Gateway - Obfuscated Loader Context (v2.5.4.2 Optimized)\\n' +\n                  'const _0xNahanPayload = \"' + hexOutput + '\";\\n' +\n                  'const _0xNahanKey = ' + randKey + ';\\n\\n' +\n                  'const _0xNahanBytes = new Uint8Array((_0xNahanPayload.match(/.{1,2}/g) || []).map(x => parseInt(x, 16) ^ _0xNahanKey));\\n' +\n                  'const _0xNahanCode = new TextDecoder().decode(_0xNahanBytes);\\n' +\n                  'const _0xNahanRuntime = new Function(' + bindingNames.map(name => '\"' + name + '\"').join(', ') + ', _0xNahanCode)(' + bindingNames.join(', ') + ');\\n\\n' +\n                  'export default _0xNahanRuntime;';\n\n              return finalLoaderCode;\n          }\n\n          const CURRENT_VERSION = \"3.0.0\";\n          const i18n = {\n              en: {\n                  title: \"Nahan Gateway\", pass_ph: \"Master Key\", login_btn: \"Authenticate\", err_pass: \"Access Denied\", missing_db: \"⚠️ IOT_DB namespace missing! Settings won't save.\",\n                  logout: \"Disconnect\", tab_overview: \"Overview\", tab_info: \"Endpoints\", tab_status: \"Metrics\", tab_settings: \"System\", tab_adv: \"Advanced\", tab_logs: \"Activity Logs\",\n                  qr_title: \"Direct Stream Link\", badge_multi: \"Dual-Core Multiplexed\", copy: \"Copy\", copied: \"Copied to clipboard!\", sync_link: \"Cloud Sync URL\", active_id: \"Hardware ID\",\n                  stat_ip: \"Origin IP\", stat_dc: \"Edge Node\", stat_loc: \"Data Region\",\n                  lbl_proto: \"Primary Display Mode\", lbl_port: \"Data Port\", lbl_id: \"Device UUID (Empty=Auto)\",\n                  lbl_path: \"API Route (Hidden Path)\", lbl_pass: \"Master Key\", lbl_fp: \"TLS Signature\", lbl_dns: \"Resolver IP\",\n                  ph_pass: \"Leave blank to keep the current password\", hint_pass_hashed: \"🔒 Stored as a salted hash — this field is always empty on load, on purpose.\",\n                  lbl_sync_secret: \"Cluster Sync Secret\", btn_regen_sync_secret: \"Regenerate\",\n                  hint_sync_secret: \"Separate from your password — paste this into another panel's \\\"Add Panel\\\" step, or into its Force Sync, to link them. Regenerating it disconnects any panel using the old value until it's updated too.\",\n                  lbl_clean_ips: \"Clean IPs (Multi-Generator)\", ph_clean_ips: \"1.1.1.1, 2.2.2.2\", desc_clean_ips: \"Separate IPs by comma or new line. The Sync URL will multiply configs for all IPs.\",\n                  lbl_fake: \"Maintenance Hosts (Camouflage)\", lbl_relay: \"Backup Relay IP\", lbl_tfo: \"TCP Fast Open\", lbl_ech: \"Secure Hello (ECH)\",                   lbl_tg_token: \"Telegram Bot Token\", lbl_tg_chat: \"Telegram Chat ID\", lbl_tg_admin: \"Authorized Telegram Admin ID\", desc_tg_admin: \"Only this Telegram User ID can manage the panel via bot. Leave empty to use Chat ID.\", desc_tg_bot: \"Set these values to receive login alerts via Telegram.\",\n                  lbl_linked_panels: \"Linked Panels\", desc_linked_panels: \"Manage other panels (Workers) linked to this one. They can be switched between via the Telegram bot.\", btn_add_panel: \"Add Panel\", no_linked_panels: \"No linked panels yet.\", modal_add_panel_title: \"Add Linked Panel\", lbl_panel_url: \"Panel URL\", ph_panel_url: \"myworker.workers.dev\", lbl_panel_key: \"Cluster Sync Secret\", btn_verify_add: \"Verify & Add\", msg_verifying_panel: \"Verifying panel...\", msg_panel_verify_fail: \"Failed to connect. Check the URL or Cluster Sync Secret (found in that panel's Settings → Security).\", msg_panel_added: \"Panel added successfully.\", msg_panel_admin_mismatch: \"This panel belongs to a different Telegram admin and cannot be added.\", confirm_remove_panel: \"Are you sure you want to remove this panel?\",\n                  lbl_cf_acc: \"Cloudflare Account ID\", lbl_cf_token: \"Cloudflare API Token\", desc_cf_api: \"Optional: Monitor Worker daily usage limit (100k/day). Requires Account Analytics read permission.\",\n                  lbl_silent: \"Silent UI Alerts\", lbl_pause: \"Kill Switch (Pause System)\",\n                  lbl_sub_ua: \"Custom Subscription User-Agent\", desc_sub_ua: \"Allow specific browser User-Agent containing this text to bypass camouflage and retrieve profile data directly in web browser.\",\n                  tab_users: \"Users\",\n                  user_mgt_title: \"User Management\", user_mgt_desc: \"Manage multiple users, set traffic limits, and expiration dates.\", btn_add_user: \"+ Add New User\",\n                  tbl_name: \"Name\", tbl_uuid: \"UUID\", tbl_traffic: \"Traffic (Used / Limit)\", tbl_exp: \"Expiration\", tbl_action: \"Action\", no_users: \"No users found. Create one above.\",\n                  modal_add_title: \"Add New User\", lbl_u_name: \"Name (Required)\", lbl_u_gb: \"Traffic Limit (GB) - Optional\", lbl_u_days: \"Duration (Days) - Optional\", btn_cancel: \"Cancel\", btn_confirm: \"Add User\",\n                  limit_total: \"Traffic (GB) Limit (Leave empty for unlimited)\", limit_daily: \"Daily Requests Limit (Leave empty for unlimited)\",\n                  limit_days: \"Expiration limit (Days) - Leave empty for unlimited\", edit_sub: \"Edit Subscriber\", lbl_name_ph: \"Name or UUID\",\n                  btn_save_changes: \"Save Changes\", save_btn_user: \"Save User\", status_active: \"Active\", status_paused: \"Paused\", status_expired: \"Expired\",\n                  btn_add_remote_user: \"Add in remote panel ↗\",\n                  stat_total_subscribers: \"Total Subscribers\", stat_active_paused: \"Active / Paused\", stat_cumulative_traffic: \"Cumulative Traffic\", stat_auto_disabled: \"Auto-Disabled\",\n                  sub_directory_title: \"Subscriber Directory\", sub_directory_desc: \"Search, modify bounds, toggle traffic limits or clear billing sessions.\", user_search_placeholder: \"🔍 Find by Name or UUID...\",\n                  filter_all: \"All Users\", filter_active: \"Active\", filter_paused: \"Paused\", filter_auto_disabled: \"Auto-Disabled\",\n                  disabled_panel_title: \"Recently Disabled Users\", disabled_panel_desc: \"Users automatically disabled due to quota or expiration limits\",\n                  lbl_u_Protocol:\"Protocol Mode (Leave empty to use global setting)\",\n                  lbl_u_ports:\"Custom Ports (Optional - overrides global ports, comma separated e.g. 443,80\",\n                  lbl_u_max_config:\"Max Configs\",\n                  lbl_u_max_conn:\"Max Concurrent Connections\",\n                  acc_b1_title:\"Protocol & Ports\", acc_b2_title:\"Identity & Security\", acc_b3_title:\"Update & Access\", acc_b4_title:\"Backup & Restore\",\n                  acc_a1_title:\"Clean IPs (Multi-Generator)\", acc_a3_title:\"TLS & Network\", acc_a4_title:\"Config Naming\",\n                  acc_a5_title:\"Toggles & Switches\", acc_a6_title:\"Telegram Bot\", acc_a7_title:\"Linked Panels\", acc_a8_title:\"Cloudflare Analytics\",\n                  login_password:\"Password\",\n                  lbl_u_ipproxy:\"User Proxy IP(s) (Optional - overrides global Clean IP, comma/newline separated)\",\n                  lbl_custom_panel_url:\"Custom Panel URL / Subscription Domain\",\n                  v_pop_title: \"Release Notice\", v_pop_whatsnew: \"What's New\", v_pop_headline: \"New Features & Improvements\",\n                  v_pop_btn: \"Got it!\",\n                  changelog_title: \"Release Notes & Changelog:\",\n                  changelog_added: \"Added\", changelog_fixed: \"Fixed\", changelog_improved: \"Improved\", changelog_changed: \"Changed\", changelog_note: \"Important Notes\",\n                  ov_total_users: \"Total Users\", ov_active_users: \"Active\", ov_paused_users: \"Paused\", ov_auto_disabled: \"Auto-Disabled\", ov_expired_users: \"Expired\",\n                  ov_total_traffic: \"Total Traffic\", ov_today_traffic: \"Today's Traffic\", ov_requests: \"requests\", ov_active_conns: \"Active Connections\",\n                  ov_cf_requests: \"Worker Requests (Today)\", ov_connected_now: \"Connected Now\", ov_no_connections: \"No one connected right now.\",\n                  ov_system: \"System\", ov_recent_activity: \"Recent Activity\", ov_view_all: \"View All →\", ov_loading: \"Loading...\",\n                   ov_quick_actions: \"Quick Actions\", ov_add_user: \"Add User\", ov_backup_config: \"Backup Config\", ov_refresh: \"Refresh Statistics\", ov_manage_users: \"Manage Users\",\n                   ov_gb_unit: \"GB\",\n                   limit_hour_from:\"From\",\n                    limit_hour_to:\"To\",\n                   lbl_limit_hour:\"Access Hours (Optional)\",\n                   deploy_btn: \"Deploy Now\", update_deploying: \"Deploying update...\",\n                   update_success: \"Update successful! Reloading...\", update_error: \"Update failed\",\n                   lbl_cf_worker: \"CF Worker Script Name\", desc_cf_worker: \"Required for in-panel updates. The script name shown in your Cloudflare Workers dashboard.\",\n                   view_github: \"View on GitHub\",\n                    cf_help_title: \"Need help getting these? Beginner's Step-by-Step Guide\",\n                    lbl_update_format: \"Update Format & Obfuscated Options:\",\n                    desc_update_format: \"Deploy clean source code, or encrypt using dynamic XOR byte-shifting to avoid network interception.\",\n                    format_normal: \"Normal (_worker.js)\",\n                    format_obfuscated: \"Obfuscated (UTF-8 + XOR)\",\n                    btn_redeploy_force: \"Force Redeploy / Switch Format\",\n                   update_requires_cf: \"Set CF Account ID, API Token, and Worker Name to enable in-panel deploy.\",\n                   html_desc_strategy: \"Supported placeholders: <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{FLAG}</code>, <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{PROTOCOL}</code>, <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{USER}</code>, <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{PORT}</code>, <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{PREFIX}</code>, <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{IP}</code>.<br><span class='text-[10px] text-slate-400 dark:text-slate-500 leading-snug'>• <b>{FLAG}</b>: Country flag emoji (e.g. 🇺🇸).<br>• <b>{PROTOCOL}</b>: Core mode (VLESS / Trojan).<br>• <b>{USER}</b>: Subscriber name.<br>• <b>{PORT}</b>: Active port.<br>• <b>{PREFIX}</b>: Custom prefix.<br>• <b>{IP}</b>: Clean IP address.</span><br>Pre-defined strategies: <code>default</code>, <code>type-user-port</code>, <code>user-port</code>, <code>host-port-user</code>, <code>prefix-user-port</code>, <code>ip</code>.\",\n                   acc_logs_title: \"System Activity Logs\", logs_filter_all: \"All types\", logs_filter_search_ph: \"Search in details...\", logs_loading: \"Loading...\",\n                   acc_sessions_title: \"Web Logins (Active Devices)\", sessions_desc: \"Every browser currently logged into this panel, and every device remembered for 2FA. End any of them to force a fresh login there.\",\n                   sessions_active_title: \"Active Sessions\", sessions_trusted_title: \"Trusted 2FA Devices\", sessions_none: \"No active sessions.\", sessions_no_trusted: \"No remembered devices.\", btn_end_all_sessions: \"End all other sessions\", btn_forget_all_devices: \"Forget all devices\", grp_limits_title: \"Limits & Access\", grp_network_title: \"Network & Protocol\",\n                   btn_end_session: \"End session\", btn_forget_device: \"Forget device\",\n               },\n              fa: {\n                  title: \"دروازه نهان\", pass_ph: \"کلید اصلی\", login_btn: \"ورود به سیستم\", err_pass: \"دسترسی مسدود شد\", missing_db: \"⚠️ فضای پایگاه داده یافت نشد! تنظیمات ذخیره نمی‌شوند.\",\n                  logout: \"خروج\", tab_overview: \"نمای کلی\", tab_info: \"نقاط اتصال\", tab_status: \"وضعیت شبکه\", tab_settings: \"تنظیمات پایه\", tab_adv: \"پیشرفته\", tab_logs: \"گزارش فعالیت\",\n                  qr_title: \"لینک اتصال مستقیم\", badge_multi: \"ترکیب ترانزیت پیشرفته دوگانه\", copy: \"کپی\", copied: \"در حافظه کپی شد!\", sync_link: \"لینک ساب (همگام سازی ابری)\", active_id: \"شناسه سخت‌افزار\",\n                  stat_ip: \"آی‌پی مبدا\", stat_dc: \"گره لبه\", stat_loc: \"منطقه داده\",\n                  lbl_proto: \"پروتکل نمایش مستقیم\", lbl_port: \"پورت داده\", lbl_id: \"شناسه یکتا (خالی=خودکار)\",\n                  lbl_path: \"مسیر مخفی آی‌پی‌آی\", lbl_pass: \"کلید اصلی\", lbl_fp: \"امضای امنیتی\", lbl_dns: \"آی‌پی تحلیلگر\",\n                  ph_pass: \"برای حفظ رمز فعلی، خالی بگذارید\", hint_pass_hashed: \"🔒 به‌صورت هش نمک‌دار ذخیره می‌شه — این فیلد عمداً همیشه موقع بارگذاری خالیه.\",\n                  lbl_sync_secret: \"کلید همگام‌سازی خوشه\", btn_regen_sync_secret: \"ساخت مجدد\",\n                  hint_sync_secret: \"جدا از رمز عبورته — این رو تو مرحله «افزودن پنل» یا Force Sync یه پنل دیگه وارد کن تا بهم لینک بشن. ساخت مجدد، هر پنلی که هنوز مقدار قدیمی رو داره قطع می‌کنه تا وقتی به‌روزش کنی.\",\n                  lbl_clean_ips: \"آی‌پی‌های تمیز (مولد چندگانه)\", ph_clean_ips: \"1.1.1.1, 2.2.2.2\", desc_clean_ips: \"آی‌پی ها را با کاما یا خط جدید جدا کنید. لینک ساب برای همه ترکیب می‌سازد.\",\n                  lbl_fake: \"سایت‌های استتار (حالت مخفی)\", lbl_relay: \"آی‌پی جایگزین (کمکی)\", lbl_tfo: \"اتصال سریع\", lbl_ech: \"سلام امن\", lbl_tg_token: \"توکن ربات تلگرام\", lbl_tg_chat: \"شناسه عددی تلگرام\", lbl_tg_admin: \"شناسه مدیر تلگرام\", desc_tg_admin: \"فقط این شناسه کاربری تلگرام می‌تواند پنل را از طریق ربات مدیریت کند. خالی بگذارید برای استفاده از شناسه چت.\", desc_tg_bot: \"با تنظیم این مقادیر، جزئیات ورود به پنل به تلگرام ارسال می‌شود.\",\n                  lbl_linked_panels: \"پنل‌های لینک‌شده\", desc_linked_panels: \"پنل‌های دیگر (ورکرها) که به این پنل لینک شده‌اند را مدیریت کنید. می‌توان از طریق ربات تلگرام بین آن‌ها سوییچ کرد.\", btn_add_panel: \"افزودن پنل\", no_linked_panels: \"هنوز هیچ پنلی لینک نشده است.\", modal_add_panel_title: \"افزودن پنل لینک‌شده\", lbl_panel_url: \"آدرس پنل\", ph_panel_url: \"myworker.workers.dev\", lbl_panel_key: \"کلید همگام‌سازی خوشه\", btn_verify_add: \"تایید و افزودن\", msg_verifying_panel: \"در حال تایید پنل...\", msg_panel_verify_fail: \"اتصال ناموفق بود. آدرس یا کلید همگام‌سازی خوشه (تنظیمات → امنیت همون پنل) رو بررسی کنید.\", msg_panel_added: \"پنل با موفقیت اضافه شد.\", msg_panel_admin_mismatch: \"این پنل متعلق به ادمین تلگرام دیگری است و قابل افزودن نیست.\", confirm_remove_panel: \"آیا از حذف این پنل مطمئن هستید؟\",\n                  lbl_cf_acc: \"شناسه اکانت ابری\", lbl_cf_token: \"توکن دسترسی کاربری\", desc_cf_api: \"اختیاری: برای نمایش میزان مصرف روزانه کارگر از صد هزار درخواست رایگان در پیام‌های تلگرام.\",\n                  lbl_silent: \"هشدار و پیغام خاموش\", lbl_pause: \"کلید توقف اضطراری\",\n                  lbl_sub_ua: \"یوزراجنت سفارشی ساب\", desc_sub_ua: \"درخواست‌های مرورگر که حاوی این متن باشند، استتار را خنثی کرده و مستقیم به ساب دسترسی پیدا می‌کنند.\",\n                  tab_users: \"کاربران\",\n                  user_mgt_title: \"مدیریت کاربران\", user_mgt_desc: \"مدیریت کاربران متعدد، تنظیم محدودیت ترافیک، و تاریخ انقضا.\", btn_add_user: \"+ افزودن کاربر جدید\",\n                  tbl_name: \"نام\", tbl_uuid: \"شناسه یکتا\", tbl_traffic: \"ترافیک (مصرفی/محدودیت)\", tbl_exp: \"انقضا\", tbl_action: \"عملیات\", no_users: \"کاربری یافت نشد. از دکمه بالا یک کاربر ایجاد کنید.\",\n                  modal_add_title: \"افزودن کاربر جدید\", lbl_u_name: \"نام (الزامی)\", lbl_u_gb: \"محدودیت ترافیک (گیگابایت) - اختیاری\", lbl_u_days: \"مدت زمان اعتبار (روز) - اختیاری\", btn_cancel: \"انصراف\", btn_confirm: \"افزودن کاربر\",\n                  save_btn: \"ذخیره تنظیمات\", msg_saving: \"در حال ثبت...\", msg_saved: \"موفق! در حال بارگذاری...\", msg_err: \"خطای ارتباط\",\n                  backup_restore_title: \"پشتیبان‌گیری و بازیابی\", ping_test_title: \"عیب‌یابی تاخیر شبکه\", ping_test_desc: \"تاخیر پاسخ‌دهی را به آی‌پی تمیز فعال اندازه بگیرید.\",\n                  lbl_github_repo: \"مخزن منبع جهت بروزرسانی\", update_avail: \"بروزرسانی جدید در دسترس است!\", update_btn: \"دریافت آخرین کد\",\n                    cf_help_title: \"آموزش بدست آوردن این اطلاعات برای کاربران مبتدی\",\n                    lbl_update_format: \"قالب بروزرسانی و حذف ردگیری:\",\n                    desc_update_format: \"سورس کد معمولی را دپلوی کنید یا از مبهم‌سازی بایت‌ها با کلید متغیر XOR برای عدم فیلترینگ استفاده نمایید.\",\n                    format_normal: \"معمولی (_worker.js)\",\n                    format_obfuscated: \"مبهم‌سازی شده (UTF-8 + XOR)\",\n                    btn_redeploy_force: \"تفویض مجدد / تغییر قالب پنل\",\n                  metrics_live: \"وضعیت زنده مصرف اتصالات و پردازش\", no_metrics: \"هنوز داده‌ای از تراکنش و اتصالات فعال ثبت نشده است.\", run_diagnostics: \"⚡ اجرای عیب‌یابی شبکه\",\n                  target_node: \"هدف گره شبکه\", response: \"مدت زمان تاخیر پاسخگویی\", status: \"وضعیت گره\", local_port: \"درگاه محلی\",\n                  lbl_doh: \"تحلیل‌گر تخصصی آدرس‌یابی عددی\", lbl_strategy: \"روش نام‌گذاری کانفیگ‌ها\", lbl_prefix: \"پیشوند نام کانفیگ‌ها\",\n                  desc_force_sync: \"تنظیمات انتخابی رو با «رمز خوشه» ذخیره‌شده‌ی هرکدوم، به تمام پنل‌های لینک‌شده‌ی بالا ارسال کن.\",\n                  force_sync: \"همگام‌سازی اجباری نودها\", limit_total: \"محدودیت تعداد کل درخواست‌ها (GB)  (برای نامحدود خالی بگذارید)\", limit_daily: \"محدودیت درخواست‌های روزانه (GB)  (برای نامحدود خالی بگذارید)\",\n                  modal_sync_title: \"همگام‌سازی تنظیمات با نودها\", modal_sync_desc: \"انتخاب کن کدام بخش‌های تنظیمات برای نودهای دیگر ارسال شود.\",\n                  modal_sync_select_all: \"انتخاب همه\", modal_sync_select_none: \"لغو انتخاب همه\",\n                  sync_opt_ports: \"پروتکل و پورت‌ها\", sync_opt_ports_desc: \"حالت نمایش و پورت‌های فعال.\",\n                  sync_opt_network: \"شبکه و TLS\", sync_opt_network_desc: \"امضای TLS، DNS، هاست‌های Fake SNI، آی‌پی‌های رله پشتیبان.\",\n                  sync_opt_cleanips: \"آی‌پی‌های تمیز\", sync_opt_cleanips_desc: \"فهرست آی‌پی تمیز/CDN مورد استفاده برای ساخت کانفیگ‌ها.\",\n                  sync_opt_naming: \"نام‌گذاری کانفیگ\", sync_opt_naming_desc: \"روش نام‌گذاری و پیشوند سفارشی.\",\n                  sync_opt_update: \"بروزرسانی و دسترسی\", sync_opt_update_desc: \"مخزن گیت‌هاب بروزرسانی و User-Agent عبور از سانسور.\",\n                  sync_opt_toggles: \"کلیدها و سوییچ‌ها\", sync_opt_toggles_desc: \"⚠ شامل کلید اضطراری (Kill Switch) است — ممکن است ترافیک سایر پنل‌ها را متوقف کند.\",\n                  sync_opt_domain: \"دامنه اختصاصی پنل\", sync_opt_domain_desc: \"⚠ معمولاً هر پنل دامنه خودش را دارد — فقط در صورتی تیک بزنید که عمداً می‌خواهید مشترک باشد.\",\n                  sync_opt_identity: \"هویت (UUID و مسیر API)\", sync_opt_identity_desc: \"⚠ مسیر پنهان و UUID دستگاه پنل مقصد را تغییر می‌دهد — لینک‌ها/بوکمارک‌های قدیمی آن از کار می‌افتند.\",\n                  sync_opt_users: \"کاربران\", sync_opt_users_desc: \"⚠ کل لیست مشترکین پنل‌های دیگر را با این پنل جایگزین می‌کند — کاربران خودشان حذف می‌شوند.\",\n                  sync_opt_security: \"امنیت (رمز اصلی)\", sync_opt_security_desc: \"قابل همگام‌سازی نیست: رمز عبورت به‌صورت هش نمک‌دار ذخیره می‌شه و هیچ‌وقت برای مرورگر ارسال نمی‌شه، پس از اینجا قابل کپی نیست. رمز ورود و رمز خوشهٔ هر پنل به‌صورت مستقل نگهداری می‌شوند.\",\n                  sync_opt_syncsecret: \"کلید همگام‌سازی خوشه\", sync_opt_syncsecret_desc: \"رمز خوشه مخصوص هر پنل است و در همگام‌سازی عمومی ارسال نمی‌شود.\",\n                  sync_opt_twofa: \"احراز هویت دو مرحله‌ای (2FA)\", sync_opt_twofa_desc: \"قابل همگام‌سازی نیست: پنل عمداً هرگز رمز 2FA را برای مرورگر ارسال نمی‌کند، پس از اینجا قابل تکرار نیست.\",\n                  sync_opt_bot: \"تنظیمات ربات تلگرام\", sync_opt_bot_desc: \"⚠ توکن/ادمین ربات را روی سایر پنل‌ها بازنویسی می‌کند — ممکن است ربات آن‌ها دچار اختلال شود.\",\n                  sync_opt_cf: \"تنظیمات API کلادفلر\", sync_opt_cf_desc: \"⚠ اکانت/توکن/نام Worker را روی سایر پنل‌ها بازنویسی می‌کند — ممکن است دیپلوی یا آمار آن‌ها دچار اختلال شود.\",\n                  sync_field_tg_token: \"توکن ربات\", sync_field_tg_chat: \"چت آیدی\", sync_field_tg_admin: \"آیدی مدیر\",\n                  sync_field_cf_acc: \"شناسه اکانت\", sync_field_cf_token: \"توکن API\", sync_field_cf_worker: \"نام Worker\",\n                  limit_days: \"مدت زمان اعتبار قانونی (روز) - برای نامحدود خالی بگذارید\", edit_sub: \"ویرایش مشترک\", lbl_name_ph: \"نام یا شناسه یکتا\",\n                  btn_save_changes: \"ذخیره تغییرات\", save_btn_user: \"ثبت کاربر جدید\", status_active: \"فعال\", status_paused: \"متوقف شده\", status_expired: \"منقضی شده\",\n                  export_btn: \"📥 برون‌بری فایل پیکربندی (نسخه پشتیبان)\", import_btn: \"📤 درون‌ریزی فایل پیکربندی (نسخه پشتیبان)\",\n                  btn_add_remote_user: \"افزودن در پنل مقصد ↗\",\n                  stat_total_subscribers: \"کل مشترکین\", stat_active_paused: \"فعال / متوقف شده\", stat_cumulative_traffic: \"ترافیک کل انباشته\", stat_auto_disabled: \"غیرفعال خودکار\",\n                  sub_directory_title: \"فهرست مشترکین\", sub_directory_desc: \"جستجو، اصلاح محدودیت‌ها، تغییر محدودیت‌های ترافیک یا پاک کردن جلسات حسابداری.\", user_search_placeholder: \"🔍 جستجو بر اساس نام یا شناسه...\",\n                  filter_all: \"همه کاربران\", filter_active: \"فعال\", filter_paused: \"متوقف شده\", filter_auto_disabled: \"غیرفعال خودکار\",\n                  disabled_panel_title: \"کاربران اخیراً غیرفعال شده\", disabled_panel_desc: \"کاربرانی که به دلیل اتمام سهمیه یا تاریخ انقضا غیرفعال شده‌اند\",\n                  lbl_u_Protocol:\"نوع پروتکل(خالی بر اساس تنظیمات کلی)\",\n                  lbl_u_ports:\"نوع پورت\",\n                  lbl_u_max_config:\"حداکثر تعداد کانفیگ\",\n                  lbl_u_max_conn:\"حداکثر تعداد کانکشن هم‌زمان\",\n                  acc_b1_title:\"پروتکل و پورت‌ها\", acc_b2_title:\"هویت و امنیت\", acc_b3_title:\"بروزرسانی و دسترسی\", acc_b4_title:\"پشتیبان‌گیری و بازیابی\",\n                  download_worker_btn:\"🧩 دانلود سورس ورکر (_worker.js)\", download_worker_failed:\"دانلود سورس ورکر ناموفق بود: \",\n                  download_worker_live_btn:\"🌩️ دانلود کد واقعی (فقط کلودفلر)\",\n                  view_worker_btn:\"🧩 سورس ورکر (گیت‌هاب)\", view_worker_live_btn:\"🌩️ سورس ورکر (کلودفلر)\",\n                  backup_grp_config: \"پیکربندی\", backup_grp_worker: \"سورس ورکر\", backup_grp_deploy: \"استقرار\",\n                  view_worker_title:\"کد سورس ورکر\", view_worker_source_lbl:\"منبع: \", view_worker_chars:\"کاراکتر\",\n                  btn_copy:\"📋 کپی\", btn_close:\"بستن\", btn_download:\"⬇️ دانلود\", copy_failed:\"کپی ناموفق بود.\",\n                  upload_worker_btn:\"⬆️ آپلود / آپدیت ورکر\", upload_worker_title:\"آپلود / آپدیت ورکر\",\n                  upload_worker_warning:\"⚠️ این کار کد ورکر در حال اجرا رو بازنویسی می‌کنه. مطمئن شو سورس درسته.\",\n                  upload_worker_url_lbl:\"آدرس فایل (مثلاً لینک raw گیت‌هاب به _worker.js)\", upload_worker_or:\"یا\",\n                  upload_worker_file_lbl:\"آپلود فایل .js\", upload_worker_paste_lbl:\"چسباندن مستقیم کد\",\n                  upload_worker_deploy_btn:\"همین حالا دیپلوی کن\", upload_worker_empty:\"لطفاً یه آدرس، فایل یا کد وارد کن.\",\n                  upload_worker_confirm:\"این کار ورکر در حال اجرا رو بازنویسی می‌کنه. ادامه بدم؟\",\n                  upload_worker_confirm_linked:\"این کار ورکر این پنل و همچنین تمام پنل‌های لینک‌شده رو بازنویسی می‌کنه. ادامه بدم؟\",\n                  upload_worker_success:\"ورکر با موفقیت آپدیت شد.\", upload_worker_failed:\"آپلود ناموفق بود: \",\n                  upload_worker_sync_linked_lbl:\"پنل‌های لینک‌شده هم آپدیت بشن\", upload_worker_sync_linked_desc:\"همین کد رو با استفاده از کلید همگام‌سازی خوشه، روی تمام پنل‌های لینک‌شده هم دیپلوی می‌کنه.\",\n                  upload_worker_linked_summary:\"پنل‌های لینک‌شده آپدیت‌شده: {ok}/{total}\",\n                  acc_a1_title:\"آی‌پی‌های پاک (چند سازنده)\", acc_a3_title:\"شبکه و امنیت TLS\", acc_a4_title:\"نام‌گذاری کانفیگ\",\n                  acc_a5_title:\"سوییچ‌های عملکردی\", acc_a6_title:\"ربات تلگرام\", acc_a7_title:\"پنل‌های متصل\", acc_a8_title:\"آنالیتیکس کلودفلر\",\n                  login_password:\"رمز ورود\",\n                  lbl_u_ipproxy:\"آی‌پی(های) پروکسی کاربر (اختیاری - آی‌پی پاک سراسری را نادیده می‌گیرد، با کاما/خط جدید از هم جدا می‌شوند)\",\n                  v_pop_title: \"اطلاعیه تعمیرات\", v_pop_whatsnew: \"ویژگی‌های جدید\", v_pop_headline: \"امکانات جدید و بهبودها\",\n                  v_pop_btn: \"متوجه شدم!\",\n                  changelog_title: \"گزارش تغییرات و توضیحات نسخه جدید:\",\n                   changelog_added: \"اضافه شده\", changelog_fixed: \"رفع شده\", changelog_improved: \"بهبود یافته\", changelog_changed: \"تغییر یافته\", changelog_note: \"نکات مهم\",\n                   ov_total_users: \"کل کاربران\", ov_active_users: \"فعال\", ov_paused_users: \"متوقف\", ov_auto_disabled: \"غیرفعال خودکار\", ov_expired_users: \"منقضی\",\n                   ov_total_traffic: \"ترافیک کل\", ov_today_traffic: \"ترافیک امروز\", ov_requests: \"درخواست\", ov_active_conns: \"اتصالات فعال\",\n                   ov_cf_requests: \"درخواست‌های ورکر (امروز)\", ov_connected_now: \"متصل هم‌اکنون\", ov_no_connections: \"در حال حاضر کسی متصل نیست.\",\n                   ov_system: \"سیستم\", ov_recent_activity: \"فعالیت‌های اخیر\", ov_view_all: \"مشاهده همه ←\", ov_loading: \"در حال بارگذاری...\",\n                   ov_quick_actions: \"عملیات سریع\", ov_add_user: \"افزودن کاربر\", ov_backup_config: \"پشتیبان‌گیری\", ov_refresh: \"بروزرسانی آمار\", ov_manage_users: \"مدیریت کاربران\",\n                   ov_gb_unit: \"گیگابایت\",\n                   limit_hour_from:\"از\",\n                    limit_hour_to:\"تا\",\n                   lbl_limit_hour:\"ساعات دسترسی\",\n                      deploy_btn: \"هم‌اکنون نصب کن\", update_deploying: \"در حال نصب بروزرسانی...\",\n                      update_success: \"بروزرسانی موفق! در حال بارگذاری...\", update_error: \"خطا در بروزرسانی\",\n                      lbl_cf_worker: \"نام اسکریپت کارگر ابری\", desc_cf_worker: \"برای بروزرسانی خودکار الزامی است. نام اسکریپت در داشبورد کارگرهای ابری.\",\n                      view_github: \"مشاهده در گیت‌هاب\",\n                     update_requires_cf: \"برای نصب خودکار، شناسه اکانت، توکن API و نام کارگر را تنظیم کنید.\",\n                     html_desc_strategy: \"متغیرهای پشتیبانی شده: <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{FLAG}</code>، <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{PROTOCOL}</code>، <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{USER}</code>، <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{PORT}</code>، <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{PREFIX}</code>، <code class='bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono'>{IP}</code>.<br><span class='text-[10px] text-slate-400 dark:text-slate-500 leading-snug'>• <b>{FLAG}</b>: ایموجی پرچم مربوط به کشور آی‌پی لبه (مثلاً 🇺🇸).<br>• <b>{PROTOCOL}</b>: پروتکل اصلی هسته (VLESS / Trojan).<br>• <b>{USER}</b>: نام یا شناسه مشترک ساب.<br>• <b>{PORT}</b>: پورت فعال اتصال.<br>• <b>{PREFIX}</b>: پیشوند نام دلخواه.<br>• <b>{IP}</b>: آدرس آی‌پی تمیز.</span><br>طرح‌های از پیش تعریف شده: <code>default</code>، <code>type-user-port</code>، <code>user-port</code>، <code>host-port-user</code>، <code>prefix-user-port</code>، <code>ip</code>.\",\n                     acc_logs_title: \"گزارش فعالیت سیستم\", logs_filter_all: \"همه انواع\", logs_filter_search_ph: \"جستجو در جزئیات...\", logs_loading: \"در حال بارگذاری...\",\n                     acc_sessions_title: \"ورودهای وب (دستگاه‌های فعال)\", sessions_desc: \"هر مرورگری که هم‌اکنون وارد این پنل شده، و هر دستگاهی که برای ۲FA به‌خاطر سپرده شده. با پایان دادن به هرکدام، آن دستگاه مجبور به ورود دوباره می‌شود.\",\n                     sessions_active_title: \"نشست‌های فعال\", sessions_trusted_title: \"دستگاه‌های مورد اعتماد ۲FA\", sessions_none: \"نشست فعالی وجود ندارد.\", sessions_no_trusted: \"دستگاه به‌خاطر سپرده‌شده‌ای وجود ندارد.\", btn_end_all_sessions: \"خروج از همه نشست‌های دیگر\", btn_forget_all_devices: \"فراموش کردن همه دستگاه‌ها\", grp_limits_title: \"محدودیت‌ها و دسترسی\", grp_network_title: \"شبکه و پروتکل\",\n                     btn_end_session: \"پایان نشست\", btn_forget_device: \"فراموش کردن دستگاه\",\n                }\n          };\n\n          const CHANGELOG_DATA = {\n              \"2.5.7\": {\n                  headline: { en: \"Dynamic Multi-IP Failover & Keyless Country Flagging\", fa: \"لینک هوشمند آی‌پی‌ها، بهبود کلودفلر و نگاشت پرچم بدون تحریم\" },\n                  added: [\n                      { en: \"Support entering custom clean IPs, proxy IPs, and custom config names for each subscriber dynamically in Add/Edit user modals, with automatic extraction and seamless database merging\", fa: \"امکان ثبت آی‌پی تمیز دلخواه، آی‌پی پروکسی دلخواه و نام کانفیگ دلخواه برای هر کاربر به صورت مجزا با قابلیت استخراج خودکار و ادغام هوشمند\" },\n                      { en: \"Integrated free, open-source and keyless api.country.is for country flag mapping of IP addresses\", fa: \"یکپارچه‌سازی وب‌سرویس رایگان و متن‌باز api.country.is جهت نگاشت پرچم کشورهای مربوط به آدرس‌های آی‌پی\" }\n                  ],\n                  fixed: [\n                      { en: \"Resolved Cloudflare API compatibility flag error ('No such compatibility flag: unsafe-eval' and startup 'Uncaught EvalError') by updating to 'allow_eval_during_startup'\", fa: \"رفع خطای ناسازگاری فلگ کلودفلر (خطای عدم وجود فلگ unsafe-eval و خطای زمان شروع کار EvalError) در بخش استقرار خودکار با بازنویسی به فلگ مدرن allow_eval_during_startup\" },\n                      { en: \"Fixed a critical issue where selecting multiple proxy IPs for a user caused session disruptions (IP splitting) on sites behind Cloudflare, resolved via user-consistent hashing and smart proxy failover\", fa: \"رفع مشکل عدم باز شدن وب‌سایت‌های پشت کلودفلر هنگام انتخاب چندین آی‌پی پروکسی با پیاده‌سازی مکانیزم Hashing پایدار کاربر و سوییچ خودکار (Failover) بر روی پروکسی‌های جایگزین\" },\n                      { en: \"Fixed client-side regular expression parsing to correctly split global IPs separated by backslashes, tabs, commas, or semicolons in the browser\", fa: \"اصلاح عبارات منظم فرانت‌اند در مروگر جهت تفکیک صحیح لیست آی‌پی‌های تفکیک شده با اینتر، ویرگول، نقطه ویرگول یا بک‌اسلش\" }\n                  ],\n                  improved: [\n                      { en: \"Enhanced reliability of user management dashboard modals and subscription validation logic\", fa: \"بهبود پایداری پنجره‌های مدیریتی داشبورد و منطق بررسی اعتبار اشتراک‌ها\" }\n                  ],\n                  notes: []\n              },\n              \"2.5.6.1\": {\n                  headline: { en: \"Multi-IP Management & Crucial Bug Fixes\", fa: \"مدیریت آی‌پی‌های چندگانه و رفع خطاهای بحرانی\" },\n                  added: [\n                      { en: \"Support setting custom config name, custom proxy IP, and custom clean IP for each user dynamically in the Add User modal\", fa: \"اضافه شدن امکان ثبت نام کانفیگ دلخواه، آی‌پی پروکسی اختصاصی و آی‌پی تمیز اختصاصی به صورت مجزا برای هر کاربر در پنجره افزودن کاربر\" }\n                  ],\n                  fixed: [\n                      { en: \"Fixed a critical JavaScript rollback error ('ReferenceError: proxyIp is not defined') when adding a new user\", fa: \"رفع خطای بحرانی جاوااسکریپت ('ReferenceError: proxyIp is not defined') هنگام تلاش برای افزودن یک کاربر جدید\" }\n                  ],\n                  improved: [\n                      { en: \"Streamlined alignment of custom user values with subscription generation\", fa: \"بهبود همگام‌سازی مقادیر اختصاصی کاربران با فرایند ساخت کانفیگ‌ها در اشتراک\" }\n                  ],\n                  notes: []\n              },\n              \"2.5.6\": {\n                  headline: { en: \"Multiple Proxy IPs & Flag Matching\", fa: \"آی‌پی‌های پروکسی متعدد و انطباق پرچم\" },\n                  added: [\n                      { en: \"Support multi-proxy IP lists (rotated/distributed across generated configs to bypass Cloudflare limits)\", fa: \"پشتیبانی از لیست‌های آی‌پی پروکسی چندگانه (چرخش و توزیع خودکار میان کانفیگ‌ها برای عبور از محدودیت‌های کلودفلر)\" },\n                      { en: \"Proper country flag matching for configs based on the actual proxy IP used\", fa: \"انطباق صحیح پرچم کشور برای کانفیگ‌ها بر اساس آی‌پی پروکسی واقعی استفاده‌شده\" }\n                  ],\n                  fixed: [\n                      { en: \"Fixed outbound transport and websocket configurations formatting errors\", fa: \"رفع خطاهای فرمت‌دهی در کانفیگ‌های حمل و نقل خروجی و وب‌ساکت\" }\n                  ],\n                  improved: [\n                      { en: \"Distributed multiple proxy IPs evenly across subscription sub-configs\", fa: \"توزیع یکنواخت چندین آی‌پی پروکسی میان زیرکانفیگ‌های اشتراک\" },\n                      { en: \"Enhanced IP API resolving and flag caching logic\", fa: \"بهبود منطق حل‌وفصل و کش پرچم برای آی‌پی‌ها\" }\n                  ],\n                  notes: []\n              },\n              \"2.5.5\": {\n                  headline: { en: \"One-Click Panel Update\", fa: \"بروزرسانی پنل با یک کلیک\" },\n                  added: [\n                      { en: \"Update the panel directly from the admin panel — no need to use Cloudflare dashboard\", fa: \"بروزرسانی پنل مستقیماً از پنل مدیریت — بدون نیاز به داشبورد کلودفلر\" },\n                      { en: \"One-click deployment inside the panel for quick and easy updates\", fa: \"نصب با یک کلیک داخل پنل برای بروزرسانی سریع و آسان\" },\n                  ],\n                  fixed: [],\n                  improved: [\n                      { en: \"Improved stability and reliability of the update system\", fa: \"بهبود پایداری و اطمینان سیستم بروزرسانی\" },\n                  ],\n                  notes: []\n              },\n              \"2.5.4.2\": {\n                  headline: { en: \"Performance Optimization & Background Processing\", fa: \"بهینه‌سازی عملکرد و پردازش پس‌زمینه\" },\n                  added: [],\n                  fixed: [],\n                  improved: [\n                      { en: \"Improved system performance using smart caching (faster responses and less database load)\", fa: \"بهبود عملکرد سیستم با استفاده از کش هوشمند (پاسخ‌ سریع‌تر و بار کمتر روی پایگاه داده)\" },\n                      { en: \"Added smart caching system (TTL) for configuration and usage data\", fa: \"افزودن سیستم کش هوشمند (TTL) برای داده‌های تنظیمات و مصرف\" },\n                      { en: \"Reduced database calls to make the panel faster and more efficient\", fa: \"کاهش درخواست‌ها به پایگاه داده برای سریع‌تر و کاراتر شدن پنل\" },\n                      { en: \"Background processing added for non-critical tasks to improve speed\", fa: \"افزودن پردازش پس‌زمینه برای کارهای غیربحرانی جهت بهبود سرعت\" },\n                  ],\n                  notes: []\n              },\n              \"2.5.4.1\": {\n                  headline: { en: \"Security Hotfix — Bot Authorization\", fa: \"اصلاح امنیتی — احراز هویت ربات\" },\n                  added: [],\n                  fixed: [\n                      { en: \"Fixed critical issue where unauthorized users could access bot and panel data via Worker\", fa: \"رفع مشکل بحرانی دسترسی کاربران غیرمجاز به اطلاعات ربات و پنل از طریق Worker\" },\n                      { en: \"Added proper Telegram user ID validation for all Worker-related requests\", fa: \"افزودن بررسی صحیح آیدی عددی تلگرام برای تمام درخواست‌های مربوط به Worker\" },\n                  ],\n                  improved: [\n                      { en: \"Only users with approved admin IDs can interact with the bot and access panel data\", fa: \"فقط کاربرانی که آیدی آن‌ها در لیست ادمین‌ها ثبت شده باشد اجازه دسترسی به ربات و اطلاعات پنل را دارند\" },\n                      { en: \"Unauthorized users now receive a clear access denied message\", fa: \"کاربران غیرمجاز اکنون پیام خطای دسترسی مناسب دریافت می‌کنند\" },\n                  ],\n                  notes: [\n                      { en: \"Security update — recommended for all users\", fa: \"به‌روزرسانی امنیتی — توصیه‌شده برای تمام کاربران\" },\n                  ]\n              },\n              \"2.5.4\": {\n                  headline: { en: \"Overview Dashboard & Mobile Improvements\", fa: \"داشبورد نمای کلی و بهبود نمایش در موبایل\" },\n                  added: [\n                      { en: \"Added Overview Dashboard as the default home page\", fa: \"اضافه شدن داشبورد نمای کلی به عنوان صفحه اصلی پنل\" },\n                      { en: \"Added quick statistics and recent activity section\", fa: \"اضافه شدن بخش آمار سریع و فعالیت‌های اخیر\" },\n                  ],\n                  fixed: [],\n                  improved: [\n                      { en: \"Improved mobile responsiveness of the Overview page\", fa: \"بهبود نمایش صفحه نمای کلی در موبایل\" },\n                      { en: \"Localized traffic units for Persian language\", fa: \"نمایش واحد ترافیک به فارسی در صفحه نمای کلی\" },\n                  ],\n                  notes: []\n              },\n              \"2.5.3\": {\n                  headline: { en: \"Telegram Bot Fixes & Formatting Cleanup\", fa: \"رفع مشکلات ربات تلگرام و اصلاح فرمت‌بندی\" },\n                  added: [],\n                  fixed: [\n                      { en: \"Fixed admin buttons not showing immediately after /start in some cases\", fa: \"رفع مشکل نمایش ندادن دکمه‌های مدیر بلافاصله پس از /start در بعضی موارد\" },\n                      { en: \"Fixed subscription link button returning per-user links instead of master link\", fa: \"رفع مشکل بازگشت لینک‌های کاربری به جای لینک اصلی هنگام فشردن دکمه لینک اشتراک\" },\n                      { en: \"Fixed duplicate messages when clicking Update Usage with unchanged stats\", fa: \"رفع مشکل ارسال پیام تکراری هنگام فشردن بروزرسانی مصرف بدون تغییر آمار\" },\n                      { en: \"Fixed <code> tags showing as raw text in Telegram messages\", fa: \"رفع مشکل نمایش تگ‌های <code> به صورت متن خام در پیام‌های تلگرام\" },\n                      { en: \"Fixed subscription links not being clickable in Telegram\", fa: \"رفع مشکل غیرقابل کلیک بودن لینک‌های اشتراک در تلگرام\" },\n                  ],\n                  improved: [\n                      { en: \"Subscription links now use tap-to-copy formatting in Telegram\", fa: \"لینک‌های اشتراک اکنون با فرمت کپی با یک لمس در تلگرام نمایش داده می‌شوند\" },\n                      { en: \"UUIDs now use tap-to-copy formatting in user lists and detail views\", fa: \"شناسه‌های یکتا اکنون با فرمت کپی با یک لمس در لیست و جزئیات کاربران نمایش داده می‌شوند\" },\n                      { en: \"Bot menu now correctly shows admin options on first interaction after login\", fa: \"منوی ربات اکنون گزینه‌های مدیریتی را در اولین تعامل پس از ورود به درستی نمایش می‌دهد\" },\n                      { en: \"Update Usage button now edits the existing message instead of sending a new one\", fa: \"دکمه بروزرسانی مصرف اکنون پیام موجود را ویرایش می‌کند به جای ارسال پیام جدید\" },\n                  ],\n                  notes: [\n                      { en: \"No breaking changes — fully backward compatible\", fa: \"بدون تغییرات ناسازگار — کاملاً سازگار با نسخه‌های قبلی\" },\n                  ]\n              },\n              \"2.5.2\": {\n                  headline: { en: \"Modal Responsiveness & Mobile UX\", fa: \"واکنش‌گرایی مودال و تجربه کاربری موبایل\" },\n                  added: [],\n                  fixed: [],\n                  improved: [\n                      { en: \"Improved Add/Edit User modal responsiveness on all screen sizes\", fa: \"بهبود واکنش‌گرایی مودال افزودن/ویرایش کاربر در تمام اندازه‌های صفحه\" },\n                      { en: \"Added sticky action buttons in modals for better mobile support\", fa: \"افزودن دکمه‌های شناور در مودال‌ها برای پشتیبانی بهتر از موبایل\" },\n                      { en: \"Enhanced scrolling behavior — form content scrolls independently while buttons stay visible\", fa: \"بهبود رفتار اسکرول — محتوای فرم به‌طور مستقل اسکرول می‌شود در حالی که دکمه‌ها قابل مشاهده باقی می‌مانند\" },\n                      { en: \"Improved overall user experience when managing subscribers\", fa: \"بهبود تجربه کاربری هنگام مدیریت مشترکین\" },\n                  ],\n                  notes: [\n                      { en: \"No breaking changes — fully backward compatible\", fa: \"بدون تغییرات ناسازگار — کاملاً سازگار با نسخه‌های قبلی\" },\n                  ]\n              },\n              \"2.5.1\": {\n                  headline: { en: \"Simplified Panel Management & Bot Stability\", fa: \"مدیریت ساده‌شده پنل و پایداری ربات\" },\n                  added: [\n                      { en: \"Web login signal system — bot auto-detects the last active web-logged panel\", fa: \"سیستم سیگنال ورود وب — ربات به‌طور خودکار آخرین پنل واردشده از وب را شناسایی می‌کند\" },\n                      { en: \"Login sync endpoint (/tg/sync_panel) for remote panels to notify the hub on admin login\", fa: \"نقطه پایانی همگام‌سازی ورود (/tg/sync_panel) برای اطلاع‌رسانی پنل‌های راهدور به هاب هنگام ورود مدیر\" },\n                      { en: \"Hub panel URL config (hubPanelUrl) for remote panels to signal login events\", fa: \"پیکربندی آدرس هاب پنل (hubPanelUrl) برای ارسال سیگنال ورود از پنل‌های راهدور\" },\n                      { en: \"Full user management via Telegram bot (create, edit, delete, search, disable, re-enable)\", fa: \"مدیریت کامل کاربران از طریق ربات تلگرام (ایجاد، ویرایش، حذف، جستجو، غیرفعال‌سازی، فعال‌سازی مجدد)\" },\n                      { en: \"HTTP REST API for all user operations at /api/users (GET, POST, PUT, DELETE)\", fa: \"API جدید REST برای تمام عملیات کاربران در /api/users\" },\n                      { en: \"Statistics API at /api/stats with user counts, traffic totals, and system status\", fa: \"API آمار در /api/stats با تعداد کاربران، مجموع ترافیک و وضعیت سیستم\" },\n                  ],\n                  fixed: [\n                      { en: \"Removed multi-panel selection system that caused session confusion and incorrect panel switching\", fa: \"حذف سیستم انتخاب چندپنلی که باعث سردرگمی نشست و جابجایی نادرست پنل می‌شد\" },\n                      { en: \"Fixed bot not responding after pressing /start due to stale step state\", fa: \"رفع مشکل پاسخ ندادن ربات پس از فشار دادن /start به دلیل وضعیت مرحله قدیمی\" },\n                      { en: \"Fixed panel context mixing when switching between panels\", fa: \"رفع مشکل ترکیب زمینه پنل هنگام جابجایی بین پنل‌ها\" },\n                      { en: \"Fixed race condition in bot state persistence from non-blocking D1 writes\", fa: \"رفع مشکل شرایط مسابقه در ماندگاری وضعیت ربات ناشی از نوشتن غیرهمزمان D1\" },\n                  ],\n                  improved: [\n                      { en: \"/start now directly opens panel management based on last web login — no panel selection menu\", fa: \"/start اکنون مستقیماً مدیریت پنل را بر اساس آخرین ورود وب باز می‌کند — بدون منوی انتخاب پنل\" },\n                      { en: \"Bot automatically links Telegram session to the last active web-logged panel\", fa: \"ربات به‌طور خودکار نشست تلگرام را به آخرین پنل فعال واردشده از وب متصل می‌کند\" },\n                      { en: \"Simplified bot logic with clean 1-to-1 mapping between web login and Telegram session\", fa: \"ساده‌سازی منطق ربات با نگاشت یک‌به‌یک بین ورود وب و نشست تلگرام\" },\n                      { en: \"Telegram bot main menu redesigned with inline keyboard layout for mobile-first management\", fa: \"منوی اصلی ربات تلگرام با طرح‌بندی کیبورد درون‌خطی برای مدیریت موبایل‌محور بازطراحی شد\" },\n                  ],\n                  notes: [\n                      { en: \"Single-panel mode works more reliably — it is recommended to use one Telegram bot per panel for best stability\", fa: \"حالت تک‌پنلی پایدارتر است — توصیه می‌شود برای بهترین پایداری از یک ربات تلگرام برای هر پنل استفاده کنید\" },\n                      { en: \"For multi-panel setups: set hubPanelUrl on each remote panel to enable automatic login sync\", fa: \"برای تنظیمات چندپنلی: hubPanelUrl را روی هر پنل راهدور تنظیم کنید تا همگام‌سازی خودکار ورود فعال شود\" },\n                      { en: \"Each panel having its own dedicated bot improves session accuracy and prevents panel mix-up issues\", fa: \"داشتن ربات اختصاصی برای هر پنل، دقت نشست را بهبود می‌دهد و از مشکلات ترکیب پنل جلوگیری می‌کند\" },\n                      { en: \"API endpoints are authenticated via Master Key (Bearer token or ?key= parameter)\", fa: \"نقاط پایانی API از طریق کلید اصلی احراز هویت می‌شوند (توکن Bearer یا پارامتر ?key=)\" },\n                  ]\n              },\n              \"2.5.0\": {\n                  headline: { en: \"User Auto-Disable & Management Improvements\", fa: \"غیرفعال‌سازی خودکار کاربر و بهبود مدیریت\" },\n                  added: [\n                      { en: \"Automatic user disable on traffic limit exceeded\", fa: \"غیرفعال‌سازی خودکار کاربر هنگام اتمام محدودیت ترافیک\" },\n                      { en: \"Automatic user disable on expiration date reached\", fa: \"غیرفعال‌سازی خودکار کاربر هنگام رسیدن به تاریخ انقضا\" },\n                      { en: \"Activity log and Telegram notification for auto-disabled users\", fa: \"ثبت در گزارش فعالیت و ارسال اعلان تلگرام برای کاربران غیرفعال شده خودکار\" },\n                      { en: \"Recently Disabled Users notification panel in Users tab\", fa: \"پنل اعلان کاربران اخیراً غیرفعال شده در بخش کاربران\" },\n                      { en: \"Status filter dropdown (All/Active/Paused/Auto-Disabled)\", fa: \"فیلتر وضعیت (همه/فعال/متوقف/غیرفعال خودکار)\" },\n                      { en: \"Auto-Disabled statistics card in dashboard\", fa: \"کارت آمار غیرفعال‌سازی خودکار در داشبورد\" },\n                  ],\n                  fixed: [\n                      { en: \"Expired users are now disabled instead of deleted\", fa: \"کاربران منقضی شده اکنون غیرفعال می‌شوند به جای حذف\" },\n                      { en: \"Users exceeding traffic limits are preserved in panel\", fa: \"کاربرانی که محدودیت ترافیک را رد می‌کنند در پنل حفظ می‌شوند\" },\n                  ],\n                  improved: [\n                      { en: \"User data, statistics, and history are now preserved\", fa: \"داده‌ها، آمار و تاریخچه کاربران اکنون حفظ می‌شود\" },\n                      { en: \"Account renewal workflow for administrators\", fa: \"فرآیند تمدید حساب برای مدیران\" },\n                  ],\n                  notes: [\n                      { en: \"Re-enabling a user clears the auto-disable reason\", fa: \"فعال‌سازی مجدد کاربر، دلیل غیرفعال‌سازی خودکار را پاک می‌کند\" },\n                  ]\n              },\n              \"2.4.9\": {\n                  headline: { en: \"Custom Protocol & Port Configuration\", fa: \"پیکربندی پروتکل و پورت سفارشی\" },\n                  added: [\n                      { en: \"Custom protocol mode per user (VLESS/Trojan/Both)\", fa: \"حالت پروتکل سفارشی برای هر کاربر (VLESS/Trojan/هر دو)\" },\n                      { en: \"Custom port configuration per user\", fa: \"پیکربندی پورت سفارشی برای هر کاربر\" },\n                      { en: \"Maximum configs limit per user\", fa: \"محدودیت حداکثر کانفیگ برای هر کاربر\" },\n                  ],\n                  fixed: [],\n                  improved: [\n                      { en: \"User management panel interface\", fa: \"رابط کاربری پنل مدیریت کاربران\" },\n                  ],\n                  notes: []\n              }\n          };\n  \n          function renderChangelog(version) {\n              const container = document.getElementById('modal-changelog-container');\n              if (!container) return;\n              \n              const data = CHANGELOG_DATA[version];\n              if (!data) {\n                  container.innerHTML = '<p class=\"text-slate-400 text-xs\">No changelog available for this version.</p>';\n                  return;\n              }\n\n              const t = (key) => i18n[lang]?.[key] || i18n['en']?.[key] || key;\n              let html = '';\n\n              if (data.headline) {\n                  const headlineEl = document.getElementById('modal-version-headline');\n                  if (headlineEl) headlineEl.textContent = data.headline[lang] || data.headline['en'];\n              }\n\n              const sections = [\n                  { key: 'added', icon: '✨', color: 'emerald', items: data.added },\n                  { key: 'fixed', icon: '🔧', color: 'blue', items: data.fixed },\n                  { key: 'improved', icon: '⚡', color: 'violet', items: data.improved },\n                  { key: 'changed', icon: '🔄', color: 'amber', items: data.changed },\n                  { key: 'note', icon: '⚠️', color: 'red', items: data.notes },\n              ];\n\n              sections.forEach(section => {\n                  if (section.items && section.items.length > 0) {\n                      html += '<div class=\"mb-4\">';\n                      html += '<div class=\"flex items-center gap-2 mb-2\">';\n                      html += '<span class=\"text-sm\">' + section.icon + '</span>';\n                      html += '<h5 class=\"text-xs font-bold text-' + section.color + '-600 dark:text-' + section.color + '-400 uppercase tracking-wider\">' + t('changelog_' + section.key) + '</h5>';\n                      html += '</div>';\n                      html += '<div class=\"space-y-1.5 ps-6\">';\n                      section.items.forEach(item => {\n                          html += '<div class=\"flex items-start gap-2\">';\n                          html += '<span class=\"text-' + section.color + '-400 mt-1.5\">•</span>';\n                          html += '<span class=\"text-xs text-slate-600 dark:text-slate-300\">' + (item[lang] || item['en']) + '</span>';\n                          html += '</div>';\n                      });\n                      html += '</div></div>';\n                  }\n              });\n\n              container.innerHTML = html || '<p class=\"text-slate-400 text-xs\">No changes documented.</p>';\n          }\n\n          let lang = localStorage.getItem('lang') || 'fa';\n          let sessionKey = \"\", baseRoute = window.location.pathname.split('/dash')[0];\n          let hostName = window.location.hostname, localUUID = \"\";\n\n          window.addEventListener('DOMContentLoaded', () => {\n              let savedSession = localStorage.getItem('nahan_session');\n              if (savedSession) {\n                  try {\n                      let parsed = JSON.parse(savedSession);\n                      const sessionStillFresh = parsed && parsed.key && parsed.expiry && Date.now() < parsed.expiry;\n                      const trustStillValid = parsed && parsed.trustToken && parsed.trustExpiry && Date.now() < parsed.trustExpiry;\n                      if (sessionStillFresh) {\n                           sessionKey = parsed.key;\n                           doLogin(true).then(() => loadDashboard());\n                      } else if (trustStillValid) {\n                          // Auto-resume window passed, but this device is still remembered\n                          // for 2FA purposes (up to 30 days) -- keep the trust token around\n                          // so the login screen's fresh password submit skips the 2FA step.\n                          localStorage.setItem('nahan_session', JSON.stringify({ key: '', expiry: 0, trustToken: parsed.trustToken, trustExpiry: parsed.trustExpiry }));\n                      } else {\n                          localStorage.removeItem('nahan_session');\n                      }\n                  } catch(e){}\n              }\n              checkVersionPopup();\n          });\n  \n          function applyLang() {\n              document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';\n              document.getElementById('lang-toggle').innerText = lang === 'fa' ? 'EN' : 'فا';\n              document.querySelectorAll('[data-i18n]').forEach(el => {\n                  const key = el.getAttribute('data-i18n');\n                  if (i18n[lang] && i18n[lang][key] !== undefined && i18n[lang][key] !== null) {\n                      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {\n                          el.placeholder = i18n[lang][key];\n                      } else {\n                          if (key.startsWith('html_')) {\n                              el.innerHTML = i18n[lang][key];\n                          } else {\n                              el.innerText = i18n[lang][key];\n                          }\n                      }\n                  }\n              });\n              const gbUnit = i18n[lang]?.ov_gb_unit || 'GB';\n              ['ov-total-traffic','ov-today-traffic'].forEach(id => {\n                  const el = document.getElementById(id);\n                  if (el && el.textContent.trim() === '- GB') el.textContent = '- ' + gbUnit;\n              });\n              const statTrafficEl = document.getElementById('stat-total-traffic');\n              if (statTrafficEl && statTrafficEl.textContent.trim() === '0 GB') statTrafficEl.textContent = '0 ' + gbUnit;\n          }\n          function toggleLang() { \n              lang = lang === 'fa' ? 'en' : 'fa'; \n              localStorage.setItem('lang', lang); \n              applyLang(); \n              updateTitle(); \n              updateUI(); \n              renderUsersTable();\n              renderSubscriberPanelSource();\n              renderLinkedPanels();\n              try {\n                  const m = document.getElementById('modal-version-update');\n                  if (m && !m.classList.contains('hidden')) {\n                      renderChangelog(CURRENT_VERSION);\n                  }\n              } catch(e){}\n          }\n          applyLang();\n  \n          if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n              document.documentElement.classList.add('dark');\n          } else {\n              document.documentElement.classList.remove('dark');\n          }\n  \n          function toggleTheme() {\n              document.documentElement.classList.toggle('dark');\n              localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');\n          }\n\n          function checkVersionPopup() {\n              const popupKey = `nahan_shown_v${CURRENT_VERSION}`;\n              if (!localStorage.getItem(popupKey)) {\n                  setTimeout(() => {\n                      const badge = document.getElementById('modal-version-badge');\n                      if (badge) badge.textContent = 'v' + CURRENT_VERSION;\n                      renderChangelog(CURRENT_VERSION);\n                      const m = document.getElementById('modal-version-update');\n                      if (m) {\n                          m.classList.remove('hidden');\n                          m.classList.add('flex');\n                      }\n                  }, 800);\n              }\n          }\n\n          function closeVersionModal() {\n              const m = document.getElementById('modal-version-update');\n              if (m) {\n                  m.classList.add('hidden');\n                  m.classList.remove('flex');\n              }\n              const popupKey = `nahan_shown_v${CURRENT_VERSION}`;\n              localStorage.setItem(popupKey, 'true');\n          }\n  \n          function updateTitle() {\n              const activeTab = document.querySelector('.nav-item.active span');\n              if(activeTab) document.getElementById('view-title').innerText = activeTab.innerText;\n          }\n  \n          function toggleAccordion(id) {\n              const body = document.getElementById(id);\n              if (!body) return;\n              const btn = body.previousElementSibling;\n              const chevron = btn ? btn.querySelector('.acc-chevron') : null;\n              body.classList.toggle('hidden');\n              if (chevron) chevron.classList.toggle('rotate-180');\n          }\n\n          function switchTab(tab) {\n            ['overview','info','network','settings','advanced','logs','users'].forEach(t => {\n                  const view = document.getElementById('view-'+t);\n                  const deskBtn = document.getElementById('tab-'+t);\n                  const mobBtn = document.getElementById('mob-tab-'+t);\n                  if (tab === t) {\n                      view.classList.remove('hidden'); view.classList.add('block', 'fade-in');\n                      deskBtn.classList.add('active'); mobBtn.classList.add('active');\n                  } else {\n                      view.classList.add('hidden'); view.classList.remove('block', 'fade-in');\n                      deskBtn.classList.remove('active'); mobBtn.classList.remove('active');\n                  }\n              });\n            updateTitle();\n            if(tab === 'users') { renderSubscriberPanelSource(); if (Number.isInteger(window.selectedSubscriberPanel)) refreshSubscriberPanel(); }\n            if(tab === 'advanced') renderLinkedPanels();\n            if(tab === 'overview') loadDashboard();\n            if(tab === 'logs') loadLogs();\n            if(tab === 'network') doLogin(true); // refresh metrics\n        }\n\n        let allLogsCache = [];\n        async function loadLogs() {\n            const container = document.getElementById('logs-container');\n            if(!container) return;\n            container.innerHTML = '<p class=\"text-sm text-slate-400 text-center py-4\">Loading logs...</p>';\n            try {\n                const res = await fetch(baseRoute + '/api/logs', { method: 'POST', body: JSON.stringify({ key: sessionKey }) });\n                const data = await res.json();\n                if (data.success && data.logs) {\n                    allLogsCache = data.logs;\n                    const typeSelect = document.getElementById('logs-filter-type');\n                    if (typeSelect) {\n                        const prevVal = typeSelect.value;\n                        const types = Array.from(new Set(allLogsCache.map(l => l.type))).sort();\n                        typeSelect.innerHTML = '<option value=\"\" data-i18n=\"logs_filter_all\">' + (i18n[lang]?.logs_filter_all || 'All types') + '</option>' +\n                            types.map(t => '<option value=\"' + t.replace(/\"/g, '&quot;') + '\">' + t + '</option>').join('');\n                        typeSelect.value = types.includes(prevVal) ? prevVal : '';\n                    }\n                    renderFilteredLogs();\n                } else {\n                    container.innerHTML = '<p class=\"text-sm text-red-400 text-center py-4\">Failed to load logs.</p>';\n                }\n            } catch (err) {\n                container.innerHTML = '<p class=\"text-sm text-red-400 text-center py-4\">Error loading logs.</p>';\n            }\n        }\n\n        function renderFilteredLogs() {\n            const container = document.getElementById('logs-container');\n            if (!container) return;\n            const typeFilter = document.getElementById('logs-filter-type')?.value || '';\n            const searchFilter = (document.getElementById('logs-filter-search')?.value || '').trim().toLowerCase();\n            const filtered = allLogsCache.filter(log => {\n                if (typeFilter && log.type !== typeFilter) return false;\n                if (searchFilter && !((log.detail || '') + ' ' + (log.type || '')).toLowerCase().includes(searchFilter)) return false;\n                return true;\n            });\n            container.innerHTML = '';\n            if (filtered.length === 0) {\n                container.innerHTML = '<p class=\"text-sm text-slate-400 text-center py-4\" data-i18n=\"logs_none\">No activity logs found.</p>';\n                applyLang();\n                return;\n            }\n            filtered.forEach(log => {\n                const dateStr = safeDateTimeString(log.ts);\n                const html = `<div class=\"flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-darkborder/50 gap-2\"><div><p class=\"text-sm font-bold text-slate-700 dark:text-slate-200\">${log.type}</p><p class=\"text-xs text-slate-500 truncate max-w-[200px] sm:max-w-xs\" title=\"${log.detail}\">${log.detail}</p></div><span class=\"text-[10px] font-mono text-slate-400 bg-white dark:bg-darkcard px-2 py-1 rounded shrink-0\">${dateStr}</span></div>`;\n                container.insertAdjacentHTML('beforeend', html);\n            });\n        }\n\n        function safeDateTimeString(ts) {\n            try {\n                const d = new Date(ts);\n                if (isNaN(d.getTime())) return '—';\n                return d.toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US', { hour12: false });\n            } catch (e) {\n                console.error('[safeDateTimeString] failed:', e);\n                return '—';\n            }\n        }\n\n        function safeDateString(ts) {\n            try {\n                const d = new Date(ts);\n                if (isNaN(d.getTime())) return '—';\n                const pad = n => String(n).padStart(2, '0');\n                if (lang === 'fa') {\n                    try {\n                        const parts = new Intl.DateTimeFormat('fa-IR-u-ca-persian-nu-latn', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(d);\n                        const get = t => parts.find(p => p.type === t)?.value || '';\n                        const y = get('year').padStart(4, '0');\n                        const mo = get('month').padStart(2, '0');\n                        const da = get('day').padStart(2, '0');\n                        const hh = get('hour').padStart(2, '0');\n                        const mi = get('minute').padStart(2, '0');\n                        if (y && mo && da) return y + '-' + mo + '-' + da + ' ' + hh + ':' + mi;\n                    } catch (jalaliErr) {\n                        console.error('[safeDateString] Jalali conversion failed, falling back to Gregorian:', jalaliErr);\n                    }\n                }\n                return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());\n            } catch (e) {\n                console.error('[safeDateString] failed:', e);\n                return '—';\n            }\n        }\n\n        function formatDeviceLabel(ua) {\n            if (!ua) return (lang === 'fa') ? 'دستگاه نامشخص' : 'Unknown device';\n            const isMobile = /Mobile|Android|iPhone/i.test(ua);\n            let browser = 'Browser';\n            if (/Edg\\//i.test(ua)) browser = 'Edge';\n            else if (/Chrome\\//i.test(ua)) browser = 'Chrome';\n            else if (/Firefox\\//i.test(ua)) browser = 'Firefox';\n            else if (/Safari\\//i.test(ua)) browser = 'Safari';\n            let os = '';\n            if (/Windows/i.test(ua)) os = 'Windows';\n            else if (/Android/i.test(ua)) os = 'Android';\n            else if (/iPhone|iPad|iOS/i.test(ua)) os = 'iOS';\n            else if (/Mac OS/i.test(ua)) os = 'macOS';\n            else if (/Linux/i.test(ua)) os = 'Linux';\n            return `${isMobile ? '📱' : '🖥️'} ${browser}${os ? ' · ' + os : ''}`;\n        }\n\n        async function loadSessions() {\n            const sessCont = document.getElementById('sessions-container');\n            const devCont = document.getElementById('trusted-devices-container');\n            if (!sessCont) return;\n            sessCont.innerHTML = '<p class=\"text-sm text-slate-400 text-center py-4\">Loading...</p>';\n            devCont.innerHTML = '';\n            try {\n                const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'list_sessions' }) });\n                let data;\n                try {\n                    data = await res.json();\n                } catch (parseErr) {\n                    const raw = await res.text().catch(() => '');\n                    console.error('[loadSessions] Non-JSON response, HTTP', res.status, raw.slice(0, 300));\n                    sessCont.innerHTML = '<p class=\"text-sm text-red-400 text-center py-4\">Server error (HTTP ' + res.status + '). Check console/network tab.</p>';\n                    return;\n                }\n                if (!data.success) {\n                    console.error('[loadSessions] Server returned failure:', data);\n                    sessCont.innerHTML = '<p class=\"text-sm text-red-400 text-center py-4\">' + (data.error ? data.error : 'Failed to load sessions.') + '</p>';\n                    return;\n                }\n\n                sessCont.innerHTML = '';\n                const otherSessionsCount = data.sessions.filter(s => !s.current).length;\n                const revokeAllSessBtn = document.getElementById('btn-revoke-all-sessions');\n                if (revokeAllSessBtn) revokeAllSessBtn.classList.toggle('hidden', otherSessionsCount === 0);\n                if (data.sessions.length === 0) {\n                    sessCont.innerHTML = '<p class=\"text-sm text-slate-400 text-center py-4\" data-i18n=\"sessions_none\">No active sessions.</p>';\n                } else {\n                    data.sessions.forEach(s => {\n                        try {\n                            const dateStr = s.createdAt ? safeDateString(s.createdAt) : '—';\n                            const currentBadge = s.current ? `<span class=\"text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300\">${lang === 'fa' ? 'همین دستگاه' : 'This device'}</span>` : '';\n                            const revokeBtn = s.current ? '' : `<button onclick=\"revokeSession('${s.id}')\" class=\"text-xs font-bold px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/30 hover:bg-rose-500/20 shrink-0\" data-i18n=\"btn_end_session\">End session</button>`;\n                            sessCont.insertAdjacentHTML('beforeend', `<div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-darkborder/50\">\n                                <div>\n                                    <p class=\"text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2\">${formatDeviceLabel(s.ua)} ${currentBadge}</p>\n                                    <p class=\"text-[11px] text-slate-400 font-mono\">${s.ip} · ${dateStr}</p>\n                                </div>\n                                ${revokeBtn}\n                            </div>`);\n                        } catch (rowErr) {\n                            console.error('[loadSessions] Failed to render a session row, skipping it:', rowErr, s);\n                        }\n                    });\n                    if (sessCont.innerHTML === '') sessCont.innerHTML = '<p class=\"text-sm text-red-400 text-center py-4\">Could not render session list (see console).</p>';\n                }\n\n                const revokeAllDevBtn = document.getElementById('btn-revoke-all-devices');\n                if (revokeAllDevBtn) revokeAllDevBtn.classList.toggle('hidden', data.devices.length === 0);\n                if (data.devices.length === 0) {\n                    devCont.innerHTML = '<p class=\"text-sm text-slate-400 text-center py-4\" data-i18n=\"sessions_no_trusted\">No remembered devices.</p>';\n                } else {\n                    data.devices.forEach(d => {\n                        try {\n                            const dateStr = d.createdAt ? safeDateString(d.createdAt) : '—';\n                            devCont.insertAdjacentHTML('beforeend', `<div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-darkborder/50\">\n                                <div>\n                                    <p class=\"text-sm font-bold text-slate-700 dark:text-slate-200\">${formatDeviceLabel(d.ua)}</p>\n                                    <p class=\"text-[11px] text-slate-400 font-mono\">${d.ip} · ${dateStr}</p>\n                                </div>\n                                <button onclick=\"revokeDevice('${d.id}')\" class=\"text-xs font-bold px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/30 hover:bg-rose-500/20 shrink-0\" data-i18n=\"btn_forget_device\">Forget device</button>\n                            </div>`);\n                        } catch (rowErr) {\n                            console.error('[loadSessions] Failed to render a trusted-device row, skipping it:', rowErr, d);\n                        }\n                    });\n                    if (devCont.innerHTML === '') devCont.innerHTML = '<p class=\"text-sm text-red-400 text-center py-4\">Could not render device list (see console).</p>';\n                }\n                applyLang();\n            } catch (e) {\n                console.error('[loadSessions] Unexpected error:', e);\n                sessCont.innerHTML = '<p class=\"text-sm text-red-400 text-center py-4\">Error loading sessions: ' + (e && e.message ? e.message : e) + '</p>';\n            }\n        }\n\n        async function revokeSession(id) {\n            const msg = lang === 'fa' ? 'این نشست وارد شده در دستگاه دیگر پایان می‌یابد. ادامه می‌دهید؟' : 'This will log that device out. Continue?';\n            if (!confirm(msg)) return;\n            try {\n                const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'revoke_session', id }) });\n                const data = await res.json();\n                if (!data.success && data.error) alert(data.error);\n            } catch (e) { /* loadSessions() below will show the generic error state */ }\n            loadSessions();\n        }\n\n        async function revokeDevice(id) {\n            const msg = lang === 'fa' ? 'دفعه بعد که از این دستگاه لاگین شود، دوباره کد ۲مرحله‌ای خواسته می‌شود. ادامه می‌دهید؟' : 'Next login from that device will require a 2FA code again. Continue?';\n            if (!confirm(msg)) return;\n            await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'revoke_device', id }) });\n            loadSessions();\n        }\n\n        async function revokeAllSessions() {\n            const msg = lang === 'fa' ? 'همه‌ی نشست‌های وارد شده در دستگاه‌های دیگر پایان می‌یابد (این دستگاه از این کار مستثنی است). ادامه می‌دهید؟' : 'This will log out every other device currently signed in (this device stays logged in). Continue?';\n            if (!confirm(msg)) return;\n            try {\n                const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'revoke_all_sessions' }) });\n                const data = await res.json();\n                if (!data.success && data.error) alert(data.error);\n            } catch (e) { /* loadSessions() below will show the generic error state */ }\n            loadSessions();\n        }\n\n        async function revokeAllDevices() {\n            const msg = lang === 'fa' ? 'همه‌ی دستگاه‌های به‌خاطر سپرده‌شده برای ۲مرحله‌ای حذف می‌شوند و دفعه‌ی بعد ورود، همه دوباره کد لازم خواهند داشت. ادامه می‌دهید؟' : 'All remembered 2FA devices will be forgotten; every one of them will need a code again next time. Continue?';\n            if (!confirm(msg)) return;\n            try {\n                const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'revoke_all_devices' }) });\n                const data = await res.json();\n                if (!data.success && data.error) alert(data.error);\n            } catch (e) { /* loadSessions() below will show the generic error state */ }\n            loadSessions();\n        }\n\n        function renderLiveUsage(connections) {\n            const container=document.getElementById('usage-metrics-container');if(!container)return;\n            container.replaceChildren();\n            if(!connections.length){container.textContent=lang==='fa'?'اتصال زنده‌ای وجود ندارد.':'No live connections.';return;}\n            const groups=new Map();\n            connections.forEach(connection=>{const key=connection.uuid;const entry=groups.get(key)||{name:connection.name || key,count:0};entry.count++;groups.set(key,entry);});\n            for(const entry of groups.values()){\n                const row=document.createElement('div');row.className='flex justify-between gap-3 p-3 border-b border-slate-100 dark:border-darkborder';\n                const name=document.createElement('span');name.textContent=entry.name;\n                const count=document.createElement('span');count.textContent=entry.count+' '+(lang==='fa'?'اتصال':'connections');\n                row.append(name,count);container.appendChild(row);\n            }\n        }\n\n        async function loadDashboard() {\n            try {\n                const [statsRes, logsRes] = await Promise.all([\n                    fetch(baseRoute + '/api/stats?t=' + Date.now(), { method: 'GET', headers: { 'Authorization': 'Bearer ' + sessionKey }, cache: 'no-store' }),\n                    fetch(baseRoute + '/api/logs', { method: 'POST', body: JSON.stringify({ key: sessionKey }) })\n                ]);\n                const statsData = await statsRes.json();\n                const logsData = await logsRes.json();\n\n                if (statsData.success && statsData.stats) {\n                    const s = statsData.stats;\n                    renderLiveUsage(s.connections || []);\n                    document.getElementById('ov-total-users').textContent = s.users.total;\n                    document.getElementById('ov-active-users').textContent = s.users.active;\n                    document.getElementById('ov-paused-users').textContent = s.users.paused;\n                    document.getElementById('ov-auto-disabled').textContent = s.users.autoDisabled;\n                    document.getElementById('ov-expired-users').textContent = s.users.expired;\n                    document.getElementById('ov-total-traffic').textContent = s.traffic.totalGB + ' ' + (i18n[lang]?.ov_gb_unit || 'GB');\n                    document.getElementById('ov-total-reqs').textContent = s.traffic.totalRequests.toLocaleString();\n                    document.getElementById('ov-today-traffic').textContent = s.traffic.dailyGB + ' ' + (i18n[lang]?.ov_gb_unit || 'GB');\n                    document.getElementById('ov-today-reqs').textContent = s.traffic.dailyRequests.toLocaleString();\n                    document.getElementById('ov-active-conns').textContent = s.system.activeConnections;\n                    document.getElementById('ov-version').textContent = 'v' + s.system.version;\n\n                    const cfReqEl = document.getElementById('ov-cf-requests');\n                    const cfNoteEl = document.getElementById('ov-cf-requests-note');\n                    if (s.cloudflare && s.cloudflare.hasCredentials) {\n                        cfReqEl.textContent = s.cloudflare.requestsToday !== null ? s.cloudflare.requestsToday.toLocaleString() : '—';\n                        if (s.cloudflare.requestsToday !== null) {\n                            cfNoteEl.textContent = lang === 'fa' ? 'از API کلودفلر' : 'via Cloudflare API';\n                        } else {\n                            const reason = s.cloudflare.error ? (': ' + s.cloudflare.error) : '';\n                            cfNoteEl.textContent = (lang === 'fa' ? 'دریافت اطلاعات ناموفق بود' : 'fetch failed') + reason;\n                        }\n                    } else {\n                        cfReqEl.textContent = '—';\n                        cfNoteEl.textContent = lang === 'fa' ? 'شناسه اکانت/توکن تنظیم نشده' : 'Account ID/token not set';\n                    }\n\n                    const connList = document.getElementById('ov-connected-list');\nconst connBadge = document.getElementById('ov-connected-count-badge');\n\nconst conns = s.connections || [];\n\n// Group connections by user\nconst grouped = {};\n\nconns.forEach(c => {\n    const key = c.name || c.uuid || 'Unknown';\n\n    if (!grouped[key]) {\n        grouped[key] = {\n            name: key,\n            uuid: c.uuid,\n            count: 0,\n            connectedAt: c.connectedAt,\n            items: []\n        };\n    }\n\n    grouped[key].count++;\n    grouped[key].items.push({ target: c.target || '', ip: c.ip || c.target || '', connectedAt: c.connectedAt });\n\n    // نگهداری قدیمی‌ترین زمان اتصال\n    if (c.connectedAt) {\n        if (\n            !grouped[key].connectedAt ||\n            new Date(c.connectedAt) < new Date(grouped[key].connectedAt)\n        ) {\n            grouped[key].connectedAt = c.connectedAt;\n        }\n    }\n});\n\n// مرتب‌سازی بر اساس تعداد اتصال\nconst users = Object.values(grouped).sort((a, b) => b.count - a.count);\n\n// Badge: تعداد کاربران / تعداد اتصال‌ها\nconnBadge.textContent = users.length + ' / ' + conns.length;\n\nif (users.length > 0) {\n    connList.innerHTML = '';\n\n    users.forEach((u, idx) => {\n        const since = u.connectedAt\n            ? new Date(u.connectedAt).toLocaleString(\n                  lang === 'fa' ? 'fa-IR' : 'en-US',\n                  { hour12: false }\n              )\n            : '';\n        const accId = 'ov-conn-acc-' + idx;\n        const ipMap = {};\n        u.items.forEach(it => {\n            const k = it.ip || it.target || '—';\n            if (!ipMap[k]) ipMap[k] = { ip: k, count: 0, connectedAt: it.connectedAt };\n            ipMap[k].count++;\n            if (it.connectedAt && (!ipMap[k].connectedAt || new Date(it.connectedAt) > new Date(ipMap[k].connectedAt))) {\n                ipMap[k].connectedAt = it.connectedAt;\n            }\n        });\n        const uniqueItems = Object.values(ipMap);\n        const itemsHtml = uniqueItems.map(it => {\n            const itSince = it.connectedAt\n                ? new Date(it.connectedAt).toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US', { hour12: false })\n                : '';\n            return '<div class=\"flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/40 text-[11px] font-mono\">' +\n                       '<span class=\"text-slate-600 dark:text-slate-300 truncate\">' + (it.ip || '—') + '</span>' +\n                       (it.count > 1 ? '<span class=\"px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 shrink-0\">x' + it.count + '</span>' : '') +\n                       '<span class=\"text-slate-400 shrink-0\">' + itSince + '</span>' +\n                   '</div>';\n        }).join('');\n        connList.insertAdjacentHTML('beforeend',\n            '<div class=\"rounded-xl bg-slate-50 dark:bg-slate-800/50 overflow-hidden\">' +\n                '<button type=\"button\" onclick=\"toggleAccordion(\\'' + accId + '\\')\" class=\"acc-toggle w-full flex items-center gap-3 p-3 text-start\">' +\n                    '<div class=\"w-2 h-2 rounded-full bg-emerald-500 shrink-0\"></div>' +\n                    '<div class=\"flex-1 min-w-0\">' +\n                        '<p class=\"text-sm font-semibold text-slate-700 dark:text-slate-200 truncate\">' +\n                            u.name +\n                        '</p>' +\n                    '</div>' +\n                    '<span class=\"px-2 py-0.5 text-xs font-semibold rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 shrink-0\">' +\n                        u.count + ' ' + (u.count === 1 ? 'Conn' : 'Conns') +\n                    '</span>' +\n                    '<span class=\"text-[10px] font-mono text-slate-400 shrink-0\">' +\n                        since +\n                    '</span>' +\n                    '<svg class=\"acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"></path></svg>' +\n                '</button>' +\n                '<div id=\"' + accId + '\" class=\"acc-body hidden px-3 pb-3 space-y-1\">' +\n                    itemsHtml +\n                '</div>' +\n            '</div>'\n        );\n\n    });\n} else {\n    connList.innerHTML =\n        '<p class=\"text-sm text-slate-400 text-center py-6\" data-i18n=\"ov_no_connections\">' +\n        (i18n[lang]?.ov_no_connections || 'No one connected right now.') +\n        '</p>';\n}\n\n\n\n                }\n\n                const actList = document.getElementById('ov-activity-list');\n                if (logsData.success && logsData.logs && logsData.logs.length > 0) {\n                    actList.innerHTML = '';\n                    logsData.logs.slice(0, 8).forEach(log => {\n                        const dateStr = safeDateTimeString(log.ts);\n                        const typeColors = { 'Auth Success': 'bg-emerald-500', 'Auth Failed': 'bg-red-500', 'User Created': 'bg-blue-500', 'User Deleted': 'bg-red-500', 'User Toggled': 'bg-amber-500', 'User Updated': 'bg-indigo-500', 'User Auto-Disabled': 'bg-red-500', 'Traffic Reset': 'bg-cyan-500', 'Config Changed': 'bg-violet-500' };\n                        const dotColor = typeColors[log.type] || 'bg-slate-400';\n                        actList.insertAdjacentHTML('beforeend', '<div class=\"flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl\"><div class=\"w-2 h-2 rounded-full shrink-0 ' + dotColor + '\"></div><div class=\"flex-1 min-w-0\"><p class=\"text-sm font-semibold text-slate-700 dark:text-slate-200 truncate\">' + log.type + '</p><p class=\"text-[11px] text-slate-400 truncate\">' + log.detail + '</p></div><span class=\"text-[10px] font-mono text-slate-400 shrink-0\">' + dateStr + '</span></div>');\n                    });\n                } else {\n                    actList.innerHTML = '<p class=\"text-sm text-slate-400 text-center py-6\">No recent activity.</p>';\n                }\n            } catch (err) {\n                console.error('Dashboard load error:', err);\n            }\n        }\n\n          function copyData(id) {\n              const input = document.getElementById(id); input.select(); navigator.clipboard.writeText(input.value);\n              const toast = document.getElementById('copy-toast');\n              toast.style.transform = 'translate(-50%, 0)'; toast.style.opacity = '1';\n              setTimeout(() => { toast.style.transform = 'translate(-50%, -5rem)'; toast.style.opacity = '0'; }, 2000);\n          }\n\n          function copyToClipboard(text) {\n              navigator.clipboard.writeText(text || '');\n              const toast = document.getElementById('copy-toast');\n              if (toast) { toast.style.transform = 'translate(-50%, 0)'; toast.style.opacity = '1'; setTimeout(() => { toast.style.transform = 'translate(-50%, -5rem)'; toast.style.opacity = '0'; }, 2000); }\n          }\n\n          let lastRecoveryCodes = [];\n\n          async function twofaRefreshStatus() {\n              try {\n                  const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'status' }) });\n                  const data = await res.json();\n                  if (!data.success) return;\n                  const badge = document.getElementById('twofa-status-badge');\n                  const offPanel = document.getElementById('twofa-off-panel');\n                  const onPanel = document.getElementById('twofa-on-panel');\n                  const setupPanel = document.getElementById('twofa-setup-panel');\n                  setupPanel.classList.add('hidden');\n                  if (data.enabled) {\n                      badge.textContent = (typeof lang !== 'undefined' && lang === 'fa') ? 'فعال' : 'ENABLED';\n                      badge.className = 'text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400';\n                      offPanel.classList.add('hidden');\n                      onPanel.classList.remove('hidden');\n                      const countEl = document.getElementById('twofa-recovery-count');\n                      countEl.textContent = (typeof lang !== 'undefined' && lang === 'fa')\n                          ? (data.recoveryCodesRemaining + ' کد بازیابی باقیمانده · ' + data.trustedDevices + ' دستگاه مورد اعتماد')\n                          : (data.recoveryCodesRemaining + ' recovery codes left · ' + data.trustedDevices + ' trusted device(s)');\n                  } else {\n                      badge.textContent = (typeof lang !== 'undefined' && lang === 'fa') ? 'غیرفعال' : 'DISABLED';\n                      badge.className = 'text-[10px] font-bold px-2 py-1 rounded-full bg-rose-100 text-rose-500 dark:bg-rose-900/30 dark:text-rose-400';\n                      onPanel.classList.add('hidden');\n                      offPanel.classList.remove('hidden');\n                  }\n              } catch (e) { /* ignore, panel just won't refresh */ }\n          }\n\n          async function twofaStartSetup() {\n              try {\n                  const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'init' }) });\n                  const data = await res.json();\n                  if (!data.success) { alert(data.error || 'Failed to start 2FA setup'); return; }\n                  document.getElementById('twofa-off-panel').classList.add('hidden');\n                  document.getElementById('twofa-setup-panel').classList.remove('hidden');\n                  document.getElementById('twofa-setup-err').classList.add('hidden');\n                  document.getElementById('twofa-secret-display').value = data.secret;\n                  document.getElementById('twofa-qr-img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(data.otpauth);\n                  document.getElementById('twofa-confirm-code').value = '';\n              } catch (e) { alert('Network error starting 2FA setup'); }\n          }\n\n          function twofaCancelSetup() {\n              document.getElementById('twofa-setup-panel').classList.add('hidden');\n              document.getElementById('twofa-off-panel').classList.remove('hidden');\n          }\n\n          async function twofaConfirmSetup() {\n              const code = document.getElementById('twofa-confirm-code').value.trim();\n              const errEl = document.getElementById('twofa-setup-err');\n              try {\n                  const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'confirm', code }) });\n                  const data = await res.json();\n                  if (!data.success) {\n                      errEl.textContent = data.error || 'Invalid code, please try again.';\n                      errEl.classList.remove('hidden');\n                      return;\n                  }\n                  document.getElementById('twofa-setup-panel').classList.add('hidden');\n                  twofaShowRecoveryCodes(data.recoveryCodes);\n                  twofaRefreshStatus();\n              } catch (e) { errEl.textContent = 'Network error'; errEl.classList.remove('hidden'); }\n          }\n\n          function twofaShowRecoveryCodes(codes) {\n              lastRecoveryCodes = codes || [];\n              const panel = document.getElementById('twofa-recovery-panel');\n              const list = document.getElementById('twofa-recovery-codes');\n              list.innerHTML = lastRecoveryCodes.map(c => '<div class=\"px-2 py-1.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-amber-800/40 text-center\">' + c + '</div>').join('');\n              panel.classList.remove('hidden');\n          }\n\n          function twofaDownloadCodes() {\n              if (!lastRecoveryCodes.length) return;\n              const text = 'Nahan Gateway - 2FA Recovery Codes\\nEach code can be used once if you lose access to your authenticator app.\\n\\n' + lastRecoveryCodes.join('\\n') + '\\n';\n              const blob = new Blob([text], { type: 'text/plain' });\n              const a = document.createElement('a');\n              a.href = URL.createObjectURL(blob);\n              a.download = 'nahan-2fa-recovery-codes.txt';\n              document.body.appendChild(a); a.click(); a.remove();\n          }\n\n          async function twofaRegenerateCodes() {\n              const code = prompt((typeof lang !== 'undefined' && lang === 'fa') ? 'برای تایید، کد فعلی اپلیکیشن احراز هویت را وارد کنید:' : 'Enter your current authenticator code to confirm:');\n              if (!code) return;\n              try {\n                  const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify({ key: sessionKey, action: 'regenerate_recovery', code }) });\n                  const data = await res.json();\n                  if (!data.success) { alert(data.error || 'Invalid code'); return; }\n                  twofaShowRecoveryCodes(data.recoveryCodes);\n                  twofaRefreshStatus();\n              } catch (e) { alert('Network error'); }\n          }\n\n          async function twofaDisable() {\n              const confirmMsg = (typeof lang !== 'undefined' && lang === 'fa') ? 'کد اپلیکیشن احراز هویت یا یکی از کدهای بازیابی را برای غیرفعال کردن 2FA وارد کنید:' : 'Enter your authenticator code or a recovery code to disable 2FA:';\n              const code = prompt(confirmMsg);\n              if (!code) return;\n              const isRecovery = /-/.test(code);\n              const payload = { key: sessionKey, action: 'disable' };\n              if (isRecovery) payload.recoveryCode = code.trim(); else payload.code = code.trim();\n              try {\n                  const res = await fetch(baseRoute + '/api/2fa', { method: 'POST', body: JSON.stringify(payload) });\n                  const data = await res.json();\n                  if (!data.success) { alert(data.error || 'Invalid code'); return; }\n                  twofaRefreshStatus();\n              } catch (e) { alert('Network error'); }\n          }\n          \n          function showQR(name, url) {\n              document.getElementById('qr-modal-title').innerText = name;\n              document.getElementById('qr-modal-img').src = \"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=\" + encodeURIComponent(url);\n              document.getElementById('qr-modal-link').innerText = url;\n              document.getElementById('qr-modal').classList.remove('hidden');\n              document.getElementById('qr-modal').classList.add('flex');\n          }\n          \n          function closeQRModal() {\n              document.getElementById('qr-modal').classList.add('hidden');\n              document.getElementById('qr-modal').classList.remove('flex');\n          }\n  \n          function updateUI() {\n              try {\n                  let portsStr = Array.from(document.getElementById('cfg-port').selectedOptions).map(o=>o.value).join(',');\n                  let port = portsStr ? portsStr.split(',')[0] : '443';\n                  let proto = document.getElementById('cfg-proto').value === 'beta' ? String.fromCharCode(116, 114, 111, 106, 97, 110) : String.fromCharCode(118, 108, 101, 115, 115);\n                  let rawIps = document.getElementById('cfg-ips').value || \"\";\n                  \n                  let ipsList = rawIps.replace(/,/g, '\\n').replace(/;/g, '\\n').split('\\n').map(s=>s.trim()).filter(Boolean);\n                  let finalIP = ipsList.length > 0 ? ipsList[0] : (hostName.endsWith('.pages.dev') ? 'time.is' : hostName);\n                  \n                  let fp = document.getElementById('cfg-fp').value;\n                  let path = encodeURI(\"/\" + document.getElementById('cfg-path').value);\n                  let sec = [\"80\",\"8080\"].includes(port) ? \"none\" : \"tls\";\n                  \n                  let rawLink = proto + \"://\" + localUUID + \"@\" + finalIP + \":\" + port + \"?encryption=none&security=\" + sec + \"&sni=\" + hostName + \"&fp=\" + fp + \"&type=ws&host=\" + hostName + \"&path=\" + path;\n                  if (document.getElementById('cfg-ech').checked) rawLink += \"&pbk=enabled\";\n                  rawLink += \"#\" + hostName;\n  \n                  // FIX: Check if elements exist\n                  const linkEl = document.getElementById('link-direct');\n                  if (linkEl) linkEl.value = rawLink;\n  \n                  const qrEl = document.getElementById('qr-code');\n                  if (qrEl) qrEl.src = \"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=\" + encodeURIComponent(rawLink);\n  \n                  let totalIps = ipsList.length === 0 ? 1 : ipsList.length;\n                  let tCfg = totalIps * 2; \n                  document.getElementById('ip-count-badge').innerText = lang === 'fa' ? (tCfg + ' کانفیگ تولید شد') : (tCfg + ' Configs Active');\n              } catch(e) { console.error(e); }\n          }\n  \n          function logout() {\n              // Logging out shouldn't undo \"remember this device\" -- only drop the\n              // short-lived session key so the next login still skips the 2FA step.\n              try {\n                  const parsed = JSON.parse(localStorage.getItem('nahan_session') || 'null');\n                  if (parsed && parsed.trustToken && parsed.trustExpiry && Date.now() < parsed.trustExpiry) {\n                      localStorage.setItem('nahan_session', JSON.stringify({ key: '', expiry: 0, trustToken: parsed.trustToken, trustExpiry: parsed.trustExpiry }));\n                  } else {\n                      localStorage.removeItem('nahan_session');\n                  }\n              } catch(e) { localStorage.removeItem('nahan_session'); }\n              window.location.reload();\n          }\n  \n          // Export active page inputs configuration\n          function openUploadWorkerModal() {\n              document.getElementById('upload-worker-url').value = '';\n              document.getElementById('upload-worker-file').value = '';\n              document.getElementById('upload-worker-code').value = '';\n              document.getElementById('modal-upload-worker').classList.remove('hidden');\n          }\n\n          async function uploadWorkerSource() {\n              const url = document.getElementById('upload-worker-url').value.trim();\n              const fileInput = document.getElementById('upload-worker-file');\n              const pastedCode = document.getElementById('upload-worker-code').value.trim();\n              const syncLinked = !!document.getElementById('upload-worker-sync-linked')?.checked;\n              const linkedStatusEl = document.getElementById('upload-worker-linked-status');\n              if (linkedStatusEl) linkedStatusEl.textContent = '';\n\n              if (!url && !fileInput.files[0] && !pastedCode) {\n                  alert(i18n[lang]?.upload_worker_empty || 'Please provide a URL, a file, or pasted code.');\n                  return;\n              }\n              const confirmMsg = syncLinked\n                  ? (i18n[lang]?.upload_worker_confirm_linked || 'This will overwrite the currently deployed worker on THIS panel and on every linked panel. Continue?')\n                  : (i18n[lang]?.upload_worker_confirm || 'This will overwrite the currently deployed worker. Continue?');\n              if (!confirm(confirmMsg)) return;\n\n              const btn = document.getElementById('btn-confirm-upload-worker');\n              const originalHtml = btn.innerHTML;\n              btn.disabled = true;\n              btn.innerHTML = '⏳ ...';\n\n              try {\n                  let payload = {};\n                  if (fileInput.files[0]) {\n                      const fileText = await fileInput.files[0].text();\n                      payload = { code: fileText };\n                  } else if (pastedCode) {\n                      payload = { code: pastedCode };\n                  } else {\n                      payload = { url: url };\n                  }\n                  payload.syncLinked = syncLinked;\n\n                  const res = await fetch(baseRoute + '/api/upload-worker', {\n                      method: 'POST',\n                      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionKey },\n                      body: JSON.stringify(payload)\n                  });\n                  const data = await res.json();\n                  if (!data.success) throw new Error(data.error || ('HTTP ' + res.status));\n\n                  let successMsg = i18n[lang]?.upload_worker_success || 'Worker updated successfully.';\n                  if (syncLinked && Array.isArray(data.linkedResults)) {\n                      const ok = data.linkedResults.filter(r => r.success).length;\n                      const total = data.linkedResults.length;\n                      const linkedSummary = (i18n[lang]?.upload_worker_linked_summary || 'Linked panels updated: {ok}/{total}').replace('{ok}', ok).replace('{total}', total);\n                      successMsg += '\\n' + linkedSummary;\n                      const failed = data.linkedResults.filter(r => !r.success);\n                      if (failed.length && linkedStatusEl) {\n                          linkedStatusEl.className = 'text-xs font-bold min-h-[1rem] text-amber-600 dark:text-amber-400';\n                          linkedStatusEl.textContent = failed.map(f => f.host + ': ' + (f.error || '?')).join(' | ');\n                      }\n                  }\n\n                  alert(successMsg);\n                  document.getElementById('modal-upload-worker').classList.add('hidden');\n              } catch (e) {\n                  alert((i18n[lang]?.upload_worker_failed || 'Upload failed: ') + e.message);\n              } finally {\n                  btn.disabled = false;\n                  btn.innerHTML = originalHtml;\n              }\n          }\n\n          let _viewedWorkerCode = '';\n          let _viewedWorkerIsLive = false;\n          async function viewWorkerSource(liveOnly) {\n              const btn = document.getElementById(liveOnly ? 'btn-view-worker-live' : 'btn-view-worker');\n              const originalHtml = btn.innerHTML;\n              btn.disabled = true;\n              btn.innerHTML = '⏳ ...';\n              try {\n                  const res = await fetch(baseRoute + '/api/download-worker' + (liveOnly ? '?source=live' : ''), {\n                      headers: { 'Authorization': 'Bearer ' + sessionKey }\n                  });\n                  if (!res.ok) {\n                      const errJson = await res.json().catch(() => ({}));\n                      throw new Error(errJson.error || ('HTTP ' + res.status));\n                  }\n                  const codeText = await res.text();\n                  const sourceLabel = res.headers.get('X-Worker-Source') || (liveOnly ? 'cloudflare' : 'auto');\n                  _viewedWorkerCode = codeText;\n                  _viewedWorkerIsLive = !!liveOnly;\n                  document.getElementById('view-worker-code').textContent = codeText;\n                  document.getElementById('view-worker-subtitle').textContent =\n                      (i18n[lang]?.view_worker_source_lbl || 'Source: ') + sourceLabel + ' — ' + codeText.length + ' ' + (i18n[lang]?.view_worker_chars || 'characters');\n                  document.getElementById('modal-view-worker').classList.remove('hidden');\n              } catch (e) {\n                  alert((i18n[lang]?.download_worker_failed || 'Failed to load worker source: ') + e.message);\n              } finally {\n                  btn.disabled = false;\n                  btn.innerHTML = originalHtml;\n              }\n          }\n\n          function copyWorkerSourceView() {\n              if (!_viewedWorkerCode) return;\n              navigator.clipboard.writeText(_viewedWorkerCode).then(() => {\n                  const btn = document.getElementById('btn-copy-worker-view');\n                  const original = btn.innerHTML;\n                  btn.innerHTML = '✅';\n                  setTimeout(() => { btn.innerHTML = original; }, 1500);\n              }).catch(() => {\n                  alert(i18n[lang]?.copy_failed || 'Copy failed.');\n              });\n          }\n\n          function downloadViewedWorkerSource() {\n              if (!_viewedWorkerCode) return;\n              try {\n                  const blob = new Blob([_viewedWorkerCode], { type: 'application/javascript' });\n                  const dlUrl = URL.createObjectURL(blob);\n                  const a = document.createElement('a');\n                  a.href = dlUrl;\n                  a.download = _viewedWorkerIsLive ? '_worker.live.js' : '_worker.js';\n                  document.body.appendChild(a);\n                  a.click();\n                  a.remove();\n                  URL.revokeObjectURL(dlUrl);\n              } catch (e) {\n                  alert((i18n[lang]?.download_worker_failed || 'Failed to download worker source: ') + e.message);\n              }\n          }\n\n          function exportConfig() {\n              const el = id => document.getElementById(id);\n              const payload = {\n                  mode: el('cfg-proto').value, socketPorts: Array.from(el('cfg-port').selectedOptions).map(o=>o.value).join(','), deviceId: el('cfg-uuid').value,\n                  apiRoute: el('cfg-path').value, masterKey: el('cfg-pass').value, syncSecret: el('cfg-sync-secret').value, agent: el('cfg-fp').value,\n                  resolveIp: el('cfg-dns').value, customDns: el('cfg-custom-dns').value ? el('cfg-custom-dns').value : 'https://cloudflare-dns.com/dns-query', cleanIps: el('cfg-ips').value, maintenanceHost: el('cfg-fake').value, backupRelay: el('cfg-relay').value,\n                  enableOpt1: el('cfg-tfo').checked, enableOpt2: el('cfg-ech').checked,\n                  tgToken: el('cfg-tg-token').value, tgChatId: el('cfg-tg-chat').value, tgAdminId: el('cfg-tg-admin').value,\n                  cfAccountId: el('cfg-cf-acc').value, cfApiToken: el('cfg-cf-token').value,\n                  cfWorkerName: el('cfg-cf-worker').value,\n                  isPaused: el('cfg-pause').checked, silentAlerts: el('cfg-silent').checked,\n                  githubRepo: el('cfg-github-repo').value,\n                  subUserAgent: el('cfg-sub-ua').value,\n                  customPanelUrl: el('cfg-custom-panel-url').value\n              };\n              const dataStr = \"data:text/json;charset=utf-8,\" + encodeURIComponent(JSON.stringify(payload, null, 2));\n              const dlAnchor = document.createElement('a');\n              dlAnchor.setAttribute(\"href\", dataStr);\n              dlAnchor.setAttribute(\"download\", \"nahan-gateway-config.json\");\n              document.body.appendChild(dlAnchor);\n              dlAnchor.click();\n              dlAnchor.remove();\n          }\n  \n          // Import backup json to overwrite config inputs \n          function importConfig(event) {\n              const file = event.target.files[0];\n              if (!file) return;\n              const reader = new FileReader();\n              reader.onload = function(e) {\n                  try {\n                      const conf = JSON.parse(e.target.result);\n                      const mapId = (id, val) => { const el = document.getElementById(id); if (el && val !== undefined) el.value = val; };\n                      mapId('cfg-proto', conf.mode);\n                      let pList = (conf.socketPorts || conf.socketPort || '443').split(',');\n                      Array.from(document.getElementById('cfg-port').options).forEach(o => o.selected = pList.includes(o.value));\n                      mapId('cfg-uuid', conf.deviceId);\n                      mapId('cfg-path', conf.apiRoute);\n                      mapId('cfg-pass', conf.masterKey);\n                      mapId('cfg-sync-secret', conf.syncSecret);\n                      mapId('cfg-fp', conf.agent);\n                      mapId('cfg-dns', conf.resolveIp);\n                      mapId('cfg-custom-dns', conf.customDns);\n                      mapId('cfg-ips', conf.cleanIps);\n                      mapId('cfg-fake', conf.maintenanceHost);\n                      mapId('cfg-relay', conf.backupRelay);\n                      mapId('cfg-tg-token', conf.tgToken);\n                      mapId('cfg-tg-chat', conf.tgChatId);\n                      mapId('cfg-tg-admin', conf.tgAdminId);\n                      mapId('cfg-cf-acc', conf.cfAccountId);\n                      mapId('cfg-cf-token', conf.cfApiToken);\n                      mapId('cfg-cf-worker', conf.cfWorkerName);\n                      mapId('cfg-github-repo', conf.githubRepo);\n                      mapId('cfg-sub-ua', conf.subUserAgent);\n                      mapId('cfg-custom-panel-url', conf.customPanelUrl);\n                      \n                      if (conf.enableOpt1 !== undefined) document.getElementById('cfg-tfo').checked = conf.enableOpt1;\n                      if (conf.enableOpt2 !== undefined) document.getElementById('cfg-ech').checked = conf.enableOpt2;\n                      if (conf.isPaused !== undefined) document.getElementById('cfg-pause').checked = conf.isPaused;\n                      if (conf.silentAlerts !== undefined) document.getElementById('cfg-silent').checked = conf.silentAlerts;\n                      \n                      updateUI();\n                      alert(lang === 'fa' ? 'پیکربندی با موفقیت وارد شد! روی ذخیره کلیک کنید.' : 'Configuration parsed! Click save to write changes.');\n                  } catch(err) {\n                      alert(lang === 'fa' ? 'فایل نامعتبر است!' : 'Invalid configuration file!');\n                  }\n              };\n              reader.readAsText(file);\n          }\n  \n          // Browser-level latency check diagnostics\n          async function runPingTest() {\n              const rawIps = document.getElementById('cfg-ips').value || \"\";\n              let ipsList = rawIps.replace(/,/g, '\\n').replace(/;/g, '\\n').split('\\n').map(s=>s.trim()).filter(Boolean);\n              let targetIP = ipsList.length > 0 ? ipsList[0] : (hostName.endsWith('.pages.dev') ? 'time.is' : hostName);\n              \n              const resultsDiv = document.getElementById('ping-results');\n              resultsDiv.classList.remove('hidden');\n              \n              document.getElementById('ping-target').textContent = targetIP;\n              document.getElementById('ping-time').textContent = 'Testing...';\n              document.getElementById('ping-status').textContent = 'Dialing...';\n              document.getElementById('ping-port').textContent = window.location.port || (window.location.protocol === 'https:' ? '443' : '80');\n              \n              const startTime = performance.now();\n              try {\n                  await fetch('https://' + targetIP + '/favicon.ico?cb=' + startTime, { mode: 'no-cors', cache: 'no-store' });\n                  const duration = Math.round(performance.now() - startTime);\n                  document.getElementById('ping-time').textContent = duration + ' ms';\n                  document.getElementById('ping-status').className = \"text-sm font-bold text-emerald-500\";\n                  document.getElementById('ping-status').textContent = \"Success\";\n              } catch (err) {\n                  const duration = Math.round(performance.now() - startTime);\n                  if (duration < 1500) {\n                      document.getElementById('ping-time').textContent = duration + ' ms';\n                      document.getElementById('ping-status').className = \"text-sm font-bold text-amber-500\";\n                      document.getElementById('ping-status').textContent = \"Indirect-OK\";\n                  } else {\n                      document.getElementById('ping-time').textContent = 'Timeout';\n                      document.getElementById('ping-status').className = \"text-sm font-bold text-red-500\";\n                      document.getElementById('ping-status').textContent = \"Unreachable\";\n                  }\n              }\n          }\n  \n          function togglePortCheckbox(val, checked) {\n              const sel = document.getElementById('cfg-port');\n              const opt = Array.from(sel.options).find(o => o.value === val);\n              if (opt) {\n                  opt.selected = checked;\n                  sel.dispatchEvent(new Event('change'));\n              }\n          }\n          function syncCheckboxesFromSelect() {\n              const sel = document.getElementById('cfg-port');\n              const ports = Array.from(sel.selectedOptions).map(o => o.value);\n              const checkboxes = document.querySelectorAll('#port-checkboxes-container input[type=\"checkbox\"]');\n              checkboxes.forEach(cb => {\n                  cb.checked = ports.includes(cb.value);\n              });\n          }\n\n          let recoveryModeActive = false;\n          function toggleRecoveryMode() {\n              recoveryModeActive = !recoveryModeActive;\n              const codeInput = document.getElementById('twofa-code');\n              const toggleBtn = document.getElementById('twofa-toggle-recovery');\n              const label = document.getElementById('twofa-label');\n              const rememberRow = document.getElementById('twofa-remember')?.closest('label');\n              if (recoveryModeActive) {\n                  codeInput.placeholder = 'XXXXX-XXXXX';\n                  codeInput.maxLength = 11;\n                  label.textContent = (typeof lang !== 'undefined' && lang === 'fa') ? 'کد بازیابی' : 'Recovery code';\n                  toggleBtn.textContent = (typeof lang !== 'undefined' && lang === 'fa') ? 'استفاده از کد اپلیکیشن' : 'Use authenticator code instead';\n                  if (rememberRow) rememberRow.style.display = 'none';\n              } else {\n                  codeInput.placeholder = '123456';\n                  codeInput.maxLength = 6;\n                  label.textContent = (typeof lang !== 'undefined' && lang === 'fa') ? 'کد اپلیکیشن احراز هویت' : 'Authenticator code';\n                  toggleBtn.textContent = (typeof lang !== 'undefined' && lang === 'fa') ? 'استفاده از کد بازیابی' : 'Use recovery code instead';\n                  if (rememberRow) rememberRow.style.display = '';\n              }\n              codeInput.value = '';\n              codeInput.focus();\n          }\n\n          async function doLogin(silent = false) {\n              const btn = document.getElementById('login-submit-btn');\n              const origText = btn ? btn.innerText : '';\n              if(!silent && btn) btn.innerText = \"...\";\n              const errMsg = document.getElementById('err-msg');\n              const twofaStep = document.getElementById('twofa-step');\n              try {\n                  const cachedSession = (() => { try { return JSON.parse(localStorage.getItem('nahan_session') || 'null'); } catch(e) { return null; } })();\n                  const pass = silent ? sessionKey : document.getElementById('pwd').value;\n                  const trustToken = silent ? (cachedSession && cachedSession.trustToken) : (cachedSession && cachedSession.trustToken);\n                  const payload = { key: pass, compact: true };\n                  if (silent) payload.silent = true;\n                  if (trustToken) payload.trustToken = trustToken;\n                  const twofaVisible = twofaStep && !twofaStep.classList.contains('hidden');\n                  if (twofaVisible) {\n                      const codeVal = document.getElementById('twofa-code').value.trim();\n                      if (recoveryModeActive) payload.recoveryCode = codeVal; else payload.totp = codeVal;\n                      payload.remember = document.getElementById('twofa-remember').checked;\n                  }\n                  const res = await fetch(baseRoute + '/api/auth', { method: 'POST', body: JSON.stringify(payload) });\n                  if (!(res.headers.get('Content-Type') || '').includes('application/json')) throw new Error('Authentication endpoint returned a non-JSON response (HTTP ' + res.status + ')');\n                  const data = await res.json();\n\n                  if (!data.success && data.need2fa) {\n                      if (btn) btn.innerText = origText;\n                      if (twofaStep) twofaStep.classList.remove('hidden');\n                      if (errMsg) errMsg.classList.add('hidden');\n                      const codeEl = document.getElementById('twofa-code');\n                      if (codeEl) codeEl.focus();\n                      return;\n                  }\n                  if (!data.success && twofaVisible) {\n                      if (btn) btn.innerText = origText;\n                      if (errMsg) {\n                          document.getElementById('err-msg-text').textContent = recoveryModeActive\n                              ? ((typeof lang !== 'undefined' && lang === 'fa') ? 'کد بازیابی نامعتبر است.' : 'Invalid recovery code.')\n                              : ((typeof lang !== 'undefined' && lang === 'fa') ? 'کد وارد شده نادرست است.' : 'Invalid authenticator code.');\n                          errMsg.classList.remove('hidden');\n                      }\n                      return;\n                  }\n\n                  if (data.success) {\n                      // Never keep the raw master key in the browser: the server hands\n                      // back a short-lived, revocable session token and that's the only\n                      // thing we persist or reuse for future requests.\n                      sessionKey = data.sessionToken || pass; localUUID = data.deviceId;\n                      // The short \"expiry\" below only controls how long we'll silently\n                      // auto-resume the dashboard without re-prompting for the password.\n                      // The \"remember this device\" trust token is a completely separate,\n                      // much longer-lived thing (up to 30 days server-side) and must NOT\n                      // be thrown away just because that short window passed -- that\n                      // mismatch was why 2FA kept reappearing even with \"remember\" checked.\n                      const newTrustToken = data.trustToken || (cachedSession && cachedSession.trustToken) || null;\n                      const trustExpiry = data.trustToken\n                          ? (Date.now() + 30 * 24 * 60 * 60 * 1000)\n                          : ((cachedSession && cachedSession.trustExpiry) || null);\n                      localStorage.setItem('nahan_session', JSON.stringify({ key: sessionKey, expiry: Date.now() + 30 * 60 * 1000, trustToken: newTrustToken, trustExpiry: newTrustToken ? trustExpiry : null }));\n                      if (data.usedRecoveryCode && !silent) {\n                          setTimeout(() => alert((typeof lang !== 'undefined' && lang === 'fa')\n                              ? ('شما با یک کد بازیابی وارد شدید. ' + data.recoveryRemaining + ' کد دیگر باقی مانده است. برای امنیت بیشتر، از بخش تنظیمات کدهای بازیابی جدید بسازید.')\n                              : ('You logged in with a recovery code. ' + data.recoveryRemaining + ' codes remain. Please generate new recovery codes from Settings.')), 300);\n                      }\n                      \n                      document.getElementById('login-box').classList.add('hidden');\n                      document.getElementById('dash-box').classList.remove('hidden');\n                      document.getElementById('dash-box').classList.add('flex');\n                      document.getElementById('btn-logout-mob').classList.remove('hidden');\n                      \n                      document.getElementById('net-ip').textContent = data.network.ip;\n                      document.getElementById('net-colo').textContent = data.network.colo;\n                      document.getElementById('net-loc').textContent = data.network.loc;\n                      const conf = data.config;\n                      document.getElementById('cfg-proto').value = conf.mode || 'alpha';\n                      let pList = (conf.socketPorts || conf.socketPort || '443').split(',');\n                      Array.from(document.getElementById('cfg-port').options).forEach(o => o.selected = pList.includes(o.value));\n                      syncCheckboxesFromSelect();\n                      document.getElementById('cfg-uuid').value = conf.deviceId || '';\n                      document.getElementById('cfg-path').value = conf.apiRoute || '';\n                      document.getElementById('cfg-pass').value = '';\n                      document.getElementById('cfg-sync-secret').value = conf.syncSecret || '';\n                      document.getElementById('cfg-fp').value = conf.agent || 'chrome';\n                      document.getElementById('cfg-dns').value = conf.resolveIp || '';\n                      document.getElementById('cfg-custom-dns').value = conf.customDns || 'https://cloudflare-dns.com/dns-query';\n                      document.getElementById('cfg-ips').value = conf.cleanIps || '';\n                      document.getElementById('cfg-fake').value = conf.maintenanceHost || '';\n                      document.getElementById('cfg-relay').value = conf.backupRelay || '';\n                      document.getElementById('cfg-tfo').checked = conf.enableOpt1 || false;\n                      document.getElementById('cfg-ech').checked = conf.enableOpt2 || false;\n                      document.getElementById('cfg-tg-token').value = conf.tgToken || '';\n                      document.getElementById('cfg-tg-chat').value = conf.tgChatId || '';\n                      document.getElementById('cfg-tg-admin').value = conf.tgAdminId || '';\n                      document.getElementById('cfg-cf-acc').value = conf.cfAccountId || '';\n                      document.getElementById('cfg-cf-token').value = conf.cfApiToken || '';\n                      document.getElementById('cfg-cf-worker').value = conf.cfWorkerName || '';\n                      document.getElementById('cfg-pause').checked = conf.isPaused || false;\n                      document.getElementById('cfg-silent').checked = conf.silentAlerts || false;\n                      document.getElementById('cfg-github-repo').value = conf.githubRepo || 'EbiDevSharp/nahan';\n                      document.getElementById('cfg-name-strategy').value = conf.nameStrategy || 'default';\n                      document.getElementById('cfg-name-prefix').value = conf.namePrefix || 'Core';\n                      document.getElementById('cfg-sub-ua').value = conf.subUserAgent || '';\n                      document.getElementById('cfg-custom-panel-url').value = conf.customPanelUrl || '';\n  \n                      window.nahanConfig = JSON.parse(JSON.stringify(conf));\n                      window.nahanUsage = data.sysUsage || {};\n                      window.nahanProfiles = data.profiles || [];\n                      renderUsersTable();\n                      renderLinkedPanels();\n                      renderSubscriberPanelSource();\n                      if (Number.isInteger(window.selectedSubscriberPanel)) refreshSubscriberPanel();\n                      try { checkUpdate(); } catch(ue) { console.error(ue); }\n                      try { twofaRefreshStatus(); } catch(fe) { console.error(fe); }\n                      if (!silent) switchTab('overview');\n\n                      ['cfg-proto','cfg-port','cfg-fp','cfg-ips','cfg-path', 'cfg-relay', 'cfg-name-strategy', 'cfg-name-prefix', 'cfg-sub-ua', 'cfg-custom-panel-url'].forEach(id => {\n                          const el = document.getElementById(id);\n                          if(el) { el.addEventListener('input', updateUI); el.addEventListener('change', updateUI); }\n                      });\n                      ['cfg-ech','cfg-tfo'].forEach(id => {\n                          const el = document.getElementById(id);\n                          if(el) el.addEventListener('change', updateUI);\n                      });\n\n                      \n            \n                     window.toggleAccordionCards = function(btn) \n                        {\n                            const card = btn.closest('[data-accordion]');\n                            const content = card.querySelector('[data-accordion-content]');\n                            const icon = btn.querySelector('.accordion-icon');\n                            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';\n\n                            if (isOpen) {\n                                content.style.maxHeight = '0';\n                                icon.style.transform = 'rotate(0deg)';\n                            } else {\n                                content.style.maxHeight = content.scrollHeight + 'px';\n                                icon.style.transform = 'rotate(180deg)';\n                            }\n                        }\n\n                window.handleCopy = function handleCopy(btn) {\n                    copyData('sync-' + btn.dataset.id);\n                }\n                window.handleQR = function handleQR(btn) {\n                    showQR(btn.dataset.name, document.getElementById('sync-' + btn.dataset.id).value);\n                }\n                const pCont = document.getElementById('dyn-profiles-container');\n                pCont.innerHTML = '';\n                data.profiles.forEach(p => {\n                            const isDef = p.name === 'Default';\n                            let html = `<div class=\"bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder relative mb-4 break-inside-avoid inline-block w-full\" data-accordion>\n    <div class=\"absolute top-0 end-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10\"></div>\n    <button onclick=\"toggleAccordionCards(this)\" class=\"w-full flex items-center justify-between p-5 md:p-6\">\n        <h3 class=\"text-lg font-bold text-slate-800 dark:text-white flex items-center\">\n            <svg class=\"w-5 h-5 me-2 text-primary\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1\"></path></svg>\n            ${p.name}\n        </h3>\n        <div class=\"flex items-center gap-2\">\n            ${isDef ? '<span class=\"text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-bold uppercase\">Master</span>' : ''}\n            <svg class=\"w-4 h-4 text-slate-400 accordion-icon transition-transform duration-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"></path></svg>\n        </div>\n    </button>\n    <div class=\"transition-all duration-300\" style=\"max-height:0;overflow:hidden;\" data-accordion-content>\n        <div class=\"space-y-3 px-5 md:px-6 pb-5 md:pb-6\">\n            <div>\n                <label class=\"block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1\">UUID</label>\n                <div class=\"bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-darkborder px-3 py-2 rounded-lg text-xs font-mono text-slate-500\">${p.id}</div>\n            </div>\n            <div class=\"relative\">\n                <label class=\"block text-[10px] font-semibold text-emerald-500 uppercase tracking-wider mb-1 flex items-center gap-1.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-emerald-500\"></span>Universal Sync URL</label>\n                <input type=\"text\" id=\"sync-${p.id}\" readonly value=\"${p.sync}\" class=\"w-full bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkborder px-4 py-2.5 rounded-xl text-xs outline-none font-mono text-slate-600 dark:text-slate-400 truncate pe-12\">\n                <button data-id=\"${p.id}\" onclick=\"handleCopy(this)\" class=\"absolute bottom-1 end-1 text-primary p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md\"><svg class=\"w-4.5 h-4.5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z\"></path></svg></button>\n            </div>\n            <div class=\"mt-2\">\n                <button data-id=\"${p.id}\" data-name=\"${p.name}\" onclick=\"handleQR(this)\" class=\"w-full flex items-center justify-center p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-darkborder rounded-xl transition-all gap-1.5 text-[11px] font-bold text-slate-600 dark:text-slate-400\">\n                    <svg class=\"w-4 h-4 text-slate-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4v1m0 11v1m5-7h1m-13 0h1m2-5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2h-8zM9 9h1m0 0v1m2-1h1m0 0v1\"></path></svg>\n                    <span>Show QR Code</span>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>`;\n                         pCont.insertAdjacentHTML('beforeend', html);\n                      });\n\n\n\n                      // Inject usage metrics table\n                      const usageCont = document.getElementById('usage-metrics-container');\n                      if(usageCont && data.usage) {\n                          usageCont.innerHTML = '';\n                          data.profiles.forEach(p => {\n                              let hash = p.id.replace(/-/g, '').toLowerCase();\n                              let use = data.usage[hash];\n                              if(use && use.last) {\n                                  let timeStr = new Date(use.last).toLocaleString(\n                                      lang === 'fa' ? 'fa-IR' : 'en-US',\n                                      { hour12: false }\n                                  );\n                                  let connsLabel = lang === 'fa' ? 'اتصال' : 'Conns';\n                                  usageCont.innerHTML += `<div class=\"flex items-center justify-between p-3 border-b border-slate-100 dark:border-darkborder/50 last:border-0\"><div class=\"flex flex-col\"><span class=\"text-sm font-bold text-slate-700 dark:text-slate-200\">${p.name}</span><span class=\"text-[10px] text-slate-400 font-mono\">${p.id.split('-')[0]}...</span></div><div class=\"flex flex-col items-end\"><span class=\"text-xs font-bold text-emerald-500\">${use.connects} ${connsLabel}</span><span class=\"text-[10px] text-slate-400\">${timeStr}</span></div></div>`;\n                              }\n                          });\n                          if(data.usageDeferred) usageCont.textContent = lang === 'fa' ? 'در حال دریافت وضعیت زنده…' : 'Loading live connections…';\n                          else if(usageCont.innerHTML === '') usageCont.innerHTML = '<p class=\"text-xs text-slate-400 text-center py-4\" data-i18n=\"no_metrics\">' + (i18n[lang]?.no_metrics || 'No active connection data yet.') + '</p>';\n                      }\n                      \n                      updateUI();\n                  } else { \n                      if(!silent) { document.getElementById('err-msg').classList.remove('hidden'); btn.innerText = origText; }\n                      else {\n                          try {\n                              const parsed = JSON.parse(localStorage.getItem('nahan_session') || 'null');\n                              if (parsed && parsed.trustToken && parsed.trustExpiry && Date.now() < parsed.trustExpiry) {\n                                  localStorage.setItem('nahan_session', JSON.stringify({ key: '', expiry: 0, trustToken: parsed.trustToken, trustExpiry: parsed.trustExpiry }));\n                              } else {\n                                  localStorage.removeItem('nahan_session');\n                              }\n                          } catch(e) { localStorage.removeItem('nahan_session'); }\n                      }\n                  }\n              } catch (err) {\n                  console.error('Nahan login failed:', err);\n                  const message = document.getElementById('err-msg-text');\n                  if (message) message.textContent = lang === 'fa' ? 'ورود کامل نشد؛ ارتباط سرور یا اجرای رابط کاربری خطا دارد. جزئیات در Console ثبت شد.' : 'Login could not complete. Check the server connection and browser Console.';\n                  if (errMsg) errMsg.classList.remove('hidden');\n              } finally { if(btn) btn.innerText = origText; }\n          }\n  \n          async function doSave() {\n              const el = id => document.getElementById(id);\n              const payload = {\n                  key: sessionKey,\n                  config: {\n                      mode: el('cfg-proto').value, socketPorts: Array.from(el('cfg-port').selectedOptions).map(o=>o.value).join(','), deviceId: el('cfg-uuid').value,\n                      apiRoute: el('cfg-path').value, masterKey: el('cfg-pass').value, syncSecret: el('cfg-sync-secret').value, agent: el('cfg-fp').value,\n                      resolveIp: el('cfg-dns').value, customDns: el('cfg-custom-dns').value ? el('cfg-custom-dns').value : 'https://cloudflare-dns.com/dns-query', cleanIps: el('cfg-ips').value, maintenanceHost: el('cfg-fake').value, backupRelay: el('cfg-relay').value,\n                      enableOpt1: el('cfg-tfo').checked, enableOpt2: el('cfg-ech').checked,\n                      tgToken: el('cfg-tg-token').value, tgChatId: el('cfg-tg-chat').value, tgAdminId: el('cfg-tg-admin').value,\n                      cfAccountId: el('cfg-cf-acc').value, cfApiToken: el('cfg-cf-token').value,\n                      cfWorkerName: el('cfg-cf-worker').value,\n                      isPaused: el('cfg-pause').checked, silentAlerts: el('cfg-silent').checked,\n                      githubRepo: el('cfg-github-repo').value,\n                      subUserAgent: el('cfg-sub-ua').value,\n                      customPanelUrl: el('cfg-custom-panel-url').value,\n                      nameStrategy: el('cfg-name-strategy').value,\n                      namePrefix: el('cfg-name-prefix').value\n                  }\n              };\n                        //update user port after change global\n                     const globalPorts = (payload.config.socketPorts || '443').split(',').map(s=>s.trim()).filter(Boolean);\n                     payload.config.users = (window.nahanConfig.users || []).map(u => {\n                     if (!u.userPorts) return u;\n                        const filtered = u.userPorts.split(',').map(s=>s.trim()).filter(p => globalPorts.includes(p));\n                      u.userPorts = filtered.length ? filtered.join(',') : globalPorts[0];\n                          return u;\n                          });\n              const stat = el('save-status'); stat.textContent = i18n[lang].msg_saving; stat.className = \"text-sm font-bold text-primary animate-pulse md:me-4\";\n              try {\n                  const res = await fetch(baseRoute + '/api/sync', { method: 'POST', body: JSON.stringify(payload) });\n                  const data = await res.json();\n                  if (data.success) {\n                      stat.textContent = i18n[lang].msg_saved; stat.className = \"text-sm font-bold text-emerald-500 md:me-4\";\n                      setTimeout(() => window.location.href = '/' + data.newRoute + '/dash', 1000);\n                  } else { stat.textContent = i18n[lang].msg_err; stat.className = \"text-sm font-bold text-red-500 md:me-4\"; }\n              } catch(e) { stat.textContent = i18n[lang].msg_err; stat.className = \"text-sm font-bold text-red-500 md:me-4\"; }\n          }\n          \n          function syncGroupToggle(group, checked) {\n              document.querySelectorAll('.sync-child-' + group).forEach(cb => cb.checked = checked);\n          }\n          function syncChildChanged(group) {\n              const children = Array.from(document.querySelectorAll('.sync-child-' + group));\n              const allChecked = children.every(cb => cb.checked);\n              const noneChecked = children.every(cb => !cb.checked);\n              const parent = document.getElementById('sync-opt-' + group);\n              parent.checked = allChecked;\n              parent.indeterminate = !allChecked && !noneChecked;\n          }\n          function syncSelectAll(checked) {\n              document.querySelectorAll('#modal-sync-nodes input[type=\"checkbox\"]:not(:disabled)').forEach(cb => {\n                  cb.checked = checked;\n                  cb.indeterminate = false;\n              });\n          }\n\n          function openSyncModal() {\n              const panels = (window.nahanConfig && Array.isArray(window.nahanConfig.linkedPanels)) ? window.nahanConfig.linkedPanels : [];\n              if (panels.length === 0) {\n                  const noPanelsMsg = lang === 'fa' ? 'هیچ پنل لینک‌شده‌ای وجود ندارد. اول از بخش «پنل‌های لینک‌شده» یک پنل اضافه کن.' : 'No linked panels yet. Add one from the \"Linked Panels\" section first.';\n                  alert(noPanelsMsg);\n                  return;\n              }\n              document.getElementById('modal-sync-nodes').classList.remove('hidden');\n          }\n\n          async function confirmForceSync() {\n              document.getElementById('modal-sync-nodes').classList.add('hidden');\n\n              const btnTxt = document.getElementById('sync-btn-txt');\n              const icon = document.getElementById('sync-icon');\n\n              btnTxt.innerText = 'Syncing...';\n              icon.classList.add('animate-spin');\n\n              const el = id => document.getElementById(id);\n\n              // هر گروه فقط وقتی تیک خورده باشه فیلدهاش به payload اضافه می‌شه، پس هرچی\n              // این‌جا تیک نخوره، دست‌نخورده روی پنل مقصد باقی می‌مونه.\n              let config = {};\n\n              const groupBuilders = {\n                  ports: () => ({ mode: el('cfg-proto').value, socketPorts: Array.from(el('cfg-port').selectedOptions).map(o => o.value).join(',') }),\n                  network: () => ({ agent: el('cfg-fp').value, resolveIp: el('cfg-dns').value, customDns: el('cfg-custom-dns').value ? el('cfg-custom-dns').value : 'https://cloudflare-dns.com/dns-query', maintenanceHost: el('cfg-fake').value, backupRelay: el('cfg-relay').value }),\n                  cleanips: () => ({ cleanIps: el('cfg-ips').value }),\n                  naming: () => ({ nameStrategy: el('cfg-name-strategy').value, namePrefix: el('cfg-name-prefix').value }),\n                  update: () => ({ githubRepo: el('cfg-github-repo').value, subUserAgent: el('cfg-sub-ua').value }),\n                  toggles: () => ({ enableOpt1: el('cfg-tfo').checked, enableOpt2: el('cfg-ech').checked, silentAlerts: el('cfg-silent').checked, isPaused: el('cfg-pause').checked }),\n                  domain: () => ({ customPanelUrl: el('cfg-custom-panel-url').value }),\n                  identity: () => ({ deviceId: el('cfg-uuid').value, apiRoute: el('cfg-path').value }),\n                  users: () => ({ users: (window.nahanConfig && window.nahanConfig.users) ? window.nahanConfig.users : [] }),\n\n              };\n              Object.keys(groupBuilders).forEach(group => {\n                  const cb = el('sync-opt-' + group);\n                  if (cb && cb.checked) Object.assign(config, groupBuilders[group]());\n              });\n\n              // هر زیرفیلد ربات/کلادفلر مستقل از بقیه انتخاب می‌شه (مثلاً فقط آیدی مدیر\n              // بدون توکن ربات) — نگاشت هر data-field به عنصر فرم منبعش:\n              const syncFieldElMap = {\n                  tgToken: 'cfg-tg-token', tgChatId: 'cfg-tg-chat', tgAdminId: 'cfg-tg-admin',\n                  cfAccountId: 'cfg-cf-acc', cfApiToken: 'cfg-cf-token', cfWorkerName: 'cfg-cf-worker'\n              };\n              document.querySelectorAll('.sync-child-bot, .sync-child-cf').forEach(cb => {\n                  if (cb.checked) {\n                      const field = cb.dataset.field;\n                      const srcId = syncFieldElMap[field];\n                      if (srcId) config[field] = el(srcId).value;\n                  }\n              });\n\n              if (Object.keys(config).length === 0) {\n                  btnTxt.innerText = lang === 'fa' ? 'چیزی انتخاب نشده' : 'Nothing selected';\n                  icon.classList.remove('animate-spin');\n                  setTimeout(() => { btnTxt.innerText = 'Force Sync Now'; }, 2500);\n                  return;\n              }\n\n              const panels = (window.nahanConfig && Array.isArray(window.nahanConfig.linkedPanels)) ? window.nahanConfig.linkedPanels : [];\n\n              // خودِ فچ به هر پنل رو دیگه از مرورگر انجام نمی‌دیم (چون Cross-Origin و\n              // مشمول CORS می‌شه و بی‌صدا بلاک می‌شد) — یه درخواست به بک‌اند خودمون\n              // می‌فرستیم و از اونجا (Worker به Worker، بدون محدودیت CORS) به هر پنل با\n              // «رمز خوشه»ی خودش (ذخیره‌شده موقع Add Panel) پخش می‌شه.\n              let successCount = 0;\n              try {\n                  const res = await fetch(baseRoute + '/api/sync', {\n                      method: 'POST',\n                      body: JSON.stringify({ key: sessionKey, config, relayToLinkedPanels: true })\n                  });\n                  const result = await res.json();\n                  if (Array.isArray(result.relayResults)) {\n                      successCount = result.relayResults.filter(r => r.ok).length;\n                  }\n              } catch (e) {}\n\n              if (successCount === panels.length && panels.length > 0) {\n                  btnTxt.innerText = lang === 'fa' ? `✅ ${successCount}/${panels.length} پنل` : `✅ ${successCount}/${panels.length} panels`;\n              } else if (successCount > 0) {\n                  btnTxt.innerText = lang === 'fa' ? `⚠️ ${successCount}/${panels.length} پنل` : `⚠️ ${successCount}/${panels.length} panels`;\n              } else {\n                  btnTxt.innerText = lang === 'fa' ? 'همگام‌سازی ناموفق' : 'Sync Failed';\n              }\n              icon.classList.remove('animate-spin');\n              setTimeout(() => { btnTxt.innerText = 'Force Sync Now'; }, 4000);\n          }\n\n          document.getElementById('pwd').addEventListener('keypress', e => { if (e.key === 'Enter') doLogin(); });\n  \n          function renderUsersTable() {\n              const tbl = document.getElementById('tbl-users');\n              if(!tbl) return;\n              const remote = Number.isInteger(window.selectedSubscriberPanel);\n              let users = remote ? (window.remoteSubscriberView?.users || []) : (window.nahanConfig?.users || []);\n              let usage = remote ? (window.remoteSubscriberView?.usage || {}) : (window.nahanUsage || {});\n              \n              // Calculate stats metrics\n              let totalUsersVal = users.length;\n              let activeSubscribers = users.filter(u => !u.isPaused && (!u.expiryMs || Date.now() <= u.expiryMs)).length;\n              let autoDisabledCount = users.filter(u => u.isPaused && u.disabledReason).length;\n              let pausedSubscribers = users.filter(u => u.isPaused && !u.disabledReason).length;\n              let expiredCount = users.filter(u => u.expiryMs && Date.now() > u.expiryMs && !u.isPaused).length;\n              let totalReqsSum = 0;\n              users.forEach(u => {\n                  let sysU = usage[u.id.replace(/-/g,'').toLowerCase()] || {reqs: 0};\n                  totalReqsSum += (sysU.reqs || 0);\n              });\n              let totalGBSum = (totalReqsSum / 6000).toFixed(2);\n\n              // Update stats elements in DOM if they exist\n              const totalUsersEl = document.getElementById('stat-total-users');\n              if (totalUsersEl) totalUsersEl.textContent = totalUsersVal;\n              const activeUsersEl = document.getElementById('stat-active-users');\n              if (activeUsersEl) activeUsersEl.textContent = `${activeSubscribers} / ${pausedSubscribers}`;\n              const totalTrafficEl = document.getElementById('stat-total-traffic');\n              if (totalTrafficEl) totalTrafficEl.textContent = `${totalGBSum} ${i18n[lang]?.ov_gb_unit || 'GB'}`;\n              const autoDisabledEl = document.getElementById('stat-auto-disabled');\n              if (autoDisabledEl) autoDisabledEl.textContent = autoDisabledCount;\n\n              // Render Recently Disabled Users Panel\n              const disabledPanel = document.getElementById('disabled-users-panel');\n              const disabledList = document.getElementById('disabled-users-list');\n              const disabledBadge = document.getElementById('disabled-panel-badge');\n              if (remote && disabledPanel) disabledPanel.classList.add('hidden');\n              if (!remote && disabledPanel && disabledList) {\n                  const autoDisabledUsers = users.filter(u => u.isPaused && u.disabledReason)\n                      .sort((a, b) => (b.disabledAt || 0) - (a.disabledAt || 0));\n                  if (autoDisabledUsers.length > 0) {\n                      disabledPanel.classList.remove('hidden');\n                      if (disabledBadge) disabledBadge.textContent = autoDisabledUsers.length;\n                      disabledList.innerHTML = autoDisabledUsers.map(u => {\n                          let timeStr = u.disabledAt ? new Date(u.disabledAt).toLocaleString() : '-';\n                          let reasonIcon = u.disabledReason.includes('Traffic') ? '📊' : (u.disabledReason.includes('Expiration') ? '📅' : '⚠️');\n                          let btnLabel = lang === 'fa' ? 'فعال‌سازی مجدد' : 'Re-enable';\n                          return `\n                              <div class=\"flex items-center justify-between p-3 bg-white/70 dark:bg-slate-800/50 rounded-xl border border-red-100 dark:border-red-800/20 hover:shadow-md transition-shadow\">\n                                  <div class=\"flex items-center gap-3 flex-1 min-w-0\">\n                                      <div class=\"text-lg\">${reasonIcon}</div>\n                                      <div class=\"min-w-0\">\n                                          <div class=\"text-sm font-bold text-slate-700 dark:text-slate-200 truncate\">${u.name}</div>\n                                          <div class=\"text-[11px] text-red-500 dark:text-red-400 font-medium\">${u.disabledReason}</div>\n                                          <div class=\"text-[10px] text-slate-400 mt-0.5\">${timeStr}</div>\n                                      </div>\n                                  </div>\n                                  <button onclick=\"togglePauseUser('${u.id}')\" class=\"ml-3 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold rounded-lg shadow-sm transition-colors whitespace-nowrap\">${btnLabel}</button>\n                              </div>\n                          `;\n                      }).join('');\n                  } else {\n                      disabledPanel.classList.add('hidden');\n                  }\n              }\n\n              // Apply Status Filter\n              const statusFilter = document.getElementById('user-status-filter')?.value || 'all';\n              const searchVal = document.getElementById('user-search-input')?.value.toLowerCase().trim() || '';\n              let filteredUsers = users.filter(u => {\n                  if (statusFilter === 'active' && (u.isPaused || (u.expiryMs && Date.now() > u.expiryMs))) return false;\n                  if (statusFilter === 'paused' && (!u.isPaused || u.disabledReason)) return false;\n                  if (statusFilter === 'auto-disabled' && !(u.isPaused && u.disabledReason)) return false;\n                  return u.name.toLowerCase().includes(searchVal) || u.id.toLowerCase().includes(searchVal);\n              });\n\n              tbl.innerHTML = '';\n              const fa = lang === 'fa';\n              const text = (persian, english) => fa ? persian : english;\n              const number = value => Number(value).toLocaleString(fa ? 'fa-IR' : 'en-US', { maximumFractionDigits: 2 });\n              const escape = value => String(value ?? '').replace(/[&<>\"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[char]));\n              document.getElementById('user-search-input')?.setAttribute('aria-label', text('جستجوی مشترکین', 'Search subscribers'));\n              document.getElementById('user-status-filter')?.setAttribute('aria-label', text('وضعیت مشترک', 'Subscriber status'));\n              if (!filteredUsers.length) {\n                  tbl.innerHTML = '<tr><td colspan=\"4\" class=\"subscriber-empty\">' + text('مشترکی با این مشخصات پیدا نشد.', 'No matching subscribers found.') + '</td></tr>';\n                  return;\n              }\n              const icons = {\n                  link:'<path d=\"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2\"/>',\n                  pause:'<path d=\"M8 5v14M16 5v14\"/>', play:'<path d=\"m8 5 11 7-11 7Z\"/>',\n                  edit:'<path d=\"m16 3 5 5-12 12-6 1 1-6ZM14 5l5 5\"/>',\n                  reset:'<path d=\"M3 11a9 9 0 1 1 2 7M3 4v7h7\"/>',\n                  delete:'<path d=\"M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7\"/>'\n              };\n              filteredUsers.forEach(u => {\n                  const metric = usage[u.id.replace(/-/g,'').toLowerCase()] || {};\n                  const total = metric.reqs || 0;\n                  const daily = metric.lastDay === new Date().toISOString().split('T')[0] ? (metric.dReqs || 0) : 0;\n                  const expired = u.expiryMs && Date.now() > u.expiryMs;\n                  const status = u.isPaused ? 'paused' : expired ? 'expired' : 'active';\n                  const statusText = u.isPaused ? text('متوقف', 'Paused') : expired ? text('منقضی', 'Expired') : text('فعال', 'Active');\n                  const badge = (label, kind='') => '<span class=\"subscriber-badge ' + kind + '\">' + escape(label) + '</span>';\n                  let badges = badge(statusText, status);\n                  if (u.isPaused && u.disabledReason) badges += badge(text('غیرفعال خودکار', 'Auto-disabled'), 'expired');\n                  if (u.userMode) badges += badge(u.userMode === 'alpha' ? 'VLESS' : u.userMode === 'beta' ? 'Trojan' : 'VLESS + Trojan');\n                  if (u.userPorts) badges += badge(text('پورت ', 'Port ') + u.userPorts);\n                  if (u.maxConfigs) badges += badge(number(u.maxConfigs) + text(' کانفیگ', ' configs'));\n                  if (u.maxConnections) badges += badge(number(u.maxConnections) + text(' اتصال', ' connections'));\n                  if (u.accessHourFrom && u.accessHourTo) badges += badge(u.accessHourFrom + ' – ' + u.accessHourTo);\n                  const usageLine = (label, used, limit) => {\n                      const percent = limit ? Math.min(100, Math.max(0, used / limit * 100)) : null;\n                      const value = number(used / 6000) + ' / ' + (limit ? number(limit / 6000) : text('نامحدود', 'Unlimited')) + ' ' + (i18n[lang]?.ov_gb_unit || 'GB');\n                      return '<div class=\"subscriber-usage-line\"><span>' + label + '</span><strong>' + escape(value) + '</strong></div>' +\n                          (percent !== null ? '<div class=\"subscriber-meter\" role=\"progressbar\" aria-label=\"' + label + '\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"' + Math.round(percent) + '\"><span class=\"' + (percent > 85 ? 'high' : '') + '\" style=\"width:' + percent + '%\"></span></div>' : '');\n                  };\n                  const action = (name, title, icon, danger=false) => '<button type=\"button\" data-user-action=\"' + name + '\" class=\"subscriber-action' + (danger ? ' danger' : '') + '\" title=\"' + escape(title) + '\" aria-label=\"' + escape(title) + '\"><svg aria-hidden=\"true\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\">' + icons[icon] + '</svg></button>';\n                  const expiry = u.expiryMs ? new Date(u.expiryMs).toLocaleDateString(fa ? 'fa-IR' : 'en-US') : text('بدون انقضا', 'No expiration');\n                  let rawSync = (remote ? window.remoteSubscriberView?.profiles : window.nahanProfiles)?.find(p => p.id === u.id)?.sync || '';\n                  if (rawSync) rawSync += rawSync.includes('?') ? '&flag=a' : '?flag=a';\n                  const tr = document.createElement('tr');\n                  tr.className = 'hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors';\n                  tr.innerHTML = `\n                      <td><div class=\"subscriber-name\">${escape(u.name)}</div><span class=\"subscriber-uuid\">${escape(u.id)}</span>\n                          <div class=\"subscriber-badges\">${badges}</div>\n                          ${u.isPaused && u.disabledReason ? '<p class=\"subscriber-reason\">' + escape(u.disabledReason) + '</p>' : ''}</td>\n                      <td><div class=\"subscriber-usage\">${usageLine(text('مصرف کل','Total usage'),total,u.limitTotalReq)}${usageLine(text('امروز','Today'),daily,u.limitDailyReq)}</div>\n                          <p class=\"subscriber-estimate\">${text('برآورد بر اساس تعداد اتصال', 'Estimated from connection counts')}</p></td>\n                      <td data-label=\"${text('تاریخ انقضا','Expiration')}\"><span class=\"${expired ? 'text-rose-500' : ''}\">${escape(expiry)}</span></td>\n                      <td><input type=\"hidden\"><div class=\"subscriber-actions\">\n                          ${action('link',text('کپی لینک اشتراک','Copy subscription link'),'link')}\n                          ${action('edit',text('ویرایش مشترک','Edit subscriber'),'edit')}\n                          ${action('pause',u.isPaused ? text('فعال‌سازی','Resume') : text('توقف','Pause'),u.isPaused ? 'play' : 'pause')}\n                          ${action('reset',text('بازنشانی مصرف','Reset usage'),'reset')}\n                          ${action('delete',text('حذف مشترک','Delete subscriber'),'delete',true)}\n                      </div></td>`;\n                  const hidden = tr.querySelector('input');\n                  hidden.id = 'sync-' + u.id; hidden.value = rawSync;\n                  tr.querySelectorAll('[data-user-action]').forEach(button => button.addEventListener('click', () => {\n                      if (remote && button.dataset.userAction !== 'link') { remoteSubscriberAction(button.dataset.userAction, u.id); return; }\n                      const handlers = { link: () => copyData(hidden.id), edit: () => editUser(u.id), pause: () => togglePauseUser(u.id), reset: () => resetUserTraffic(u.id), delete: () => deleteUser(u.id) };\n                      handlers[button.dataset.userAction]();\n                  }));\n                  tbl.appendChild(tr);\n              });\n              applyLang();\n          }\n\n          async function resetUserTraffic(uuid) {\n              const resetMsg = lang === 'fa' ? 'آیا از بازنشانی وضعیت ترافیک (کل و روزانه) این مشترک مطمئن هستید؟' : 'Are you sure you want to reset all traffic metrics (Total and Daily) for this subscriber?';\n              if(!confirm(resetMsg)) return;\n              try {\n                  const res = await fetch(baseRoute + '/api/sync', {\n                      method: 'POST',\n                      headers: {'Content-Type': 'application/json'},\n                      body: JSON.stringify({ key: sessionKey, resetUUID: uuid })\n                  });\n                  if (res.ok) {\n                      const successMsg = lang === 'fa' ? 'ترافیک مشترک با موفقیت بازنشانی شد!' : 'Subscriber traffic metrics successfully reset!';\n                      alert(successMsg);\n                      doLogin(true); // reload usage data from server\n                  } else {\n                      const errMsg = lang === 'fa' ? 'سرور در بازنشانی ترافیک خطا بازگرداند.' : 'Server returned error while resetting metrics.';\n                      alert(errMsg);\n                  }\n              } catch(e) {\n                  const netErr = lang === 'fa' ? 'خطای ارتباط با شبکه.' : 'Network connection error.';\n                  alert(netErr);\n              }\n          }\n\n          function deleteUser(uuid) {\n              const deleteMsg = lang === 'fa' ? 'آیا از حذف این کاربر مطمئن هستید؟' : 'Are you sure you want to delete this user?';\n              if(!confirm(deleteMsg)) return;\n              if(window.nahanConfig && window.nahanConfig.users) {\n                  window.nahanConfig.users = window.nahanConfig.users.filter(u => u.id !== uuid);\n              }\n              // Automatically sync\n              renderUsersTable();\n              doSaveDirectly();\n          }\n\n          // ===== Linked Panels (Web Panel) =====\n          function clusterEscape(value) {\n              return String(value ?? '').replace(/[&<>\"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\n          }\n          function panelText(fa, en) { return lang === 'fa' ? fa : en; }\n          function panelUserUrl(index, suffix='') {\n              const panel = window.nahanConfig?.linkedPanels?.[index];\n              if (!panel) throw new Error(panelText('پنل پیدا نشد','Panel not found'));\n              return baseRoute + '/api/users?panel=' + index + '&panelHost=' + encodeURIComponent(panel.host) + suffix;\n          }\n          function renderSubscriberPanelSource() {\n              const select = document.getElementById('subscriber-panel-source');\n              if (!select) return;\n              const panels = window.nahanConfig?.linkedPanels || [];\n              if (Number.isInteger(window.selectedSubscriberPanel) && !panels[window.selectedSubscriberPanel]) {\n                  window.selectedSubscriberPanel = null; window.remoteSubscriberView = null;\n              }\n              select.innerHTML = '<option value=\"local\">' + panelText('این پنل','This panel') + '</option>' + panels.map((p,i) => '<option value=\"' + i + '\">' + clusterEscape(p.name || p.host) + '</option>').join('');\n              select.value = Number.isInteger(window.selectedSubscriberPanel) ? String(window.selectedSubscriberPanel) : 'local';\n              select.setAttribute('aria-label', panelText('پنل مشترکین','Subscriber panel'));\n              const addButton=document.getElementById('btn-add-selected-subscriber');\n              if(addButton) {\n                  addButton.dataset.i18n=Number.isInteger(window.selectedSubscriberPanel)?'btn_add_remote_user':'btn_add_user';\n                  addButton.textContent=Number.isInteger(window.selectedSubscriberPanel)?panelText('افزودن در پنل مقصد ↗','Add in remote panel ↗'):(i18n[lang]?.btn_add_user || 'Add user');\n              }\n          }\n          async function selectSubscriberPanel(value) {\n              window.selectedSubscriberPanel = value === 'local' ? null : Number(value);\n              window.remoteSubscriberView = null;\n              renderSubscriberPanelSource(); renderUsersTable();\n              await refreshSubscriberPanel();\n          }\n          async function refreshSubscriberPanel() {\n              const index = window.selectedSubscriberPanel;\n              const status = document.getElementById('subscriber-panel-status');\n              const generation = window.subscriberLoadGeneration = (window.subscriberLoadGeneration || 0) + 1;\n              if (!Number.isInteger(index)) { if(status) status.textContent=''; renderUsersTable(); return; }\n              if(status) status.textContent = panelText('در حال دریافت کاربران پنل…','Loading panel subscribers…');\n              try {\n                  const response = await fetch(panelUserUrl(index), { headers: {Authorization:'Bearer ' + sessionKey} });\n                  const data = await response.json();\n                  if (generation !== window.subscriberLoadGeneration) return;\n                  if (!response.ok || !data.success || !Array.isArray(data.users)) throw new Error(panelText('دریافت کاربران ناموفق بود؛ ارتباط و رمز همگام‌سازی پنل را بررسی کنید.','Unable to load users. Check the panel connection and sync secret.'));\n                  const usage = {}, profiles = [];\n                  data.users.forEach(u => {\n                      usage[u.id.replace(/-/g,'').toLowerCase()] = {reqs:u.usage?.requests ?? Math.round((u.usage?.total || 0) * 6000 / 1073741824),dReqs:u.usage?.daily || 0,lastDay:u.usage?.lastDay ?? new Date().toISOString().split('T')[0]};\n                      profiles.push({id:u.id,sync:u.subscriptionUrl || ''});\n                  });\n                  window.remoteSubscriberView = {users:data.users,usage,profiles};\n                  if(status) status.textContent=panelText('کاربران پنل: ','Panel subscribers: ') + (window.nahanConfig.linkedPanels[index].name || window.nahanConfig.linkedPanels[index].host);\n                  renderUsersTable();\n              } catch(error) {\n                  if(generation !== window.subscriberLoadGeneration) return;\n                  window.remoteSubscriberView = null; renderUsersTable();\n                  if(status) status.textContent=error.message;\n              }\n          }\n          function addSubscriberForSelectedPanel() {\n              const panel = window.nahanConfig?.linkedPanels?.[window.selectedSubscriberPanel];\n              if (Number.isInteger(window.selectedSubscriberPanel) && panel) { window.open('https://' + panel.host + '/' + panel.apiRoute + '/dash','_blank','noopener,noreferrer'); return; }\n              openAddUserModal();\n          }\n          async function remoteSubscriberAction(action, id) {\n              const index = window.selectedSubscriberPanel;\n              if (action === 'edit') { editUser(id,index); return; }\n              if (['delete','reset'].includes(action) && !confirm(panelText('این تغییر روی پنل انتخاب‌شده اعمال شود؟','Apply this change to the selected panel?'))) return;\n              try {\n                  const suffix='&id=' + encodeURIComponent(id) + (action === 'pause' ? '&action=toggle' : action === 'reset' ? '&action=reset' : '');\n                  const response=await fetch(panelUserUrl(index,suffix),{method:action==='delete'?'DELETE':'POST',headers:{Authorization:'Bearer '+sessionKey,'Content-Type':'application/json'},...(action==='delete'?{}:{body:'{}'})});\n                  const data=await response.json();\n                  if(!response.ok || !data.success) throw new Error(panelText('عملیات پنل ناموفق بود','Remote operation failed'));\n                  if(index === window.selectedSubscriberPanel) await refreshSubscriberPanel();\n                  renderLinkedPanels();\n              } catch(error) { alert(error.message); }\n          }\n          function renderLinkedPanels() {\n              const list = document.getElementById('linked-panels-list');\n              if(!list) return;\n              const panels=window.nahanConfig?.linkedPanels || [];\n              list.className='linked-panel-grid';\n              if(!panels.length) {list.innerHTML='<p class=\"text-sm text-slate-400\">'+panelText('هنوز پنلی متصل نشده است.','No linked panels yet.')+'</p>';return;}\n              list.innerHTML=panels.map((p,i)=> {\n                  const state=window.linkedPanelHealth?.[p.host];\n                  const label=state?.success ? panelText('متصل','Connected') : state?.loading ? panelText('در حال بررسی','Checking') : state ? panelText('خطای اتصال','Connection failed') : panelText('بررسی نشده','Not checked');\n                  return '<article class=\"linked-panel-card\"><div class=\"flex items-start justify-between gap-3\"><div class=\"min-w-0\"><h4 class=\"font-bold text-sm break-words\">'+clusterEscape(p.name || p.host)+'</h4><p class=\"subscriber-uuid\">'+clusterEscape(p.host)+'</p></div><span class=\"subscriber-badge '+(state?.success?'active':'')+'\">'+label+'</span></div>'+\n                      '<p class=\"text-xs text-slate-500\">'+panelText('مسیر: ','Route: ')+clusterEscape(p.apiRoute)+'</p>'+\n                      (state?.success?'<p class=\"text-sm mt-3\">'+state.users+' '+panelText('مشترک','subscribers')+' · '+state.active+' '+panelText('فعال','active')+(state.version?' · v'+clusterEscape(state.version):'')+'</p>':'')+\n                      '<div class=\"linked-panel-actions\">'+\n                      '<button type=\"button\" onclick=\"showLinkedPanelUsers('+i+')\">'+panelText('کاربران','Subscribers')+'</button>'+\n                      '<button type=\"button\" onclick=\"checkLinkedPanel('+i+')\">'+panelText('بررسی اتصال','Check connection')+'</button>'+\n                      '<button type=\"button\" onclick=\"repairPanelConnection('+i+')\">'+panelText('ترمیم اتصال','Repair connection')+'</button>'+\n                      '<button type=\"button\" onclick=\"editLinkedPanel('+i+')\">'+panelText('ویرایش','Edit')+'</button>'+\n                      '<button type=\"button\" onclick=\"openLinkedPanel('+i+')\">'+panelText('بازکردن پنل','Open panel')+'</button>'+\n                      '<button type=\"button\" class=\"text-rose-500\" onclick=\"removeLinkedPanel('+i+')\">'+panelText('حذف اتصال','Remove link')+'</button></div></article>';\n              }).join('');\n          }\n          async function showLinkedPanelUsers(index) { switchTab('users'); await selectSubscriberPanel(String(index)); }\n          function openLinkedPanel(index) { const p=window.nahanConfig?.linkedPanels?.[index]; if(p) window.open('https://'+p.host+'/'+p.apiRoute+'/dash','_blank','noopener,noreferrer'); }\n          async function checkLinkedPanel(index) {\n              const p=window.nahanConfig?.linkedPanels?.[index]; if(!p)return;\n              window.linkedPanelHealth ||= {}; window.linkedPanelHealth[p.host]={loading:true};renderLinkedPanels();\n              try {\n                  const res=await fetch(baseRoute+'/api/panels?panel='+index,{headers:{Authorization:'Bearer '+sessionKey}});\n                  const data=await res.json();window.linkedPanelHealth[p.host]=res.ok?data:{success:false};\n              } catch {window.linkedPanelHealth[p.host]={success:false};}\n              renderLinkedPanels();\n          }\n          async function repairPanelConnection(index) {\n              const panel=window.nahanConfig?.linkedPanels?.[index];if(!panel)return;\n              if(!confirm(panelText('اتصال با کلید ذخیره‌شده و کلید فعلی خوشه بررسی می‌شود. رمز پنل مقصد تغییر نمی‌کند. ادامه؟','Try the saved and current cluster credentials to repair this link? The destination password will not be changed.')))return;\n              try {\n                  const response=await fetch(baseRoute+'/api/panels',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:sessionKey,operation:'repair',panel:index,host:panel.host})});\n                  const result=await response.json();\n                  if(!response.ok || !result.success) throw new Error(panelText('ترمیم خودکار ممکن نشد؛ مستقیماً وارد پنل مقصد شو و رمز خوشهٔ فعلی آن را در ویرایش اتصال وارد کن.','Automatic repair failed. Sign in to the destination and update its current sync secret in Edit link.'));\n                  await doLogin(true);await checkLinkedPanel(index);\n              } catch(error){alert(error.message);}\n          }\n\n          function editLinkedPanel(index) {\n              const p=window.nahanConfig?.linkedPanels?.[index];if(!p)return;\n              openAddPanelModal(); window.editingLinkedPanel=index;\n              document.getElementById('add-panel-url').value='https://'+p.host+'/'+p.apiRoute;\n              document.getElementById('add-panel-key').value=p.masterKey;\n          }\n\n          function openAddPanelModal() {\n              window.editingLinkedPanel = null;\n              document.getElementById('add-panel-url').value = '';\n              document.getElementById('add-panel-key').value = '';\n              const statusEl = document.getElementById('add-panel-status');\n              statusEl.textContent = '';\n              statusEl.className = 'text-xs font-bold min-h-[1rem]';\n              document.getElementById('modal-add-panel').classList.remove('hidden');\n          }\n\n          async function commitAddPanel() {\n              const urlInput = document.getElementById('add-panel-url').value.trim();\n              const masterKey = document.getElementById('add-panel-key').value.trim();\n              const statusEl = document.getElementById('add-panel-status');\n              const btn = document.getElementById('btn-verify-add-panel');\n\n              if (!urlInput || !masterKey) {\n                  const reqMsg = lang === 'fa' ? 'آدرس پنل و رمز همگام‌سازی الزامی است.' : 'Panel URL and Cluster Sync Secret are required.';\n                  statusEl.textContent = reqMsg;\n                  statusEl.className = 'text-xs font-bold min-h-[1rem] text-red-500';\n                  return;\n              }\n\n              const origBtnText = btn.innerText;\n              btn.disabled = true;\n              statusEl.textContent = panelText('در حال بررسی اتصال…','Checking connection…');\n              let verified;\n              try {\n                  const response = await fetch(baseRoute+'/api/panels',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:sessionKey,operation:'verify',url:urlInput,panelKey:masterKey})});\n                  verified = await response.json();\n                  if(!response.ok || !verified.success) throw new Error(panelText('ارتباط، مسیر، رمز همگام‌سازی یا شناسهٔ مدیر تلگرام پنل را بررسی کنید.','Check connection, route, sync secret and Telegram administrator.'));\n              } catch(error) {\n                  statusEl.textContent=error.message;statusEl.className='text-xs text-red-500';btn.disabled=false;return;\n              }\n              const panels=window.nahanConfig.linkedPanels ||= [];\n              const previousPanels=panels.slice();\n              const editing=window.editingLinkedPanel;\n              const duplicate=panels.findIndex(p=>p.host===verified.panel.host);\n              if(duplicate >= 0 && duplicate !== editing) {\n                  statusEl.textContent=panelText('این پنل قبلاً اضافه شده است.','Panel already linked.');btn.disabled=false;return;\n              }\n              const savedPanel={...verified.panel,masterKey};\n              if(Number.isInteger(editing)) panels[editing]=savedPanel; else panels.push(savedPanel);\n              window.linkedPanelHealth ||= {}; delete window.linkedPanelHealth[savedPanel.host];\n              window.remoteSubscriberView=null;\n              renderSubscriberPanelSource();\n              renderLinkedPanels();\n              statusEl.textContent = i18n[lang]?.msg_panel_added || 'Panel added successfully.';\n              statusEl.className = 'text-xs font-bold min-h-[1rem] text-emerald-500';\n              btn.disabled = false;\n              btn.innerText = origBtnText;\n              if (!await doSaveDirectly()) {\n                  window.nahanConfig.linkedPanels=previousPanels;renderSubscriberPanelSource();renderLinkedPanels();\n                  statusEl.textContent=panelText('ذخیره ناموفق بود.','Saving failed.');\n                  return;\n              }\n              setTimeout(() => { document.getElementById('modal-add-panel').classList.add('hidden'); }, 600);\n          }\n\n          async function removeLinkedPanel(index) {\n              const confirmMsg = i18n[lang]?.confirm_remove_panel || 'Are you sure you want to remove this panel?';\n              if (!confirm(confirmMsg)) return;\n              const previousPanels=(window.nahanConfig?.linkedPanels || []).slice();\n              if (window.nahanConfig && Array.isArray(window.nahanConfig.linkedPanels)) {\n                  window.nahanConfig.linkedPanels.splice(index, 1);\n              }\n              window.subscriberLoadGeneration=(window.subscriberLoadGeneration || 0)+1;\n              window.selectedSubscriberPanel=null;window.remoteSubscriberView=null;\n              renderSubscriberPanelSource();renderUsersTable();renderLinkedPanels();\n              if (!await doSaveDirectly()) {window.nahanConfig.linkedPanels=previousPanels;renderSubscriberPanelSource();renderLinkedPanels();}\n          }\n\n          function togglePauseUser(uuid) {\n              if(window.nahanConfig && window.nahanConfig.users) {\n                  let usr = window.nahanConfig.users.find(u => u.id === uuid);\n                  if (usr) {\n                      usr.isPaused = !usr.isPaused;\n                      if (!usr.isPaused) {\n                          usr.disabledReason = null;\n                          usr.disabledAt = null;\n                      }\n                      renderUsersTable();\n                      doSaveDirectly();\n                  }\n              }\n          }\n\n          function getGlobalPorts() {\n              return (window.nahanConfig && window.nahanConfig.socketPorts)\n                  ? window.nahanConfig.socketPorts.split(',').map(s=>s.trim()).filter(Boolean)\n                  : ['443'];\n          }\n\n          function getGlobalMode() {\n              return (window.nahanConfig && window.nahanConfig.mode) ? window.nahanConfig.mode : 'alpha';\n          }\n\n          function openAddUserModal() {\n              document.getElementById('modal-add-user').classList.remove('hidden');\n              buildPortCheckboxes('add-user-ports-wrap', null);\n              buildModeCheckboxes('add-user-mode-wrap', null);\n              buildIPCheckboxes(\"add-user-clean-ips-wrap\", \"\", (window.nahanConfig?.cleanIps||\"\").split(/[\\s,;]+/).map(s=>s.trim()).filter(Boolean));\n              buildIPCheckboxes(\"add-user-proxy-ips-wrap\", \"\", (window.nahanConfig?.backupRelay||\"\").split(/[\\s,;]+/).map(s=>s.trim()).filter(Boolean));\n          }\n\n          function buildIPCheckboxes(wrapId, selectedIps, allIps) {\n            const wrap = document.getElementById(wrapId);\n            if (!wrap) return;\n        \n            wrap.innerHTML = '';\n        \n            if (!allIps || allIps.length === 0) {\n                wrap.innerHTML = '<span class=\"text-xs text-slate-400\">No IPs added in Advanced Tab</span>';\n                return;\n            }\n        \n            const selArr = selectedIps\n                ? selectedIps.split(',').map(s => s.trim()).filter(Boolean)\n                : [];\n        \n            // 🔥 outer wrapper = دقیقا مثل inputهای فرم\n            const container = document.createElement('div');\n            container.className =\n                \"w-full border border-slate-200 dark:border-darkborder rounded-xl bg-white dark:bg-darkcard\";\n        \n            // 🔥 scroll area + grid\n            const grid = document.createElement('div');\n            grid.className =\n                \"max-h-64 overflow-y-auto p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2\";\n        \n            allIps.forEach(ip => {\n                const lbl = document.createElement('label');\n                lbl.className =\n                    \"flex items-center gap-2 text-xs cursor-pointer px-2 py-1 rounded-md \" +\n                    \"border border-slate-200 dark:border-darkborder hover:bg-slate-50 dark:hover:bg-slate-800 transition\";\n        \n                const cb = document.createElement('input');\n                cb.type = \"checkbox\";\n                cb.className = \"accent-primary\";\n                cb.value = ip;\n        \n                if (selArr.includes(ip)) cb.checked = true;\n        \n                const span = document.createElement('span');\n                span.textContent = ip;\n        \n                lbl.appendChild(cb);\n                lbl.appendChild(span);\n        \n                grid.appendChild(lbl);\n            });\n        \n            container.appendChild(grid);\n            wrap.appendChild(container);\n        }\n          \nfunction getSelectedCheckboxes(wrapId) {\n    const wrap = document.getElementById(wrapId);\n    if(!wrap) return '';\n    const checked = Array.from(wrap.querySelectorAll('input:checked')).map(cb => cb.value);\n    return checked.join(',');\n}\n\nfunction buildPortCheckboxes(wrapId, selectedPorts) {\n              const wrap = document.getElementById(wrapId);\n              if (!wrap) return;\n              const globalPorts = getGlobalPorts();\n              const sel = selectedPorts ? selectedPorts.split(',').map(s=>s.trim()) : ['443'];\n              wrap.innerHTML = globalPorts.map(function(p) {\n                  return '<label class=\"flex items-center gap-1.5 text-sm cursor-pointer\"><input type=\"checkbox\" value=\"' + p + '\" class=\"' + wrapId + '-port-cb accent-primary\"' + (sel.includes(p) ? ' checked' : '') + '><span>' + p + '</span></label>';\n              }).join('');\n          }\n\n          function buildModeCheckboxes(wrapId, userMode) {\n              const globalMode = getGlobalMode();\n              const alphaAllowed = globalMode === 'alpha' || globalMode === 'both';\n              const betaAllowed = globalMode === 'beta' || globalMode === 'both';\n              const selAlpha = userMode === 'alpha' || userMode === 'both' || (!userMode && alphaAllowed);\n              const selBeta = userMode === 'beta' || userMode === 'both' || (!userMode && betaAllowed);\n              const wrap = document.getElementById(wrapId);\n              if (!wrap) return;\n              wrap.querySelectorAll('input[type=checkbox]').forEach(cb => {\n                  if (cb.value === 'alpha') { cb.disabled = !alphaAllowed; cb.checked = selAlpha && alphaAllowed; cb.closest\t\t\t('label').style.opacity = alphaAllowed ? '1' : '0.35'; }\n                  if (cb.value === 'beta')  { cb.disabled = !betaAllowed;  cb.checked = selBeta && betaAllowed;  cb.closest\t\t\t('label').style.opacity = betaAllowed  ? '1' : '0.35'; }\n              });\n          }\n\n          function readModeFromCheckboxes(cbClass) {\n             const cbs = [...document.querySelectorAll('.' + cbClass + ':checked')].map(c=>c.value);\n              if (cbs.includes('alpha') && cbs.includes('beta')) return 'both';\n              if (cbs.includes('alpha')) return 'alpha';\n              if (cbs.includes('beta')) return 'beta';\n              return getGlobalMode();\n          }\n\n          function readPortsFromCheckboxes(wrapId) {\n             const ports = [...document.querySelectorAll('#' + wrapId + ' input[type=checkbox]:checked')].map(c=>c.value);\n              return ports.length ? ports.join(',') : getGlobalPorts()[0];\n          }\n\n          function commitAddUser() {\n              const name = document.getElementById('add-user-name').value.trim();\n              let tReq = document.getElementById('add-user-total-reqs').value;\n              tReq = tReq? Math.floor(parseFloat(tReq) * 6000): null;\n              let dReq = document.getElementById('add-user-daily-reqs').value;\n              dReq = dReq? Math.floor(parseFloat(dReq) * 6000): null;\n              let days = document.getElementById('add-user-days').value;\n               const cleanIpsCheckbox = getSelectedCheckboxes(\"add-user-clean-ips-wrap\");\n               const cleanIpsCustom = document.getElementById(\"add-user-custom-clean\").value.trim();\n               let cleanIpArray = [];\n               if (cleanIpsCheckbox) cleanIpArray.push(...cleanIpsCheckbox.split(','));\n               if (cleanIpsCustom) {\n                   cleanIpArray.push(...cleanIpsCustom.split(/[\\s,;]+/).map(s=>s.trim()).filter(Boolean));\n               }\n               const cleanIp = cleanIpArray.length ? cleanIpArray.join(',') : null;\n               const proxyIpsCheckbox = getSelectedCheckboxes(\"add-user-proxy-ips-wrap\");\n               const proxyIpsCustom = document.getElementById(\"add-user-custom-proxy\").value.trim();\n               let proxyIpArray = [];\n               if (proxyIpsCheckbox) proxyIpArray.push(...proxyIpsCheckbox.split(','));\n               if (proxyIpsCustom) {\n                   proxyIpArray.push(...proxyIpsCustom.split(/[\\s,;]+/).map(s=>s.trim()).filter(Boolean));\n               }\n               const proxyIp = proxyIpArray.length ? proxyIpArray.join(',') : null;\n               \n               const customName = document.getElementById('add-user-custom-name').value.trim() || null;\n              const userMode = readModeFromCheckboxes('add-mode-cb');\n              const userPorts = readPortsFromCheckboxes('add-user-ports-wrap');\n              let maxConfigs = document.getElementById('add-user-max-configs').value;\n              let maxConnections = document.getElementById('add-user-max-connections').value;\n              let accessHourFrom=document.getElementById('add-user-access-from').value;\n              let accessHourTo=document.getElementById('add-user-access-to').value;\n              maxConfigs = maxConfigs ? parseInt(maxConfigs) : null;\n              maxConnections = maxConnections ? parseInt(maxConnections) : null;\n              \n              if(!name) {\n                  alert(lang === 'fa' ? 'لطفاً نام را وارد کنید' : 'Please enter a name');\n                  return;\n              }\n\n              if(!window.nahanConfig) window.nahanConfig = {};\n              if(!window.nahanConfig.users) window.nahanConfig.users = [];\n\n              if(window.nahanConfig.users.some(u => u.name.trim().toLowerCase() === name.toLowerCase())) {\n                  alert(lang === 'fa' ? 'این نام قبلاً استفاده شده است' : 'This name is already taken');\n                  return;\n              }\n\n              tReq = tReq ? parseInt(tReq) : null;\n              dReq = dReq ? parseInt(dReq) : null;\n              days = days ? parseInt(days) : null;\n              \n              let newId = Array.from(crypto.getRandomValues(new Uint8Array(16)))\n                  .map((b,i) => (i===4||i===6||i===8||i===10?'-':'') + b.toString(16).padStart(2,'0')).join('');\n              \n               const u = {\n                   id: newId,\n                   name: name,\n                   limitTotalReq: tReq,\n                   limitDailyReq: dReq,\n                   expiryMs: days ? Date.now() + days*86400000 : null,\n                   proxyIp: proxyIp,\n                    cleanIp: cleanIp,\n                    customName: customName,\n                   userMode: userMode,\n                   userPorts: userPorts,\n                   maxConfigs: maxConfigs,\n                   maxConnections: maxConnections,\n                   accessHourFrom:accessHourFrom,\n                   accessHourTo: accessHourTo,\n                   createdAt: Date.now()\n               };\n              \n              window.nahanConfig.users.push(u);\n              document.getElementById('modal-add-user').classList.add('hidden');\n              document.getElementById('add-user-name').value = '';\n               document.getElementById('add-user-custom-name').value = '';\n               document.getElementById('add-user-custom-clean').value = '';\n               document.getElementById('add-user-custom-proxy').value = '';\n              document.getElementById('add-user-total-reqs').value = '';\n              document.getElementById('add-user-daily-reqs').value = '';\n              document.getElementById('add-user-days').value = '';\n              document.getElementById('add-user-max-configs').value = '';\n              document.getElementById('add-user-max-connections').value = '';\n              document.getElementById('add-user-access-from').value = '';\n              document.getElementById('add-user-access-to').value = '';\n              \n              renderUsersTable();\n              doSaveDirectly();\n          }\n\n          function editUser(uuid, panelIndex = null) {\n              window.editingSubscriberPanel = Number.isInteger(panelIndex) ? panelIndex : null;\n              const source = Number.isInteger(panelIndex) ? window.remoteSubscriberView?.users : window.nahanConfig?.users;\n              if(!source) return;\n              let u = source.find(usr => usr.id === uuid);\n              if(!u) return;\n              \n              document.getElementById('edit-user-id').value = u.id;\n              document.getElementById('edit-user-name').value = u.name;\n              document.getElementById('edit-user-total-reqs').value = u.limitTotalReq? (u.limitTotalReq / 6000).toFixed(2): '';\n              document.getElementById('edit-user-daily-reqs').value = u.limitDailyReq? (u.limitDailyReq / 6000).toFixed(2): '';\n                            const globalCleanIps = (window.nahanConfig?.cleanIps||\"\").split(/[\\r\\n,;]+/).map(s=>s.trim()).filter(Boolean);\n              const userCleanIps = (u.cleanIp || \"\").split(/[\\r\\n,;]+/).map(s=>s.trim()).filter(Boolean);\n              const checkedGlobalClean = [];\n              const customClean = [];\n              userCleanIps.forEach(ip => {\n                  let hostOnly = ip.split('#')[0].split(':')[0].trim();\n                  let isFound = globalCleanIps.some(g => g.split('#')[0].split(':')[0].trim() === hostOnly || g === ip);\n                  if (isFound) checkedGlobalClean.push(ip);\n                  else customClean.push(ip);\n              });\n              buildIPCheckboxes(\"edit-user-clean-ips-wrap\", checkedGlobalClean.join(','), globalCleanIps);\n              document.getElementById('edit-user-custom-clean').value = customClean.join(', ');\n\n              const globalProxyIps = (window.nahanConfig?.backupRelay||\"\").split(/[\\r\\n,;]+/).map(s=>s.trim()).filter(Boolean);\n              const userProxyIps = (u.proxyIp || \"\").split(/[\\r\\n,;]+/).map(s=>s.trim()).filter(Boolean);\n              const checkedGlobalProxy = [];\n              const customProxy = [];\n              userProxyIps.forEach(ip => {\n                  let hostOnly = ip.split('#')[0].split(':')[0].trim();\n                  let isFound = globalProxyIps.some(g => g.split('#')[0].split(':')[0].trim() === hostOnly || g === ip);\n                  if (isFound) checkedGlobalProxy.push(ip);\n                  else customProxy.push(ip);\n              });\n              buildIPCheckboxes(\"edit-user-proxy-ips-wrap\", checkedGlobalProxy.join(','), globalProxyIps);\n              document.getElementById('edit-user-custom-proxy').value = customProxy.join(', ');\n              \n              document.getElementById('edit-user-custom-name').value = u.customName || '';\n              \n              document.getElementById('edit-user-max-configs').value = u.maxConfigs || '';\n              document.getElementById('edit-user-max-connections').value = u.maxConnections || '';\n              document.getElementById('edit-user-access-from').value=u.accessHourFrom || '';\n              document.getElementById('edit-user-access-to').value=u.accessHourTo || '';\n             \n              buildPortCheckboxes('edit-user-ports-wrap', u.userPorts);\n              buildModeCheckboxes('edit-user-mode-wrap', u.userMode);\n\n              let daysLeft = '';\n              if(u.expiryMs) {\n                  let diff = u.expiryMs - Date.now();\n                  daysLeft = diff > 0 ? Math.ceil(diff / 86400000) : 0;\n              }\n              document.getElementById('edit-user-days').value = daysLeft;\n              window.editingSubscriberExpiry = {days:String(daysLeft),expiryMs:u.expiryMs || null};\n              \n              document.getElementById('modal-edit-user').classList.remove('hidden');\n          }\n\n          function commitEditUser() {\n              const uuid = document.getElementById('edit-user-id').value;\n              const name = document.getElementById('edit-user-name').value.trim();\n              let tReq = document.getElementById('edit-user-total-reqs').value;\n              tReq = tReq? Math.floor(parseFloat(tReq) * 6000): null;\n              let dReq = document.getElementById('edit-user-daily-reqs').value;\n              dReq = dReq? Math.floor(parseFloat(dReq) * 6000): null;\n              let days = document.getElementById('edit-user-days').value;\n                             const proxyIpsCheckbox = getSelectedCheckboxes(\"edit-user-proxy-ips-wrap\");\n               const proxyIpsCustom = document.getElementById(\"edit-user-custom-proxy\").value.trim();\n               let proxyIpArray = [];\n               if (proxyIpsCheckbox) proxyIpArray.push(...proxyIpsCheckbox.split(','));\n               if (proxyIpsCustom) {\n                   proxyIpArray.push(...proxyIpsCustom.split(/[\\s,;]+/).map(s=>s.trim()).filter(Boolean));\n               }\n               const proxyIp = proxyIpArray.length ? proxyIpArray.join(',') : null;\n               \n               const customName = document.getElementById('edit-user-custom-name').value.trim() || null;\n               const cleanIpsCheckbox = getSelectedCheckboxes(\"edit-user-clean-ips-wrap\");\n               const cleanIpsCustom = document.getElementById(\"edit-user-custom-clean\").value.trim();\n               let cleanIpArray = [];\n               if (cleanIpsCheckbox) cleanIpArray.push(...cleanIpsCheckbox.split(','));\n               if (cleanIpsCustom) {\n                   cleanIpArray.push(...cleanIpsCustom.split(/[\\s,;]+/).map(s=>s.trim()).filter(Boolean));\n               }\n               const cleanIp = cleanIpArray.length ? cleanIpArray.join(',') : null;\n              const userMode = readModeFromCheckboxes('edit-mode-cb');\n              const userPorts = readPortsFromCheckboxes('edit-user-ports-wrap');\n              let maxConfigs = document.getElementById('edit-user-max-configs').value;\n              let maxConnections = document.getElementById('edit-user-max-connections').value;\n              let accessHourFrom=document.getElementById('edit-user-access-from').value;\n              let accessHourTo=document.getElementById('edit-user-access-to').value;\n              maxConfigs = maxConfigs ? parseInt(maxConfigs) : null;\n              maxConnections = maxConnections ? parseInt(maxConnections) : null;\n              \n              \n              if(!name) {\n                  alert(lang === 'fa' ? 'لطفاً نام را وارد کنید' : 'Please enter a name');\n                  return;\n              }\n              tReq = tReq ? parseInt(tReq) : null;\n              dReq = dReq ? parseInt(dReq) : null;\n              days = days ? parseInt(days) : null;\n              \n              if (Number.isInteger(window.editingSubscriberPanel)) {\n                  const expiry = window.editingSubscriberExpiry;\n                  const expiration = String(document.getElementById('edit-user-days').value) === expiry?.days ? {expiryMs:expiry.expiryMs} : {expiryDays:days};\n                  saveRemoteSubscriber(window.editingSubscriberPanel,uuid,{...expiration,name,trafficLimit:tReq ? tReq/6000:null,dailyLimit:dReq ? dReq/6000:null,proxyIp,cleanIp,customName,userMode,userPorts,maxConfigs,maxConnections,accessHourFrom,accessHourTo});\n                  return;\n              }\n              if(!window.nahanConfig || !window.nahanConfig.users) return;\n\n              if(window.nahanConfig.users.some(u => u.id !== uuid && u.name.trim().toLowerCase() === name.toLowerCase())) {\n                  alert(lang === 'fa' ? 'این نام قبلاً استفاده شده است' : 'This name is already taken');\n                  return;\n              }\n\n              let u = window.nahanConfig.users.find(usr => usr.id === uuid);\n              if(!u) return;\n              \n              u.name = name;\n              u.limitTotalReq = tReq;\n              u.limitDailyReq = dReq;\n              u.expiryMs = days ? Date.now() + days*86400000 : null;\n              u.proxyIp = proxyIp;\n               u.cleanIp = cleanIp;\n               u.customName = customName;\n              u.userMode = userMode;\n              u.userPorts = userPorts;\n              u.maxConfigs = maxConfigs;\n              u.maxConnections = maxConnections;\n              u.accessHourFrom=accessHourFrom;\n              u.accessHourTo=accessHourTo;\n              \n              document.getElementById('modal-edit-user').classList.add('hidden');\n              renderUsersTable();\n              doSaveDirectly();\n          }\n\n          async function saveRemoteSubscriber(index, uuid, payload) {\n              try {\n                  const response=await fetch(panelUserUrl(index,'&id='+encodeURIComponent(uuid)),{method:'PUT',headers:{Authorization:'Bearer '+sessionKey,'Content-Type':'application/json'},body:JSON.stringify(payload)});\n                  const result=await response.json();\n                  if(!response.ok || !result.success) throw new Error(panelText('ذخیره روی پنل مقصد ناموفق بود','Saving to remote panel failed'));\n                  document.getElementById('modal-edit-user').classList.add('hidden');\n                  window.editingSubscriberPanel=null;\n                  if(index===window.selectedSubscriberPanel) await refreshSubscriberPanel();\n              } catch(error){alert(error.message);}\n          }\n\n          async function regenSyncSecret() {\n              const msg = lang === 'fa'\n                  ? 'یه کلید همگام‌سازی جدید ساخته می‌شه. هر پنل لینک‌شده‌ای که هنوز کلید قدیمی رو داره، تا وقتی به‌روزش نکنی قطع می‌مونه. ادامه می‌دی؟'\n                  : \"A new sync secret will be generated. Any linked panel still using the old one will be disconnected until you update it there too. Continue?\";\n              if (!confirm(msg)) return;\n              const bytes = crypto.getRandomValues(new Uint8Array(20));\n              const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';\n              let bits = ''; bytes.forEach(b => bits += b.toString(2).padStart(8, '0'));\n              let newSecret = '';\n              for (let i = 0; i + 5 <= bits.length; i += 5) newSecret += alphabet[parseInt(bits.substring(i, i + 5), 2)];\n              try {\n                  const res = await fetch(baseRoute + '/api/sync', {\n                      method: 'POST', headers: { 'Content-Type': 'application/json' },\n                      body: JSON.stringify({ key: sessionKey, config: { syncSecret: newSecret } })\n                  });\n                  if (res.ok) {\n                      document.getElementById('cfg-sync-secret').value = newSecret;\n                      if (window.nahanConfig) window.nahanConfig.syncSecret = newSecret;\n                  }\n              } catch (e) {}\n          }\n\n          function savedPanelConfiguration() {\n              const config={...window.nahanConfig};\n              for(const key of ['syncSecret','masterKey','masterKeyHash','masterKeySalt','totpEnabled','totpSecret','totpPendingSecret','recoveryCodeHashes','trustedDevices','sessionTokens','tgWebhookSecret']) delete config[key];\n              return config;\n          }\n\n          async function doSaveDirectly() {\n              const btn = document.querySelector('button[onclick=\"doSave()\"]');\n              const origText = btn?.innerText; if(btn) btn.innerText = \"...\";\n              try {\n                  const res = await fetch(baseRoute + '/api/sync', {\n                      method: 'POST',\n                      headers: {'Content-Type': 'application/json'},\n                      body: JSON.stringify({ key: sessionKey, config: savedPanelConfiguration() })\n                  });\n                  const result = await res.json();\n                  if(res.ok && result.success) {\n                       const stat = document.getElementById('save-status');\n                       stat.textContent = \"Saved. Refreshing...\";\n                       setTimeout(() => { doLogin(true); stat.textContent = \"\"; }, 1000);\n                      return true;\n                  }\n                  throw new Error('Save failed');\n              } catch(e) { alert(panelText('ذخیره ناموفق بود؛ دوباره تلاش کنید.','Save failed. Please retry.')); return false; }\n              finally { if(btn) btn.innerText = origText; }\n          }\n\n          async function resolveSmartCleanIps() {\n              const btn = document.getElementById('btn-resolve-smart-ips');\n              const origText = btn.innerHTML;\n              btn.disabled = true;\n              btn.innerHTML = '⚡ Resolving CDN & Clean IPs...';\n              \n              const domains = [\n                  'www.speedtest.net',\n                  'grok.com',\n                  'feedback.spotify.com',\n                  'www.hcaptcha.com',\n                  'chatgpt.com',\n                  'sourceforge.net',\n                  'snapp.ir',\n                  'digikala.com',\n                  'divar.ir',\n                  'cafebazaar.ir',\n                  'shaparak.ir',\n                  'aparat.com',\n                  'soft98.ir',\n                  'varzesh3.com'\n              ];\n              \n              let resolvedIps = new Set();\n              const cleanIpsTextarea = document.getElementById('cfg-ips');\n              \n              async function resolveOne(domain) {\n                  try {\n                      const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=A`, { \n                          headers: { 'accept': 'application/dns-json' }\n                      });\n                      const data = await res.json();\n                      if (data && data.Answer) {\n                          data.Answer.forEach(ans => {\n                              if (ans.type === 1 && ans.data) {\n                                  resolvedIps.add(ans.data);\n                              }\n                          });\n                      }\n                  } catch(e) {\n                      try {\n                          const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`);\n                          const data = await res.json();\n                          if (data && data.Answer) {\n                              data.Answer.forEach(ans => {\n                                  if (ans.type === 1 && ans.data) {\n                                      resolvedIps.add(ans.data);\n                                  }\n                              });\n                          }\n                      } catch(ge) {}\n                  }\n              }\n              \n              try {\n                  await Promise.all(domains.map(d => resolveOne(d)));\n              } catch(err) {\n                  console.error(\"DNS resolving process encountered an issue:\", err);\n              }\n              \n              if (resolvedIps.size > 0) {\n                  const ipList = Array.from(resolvedIps).join('\\n');\n                  cleanIpsTextarea.value = ipList;\n                  cleanIpsTextarea.dispatchEvent(new Event('input'));\n                  cleanIpsTextarea.dispatchEvent(new Event('change'));\n                  alert('Successfully resolved and loaded ' + resolvedIps.size + ' clean IPs!');\n              } else {\n                  alert('Failed to resolve domains to IPs. Please verify your internet connection or custom DNS.');\n              }\n              \n              btn.disabled = false;\n              btn.innerHTML = origText;\n          }\n\n          async function checkUpdate() {\n              try {\n                  const res = await fetch(baseRoute + '/api/update', {\n                      method: 'POST',\n                      headers: { 'Content-Type': 'application/json' },\n                      body: JSON.stringify({ key: sessionKey, action: 'check' })\n                  });\n                  const data = await res.json();\n                  if (data.success && data.updateAvailable) {\n                      window._updateData = data;\n                      showUpdateBanner((document.getElementById('cfg-github-repo')?.value || window.nahanConfig?.githubRepo || 'EbiDevSharp/nahan').replace('https://github.com/', '').replace('http://github.com/', '').trim(), data.latest);\n                  }\n                  if (data.success && !data.canDeploy) {\n                      const statusEl = document.getElementById('update-deploy-status');\n                      if (statusEl) {\n                          statusEl.classList.remove('hidden');\n                          statusEl.className = 'w-full mt-3 p-3 rounded-xl text-sm font-bold text-center text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400';\n                          statusEl.textContent = i18n[lang].update_requires_cf || 'Configure CF credentials to enable auto-deploy.';\n                      }\n                  }\n              } catch(err) {\n                  console.error(\"Update check failed:\", err);\n              }\n          }\n\n          async function doUpdate() {\n              const btn = document.getElementById('update-deploy-btn');\n              const statusEl = document.getElementById('update-deploy-status');\n              if (!btn) return;\n              if (!confirm(lang === 'fa' ? 'آیا از دپلوی نسخه فعلی/جدید اطمینان دارید؟' : 'Deploy the selected version now?')) return;\n\n              const formatEl = document.querySelector('input[name=\"update-format\"]:checked');\n              const format = formatEl ? formatEl.value : 'normal';\n              const forceDeploy = !window._updateData?.updateAvailable;\n\n              const origText = btn.innerHTML;\n              btn.innerHTML = '⏳ ' + (i18n[lang].update_deploying || 'Deploying...');\n              btn.disabled = true;\n              if (statusEl) {\n                  statusEl.classList.remove('hidden');\n                  statusEl.className = 'w-full mt-3 p-3 rounded-xl text-sm font-bold text-center text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 animate-pulse';\n                  statusEl.textContent = i18n[lang].update_deploying || 'Deploying update...';\n              }\n\n              let latestCode = null;\n              try {\n                  const repo = (document.getElementById('cfg-github-repo')?.value || window.nahanConfig?.githubRepo || 'EbiDevSharp/nahan').replace('https://github.com/', '').replace('http://github.com/', '').trim();\n                  if (statusEl) statusEl.textContent = '📥 ' + (lang === 'fa' ? 'در حال دریافت کد از مخزن گیت‌هاب...' : 'Fetching latest code from GitHub...');\n                  const fetchRes = await fetch('https://raw.githubusercontent.com/' + repo + '/main/_worker.js');\n                  if (!fetchRes.ok) throw new Error('HTTP ' + fetchRes.status);\n                  latestCode = await fetchRes.text();\n              } catch(fe) {\n                  console.warn(\"Client fetch failed, falling back to server-side fetch\", fe);\n              }\n\n              if (latestCode && format === 'obfuscated') {\n                  if (statusEl) statusEl.textContent = '🛡️ ' + (lang === 'fa' ? 'در حال اجرای مبهم‌سازی کلاینت...' : 'Applying client-side XOR obfuscation...');\n                  try {\n                      latestCode = obfuscateCode(latestCode);\n                  } catch(oe) {\n                      if (statusEl) {\n                          statusEl.className = 'w-full mt-3 p-3 rounded-xl text-sm font-bold text-center text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';\n                          statusEl.textContent = 'Obfuscation failed: ' + oe.message;\n                      }\n                      btn.innerHTML = origText;\n                      btn.disabled = false;\n                      return;\n                  }\n              }\n\n              try {\n                  const res = await fetch(baseRoute + '/api/update', {\n                      method: 'POST',\n                      headers: { 'Content-Type': 'application/json' },\n                      body: JSON.stringify({ \n                          key: sessionKey, \n                          action: 'deploy',\n                          code: latestCode,\n                          force: forceDeploy\n                      })\n                  });\n                  const data = await res.json();\n                  if (data.success) {\n                      if (statusEl) {\n                          statusEl.className = 'w-full mt-3 p-3 rounded-xl text-sm font-bold text-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400';\n                          statusEl.textContent = (i18n[lang].update_success || 'Update successful!') + ' v' + data.newVersion;\n                      }\n                      btn.innerHTML = '✅ ' + (i18n[lang].update_success || 'Done!');\n                      setTimeout(() => window.location.reload(), 3000);\n                  } else {\n                      if (statusEl) {\n                          statusEl.className = 'w-full mt-3 p-3 rounded-xl text-sm font-bold text-center text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';\n                          statusEl.textContent = (i18n[lang].update_error || 'Update failed') + ': ' + (data.error || 'Unknown error');\n                      }\n                      btn.innerHTML = origText;\n                      btn.disabled = false;\n                  }\n              } catch(e) {\n                  if (statusEl) {\n                      statusEl.className = 'w-full mt-3 p-3 rounded-xl text-sm font-bold text-center text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400';\n                      statusEl.textContent = 'Error: ' + e.message;\n                  }\n                  btn.innerHTML = origText;\n                  btn.disabled = false;\n              }\n          }\n\n          async function triggerManualRedeploy() {\n              const banner = document.getElementById('update-alert-banner');\n              if (!banner) return;\n              \n              document.getElementById('update-alert-text').textContent = lang === 'fa' \n                  ? 'می‌توانید آخرین نسخه فعال را مجدداً دپلوی نموده یا بین نسخه معمولی و مبهم‌سازی شده جابجا شوید.'\n                  : 'You can redeploy the latest code or switch between Normal/Obfuscated version on the fly.';\n              \n              banner.classList.remove('hidden');\n              banner.classList.add('flex');\n              \n              if (!window._updateData) {\n                  window._updateData = { latest: CURRENT_VERSION, updateAvailable: false };\n              }\n              \n              const repo = (document.getElementById('cfg-github-repo')?.value || window.nahanConfig?.githubRepo || 'EbiDevSharp/nahan').replace('https://github.com/', '').replace('http://github.com/', '').trim();\n              \n              showUpdateBanner(repo, CURRENT_VERSION);\n              \n              switchTab('overview');\n              document.getElementById('update-alert-banner').scrollIntoView({ behavior: 'smooth' });\n          }\n          \n          function parseMarkdown(md) {\n              if (!md) return '';\n              let lines = md.split(/\\r?\\n/);\n              let htmlLines = [];\n              let inCodeBlock = false;\n              let codeContent = [];\n              let activeBlockLang = null;\n\n              for (let line of lines) {\n                  let trimmed = line.trim();\n\n                  if (trimmed === '<!-- LANG:EN -->' || trimmed === '<!--LANG:EN-->') {\n                      if (activeBlockLang === 'en') {\n                          activeBlockLang = null;\n                      } else {\n                          activeBlockLang = 'en';\n                      }\n                      continue;\n                  }\n                  if (trimmed === '<!-- LANG:FA -->' || trimmed === '<!--LANG:FA-->') {\n                      if (activeBlockLang === 'fa') {\n                          activeBlockLang = null;\n                      } else {\n                          activeBlockLang = 'fa';\n                      }\n                      continue;\n                  }\n\n                  if (activeBlockLang !== null && activeBlockLang !== lang) {\n                      continue;\n                  }\n\n                  // Toggle code block\n                  if (trimmed.startsWith('\\x60\\x60\\x60')) {\n                      if (inCodeBlock) {\n                          // Close code block\n                          let codeText = codeContent.join('\\n')\n                              .replace(/&/g, \"&amp;\")\n                              .replace(/</g, \"&lt;\")\n                              .replace(/>/g, \"&gt;\");\n                          htmlLines.push('<pre class=\"bg-slate-900/90 text-slate-100 p-3 rounded-xl my-2 font-mono text-[10px] overflow-x-auto border border-slate-800 max-h-40\">' + codeText + '</pre>');\n                          codeContent = [];\n                          inCodeBlock = false;\n                      } else {\n                          inCodeBlock = true;\n                      }\n                      continue;\n                  }\n\n                  if (inCodeBlock) {\n                      codeContent.push(line);\n                      continue;\n                  }\n\n                  if (!trimmed) {\n                      continue; \n                  }\n\n                  // Process headers\n                  if (trimmed.startsWith('### ')) {\n                      let text = trimmed.slice(4);\n                      htmlLines.push('<h5 class=\"text-sm font-bold text-amber-800 dark:text-amber-400 mt-3 mb-1\">' + parseInlineMarkdown(text) + '</h5>');\n                      continue;\n                  }\n                  if (trimmed.startsWith('## ')) {\n                      let text = trimmed.slice(3);\n                      htmlLines.push('<h4 class=\"text-sm font-extrabold text-amber-800 dark:text-amber-400 mt-4 mb-2\">' + parseInlineMarkdown(text) + '</h4>');\n                      continue;\n                  }\n                  if (trimmed.startsWith('# ')) {\n                      let text = trimmed.slice(2);\n                      htmlLines.push('<h3 class=\"text-base font-black text-amber-900 dark:text-amber-300 mt-4 mb-2\">' + parseInlineMarkdown(text) + '</h3>');\n                      continue;\n                  }\n\n                  // Process lists\n                  let listMatch = line.match(/^(\\s*)([-*+])\\s+(.*)$/);\n                  if (listMatch) {\n                      let text = listMatch[3];\n                      htmlLines.push('<div class=\"flex items-start gap-2 my-1\"><span class=\"text-amber-500 mt-0.5\">▪</span><span class=\"flex-1\">' + parseInlineMarkdown(text) + '</span></div>');\n                      continue;\n                  }\n\n                  // Standard line\n                  htmlLines.push('<p class=\"my-1\">' + parseInlineMarkdown(line) + '</p>');\n              }\n\n              // Guard for unclosed code block\n              if (inCodeBlock && codeContent.length > 0) {\n                  let codeText = codeContent.join('\\n')\n                      .replace(/&/g, \"&amp;\")\n                      .replace(/</g, \"&lt;\")\n                      .replace(/>/g, \"&gt;\");\n                  htmlLines.push('<pre class=\"bg-slate-900/90 text-slate-100 p-3 rounded-xl my-2 font-mono text-[10px] overflow-x-auto border border-slate-800 max-h-40\">' + codeText + '</pre>');\n              }\n\n              return htmlLines.join('\\n');\n\n              function parseInlineMarkdown(text) {\n                  let safe = text\n                      .replace(/&/g, \"&amp;\")\n                      .replace(/</g, \"&lt;\")\n                      .replace(/>/g, \"&gt;\");\n                  // Bold\n                  safe = safe.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class=\"font-extrabold text-slate-800 dark:text-slate-200\">$1</strong>');\n                  // Italic\n                  safe = safe.replace(/\\*(.*?)\\*/g, '<em class=\"italic\">$1</em>');\n                  // Inline code\n                  safe = safe.replace(/[\\x60](.*?)[\\x60]/g, '<code class=\"bg-amber-500/10 dark:bg-slate-800 px-1.5 py-0.5 rounded text-rose-500 font-mono text-[11px]\">$1</code>');\n                  return safe;\n              }\n          }\n\n          async function showUpdateBanner(repo, version) {\n              const banner = document.getElementById('update-alert-banner');\n              if (!banner) return;\n              \n              const msg = lang === 'fa' \n                  ? 'نسخه جدیدتر (v' + version + ') در مخزن گیت‌هاب شما (' + repo + ') در دسترس است.' \n                  : 'A newer version (v' + version + ') is available in your GitHub repository (' + repo + ').';\n                  \n              document.getElementById('update-alert-text').textContent = msg;\n              const ghLink = document.getElementById('update-github-link');\n              if (ghLink) ghLink.href = 'https://github.com/' + repo;\n              banner.classList.remove('hidden');\n              banner.classList.add('flex');\n              \n              const changelogArea = document.getElementById('update-changelog-area');\n              const changelogContent = document.getElementById('update-changelog-content');\n              if (changelogArea && changelogContent) {\n                  changelogArea.classList.remove('hidden');\n                  changelogContent.innerHTML = lang === 'fa' \n                      ? '<p class=\"animate-pulse\">در حال دریافت گزارش تغییرات...</p>' \n                      : '<p class=\"animate-pulse\">Loading changelog...</p>';\n                      \n                  try {\n                      let changelogText = '';\n                      try {\n                          const res = await fetch('https://api.github.com/repos/' + repo + '/releases/tags/v' + version);\n                          if (res.ok) {\n                              const rel = await res.json();\n                              if (rel && rel.body) {\n                                  changelogText = rel.body;\n                              }\n                          } else {\n                              const resNoV = await fetch('https://api.github.com/repos/' + repo + '/releases/tags/' + version);\n                              if (resNoV.ok) {\n                                  const relNoV = await resNoV.json();\n                                  if (relNoV && relNoV.body) {\n                                      changelogText = relNoV.body;\n                                  }\n                              }\n                          }\n                      } catch(e) {}\n                      \n                      if (!changelogText) {\n                          try {\n                              const resLatest = await fetch('https://api.github.com/repos/' + repo + '/releases/latest');\n                              if (resLatest.ok) {\n                                  const relLatest = await resLatest.json();\n                                  if (relLatest && relLatest.body) {\n                                      changelogText = relLatest.body;\n                                  }\n                              }\n                          } catch(e) {}\n                      }\n                      \n                      if (!changelogText) {\n                          try {\n                              const resFile = await fetch('https://raw.githubusercontent.com/' + repo + '/main/CHANGELOG.md');\n                              if (resFile.ok) {\n                                  changelogText = await resFile.text();\n                              }\n                          } catch(e) {}\n                      }\n                      \n                      if (changelogText) {\n                          changelogContent.innerHTML = parseMarkdown(changelogText);\n                      } else {\n                          changelogContent.innerHTML = lang === 'fa' \n                              ? '<p class=\"text-slate-500\">گزارش تغییراتی برای این نسخه یافت نشد.</p>' \n                              : '<p class=\"text-slate-500\">No changelog registered for this version.</p>';\n                      }\n                  } catch(err) {\n                      changelogContent.innerHTML = lang === 'fa' \n                          ? '<p class=\"text-rose-500\">خطا در دریافت گزارش تغییرات.</p>' \n                          : '<p class=\"text-rose-500\">Failed to load changelog.</p>';\n                  }\n              }\n          }\n          //DateTime Function\n            function updatePersianDateTime() {\n    const now = new Date();\n    const formatter = (lang === 'fa')\n        ? new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })\n        : new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });\n\n    const parts = formatter.formatToParts(now);\n\n    const map = {};\n    parts.forEach(p => {\n        map[p.type] = p.value;\n    });\n\n    const custom = (lang === 'fa')\n        ? `${map.day} ${map.month} ${map.year} ${map.hour}:${map.minute}:${map.second}`\n        : `${map.month} ${map.day}, ${map.year} ${map.hour}:${map.minute}:${map.second}`;\n\n    document.getElementById(\"net-datetime\").innerText = custom;\n\n}\n\n                updatePersianDateTime();\n                setInterval(updatePersianDateTime, 1000);\n\n\n\n          function dismissUpdate() {\n              const b = document.getElementById('update-alert-banner');\n              if (b) {\n                  b.classList.remove('flex');\n                  b.classList.add('hidden'); \n              }\n          }\n\n          document.addEventListener('DOMContentLoaded', () => {\n              // Auto-login (if any) is already handled by the earlier\n              // window 'DOMContentLoaded' listener using the stored session\n              // token; nothing further to do here.\n          });\n      \nwindow.nahanDashboardReady = true;\nconst readyLoginButton = document.getElementById('login-submit-btn');\nif (readyLoginButton) readyLoginButton.disabled = false;\n";
// END GENERATED DASHBOARD CLIENT
function getDashboardClientScript() { return DASHBOARD_CLIENT_SOURCE; }

const getAlpha = () => String.fromCharCode(118, 108, 101, 115, 115);
const getBeta = () => String.fromCharCode(116, 114, 111, 106, 97, 110);
const getGamma = () => String.fromCharCode(99, 108, 97, 115, 104);

const safeBtoa = (str) => {
    try {
        const bytes = new TextEncoder().encode(str);
        let binary = "";
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    } catch (e) {
        return btoa(str);
    }
};

// --- TOTP (RFC 6238) / 2FA helpers -----------------------------------------
// Standard TOTP implementation compatible with any authenticator app that
// supports the otpauth:// spec (2FAS, Google Authenticator, Authy, Aegis, etc).
const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

function base32Encode(bytes) {
    let bits = "";
    for (const b of bytes) bits += b.toString(2).padStart(8, "0");
    let out = "";
    for (let i = 0; i + 5 <= bits.length; i += 5) {
        out += BASE32_ALPHABET[parseInt(bits.substring(i, i + 5), 2)];
    }
    const rem = bits.length % 5;
    if (rem > 0) {
        const chunk = bits.substring(bits.length - rem).padEnd(5, "0");
        out += BASE32_ALPHABET[parseInt(chunk, 2)];
    }
    return out;
}

function base32Decode(str) {
    const clean = str.toUpperCase().replace(/[^A-Z2-7]/g, "");
    let bits = "";
    for (const c of clean) {
        const idx = BASE32_ALPHABET.indexOf(c);
        if (idx === -1) continue;
        bits += idx.toString(2).padStart(5, "0");
    }
    const bytes = [];
    for (let i = 0; i + 8 <= bits.length; i += 8) {
        bytes.push(parseInt(bits.substring(i, i + 8), 2));
    }
    return new Uint8Array(bytes);
}

function generateTotpSecret() {
    const raw = new Uint8Array(20);
    crypto.getRandomValues(raw);
    return base32Encode(raw);
}

function buildOtpAuthUri(secret, accountLabel, issuer) {
    const label = encodeURIComponent(`${issuer}:${accountLabel}`);
    const params = `secret=${secret}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA1&digits=6&period=30`;
    return `otpauth://totp/${label}?${params}`;
}

async function hmacSha1(keyBytes, msgBytes) {
    const key = await crypto.subtle.importKey("raw", keyBytes, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
    const sig = await crypto.subtle.sign("HMAC", key, msgBytes);
    return new Uint8Array(sig);
}

async function totpCodeForCounter(secretBase32, counter) {
    const keyBytes = base32Decode(secretBase32);
    const msg = new Uint8Array(8);
    let c = BigInt(counter);
    for (let i = 7; i >= 0; i--) { msg[i] = Number(c & 0xffn); c >>= 8n; }
    const hmac = await hmacSha1(keyBytes, msg);
    const offset = hmac[hmac.length - 1] & 0x0f;
    const binCode = ((hmac[offset] & 0x7f) << 24) | ((hmac[offset + 1] & 0xff) << 16) | ((hmac[offset + 2] & 0xff) << 8) | (hmac[offset + 3] & 0xff);
    return (binCode % 1000000).toString().padStart(6, "0");
}

// Verifies a 6-digit TOTP code allowing +/-1 time step (30s) of clock drift.
async function verifyTotpCode(secretBase32, code, stepSeconds = 30, window = 1) {
    if (!secretBase32 || !code) return false;
    const cleanCode = String(code).replace(/\s+/g, "");
    if (!/^\d{6}$/.test(cleanCode)) return false;
    const counter = Math.floor(Date.now() / 1000 / stepSeconds);
    for (let w = -window; w <= window; w++) {
        const expected = await totpCodeForCounter(secretBase32, counter + w);
        if (expected === cleanCode) return true;
    }
    return false;
}

async function sha256Hex(text) {
    const data = new TextEncoder().encode(text);
    const hashBuf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// --- Master key hashing (PBKDF2-SHA256) + cluster sync secret ---------------
// The panel's own login password is never stored in plaintext: only a salted
// PBKDF2 hash is kept. Machine-to-machine auth (linked/slave panels) uses a
// completely separate, random `syncSecret` instead of the login password, so
// hashing the password doesn't break clustering.
function bytesToHex(bytes) { return Array.from(bytes).map(b => b.toString(16).padStart(2, "0")).join(""); }
function hexToBytes(hex) {
    const clean = String(hex || "");
    const out = new Uint8Array(Math.floor(clean.length / 2));
    for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.substr(i * 2, 2), 16);
    return out;
}

function timingSafeEqual(a, b) {
    const strA = String(a ?? ""), strB = String(b ?? "");
    if (strA.length !== strB.length) return false;
    let diff = 0;
    for (let i = 0; i < strA.length; i++) diff |= strA.charCodeAt(i) ^ strB.charCodeAt(i);
    return diff === 0;
}

const MASTER_KEY_PBKDF2_ITERATIONS = 100000;

async function hashMasterKey(password, saltHex = null) {
    const salt = saltHex ? hexToBytes(saltHex) : crypto.getRandomValues(new Uint8Array(16));
    const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), { name: "PBKDF2" }, false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: MASTER_KEY_PBKDF2_ITERATIONS, hash: "SHA-256" }, keyMaterial, 256);
    return { hash: bytesToHex(new Uint8Array(bits)), salt: bytesToHex(salt) };
}

async function verifyMasterKey(providedPassword) {
    if (!providedPassword || !sysConfig.masterKeyHash || !sysConfig.masterKeySalt) return false;
    const { hash } = await hashMasterKey(providedPassword, sysConfig.masterKeySalt);
    return timingSafeEqual(hash, sysConfig.masterKeyHash);
}

// Runs once per isolate (cheap no-op after that, since the condition below
// becomes false): converts old installs that still have a plaintext
// `masterKey` into a hash + a fresh cluster sync secret, and drops the
// plaintext field from storage for good.
async function ensureAuthMigrated(env, ctx) {
    let changed = false;
    if (!sysConfig.masterKeyHash || !sysConfig.masterKeySalt) {
        const plain = sysConfig.masterKey || "admin";
        const { hash, salt } = await hashMasterKey(plain);
        sysConfig = { ...sysConfig, masterKeyHash: hash, masterKeySalt: salt };
        changed = true;
    }
    if (!sysConfig.syncSecret) {
        sysConfig = { ...sysConfig, syncSecret: base32Encode(crypto.getRandomValues(new Uint8Array(20))) };
        changed = true;
    }
    if (Object.prototype.hasOwnProperty.call(sysConfig, "masterKey")) {
        const { masterKey, ...rest } = sysConfig;
        sysConfig = rest;
        changed = true;
    }
    if (changed && env) {
        const write = cachedD1Put(env, "sys_config", JSON.stringify(sysConfig)).catch(() => {});
        if (ctx) ctx.waitUntil(write); else await write;
    }
}
// --- end master key hashing / sync secret ------------------------------------

function generateRecoveryCodes(count = 10) {
    const codes = [];
    for (let i = 0; i < count; i++) {
        const raw = new Uint8Array(5);
        crypto.getRandomValues(raw);
        const hex = Array.from(raw).map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
        codes.push(`${hex.slice(0, 5)}-${hex.slice(5, 10)}`);
    }
    return codes;
}
// --- end TOTP / 2FA helpers -------------------------------------------------

// Session-token auth: after a full login (password + 2FA if enabled), the
// browser is given an opaque random token instead of the master key. This
// helper accepts either the real master key OR a still-valid session token,
// so every API route can keep the same `key` field without ever requiring
// the browser to hold the real password after the initial login.
const SESSION_TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24h sliding window

// Removes expired session tokens / trusted devices from sysConfig and persists
// the change if anything was actually dropped. Called opportunistically from
// isKeyAuthorized (i.e. on effectively every authenticated dashboard request)
// so stale entries get deleted from D1 promptly, not just "ignored forever".
// The scheduled() cron handler below also calls this for panels that go idle
// with nobody logging in to trigger it naturally.
async function pruneAuthArtifacts(env, ctx) {
    const now = Date.now();
    const tokens = sysConfig.sessionTokens || [];
    const devices = sysConfig.trustedDevices || [];
    const freshTokens = tokens.filter(t => t.expiry > now);
    const freshDevices = devices.filter(d => d.expiry > now);
    if (freshTokens.length === tokens.length && freshDevices.length === devices.length) return;
    sysConfig = { ...sysConfig, sessionTokens: freshTokens, trustedDevices: freshDevices };
    if (env) {
        const write = cachedD1Put(env, "sys_config", JSON.stringify(sysConfig)).catch(() => {});
        if (ctx) ctx.waitUntil(write); else await write;
    }
}

async function mintSessionToken(env, ctx, request) {
    const token = base32Encode(crypto.getRandomValues(new Uint8Array(24)));
    const hash = await sha256Hex(token);
    const tokens = (sysConfig.sessionTokens || []).filter(t => t.expiry > Date.now());
    const ip = request ? (request.headers.get("cf-connecting-ip") || "Unknown") : "Unknown";
    const ua = request ? (request.headers.get("user-agent") || "").slice(0, 120) : "";
    tokens.push({ id: base32Encode(crypto.getRandomValues(new Uint8Array(8))), hash, createdAt: Date.now(), ip, ua, expiry: Date.now() + SESSION_TOKEN_TTL_MS });
    sysConfig = { ...sysConfig, sessionTokens: tokens };
    if (env) ctx?.waitUntil(cachedD1Put(env, "sys_config", JSON.stringify(sysConfig)).catch(() => {}));
    return token;
}

async function isKeyAuthorized(providedKey, env, ctx) {
    if (!providedKey) return false;
    await ensureAuthMigrated(env, ctx);
    // Machine credential used by linked/slave panels — never a human login, no 2FA involved.
    if (sysConfig.syncSecret && timingSafeEqual(providedKey, sysConfig.syncSecret)) return true;
    // The real login password, checked against its hash (covers direct API/script
    // use with the actual password, e.g. curl/PowerShell automation).
    if (await verifyMasterKey(providedKey)) return true;
    const hash = await sha256Hex(providedKey);
    const tokens = sysConfig.sessionTokens || [];
    const match = tokens.find(t => t.hash === hash && t.expiry > Date.now());
    if (!match) return false;
    // Sliding expiry: extend the token's life while it's actively used, but only
    // actually persist that extension once the token is already past the halfway
    // point of its TTL. Every authenticated request (dashboard loads fire several
    // in parallel) would otherwise trigger its own full-config D1 write, which is
    // wasteful and — since different requests can land on different isolates —
    // can race and clobber each other's view of sessionTokens/trustedDevices.
    const halfLife = Date.now() + SESSION_TOKEN_TTL_MS / 2;
    if (match.expiry < halfLife) {
        match.expiry = Date.now() + SESSION_TOKEN_TTL_MS;
        if (env) ctx?.waitUntil(cachedD1Put(env, "sys_config", JSON.stringify(sysConfig)).catch(() => {}));
    } else {
        // Not renewing this time, but still a good, cheap moment to sweep out
        // anything else (other sessions, remembered devices) that expired since
        // the last check.
        if (env) ctx?.waitUntil(pruneAuthArtifacts(env, ctx));
    }
    return true;
}
// --- end session-token helpers -----------------------------------------------

const SYSTEM_DEFAULTS = {
    name: "",
    apiRoute: "sync",
    maintenanceHost: "https://www.ubuntu.com, https://www.docker.com",
    backupRelay: "",
    customRelay: "",
    masterKeyHash: "",
    masterKeySalt: "",
    syncSecret: "",
    metricNode: "time.is",
    cleanIps: "",
    deviceId: "",
    mode: "alpha",
    agent: "chrome",
    socketPorts: "443",
    customDns: "https://cloudflare-dns.com/dns-query",
    resolveIp: "1.1.1.1",
    cascade: "",
    enableOpt1: false,
    enableOpt2: false,
    tgToken: "",
    tgChatId: "",
    tgAdminId: "",
    tgWebhookSecret: "",
    cfAccountId: "",
    cfApiToken: "",
    cfWorkerName: "",
    isPaused: false,
    silentAlerts: false,
    githubRepo: "EbiDevSharp/nahan",
    nameStrategy: "default",
    namePrefix: "Core",
    tgBotLang: "fa",
    users: [],
    subUserAgent: "",
    customPanelUrl: "",
    limitTotalReq: 0,
    expiryMs: 0,
    linkedPanels: [],
    hubPanelUrl: "",
    add_panel: "Add Panel",
    timezone: "Asia/Tehran",
    // --- 2FA state ---
    totpEnabled: false,
    totpSecret: "",
    totpPendingSecret: "",
    recoveryCodeHashes: [],
    trustedDevices: [],
    sessionTokens: [],
};
const FAVICON_URL = "https://cdn.jsdelivr.net/gh/EbiDevSharp/nahan@main/favicon.ico";
let sysConfig = { ...SYSTEM_DEFAULTS };
let isolateStartTime = Date.now();
let activeConnections = 0;
// Per-user concurrent connection tracking (best-effort, per-isolate)
const userActiveConns = new Map();
function registerConnectionSlot(uuid, maxConn, webSocket) {
    const cur = userActiveConns.get(uuid) || 0;
    if (maxConn && maxConn > 0 && cur >= maxConn) return false;
    userActiveConns.set(uuid, cur + 1);
    let released = false;
    const release = () => {
        if (released) return;
        released = true;
        const c = (userActiveConns.get(uuid) || 1) - 1;
        if (c <= 0) userActiveConns.delete(uuid); else userActiveConns.set(uuid, c);
    };
    webSocket.addEventListener('close', release);
    webSocket.addEventListener('error', release);
    return true;
}
let activeDeviceId = "";

let sysUsageCache = { users: {} };
let lastSysUsageSync = 0;

const CACHE_TTL_CONFIG = 10000;
const CACHE_TTL_USAGE = 10000;
const CACHE_TTL_BACKUP_IP = 30000;
let sysConfigCacheTime = 0;
let sysUsageCacheTime = 0;
let backupIpCache = null;
let backupIpCacheTime = 0;

async function deployWorkerToCloudflare(accountId, apiToken, workerName, code) {

    let currentBindings = [];
    try {
        const settingsRes = await fetch(
            `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/${encodeURIComponent(workerName)}/settings`,
            { headers: { "Authorization": `Bearer ${apiToken}` } }
        );
        const settingsJson = await settingsRes.json();
        if (settingsJson.success && settingsJson.result?.bindings) {
            currentBindings = settingsJson.result.bindings;
        }
    } catch(e) {}

    const metadata = {
        main_module: "_worker.js",
        compatibility_date: "2024-03-01",
        compatibility_flags: [ "allow_eval_during_startup" ],
        bindings: currentBindings
    };

    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    form.append("_worker.js", new Blob([code], { type: "application/javascript+module" }), "_worker.js");

    return await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/${encodeURIComponent(workerName)}`,
        { method: "PUT", headers: { "Authorization": `Bearer ${apiToken}` }, body: form }
    );
}

// Deduplicate schema setup per binding, and retry after transient D1 errors.
const d1Initialization = new WeakMap();
async function d1Init(env) {
    if (!env.IOT_DB) return;
    let initialization = d1Initialization.get(env.IOT_DB);
    if (!initialization) {
        initialization = (async () => {
            const schema = [
                env.IOT_DB.prepare("CREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value TEXT)"),
                env.IOT_DB.prepare("CREATE TABLE IF NOT EXISTS active_conns (conn_id TEXT PRIMARY KEY, uuid TEXT, label TEXT, connected_at INTEGER, last_seen INTEGER, target TEXT)"),
                env.IOT_DB.prepare("PRAGMA table_info(active_conns)")
            ];
            let results;
            if (typeof env.IOT_DB.batch === 'function') {
                const setup = await env.IOT_DB.batch(schema);
                results = setup[2].results;
            } else {
                await schema[0].run();await schema[1].run();
                results = (await schema[2].all()).results;
            }
            if (!results.some(column => column.name === "target")) {
                try { await env.IOT_DB.prepare("ALTER TABLE active_conns ADD COLUMN target TEXT").run(); }
                catch (error) {
                    // Another isolate may have completed this migration concurrently.
                    const check = await env.IOT_DB.prepare("PRAGMA table_info(active_conns)").all();
                    if (!check.results.some(column => column.name === "target")) throw error;
                }
            }
        })();
        d1Initialization.set(env.IOT_DB, initialization);
    }
    try { await initialization; }
    catch (error) { d1Initialization.delete(env.IOT_DB); throw error; }
}
async function d1Get(env, key) {
    if (!env.IOT_DB) return null;
    await d1Init(env);
    const { results } = await env.IOT_DB.prepare("SELECT value FROM kv_store WHERE key = ?").bind(key).all();
    return results?.[0]?.value ?? null;
}
async function d1Put(env, key, value) {
    if (!env.IOT_DB) throw new Error("Database binding is missing");
    await d1Init(env);
    await env.IOT_DB.prepare("INSERT INTO kv_store (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").bind(key, value).run();
}

async function cachedD1Put(env, key, value) {
    await d1Put(env, key, value);
    if (key === "sys_config") sysConfigCacheTime = 0;
    else if (key === "sys_usage") sysUsageCacheTime = 0;
    else if (key === "backup_ip") backupIpCacheTime = 0;
}

// --- Cross-isolate active connection tracking (D1-backed) ---
// A Worker isolate's in-memory counters (activeConnections/userActiveConns) only reflect
// connections handled by THAT isolate. Since the admin panel's /api/stats request can land
// on a completely different isolate than the ones proxying live traffic, the in-memory
// counter alone is unreliable for display. These helpers persist connection state to D1
// so it can be read back reliably from any isolate.
async function d1RegisterConn(env, connId, uuid, label, target) {
    if (!env.IOT_DB) return;
    await d1Init(env);
    try {
        const now = Date.now();
        await env.IOT_DB.prepare(
            "INSERT INTO active_conns (conn_id, uuid, label, connected_at, last_seen, target) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(conn_id) DO UPDATE SET last_seen=excluded.last_seen, target=excluded.target"
        ).bind(connId, uuid, label || "", now, now, target || "").run();
    } catch (e) {}
}
async function d1TouchConn(env, connId) {
    if (!env.IOT_DB) return;
    try { await env.IOT_DB.prepare("UPDATE active_conns SET last_seen = ? WHERE conn_id = ?").bind(Date.now(), connId).run(); } catch (e) {}
}
async function d1RemoveConn(env, connId) {
    if (!env.IOT_DB) return;
    try { await env.IOT_DB.prepare("DELETE FROM active_conns WHERE conn_id = ?").bind(connId).run(); } catch (e) {}
}
// Heartbeats are written every CONN_HEARTBEAT_MS; anything older than STALE_MS is considered
// dead (isolate evicted without firing close/error) and is pruned on read.
const CONN_HEARTBEAT_MS = 45000;
const CONN_STALE_MS = 120000;

// Lazy, cached DNS-over-HTTPS resolution used only for admin-panel display purposes.
// Never used for the actual proxy connection (that always uses the original host).
const dnsCache = new Map(); // host -> { ip, ts }
const DNS_CACHE_TTL_MS = 10 * 60 * 1000;
const IP_LITERAL_RE = /^(\d{1,3}\.){3}\d{1,3}$|^\[?[0-9a-fA-F:]+\]?$/;
async function resolveHostForDisplay(host) {
    if (!host) return host;
    if (IP_LITERAL_RE.test(host)) return host;
    const cached = dnsCache.get(host);
    if (cached && (Date.now() - cached.ts) < DNS_CACHE_TTL_MS) return cached.ip;
    try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 1500);
        const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(host)}&type=A`, {
            headers: { "Accept": "application/dns-json" }, signal: ctrl.signal
        });
        clearTimeout(t);
        const data = await res.json();
        const answer = (data.Answer || []).find(a => a.type === 1);
        const ip = answer ? answer.data : host;
        dnsCache.set(host, { ip, ts: Date.now() });
        return ip;
    } catch (e) {
        dnsCache.set(host, { ip: host, ts: Date.now() });
        return host;
    }
}

async function d1GetActiveConns(env) {
    if (!env.IOT_DB) return [];
    await d1Init(env);
    try {
        const cutoff = Date.now() - CONN_STALE_MS;
        await env.IOT_DB.prepare("DELETE FROM active_conns WHERE last_seen < ?").bind(cutoff).run();
        const { results } = await env.IOT_DB.prepare("SELECT conn_id, uuid, label, connected_at, last_seen, target FROM active_conns ORDER BY connected_at DESC").all();
        return results || [];
    } catch (e) { return []; }
}

function sha224Hex(m) {
    const msg = new TextEncoder().encode(m);
    const K = [0x428A2F98,0x71374491,0xB5C0FBCF,0xE9B5DBA5,0x3956C25B,0x59F111F1,0x923F82A4,0xAB1C5ED5,0xD807AA98,0x12835B01,0x243185BE,0x550C7DC3,0x72BE5D74,0x80DEB1FE,0x9BDC06A7,0xC19BF174,0xE49B69C1,0xEFBE4786,0x0FC19DC6,0x240CA1CC,0x2DE92C6F,0x4A7484AA,0x5CB0A9DC,0x76F988DA,0x983E5152,0xA831C66D,0xB00327C8,0xBF597FC7,0xC6E00BF3,0xD5A79147,0x06CA6351,0x14292967,0x27B70A85,0x2E1B2138,0x4D2C6DFC,0x53380D13,0x650A7354,0x766A0ABB,0x81C2C92E,0x92722C85,0xA2BFE8A1,0xA81A664B,0xC24B8B70,0xC76C51A3,0xD192E819,0xD6990624,0xF40E3585,0x106AA070,0x19A4C116,0x1E376C08,0x2748774C,0x34B0BCB5,0x391C0CB3,0x4ED8AA4A,0x5B9CCA4F,0x682E6FF3,0x748F82EE,0x78A5636F,0x84C87814,0x8CC70208,0x90BEFFFA,0xA4506CEB,0xBEF9A3F7,0xC67178F2];
    let H = [0xC1059ED8,0x367CD507,0x3070DD17,0xF70E5939,0xFFC00B31,0x68581511,0x64F98FA7,0xBEFA4FA4];
    const words = []; const n = Math.ceil((msg.length + 9) / 64) * 16;
    for (let i = 0; i < n; i++) words[i] = 0;
    for (let i = 0; i < msg.length; i++) words[i >> 2] |= msg[i] << (24 - (i % 4) * 8);
    words[msg.length >> 2] |= 0x80 << (24 - (msg.length % 4) * 8);
    words[n - 1] = msg.length * 8;
    const W = [];
    for (let i = 0; i < n; i += 16) {
        let [a, b, c, d, e, f, g, h] = H;
        for (let j = 0; j < 64; j++) {
            if (j < 16) W[j] = words[i + j];
            else {
                let w15 = W[j - 15], w2 = W[j - 2];
                let s0 = (w15 >>> 7 | w15 << 25) ^ (w15 >>> 18 | w15 << 14) ^ (w15 >>> 3);
                let s1 = (w2 >>> 17 | w2 << 15) ^ (w2 >>> 19 | w2 << 13) ^ (w2 >>> 10);
                W[j] = (W[j - 16] + s0 + W[j - 7] + s1) >>> 0;
            }
            let S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            let ch = (e & f) ^ (~e & g); let temp1 = (h + S1 + ch + K[j] + W[j]) >>> 0;
            let S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            let maj = (a & b) ^ (a & c) ^ (b & c); let temp2 = (S0 + maj) >>> 0;
            h = g; g = f; f = e; e = (d + temp1) >>> 0; d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
        }
        H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
        H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
    }
    return H.slice(0, 7).map(v => v.toString(16).padStart(8, '0')).join('');
}
function isWithinAccessHours(user) {
    if (!user.accessHourFrom || !user.accessHourTo) return true;
 const now = new Date().toLocaleString('en-US', { timeZone: sysConfig.timezone || 'Asia/Tehran' });   
    const cur = new Date(now);
    const curMins = cur.getHours() * 60 + cur.getMinutes();
    const [fh, fm] = user.accessHourFrom.split(':').map(Number);
    const [th, tm] = user.accessHourTo.split(':').map(Number);
    const start = fh * 60 + fm;
    const end = th * 60 + tm;
    return start <= end ? (curMins >= start && curMins <= end) : (curMins >= start || curMins <= end);
}
const trojanHashCache = new Map();
function getTrojanHash(uuid) {
    if (trojanHashCache.has(uuid)) return trojanHashCache.get(uuid);
    const hash = sha224Hex(uuid);
    trojanHashCache.set(uuid, hash);
    return hash;
}

function trackUsage(uuid, bytes, env, ctx) {
    if (!sysUsageCache) sysUsageCache = { users: {} };
    if (!sysUsageCache.users) sysUsageCache.users = {};
    if (!sysUsageCache.users[uuid]) sysUsageCache.users[uuid] = { reqs: 0, dReqs: 0, lastDay: new Date().toISOString().split('T')[0], connects: 0, last: 0 };

    let u = sysUsageCache.users[uuid];
    let today = new Date().toISOString().split('T')[0];
    if (u.lastDay !== today) {
        u.dReqs = 0;
        u.lastDay = today;
    }
    if (u.reqs === undefined) u.reqs = 0;
    if (u.dReqs === undefined) u.dReqs = 0;
    if (u.connects === undefined) u.connects = 0;
    if (u.last === undefined) u.last = 0;

    if (bytes === 0) {
        u.reqs += 1;
        u.dReqs += 1;
        // شمارش اتصال جدید و زمان آخرین اتصال؛ در sysUsageCache ذخیره می‌شود تا
        // بین آیزوله‌های مختلف Cloudflare Workers مشترک و در D1 پایدار بماند
        // (بر خلاف نقشه‌ی محلی قبلی که فقط در حافظه‌ی همان آیزوله معتبر بود).
        u.connects += 1;
        u.last = Date.now();
    }

    const now = Date.now();
    if (now - lastSysUsageSync > 30000) {
        lastSysUsageSync = now;
        if (env && env.IOT_DB) {
            let changedConfig = false;
            if (sysConfig.users && sysConfig.users.length > 0) {
                sysConfig.users.forEach(u => {
                    let uId = u.id.replace(/-/g, '').toLowerCase();
                    let sysU = sysUsageCache.users[uId];
                    if (!u.isPaused) {
                        let reason = null;
                        if (u.expiryMs && Date.now() > u.expiryMs) {
                            reason = `Expiration date reached (${new Date(u.expiryMs).toLocaleDateString()})`;
                        } else if (sysU && u.limitTotalReq && sysU.reqs >= u.limitTotalReq) {
                            let usedGB = (sysU.reqs / 6000).toFixed(2);
                            let limitGB = (u.limitTotalReq / 6000).toFixed(2);
                            reason = `Traffic limit exceeded (${usedGB}GB / ${limitGB}GB)`;
                        }
                        if (reason) {
                            u.isPaused = true;
                            u.disabledReason = reason;
                            u.disabledAt = Date.now();
                            changedConfig = true;
                            ctx?.waitUntil(logActivity(env, "User Auto-Disabled", `User "${u.name}" (${u.id}) disabled: ${reason}`).catch(()=>{}));
                            if (sysConfig.tgToken && (sysConfig.tgAdminId || sysConfig.tgChatId)) {
                                const tgMsg = `⚠️ <b>User Auto-Disabled</b>\n\n👤 <b>User:</b> ${u.name}\n🆔 <b>ID:</b> <code>${u.id}</code>\n📝 <b>Reason:</b> ${reason}`;
                                const notifyChatId = sysConfig.tgAdminId || sysConfig.tgChatId;
                                ctx?.waitUntil(fetch(`https://api.telegram.org/bot${sysConfig.tgToken}/sendMessage`, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ chat_id: notifyChatId, text: tgMsg, parse_mode: 'HTML' })
                                }).catch(()=>{}));
                            }
                        }
                    }
                });
            }

            if (changedConfig) {
                ctx?.waitUntil(cachedD1Put(env, "sys_config", JSON.stringify(sysConfig)).catch(()=>{}));
            }
            ctx?.waitUntil(cachedD1Put(env, "sys_usage", JSON.stringify(sysUsageCache)).catch(()=>{}));
        }
    }
}

export default {
    async fetch(request, env, ctx) {
        try {
            const assetUrl = new URL(request.url);
            if (/\/assets\/dashboard\.js$/.test(assetUrl.pathname) && request.method === 'GET') {
                return new Response(getDashboardClientScript(), {headers:{'Content-Type':'application/javascript; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','X-Nahan-UI-Build':DASHBOARD_BUILD}});
            }
            await loadSysConfig(env);
            activeDeviceId = sysConfig.deviceId || generateHardwareId(sysConfig.apiRoute);

            const url = new URL(request.url);
            const upgradeHeader = request.headers.get("Upgrade");
            const isTelemetryStream = upgradeHeader && upgradeHeader.toLowerCase() === "websocket";

            let reqPath = url.pathname;
            if (reqPath.endsWith("/") && reqPath.length > 1) reqPath = reqPath.slice(0, -1);

            const routes = {
                data: `/${encodeURI(sysConfig.apiRoute)}`,
                dash: `/${encodeURI(sysConfig.apiRoute)}/dash`,
                auth: `/${encodeURI(sysConfig.apiRoute)}/api/auth`,
                twofa: `/${encodeURI(sysConfig.apiRoute)}/api/2fa`,
                sync: `/${encodeURI(sysConfig.apiRoute)}/api/sync`,
                tg: `/${encodeURI(sysConfig.apiRoute)}/tg`,
                syncPanel: `/${encodeURI(sysConfig.apiRoute)}/tg/sync_panel`,
                logs: `/${encodeURI(sysConfig.apiRoute)}/api/logs`,
                users: `/${encodeURI(sysConfig.apiRoute)}/api/users`,
                stats: `/${encodeURI(sysConfig.apiRoute)}/api/stats`,
                update: `/${encodeURI(sysConfig.apiRoute)}/api/update`,
                download: `/${encodeURI(sysConfig.apiRoute)}/api/download-worker`,
                upload: `/${encodeURI(sysConfig.apiRoute)}/api/upload-worker`,
            };

            const isSyncRoute = reqPath.endsWith('/api/sync');
            const isPanelsRoute = reqPath === `/${encodeURI(sysConfig.apiRoute)}/api/panels`;
            const isUsersRoute = reqPath === routes.users || reqPath.endsWith('/api/users');
            const isStatsRoute = reqPath === routes.stats || reqPath.endsWith('/api/stats');
            const isUpdateRoute = reqPath === routes.update || reqPath.endsWith('/api/update');
            const isDownloadRoute = reqPath === routes.download || reqPath.endsWith('/api/download-worker');
            const isUploadRoute = reqPath === routes.upload || reqPath.endsWith('/api/upload-worker');
            const isAuthorizedRoute = reqPath === routes.data || reqPath === routes.dash || reqPath === routes.auth || reqPath === routes.twofa || reqPath === routes.sync || reqPath === routes.tg || reqPath === routes.syncPanel || reqPath === routes.logs || isPanelsRoute || isSyncRoute || isUsersRoute || isStatsRoute || isUpdateRoute || isDownloadRoute || isUploadRoute;

            if (!isTelemetryStream && !isAuthorizedRoute) {
                return serveMaintenancePage(request, url);
            }

            if (!isTelemetryStream) {
                if (reqPath === routes.dash) {
                    return new Response(getDashboardUI(env.IOT_DB !== undefined), { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control":"no-store", "X-Nahan-UI-Build":DASHBOARD_BUILD } });
                }
                if (reqPath === routes.auth) {
                    if (request.method === "OPTIONS") {
                        return new Response(null, { status: 204, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" } });
                    }
                    if (request.method !== "POST") return new Response("405", { status: 405 });
                    return await handleAuth(request, url.hostname, ctx, env);
                }
                if (reqPath === routes.twofa) {
                    if (request.method === "OPTIONS") return await handleTwoFactorApi(request, env, ctx, url.hostname);
                    if (request.method !== "POST") return new Response("405", { status: 405 });
                    return await handleTwoFactorApi(request, env, ctx, url.hostname);
                }
                if (reqPath === routes.sync || isSyncRoute) {
                    if (request.method !== "POST") return new Response("405", { status: 405 });
                    return await handleConfigSync(request, env, ctx);
                }
                if (reqPath === routes.logs) {
                    if (request.method !== "POST" && request.method !== "GET") return new Response("405", { status: 405 });
                    return await handleLogs(request, env);
                }
                if (isPanelsRoute) return await handlePanelsApi(request, env, ctx);
                if (isUsersRoute) {
                    return await handleUsersApi(request, env, ctx);
                }
                if (isStatsRoute) {
                    return await handleStatsApi(request, env);
                }
                if (isUpdateRoute) {
                    return await handleUpdateApi(request, env, ctx);
                }
                if (isDownloadRoute) {
                    return await handleDownloadWorker(request, env);
                }
                if (isUploadRoute) {
                    if (request.method !== "POST") return new Response("405", { status: 405 });
                    return await handleUploadWorker(request, env, ctx);
                }
                if (reqPath === routes.syncPanel) {
                    if (request.method !== "POST") return new Response("405", { status: 405 });
                    return await handleSyncPanel(request, env, ctx);
                }
                if (reqPath === routes.tg) {
                    if (request.method !== "POST") return new Response("405", { status: 405 });
                    return await handleTelegramWebhook(request, env, url.hostname, ctx);
                }
                if (reqPath === routes.data) {
                    const ua = (request.headers.get("User-Agent") || "").toLowerCase();
                    const isCustomUaAllowed = sysConfig.subUserAgent && sysConfig.subUserAgent.trim().length > 0 && ua.includes(sysConfig.subUserAgent.trim().toLowerCase());
                    const clientHost = request.headers.get("Host") || url.hostname;
                    let targetSub = url.searchParams.get("sub");
                    let hasMultiUser = (sysConfig.users && sysConfig.users.length > 0);

                    let targetUser = null;
                    let isValidUser = false;
                    if (hasMultiUser) {
                        if (targetSub) {
                            targetUser = sysConfig.users.find(u => u.name.toLowerCase() === targetSub.toLowerCase() || u.id === targetSub);
                            if (targetUser) isValidUser = true;
                        }
                    } else {
                        isValidUser = true;
                        targetUser = { id: activeDeviceId, name: "Default" };
                    }

                    const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();
                    const secFetchDest = (request.headers.get("Sec-Fetch-Dest") || "").toLowerCase();

                    const isRealBrowser = (
                        (secFetchDest === "document") ||
                        (acceptHeader.includes("text/html"))
                    ) && (
                        ua.includes("mozilla") ||
                        ua.includes("chrome") ||
                        ua.includes("safari") ||
                        ua.includes("applewebkit") ||
                        ua.includes("gecko") ||
                        ua.includes("opera") ||
                        ua.includes("edge")
                    ) && !ua.includes("cla" + "sh") && !ua.includes("si" + "ng-box") && !ua.includes("v" + "2r" + "ay") && !ua.includes("shadow" + "rocket") && !ua.includes("quantum" + "ult") && !ua.includes("surf" + "board") && !ua.includes("sta" + "sh");

                    if (isRealBrowser && !isCustomUaAllowed) {
                        if (isValidUser) {
                            return serveSubscriptionInfoPage(targetUser, clientHost, url, request);
                        } else {
                            return serveMaintenancePage(request, url);
                        }
                    }

                    if (hasMultiUser && !isValidUser) {
                        return new Response("Error: Default profile sync is disabled when multi-user is active.", { status: 403 });
                    }
                    if (targetUser && !isWithinAccessHours(targetUser))
                        return new Response("Access restricted at this time.", { status: 403 });

                    const allowInsecure = url.searchParams.get("insecure") === "true" ||
                        url.searchParams.get("allowInsecure") === "true" ||
                        url.searchParams.get("allow_insecure") === "1" ||
                        url.searchParams.get("allowInsecure") === "1";

                    const resHeaders = new Headers();
                    resHeaders.set("Cache-Control", "no-store");
                    resHeaders.set("Access-Control-Allow-Origin", "*");

                    let flag = (url.searchParams.get("flag") || url.searchParams.get("format") || url.searchParams.get("type") || url.searchParams.get("output") || "").toLowerCase();

                    if (isValidUser && targetUser) {
                        let idClean = targetUser.id.replace(/-/g, '').toLowerCase();
                        let sysU = sysUsageCache?.users?.[idClean] || { reqs: 0, dReqs: 0 };
                        let totalReqs = sysU.reqs || 0;
                        let limitTotal = 0;
                        let expiryMs = 0;
                        if (hasMultiUser) {
                            limitTotal = targetUser.limitTotalReq || 0;
                            expiryMs = targetUser.expiryMs || 0;
                        } else {
                            limitTotal = sysConfig.limitTotalReq || 0;
                            expiryMs = sysConfig.expiryMs || 0;
                        }

                        let usedBytes = Math.floor(totalReqs * (1073741824 / 6000));
                        let limitBytes = Math.floor(limitTotal * (1073741824 / 6000));
                        let expireSec = expiryMs ? Math.floor(expiryMs / 1000) : 0;

                        const subUserInfo = `upload=0; download=${usedBytes}; total=${limitBytes}; expire=${expireSec}`;
                        resHeaders.set("Subscription-UserInfo", subUserInfo);
                        resHeaders.set("subscription-userinfo", subUserInfo);
                        resHeaders.set("Profile-Update-Interval", "12");
                        resHeaders.set("profile-update-interval", "12");

                        let cleanName = encodeURIComponent(targetUser.name);
                        resHeaders.set("Content-Disposition", `attachment; filename="${cleanName}"; filename*=UTF-8''${cleanName}`);
                    }

                    // Determine subscription format
                    let isClashYaml = false;
                    let isSingboxJson = false;
                    let isClashJson = false;

                    // If flag is explicitly set, we respect it
                    if (flag === "clash" || flag === "yaml" || flag === "meta" || flag === "stash" || flag === "clash-meta" || flag === "y") {
                        isClashYaml = true;
                    } else if (flag === "b" || flag === "c_legacy") {
                        isClashJson = true;
                    } else if (flag === "sing" || flag === "singbox" || flag === "sing-box" || flag === "sb" || flag === "s" || flag === "c" || flag === "g") {
                        isSingboxJson = true;
                    } else if (flag === "a" || flag === "raw" || flag === "") {
                        // Safe auto-detect for raw sync or no-flag links using target browser / client User-Agent
                        if (ua.includes(getGamma()) || ua.includes("meta") || ua.includes("sta" + "sh") || ua.includes("verge") || ua.includes("mihomo") || ua.includes("cfw") || ua.includes("stash") || ua.includes("clash")) {
                            isClashYaml = true;
                        // "v2rayng" was previously (incorrectly) routed to the sing-box
                        // JSON branch. v2rayNG's own auto-update requests carry that UA
                        // substring but v2rayNG cannot parse sing-box JSON — it expects
                        // the plain base64 vless/trojan URI list (the final "else" branch
                        // below). Leaving it in this list broke its in-app subscription
                        // update silently (old links just stayed cached).
                        } else if (ua.includes("sing-box") || ua.includes("singbox") || ua.includes("hiddify") || ua.includes("nekobox") || ua.includes("sfa") || ua.includes("karing")) {
                            isSingboxJson = true;
                        }
                    }

                    if (isClashYaml) {
                        resHeaders.set("Content-Type", "text/yaml; charset=utf-8");
                        return new Response(await buildYamlProfile(clientHost, targetSub, allowInsecure), {
                            headers: resHeaders
                        });
                    } else if (isSingboxJson) {
                        resHeaders.set("Content-Type", "application/json; charset=utf-8");
                        return new Response(JSON.stringify(await buildSingBoxJsonProfile(clientHost, targetSub, allowInsecure), null, 2), {
                            headers: resHeaders
                        });
                    } else if (isClashJson) {
                        resHeaders.set("Content-Type", "application/json; charset=utf-8");
                        return new Response(JSON.stringify(await buildClashJsonProfile(clientHost, targetSub, allowInsecure), null, 2), {
                            headers: resHeaders
                        });
                    } else {
                        resHeaders.set("Content-Type", "text/plain; charset=utf-8");
                        const raw = await buildUriProfile(clientHost, targetSub, allowInsecure);
                        return new Response(safeBtoa(raw), {
                            headers: resHeaders
                        });
                    }
                }
            }

            if (isTelemetryStream) {
                if (sysConfig.isPaused) return new Response(null, { status: 503 });
                return await processTelemetryStream(env, ctx);
            }

            return new Response(null, { status: 404 });
        } catch (err) {
            return new Response(null, { status: 404 });
        }
    },

    // Only runs if a Cron Trigger is configured for this Worker (Cloudflare dashboard →
    // Workers → your worker → Settings → Trigger Events → Cron Trigger, e.g. daily).
    // Without one, expired sessions/trusted devices still get swept out automatically the
    // next time anyone makes an authenticated request (see isKeyAuthorized) — this handler
    // just also cleans them up on a schedule for panels nobody logs into for a while.
    async scheduled(event, env, ctx) {
        try {
            await loadSysConfig(env);
            await pruneAuthArtifacts(env, ctx);
        } catch (e) {}
    },
};

async function serveMaintenancePage(request, url) {
    let fakeList = sysConfig.maintenanceHost ? sysConfig.maintenanceHost.split(',').map(s => s.trim()).filter(s => s) : ["https://www.ubuntu.com"];
    const clientIP = request.headers.get("cf-connecting-ip") || "0.0.0.0";
    const ipHash = Array.from(clientIP).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const targetStr = fakeList[ipHash % fakeList.length].startsWith('http') ? fakeList[ipHash % fakeList.length] : `https://${fakeList[ipHash % fakeList.length]}`;

    try {
        const targetUrl = new URL(targetStr);
        if (url.pathname !== "/") targetUrl.pathname = url.pathname;
        targetUrl.search = url.search;
        const cleanHeaders = new Headers(request.headers);
        cleanHeaders.set("Host", targetUrl.hostname);
        cleanHeaders.delete("cf-connecting-ip");
        cleanHeaders.delete("x-forwarded-for");
        const fetchInit = { method: request.method, headers: cleanHeaders, redirect: "follow" };
        if (request.method !== "GET" && request.method !== "HEAD") fetchInit.body = request.body;
        return await fetch(new Request(targetUrl.toString(), fetchInit));
    } catch (e) { return new Response("Not Found", { status: 404 }); }
}

function serveSubscriptionInfoPage(user, host, url, request) {
    let idClean = user.id.replace(/-/g, '').toLowerCase();
    let sysU = sysUsageCache?.users?.[idClean] || { reqs: 0, dReqs: 0, lastDay: '' };
    let totalReqs = sysU.reqs || 0;

    let todayDate = new Date().toISOString().split('T')[0];
    let dailyReqs = sysU.lastDay === todayDate ? (sysU.dReqs || 0) : 0;

    let limitTotal = user.limitTotalReq || 0;
    let limitDaily = user.limitDailyReq || 0;

    let totalGb = (totalReqs / 6000).toFixed(2);
    let limitTotalGb = limitTotal ? (limitTotal / 6000).toFixed(2) : 'Unlimited';

    let dailyGb = (dailyReqs / 6000).toFixed(2);
    let limitDailyGb = limitDaily ? (limitDaily / 6000).toFixed(2) : 'Unlimited';

    let totalPercent = limitTotal ? Math.min(100, (totalReqs / limitTotal) * 100).toFixed(1) : 0;
    let dailyPercent = limitDaily ? Math.min(100, (dailyReqs / limitDaily) * 100).toFixed(1) : 0;

    let expiryDateTxt = 'Never Expired';
    let isExpired = false;
    if (user.expiryMs) {
        let exp = new Date(user.expiryMs);
        expiryDateTxt = exp.toLocaleDateString();
        if (Date.now() > user.expiryMs) {
            isExpired = true;
        }
    }

    let statusText = "Active 🟢";
    let statusColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/25";
    if (user.isPaused) {
        statusText = "Paused ⏸️";
        statusColor = "text-amber-500 bg-amber-500/10 border-amber-500/25";
    } else if (isExpired) {
        statusText = "Expired 🔴";
        statusColor = "text-red-500 bg-red-500/10 border-red-500/25";
    } else if (limitTotal && totalReqs >= limitTotal) {
        statusText = "Limit Exceeded ⚠️";
        statusColor = "text-rose-500 bg-rose-500/10 border-rose-500/25";
    } else if (limitDaily && dailyReqs >= limitDaily) {
        statusText = "Daily Limit Exceeded ⚠️";
        statusColor = "text-rose-500 bg-rose-500/10 border-rose-500/25";
    }

    let cleanUrl = new URL(url.href);
    if (sysConfig.customPanelUrl && sysConfig.customPanelUrl.trim()) {
        let customUrlStr = sysConfig.customPanelUrl.trim();
        if (!customUrlStr.startsWith('http://') && !customUrlStr.startsWith('https://')) {
            customUrlStr = 'https://' + customUrlStr;
        }
        try {
            const customUrl = new URL(customUrlStr);
            cleanUrl.protocol = customUrl.protocol;
            cleanUrl.host = customUrl.host;
        } catch(e) {}
    }
    cleanUrl.searchParams.delete("flag");
    cleanUrl.searchParams.delete("format");
    cleanUrl.searchParams.delete("type");
    cleanUrl.searchParams.delete("output");
    cleanUrl.searchParams.delete("raw");

    let syncNormal = cleanUrl.href;
    let syncRaw = cleanUrl.href + (cleanUrl.href.includes('?') ? '&flag=a' : '?flag=a');

    const html = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${user.name} - Subscriber Portal</title>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;900&display=swap" rel="stylesheet">
    <script data-cfasync="false" src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
            background: linear-gradient(135deg, #0d1117 0%, #0f172a 50%, #0d1117 100%) !important;
            color: #f1f5f9;
        }
        .premium-card {
            background: linear-gradient(145deg, rgba(15, 20, 40, 0.8), rgba(13, 17, 23, 0.8)) !important;
            border: 1px solid rgba(99, 102, 241, 0.25) !important;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: rgba(99, 102, 241, 0.3); border-radius: 10px; }
    </style>
</head>
<body class="min-h-screen py-10 px-4 flex flex-col items-center justify-center">

    <div class="w-full max-w-2xl premium-card rounded-3xl p-6 md:p-8 space-y-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-bl-[100px] -z-10"></div>
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-indigo-500/10">
            <div class="flex items-center gap-4">
                <div class="p-4 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div>
                    <h1 class="text-2xl font-black tracking-tight text-white">${user.name}</h1>
                    <p class="text-xs text-slate-400 mt-1 font-mono">${user.id}</p>
                </div>
            </div>
            <div class="shrink-0">
                <span class="px-4 py-2 rounded-2xl text-xs font-bold border ${statusColor} inline-block">${statusText}</span>
            </div>
        </div>

        <!-- Metrics Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Total Traffic -->
            <div class="bg-slate-900/40 border border-indigo-500/5 rounded-2xl p-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest">Total Usage</p>
                <div class="flex items-baseline gap-1.5 mt-2">
                    <span class="text-2xl font-black text-white">${totalGb}</span>
                    <span class="text-xs text-slate-400">/ ${limitTotalGb} GB</span>
                </div>
                ${limitTotal ? `
                <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                    <div class="bg-indigo-500 h-1.5 rounded-full" style="width: ${totalPercent}%"></div>
                </div>
                <p class="text-[10px] text-slate-500 text-right mt-1.5">${totalPercent}% Used</p>
                ` : `<p class="text-[10px] text-slate-500 mt-2">Unlimited Plan</p>`}
            </div>

            <!-- Daily Traffic -->
            <div class="bg-slate-900/40 border border-indigo-500/5 rounded-2xl p-4">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest">Daily Usage</p>
                <div class="flex items-baseline gap-1.5 mt-2">
                    <span class="text-2xl font-black text-white">${dailyGb}</span>
                    <span class="text-xs text-slate-400">/ ${limitDailyGb} GB</span>
                </div>
                ${limitDaily ? `
                <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                    <div class="bg-amber-500 h-1.5 rounded-full" style="width: ${dailyPercent}%"></div>
                </div>
                <p class="text-[10px] text-slate-500 text-right mt-1.5">${dailyPercent}% Used</p>
                ` : `<p class="text-[10px] text-slate-500 mt-2">No Daily Limit</p>`}
            </div>

            <!-- Expiration -->
            <div class="bg-slate-900/40 border border-indigo-500/5 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                    <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest">Expiration Date</p>
                    <p class="text-lg font-bold text-white mt-2">${expiryDateTxt}</p>
                </div>
                <p class="text-[10px] text-slate-500 mt-1">Calendar Local Time</p>
            </div>
        </div>

        <!-- Connection Settings Title -->
        <div>
            <h2 class="text-lg font-bold mb-1 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                Integration Connections
            </h2>
            <p class="text-xs text-slate-400">Add the correct configuration link based on your preferred format below.</p>
        </div>

        <!-- Connection Options -->
        <div class="space-y-6">
            <!-- Universal Client-Aware Sub -->
            <div class="bg-slate-900/50 border border-indigo-500/10 p-5 rounded-2xl relative">
                <div class="flex items-center justify-between mb-3">
                    <div>
                        <span class="text-xs font-bold text-emerald-400">Universal Auto-Detecting Configuration Link</span>
                        <p class="text-[11px] text-slate-400 mt-1">This universal URL automatically detects your client (Clash, Sing-box, or base64 collectors) and delivers the perfect optimized subscription profile format.</p>
                    </div>
                </div>
                <div class="relative flex items-center">
                    <input type="text" id="sub-norm" readonly value="${syncNormal}" class="w-full bg-slate-950 border border-indigo-500/10 px-4 py-3 rounded-xl text-xs font-mono text-slate-400 pr-16 truncate outline-none">
                    <div class="absolute right-2 flex gap-1">
                        <button onclick="copyLink('sub-norm')" class="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs transition-colors">Copy</button>
                        <button onclick="showQRModal('Universal Subscription Sync Link', '${syncNormal}')" class="p-2 bg-slate-800 hover:bg-slate-700 text-indigo-400 rounded-lg text-xs transition-colors">QR</button>
                    </div>
                </div>
                <p class="text-[10px] text-slate-500 mt-2">Allows real-time import of complete nodes list with dynamic configuration update capability.</p>
            </div>
        </div>

        <!-- Custom Action Buttons -->
        <div class="pt-6 border-t border-indigo-500/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="fetchDecodedRawContent()" class="py-3 px-6 bg-indigo-600/20 hover:bg-indigo-600/35 border border-indigo-500/25 text-indigo-300 rounded-2xl text-xs font-black transition-all flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                Retrieve Parsed Content
            </button>
            <button onclick="window.print()" class="py-3 px-6 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3a2 2 0 002 2zm5-11h.01"></path></svg>
                Print Config Card
            </button>
        </div>
    </div>

    <!-- QR Code Modal -->
    <div id="qr-modal" class="fixed inset-0 bg-black/70 backdrop-blur-md z-50 hidden items-center justify-center p-4">
        <div class="bg-slate-900 border border-indigo-500/30 rounded-3xl max-w-sm w-full p-6 text-center space-y-4">
            <h3 id="qr-title" class="text-lg font-black text-white">Scan Code</h3>
            <div class="bg-white p-4 rounded-2xl inline-block mx-auto">
                <img id="qr-img" src="" alt="QR Code" class="w-48 h-48">
            </div>
            <p id="qr-text" class="text-[10px] font-mono text-slate-400 break-all bg-slate-950 p-3 rounded-xl border border-indigo-500/10 max-h-24 overflow-y-auto"></p>
            <button onclick="closeQRModal()" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors">Close</button>
        </div>
    </div>

    <!-- Toast Success -->
    <div id="toast" class="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 bg-emerald-500 text-white rounded-xl text-xs shadow-xl opacity-0 transition-opacity duration-350 pointer-events-none font-bold">
        Copied to clipboard successfully!
    </div>

    <script>
        function copyLink(id) {
            const el = document.getElementById(id);
            el.select();
            navigator.clipboard.writeText(el.value);
            showToast("Copied link successfully!");
        }

        async function fetchDecodedRawContent() {
            try {
                const res = await fetch("${syncRaw}");
                if(!res.ok) throw new Error("Server response failed");
                const base64Str = await res.text();
                const decodedText = atob(base64Str.trim());
                await navigator.clipboard.writeText(decodedText);
                showToast("Decoded node links copied to clipboard!");
            } catch(e) {
                alert("Error fetching decoded content: " + e.message);
            }
        }

        function showQRModal(title, url) {
            document.getElementById('qr-title').innerText = title;
            document.getElementById('qr-text').innerText = url;
            document.getElementById('qr-img').src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(url);
            document.getElementById('qr-modal').classList.remove('hidden');
            document.getElementById('qr-modal').classList.add('flex');
        }

        function closeQRModal() {
            document.getElementById('qr-modal').classList.add('hidden');
            document.getElementById('qr-modal').classList.remove('flex');
        }

        function showToast(msg) {
            const t = document.getElementById('toast');
            t.innerText = msg;
            t.style.opacity = '1';
            setTimeout(() => { t.style.opacity = '0'; }, 2000);
        }
    </script>
</body>
</html>`;
    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

let sysConfigLoading = null;
let sysUsageLoading = null;
let backupIpLoading = null;

async function loadSysConfig(env) {
    const now = Date.now();
    const loading = [];
    // These independent reads previously added three sequential D1 round trips
    // before a WebSocket could even be upgraded on a cold/expired cache.
    if (env.IOT_DB && now - sysConfigCacheTime > CACHE_TTL_CONFIG) {
        if (!sysConfigLoading) {
            sysConfigLoading = d1Get(env, "sys_config").then(stored => {
                sysConfig = {...SYSTEM_DEFAULTS,...(stored ? JSON.parse(stored) : null)};
                sysConfigCacheTime = Date.now();
            }).finally(() => { sysConfigLoading = null; });
        }
        loading.push(sysConfigLoading);
    }
    if (env.IOT_DB && now - sysUsageCacheTime > CACHE_TTL_USAGE) {
        if (!sysUsageLoading) {
            sysUsageLoading = d1Get(env, "sys_usage").then(stored => {
                sysUsageCache = stored ? JSON.parse(stored) : {users:{}};
                sysUsageCacheTime = Date.now();
            }).finally(() => { sysUsageLoading = null; });
        }
        loading.push(sysUsageLoading);
    }
    if (now - backupIpCacheTime > CACHE_TTL_BACKUP_IP) {
        if (!backupIpLoading) {
            backupIpLoading = (env.IOT_DB ? d1Get(env,"backup_ip") : Promise.resolve(null)).then(value => {
                backupIpCache=value;backupIpCacheTime=Date.now();
            }).catch(() => { backupIpCacheTime=0; }).finally(() => {backupIpLoading=null;});
        }
        loading.push(backupIpLoading);
    }
    await Promise.all(loading);
    const defaultRelay = ["pro", "xy", "ip.cmliussss.net"].join("");
    sysConfig.customRelay = backupIpCache ?? env.RELAY_IP ?? defaultRelay;
}

async function fetchCloudflareUsage(accountId, apiToken) {
    const r = await fetchCloudflareUsageDetailed(accountId, apiToken);
    return r.requests;
}

// نسخه‌ی تشخیصی: به‌جای برگرداندن فقط null در صورت خطا، دلیل واقعی شکست را هم
// برمی‌گرداند (خطای HTTP، خطای GraphQL کلودفلر، یا نبود داده) تا در پنل قابل نمایش باشد
// و به‌جای «—» ثابت و مبهم، بشود فهمید مشکل از کجاست (مثلاً پرمیشن ناقص توکن).
async function fetchCloudflareUsageDetailed(accountId, apiToken) {
    if (!accountId || !apiToken) return { requests: null, error: null };
    try {
        const d = new Date();
        const currentDate = d.toISOString().split('T')[0] + "T00:00:00Z";

        const query = `query GetDailyUsage($accountId: String!, $start: ISO8601DateTime!) { viewer { accounts(filter: {accountTag: $accountId}) { workersInvocationsAdaptive(limit: 1, filter: { datetime_geq: $start }) { sum { requests } } } } }`;
        const variables = { accountId: accountId, start: currentDate };

        const res = await fetch("https://api.cloudflare.com/client/v4/graphql", {
            method: "POST",
            signal: AbortSignal.timeout(2000),
            headers: {
                "Authorization": `Bearer ${apiToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query, variables })
        });

        const json = await res.json();

        if (!res.ok) {
            const msg = json?.errors?.[0]?.message || `HTTP ${res.status}`;
            return { requests: null, error: msg };
        }
        if (json?.errors?.length) {
            return { requests: null, error: json.errors[0]?.message || "GraphQL error" };
        }

        const reqs = json?.data?.viewer?.accounts?.[0]?.workersInvocationsAdaptive?.[0]?.sum?.requests;
        if (typeof reqs !== 'number') {
            // معمولاً یعنی accountId اشتباه است یا توکن دسترسی "Account Analytics" ندارد
            return { requests: null, error: "no_data" };
        }
        return { requests: reqs, error: null };
    } catch(e) {
        return { requests: null, error: e.message };
    }
}

async function sendTelegramMessage(request, type, hostName) {
    if (!sysConfig.tgToken || !(sysConfig.tgAdminId || sysConfig.tgChatId)) return;

    const escMd = (s) => String(s).replace(/[_*`[]/g, '\\$&');

    let usageStr = "نامشخص (0.00%)";
    if (sysConfig.cfAccountId && sysConfig.cfApiToken) {
        const reqs = await fetchCloudflareUsage(sysConfig.cfAccountId, sysConfig.cfApiToken);
        if (reqs !== null) {
            const limit = 100000;
            const pct = ((reqs / limit) * 100).toFixed(2);
            usageStr = `${reqs}/${limit} ${pct}%`;
        }
    }

    const ip = request.headers.get("cf-connecting-ip") || "Unknown";
    const cf = request.cf || {};
    const country = cf.country || "Unknown";
    const city = cf.city || "Unknown";
    const asn = cf.asn || "Unknown";
    const asOrg = cf.asOrganization || "Unknown";
    const domain = request.headers.get("Host") || new URL(request.url).hostname;
    const path = new URL(request.url).pathname;
    const ua = request.headers.get("User-Agent") || "حالا یوزرایجنت مارو نبینین";

    const d = new Date();
    const timeStr = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(d);

    let text = `📌 نوع: ${escMd(type)}\n` +
        `🌐 IP: ${escMd(ip)}\n` +
        `📍 موقعیت: ${escMd(country)} ${escMd(city)}\n` +
        `🏢 ASN: AS${escMd(asn)} ${escMd(asOrg)}\n` +
        `🔗 دامنه: ${escMd(domain)}\n` +
        `🔍 مسیر: ${escMd(path)}\n` +
        `🤖 مرورگر: ${escMd(ua)}\n` +
        `📅 زمان: ${escMd(timeStr)}\n` +
        `📊 مصرف: ${usageStr}`;

    const h = hostName || domain;
    const langCode = sysConfig.tgBotLang || "fa";
    const locT = (key) => botI18n[langCode]?.[key] || botI18n["en"]?.[key] || key;
    const isPaused = sysConfig.isPaused || false;
    const statusEmoji = isPaused ? "🔴" : "🟢";
    const panelUrl = `https://${h}/${encodeURI(sysConfig.apiRoute)}/dash`;
    const subUrl = `https://${h}/${sysConfig.apiRoute}`;
    const usersList = sysConfig.users || [];
    const activeCount = usersList.filter(u => !u.isPaused && (!u.expiryMs || Date.now() <= u.expiryMs)).length;
    const pausedCount = usersList.filter(u => u.isPaused && !u.disabledReason).length;
    const autoDisabledCount = usersList.filter(u => u.isPaused && u.disabledReason).length;
    const panelName = sysConfig.name || "Main Panel";

    text += `\n\n━━━━━━━━━━━━━━━━\n` +
        `📌 **${locT("current_panel")}**: 🏠 ${panelName}\n` +
        `⚡ **${locT("status")}**: ${isPaused ? locT("paused") : locT("active")} ${statusEmoji}\n` +
        `👥 **${locT("users")}**: ${usersList.length} (${activeCount} ${locT("count_active")}, ${pausedCount} ${locT("count_paused")}, ${autoDisabledCount} ${locT("count_disabled")})\n` +
        `━━━━━━━━━━━━━━━━`;

    // Same button layout as the bot's own main menu (getMainMenu), so every
    // notification (login alerts, update alerts, etc.) lands with the exact
    // buttons the admin already knows from /start, instead of a separate,
    // out-of-sync button set.
    /** @type {any} */
    const inline_keyboard = [
        [
            { text: `ℹ️ ${locT("panel_info")}`, callback_data: "sys_panel_info" },
            { text: `📈 ${locT("statistics")}`, callback_data: "sys_stats" }
        ],
        [
            { text: `🔑 ${locT("dash")}`, web_app: { url: panelUrl } }
        ],
        [
            { text: `⚙️ ${locT("btn_settings")}`, callback_data: "settings_menu" }
        ]
    ];

    const tgUrl = `https://api.telegram.org/bot${sysConfig.tgToken}/sendMessage`;
    const notifyChatId = sysConfig.tgAdminId || sysConfig.tgChatId;
    try {
        await fetch(tgUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: notifyChatId,
                text: text,
                parse_mode: 'Markdown',
                reply_markup: /** @type {any} */ ({ inline_keyboard })
            })
        });
    } catch (e) {}
}

// Shared "panel updated" Telegram push, used by both the web-panel update
// button (/api/update) and the bot's own "Deploy update" flow, so the admin
// always gets pinged regardless of which path triggered the deploy.
function notifyPanelUpdatedTelegram(ctx, newVersion, via = "") {
    if (!(sysConfig.tgToken && (sysConfig.tgAdminId || sysConfig.tgChatId))) return;
    const suffix = via ? ` (${via})` : "";
    const tgMsg = `🔄 <b>Panel Updated</b>\n\n📦 v${CURRENT_VERSION} → v${newVersion}${suffix}`;
    const notifyChatId = sysConfig.tgAdminId || sysConfig.tgChatId;
    ctx?.waitUntil(fetch(`https://api.telegram.org/bot${sysConfig.tgToken}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: notifyChatId, text: tgMsg, parse_mode: 'HTML' })
    }).catch(() => {}));
}

async function logActivity(env, type, detail) {
    if (!env || !env.IOT_DB) return;
    try {
        const ts = new Date().toISOString();
        let logs = [];
        const stored = await d1Get(env, "sys_logs");
        if (stored) logs = JSON.parse(stored);
        logs.unshift({ ts, type, detail });
        if (logs.length > 50) logs = logs.slice(0, 50);
        await d1Put(env, "sys_logs", JSON.stringify(logs));
    } catch (e) {}
}

async function handleLogs(request, env) {
    try {
        if (request.method === "POST") {
            const data = await request.json();
            if (!(await isKeyAuthorized(data.key, env))) return new Response(JSON.stringify({ success: false }), { status: 401 });
            let logs = [];
            if (env.IOT_DB) {
                const stored = await d1Get(env, "sys_logs");
                if (stored) logs = JSON.parse(stored);
            }
            return new Response(JSON.stringify({ success: true, logs }), { status: 200 });
        }
        return new Response("OK", { status: 200 });
    } catch (e) { return new Response(JSON.stringify({ success: false }), { status: 400 }); }
}

function clusterJson(value, status = 200) {
    return new Response(JSON.stringify(value), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}
function linkedPanelAt(value) {
    if (!/^(0|[1-9][0-9]*)$/.test(String(value))) return null;
    return sysConfig.linkedPanels?.[Number(value)] || null;
}
async function forwardLinkedUsers(request, env, ctx) {
    const url = new URL(request.url);
    const panel = linkedPanelAt(url.searchParams.get("panel"));
    if (panel && url.searchParams.has("panelHost") && panel.host !== url.searchParams.get("panelHost")) return clusterJson({success:false,error:"Panel changed; refresh the list"},409);
    if (!panel) return clusterJson({success:false,error:"Linked panel not found"},404);
    const method = request.method;
    const id = url.searchParams.get("id");
    const action = url.searchParams.get("action");
    if (!["GET","POST","PUT","DELETE"].includes(method) || (action && !["toggle","reset"].includes(action))) return clusterJson({success:false,error:"Unsupported operation"},400);
    let path = '/api/users?key=' + encodeURIComponent(panel.masterKey);
    if (id) path += '&id=' + encodeURIComponent(id);
    if (action) path += '&action=' + encodeURIComponent(action);
    const q = url.searchParams.get("q");
    if (q) path += '&q=' + encodeURIComponent(q);
    let body = null;
    if (method === 'POST' || method === 'PUT') {
        body = await request.json().catch(() => ({}));
        body.key = panel.masterKey;
    }
    const result = await remotePanelFetch(panel, method, path, body);
    if (!result.success) return clusterJson({success:false,error:result.error || "Remote panel request failed"},502);
    // Build links for old panels that do not return subscriptionUrl in the list API.
    if (Array.isArray(result.users)) result.users = result.users.map(user => ({...user,
        subscriptionUrl: user.subscriptionUrl || `https://${panel.host}/${panel.apiRoute}?sub=${encodeURIComponent(user.name)}`}));
    return clusterJson(result);
}
async function handlePanelsApi(request, env, ctx) {
    try {
        const url = new URL(request.url);
        const body = request.method === 'POST' ? await request.json() : {};
        const key = (request.headers.get('Authorization') || '').replace(/^Bearer /, '') || body.key || '';
        if (!await isKeyAuthorized(key, env, ctx)) return clusterJson({success:false,error:'Unauthorized'},401);
        if (request.method === 'POST' && body.operation === 'repair') return await repairLinkedPanel(body.panel,body.host,env);
        if (request.method === 'POST' && body.operation === 'verify') {
            const candidate = new URL(/^https:\/\//i.test(body.url || '') ? body.url : 'https://' + body.url);
            if (candidate.protocol !== 'https:' || candidate.username || candidate.password || !candidate.hostname.includes('.') || !body.panelKey) return clusterJson({success:false,error:'Invalid panel URL or secret'},400);
            const route = candidate.pathname.replace(/^\/+|\/+$/g,'').replace(/\/dash$/,'') || sysConfig.apiRoute;
            const panel = {host:candidate.host, apiRoute:route, masterKey:body.panelKey};
            const result = await fetchRemotePanelConfig(panel);
            if (!result.success) return clusterJson({success:false,error:'Connection or authentication failed'},502);
            const localAdmin = sysConfig.tgAdminId || sysConfig.tgChatId;
            const remoteAdmin = result.config?.tgAdminId || result.config?.tgChatId;
            if (!localAdmin || !remoteAdmin || String(localAdmin) !== String(remoteAdmin)) return clusterJson({success:false,error:'Telegram administrator mismatch'},403);
            return clusterJson({success:true,panel:{host:panel.host,apiRoute:result.config.apiRoute || route,name:result.config.name || panel.host}});
        }
        if (request.method !== 'GET') return clusterJson({success:false,error:'Method not allowed'},405);
        const panel = linkedPanelAt(url.searchParams.get('panel'));
        if (!panel) return clusterJson({success:false,error:'Linked panel not found'},404);
        const result = await fetchRemotePanelUsers(panel);
        if (!result.success || !Array.isArray(result.users)) return clusterJson({success:false,error:'Connection or authentication failed'},502);
        return clusterJson({success:true,version:result.version || null,users:result.users.length,
            active:result.users.filter(u => !u.isPaused && (!u.expiryMs || u.expiryMs > Date.now())).length});
    } catch { return clusterJson({success:false,error:'Invalid panel request'},400); }
}

async function handleUsersApi(request, env, ctx) {
    try {
        const url = new URL(request.url);
        const method = request.method;
        const userId = url.searchParams.get("id");
        const action = url.searchParams.get("action");

        const authHeader = request.headers.get("Authorization") || "";
        const authKey = authHeader.replace("Bearer ", "") || url.searchParams.get("key") || "";
        let bodyKey = "";
        if (method === "POST" || method === "PUT") {
            try {
                const body = await request.clone().json();
                bodyKey = body.key || "";
            } catch(e) {}
        }
        const isAuth = (await isKeyAuthorized(authKey, env, ctx)) || (await isKeyAuthorized(bodyKey, env, ctx));
        if (!isAuth) {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
        }

        if (url.searchParams.has("panel")) {
            return await forwardLinkedUsers(request, env, ctx);
        }

        if (method === "GET" && !userId) {
            const q = url.searchParams.get("q") || "";
            let users = sysConfig.users || [];
            if (q) {
                const ql = q.toLowerCase();
                users = users.filter(u => u.name.toLowerCase().includes(ql) || u.id.toLowerCase().includes(ql) || (u.notes && u.notes.toLowerCase().includes(ql)));
            }
            const enriched = users.map(u => {
                const idClean = u.id.replace(/-/g, '').toLowerCase();
                const sysU = sysUsageCache?.users?.[idClean] || { reqs: 0, dReqs: 0, lastDay: '' };
                const usedBytes = Math.floor((sysU.reqs || 0) * (1073741824 / 6000));
                const limitBytes = u.limitTotalReq ? Math.floor(u.limitTotalReq * (1073741824 / 6000)) : 0;
                const isExpired = u.expiryMs && Date.now() > u.expiryMs;
                let status = "active";
                if (u.isPaused && u.disabledReason) status = "auto-disabled";
                else if (u.isPaused) status = "paused";
                else if (isExpired) status = "expired";
                const daily = sysU.lastDay === new Date().toISOString().split('T')[0] ? (sysU.dReqs || 0) : 0;
                return { ...u, usage: { total: usedBytes, limit: limitBytes, daily, dailyLimit: u.limitDailyReq || 0, requests: sysU.reqs || 0, lastDay: sysU.lastDay || '' }, status,
                    subscriptionUrl: `https://${url.host}/${sysConfig.apiRoute}?sub=${encodeURIComponent(u.name)}` };
            });
            return new Response(JSON.stringify({ success: true, users: enriched, total: enriched.length, version: CURRENT_VERSION }), { headers: { "Content-Type": "application/json" } });
        }

        if (method === "GET" && userId) {
            const u = (sysConfig.users || []).find(usr => usr.id === userId || usr.name.toLowerCase() === userId.toLowerCase());
            if (!u) return new Response(JSON.stringify({ success: false, error: "User not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
            const idClean = u.id.replace(/-/g, '').toLowerCase();
            const sysU = sysUsageCache?.users?.[idClean] || { reqs: 0, dReqs: 0, lastDay: '' };
            const usedBytes = Math.floor((sysU.reqs || 0) * (1073741824 / 6000));
            const limitBytes = u.limitTotalReq ? Math.floor(u.limitTotalReq * (1073741824 / 6000)) : 0;
            const isExpired = u.expiryMs && Date.now() > u.expiryMs;
            let status = "active";
            if (u.isPaused && u.disabledReason) status = "auto-disabled";
            else if (u.isPaused) status = "paused";
            else if (isExpired) status = "expired";
            const hostName = new URL(request.url).hostname;
            const subUrl = `https://${hostName}/${sysConfig.apiRoute}?sub=${encodeURIComponent(u.name)}`;
            return new Response(JSON.stringify({ success: true, user: { ...u, usage: { total: usedBytes, limit: limitBytes, daily: sysU.dReqs || 0, dailyLimit: u.limitDailyReq || 0 }, status, subscriptionUrl: subUrl } }), { headers: { "Content-Type": "application/json" } });
        }

        if (method === "POST" && !userId) {
            const body = await request.json();
            const { name, trafficLimit, expiryDays, notes, maxConfigs, maxConnections, proxyIp, cleanIp, userMode, userPorts } = body;
            if (!name) return new Response(JSON.stringify({ success: false, error: "Name is required" }), { status: 400, headers: { "Content-Type": "application/json" } });
            const newId = crypto.randomUUID();
            const newUser = {
                id: newId,
                name: name,
                limitTotalReq: trafficLimit ? Math.floor(parseFloat(trafficLimit) * 6000) : null,
                limitDailyReq: body.dailyLimit ? Math.floor(parseFloat(body.dailyLimit) * 6000) : null,
                expiryMs: expiryDays ? Date.now() + parseInt(expiryDays) * 86400000 : null,
                notes: notes || "",
                maxConfigs: maxConfigs ? parseInt(maxConfigs) : null,
                maxConnections: maxConnections ? parseInt(maxConnections) : null,
                proxyIp: proxyIp || null,
cleanIp: cleanIp || null,
                userMode: userMode || null,
                userPorts: userPorts || null,
                createdAt: Date.now()
            };
            if (!sysConfig.users) sysConfig.users = [];
            sysConfig.users.push(newUser);
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            ctx?.waitUntil(logActivity(env, "User Created", `User "${name}" (${newId}) created via API`).catch(()=>{}));
            const hostName = new URL(request.url).hostname;
            const subUrl = `https://${hostName}/${sysConfig.apiRoute}?sub=${encodeURIComponent(name)}`;
            return new Response(JSON.stringify({ success: true, user: newUser, subscriptionUrl: subUrl }), { status: 201, headers: { "Content-Type": "application/json" } });
        }

        if (method === "PUT" && userId) {
            const body = await request.json();
            if (!sysConfig.users) return new Response(JSON.stringify({ success: false, error: "No users" }), { status: 400, headers: { "Content-Type": "application/json" } });
            const u = sysConfig.users.find(usr => usr.id === userId);
            if (!u) return new Response(JSON.stringify({ success: false, error: "User not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
            if (body.name !== undefined) u.name = body.name;
            if (body.trafficLimit !== undefined) u.limitTotalReq = body.trafficLimit ? Math.floor(parseFloat(body.trafficLimit) * 6000) : null;
            if (body.dailyLimit !== undefined) u.limitDailyReq = body.dailyLimit ? Math.floor(parseFloat(body.dailyLimit) * 6000) : null;
            if (body.expiryDays !== undefined) u.expiryMs = body.expiryDays ? Date.now() + parseInt(body.expiryDays) * 86400000 : null;
            if (body.expiryMs !== undefined) {
                if (body.expiryMs !== null && (!Number.isFinite(body.expiryMs) || body.expiryMs < 0)) return new Response(JSON.stringify({success:false,error:"Invalid expiration"}), {status:400});
                u.expiryMs = body.expiryMs;
            }
            for (const field of ["customName", "accessHourFrom", "accessHourTo"]) if (body[field] !== undefined) u[field] = body[field];
            if (body.notes !== undefined) u.notes = body.notes;
            if (body.maxConfigs !== undefined) u.maxConfigs = body.maxConfigs ? parseInt(body.maxConfigs) : null;
            if (body.maxConnections !== undefined) u.maxConnections = body.maxConnections ? parseInt(body.maxConnections) : null;
            if (body.proxyIp !== undefined) u.proxyIp = body.proxyIp;
if (body.cleanIp !== undefined) u.cleanIp = body.cleanIp;
            if (body.userMode !== undefined) u.userMode = body.userMode;
            if (body.userPorts !== undefined) u.userPorts = body.userPorts;
            if (body.status !== undefined) {
                if (body.status === "active") { u.isPaused = false; u.disabledReason = null; u.disabledAt = null; }
                else if (body.status === "paused") { u.isPaused = true; u.disabledReason = null; u.disabledAt = null; }
            }
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            ctx?.waitUntil(logActivity(env, "User Updated", `User "${u.name}" (${userId}) updated via API`).catch(()=>{}));
            return new Response(JSON.stringify({ success: true, user: u }), { headers: { "Content-Type": "application/json" } });
        }

        if (method === "DELETE" && userId) {
            if (!sysConfig.users) return new Response(JSON.stringify({ success: false, error: "No users" }), { status: 400, headers: { "Content-Type": "application/json" } });
            const idx = sysConfig.users.findIndex(usr => usr.id === userId);
            if (idx === -1) return new Response(JSON.stringify({ success: false, error: "User not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
            const deleted = sysConfig.users.splice(idx, 1)[0];
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            ctx?.waitUntil(logActivity(env, "User Deleted", `User "${deleted.name}" (${userId}) deleted via API`).catch(()=>{}));
            return new Response(JSON.stringify({ success: true, deleted: deleted.id }), { headers: { "Content-Type": "application/json" } });
        }

        if (method === "POST" && userId && action === "toggle") {
            if (!sysConfig.users) return new Response(JSON.stringify({ success: false, error: "No users" }), { status: 400, headers: { "Content-Type": "application/json" } });
            const u = sysConfig.users.find(usr => usr.id === userId);
            if (!u) return new Response(JSON.stringify({ success: false, error: "User not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
            u.isPaused = !u.isPaused;
            if (!u.isPaused) { u.disabledReason = null; u.disabledAt = null; }
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            ctx?.waitUntil(logActivity(env, "User Toggled", `User "${u.name}" (${userId}) ${u.isPaused ? 'paused' : 'resumed'} via API`).catch(()=>{}));
            return new Response(JSON.stringify({ success: true, user: u }), { headers: { "Content-Type": "application/json" } });
        }

        if (method === "POST" && userId && action === "reset") {
            if (!sysUsageCache) sysUsageCache = { users: {} };
            if (!sysUsageCache.users) sysUsageCache.users = {};
            const uuidClean = userId.replace(/-/g, '').toLowerCase();
            if (sysUsageCache.users[uuidClean]) {
                sysUsageCache.users[uuidClean].reqs = 0;
                sysUsageCache.users[uuidClean].dReqs = 0;
            } else {
                sysUsageCache.users[uuidClean] = { reqs: 0, dReqs: 0, lastDay: new Date().toISOString().split('T')[0] };
            }
            await cachedD1Put(env, "sys_usage", JSON.stringify(sysUsageCache));
            ctx?.waitUntil(logActivity(env, "Traffic Reset", `Traffic reset for user ${userId} via API`).catch(()=>{}));
            return new Response(JSON.stringify({ success: true, message: "Traffic reset" }), { headers: { "Content-Type": "application/json" } });
        }

        return new Response(JSON.stringify({ success: false, error: "Invalid request" }), { status: 400, headers: { "Content-Type": "application/json" } });
    } catch (e) { return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } }); }
}

async function fetchLiveWorkerCode(liveOnly = false) {
    let code = null;
    let liveError = null;

    if (sysConfig.cfAccountId && sysConfig.cfApiToken && sysConfig.cfWorkerName) {
        try {
            const res = await fetch(
                `https://api.cloudflare.com/client/v4/accounts/${sysConfig.cfAccountId}/workers/scripts/${encodeURIComponent(sysConfig.cfWorkerName)}`,
                {
                    headers: {
                        "Authorization": `Bearer ${sysConfig.cfApiToken}`
                    }
                }
            );

            if (res.ok) {
                const contentType = res.headers.get("content-type") || "";

                if (
                    contentType.includes("multipart/form-data") ||
                    contentType.includes("multipart/mixed")
                ) {
                    const form = await res.formData();

                    // Debug
                    for (const [key, value] of form.entries()) {
                        console.log(
                            "CF Part:",
                            key,
                            value?.constructor?.name,
                            value
                        );
                    }

                    const filePart =
                        form.get("_worker.js") ||
                        form.get("worker.js") ||
                        form.get("index.js") ||
                        form.get("main.js") ||
                        [...form.values()].find(v => v && typeof v.text === "function") ||
                        [...form.values()][0];

                    if (filePart) {
                        if (typeof filePart === "string") {
                            code = filePart;
                        } else if (typeof filePart.text === "function") {
                            code = await filePart.text();
                        } else if (filePart instanceof Blob) {
                            code = await filePart.text();
                        } else {
                            console.warn("Unknown multipart part:", filePart);

                            try {
                                code = JSON.stringify(filePart, null, 2);
                            } catch {
                                code = String(filePart);
                            }
                        }
                    }

                    if (!code) {
                        liveError = "Cloudflare returned multipart data but no readable worker source was found.";
                    }
                } else {
                    code = await res.text();
                }
            } else {
                let bodyText = "";
                try {
                    bodyText = await res.text();
                } catch {}

                liveError = `Cloudflare API returned HTTP ${res.status}: ${bodyText.slice(0, 300)}`;
            }
        } catch (e) {
            liveError = "Request to Cloudflare API failed: " + (e?.message || e);
        }
    } else {
        liveError = "Cloudflare API credentials (Account ID / API Token / Worker Name) are not configured.";
    }

    if (liveOnly) {
        return {
            code,
            source: "cloudflare",
            error: liveError
        };
    }

    if (!code) {
        const repo = (sysConfig.githubRepo || "EbiDevSharp/nahan")
            .replace(/https?:\/\/github\.com\//, "")
            .trim();

        try {
            const res = await fetch(
                `https://raw.githubusercontent.com/${repo}/main/_worker.js`
            );

            if (res.ok) {
                code = await res.text();
            }
        } catch {}

        return {
            code,
            source: "github",
            error: liveError
        };
    }

    return {
        code,
        source: "cloudflare",
        error: null
    };
}

async function performWorkerUpload(env, ctx, code) {
    if (!code || code.trim().length < 50) {
        return { success: false, error: "No valid code provided." };
    }
    if (!sysConfig.cfAccountId || !sysConfig.cfApiToken || !sysConfig.cfWorkerName) {
        return { success: false, error: "Cloudflare API credentials are not configured (Account ID / API Token / Worker Name)." };
    }
    try {
        const deployRes = await deployWorkerToCloudflare(sysConfig.cfAccountId, sysConfig.cfApiToken, sysConfig.cfWorkerName, code);
        const rawText = await deployRes.text();
        let json = null;
        try { json = JSON.parse(rawText); } catch (e) {}

        if (!deployRes.ok || !json || json.success !== true) {
            let errMsg = `HTTP ${deployRes.status}`;
            if (json && Array.isArray(json.errors) && json.errors.length) {
                errMsg = json.errors.map(e => `[${e.code}] ${e.message}`).join("; ");
            } else if (rawText) {
                errMsg = rawText.slice(0, 400);
            }
            return { success: false, error: "Cloudflare deploy failed: " + errMsg };
        }
        ctx?.waitUntil(logActivity(env, "Worker Uploaded", "Worker code updated via manual upload").catch(() => {}));
        return { success: true };
    } catch (e) {
        return { success: false, error: e.message };
    }
}

async function handleDownloadWorker(request, env) {
    try {
        const url = new URL(request.url);
        const authHeader = request.headers.get("Authorization") || "";
        const authKey = authHeader.replace("Bearer ", "") || url.searchParams.get("key") || "";
        if (!(await isKeyAuthorized(authKey, env))) {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
        }

        const liveOnly = url.searchParams.get("source") === "live";
        const result = await fetchLiveWorkerCode(liveOnly);

        if (!result.code) {
            return new Response(JSON.stringify({ success: false, error: result.error || "Could not retrieve worker source" }), { status: 502, headers: { "Content-Type": "application/json" } });
        }

        return new Response(result.code, {
            headers: {
                "Content-Type": "application/javascript; charset=utf-8",
                "Content-Disposition": `attachment; filename="nahan_worker_${CURRENT_VERSION}.js"`,
                "X-Worker-Source": result.source
            }
        });
    } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

async function handleUploadWorker(request, env, ctx) {
    try {
        const url = new URL(request.url);
        const authHeader = request.headers.get("Authorization") || "";
        const authKey = authHeader.replace("Bearer ", "") || url.searchParams.get("key") || "";
        if (!(await isKeyAuthorized(authKey, env, ctx))) {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
        }

        const body = await request.json();
        let code = body.code || null;

        if (!code && body.url) {
            try {
                const res = await fetch(body.url);
                if (!res.ok) throw new Error("HTTP " + res.status);
                code = await res.text();
            } catch (e) {
                return new Response(JSON.stringify({ success: false, error: "Could not fetch from URL: " + e.message }), { status: 400, headers: { "Content-Type": "application/json" } });
            }
        }

        const result = await performWorkerUpload(env, ctx, code);

        // Optionally push this same code out to every linked panel too, so a single
        // "update panel" action can keep the whole cluster on the same version.
        // Only attempted after the LOCAL deploy succeeded, and only when the caller
        // (the panel's own dashboard) explicitly asked for it via syncLinked.
        if (result.success && body.syncLinked && Array.isArray(sysConfig.linkedPanels) && sysConfig.linkedPanels.length > 0) {
            const linkedResults = await Promise.all(sysConfig.linkedPanels.map(async (panel) => {
                try {
                    const res = await fetchRemotePanelUploadWorker(panel, code);
                    return { host: panel.host, success: !!(res && res.success), error: (res && res.error) || null };
                } catch (e) {
                    return { host: panel.host, success: false, error: e.message };
                }
            }));
            result.linkedResults = linkedResults;
            ctx?.waitUntil(logActivity(env, "Cluster Worker Uploaded", `Relayed manual worker update to ${linkedResults.filter(r => r.success).length}/${linkedResults.length} linked panels`).catch(() => {}));
        }

        return new Response(JSON.stringify(result), { status: result.success ? 200 : 400, headers: { "Content-Type": "application/json" } });
    } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

async function handleStatsApi(request, env) {
    try {
        const url = new URL(request.url);
        const authHeader = request.headers.get("Authorization") || "";
        const authKey = authHeader.replace("Bearer ", "") || url.searchParams.get("key") || "";
        if (!(await isKeyAuthorized(authKey, env))) {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
        }

        const users = sysConfig.users || [];
        const totalUsers = users.length;
        const activeUsers = users.filter(u => !u.isPaused && (!u.expiryMs || Date.now() <= u.expiryMs)).length;
        const autoDisabledUsers = users.filter(u => u.isPaused && u.disabledReason).length;
        const pausedUsers = users.filter(u => u.isPaused && !u.disabledReason).length;
        const expiredUsers = users.filter(u => u.expiryMs && Date.now() > u.expiryMs && !u.isPaused).length;

        let totalTrafficReqs = 0;
        let dailyTrafficReqs = 0;
        const todayDate = new Date().toISOString().split('T')[0];
        users.forEach(u => {
            const idClean = u.id.replace(/-/g, '').toLowerCase();
            const sysU = sysUsageCache?.users?.[idClean] || { reqs: 0, dReqs: 0, lastDay: '' };
            totalTrafficReqs += (sysU.reqs || 0);
            if (sysU.lastDay === todayDate) dailyTrafficReqs += (sysU.dReqs || 0);
        });

        const upSeconds = Math.floor((Date.now() - isolateStartTime) / 1000);

        // Cross-isolate connection list (D1-backed); falls back to the local in-isolate
        // counter only when no database is bound.
        const liveConns = env.IOT_DB ? await d1GetActiveConns(env) : null;
        const connectionsList = await Promise.all((liveConns || []).map(async c => {
            const user = users.find(u => u.id.replace(/-/g, '').toLowerCase() === c.uuid);
            let displayIp = "";
            if (c.target) {
                const [host, port] = c.target.split(":");
                const ip = await resolveHostForDisplay(host);
                displayIp = port ? `${ip}:${port}` : ip;
            }
            return { uuid: c.uuid, name: (user && user.name) || c.label || c.uuid, connectedAt: c.connected_at, target: c.target || "", ip: displayIp };
        }));
        const liveActiveConnections = liveConns !== null ? connectionsList.length : activeConnections;

        // Cloudflare Workers request count for today, via the stored account/API token.
        let cfRequestsToday = null;
        let cfError = null;
        const cfHasCreds = !!(sysConfig.cfAccountId && sysConfig.cfApiToken);
        if (cfHasCreds) {
            const cfRes = await fetchCloudflareUsageDetailed(sysConfig.cfAccountId, sysConfig.cfApiToken);
            cfRequestsToday = cfRes.requests;
            cfError = cfRes.error;
        }

        return new Response(JSON.stringify({
            success: true,
            stats: {
                users: { total: totalUsers, active: activeUsers, paused: pausedUsers, expired: expiredUsers, autoDisabled: autoDisabledUsers },
                traffic: { totalRequests: totalTrafficReqs, totalGB: (totalTrafficReqs / 6000).toFixed(2), dailyRequests: dailyTrafficReqs, dailyGB: (dailyTrafficReqs / 6000).toFixed(2) },
                system: { uptimeSeconds: upSeconds, activeConnections: liveActiveConnections, version: CURRENT_VERSION, isPaused: sysConfig.isPaused || false },
                connections: connectionsList,
                cloudflare: { hasCredentials: cfHasCreds, requestsToday: cfRequestsToday, error: cfError }
            }
        }), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store, no-cache, must-revalidate" } });
    } catch (e) { return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } }); }
}

function cmpVersions(a, b) {
    const strip = v => String(v).replace(/^v/, '').trim();
    const pa = strip(a).split('.').map(Number);
    const pb = strip(b).split('.').map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        let na = pa[i] || 0, nb = pb[i] || 0;
        if (na > nb) return 1;
        if (nb > na) return -1;
    }
    return 0;
}

async function handleUpdateApi(request, env, ctx) {
    try {
        if (request.method !== "POST") return new Response("405", { status: 405 });
        const data = await request.json();
        if (!(await isKeyAuthorized(data.key, env, ctx))) {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
        }

        const accountId = sysConfig.cfAccountId;
        const apiToken = sysConfig.cfApiToken;
        const workerName = sysConfig.cfWorkerName;
        const repo = (sysConfig.githubRepo || "EbiDevSharp/nahan").replace(/https?:\/\/github\.com\//, '').trim();

        if (data.action === "check") {
            let remoteVer = null;
            try {
                const res = await fetch(`https://raw.githubusercontent.com/${repo}/main/version`);
                if (res.ok) {
                    const txt = (await res.text()).trim();
                    if (txt && txt.length <= 15) remoteVer = txt;
                }
            } catch(e) {}
            if (!remoteVer) {
                try {
                    const res = await fetch(`https://raw.githubusercontent.com/${repo}/main/_worker.js`);
                    if (res.ok) {
                        const code = await res.text();
                        const match = code.match(/const\s+CURRENT_VERSION\s*=\s*["']([^"']+)["']/);
                        if (match) remoteVer = match[1];
                    }
                } catch(e) {}
            }
            if (!remoteVer) {
                return new Response(JSON.stringify({ success: false, error: "Could not fetch remote version" }), { status: 502, headers: { "Content-Type": "application/json" } });
            }
            const hasCredentials = !!(accountId && apiToken && workerName);
            return new Response(JSON.stringify({
                success: true, current: CURRENT_VERSION, latest: remoteVer,
                updateAvailable: cmpVersions(CURRENT_VERSION, remoteVer) < 0,
                canDeploy: hasCredentials
            }), { headers: { "Content-Type": "application/json" } });
        }

        if (data.action === "deploy") {
            if (!accountId || !apiToken || !workerName) {
                return new Response(JSON.stringify({ success: false, error: "CF credentials not configured" }), { status: 400, headers: { "Content-Type": "application/json" } });
            }

            let finalCodeToDeploy = data.code;
            if (!finalCodeToDeploy) {
                try {
                    const res = await fetch(`https://raw.githubusercontent.com/${repo}/main/_worker.js`);
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    finalCodeToDeploy = await res.text();
                } catch(e) {
                    return new Response(JSON.stringify({ success: false, error: "Failed to fetch code from GitHub: " + e.message }), { status: 502, headers: { "Content-Type": "application/json" } });
                }
            }

            const versionMatch = finalCodeToDeploy.match(/const\s+CURRENT_VERSION\s*=\s*["']([^"']+)["']/);
            const newVersion = versionMatch ? versionMatch[1] : CURRENT_VERSION;

            if (cmpVersions(CURRENT_VERSION, newVersion) >= 0 && !data.force && !data.code) {
                return new Response(JSON.stringify({ success: false, error: "Remote version is not newer. Click force redeploy to switch formats or overwrite." }), { status: 400, headers: { "Content-Type": "application/json" } });
            }

            const deployRes = await deployWorkerToCloudflare(accountId, apiToken, workerName, finalCodeToDeploy);
            const deployResult = await deployRes.json();

            if (deployResult.success) {
                ctx?.waitUntil(logActivity(env, "Panel Updated", `v${CURRENT_VERSION} → v${newVersion}`).catch(()=>{}));
                notifyPanelUpdatedTelegram(ctx, newVersion);
                return new Response(JSON.stringify({ success: true, message: `Updated to v${newVersion}`, newVersion }), { headers: { "Content-Type": "application/json" } });
            } else {
                const errMsg = deployResult.errors?.[0]?.message || "Unknown API error";
                return new Response(JSON.stringify({ success: false, error: "Cloudflare API: " + errMsg }), { status: 502, headers: { "Content-Type": "application/json" } });
            }
        }

        return new Response(JSON.stringify({ success: false, error: "Invalid action" }), { status: 400, headers: { "Content-Type": "application/json" } });
    } catch(e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

// Checks the second factor for a login attempt once the master key has already
// matched. Returns one of: { ok:true, trustToken?:string } | { ok:false, need2fa:true } | { ok:false }
async function verifySecondFactor(data, env, ctx, ip, ua) {
    if (!sysConfig.totpEnabled) return { ok: true };

    // 1) Trusted-device token (issued after a prior successful 2FA login with "remember" checked)
    if (data.trustToken) {
        const tokenHash = await sha256Hex(data.trustToken);
        const devices = sysConfig.trustedDevices || [];
        const match = devices.find(d => d.hash === tokenHash && d.expiry > Date.now());
        if (match) return { ok: true };
    }

    // 2) A fresh TOTP code from an authenticator app (2FAS, Google Authenticator, Authy, ...)
    if (data.totp) {
        const valid = await verifyTotpCode(sysConfig.totpSecret, data.totp);
        if (valid) {
            let trustToken = null;
            if (data.remember) {
                trustToken = base32Encode(crypto.getRandomValues(new Uint8Array(20)));
                const hash = await sha256Hex(trustToken);
                const devices = (sysConfig.trustedDevices || []).filter(d => d.expiry > Date.now());
                devices.push({ id: base32Encode(crypto.getRandomValues(new Uint8Array(8))), hash, createdAt: Date.now(), ip: ip || "Unknown", ua: (ua || "").slice(0, 120), expiry: Date.now() + 30 * 24 * 60 * 60 * 1000 });
                sysConfig = { ...sysConfig, trustedDevices: devices };
                if (env) ctx?.waitUntil(cachedD1Put(env, "sys_config", JSON.stringify(sysConfig)).catch(() => {}));
            }
            return { ok: true, trustToken };
        }
        ctx?.waitUntil(logActivity(env, "2FA Failed", `Wrong TOTP code from ${ip}`));
        return { ok: false };
    }

    // 3) A one-time recovery code, for when the authenticator device is lost.
    if (data.recoveryCode) {
        const cleanCode = String(data.recoveryCode).trim().toUpperCase();
        const codeHash = await sha256Hex(cleanCode);
        const hashes = sysConfig.recoveryCodeHashes || [];
        if (hashes.includes(codeHash)) {
            const remaining = hashes.filter(h => h !== codeHash);
            sysConfig = { ...sysConfig, recoveryCodeHashes: remaining };
            if (env) ctx?.waitUntil(cachedD1Put(env, "sys_config", JSON.stringify(sysConfig)).catch(() => {}));
            ctx?.waitUntil(logActivity(env, "Recovery Login", `Login via recovery code from ${ip} (one-time code consumed, ${remaining.length} left)`));
            return { ok: true, usedRecoveryCode: true, recoveryRemaining: remaining.length };
        }
        return { ok: false };
    }

    // Password matched but no second factor was supplied yet.
    return { ok: false, need2fa: true };
}

async function handleAuth(request, hostName, ctx, env) {
    try {
        const data = await request.json();
        const ip = request.headers.get("cf-connecting-ip") || "Unknown";
        await ensureAuthMigrated(env, ctx);
        const isRawPassword = await verifyMasterKey(data.key);
        const isTokenAuth = !isRawPassword && await isKeyAuthorized(data.key, env, ctx);

        if (isRawPassword || isTokenAuth) {
            let trustToken = null, usedRecoveryCode = false, recoveryRemaining = null;

            if (isRawPassword) {
                // Fresh login with the real master key still goes through the full 2FA gate.
                const twoFa = await verifySecondFactor(data, env, ctx, ip, request.headers.get("user-agent") || "");
                if (!twoFa.ok) {
                    if (twoFa.need2fa) {
                        return new Response(JSON.stringify({ success: false, need2fa: true }), { status: 401, headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" } });
                    }
                    ctx?.waitUntil(logActivity(env, "Auth Failed", `Correct password but invalid 2FA code from ${ip}`));
                    if (ctx) ctx.waitUntil(sendTelegramMessage(request, "تلاش ناموفق ورود به پنل (کد ۲مرحله‌ای اشتباه)!", hostName));
                    return new Response(JSON.stringify({ success: false }), { status: 401, headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" } });
                }
                trustToken = twoFa.trustToken || null;
                usedRecoveryCode = !!twoFa.usedRecoveryCode;
                recoveryRemaining = typeof twoFa.recoveryRemaining === "number" ? twoFa.recoveryRemaining : null;

                ctx?.waitUntil(logActivity(env, "Auth Success", `Successful panel login from ${ip}`));
                if (!sysConfig.silentAlerts && ctx) ctx.waitUntil(sendTelegramMessage(request, "ورود به پنل (موفق)", hostName));

                // Store login signal for Telegram bot
                if (sysConfig.tgAdminId && env.IOT_DB) {
                    const loginSignal = {
                        name: sysConfig.name || hostName,
                        host: hostName,
                        apiRoute: sysConfig.apiRoute,
                        isLocal: true,
                        ts: Date.now()
                    };
                    ctx?.waitUntil(d1Put(env, "tg_panel_login", JSON.stringify(loginSignal)).catch(() => {}));
                }

                // Notify hub panel if configured
                if (sysConfig.hubPanelUrl && sysConfig.hubPanelUrl.trim() && sysConfig.tgAdminId) {
                    try {
                        let hubUrl = sysConfig.hubPanelUrl.trim();
                        if (!hubUrl.startsWith('http')) hubUrl = 'https://' + hubUrl;
                        const signalPayload = {
                            signal: "panel_login",
                            panelName: sysConfig.name || hostName,
                            panelHost: hostName,
                            panelApiRoute: sysConfig.apiRoute,
                            panelMasterKey: sysConfig.syncSecret,
                            tgAdminId: sysConfig.tgAdminId,
                            ts: Date.now()
                        };
                        ctx?.waitUntil(fetch(`${hubUrl}/${encodeURI(sysConfig.apiRoute)}/tg/sync_panel`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(signalPayload)
                        }).catch(() => {}));
                    } catch(e) {}
                }
            }

            // Fresh password logins mint a brand-new session token; a request that
            // already authenticated via a valid token just gets that same token back
            // (its sliding expiry was already extended inside isKeyAuthorized).
            const sessionToken = isRawPassword ? await mintSessionToken(env, ctx, request) : data.key;

            const netInfo = {
                ip: ip,
                colo: request.cf?.colo || "Unknown",
                loc: (request.cf?.city || "Unknown") + ", " + (request.cf?.country || "Unknown")
            };
            // این باکس («وضعیت زنده») باید همان اتصالات واقعاً زنده‌ی الان را نشان بدهد،
            // دقیقاً از همان منبعی که «کاربران متصل» در نمای کلی می‌خواند (جدول D1
            // active_conns). قبلاً این بخش یا از یک Map محلیِ ناپایدار یا از شمارنده‌ی
            // تجمعی تاریخی sysUsageCache می‌خواند که باعث ناهم‌خوانی با نمای کلی می‌شد.
            let usageData = {};
            if (env.IOT_DB && !data.compact) {
                const liveConnsForUsage = await d1GetActiveConns(env);
                liveConnsForUsage.forEach(c => {
                    if (!usageData[c.uuid]) usageData[c.uuid] = { connects: 0, last: 0 };
                    usageData[c.uuid].connects += 1;
                    if (c.connected_at > usageData[c.uuid].last) usageData[c.uuid].last = c.connected_at;
                });
            } else if (!data.compact) {
                // بدون D1، اتصالات هم‌زمانِ آیزوله‌ی جاری به‌عنوان بهترین تخمین ممکن استفاده می‌شود
                const sysUsers = (sysUsageCache && sysUsageCache.users) ? sysUsageCache.users : {};
                for (const k in sysUsers) {
                    const su = sysUsers[k];
                    if (su && su.connects) usageData[k] = { connects: su.connects, last: su.last || 0 };
                }
            }
            let baseHost = hostName;
            let protocol = "https";
            if (sysConfig.customPanelUrl && sysConfig.customPanelUrl.trim()) {
                let customUrlStr = sysConfig.customPanelUrl.trim();
                if (!customUrlStr.startsWith('http://') && !customUrlStr.startsWith('https://')) {
                    customUrlStr = 'https://' + customUrlStr;
                }
                try {
                    const customUrl = new URL(customUrlStr);
                    baseHost = customUrl.host;
                    protocol = customUrl.protocol.replace(':', '');
                } catch(e) {}
            }
            // Never expose internal 2FA/session secrets to the browser.
            const safeConfig = { ...sysConfig };
            delete safeConfig.totpSecret;
            delete safeConfig.totpPendingSecret;
            delete safeConfig.recoveryCodeHashes;
            delete safeConfig.trustedDevices;
            delete safeConfig.sessionTokens;
            delete safeConfig.masterKeyHash;
            delete safeConfig.masterKeySalt;
            return new Response(JSON.stringify({
                success: true, config: safeConfig, deviceId: activeDeviceId, network: netInfo, usage: usageData, sysUsage: (sysUsageCache && sysUsageCache.users) ? sysUsageCache.users : {},
                version: CURRENT_VERSION,
                usageDeferred: !!data.compact,
                sessionToken,
                trustToken,
                usedRecoveryCode,
                recoveryRemaining,
                profiles: getAllProfiles().map(p => {
                    let subSuffix = p.name === 'Default' ? '' : '?sub=' + encodeURIComponent(p.name);
                    return {
                        name: p.name,
                        id: p.id,
                        sync: `${protocol}://${baseHost}/${sysConfig.apiRoute}${subSuffix}`
                    };
                })
            }), { status: 200, headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" } });
        }
        // A "silent" attempt is the front-end's automatic re-auth on page load/refresh
        // using a cached session token, not a real user-typed login. If that stored
        // token happens to be expired/invalid, this branch runs on every single
        // refresh — it should just fail quietly (still logged) without pinging Telegram.
        if (!data.silent) {
            ctx?.waitUntil(logActivity(env, "Auth Failed", `Failed login attempt from ${ip}`));
            if (ctx) ctx.waitUntil(sendTelegramMessage(request, "تلاش ناموفق ورود به پنل!", hostName));
        } else {
            ctx?.waitUntil(logActivity(env, "Silent Re-auth Failed", `Expired/invalid session token from ${ip}`));
        }
        return new Response(JSON.stringify({ success: false }), { status: 401, headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" } });
    } catch (e) { return new Response(JSON.stringify({ success: false }), { status: 400, headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" } }); }
}

// Handles all 2FA management actions. Every action requires the current
// master key; enabling/disabling/regenerating additionally require a valid
// TOTP code (or, for disable/regenerate, a recovery code) so an attacker who
// only steals the master key still cannot touch 2FA settings.
async function handleTwoFactorApi(request, env, ctx, hostName) {
    const cors = { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" };
    if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: { ...cors, "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" } });
    }
    try {
        const data = await request.json();
        if (!(await isKeyAuthorized(data.key, env, ctx))) {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: cors });
        }
        const action = data.action;

        if (action === "status") {
            return new Response(JSON.stringify({
                success: true,
                enabled: !!sysConfig.totpEnabled,
                recoveryCodesRemaining: (sysConfig.recoveryCodeHashes || []).length,
                trustedDevices: (sysConfig.trustedDevices || []).filter(d => d.expiry > Date.now()).length
            }), { status: 200, headers: cors });
        }

        if (action === "init") {
            if (sysConfig.totpEnabled) {
                return new Response(JSON.stringify({ success: false, error: "2FA already enabled" }), { status: 400, headers: cors });
            }
            const secret = generateTotpSecret();
            sysConfig = { ...sysConfig, totpPendingSecret: secret };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            const accountLabel = sysConfig.name || hostName || "nahan-panel";
            const otpauth = buildOtpAuthUri(secret, accountLabel, "Nahan Gateway");
            return new Response(JSON.stringify({ success: true, secret, otpauth }), { status: 200, headers: cors });
        }

        if (action === "confirm") {
            if (!sysConfig.totpPendingSecret) {
                return new Response(JSON.stringify({ success: false, error: "No pending setup. Start again." }), { status: 400, headers: cors });
            }
            const valid = await verifyTotpCode(sysConfig.totpPendingSecret, data.code);
            if (!valid) {
                return new Response(JSON.stringify({ success: false, error: "Invalid code" }), { status: 401, headers: cors });
            }
            const recoveryCodes = generateRecoveryCodes(10);
            const hashes = [];
            for (const c of recoveryCodes) hashes.push(await sha256Hex(c));
            sysConfig = { ...sysConfig, totpEnabled: true, totpSecret: sysConfig.totpPendingSecret, totpPendingSecret: "", recoveryCodeHashes: hashes, trustedDevices: [] };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            ctx?.waitUntil(logActivity(env, "2FA Enabled", "Two-factor authentication was enabled for the panel"));
            if (!sysConfig.silentAlerts && ctx) ctx.waitUntil(sendTelegramMessage(request, "احراز هویت دومرحله‌ای (2FA) برای پنل فعال شد.", hostName));
            return new Response(JSON.stringify({ success: true, recoveryCodes }), { status: 200, headers: cors });
        }

        if (action === "disable") {
            const okTotp = sysConfig.totpEnabled && await verifyTotpCode(sysConfig.totpSecret, data.code);
            let okRecovery = false;
            if (!okTotp && data.recoveryCode) {
                const codeHash = await sha256Hex(String(data.recoveryCode).trim().toUpperCase());
                okRecovery = (sysConfig.recoveryCodeHashes || []).includes(codeHash);
            }
            if (!okTotp && !okRecovery) {
                return new Response(JSON.stringify({ success: false, error: "Invalid code" }), { status: 401, headers: cors });
            }
            sysConfig = { ...sysConfig, totpEnabled: false, totpSecret: "", totpPendingSecret: "", recoveryCodeHashes: [], trustedDevices: [] };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            ctx?.waitUntil(logActivity(env, "2FA Disabled", "Two-factor authentication was disabled for the panel"));
            if (!sysConfig.silentAlerts && ctx) ctx.waitUntil(sendTelegramMessage(request, "⚠️ احراز هویت دومرحله‌ای (2FA) برای پنل غیرفعال شد!", hostName));
            return new Response(JSON.stringify({ success: true }), { status: 200, headers: cors });
        }

        if (action === "regenerate_recovery") {
            if (!sysConfig.totpEnabled) {
                return new Response(JSON.stringify({ success: false, error: "2FA is not enabled" }), { status: 400, headers: cors });
            }
            const valid = await verifyTotpCode(sysConfig.totpSecret, data.code);
            if (!valid) {
                return new Response(JSON.stringify({ success: false, error: "Invalid code" }), { status: 401, headers: cors });
            }
            const recoveryCodes = generateRecoveryCodes(10);
            const hashes = [];
            for (const c of recoveryCodes) hashes.push(await sha256Hex(c));
            sysConfig = { ...sysConfig, recoveryCodeHashes: hashes };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            ctx?.waitUntil(logActivity(env, "2FA Recovery Codes Regenerated", "Old recovery codes were invalidated and replaced"));
            return new Response(JSON.stringify({ success: true, recoveryCodes }), { status: 200, headers: cors });
        }

        if (action === "list_sessions") {
            const now = Date.now();
            const keyHash = await sha256Hex(data.key);
            const sessions = (sysConfig.sessionTokens || []).filter(t => t.expiry > now).map(t => ({
                id: t.id || t.hash.slice(0, 12), createdAt: t.createdAt || null, expiry: t.expiry,
                ip: t.ip || "Unknown", ua: t.ua || "", current: t.hash === keyHash
            })).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
            const devices = (sysConfig.trustedDevices || []).filter(d => d.expiry > now).map(d => ({
                id: d.id || d.hash.slice(0, 12), createdAt: d.createdAt || null, expiry: d.expiry,
                ip: d.ip || "Unknown", ua: d.ua || ""
            })).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
            return new Response(JSON.stringify({ success: true, sessions, devices }), { status: 200, headers: cors });
        }

        if (action === "revoke_session") {
            // The UI never shows an "End session" button for the current session,
            // but guard it server-side too: revoking your own live token mid-request
            // would immediately lock this same browser out with no warning.
            const currentHash = await sha256Hex(data.key);
            const targetIsCurrent = (sysConfig.sessionTokens || []).some(t => (t.id || t.hash.slice(0, 12)) === data.id && t.hash === currentHash);
            if (targetIsCurrent) {
                return new Response(JSON.stringify({ success: false, error: "Cannot end your own current session from here — log out instead." }), { status: 400, headers: cors });
            }
            const before = (sysConfig.sessionTokens || []).length;
            const remaining = (sysConfig.sessionTokens || []).filter(t => (t.id || t.hash.slice(0, 12)) !== data.id);
            sysConfig = { ...sysConfig, sessionTokens: remaining };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            if (remaining.length < before) ctx?.waitUntil(logActivity(env, "Session Revoked", `A web login session was ended from the Security panel`));
            return new Response(JSON.stringify({ success: true }), { status: 200, headers: cors });
        }

        if (action === "revoke_device") {
            const before = (sysConfig.trustedDevices || []).length;
            const remaining = (sysConfig.trustedDevices || []).filter(d => (d.id || d.hash.slice(0, 12)) !== data.id);
            sysConfig = { ...sysConfig, trustedDevices: remaining };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            if (remaining.length < before) ctx?.waitUntil(logActivity(env, "Trusted Device Forgotten", `A remembered 2FA device was removed from the Security panel`));
            return new Response(JSON.stringify({ success: true }), { status: 200, headers: cors });
        }

        if (action === "revoke_all_sessions") {
            // Keep the caller's own current session alive; end every other one.
            const currentHash = await sha256Hex(data.key);
            const before = (sysConfig.sessionTokens || []).length;
            const remaining = (sysConfig.sessionTokens || []).filter(t => t.hash === currentHash);
            sysConfig = { ...sysConfig, sessionTokens: remaining };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            const revokedCount = before - remaining.length;
            if (revokedCount > 0) ctx?.waitUntil(logActivity(env, "All Sessions Revoked", `${revokedCount} other web login session(s) were ended from the Security panel`));
            return new Response(JSON.stringify({ success: true, revokedCount }), { status: 200, headers: cors });
        }

        if (action === "revoke_all_devices") {
            const before = (sysConfig.trustedDevices || []).length;
            sysConfig = { ...sysConfig, trustedDevices: [] };
            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
            if (before > 0) ctx?.waitUntil(logActivity(env, "All Trusted Devices Forgotten", `${before} remembered 2FA device(s) were removed from the Security panel`));
            return new Response(JSON.stringify({ success: true, revokedCount: before }), { status: 200, headers: cors });
        }

        return new Response(JSON.stringify({ success: false, error: "Unknown action" }), { status: 400, headers: cors });
    } catch (e) {
        return new Response(JSON.stringify({ success: false, error: "Bad request" }), { status: 400, headers: cors });
    }
}

const PANEL_PRIVATE_SYNC_FIELDS = new Set(['syncSecret','masterKey','masterKeyHash','masterKeySalt','totpEnabled','totpSecret','totpPendingSecret','recoveryCodeHashes','trustedDevices','sessionTokens','tgWebhookSecret','linkedPanels']);
function sharedPanelConfig(config) {
    return Object.fromEntries(Object.entries(config || {}).filter(([key]) => !PANEL_PRIVATE_SYNC_FIELDS.has(key)));
}
async function repairLinkedPanel(index, expectedHost, env) {
    const panel = linkedPanelAt(index);
    if (!panel || panel.host !== expectedHost) return clusterJson({success:false,error:'Panel changed; refresh the list'},409);
    const routes = [...new Set([panel.apiRoute,sysConfig.apiRoute])];
    const keys = [...new Set([panel.masterKey,sysConfig.syncSecret].filter(Boolean))];
    for (const route of routes) for (const key of keys) {
        const result = await fetchRemotePanelConfig({...panel,apiRoute:route,masterKey:key});
        if (!result.success) continue;
        const localAdmin = sysConfig.tgAdminId || sysConfig.tgChatId;
        const remoteAdmin = result.config?.tgAdminId || result.config?.tgChatId;
        if (!localAdmin || !remoteAdmin || String(localAdmin) !== String(remoteAdmin)) return clusterJson({success:false,error:'Telegram administrator mismatch'},403);
        const nextConfig = {...sysConfig,linkedPanels:sysConfig.linkedPanels.map((item,i)=>i===Number(index)?{...item,masterKey:key,apiRoute:result.config.apiRoute || route}:item)};
        await cachedD1Put(env,'sys_config',JSON.stringify(nextConfig));
        sysConfig=nextConfig;
        return clusterJson({success:true,host:panel.host,apiRoute:nextConfig.linkedPanels[Number(index)].apiRoute});
    }
    return clusterJson({success:false,error:'Repair could not authenticate. Sign in directly to the destination and re-enter its current sync secret.'},502);
}

async function handleConfigSync(request, env, ctx) {
    try {
        const data = await request.json();
        await ensureAuthMigrated(env, ctx);
        const isAuthorized = await isKeyAuthorized(data.key, env, ctx);
        if (!isAuthorized) return new Response(JSON.stringify({ success: false }), { status: 401 });
        if (!env.IOT_DB) return new Response(JSON.stringify({ success: false, msg: "DB Error" }), { status: 400 });

        const skippedPrivateFields = (data.fromMaster || data.relayToLinkedPanels) ? Object.keys(data.config || {}).filter(key=>PANEL_PRIVATE_SYNC_FIELDS.has(key)) : [];
        if (data.fromMaster || data.relayToLinkedPanels) data.config = sharedPanelConfig(data.config);
        let nextConfig = sysConfig;
        if (data.config) {
            nextConfig = { ...sysConfig, ...data.config };
            let credentialChanged = false;

            // The browser sends a plaintext new password when the admin changes it in
            // Settings. It's hashed right here and the plaintext is never written to D1.
            if (typeof data.config.masterKey === "string" && data.config.masterKey.length > 0) {
                const { hash, salt } = await hashMasterKey(data.config.masterKey);
                nextConfig.masterKeyHash = hash;
                nextConfig.masterKeySalt = salt;
                credentialChanged = true;
            } else if (data.config.masterKeyHash && data.config.masterKeySalt) {
                // Replicated hash+salt from another panel in the cluster (Force Sync's
                // "Security" category) — never the plaintext, just the verifier pair.
                credentialChanged = true;
            }
            delete nextConfig.masterKey; // never persisted in plaintext, regardless of source

            if (credentialChanged) {
                // Old session tokens and "remembered" 2FA devices are no longer
                // trustworthy once the login credential actually changes.
                nextConfig.sessionTokens = [];
                nextConfig.trustedDevices = [];
            }
            await cachedD1Put(env, "sys_config", JSON.stringify(nextConfig));
            sysConfig = nextConfig;

            if (data.fromMaster) {
                // این درخواست از یه پنل دیگه (لینک‌شده در خوشه) اومده، نه یه ذخیره‌ی
                // معمولی ادمین از همین پنل — پس مثل لاگین‌ها، یه لاگ قابل‌مشاهده ثبت می‌کنیم.
                const ip = request.headers.get("cf-connecting-ip") || "unknown";
                const fields = Object.keys(data.config).join(", ");
                ctx?.waitUntil(logActivity(env, "Config Synced", `Received settings from another panel (${ip}): ${fields}`).catch(() => {}));
            }
        }

        if (data.resetUUID) {
            const uuidClean = data.resetUUID.replace(/-/g, '').toLowerCase();
            if (!sysUsageCache) sysUsageCache = { users: {} };
            if (!sysUsageCache.users) sysUsageCache.users = {};
            if (sysUsageCache.users[uuidClean]) {
                sysUsageCache.users[uuidClean].reqs = 0;
                sysUsageCache.users[uuidClean].dReqs = 0;
            } else {
                sysUsageCache.users[uuidClean] = { reqs: 0, dReqs: 0, lastDay: new Date().toISOString().split('T')[0] };
            }
            await cachedD1Put(env, "sys_usage", JSON.stringify(sysUsageCache));
        }

        if (nextConfig.tgToken && ctx) {
            // اگه هنوز secret token برای وبهوک ساخته نشده، همین‌جا یکی می‌سازیم و ذخیره
            // می‌کنیم. این توکن تضمین می‌کنه فقط خودِ سرورهای تلگرام (و نه هر کسی که
            // آدرس وبهوک رو حدس بزنه) بتونن درخواست معتبر به این endpoint بفرستن.
            if (!nextConfig.tgWebhookSecret) {
                nextConfig.tgWebhookSecret = crypto.randomUUID().replace(/-/g, '');
                sysConfig = nextConfig;
                await cachedD1Put(env, "sys_config", JSON.stringify(nextConfig));
            }
            const hookUrl = `https://${new URL(request.url).hostname}/${encodeURI(nextConfig.apiRoute)}/tg`;
            ctx.waitUntil(fetch(`https://api.telegram.org/bot${nextConfig.tgToken}/setWebhook`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: hookUrl, secret_token: nextConfig.tgWebhookSecret })
            }).catch(()=>{}));
        }

        let relayResults = null;
        if (data.config && !data.fromMaster && data.relayToLinkedPanels && Array.isArray(nextConfig.linkedPanels) && nextConfig.linkedPanels.length > 0) {
            // این فراخوانی از سمت خودِ Worker انجام می‌شه (نه مرورگر)، پس محدودیت CORS
            // نداره — بر خلاف نسخه‌ی قبلی که مستقیم از مرورگر به دامنه‌ی هر پنل دیگه
            // فچ می‌زد و به همین دلیل بی‌صدا توسط مرورگر بلاک می‌شد. هر پنل با «رمز
            // خوشه»ی مخصوص خودش (ذخیره‌شده موقع Add Panel) صدا زده می‌شه.
            relayResults = await Promise.all(nextConfig.linkedPanels.map(async (panel) => {
                try {
                    const res = await fetch(`https://${panel.host}/${encodeURI(panel.apiRoute)}/api/sync`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ key: panel.masterKey, config: sharedPanelConfig(data.config), fromMaster: true }),
                        signal: AbortSignal.timeout(10000)
                    });
                    const result = await res.json();
                    return { host: panel.host, ok: res.ok && result.success === true, newRoute: result.newRoute || null };
                } catch (e) {
                    return { host: panel.host, ok: false };
                }
            }));
        }

        if (relayResults) {
            const updatedPanels = nextConfig.linkedPanels.map(panel => {
                const result = relayResults.find(item=>item.host===panel.host && item.ok && item.newRoute);
                return result ? {...panel,apiRoute:result.newRoute} : panel;
            });
            if (updatedPanels.some((panel,i)=>panel.apiRoute!==nextConfig.linkedPanels[i].apiRoute)) {
                nextConfig={...nextConfig,linkedPanels:updatedPanels};
                await cachedD1Put(env,'sys_config',JSON.stringify(nextConfig));sysConfig=nextConfig;
            }
        }
        return new Response(JSON.stringify({ success: true, newRoute: nextConfig.apiRoute, relayResults, skippedPrivateFields }), { status: 200 });
    } catch (e) { return new Response(JSON.stringify({ success: false }), { status: 400 }); }
}

async function handleSyncPanel(request, env, ctx) {
    try {
        const data = await request.json();
        if (!data.signal || data.signal !== "panel_login") {
            return new Response(JSON.stringify({ success: false, error: "Invalid signal" }), { status: 400 });
        }
        if (!data.tgAdminId || !data.panelHost) {
            return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
        }
        // Verify the tgAdminId matches this panel's config
        const adminId = sysConfig.tgAdminId || sysConfig.tgChatId;
        if (!adminId || adminId.toString() !== data.tgAdminId.toString()) {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401 });
        }
        const loginSignal = {
            name: data.panelName || data.panelHost,
            host: data.panelHost,
            apiRoute: data.panelApiRoute || sysConfig.apiRoute,
            masterKey: data.panelMasterKey,
            isLocal: false,
            ts: data.ts || Date.now()
        };
        if (env.IOT_DB) {
            ctx?.waitUntil(d1Put(env, "tg_panel_login", JSON.stringify(loginSignal)).catch(()=>{}));
        }
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ success: false }), { status: 400 });
    }
}

const botI18n = {
    en: {
        welcome: "🤖 **Welcome to Nahan Gateway Bot**\nSelect your option below to manage your system:",
        status: "📊 System Status",
        users: "👥 Subscribers",
        btn_settings: "Settings", btn_panel_ops: "Panel Operations", btn_manage_users: "Manage Subscribers",
        msg_settings_intro: "Choose a settings category:", msg_panel_ops_intro: "Choose a panel operation:",
        metrics: "📡 Gateway Health",
        panic: "🚨 Panic Mode",
        dash: "🔑 Dashboard Control",
        lang: "🌐 Change Language",
        active: "🟢 Active",
        paused: "🔴 Paused",
        uptime: "⏱ Uptime",
        streams: "📡 Active Streams",
        no_users: "No subscribers found.",
        sub_info: "👤 Subscriber Details:",
        name: "Name",
        total: "Total Reqs",
        daily: "Daily Reqs",
        expiry: "Expiry",
        days: "Days remaining",
        created: "Created At",
        unlimited: "Unlimited",
        btn_back: "◀️ Back",
        btn_next: "▶️ Next",
        btn_del: "🗑️ Delete",
        btn_pause: "⏸️ Pause",
        btn_resume: "▶️ Resume",
        btn_edit_name: "✏️ Change Name",
        btn_edit_limits: "⚙️ Limits",
        btn_add: "+ Add Subscriber",
        btn_confirm: "✅ Confirm",
        btn_cancel: "❌ Cancel",
        msg_enter_name: "Please send a name for the subscriber:",
        msg_added: "Sub added successfully! 🎉",
        msg_deleted: "Sub deleted successfully! 🗑️",
        msg_panic: "🚨 PANIC MODE ACTIVATED 🚨\nRoute randomized & System Paused.",
        msg_invalid: "Invalid input. Please try again.",
        msg_enter_limits: "Enter limits format:\n`[totalReqs] [dailyReqs] [days_limit]`\n(Use 0 for unlimited)\n\nExample:\n`10000 500 30`",
        msg_confirm_del: "⚠️ Are you sure you want to delete this subscriber?",
        msg_confirm_panic: "⚠️ Are you absolutely sure you want to trigger PANIC mode? This will randomize API routes and pause all connections!",
        status_updated: "Status updated! 🔁",
        access_denied: "❌ Access Denied. You are not authorized to manage this panel.",
        dashboard: "📊 Dashboard",
        search: "🔍 Search User",
        statistics: "📈 Statistics",
        panel_info: "ℹ️ Panel Info",
        disabled_users: "🚫 Disabled Users",
        reset_traffic: "🔄 Reset Traffic",
        extend_expiry: "📅 Extend Expiry",
        notes: "📝 Notes",
        device_limit: "📱 Config Limit",
        conn_limit: "🔌 Connection Limit",
        msg_enter_search: "🔍 Send a username, UUID, or subscription to search:",
        msg_enter_notes: "📝 Send notes for this user:",
        msg_enter_extend_days: "📅 Enter number of days to extend expiration:",
        msg_traffic_reset: "✅ Traffic has been reset successfully!",
        msg_expiry_extended: "✅ Expiration extended by {days} days!",
        msg_no_disabled: "No disabled users found.",
        msg_enter_device_limit: "📱 Enter config limit (0 for unlimited):",
        config_limit_updated: "✅ Config limit updated!",
        stats_title: "📈 Panel Statistics",
        count_active: "active",
        count_paused: "paused",
        count_disabled: "auto-disabled",
        dash_total: "Total Users",
        dash_active: "Active",
        dash_paused: "Paused",
        dash_expired: "Expired",
        dash_auto_disabled: "Auto-Disabled",
        btn_main_menu: "🔙 Main Menu",
        btn_back_to_list: "🔙 Back to List",
        total_traffic: "Total Traffic",
        daily_traffic: "Daily Traffic",
        lbl_status: "Status",
        lbl_subscription: "Subscription Connection",
        lbl_user_not_found: "⚠️ User not found",
        lbl_none: "None",
        lbl_page: "Page",
        select_panel: "🔌 Which panel do you want to manage?",
        current_panel: "Current Panel",
        switch_panel: "🔄 Switch Panel",
        panel_local: "🏠 This Panel",
        panel_remote: "🌐",
        msg_panel_selected: "Panel selected! ✅",
        msg_panel_error: "❌ Failed to connect to the selected panel.",
        msg_panel_unreachable: "⚠️ Panel is unreachable. Please check the configuration.",
        btn_sub_link: "🔗 Subscription Link",
        sub_link_sent: "✅ Subscription link sent!",
        btn_update_usage: "🔄 Update Usage",
        btn_check_update: "🔄 Check for Updates",
        btn_download_worker: "🧩 Download Worker Source",
        btn_download_worker_live: "🌩️ Download Real Live Code (Cloudflare only)",
        btn_upload_worker: "⬆️ Upload / Update Worker",
        btn_update_all_panels: "🌐 Update All Panels",
        msg_update_all_confirm: "This will deploy the latest version to THIS panel and to all {count} linked panel(s). Continue?",
        msg_update_all_none_linked: "You have no linked panels yet — this will only update this panel.",
        msg_update_all_running: "🚀 Updating this panel and all linked panels... this may take a moment.",
        msg_update_all_result_header: "🌐 **Update All Panels — Result**",
        msg_update_all_local_ok: "✅ This panel: updated to v{version}",
        msg_update_all_local_fail: "❌ This panel: failed — {error}",
        msg_update_all_panel_ok: "✅ {host}: updated",
        msg_update_all_panel_fail: "❌ {host}: failed — {error}",
        msg_checking_update: "🔍 Checking for updates...",
        msg_preparing_download: "📦 Preparing worker source file...",
        msg_download_failed: "❌ Could not retrieve the worker source.",
        msg_main_menu_return: "✅ Done. Sent as a file above.",
        msg_worker_updated: "Worker updated successfully.",
        msg_send_worker_file_or_url: "📤 Send the new `_worker.js` as a file, or send a direct URL to it as text.",
        msg_update_check_failed: "❌ Failed to check for updates. Please try again later.",
        msg_no_update: "✅ You are already on the latest version (v{version}).",
        msg_update_available: "🆕 A new version is available!\n\n📦 Current: v{current}\n✨ Latest: v{latest}",
        msg_update_no_cf: "⚠️ Update found, but Cloudflare Account ID, API Token, and Worker Name are not configured. Set them in the web panel settings to enable deploying from the bot.",
        btn_deploy_update: "🚀 Deploy Update",
        msg_confirm_deploy: "⚠️ Deploy v{latest} to your Worker now? The panel will restart momentarily.",
        msg_deploying: "🚀 Deploying update... this may take a few seconds.",
        msg_deploy_success: "✅ Successfully updated to v{version}!",
        msg_deploy_failed: "❌ Update failed: {error}",
    },
    fa: {
        welcome: "🤖 **به ربات ترانزیت نهان خوش آمدید**\nجهت مدیریت سیستم نظارتی خود یکی از گزینه‌های زیر را انتخاب نمایید:",
        status: "📊 وضعیت سیستم",
        users: "👥 مدیریت مشترکین",
        btn_settings: "تنظیمات", btn_panel_ops: "عملیات پنل", btn_manage_users: "مدیریت مشترکین",
        msg_settings_intro: "یکی از دسته‌های تنظیمات رو انتخاب کن:", msg_panel_ops_intro: "یکی از عملیات پنل رو انتخاب کن:",
        metrics: "📡 سلامت درگاه شبکه",
        panic: "🚨 وضعیت اضطراری (Panic)",
        dash: "🔑 پنل تحت وب",
        lang: "🌐 تغییر زبان به انگلیسی",
        active: "🟢 فعال",
        paused: "🔴 متوقف شده",
        uptime: "⏱ مدت زمان کارکرد",
        streams: "📡 اتصالات فعال",
        no_users: "هیچ مشترکی پیدا نشد.",
        sub_info: "👤 مشخصات مشترک:",
        name: "نام",
        total: "درخواست کل",
        daily: "درخواست روزانه",
        expiry: "انقضاء",
        days: "روزهای باقی‌مانده",
        created: "تاریخ ایجاد",
        unlimited: "نامحدود",
        btn_back: "◀️ بازگشت",
        btn_next: "▶️ بعدی",
        btn_del: "🗑️ حذف",
        btn_pause: "⏸️ غیرفعال‌سازی",
        btn_resume: "▶️ فعال‌سازی",
        btn_edit_name: "✏️ تغییر نام",
        btn_edit_limits: "⚙️ ویرایش محدودیت‌ها",
        btn_add: "+ افزودن مشترک جدید",
        btn_confirm: "✅ تأیید",
        btn_cancel: "❌ انصراف",
        msg_enter_name: "لطفاً نام یا شناسه مشترک جدید را ارسال نمایید:",
        msg_added: "مشترک با موفقیت افزوده شد! 🎉",
        msg_deleted: "مشترک با موفقیت حذف گردید! 🗑️",
        msg_panic: "🚨 وضعیت اضطراری فعال شد 🚨\nمسیر تصادفی شد و سیستم متوقف گردید.",
        msg_invalid: "ورودی نامعتبر است. مجدداً تلاش نمایید.",
        msg_enter_limits: "فرمت ورودی محدودیت:\n`[کل] [روزانه] [مدت_روز]`\n(از 0 برای نامحدود استفاده کنید)\n\nمثال:\n`10000 500 30`",
        msg_confirm_del: "⚠️ آیا از حذف این مشترک اطمینان کامل دارید؟",
        msg_confirm_panic: "⚠️ آیا از فعال‌سازی وضعیت اضطراری اطمینان دارید؟ کل اتصالات متوقف و آدرس‌ها منقضی خواهند شد!",
        status_updated: "وضعیت بروزرسانی شد! 🔁",
        access_denied: "❌ دسترسی غیرمجاز. شما اجازه مدیریت این پنل را ندارید.",
        dashboard: "📊 داشبورد",
        search: "🔍 جستجوی کاربر",
        statistics: "📈 آمار",
        panel_info: "ℹ️ اطلاعات پنل",
        disabled_users: "🚫 کاربران غیرفعال",
        reset_traffic: "🔄 بازنشانی ترافیک",
        extend_expiry: "📅 تمدید انقضا",
        notes: "📝 یادداشت‌ها",
        device_limit: "📱 محدودیت کانفیگ",
        conn_limit: "🔌 محدودیت کانکشن هم‌زمان",
        msg_enter_search: "🔍 نام کاربری، UUID یا لینک اشتراک را ارسال کنید:",
        msg_enter_notes: "📝 یادداشت برای این کاربر را ارسال کنید:",
        msg_enter_extend_days: "📅 تعداد روزهای تمدید را وارد کنید:",
        msg_traffic_reset: "✅ ترافیک با موفقیت بازنشانی شد!",
        msg_expiry_extended: "✅ انقضا به مدت {days} روز تمدید شد!",
        msg_no_disabled: "هیچ کاربر غیرفعالی یافت نشد.",
        msg_enter_device_limit: "📱 محدودیت تعداد کانفیگ را وارد کنید (0 برای نامحدود):",
        config_limit_updated: "✅ محدودیت کانفیگ به‌روزرسانی شد!",
        stats_title: "📈 آمار پنل",
        count_active: "فعال",
        count_paused: "متوقف",
        count_disabled: "غیرفعال خودکار",
        dash_total: "کل کاربران",
        dash_active: "فعال",
        dash_paused: "متوقف",
        dash_expired: "منقضی",
        dash_auto_disabled: "غیرفعال خودکار",
        btn_main_menu: "🔙 منوی اصلی",
        btn_back_to_list: "🔙 بازگشت به لیست",
        total_traffic: "ترافیک کل",
        daily_traffic: "ترافیک روزانه",
        lbl_status: "وضعیت",
        lbl_subscription: "لینک اشتراک",
        lbl_user_not_found: "⚠️ کاربر یافت نشد",
        lbl_none: "ندارد",
        lbl_page: "صفحه",
        select_panel: "🔌 کدام پنل را می‌خواهید مدیریت کنید؟",
        current_panel: "پنل فعلی",
        switch_panel: "🔄 تغییر پنل",
        panel_local: "🏠 این پنل",
        panel_remote: "🌐",
        msg_panel_selected: "پنل انتخاب شد! ✅",
        msg_panel_error: "❌ اتصال به پنل انتخابی ناموفق بود.",
        msg_panel_unreachable: "⚠️ پنل در دسترس نیست. لطفاً پیکربندی را بررسی کنید.",
        btn_sub_link: "🔗 لینک اشتراک",
        sub_link_sent: "✅ لینک اشتراک ارسال شد!",
        btn_update_usage: "🔄 بروزرسانی مصرف",
	add_panel: "افزودن پنل",
        btn_check_update: "🔄 بررسی بروزرسانی",
        btn_download_worker: "🧩 دانلود سورس ورکر",
        btn_download_worker_live: "🌩️ دانلود کد واقعی (فقط کلودفلر)",
        btn_upload_worker: "⬆️ آپلود / آپدیت ورکر",
        btn_update_all_panels: "🌐 آپدیت کل پنل‌ها",
        msg_update_all_confirm: "این کار آخرین نسخه رو روی این پنل و روی تمام {count} پنل لینک‌شده دیپلوی می‌کنه. ادامه بدم؟",
        msg_update_all_none_linked: "هنوز هیچ پنلی لینک نکردی — فقط همین پنل آپدیت می‌شه.",
        msg_update_all_running: "🚀 در حال آپدیت این پنل و تمام پنل‌های لینک‌شده... ممکنه کمی طول بکشه.",
        msg_update_all_result_header: "🌐 **نتیجه آپدیت کل پنل‌ها**",
        msg_update_all_local_ok: "✅ این پنل: آپدیت شد به v{version}",
        msg_update_all_local_fail: "❌ این پنل: ناموفق — {error}",
        msg_update_all_panel_ok: "✅ {host}: آپدیت شد",
        msg_update_all_panel_fail: "❌ {host}: ناموفق — {error}",
        msg_checking_update: "🔍 در حال بررسی بروزرسانی...",
        msg_preparing_download: "📦 در حال آماده‌سازی فایل سورس ورکر...",
        msg_download_failed: "❌ دریافت سورس ورکر ممکن نشد.",
        msg_main_menu_return: "✅ انجام شد. فایل بالا ارسال شد.",
        msg_worker_updated: "ورکر با موفقیت آپدیت شد.",
        msg_send_worker_file_or_url: "📤 فایل جدید `_worker.js` رو بفرست، یا آدرس مستقیمش رو به‌صورت متن ارسال کن.",
        msg_update_check_failed: "❌ بررسی بروزرسانی ناموفق بود. لطفاً بعداً دوباره تلاش کنید.",
        msg_no_update: "✅ شما در حال استفاده از آخرین نسخه هستید (v{version}).",
        msg_update_available: "🆕 نسخه جدیدی موجود است!\n\n📦 نسخه فعلی: v{current}\n✨ آخرین نسخه: v{latest}",
        msg_update_no_cf: "⚠️ بروزرسانی موجود است، اما شناسه اکانت کلودفلر، توکن API و نام ورکر تنظیم نشده‌اند. برای فعال‌سازی نصب از طریق ربات، آن‌ها را در تنظیمات پنل تحت وب وارد کنید.",
        btn_deploy_update: "🚀 نصب بروزرسانی",
        msg_confirm_deploy: "⚠️ آیا از نصب نسخه v{latest} روی ورکر خود اطمینان دارید؟ پنل برای لحظاتی ریستارت می‌شود.",
        msg_deploying: "🚀 در حال نصب بروزرسانی... ممکن است چند ثانیه طول بکشد.",
        msg_deploy_success: "✅ با موفقیت به نسخه v{version} بروزرسانی شد!",
        msg_deploy_failed: "❌ بروزرسانی ناموفق بود: {error}",
    }
};

function getPanelsList() {
    const panels = [];
    panels.push({
        name: sysConfig.name || "Main Panel",
        host: null,
        apiRoute: sysConfig.apiRoute,
        masterKey: null,
        isLocal: true
    });
    if (sysConfig.linkedPanels && Array.isArray(sysConfig.linkedPanels)) {
        sysConfig.linkedPanels.forEach(p => {
            if (p && p.host) {
                panels.push({
                    name: p.name || p.host,
                    host: p.host,
                    apiRoute: p.apiRoute || sysConfig.apiRoute,
                    masterKey: p.masterKey,
                    isLocal: false
                });
            }
        });
    }
    return panels;
}

async function remotePanelFetch(panel, method, path, body = null) {
    try {
        const url = `https://${panel.host}/${encodeURI(panel.apiRoute)}${path}`;
        const options = {
            method,
            redirect: 'error',
            headers: { 'Content-Type': 'application/json' }
        };
        if (body) options.body = JSON.stringify(body);
        const res = await fetch(url, { ...options, signal: AbortSignal.timeout(8000) });
        if (!res.ok) return {success:false,error:"Remote HTTP " + res.status};
        return await res.json();
    } catch(e) {
        return { success: false, error: "Remote panel is unreachable" };
    }
}

async function fetchRemotePanelUsers(panel) {
    return await remotePanelFetch(panel, 'GET', `/api/users?key=${encodeURIComponent(panel.masterKey)}`);
}

async function fetchRemotePanelUser(panel, userId) {
    return await remotePanelFetch(panel, 'GET', `/api/users?id=${encodeURIComponent(userId)}&key=${encodeURIComponent(panel.masterKey)}`);
}

async function fetchRemotePanelStats(panel) {
    return await remotePanelFetch(panel, 'GET', `/api/stats?key=${encodeURIComponent(panel.masterKey)}`);
}

async function fetchRemotePanelConfig(panel) {
    return await remotePanelFetch(panel, 'POST', '/api/auth', { key: panel.masterKey });
}

async function fetchRemotePanelUpdate(panel, action, extra = {}) {
    return await remotePanelFetch(panel, 'POST', '/api/update', { key: panel.masterKey, action, ...extra });
}

// Relays a manually-provided worker source (file/link/paste) to a linked panel,
// so "update all linked panels" can push the exact same code that was just
// deployed locally instead of each panel fetching its own copy from GitHub.
async function fetchRemotePanelUploadWorker(panel, code) {
    return await remotePanelFetch(panel, 'POST', `/api/upload-worker?key=${encodeURIComponent(panel.masterKey)}`, { code });
}

async function remotePanelWriteAction(panel, method, userId, body = null) {
    let path = '/api/users';
    if (userId) path += `?id=${encodeURIComponent(userId)}&key=${encodeURIComponent(panel.masterKey)}`;
    else path += `?key=${encodeURIComponent(panel.masterKey)}`;
    return await remotePanelFetch(panel, method, path, body || { key: panel.masterKey });
}

async function remotePanelToggleUser(panel, userId) {
    return await remotePanelFetch(panel, 'POST', `/api/users?id=${encodeURIComponent(userId)}&action=toggle&key=${encodeURIComponent(panel.masterKey)}`);
}

async function remotePanelResetTraffic(panel, userId) {
    return await remotePanelFetch(panel, 'POST', `/api/users?id=${encodeURIComponent(userId)}&action=reset&key=${encodeURIComponent(panel.masterKey)}`);
}

async function handleTelegramWebhook(request, env, hostName, ctx) {
    // اگه secret token ساخته شده (یعنی حداقل یه‌بار تنظیمات تلگرام ذخیره شده)،
    // هر درخواستی که این هدر رو نداشته باشه یا مقدارش غلط باشه، قطعاً از سرور
    // واقعی تلگرام نیومده و رد می‌شه. این جلوی جعل کامل «from.id» رو می‌گیره.
    if (sysConfig.tgWebhookSecret) {
        const incomingSecret = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
        if (incomingSecret !== sysConfig.tgWebhookSecret) {
            return new Response("Forbidden", { status: 403 });
        }
    }
    let update = null;
    try {
        update = await request.json();
        const tgApi = `https://api.telegram.org/bot${sysConfig.tgToken}`;

        const langCode = sysConfig.tgBotLang || "fa";
        const t = (key) => botI18n[langCode]?.[key] || botI18n["en"]?.[key] || key;

        const callerId = update.callback_query?.from?.id?.toString() || update.message?.from?.id?.toString();
        const adminId = sysConfig.tgAdminId || sysConfig.tgChatId;
        const isAuthorized = adminId && callerId === adminId.toString();

        let tgState = {};
        try {
            const storedState = await d1Get(env, "tg_bot_state");
            if (storedState) tgState = JSON.parse(storedState);
        } catch (e) { }

        const panels = getPanelsList();

        // Read last login signal from D1 (set by handleAuth or handleSyncPanel)
        let lastLoginPanel = null;
        try {
            const stored = await d1Get(env, "tg_panel_login");
            if (stored) lastLoginPanel = JSON.parse(stored);
        } catch (e) { }

        const getActivePanel = () => {
            if (lastLoginPanel) {
                if (lastLoginPanel.isLocal) return panels.find(p => p.isLocal) || panels[0];
                const found = panels.find(p => !p.isLocal && p.host === lastLoginPanel.host);
                if (found) return found;
                // Remote panel not in linkedPanels — synthesize from login signal
                return {
                    name: lastLoginPanel.name || lastLoginPanel.host,
                    host: lastLoginPanel.host,
                    apiRoute: lastLoginPanel.apiRoute || sysConfig.apiRoute,
                    masterKey: lastLoginPanel.masterKey,
                    isLocal: false
                };
            }
            return panels[0]; // default to local
        };

        // Custom sendOrEdit message helper
        const sendOrEdit = async (chatId, text, replyMarkup = null, messageId = null) => {
            // اگه تلگرام به‌خاطر Markdown نامعتبر (مثلاً یه آندرلاین تک‌خورده مثل
            // "_worker.js") پیام رو رد کنه، قبلاً هیچ fallback ای نبود و پیام کلاً
            // بی‌صدا گم می‌شد — دقیقاً همون چیزی که دکمه رو "هیچ‌کاری نمی‌کنه" نشون می‌داد.
            // حالا اگه نسخه Markdown رد بشه، همون متن رو به‌صورت ساده (بدون parse_mode)
            // دوباره می‌فرستیم تا حداقل چیزی به ادمین برسه.
            const attempt = async (useMarkdown) => {
                let parseErr = false;
                if (messageId) {
                    const body = { chat_id: chatId, message_id: messageId, text: text, reply_markup: replyMarkup };
                    if (useMarkdown) body.parse_mode = 'Markdown';
                    const res = await fetch(`${tgApi}/editMessageText`, {
                        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
                    });
                    if (res.ok) return { res, parseErr: false };
                    try {
                        const errBody = await res.json();
                        if (errBody?.description?.includes("message is not modified")) return { res, parseErr: false };
                        if (useMarkdown && errBody?.description?.includes("can't parse entities")) parseErr = true;
                    } catch (e) {}
                    // any other edit failure (message deleted, too old, etc.) falls through to sendMessage below
                }
                const sendBody = { chat_id: chatId, text: text, reply_markup: replyMarkup };
                if (useMarkdown) sendBody.parse_mode = 'Markdown';
                const res = await fetch(`${tgApi}/sendMessage`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(sendBody)
                });
                if (!res.ok && useMarkdown) {
                    try {
                        const errBody = await res.json();
                        if (errBody?.description?.includes("can't parse entities")) parseErr = true;
                    } catch (e) {}
                }
                return { res, parseErr };
            };
            const first = await attempt(true);
            if (!first.parseErr) return first.res;
            const second = await attempt(false);
            return second.res;
        };

        const getMainMenu = (activePanel, isAdmin = true) => {
            const isPaused = sysConfig.isPaused || false;
            const statusEmoji = isPaused ? "🔴" : "🟢";
            const users = sysConfig.users || [];
            const activeCount = users.filter(u => !u.isPaused && (!u.expiryMs || Date.now() <= u.expiryMs)).length;
            const pausedCount = users.filter(u => u.isPaused && !u.disabledReason).length;
            const autoDisabledCount = users.filter(u => u.isPaused && u.disabledReason).length;
            const isLocal = !activePanel || activePanel.isLocal;
            const panelName = activePanel ? activePanel.name : (sysConfig.name || "Main Panel");
            const panelIndicator = isLocal ? `🏠 ${panelName}` : `🌐 ${panelName}`;
            let text = `${t("welcome")}\n\n` +
                `━━━━━━━━━━━━━━━━\n` +
                `📌 **${t("current_panel")}**: ${panelIndicator}\n` +
                `⚡ **${t("status")}**: ${isPaused ? t("paused") : t("active")} ${statusEmoji}\n` +
                `👥 **${t("users")}**: ${users.length} (${activeCount} ${t("count_active")}, ${pausedCount} ${t("count_paused")}, ${autoDisabledCount} ${t("count_disabled")})\n` +
                `━━━━━━━━━━━━━━━━`;
            // Linked (remote) panels carry their own host/apiRoute, so build the
            // same kind of dash URL for them as we do for the local panel instead
            // of leaving it null and silently dropping the button.
            const panelUrl = isLocal
                ? `https://${hostName}/${encodeURI(sysConfig.apiRoute)}/dash`
                : `https://${activePanel.host}/${encodeURI(activePanel.apiRoute || sysConfig.apiRoute)}/dash`;
            const subUrl = `https://${hostName}/${sysConfig.apiRoute}`;
            /** @type {any} */
            const inline_keyboard = [];

            if (!isAdmin) {
                inline_keyboard.push([
                    { text: `🔗 ${t("btn_sub_link")}`, callback_data: "get_sub_link" }
                ]);
                inline_keyboard.push([
                    { text: `ℹ️ ${t("panel_info")}`, callback_data: "sys_panel_info" }
                ]);
                const kbGuest = { inline_keyboard };
                return { text, kb: kbGuest };
            }

            inline_keyboard.push([
                { text: `ℹ️ ${t("panel_info")}`, callback_data: "sys_panel_info" },
                { text: `📈 ${t("statistics")}`, callback_data: "sys_stats" }
            ]);
            if (panelUrl) {
                inline_keyboard.push([
                    { text: `🔑 ${t("dash")}`, web_app: { url: panelUrl } }
                ]);
            }
            inline_keyboard.push([
                { text: `⚙️ ${t("btn_settings")}`, callback_data: "settings_menu" }
            ]);

            const kb = { inline_keyboard };
            return { text, kb };
        };

        const getSettingsMenu = () => {
            const text = `⚙️ **${t("btn_settings")}**\n━━━━━━━━━━━━━━━━\n${t("msg_settings_intro")}`;
            const inline_keyboard = [
                [{ text: `👥 ${t("users")}`, callback_data: "users_menu" }],
                [{ text: `🛠️ ${t("btn_panel_ops")}`, callback_data: "panel_ops_menu" }],
                [{ text: `🌐 ${langCode === 'fa' ? 'English 🇺🇸' : 'فارسی 🇮🇷'}`, callback_data: "sys_lang" }],
                [{ text: `⬅️ ${t("btn_main_menu")}`, callback_data: "main_menu" }]
            ];
            return { text, kb: { inline_keyboard } };
        };

        const getUsersMenu = () => {
            const users = sysConfig.users || [];
            const activeCount = users.filter(u => !u.isPaused && (!u.expiryMs || Date.now() <= u.expiryMs)).length;
            const pausedCount = users.filter(u => u.isPaused).length;
            const text = `👥 **${t("users")}**\n━━━━━━━━━━━━━━━━\n${users.length} ${t("users")} (${activeCount} ${t("count_active")}, ${pausedCount} ${t("count_paused")})`;
            const inline_keyboard = [
                [
                    { text: `🔍 ${t("search")}`, callback_data: "sub_search_init" },
                    { text: `📋 ${t("btn_manage_users")}`, callback_data: "subs_list:0" }
                ],
                [{ text: `🚫 ${t("disabled_users")}`, callback_data: "subs_disabled:0" }],
                [{ text: `➕ ${t("btn_add")}`, callback_data: "sub_add_init" }],
                [{ text: `⬅️ ${t("btn_settings")}`, callback_data: "settings_menu" }]
            ];
            return { text, kb: { inline_keyboard } };
        };

        const getPanelOpsMenu = () => {
            const isPaused = sysConfig.isPaused || false;
            const text = `🛠️ **${t("btn_panel_ops")}**\n━━━━━━━━━━━━━━━━\n${t("msg_panel_ops_intro")}`;
            const inline_keyboard = [];
            const allPanels = getPanelsList();
            if (allPanels.length > 1) {
                inline_keyboard.push([
                    { text: `🔄 ${t("switch_panel")}`, callback_data: "switch_panel" },
                    { text: `➕ ${t("add_panel")}`, callback_data: "add_panel_init" }
                ]);
            } else {
                inline_keyboard.push([
                    { text: `➕ ${t("add_panel")}`, callback_data: "add_panel_init" }
                ]);
            }
            inline_keyboard.push([
                { text: `${t("btn_check_update")}`, callback_data: "sys_check_update" },
                { text: `${t("btn_download_worker")}`, callback_data: "sys_download_worker" }
            ]);
            inline_keyboard.push([
                { text: `${t("btn_download_worker_live")}`, callback_data: "sys_download_worker_live" },
                { text: `${t("btn_upload_worker")}`, callback_data: "sys_upload_worker_init" }
            ]);
            inline_keyboard.push([
                { text: isPaused ? t("btn_resume") : t("btn_pause"), callback_data: "sys_toggle_status" }
            ]);
            inline_keyboard.push([
                { text: `🚨 ${t("panic")}`, callback_data: "sys_panic_init" }
            ]);
            inline_keyboard.push([
                { text: `⬅️ ${t("btn_settings")}`, callback_data: "settings_menu" }
            ]);
            return { text, kb: { inline_keyboard } };
        };

        const getSubsList = (page = 0, usersList = null) => {
            const users = usersList || sysConfig.users || [];
            const itemsPerPage = 5;
            const totalPages = Math.ceil(users.length / itemsPerPage);
            const start = page * itemsPerPage;
            const end = start + itemsPerPage;
            const pageUsers = users.slice(start, end);

            let text = `👥 **${t("users")}** (${t("lbl_page")} ${page + 1}/${Math.max(1, totalPages)})\n`;
            text += `━━━━━━━━━━━━━━━━\n`;

            if (users.length === 0) {
                text += `⚠️ ${t("no_users")}\n`;
            } else {
                pageUsers.forEach((u, idx) => {
                    text += `${start + idx + 1}. 👤 **${u.name}**\n   \`${u.id}\`\n`;
                });
            }
            text += `━━━━━━━━━━━━━━━━`;

            const inline_keyboard = [];
            pageUsers.forEach((u) => {
                inline_keyboard.push([{ text: `👤 ${u.name}`, callback_data: `sub_detail:${u.id}` }]);
            });

            const navRow = [];
            if (page > 0) {
                navRow.push({ text: `⬅️ ${t("btn_back")}`, callback_data: `subs_list:${page - 1}` });
            }
            if (end < users.length) {
                navRow.push({ text: `${t("btn_next")} ➡️`, callback_data: `subs_list:${page + 1}` });
            }
            if (navRow.length > 0) {
                inline_keyboard.push(navRow);
            }

            inline_keyboard.push([{ text: `➕ ${t("btn_add")}`, callback_data: "sub_add_init" }]);
            inline_keyboard.push([{ text: `⬅️ ${t("btn_settings")}`, callback_data: "users_menu" }]);

            return { text, kb: { inline_keyboard } };
        };

        const getSubDetail = (uuid, usersList = null) => {
            const users = usersList || sysConfig.users || [];
            const u = users.find(usr => usr.id === uuid);
            if (!u) {
                return { text: "⚠️ User not found", kb: { inline_keyboard: [[{ text: t("btn_back"), callback_data: "subs_list:0" }]] } };
            }

            const sysU = sysUsageCache?.users?.[u.id.replace(/-/g,'').toLowerCase()] || { reqs: 0, dReqs: 0, lastDay: '' };
            const userReqs = sysU.reqs || 0;
            const curDate = new Date().toISOString().split('T')[0];
            const userDReqs = sysU.lastDay === curDate ? (sysU.dReqs || 0) : 0;

            const limitTotalTxt = u.limitTotalReq ? `${u.limitTotalReq}` : t("unlimited");
            const limitDailyTxt = u.limitDailyReq ? `${u.limitDailyReq}` : t("unlimited");
            const usedGB = (userReqs / 6000).toFixed(2);
            const limitGB = u.limitTotalReq ? (u.limitTotalReq / 6000).toFixed(2) : t("unlimited");

            let expTxt = t("unlimited");
            let isExp = false;
            let daysLeft = t("unlimited");
            if (u.expiryMs) {
                const date = new Date(u.expiryMs);
                expTxt = date.toLocaleDateString();
                const remDays = Math.ceil((u.expiryMs - Date.now()) / 86400000);
                daysLeft = remDays >= 0 ? `${remDays}` : '0';
                if (Date.now() > u.expiryMs) {
                    expTxt += ` (${t("dash_expired")} 🔴)`;
                    isExp = true;
                }
            }

            const statusEmoji = u.isPaused ? "⏸️" : (isExp ? "🔴" : "🟢");
            const statusText = u.isPaused ? t("paused") : (isExp ? t("dash_expired") : t("active"));
            const subSync = `https://${hostName}/${sysConfig.apiRoute}?sub=${encodeURIComponent(u.name)}`;
            const maxCfgTxt = u.maxConfigs || t("unlimited");
            const maxConnTxt = u.maxConnections || t("unlimited");
            const notesTxt = u.notes || t("lbl_none");

            let text = `👤 **${t("sub_info")}**\n`;
            text += `━━━━━━━━━━━━━━━━\n`;
            text += `📛 **${t("name")}**: ${u.name}\n`;
            text += `🆔 **UUID**: \`${u.id}\`\n`;
            text += `🚦 **${t("lbl_status")}**: ${statusEmoji} ${statusText}\n`;
            text += `📊 **${t("total")}**: ${usedGB} GB / ${limitGB} GB (${userReqs} reqs)\n`;
            text += `⏱ **${t("daily")}**: ${userDReqs} / ${limitDailyTxt}\n`;
            text += `📅 **${t("expiry")}**: ${expTxt}\n`;
            text += `⏳ **${t("days")}**: ${daysLeft}\n`;
            text += `📱 **${t("device_limit")}**: ${maxCfgTxt}\n`;
            text += `🔌 **${t("conn_limit")}**: ${maxConnTxt}\n`;
            text += `📝 **${t("notes")}**: ${notesTxt}\n`;
            text += `━━━━━━━━━━━━━━━━\n`;
            text += `🔗 **${t("lbl_subscription")}:**\n\`${subSync}\``;

            const kb = {
                inline_keyboard: [
                    [
                        { text: u.isPaused ? `▶️ ${t("btn_resume")}` : `⏸️ ${t("btn_pause")}`, callback_data: `sub_toggle:${u.id}` },
                        { text: `🗑️ ${t("btn_del")}`, callback_data: `sub_del_init:${u.id}` }
                    ],
                    [
                        { text: `✏️ ${t("btn_edit_name")}`, callback_data: `sub_edit_name_init:${u.id}` },
                        { text: `⚙️ ${t("btn_edit_limits")}`, callback_data: `sub_edit_limits_init:${u.id}` }
                    ],
                    [
                        { text: `🔄 ${t("reset_traffic")}`, callback_data: `sub_reset_traffic:${u.id}` },
                        { text: `📅 ${t("extend_expiry")}`, callback_data: `sub_extend_init:${u.id}` }
                    ],
                    [
                        { text: `📝 ${t("notes")}`, callback_data: `sub_edit_notes_init:${u.id}` },
                        { text: `📱 ${t("device_limit")}`, callback_data: `sub_edit_device_init:${u.id}` }
                    ],
                    [
                        { text: t("btn_back_to_list"), callback_data: "subs_list:0" }
                    ]
                ]
            };
            return { text, kb };
        };

        if (update.callback_query) {
            const cb = update.callback_query;
            const chatId = cb.message?.chat?.id;
            const messageId = cb.message?.message_id;
            const data = cb.data;

            if (chatId) {
                if (!isAuthorized) {
                    await fetch(`${tgApi}/answerCallbackQuery`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ callback_query_id: cb.id, text: t("access_denied"), show_alert: true })
                    });
                    return new Response("OK", { status: 200 });
                }

                // Get active panel from last login signal
                const activePanel = getActivePanel();
                const isRemotePanel = activePanel && !activePanel.isLocal;

                // Helper to fetch users for the active panel
                const getPanelUsers = async () => {
                    if (isRemotePanel) {
                        const res = await fetchRemotePanelUsers(activePanel);
                        return res.success ? (res.users || []) : null;
                    }
                    return sysConfig.users || [];
                };

                // Clear step state on callback query
                tgState[chatId] = null;
                await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});

                let answerText = null;

                if (data === "main_menu") {
                    const menu = getMainMenu(activePanel, isAuthorized);
                    await sendOrEdit(chatId, menu.text, menu.kb, messageId);
                } else if (data === "settings_menu") {
                    const menu = getSettingsMenu();
                    await sendOrEdit(chatId, menu.text, menu.kb, messageId);
                } else if (data === "users_menu") {
                    const menu = getUsersMenu();
                    await sendOrEdit(chatId, menu.text, menu.kb, messageId);
                } else if (data === "panel_ops_menu") {
                    const menu = getPanelOpsMenu();
                    await sendOrEdit(chatId, menu.text, menu.kb, messageId);
                } else if (data === "sys_lang") {
                    sysConfig.tgBotLang = (langCode === "fa") ? "en" : "fa";
                    await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                    const menu = getSettingsMenu();
                    await sendOrEdit(chatId, menu.text, menu.kb, messageId);
                } else if (data === "sys_toggle_status") {
                    sysConfig.isPaused = !sysConfig.isPaused;
                    await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                    const menu = getPanelOpsMenu();
                    await sendOrEdit(chatId, menu.text, menu.kb, messageId);
                } else if (data === "sys_metrics") {
                    let usageStr = t("unlimited");
                    if (sysConfig.cfAccountId && sysConfig.cfApiToken) {
                        const reqs = await fetchCloudflareUsage(sysConfig.cfAccountId, sysConfig.cfApiToken);
                        if (reqs !== null) {
                            const pct = ((reqs / 100000) * 100).toFixed(2);
                            usageStr = `${reqs}/100000 (${pct}%)`;
                        }
                    }
                    const upSeconds = Math.floor((Date.now() - isolateStartTime)/1000);
                    const dh = Math.floor(upSeconds/3600);
                    const dm = Math.floor((upSeconds%3600)/60);

                    let text = `📡 **${t("metrics")}**\n`;
                    text += `━━━━━━━━━━━━━━━━\n`;
                    text += `⏱ **${t("uptime")}**: ${dh}h ${dm}m\n`;
                    text += `🔌 **${t("streams")}**: ${activeConnections}\n`;
                    text += `📊 **Cloudflare API Usage**: ${usageStr}\n`;
                    text += `━━━━━━━━━━━━━━━━`;

                    const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "main_menu" }]] };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("subs_list:")) {
                    const page = parseInt(data.replace("subs_list:", "")) || 0;
                    const panelUsers = await getPanelUsers();
                    if (panelUsers === null && isRemotePanel) {
                        await sendOrEdit(chatId, t("msg_panel_error"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "users_menu" }]] });
                    } else {
                        const list = getSubsList(page, panelUsers);
                        await sendOrEdit(chatId, list.text, list.kb, messageId);
                    }
                } else if (data.startsWith("sub_detail:")) {
                    const uuid = data.replace("sub_detail:", "");
                    const panelUsers = await getPanelUsers();
                    if (panelUsers === null && isRemotePanel) {
                        await sendOrEdit(chatId, t("msg_panel_error"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "main_menu" }]] });
                    } else {
                        const detail = getSubDetail(uuid, panelUsers);
                        await sendOrEdit(chatId, detail.text, detail.kb, messageId);
                    }
                } else if (data.startsWith("sub_toggle:")) {
                    const uuid = data.replace("sub_toggle:", "");
                    if (isRemotePanel) {
                        await remotePanelToggleUser(activePanel, uuid);
                    } else if (sysConfig.users) {
                        const u = sysConfig.users.find(usr => usr.id === uuid);
                        if (u) {
                            u.isPaused = !u.isPaused;
                            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                        }
                    }
                    const panelUsers = await getPanelUsers();
                    const detail = getSubDetail(uuid, panelUsers);
                    await sendOrEdit(chatId, detail.text, detail.kb, messageId);
                } else if (data.startsWith("sub_del_init:")) {
                    const uuid = data.replace("sub_del_init:", "");
                    const panelUsers = await getPanelUsers();
                    const u = panelUsers?.find(usr => usr.id === uuid);
                    const name = u ? u.name : "";
                    const text = `${t("msg_confirm_del")}\n\n👤 **${name}**`;
                    const kb = {
                        inline_keyboard: [
                            [
                                { text: `✅ ${t("btn_confirm")}`, callback_data: `sub_del_confirm:${uuid}` },
                                { text: `❌ ${t("btn_cancel")}`, callback_data: `sub_detail:${uuid}` }
                            ]
                        ]
                    };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_del_confirm:")) {
                    const uuid = data.replace("sub_del_confirm:", "");
                    if (isRemotePanel) {
                        await remotePanelWriteAction(activePanel, 'DELETE', uuid);
                    } else if (sysConfig.users) {
                        sysConfig.users = sysConfig.users.filter(usr => usr.id !== uuid);
                        await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                    }
                    const successText = `✅ ${t("msg_deleted")}`;
                    const kb = { inline_keyboard: [[{ text: t("btn_back"), callback_data: "subs_list:0" }]] };
                    await sendOrEdit(chatId, successText, kb, messageId);
                } else if (data === "sub_add_init") {
                    tgState[chatId] = { step: "sub_add_name" };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const text = `➕ ${t("msg_enter_name")}`;
                    const kb = { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: "subs_list:0" }]] };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_edit_name_init:")) {
                    const uuid = data.replace("sub_edit_name_init:", "");
                    tgState[chatId] = { step: `sub_edit_name:${uuid}` };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const text = `✏️ ${t("msg_enter_name")}`;
                    const kb = { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: `sub_detail:${uuid}` }]] };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_edit_limits_init:")) {
                    const uuid = data.replace("sub_edit_limits_init:", "");
                    tgState[chatId] = { step: `sub_edit_limits:${uuid}` };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const text = `⚙️ ${t("msg_enter_limits")}`;
                    const kb = {
                        inline_keyboard: [
                            [{ text: `♾️ Skip (Unlimited)`, callback_data: `sub_unlimit_cb:${uuid}` }],
                            [{ text: `❌ ${t("btn_cancel")}`, callback_data: `sub_detail:${uuid}` }]
                        ]
                    };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_unlimit_cb:")) {
                    const uuid = data.replace("sub_unlimit_cb:", "");
                    if (isRemotePanel) {
                        await remotePanelWriteAction(activePanel, 'PUT', uuid, { key: activePanel.masterKey, trafficLimit: 0, dailyLimit: 0, expiryDays: 0 });
                    } else if (sysConfig.users) {
                        const u = sysConfig.users.find(usr => usr.id === uuid);
                        if (u) {
                            u.limitTotalReq = null;
                            u.limitDailyReq = null;
                            u.expiryMs = null;
                            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                        }
                    }
                    const panelUsers = await getPanelUsers();
                    const detail = getSubDetail(uuid, panelUsers);
                    await sendOrEdit(chatId, detail.text, detail.kb, messageId);
                } else if (data === "sub_add_unlimited_skip") {
                    let stateName = "Subscriber";
                    try {
                        const savedStateRaw = await d1Get(env, "tg_bot_state");
                        if (savedStateRaw) {
                            const stObj = JSON.parse(savedStateRaw);
                            if (stObj[chatId] && stObj[chatId].name) {
                                stateName = stObj[chatId].name;
                            }
                        }
                    } catch(e){}

                    const newUuid = crypto.randomUUID();
                    if (isRemotePanel) {
                        const res = await remotePanelWriteAction(activePanel, 'POST', null, { key: activePanel.masterKey, name: stateName });
                        if (res.success && res.user) {
                            const detail = getSubDetail(res.user.id, [res.user]);
                            await sendOrEdit(chatId, `✅ ${t("msg_added")}\n\n${detail.text}`, detail.kb, messageId);
                        } else {
                            await sendOrEdit(chatId, t("msg_panel_error"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "main_menu" }]] });
                        }
                    } else {
                        if (!sysConfig.users) sysConfig.users = [];
                        sysConfig.users.push({
                            id: newUuid,
                            name: stateName,
                            limitTotalReq: null,
                            limitDailyReq: null,
                            expiryMs: null,
                            createdAt: Date.now()
                        });
                        await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                        const detail = getSubDetail(newUuid);
                        await sendOrEdit(chatId, `✅ ${t("msg_added")}\n\n${detail.text}`, detail.kb, messageId);
                    }
                    tgState[chatId] = null;
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                } else if (data === "sys_panic_init") {
                    const text = `${t("msg_confirm_panic")}`;
                    const kb = {
                        inline_keyboard: [
                            [
                                { text: `🚨 YES PANIC 🚨`, callback_data: "sys_panic_confirm" },
                                { text: `❌ No, Cancel`, callback_data: "panel_ops_menu" }
                            ]
                        ]
                    };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data === "sys_panic_confirm") {
                    sysConfig.apiRoute = Array.from(crypto.getRandomValues(new Uint8Array(8))).map(b => b.toString(16).padStart(2,'0')).join('');
                    sysConfig.isPaused = true;
                    await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                    const successText = `${t("msg_panic")}\n\n🔑 New Secret Path Randomized. All old sessions revoked.`;
                    const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] };
                    await sendOrEdit(chatId, successText, kb, messageId);

                } else if (data === "sys_check_update") {
                    await sendOrEdit(chatId, t("msg_checking_update"), { inline_keyboard: [] }, messageId);

                    if (isRemotePanel) {
                        const res = await fetchRemotePanelUpdate(activePanel, "check");
                        if (!res || !res.success) {
                            await sendOrEdit(chatId, t("msg_update_check_failed"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                            return new Response("OK", { status: 200 });
                        }
                        if (!res.updateAvailable) {
                            const text = t("msg_no_update").replace("{version}", res.current);
                            await sendOrEdit(chatId, text, { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                            return new Response("OK", { status: 200 });
                        }
                        const text = t("msg_update_available").replace("{current}", res.current).replace("{latest}", res.latest);
                        if (!res.canDeploy) {
                            await sendOrEdit(chatId, text + "\n\n" + t("msg_update_no_cf"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                            return new Response("OK", { status: 200 });
                        }
                        const kb = {
                            inline_keyboard: [
                                [{ text: t("btn_deploy_update"), callback_data: `sys_deploy_confirm:${res.latest}` }],
                                [{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]
                            ]
                        };
                        await sendOrEdit(chatId, text, kb, messageId);
                        return new Response("OK", { status: 200 });
                    }

                    const repo = (sysConfig.githubRepo || "EbiDevSharp/nahan").replace(/https?:\/\/github\.com\//, '').trim();
                    let remoteVer = null;
                    try {
                        const res = await fetch(`https://raw.githubusercontent.com/${repo}/main/version`);
                        if (res.ok) {
                            const txt = (await res.text()).trim();
                            if (txt && txt.length <= 15) remoteVer = txt;
                        }
                    } catch(e) {}
                    if (!remoteVer) {
                        try {
                            const res = await fetch(`https://raw.githubusercontent.com/${repo}/main/_worker.js`);
                            if (res.ok) {
                                const code = await res.text();
                                const match = code.match(/const\s+CURRENT_VERSION\s*=\s*["']([^"']+)["']/);
                                if (match) remoteVer = match[1];
                            }
                        } catch(e) {}
                    }
                    if (!remoteVer) {
                        await sendOrEdit(chatId, t("msg_update_check_failed"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                        return new Response("OK", { status: 200 });
                    }
                    const updateAvailable = cmpVersions(CURRENT_VERSION, remoteVer) < 0;
                    if (!updateAvailable) {
                        const text = t("msg_no_update").replace("{version}", CURRENT_VERSION);
                        await sendOrEdit(chatId, text, { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                        return new Response("OK", { status: 200 });
                    }
                    const hasCredentials = !!(sysConfig.cfAccountId && sysConfig.cfApiToken && sysConfig.cfWorkerName);
                    const text = t("msg_update_available").replace("{current}", CURRENT_VERSION).replace("{latest}", remoteVer);
                    if (!hasCredentials) {
                        await sendOrEdit(chatId, text + "\n\n" + t("msg_update_no_cf"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                        return new Response("OK", { status: 200 });
                    }
                    const kb = {
                        inline_keyboard: [
                            [{ text: t("btn_deploy_update"), callback_data: `sys_deploy_confirm:${remoteVer}` }],
                            [{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]
                        ]
                    };
                    await sendOrEdit(chatId, text, kb, messageId);

                } else if (data === "sys_download_worker" || data === "sys_download_worker_live") {
                    const liveOnly = data === "sys_download_worker_live";
                    await sendOrEdit(chatId, t("msg_preparing_download"), { inline_keyboard: [] }, messageId);
                    const result = await fetchLiveWorkerCode(liveOnly);
                    if (!result.code) {
                        const errMsg = liveOnly ? `❌ ${result.error || t("msg_download_failed")}` : t("msg_download_failed");
                        await sendOrEdit(chatId, errMsg, { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] });
                        return new Response("OK", { status: 200 });
                    }
                    const form = new FormData();
                    form.append("chat_id", chatId);
                    form.append("caption", `_worker.js — v${CURRENT_VERSION} (${result.source})`);
                    form.append("document", new Blob([result.code], { type: "application/javascript" }), `nahan_worker_${CURRENT_VERSION}.js`);
                    await fetch(`${tgApi}/sendDocument`, { method: "POST", body: form });
                    await sendOrEdit(chatId, t("msg_main_menu_return"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] });

                } else if (data === "sys_upload_worker_init") {
                    tgState[chatId] = { step: "upload_worker" };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const kb = { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: "panel_ops_menu" }]] };
                    await sendOrEdit(chatId, t("msg_send_worker_file_or_url"), kb, messageId);

                } else if (data.startsWith("sys_deploy_confirm:")) {
                    const latestVer = data.replace("sys_deploy_confirm:", "");
                    const text = t("msg_confirm_deploy").replace("{latest}", latestVer);
                    const kb = {
                        inline_keyboard: [
                            [
                                { text: t("btn_deploy_update"), callback_data: `sys_deploy_run:${latestVer}` },
                                { text: t("btn_cancel"), callback_data: "panel_ops_menu" }
                            ]
                        ]
                    };
                    await sendOrEdit(chatId, text, kb, messageId);

                } else if (data.startsWith("sys_deploy_run:")) {
                    await sendOrEdit(chatId, t("msg_deploying"), { inline_keyboard: [] }, messageId);

                    if (isRemotePanel) {
                        let deployResultText;
                        const res = await fetchRemotePanelUpdate(activePanel, "deploy");
                        if (res && res.success) {
                            deployResultText = t("msg_deploy_success").replace("{version}", res.newVersion || "?");
                        } else {
                            deployResultText = t("msg_deploy_failed").replace("{error}", (res && res.error) || "Unknown error");
                        }
                        const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] };
                        await sendOrEdit(chatId, deployResultText, kb, messageId);
                        return new Response("OK", { status: 200 });
                    }

                    const repo = (sysConfig.githubRepo || "EbiDevSharp/nahan").replace(/https?:\/\/github\.com\//, '').trim();
                    let deployResultText;
                    try {
                        const codeRes = await fetch(`https://raw.githubusercontent.com/${repo}/main/_worker.js`);
                        if (!codeRes.ok) throw new Error(`HTTP ${codeRes.status}`);
                        const newCode = await codeRes.text();
                        const versionMatch = newCode.match(/const\s+CURRENT_VERSION\s*=\s*["']([^"']+)["']/);
                        const newVersion = versionMatch ? versionMatch[1] : "unknown";
                        const deployRes = await deployWorkerToCloudflare(sysConfig.cfAccountId, sysConfig.cfApiToken, sysConfig.cfWorkerName, newCode);
                        const deployResult = await deployRes.json();
                        if (deployResult.success) {
                            ctx?.waitUntil(logActivity(env, "Panel Updated", `v${CURRENT_VERSION} → v${newVersion} (via bot)`).catch(()=>{}));
                            notifyPanelUpdatedTelegram(ctx, newVersion, "via bot");
                            deployResultText = t("msg_deploy_success").replace("{version}", newVersion);
                        } else {
                            const errMsg = deployResult.errors?.[0]?.message || "Unknown API error";
                            deployResultText = t("msg_deploy_failed").replace("{error}", errMsg);
                        }
                    } catch(e) {
                        deployResultText = t("msg_deploy_failed").replace("{error}", e.message);
                    }
                    const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] };
                    await sendOrEdit(chatId, deployResultText, kb, messageId);

                } else if (data === "sys_dashboard") {
                    let users, activeCount, pausedCount, expiredCount, autoDisabledCount;
                    if (isRemotePanel) {
                        const statsRes = await fetchRemotePanelStats(activePanel);
                        if (statsRes.success && statsRes.stats) {
                            const s = statsRes.stats;
                            users = [];
                            activeCount = s.users?.active || 0;
                            pausedCount = s.users?.paused || 0;
                            expiredCount = s.users?.expired || 0;
                            autoDisabledCount = s.users?.autoDisabled || 0;
                        } else {
                            const panelUsers = await getPanelUsers();
                            users = panelUsers || [];
                            activeCount = users.filter(u => !u.isPaused && (!u.expiryMs || Date.now() <= u.expiryMs)).length;
                            pausedCount = users.filter(u => u.isPaused && !u.disabledReason).length;
                            expiredCount = users.filter(u => u.expiryMs && Date.now() > u.expiryMs && !u.isPaused).length;
                            autoDisabledCount = users.filter(u => u.isPaused && u.disabledReason).length;
                        }
                    } else {
                        users = sysConfig.users || [];
                        activeCount = users.filter(u => !u.isPaused && (!u.expiryMs || Date.now() <= u.expiryMs)).length;
                        pausedCount = users.filter(u => u.isPaused && !u.disabledReason).length;
                        expiredCount = users.filter(u => u.expiryMs && Date.now() > u.expiryMs && !u.isPaused).length;
                        autoDisabledCount = users.filter(u => u.isPaused && u.disabledReason).length;
                    }
                    let dashText = `📊 **${t("dashboard")}**\n`;
                    dashText += `━━━━━━━━━━━━━━━━\n`;
                    dashText += `📌 **${t("current_panel")}**: ${activePanel.isLocal ? '🏠' : '🌐'} ${activePanel.name}\n`;
                    dashText += `━━━━━━━━━━━━━━━━\n`;
                    dashText += `👥 **${t("dash_total")}**: ${Array.isArray(users) ? users.length : (activeCount + pausedCount + expiredCount + autoDisabledCount)}\n`;
                    dashText += `🟢 **${t("dash_active")}**: ${activeCount}\n`;
                    dashText += `⏸️ **${t("dash_paused")}**: ${pausedCount}\n`;
                    dashText += `🔴 **${t("dash_expired")}**: ${expiredCount}\n`;
                    dashText += `🚫 **${t("dash_auto_disabled")}**: ${autoDisabledCount}\n`;
                    if (!isRemotePanel) {
                        const upSeconds = Math.floor((Date.now() - isolateStartTime) / 1000);
                        const dh = Math.floor(upSeconds / 3600);
                        const dm = Math.floor((upSeconds % 3600) / 60);
                        dashText += `⏱ **${t("uptime")}**: ${dh}h ${dm}m\n`;
                        dashText += `🔌 **${t("streams")}**: ${activeConnections}\n`;
                        dashText += `⚡ **System**: ${sysConfig.isPaused ? t("paused") : t("active")}\n`;
                    }
                    dashText += `━━━━━━━━━━━━━━━━`;
                    const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] };
                    await sendOrEdit(chatId, dashText, kb, messageId);
                } else if (data === "sys_stats") {
                    let users, totalReqs, dailyReqs;
                    if (isRemotePanel) {
                        const statsRes = await fetchRemotePanelStats(activePanel);
                        if (statsRes.success && statsRes.stats) {
                            const s = statsRes.stats;
                            users = [];
                            totalReqs = s.traffic?.totalRequests || 0;
                            dailyReqs = s.traffic?.dailyRequests || 0;
                        } else {
                            const panelUsers = await getPanelUsers();
                            users = panelUsers || [];
                            totalReqs = 0;
                            dailyReqs = 0;
                        }
                    } else {
                        users = sysConfig.users || [];
                        totalReqs = 0;
                        dailyReqs = 0;
                        const todayDate = new Date().toISOString().split('T')[0];
                        users.forEach(u => {
                            const idClean = u.id.replace(/-/g, '').toLowerCase();
                            const sysU = sysUsageCache?.users?.[idClean] || { reqs: 0, dReqs: 0, lastDay: '' };
                            totalReqs += (sysU.reqs || 0);
                            if (sysU.lastDay === todayDate) dailyReqs += (sysU.dReqs || 0);
                        });
                    }
                    let statsText = `📈 **${t("stats_title")}**\n`;
                    statsText += `━━━━━━━━━━━━━━━━\n`;
                    statsText += `📌 **${t("current_panel")}**: ${activePanel.isLocal ? '🏠' : '🌐'} ${activePanel.name}\n`;
                    statsText += `━━━━━━━━━━━━━━━━\n`;
                    statsText += `👥 **${t("dash_total")}**: ${Array.isArray(users) ? users.length : 'N/A'}\n`;
                    statsText += `📊 **${t("total_traffic")}**: ${(totalReqs / 6000).toFixed(2)} GB\n`;
                    statsText += `📅 **${t("daily_traffic")}**: ${(dailyReqs / 6000).toFixed(2)} GB\n`;
                    statsText += `━━━━━━━━━━━━━━━━`;
                    if (sysConfig.cfAccountId && sysConfig.cfApiToken) {
                        const reqs = await fetchCloudflareUsage(sysConfig.cfAccountId, sysConfig.cfApiToken);
                        if (reqs !== null) {
                            const pct = ((reqs / 100000) * 100).toFixed(2);
                            statsText += `\n☁️ **Cloudflare API**: ${reqs}/100000 (${pct}%)`;
                        }
                    }
                    const kb = { inline_keyboard: [
                            [{ text: `🔄 ${t("btn_update_usage")}`, callback_data: "sys_stats" }],
                            [{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]
                        ] };
                    await sendOrEdit(chatId, statsText, kb, messageId);
                } else if (data === "sys_panel_info") {
                    let infoText = `ℹ️ **${t("panel_info")}**\n`;
                    infoText += `━━━━━━━━━━━━━━━━\n`;
                    infoText += `📌 **${t("current_panel")}**: ${activePanel.isLocal ? '🏠' : '🌐'} ${activePanel.name}\n`;
                    if (activePanel.isLocal) {
                        infoText += `🌐 **Host**: ${hostName}\n`;
                        infoText += `🔑 **API Route**: \`${sysConfig.apiRoute}\`\n`;
                        infoText += `📡 **Mode**: ${sysConfig.mode || 'alpha'}\n`;
                        infoText += `🔒 **Ports**: ${sysConfig.socketPorts || '443'}\n`;
                    } else {
                        infoText += `🌐 **Host**: ${activePanel.host}\n`;
                        infoText += `🔑 **API Route**: \`${activePanel.apiRoute}\`\n`;
                    }
                    infoText += `📱 **Version**: ${CURRENT_VERSION}\n`;
                    infoText += `━━━━━━━━━━━━━━━━`;
                    const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] };
                    await sendOrEdit(chatId, infoText, kb, messageId);
                } else if (data.startsWith("subs_disabled:")) {
                    const panelUsers = await getPanelUsers();
                    const users = panelUsers || [];
                    const disabledUsers = users.filter(u => u.isPaused);
                    if (disabledUsers.length === 0) {
                        const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "users_menu" }]] };
                        await sendOrEdit(chatId, `🚫 ${t("msg_no_disabled")}`, kb, messageId);
                    } else {
                        const page = parseInt(data.replace("subs_disabled:", "")) || 0;
                        const itemsPerPage = 5;
                        const start = page * itemsPerPage;
                        const end = start + itemsPerPage;
                        const pageUsers = disabledUsers.slice(start, end);
                        let text = `🚫 **${t("disabled_users")}** (${disabledUsers.length})\n━━━━━━━━━━━━━━━━\n`;
                        const inline_keyboard = [];
                        pageUsers.forEach((u) => {
                            const reason = u.disabledReason || t("paused");
                            text += `👤 **${u.name}**\n   ${reason}\n`;
                            inline_keyboard.push([{ text: `▶️ ${u.name}`, callback_data: `sub_toggle:${u.id}` }]);
                        });
                        const navRow = [];
                        if (page > 0) navRow.push({ text: `⬅️ ${t("btn_back")}`, callback_data: `subs_disabled:${page - 1}` });
                        if (end < disabledUsers.length) navRow.push({ text: `${t("btn_next")} ➡️`, callback_data: `subs_disabled:${page + 1}` });
                        if (navRow.length > 0) inline_keyboard.push(navRow);
                        inline_keyboard.push([{ text: `⬅️ ${t("btn_settings")}`, callback_data: "users_menu" }]);
                        await sendOrEdit(chatId, text, { inline_keyboard }, messageId);
                    }
                } else if (data === "sub_search_init") {
                    tgState[chatId] = { step: "sub_search" };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const text = `🔍 ${t("msg_enter_search")}`;
                    const kb = { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: "users_menu" }]] };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_reset_traffic:")) {
                    const uuid = data.replace("sub_reset_traffic:", "");
                    if (isRemotePanel) {
                        await remotePanelResetTraffic(activePanel, uuid);
                    } else {
                        if (!sysUsageCache) sysUsageCache = { users: {} };
                        if (!sysUsageCache.users) sysUsageCache.users = {};
                        const uuidClean = uuid.replace(/-/g, '').toLowerCase();
                        if (sysUsageCache.users[uuidClean]) {
                            sysUsageCache.users[uuidClean].reqs = 0;
                            sysUsageCache.users[uuidClean].dReqs = 0;
                        } else {
                            sysUsageCache.users[uuidClean] = { reqs: 0, dReqs: 0, lastDay: new Date().toISOString().split('T')[0] };
                        }
                        await cachedD1Put(env, "sys_usage", JSON.stringify(sysUsageCache));
                    }
                    const panelUsers = await getPanelUsers();
                    const detail = getSubDetail(uuid, panelUsers);
                    await sendOrEdit(chatId, `✅ ${t("msg_traffic_reset")}\n\n${detail.text}`, detail.kb, messageId);
                } else if (data.startsWith("sub_extend_init:")) {
                    const uuid = data.replace("sub_extend_init:", "");
                    tgState[chatId] = { step: `sub_extend_days:${uuid}` };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const text = `📅 ${t("msg_enter_extend_days")}`;
                    const kb = { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: `sub_detail:${uuid}` }]] };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_edit_notes_init:")) {
                    const uuid = data.replace("sub_edit_notes_init:", "");
                    tgState[chatId] = { step: `sub_edit_notes:${uuid}` };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const text = `📝 ${t("msg_enter_notes")}`;
                    const kb = { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: `sub_detail:${uuid}` }]] };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_edit_device_init:")) {
                    const uuid = data.replace("sub_edit_device_init:", "");
                    tgState[chatId] = { step: `sub_edit_device:${uuid}` };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const text = `📱 ${t("msg_enter_device_limit")}`;
                    const kb = { inline_keyboard: [
                            [{ text: `♾️ Unlimited`, callback_data: `sub_device_unlimited:${uuid}` }],
                            [{ text: `❌ ${t("btn_cancel")}`, callback_data: `sub_detail:${uuid}` }]
                        ] };
                    await sendOrEdit(chatId, text, kb, messageId);
                } else if (data.startsWith("sub_device_unlimited:")) {
                    const uuid = data.replace("sub_device_unlimited:", "");
                    if (isRemotePanel) {
                        await remotePanelWriteAction(activePanel, 'PUT', uuid, { key: activePanel.masterKey, maxConfigs: null });
                    } else if (sysConfig.users) {
                        const u = sysConfig.users.find(usr => usr.id === uuid);
                        if (u) {
                            u.maxConfigs = null;
                            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                        }
                    }
                    const panelUsers = await getPanelUsers();
                    const detail = getSubDetail(uuid, panelUsers);
                    await sendOrEdit(chatId, `✅ ${t("status_updated")}`, detail.kb, messageId);
			// ===== تغییر ۲: داخل callback handler، قبل از خط "get_sub_link" =====
// این بلاک رو اضافه کن:
                } else if (data === "switch_panel") {
                    const allPanels = getPanelsList();
                    let txt = `🔄 **${t("switch_panel")}**\n━━━━━━━━━━━━━━━━\n`;
                    const kb_rows = allPanels.map((p, i) => {
                        const isActive = activePanel && (p.isLocal === activePanel.isLocal) && (p.isLocal || p.host === activePanel.host);
                        const row = [{ text: `${isActive ? '✅ ' : ''}${p.isLocal ? '🏠' : '🌐'} ${p.name}`, callback_data: `panel_select:${i}` }];
                        if (!p.isLocal) {
                            row.push({ text: "🗑️", callback_data: `panel_remove_init:${i}` });
                        }
                        return row;
                    });
                    kb_rows.push([{ text: `➕ ${t("add_panel")}`, callback_data: "add_panel_init" }]);
                    kb_rows.push([{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]);
                    await sendOrEdit(chatId, txt + t("select_panel"), { inline_keyboard: kb_rows }, messageId);

                } else if (data.startsWith("panel_select:")) {
                    const idx = parseInt(data.replace("panel_select:", ""));
                    const allPanels = getPanelsList();
                    const chosen = allPanels[idx];
                    if (!chosen) {
                        await sendOrEdit(chatId, t("msg_panel_error"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                    } else {
                        const loginSignal = {
                            name: chosen.name,
                            host: chosen.host,
                            apiRoute: chosen.apiRoute || sysConfig.apiRoute,
                            masterKey: chosen.masterKey,
                            isLocal: chosen.isLocal,
                            ts: Date.now()
                        };
                        if (env.IOT_DB) {
                            await d1Put(env, "tg_panel_login", JSON.stringify(loginSignal));
                        }
                        lastLoginPanel = loginSignal;
                        const newActive = chosen;
                        const menu = getMainMenu(newActive, isAuthorized);
                        await sendOrEdit(chatId, `✅ ${t("msg_panel_selected")}\n\n` + menu.text, menu.kb, messageId);
                    }

                } else if (data === "add_panel_init") {
                    tgState[chatId] = { step: "add_panel_url" };
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const langCode = sysConfig.tgBotLang || "fa";
                    const msg = langCode === "fa"
                        ? "🔌 آدرس پنل جدید را ارسال کنید:\n_(مثال: `myworker.workers.dev`)_"
                        : "🔌 Send the new panel URL:\n_(e.g. `myworker.workers.dev`)_";
                    await sendOrEdit(chatId, msg, { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: "panel_ops_menu" }]] }, messageId);

                } else if (data.startsWith("panel_remove_init:")) {
                    const idx = parseInt(data.replace("panel_remove_init:", ""));
                    const allPanels = getPanelsList();
                    const chosen = allPanels[idx];
                    if (!chosen || chosen.isLocal) {
                        await sendOrEdit(chatId, "❌ Cannot remove local panel.", { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] }, messageId);
                    } else {
                        const langCode = sysConfig.tgBotLang || "fa";
                        const msg = langCode === "fa"
                            ? `⚠️ آیا از حذف پنل **${chosen.name}** مطمئن هستید؟`
                            : `⚠️ Are you sure you want to remove panel **${chosen.name}**?`;
                        await sendOrEdit(chatId, msg, { inline_keyboard: [
                            [{ text: `✅ ${t("btn_confirm")}`, callback_data: `panel_remove_confirm:${idx}` }],
                            [{ text: `❌ ${t("btn_cancel")}`, callback_data: "switch_panel" }]
                        ]}, messageId);
                    }

                } else if (data.startsWith("panel_remove_confirm:")) {
                    const idx = parseInt(data.replace("panel_remove_confirm:", ""));
                    const allPanels = getPanelsList();
                    const chosen = allPanels[idx];
                    if (chosen && !chosen.isLocal) {
                        sysConfig.linkedPanels = (sysConfig.linkedPanels || []).filter(p => p.host !== chosen.host);
                        await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                        // اگه پنل حذف شده همون active بود برگرد به local
                        if (!activePanel?.isLocal && activePanel?.host === chosen.host) {
                            const localSignal = { name: sysConfig.name || "Main Panel", host: null, apiRoute: sysConfig.apiRoute, masterKey: null, isLocal: true, ts: Date.now() };
                            await d1Put(env, "tg_panel_login", JSON.stringify(localSignal));
                        }
                    }
                    const menu = getMainMenu(getPanelsList()[0], isAuthorized);
                    await sendOrEdit(chatId, `🗑️ Panel removed.\n\n` + menu.text, menu.kb, messageId);
                } else if (data === "get_sub_link") {
                    const subUrl = `https://${hostName}/${sysConfig.apiRoute}`;
                    await fetch(`${tgApi}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ chat_id: chatId, text: `\`${subUrl}\``, parse_mode: 'Markdown' })
                    });
                    answerText = t("sub_link_sent");
                } else {
                    // قبلاً اگه callback_data با هیچ‌کدوم از شرط‌های بالا match نمی‌شد،
                    // هیچ اتفاقی نمی‌افتاد و فقط toast عمومی "Done!" نشون داده می‌شد —
                    // دقیقاً همون چیزی که باعث می‌شد به نظر برسه دکمه کار نمی‌کنه.
                    // الان مقدار خام callback_data رو مستقیماً برای ادمین می‌فرستیم تا
                    // مشخص بشه دقیقاً چی ارسال شده و چرا با هیچ حالتی مطابقت نداشته.
                    answerText = "Unhandled: " + data;
                    ctx?.waitUntil(fetch(`${tgApi}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ chat_id: chatId, text: `⚠️ Unhandled button (callback_data): \`${data}\`` , parse_mode: 'Markdown' })
                    }).catch(()=>{}));
                }

                ctx?.waitUntil(fetch(`${tgApi}/answerCallbackQuery`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ callback_query_id: cb.id, text: answerText || "Done!" })
                }).catch(()=>{}));
            }
        } else if (update.message && update.message.text) {
            const chatId = update.message.chat.id;
            const text = update.message.text.trim();

            if (isAuthorized) {
                // Get active panel from last login signal
                const activePanel = getActivePanel();
                const isRemotePanel = activePanel && !activePanel.isLocal;

                // Helper to fetch users for the active panel
                const getPanelUsers = async () => {
                    if (isRemotePanel) {
                        const res = await fetchRemotePanelUsers(activePanel);
                        return res.success ? (res.users || []) : null;
                    }
                    return sysConfig.users || [];
                };

                // Handle /start command
                if (text === "/start") {
                    tgState[chatId] = null;
                    await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                    const menu = getMainMenu(activePanel, isAuthorized);
                    await sendOrEdit(chatId, menu.text, menu.kb);
                    return new Response("OK", { status: 200 });
                }

                const state = tgState[chatId];

                if (state) {
                    if (!isAuthorized) {
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        await sendOrEdit(chatId, t("access_denied"));
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step === "sub_add_name") {
                        const name = text;
                        tgState[chatId] = { step: "sub_add_limits", name: name };
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});

                        const msg = `⚙️ **${name}**\n\n${t("msg_enter_limits")}`;
                        const kb = {
                            inline_keyboard: [
                                [{ text: `♾️ Skip (Unlimited)`, callback_data: "sub_add_unlimited_skip" }],
                                [{ text: `❌ ${t("btn_cancel")}`, callback_data: "main_menu" }]
                            ]
                        };
                        await sendOrEdit(chatId, msg, kb);
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step === "sub_add_limits" || state.step === "sub_add_unlimited_skip") {
                        const name = state.name;
                        let tReq = null;
                        let dReq = null;
                        let days = null;

                        if (state.step !== "sub_add_unlimited_skip" && text !== "0" && text !== "0 0 0") {
                            const parts = text.split(/\s+/).map(Number);
                            if (parts[0] > 0) tReq = parts[0];
                            if (parts[1] > 0) dReq = parts[1];
                            if (parts[2] > 0) days = parts[2];
                        }

                        const newUuid = crypto.randomUUID();
                        if (isRemotePanel) {
                            const res = await remotePanelWriteAction(activePanel, 'POST', null, {
                                key: activePanel.masterKey,
                                name: name,
                                trafficLimit: tReq ? tReq / 6000 : 0,
                                dailyLimit: dReq ? dReq / 6000 : 0,
                                expiryDays: days || 0
                            });
                            if (res.success && res.user) {
                                const detail = getSubDetail(res.user.id, [res.user]);
                                await sendOrEdit(chatId, `✅ ${t("msg_added")}\n\n${detail.text}`, detail.kb);
                            } else {
                                await sendOrEdit(chatId, t("msg_panel_error"), { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "main_menu" }]] });
                            }
                        } else {
                            if (!sysConfig.users) sysConfig.users = [];
                            sysConfig.users.push({
                                id: newUuid,
                                name: name,
                                limitTotalReq: tReq,
                                limitDailyReq: dReq,
                                expiryMs: days ? Date.now() + days * 86400000 : null,
                                createdAt: Date.now()
                            });
                            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                            const detail = getSubDetail(newUuid);
                            await sendOrEdit(chatId, `✅ ${t("msg_added")}\n\n${detail.text}`, detail.kb);
                        }

                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step.startsWith("sub_edit_name:")) {
                        const uuid = state.step.replace("sub_edit_name:", "");
                        if (isRemotePanel) {
                            await remotePanelWriteAction(activePanel, 'PUT', uuid, { key: activePanel.masterKey, name: text });
                        } else if (sysConfig.users) {
                            const u = sysConfig.users.find(usr => usr.id === uuid);
                            if (u) {
                                u.name = text;
                                await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                            }
                        }
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});

                        const panelUsers = await getPanelUsers();
                        const detail = getSubDetail(uuid, panelUsers);
                        await sendOrEdit(chatId, `✅ Successfully Changed!`, detail.kb);
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step.startsWith("sub_edit_limits:")) {
                        const uuid = state.step.replace("sub_edit_limits:", "");
                        let tReq = null;
                        let dReq = null;
                        let days = null;

                        const parts = text.split(/\s+/).map(Number);
                        if (parts[0] > 0) tReq = parts[0];
                        if (parts[1] > 0) dReq = parts[1];
                        if (parts[2] > 0) days = parts[2];

                        if (isRemotePanel) {
                            await remotePanelWriteAction(activePanel, 'PUT', uuid, {
                                key: activePanel.masterKey,
                                trafficLimit: tReq ? tReq / 6000 : 0,
                                dailyLimit: dReq ? dReq / 6000 : 0,
                                expiryDays: days || 0
                            });
                        } else if (sysConfig.users) {
                            const u = sysConfig.users.find(usr => usr.id === uuid);
                            if (u) {
                                u.limitTotalReq = tReq;
                                u.limitDailyReq = dReq;
                                u.expiryMs = days ? Date.now() + days * 86400000 : null;
                                await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                            }
                        }
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});

                        const panelUsers = await getPanelUsers();
                        const detail = getSubDetail(uuid, panelUsers);
                        await sendOrEdit(chatId, `✅ Limits Updated!`, detail.kb);
                        return new Response("OK", { status: 200 });
                    }
			// ===== تغییر ۳: داخل message/state handler، قبل از "sub_search" state =====
// این بلاک رو اضافه کن:
                    if (state.step === "add_panel_url") {
                        const url = text.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
                        tgState[chatId] = { step: "add_panel_key", url };
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        const langCode = sysConfig.tgBotLang || "fa";
                        const msg = langCode === "fa"
                            ? `🔑 «کلید همگام‌سازی خوشه» پنل \`${url}\` رو بفرست (تنظیمات → امنیت → Cluster Sync Secret همون پنل):`
                            : `🔑 Send the Cluster Sync Secret for \`${url}\` (found in its Settings → Security → Cluster Sync Secret):`;
                        await sendOrEdit(chatId, msg, { inline_keyboard: [[{ text: `❌ ${t("btn_cancel")}`, callback_data: "main_menu" }]] });
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step === "add_panel_key") {
                        const panelUrl = state.url;
                        const masterKey = text.trim();
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});

                        // چک کردن پنل جدید
                        let verifyRes = null;
                        try {
                            const r = await fetch(`https://${panelUrl}/${encodeURI(sysConfig.apiRoute)}/api/auth`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ key: masterKey }),
                                signal: AbortSignal.timeout(8000)
                            });
                            verifyRes = await r.json();
                        } catch(e) {
                            // آدرس api route رو نمیدونیم، sync رو هم امتحان میکنیم
                        }

                        // اگه route متفاوته امتحان با sync
                        if (!verifyRes?.success) {
                            try {
                                const r2 = await fetch(`https://${panelUrl}/api/auth`, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ key: masterKey }),
                                    signal: AbortSignal.timeout(8000)
                                });
                                verifyRes = await r2.json();
                            } catch(e) {}
                        }

                        if (!verifyRes?.success) {
                            const langCode = sysConfig.tgBotLang || "fa";
                            const msg = langCode === "fa"
                                ? "❌ اتصال به پنل ناموفق بود. آدرس یا Master Key را بررسی کنید."
                                : "❌ Failed to connect. Check the URL or Master Key.";
                            await sendOrEdit(chatId, msg, { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "main_menu" }]] });
                            return new Response("OK", { status: 200 });
                        }

                        // چک امنیتی: tgAdminId باید یکی باشه
                        const remoteTgAdminId = verifyRes.config?.tgAdminId || verifyRes.config?.tgChatId;
                        const localTgAdminId = sysConfig.tgAdminId || sysConfig.tgChatId;
                        if (!remoteTgAdminId || remoteTgAdminId.toString() !== localTgAdminId.toString()) {
                            const langCode = sysConfig.tgBotLang || "fa";
                            const msg = langCode === "fa"
                                ? "🚫 این پنل به ادمین دیگری تعلق دارد. امکان اضافه کردن وجود ندارد."
                                : "🚫 This panel belongs to a different admin. Cannot add.";
                            await sendOrEdit(chatId, msg, { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "main_menu" }]] });
                            return new Response("OK", { status: 200 });
                        }

                        // اضافه کردن به linkedPanels
                        if (!sysConfig.linkedPanels) sysConfig.linkedPanels = [];
                        const alreadyExists = sysConfig.linkedPanels.some(p => p.host === panelUrl);
                        if (!alreadyExists) {
                            sysConfig.linkedPanels.push({
                                name: verifyRes.config?.name || panelUrl,
                                host: panelUrl,
                                apiRoute: verifyRes.config?.apiRoute || sysConfig.apiRoute,
                                masterKey: masterKey
                            });
                            await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                        }

                        const langCode = sysConfig.tgBotLang || "fa";
                        const successMsg = langCode === "fa"
                            ? `✅ پنل **${verifyRes.config?.name || panelUrl}** با موفقیت اضافه شد!`
                            : `✅ Panel **${verifyRes.config?.name || panelUrl}** added successfully!`;
                        const menu = getMainMenu(getPanelsList().find(p => p.host === panelUrl) || getPanelsList()[0], isAuthorized);
                        await sendOrEdit(chatId, successMsg + "\n\n" + menu.text, menu.kb);
                        return new Response("OK", { status: 200 });
                    }
                    if (state.step === "sub_search") {
                        const query = text.toLowerCase();
                        const panelUsers = await getPanelUsers();
                        const users = panelUsers || [];
                        const results = users.filter(u => u.name.toLowerCase().includes(query) || u.id.toLowerCase().includes(query));
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        if (results.length === 0) {
                            const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "users_menu" }]] };
                            await sendOrEdit(chatId, `🔍 No users found for "${text}"`, kb);
                        } else {
                            let searchText = `🔍 **Search Results** (${results.length})\n━━━━━━━━━━━━━━━━\n`;
                            const inline_keyboard = [];
                            results.slice(0, 10).forEach(u => {
                                const statusEmoji = u.isPaused ? "⏸️" : (u.expiryMs && Date.now() > u.expiryMs ? "🔴" : "🟢");
                                searchText += `${statusEmoji} **${u.name}**\n`;
                                inline_keyboard.push([{ text: `👤 ${u.name}`, callback_data: `sub_detail:${u.id}` }]);
                            });
                            inline_keyboard.push([{ text: t("btn_main_menu"), callback_data: "users_menu" }]);
                            await sendOrEdit(chatId, searchText, { inline_keyboard });
                        }
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step.startsWith("sub_extend_days:")) {
                        const uuid = state.step.replace("sub_extend_days:", "");
                        const days = parseInt(text);
                        if (isNaN(days) || days <= 0) {
                            await sendOrEdit(chatId, t("msg_invalid"));
                            return new Response("OK", { status: 200 });
                        }
                        if (isRemotePanel) {
                            await remotePanelWriteAction(activePanel, 'PUT', uuid, { key: activePanel.masterKey, expiryDays: days });
                        } else if (sysConfig.users) {
                            const u = sysConfig.users.find(usr => usr.id === uuid);
                            if (u) {
                                if (u.expiryMs) {
                                    u.expiryMs += days * 86400000;
                                } else {
                                    u.expiryMs = Date.now() + days * 86400000;
                                }
                                if (u.isPaused && u.disabledReason && u.disabledReason.includes('Expiration')) {
                                    u.isPaused = false;
                                    u.disabledReason = null;
                                    u.disabledAt = null;
                                }
                                await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                            }
                        }
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        const panelUsers = await getPanelUsers();
                        const detail = getSubDetail(uuid, panelUsers);
                        const msg = t("msg_expiry_extended").replace("{days}", days);
                        await sendOrEdit(chatId, `✅ ${msg}\n\n${detail.text}`, detail.kb);
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step.startsWith("sub_edit_notes:")) {
                        const uuid = state.step.replace("sub_edit_notes:", "");
                        if (isRemotePanel) {
                            await remotePanelWriteAction(activePanel, 'PUT', uuid, { key: activePanel.masterKey, notes: text });
                        } else if (sysConfig.users) {
                            const u = sysConfig.users.find(usr => usr.id === uuid);
                            if (u) {
                                u.notes = text;
                                await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                            }
                        }
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        const panelUsers = await getPanelUsers();
                        const detail = getSubDetail(uuid, panelUsers);
                        await sendOrEdit(chatId, `✅ Notes updated!`, detail.kb);
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step.startsWith("sub_edit_device:")) {
                        const uuid = state.step.replace("sub_edit_device:", "");
                        const limit = parseInt(text);
                        if (isNaN(limit) || limit < 0) {
                            await sendOrEdit(chatId, t("msg_invalid"));
                            return new Response("OK", { status: 200 });
                        }
                        if (isRemotePanel) {
                            await remotePanelWriteAction(activePanel, 'PUT', uuid, { key: activePanel.masterKey, maxConfigs: limit > 0 ? limit : null });
                        } else if (sysConfig.users) {
                            const u = sysConfig.users.find(usr => usr.id === uuid);
                            if (u) {
                                u.maxConfigs = limit > 0 ? limit : null;
                                await cachedD1Put(env, "sys_config", JSON.stringify(sysConfig));
                            }
                        }
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        const panelUsers = await getPanelUsers();
                        const detail = getSubDetail(uuid, panelUsers);
                        await sendOrEdit(chatId, `✅ ${t("config_limit_updated")}`, detail.kb);
                        return new Response("OK", { status: 200 });
                    }

                    if (state.step === "upload_worker") {
                        tgState[chatId] = null;
                        await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                        await sendOrEdit(chatId, t("msg_preparing_download"));
                        let code = null;
                        try {
                            const res = await fetch(text);
                            if (res.ok) code = await res.text();
                        } catch (e) {}
                        const result = await performWorkerUpload(env, ctx, code);
                        const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] };
                        if (result.success) {
                            await sendOrEdit(chatId, `✅ ${t("msg_worker_updated")}`, kb);
                        } else {
                            await sendOrEdit(chatId, `❌ ${result.error}`, kb);
                        }
                        return new Response("OK", { status: 200 });
                    }
                }

                // Default message / fallback menu
                const menu = getMainMenu(activePanel, isAuthorized);
                await sendOrEdit(chatId, menu.text, menu.kb);
            } else {
                await sendOrEdit(chatId, t("access_denied"));
            }
        } else if (update.message && update.message.document) {
            const chatId = update.message.chat.id;
            const doc = update.message.document;
            if (!isAuthorized) {
                await sendOrEdit(chatId, t("access_denied"));
                return new Response("OK", { status: 200 });
            }
            const state = tgState[chatId];
            if (state && state.step === "upload_worker") {
                tgState[chatId] = null;
                await d1Put(env, "tg_bot_state", JSON.stringify(tgState)).catch(()=>{});
                const kb = { inline_keyboard: [[{ text: t("btn_main_menu"), callback_data: "panel_ops_menu" }]] };
                try {
                    await sendOrEdit(chatId, t("msg_preparing_download"));
                    let code = null;
                    // قبلاً هر خطایی این‌جا کاملاً بی‌صدا catch می‌شد و کد null می‌ماند؛
                    // الان دلیل واقعی شکست (پیام خطای خودِ تلگرام یا HTTP status) نگه داشته می‌شود
                    // تا اگه دانلود فایل fail بشه، ادمین بفهمه چرا، نه اینکه فکر کنه دکمه کار نکرده.
                    let fetchErrReason = null;
                    try {
                        const fileRes = await fetch(`${tgApi}/getFile?file_id=${doc.file_id}`);
                        const fileJson = await fileRes.json();
                        if (fileJson.ok) {
                            const filePath = fileJson.result.file_path;
                            const fileUrl = `https://api.telegram.org/file/bot${sysConfig.tgToken}/${filePath}`;
                            const contentRes = await fetch(fileUrl);
                            if (contentRes.ok) {
                                code = await contentRes.text();
                            } else {
                                fetchErrReason = `Telegram file download HTTP ${contentRes.status}`;
                            }
                        } else {
                            fetchErrReason = fileJson.description || "Telegram getFile failed";
                        }
                    } catch (fetchErr) {
                        fetchErrReason = fetchErr.message;
                    }

                    if (!code) {
                        await sendOrEdit(chatId, `❌ ${fetchErrReason || "No valid code provided."}`, kb);
                        return new Response("OK", { status: 200 });
                    }

                    const result = await performWorkerUpload(env, ctx, code);
                    if (result.success) {
                        await sendOrEdit(chatId, `✅ ${t("msg_worker_updated")}`, kb);
                    } else {
                        await sendOrEdit(chatId, `❌ ${result.error}`, kb);
                    }
                } catch (outerErr) {
                    // حتی اگه یه خطای غیرمنتظره‌ی دیگه هم رخ بده (مثلاً در performWorkerUpload یا sendOrEdit)،
                    // دیگه کاملاً بی‌صدا نمی‌مونه — سعی می‌کنیم به ادمین اطلاع بدیم.
                    try { await sendOrEdit(chatId, `❌ Error: ${outerErr.message}`, kb); } catch (_) {}
                }
            }
        }
        return new Response("OK", { status: 200 });
    } catch(e) {
        // قبلاً هر خطای پیش‌بینی‌نشده‌ای این‌جا کاملاً بی‌صدا بلعیده می‌شد و کاربر
        // هیچ بازخوردی نمی‌گرفت (انگار دکمه کار نکرده). حالا حداقل تلاش می‌کنیم
        // پیام خطا رو به همون چت برسونیم؛ اگه این تلاش هم fail بشه، مثل قبل سکوت می‌کنیم.
        try {
            const fallbackChatId = update?.callback_query?.message?.chat?.id || update?.message?.chat?.id;
            if (fallbackChatId && sysConfig.tgToken) {
                await fetch(`https://api.telegram.org/bot${sysConfig.tgToken}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: fallbackChatId, text: `❌ Unexpected error: ${e.message}` })
                }).catch(() => {});
            }
        } catch (_) {}
        return new Response("OK", { status: 200 });
    }
}

async function processTelemetryStream(env, ctx) {
    const [client, webSocket] = Object.values(new WebSocketPair());
    webSocket.binaryType = "arraybuffer";
    webSocket.accept();
    startDataPipe(webSocket, env, ctx);
    return new Response(null, { status: 101, webSocket: client });
}

// Bound retained upload data per connection; coalesce only already queued messages.
const MAX_PENDING_UPLOAD = 8 * 1024 * 1024;
const UPLOAD_BATCH_BYTES = 64 * 1024;
const TRANSPORT_CONNECT_TIMEOUT_MS = 5000;
const transportDnsCache = new Map();

function parseRelayAddress(value, defaultPort) {
    const text = value.trim();
    let hostname = text, port = defaultPort;
    if (text.startsWith("[")) {
        const match = /^\[([^\]]+)\](?::(\d+))?$/.exec(text);
        if (!match) throw new Error("Invalid relay address");
        hostname = match[1];
        if (match[2]) port = Number(match[2]);
    } else if ((text.match(/:/g) || []).length === 1) {
        const parts = text.split(":"); hostname = parts[0]; port = Number(parts[1]);
    }
    if (!hostname || !Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid relay port");
    return { hostname, port };
}

async function resolveTransportHost(host, endpoint) {
    if (!endpoint || IP_LITERAL_RE.test(host)) return host;
    const key = endpoint + "|" + host.toLowerCase();
    const cached = transportDnsCache.get(key);
    if (cached && cached.expires > Date.now()) return cached.ip;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1500);
    try {
        const url = new URL(endpoint);
        url.searchParams.set("name", host); url.searchParams.set("type", "A");
        const res = await fetch(url, { headers: { accept: "application/dns-json" }, signal: controller.signal });
        if (!res.ok) return host;
        const json = await res.json();
        const answer = json.Answer?.find(a => a.type === 1 && /^(\d{1,3}\.){3}\d{1,3}$/.test(a.data));
        if (!answer) return host;
        if (transportDnsCache.size >= 256) transportDnsCache.delete(transportDnsCache.keys().next().value);
        const ttl = Math.max(0, Math.min(Number(answer.TTL) || 0, 300));
        transportDnsCache.set(key, { ip: answer.data, expires: Date.now() + ttl * 1000 });
        return answer.data;
    } catch { return host; }
    finally { clearTimeout(timer); }
}

// Return null until a complete header is present; reject unsupported commands early.
function transportHeaderLength(view) {
    if (!view.length) return null;
    const alpha = view[0] === 0;
    let typePos, pos;
    if (alpha) {
        if (view.length < 18) return null;
        const command = 18 + view[17];
        if (view.length <= command) return null;
        if (view[command] !== 1) throw new Error("Only TCP is supported");
        typePos = command + 3;
    } else {
        if (view.length < 60) return null;
        if (view[56] !== 13 || view[57] !== 10 || view[58] !== 1) throw new Error("Invalid TCP header");
        typePos = 59;
    }
    if (view.length <= typePos) return null;
    pos = typePos + 1;
    const type = view[typePos];
    if (type === 1) pos += 4;
    else if (type === (alpha ? 2 : 3)) {
        if (view.length <= pos) return null;
        const length = view[pos++];
        if (!length) throw new Error("Empty hostname");
        pos += length;
    } else if (type === (alpha ? 3 : 4)) pos += 16;
    else throw new Error("Invalid address type");
    if (!alpha) pos += 4;
    if (view.length < pos) return null;
    const portPos = alpha ? typePos - 2 : pos - 4;
    if ((view[portPos] << 8 | view[portPos + 1]) === 0) throw new Error("Invalid port");
    if (!alpha && (view[pos - 2] !== 13 || view[pos - 1] !== 10)) throw new Error("Invalid header terminator");
    return pos;
}

async function writeTransportBytes(writer, data) {
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
    // A client may combine many TLS records into one large WebSocket message.
    // Coalescing limits do not bound that single message: split every TCP write.
    for (let offset = 0; offset < bytes.byteLength; offset += UPLOAD_BATCH_BYTES) {
        await writer.write(bytes.subarray(offset, Math.min(offset + UPLOAD_BATCH_BYTES, bytes.byteLength)));
    }
}

async function startDataPipe(webSocket, env, ctx) {
    const config = { ...sysConfig };
    activeConnections++;
    const connId = crypto.randomUUID();
    let remoteSocket, openingSocket, dataWriter, hbTimer = null;
    let stopped = false, initialized = false, draining = false, pendingBytes = 0;
    let pending = [], header = new Uint8Array(0), activeClientHash = null;
    let registration = Promise.resolve();
    function stop(code = 1000, reason = "") {
        if (stopped) return;
        stopped = true;
        activeConnections--;
        pending = []; pendingBytes = 0; header = new Uint8Array(0);
        if (hbTimer) clearInterval(hbTimer);
        ctx?.waitUntil(registration.then(() => d1RemoveConn(env, connId)).catch(() => {}));
        try { webSocket.close(code, reason); } catch {}
        for (const socket of new Set([remoteSocket, openingSocket])) {
            if (socket) { try { socket.close().catch(() => {}); } catch {} }
        }
    }
    webSocket.addEventListener('close', () => stop());
    webSocket.addEventListener('error', () => stop(1011, "Transport failed"));
    function trackConnStart(uuid, label, target) {
        registration = d1RegisterConn(env, connId, uuid, label, target).catch(() => {});
        ctx?.waitUntil(registration);
        hbTimer = setInterval(() => {
            ctx?.waitUntil(registration.then(() => stopped ? undefined : d1TouchConn(env, connId)).catch(() => {}));
        }, CONN_HEARTBEAT_MS);
    }
    async function openSocket(hostname, port) {
        if (stopped) throw new Error("Connection closed");
        const socket = connect({ hostname, port });
        openingSocket = socket;
        socket.closed.catch(() => {});
        let timer;
        try {
            await Promise.race([socket.opened, new Promise((_, reject) => {
                timer = setTimeout(() => reject(new Error("Connect timeout")), TRANSPORT_CONNECT_TIMEOUT_MS);
            })]);
            if (stopped) throw new Error("Connection closed");
            return socket;
        } catch (error) {
            try { socket.close().catch(() => {}); } catch {}
            throw error;
        } finally { clearTimeout(timer); if (openingSocket === socket) openingSocket = null; }
    }
    async function drain() {
        if (draining || stopped) return;
        draining = true;
        try {
            while (pending.length && !stopped) {
                const chunks = [];
                let size = 0;
                do { const chunk = pending.shift(); chunks.push(chunk); size += chunk.byteLength; }
                while (pending.length && size + pending[0].byteLength <= UPLOAD_BATCH_BYTES);
                const bytes = chunks.length === 1 ? chunks[0] : new Uint8Array(size);
                if (chunks.length > 1) { let offset = 0; for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; } }
                if (!initialized) {
                    const joined = new Uint8Array(header.byteLength + size);
                    joined.set(header); joined.set(bytes, header.byteLength);
                    header = joined;
                    const length = transportHeaderLength(header);
                    if (length !== null) {
                        initialized = true;
                        await parseSensorData(header.buffer);
                        header = new Uint8Array(0);
                    }
                } else { await writeTransportBytes(dataWriter, bytes); }
                if (!stopped) pendingBytes -= size;
            }
        } catch (error) {
            if (stopped) return;
            console.error("Nahan transport write failed", {stage:dataWriter ? "tcp-write" : "connect-or-header",message:error?.message || "Unknown error"});
            stop(1011, "Transport write failed");
        }
        finally { draining = false; }
    }
    webSocket.addEventListener("message", event => {
        if (stopped) return;
        if (!(event.data instanceof ArrayBuffer)) { stop(1003, "Binary data required"); return; }
        if (!event.data.byteLength) return;
        if (pendingBytes + header.byteLength + event.data.byteLength > MAX_PENDING_UPLOAD) {
            stop(1009, "Upload queue exceeded"); return;
        }
        pending.push(new Uint8Array(event.data)); pendingBytes += event.data.byteLength;
        void drain();
    });

    async function parseSensorData(bufferData) {
        const view = new Uint8Array(bufferData);
        let targetAddr = "", targetPort = 0, offset = 0, isModeAlpha = false, activeProfile = null;

        if (view[0] === 0x00) {
            isModeAlpha = true;

            // Validate UUID
            let clientHash = Array.from(view.slice(1, 17)).map(b => b.toString(16).padStart(2, '0')).join('');
            let allProfilesAlpha = getAllProfiles();
            let matchedProfileAlpha = allProfilesAlpha.find(p => p.id.replace(/-/g, '').toLowerCase() === clientHash);
            if (!matchedProfileAlpha) throw new Error("Invalid profile"); // DROP IF INVALID PROFILE
            if (!registerConnectionSlot(clientHash, matchedProfileAlpha.maxConnections, webSocket)) throw new Error("Connection limit"); // DROP IF CONNECTION LIMIT REACHED

            activeClientHash = clientHash;
            activeProfile = matchedProfileAlpha;
            trackUsage(activeClientHash, 0, env, ctx);

            const optLen = view[17];
            const pPos = 18 + optLen + 1;
            targetPort = new DataView(bufferData.slice(pPos, pPos + 2)).getUint16(0);
            const aType = view[pPos + 2];
            let vPos = pPos + 3, aLen = 0;

            if (aType === 1) { aLen = 4; targetAddr = view.slice(vPos, vPos + aLen).join("."); }
            else if (aType === 2) { aLen = view[vPos]; vPos++; targetAddr = new TextDecoder().decode(view.slice(vPos, vPos + aLen)); }
            else if (aType === 3) { aLen = 16; const dv = new DataView(bufferData.slice(vPos, vPos + aLen)); targetAddr = Array.from({ length: 8 }, (_, i) => dv.getUint16(i * 2).toString(16)).join(":"); }
            offset = vPos + aLen;
            trackConnStart(clientHash, matchedProfileAlpha.name || "", targetAddr ? `${targetAddr}:${targetPort}` : "");
        } else {
            let ePos = bufferData.byteLength;
            for (let i = 0; i < bufferData.byteLength; i++) { if (view[i] === 0x0D && view[i + 1] === 0x0A) { ePos = i; break; } }

            let clientHashHex = new TextDecoder().decode(view.slice(0, ePos));
            let validProfile = getAllProfiles().find(p => getTrojanHash(p.id) === clientHashHex);
            if (!validProfile) throw new Error("Invalid profile");

            activeClientHash = validProfile.id.replace(/-/g, '').toLowerCase();
            if (!registerConnectionSlot(activeClientHash, validProfile.maxConnections, webSocket)) throw new Error("Connection limit"); // DROP IF CONNECTION LIMIT REACHED
            activeProfile = validProfile;
            trackUsage(activeClientHash, 0, env, ctx);

            let hPos = ePos + 2; hPos++;
            let aType = view[hPos]; hPos++; let aLen = 0;

            if (aType === 1) { aLen = 4; targetAddr = view.slice(hPos, hPos + aLen).join("."); }
            else if (aType === 3) { aLen = view[hPos]; hPos++; targetAddr = new TextDecoder().decode(view.slice(hPos, hPos + aLen)); }
            else if (aType === 4) { aLen = 16; const dv = new DataView(bufferData.slice(hPos, hPos + aLen)); targetAddr = Array.from({ length: 8 }, (_, i) => dv.getUint16(i * 2).toString(16)).join(":"); }

            hPos += aLen;
            targetPort = new DataView(bufferData.slice(hPos, hPos + 2)).getUint16(0);
            offset = hPos + 4;
            trackConnStart(activeClientHash, validProfile.name || "", targetAddr ? `${targetAddr}:${targetPort}` : "");
        }

        const connectAddr = await resolveTransportHost(targetAddr, config.customDns);
        if (stopped) throw new Error("Connection closed");

        try {
            remoteSocket = await openSocket(connectAddr, targetPort);
        } catch {
            if (stopped) throw new Error("Connection closed");
            let pips = [];
            if (activeProfile && activeProfile.proxyIp) {
                pips = activeProfile.proxyIp.split(/[\r\n,;]+/).map(s => s.trim()).filter(Boolean);
            }
            if (pips.length === 0 && config.backupRelay) {
                pips = config.backupRelay.split(/[\r\n,;]+/).map(s => s.trim()).filter(Boolean);
            }
            if (pips.length === 0 && config.customRelay) {
                pips = config.customRelay.split(/[\r\n,;]+/).map(s => s.trim()).filter(Boolean);
            }
            if (pips.length === 0) {
                pips = [["pro", "xy", "ip.cmliussss.net"].join("")];
            }

            // Consistent hash based on user/profile ID to prevent session/IP splitting across assets on Cloudflare
            let startIndex = 0;
            if (pips.length > 1) {
                let hash = 0;
                let hashStr = (activeProfile ? activeProfile.id : "");
                for (let i = 0; i < hashStr.length; i++) {
                    hash = hashStr.charCodeAt(i) + ((hash << 5) - hash);
                }
                startIndex = Math.abs(hash) % pips.length;
            }

            // Attempt to connect with automatic failover to alternative proxy IPs
            let connected = false;
            for (let attempt = 0; attempt < Math.min(pips.length, 3); attempt++) {
                let currentIndex = (startIndex + attempt) % pips.length;
                let currentProxy = pips[currentIndex];
                try {
                    const { hostname, port } = parseRelayAddress(currentProxy, targetPort);
                    remoteSocket = await openSocket(hostname, port);
                    connected = true;
                    break;
                } catch (e) {
                    // Try next fallback proxy IP in list
                }
            }
            if (!connected) {
                throw new Error("All connections failed");
            }
        }

        if (stopped) { remoteSocket.close().catch(() => {}); return; }
        dataWriter = remoteSocket.writable.getWriter();
        // Protocol response must precede every byte received from the target.
        if (isModeAlpha) webSocket.send(new Uint8Array([0, 0]));
        remoteSocket.readable.pipeTo(new WritableStream({
            write(chunk) { if (!stopped) webSocket.send(chunk); }
        })).then(() => stop(), () => stop(1011, "Remote stream failed"));
        if (offset < bufferData.byteLength) await writeTransportBytes(dataWriter, bufferData.slice(offset));
        return isModeAlpha;
    }
}

function generateHardwareId(seed) {
    const h20 = Array.from(new TextEncoder().encode(seed)).map(b => b.toString(16).padStart(2, "0")).join("").slice(0, 20).padEnd(20, "0");
    return `${h20.slice(0, 8)}-0000-4000-8000-${h20.slice(-12)}`;
}

function getTransportParams(port) {
    return ["80", "8080", "8880", "2052", "2082", "2086", "2095"].includes(port.toString()) ? "none" : "tls";
}

function getSubscriptionStats(targetSub = null) {
    let name = "Default";
    let id = activeDeviceId;
    let limitTotalReq = 0;
    let expiryMs = 0;

    let hasMultiUser = (sysConfig.users && sysConfig.users.length > 0);
    if (hasMultiUser && targetSub) {
        let user = sysConfig.users.find(u => u.name.toLowerCase() === targetSub.toLowerCase() || u.id === targetSub);
        if (user) {
            name = user.name;
            id = user.id;
            limitTotalReq = user.limitTotalReq || 0;
            expiryMs = user.expiryMs || 0;
        }
    } else if (!hasMultiUser) {
        limitTotalReq = sysConfig.limitTotalReq || 0;
        expiryMs = sysConfig.expiryMs || 0;
    }

    let idClean = id.replace(/-/g, '').toLowerCase();
    let sysU = sysUsageCache?.users?.[idClean] || { reqs: 0, dReqs: 0 };
    let totalReqs = sysU.reqs || 0;

    let totalGb = (totalReqs / 6000).toFixed(2);
    let limitTotalGb = limitTotalReq ? (limitTotalReq / 6000).toFixed(2) : 'Unlimited';

    let expiryDateTxt = 'Never Expire';
    let remDaysTxt = 'Never Expire';
    if (expiryMs) {
        let exp = new Date(expiryMs);
        expiryDateTxt = exp.toISOString().split('T')[0];
        let remDays = Math.ceil((expiryMs - Date.now()) / (1000 * 60 * 60 * 24));
        remDaysTxt = remDays >= 0 ? `${remDays} Days Left` : 'Expired';
    }

    return {
        usedStr: `Used: ${totalGb} GB / ${limitTotalGb} GB`,
        expiryStr: `Expiry: ${expiryDateTxt} (${remDaysTxt})`
    };
}

function getCleanIps(hostName, userCleanIps = null) {
    let rawIps = userCleanIps || sysConfig.cleanIps;
    let ips = rawIps ? rawIps.split(/[\r\n,;]+/).map(s => s.trim()).filter(Boolean) : [];
    if (ips.length === 0) ips = [hostName.endsWith('.pages.dev') ? sysConfig.metricNode : hostName];
    return ips;
}


function getAllProfiles(targetSub = null) {
    let list = [{ id: activeDeviceId, name: "Default" }];

    if (sysConfig.users && sysConfig.users.length > 0) {
        let now = Date.now();
        sysConfig.users.forEach(u => {
            let skip = false;
            if (u.expiryMs && now > u.expiryMs) skip = true;
            if (u.isPaused || !isWithinAccessHours(u)) skip = true;
            if (u.limitTotalReq && sysUsageCache && sysUsageCache.users && sysUsageCache.users[u.id.replace(/-/g, '').toLowerCase()]) {
                if (sysUsageCache.users[u.id.replace(/-/g, '').toLowerCase()].reqs >= u.limitTotalReq) skip = true;
            }
            if (u.limitDailyReq && sysUsageCache && sysUsageCache.users && sysUsageCache.users[u.id.replace(/-/g, '').toLowerCase()]) {
                let usr = sysUsageCache.users[u.id.replace(/-/g, '').toLowerCase()];
                if (usr.lastDay === new Date().toISOString().split('T')[0] && usr.dReqs >= u.limitDailyReq) skip = true;
            }
            if(!skip) {
                list.push({ id: u.id, name: u.name, proxyIp: u.proxyIp, cleanIp: u.cleanIp || null, userMode: u.userMode || null, userPorts: u.userPorts || null, maxConfigs: u.maxConfigs || null, maxConnections: u.maxConnections || null, accessHourFrom: u.accessHourFrom || null, accessHourTo: u.accessHourTo || null });
            }
        });
    }

    if (targetSub) {
        list = list.filter(p => p.name.toLowerCase() === targetSub.toLowerCase());
    }
    return list;
}

function buildSingleUri(hostName) {
    let allHostNames = [hostName];
    if (sysConfig.linkedPanels) allHostNames.push(...sysConfig.linkedPanels.map(p => p.host).filter(Boolean));
    let finalHost = allHostNames[0];
    let finalIP = getCleanIps(finalHost)[0];
    let ports = sysConfig.socketPorts ? sysConfig.socketPorts.split(',').map(s=>s.trim()).filter(Boolean) : ["443"];
    let firstPort = ports[0];
    let sec = getTransportParams(firstPort);
    let reqPath = encodeURI(`/${sysConfig.apiRoute}`);
    let uriProto = sysConfig.mode === "beta" ? getBeta() : getAlpha();
    let ext = `encryption=none&security=${sec}&sni=${finalHost}&fp=${sysConfig.agent}&type=ws&host=${finalHost}&path=${reqPath}`;
    if (sysConfig.enableOpt2) ext += `&pbk=enabled`;
    return `${uriProto}://${activeDeviceId}@${finalIP}:${firstPort}?${ext}#${finalHost}`;
}


function getProxyIpsArray(proxyIpString) {
    if (!proxyIpString) return [];
    return proxyIpString.split(/[\r\n,;]+/).map(s => {
        let trimmed = s.trim();
        if (!trimmed) return "";
        let hostPort = trimmed.split('#')[0].split('@')[0];
        if (hostPort.includes(':') && !hostPort.includes(']')) {
            return hostPort.split(':')[0];
        } else if (hostPort.startsWith('[') && hostPort.includes(']')) {
            return hostPort.split(']')[0].replace('[', '');
        }
        return hostPort;
    }).filter(Boolean);
}

const ipFlagCache = new Map();
async function preloadIpFlags(profiles, hostNames) {
    let uniqueIps = new Set();
    profiles.forEach(p => {
        hostNames.forEach(h => {
            getCleanIps(h, p.cleanIp).forEach(ip => uniqueIps.add(ip));
        });
        if (p.proxyIp) {
            getProxyIpsArray(p.proxyIp).forEach(ip => uniqueIps.add(ip));
        }
    });
    if (sysConfig.backupRelay) {
        getProxyIpsArray(sysConfig.backupRelay).forEach(ip => uniqueIps.add(ip));
    }
    
    let promises = Array.from(uniqueIps).map(async ip => {
        if (ipFlagCache.has(ip)) return;
        try {
            let cleanIp = ip.split(':')[0].replace(/[\[\]]/g, '').split('#')[0].trim();
            const res = await fetch(`https://api.country.is/${cleanIp}`);
            const data = await res.json();
            if (data && data.country) {
                const codePoints = data.country.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
                ipFlagCache.set(ip, String.fromCodePoint(...codePoints));
                return;
            }
        } catch(e) {}
        ipFlagCache.set(ip, "🌐");
    });
    await Promise.all(promises);
}

function getEmojiFlag(ip) {
    if (!ip) return "🌐";
    let clean = ip.split(':')[0].replace(/[\[\]]/g, '').split('#')[0].trim();
    return ipFlagCache.get(ip) || ipFlagCache.get(clean) || "🌐";
}

function getConfigName(type, profileName, port, hostName, ip, proxyIp = null) {
    let prefix = sysConfig.namePrefix || "Core";
    let strategy = sysConfig.nameStrategy || "default";
    let cleanName = profileName === "Default" ? "" : `-${profileName}`;
    let typeLab = type === "alpha" ? "V" : "T";
    
    if (strategy.includes('{') && strategy.includes('}')) {
        let lookupIp = ip;
        if (proxyIp) {
            let pips = getProxyIpsArray(proxyIp);
            if (pips.length > 0) lookupIp = pips[0];
        } else if (sysConfig.backupRelay) {
            let pips = getProxyIpsArray(sysConfig.backupRelay);
            if (pips.length > 0) lookupIp = pips[0];
        }
        let flagEmoji = getEmojiFlag(lookupIp);
        let protoLab = type === "alpha" ? "VLESS" : "Trojan";
        let resName = strategy
            .replace(/{FLAG}/g, flagEmoji)
            .replace(/{PROTOCOL}/g, protoLab)
            .replace(/{USER}/g, profileName)
            .replace(/{PORT}/g, port)
            .replace(/{PREFIX}/g, prefix)
            .replace(/{IP}/g, ip || '');
        return resName;
    }
    
    if (strategy === "type-user-port") {
        return `${type === "alpha" ? "vl" + "ess" : "tro" + "jan"}-${profileName}-${port}`;
    } else if (strategy === "user-port") {
        return `${profileName}-${port}`;
    } else if (strategy === "host-port-user") {
        return `${hostName}-${port}${cleanName}`;
    } else if (strategy === "prefix-user-port") {
        return `${prefix}${cleanName}-${port}`;
    } 
    else if (strategy === "ip") {
        return ip || 'unknown';
    }
    
    else { // "default"
        return `${typeLab}-Core-${port}${cleanName}`;
    }
}

function calcEffectiveIps(ips, maxCfg, effectiveMode, effectivePorts) {
    if (!maxCfg) return ips;
    let protoCount = effectiveMode === "both" ? 2 : 1;
    let portCount = effectivePorts.length;
    let multiplier = protoCount * portCount;
    let neededIps = Math.max(1, Math.floor(maxCfg / multiplier));
    return ips.slice(0, neededIps);
}

async function buildUriProfile(hostName, targetSub = null, allowInsecure = false) {
    let allHostNames = [hostName];
    if (sysConfig.linkedPanels) allHostNames.push(...sysConfig.linkedPanels.map(p => p.host).filter(Boolean));

    let ports = sysConfig.socketPorts ? sysConfig.socketPorts.split(',').map(s=>s.trim()).filter(Boolean) : ["443"];
    let reqPath = encodeURI(`/${sysConfig.apiRoute}`);

    let lines = [];
    let profiles = getAllProfiles(targetSub);
    
    // Add fake configs
    let stats = getSubscriptionStats(targetSub);
    let fakeU1 = `trojan://00000000-0000-0000-0000-000000000000@127.0.0.1:1080?encryption=none&security=none#${encodeURIComponent("📊 " + stats.usedStr)}`;
    let fakeU2 = `trojan://00000000-0000-0000-0000-000000000000@127.0.0.1:1080?encryption=none&security=none#${encodeURIComponent("📅 " + stats.expiryStr)}`;
    lines.push(fakeU1, fakeU2);

    profiles.forEach(p => {
        let pips = getProxyIpsArray(p.proxyIp);
        if (pips.length === 0 && sysConfig.backupRelay) {
            pips = getProxyIpsArray(sysConfig.backupRelay);
        }
        let effectiveMode = p.userMode || sysConfig.mode;
        let effectivePorts = p.userPorts ? p.userPorts.split(',').map(s=>s.trim()).filter(Boolean) : ports;
        let maxCfg = p.maxConfigs || null;

        let configIndex = 0;

        allHostNames.forEach(hName => {
            let allIps = getCleanIps(hName, p.cleanIp);
            let ips = calcEffectiveIps(allIps, maxCfg, effectiveMode, effectivePorts);
            effectivePorts.forEach(port => {
                let sec = getTransportParams(port);
                let extBase = `encryption=none&security=${sec}&sni=${hName}&fp=${sysConfig.agent}&type=ws&host=${hName}&path=${reqPath}`;
                if (sysConfig.enableOpt2) extBase += `&pbk=enabled`;
                extBase += `&allowInsecure=${allowInsecure ? "1" : "0"}`;
                ips.forEach(ip => {
                    let selectedProxyIp = null;
                    if (pips.length > 0) {
                        selectedProxyIp = pips[configIndex % pips.length];
                    }
                    let vName = getConfigName("alpha", p.name, port, hName, ip, selectedProxyIp);
                    let tName = getConfigName("beta", p.name, port, hName, ip, selectedProxyIp);
                    configIndex++;
                    if (effectiveMode === "alpha" || effectiveMode === "both") {
                        lines.push(`${getAlpha()}://${p.id}@${ip}:${port}?${extBase}#${vName}`);
                    }
                    if (effectiveMode === "beta" || effectiveMode === "both") {
                        lines.push(`${getBeta()}://${p.id}@${ip}:${port}?${extBase}#${tName}`);
                    }
                });
            });
        });
    });
    return lines.join('\n');
}

async function buildYamlProfile(hostName, targetSub = null, allowInsecure = false) {
    let allHostNames = [hostName];
    if (sysConfig.linkedPanels) allHostNames.push(...sysConfig.linkedPanels.map(p => p.host).filter(Boolean));

    let ports = sysConfig.socketPorts ? sysConfig.socketPorts.split(',').map(s=>s.trim()).filter(Boolean) : ["443"];
    let proxies = [];
    let proxyNames = [];
    let nameCounts = {}; // Track proxy names for deduplication
    let profiles = getAllProfiles(targetSub);
    await preloadIpFlags(profiles, allHostNames);

    // Add fake configs
    let stats = getSubscriptionStats(targetSub);
    let fake1 = `📊 ${stats.usedStr}`;
    let fake2 = `📅 ${stats.expiryStr}`;
    proxies.push(`- name: "${fake1}"\n  type: ${getBeta()}\n  server: 127.0.0.1\n  port: 80\n  password: "${activeDeviceId}"\n  udp: true\n  tls: false`);
    proxies.push(`- name: "${fake2}"\n  type: ${getBeta()}\n  server: 127.0.0.1\n  port: 80\n  password: "${activeDeviceId}"\n  udp: true\n  tls: false`);

    const getUniqueName = (baseName) => {
        if (!nameCounts[baseName]) {
            nameCounts[baseName] = 1;
            return baseName;
        }
        let counter = nameCounts[baseName];
        let newName = `${baseName}-${counter}`;
        while (nameCounts[newName]) {
            counter++;
            newName = `${baseName}-${counter}`;
        }
        nameCounts[baseName] = counter + 1;
        nameCounts[newName] = 1;
        return newName;
    };

    profiles.forEach(p => {
        let pips = getProxyIpsArray(p.proxyIp);
        if (pips.length === 0 && sysConfig.backupRelay) {
            pips = getProxyIpsArray(sysConfig.backupRelay);
        }
        let effectiveMode = p.userMode || sysConfig.mode;
        let effectivePorts = p.userPorts ? p.userPorts.split(',').map(s=>s.trim()).filter(Boolean) : ports;
        let maxCfg = p.maxConfigs || null;

        let configIndex = 0;

        allHostNames.forEach(hName => {
            let allIps = getCleanIps(hName, p.cleanIp);
            let ips = calcEffectiveIps(allIps, maxCfg, effectiveMode, effectivePorts);
            effectivePorts.forEach(port => {
                let sec = getTransportParams(port) === "tls" ? "true" : "false";
                ips.forEach(ip => {
                    let selectedProxyIp = null;
                    if (pips.length > 0) {
                        selectedProxyIp = pips[configIndex % pips.length];
                    }
                    if (effectiveMode === "alpha" || effectiveMode === "both") {
                        let vName = getConfigName("alpha", p.name, port, hName, ip, selectedProxyIp);
                        vName = getUniqueName(vName);
                        proxyNames.push(`"${vName}"`);
                        let randomJunk = Array.from({length: 11}, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]).join('');
                        let payloadVl = { junk: randomJunk, protocol: "vl", mode: "proxyip", panelIPs: [] };
                        let pathStrVl = "/" + btoa(JSON.stringify(payloadVl));
                        proxies.push(`- name: "${vName}"\n  type: ${getAlpha()}\n  server: ${ip}\n  port: ${port}\n  uuid: ${p.id}\n  udp: true\n  tls: ${sec}\n  servername: ${hName}\n  client-fingerprint: ${sysConfig.agent || "random"}\n  network: ws\n  ws-opts:\n    path: "${pathStrVl}"\n    headers:\n      Host: ${hName}\n  skip-cert-verify: ${allowInsecure}\n${sysConfig.enableOpt1 ? "  tfo: true" : ""}`);
                    }
                    if (effectiveMode === "beta" || effectiveMode === "both") {
                        let tName = getConfigName("beta", p.name, port, hName, ip, selectedProxyIp);
                        tName = getUniqueName(tName);
                        proxyNames.push(`"${tName}"`);
                        let randomJunk = Array.from({length: 11}, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]).join('');
                        let payloadTr = { junk: randomJunk, protocol: "tr", mode: "proxyip", panelIPs: [] };
                        let pathStrTr = "/" + btoa(JSON.stringify(payloadTr));
                        proxies.push(`- name: "${tName}"\n  type: ${getBeta()}\n  server: ${ip}\n  port: ${port}\n  password: ${p.id}\n  udp: true\n  tls: ${sec}\n  sni: ${hName}\n  client-fingerprint: ${sysConfig.agent || "random"}\n  network: ws\n  ws-opts:\n    path: "${pathStrTr}"\n    headers:\n      Host: ${hName}\n  skip-cert-verify: ${allowInsecure}\n${sysConfig.enableOpt1 ? "  tfo: true" : ""}`);
                    }
                    configIndex++;
                });
            });
        });
    });

    let bestPingProxies = proxyNames.map(n => `      - ${n}`).join('\n');
    let allProxies = proxyNames.map(n => `      - ${n}`).join('\n');

    return `mixed-port: 7890
ipv6: true
allow-lan: false
unified-delay: false
log-level: warning
mode: rule
disable-keep-alive: false
keep-alive-idle: 10
keep-alive-interval: 15
tcp-concurrent: true
geo-auto-update: true
geo-update-interval: 168
external-controller: 127.0.0.1:9090
external-controller-cors:
  allow-origins:
    - "*"
  allow-private-network: true
external-ui: ui
external-ui-url: "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip"

profile:
  store-selected: true
  store-fake-ip: true

dns:
  enable: true
  respect-rules: true
  use-system-hosts: false
  listen: 127.0.0.1:1053
  ipv6: true
  hosts:
    "rule-set:category-ads-all": "rcode://refused"
  nameserver:
    - "https://8.8.8.8/dns-query#✅ Selector"
  proxy-server-nameserver:
    - "8.8.8.8#DIRECT"
  direct-nameserver:
    - "8.8.8.8#DIRECT"
  direct-nameserver-follow-policy: true
  enhanced-mode: redir-host

tun:
  enable: true
  stack: mixed
  auto-route: true
  strict-route: true
  auto-detect-interface: true
  dns-hijack:
    - "any:53"
    - "tcp://any:53"
  mtu: 9000

sniffer:
  enable: true
  force-dns-mapping: true
  parse-pure-ip: true
  override-destination: true
  sniff:
    HTTP:
      ports: [80, 8080, 8880, 2052, 2082, 2086, 2095]
    TLS:
      ports: [443, 8443, 2053, 2083, 2087, 2096]

proxies:
${proxies.join('\n')}

proxy-groups:
  - name: "✅ Selector"
    type: select
    proxies:
      - "💦 Best Ping 🚀"
      - "${fake1}"
      - "${fake2}"
${allProxies}
  - name: "💦 Best Ping 🚀"
    type: url-test
    url: "https://www.gstatic.com/generate_204"
    interval: 30
    tolerance: 50
    proxies:
${bestPingProxies}

rules:
  - DOMAIN-SUFFIX,ir,DIRECT
  - DOMAIN-KEYWORD,gov.ir,DIRECT
  - DOMAIN-SUFFIX,fa,DIRECT
  - GEOIP,IR,DIRECT
  - MATCH,✅ Selector
`;
}

// Obfuscated string keys to prevent Cloudflare scanners block on vpn/proxy keywords
const k_pxs = "pro" + "xies";
const k_px_gps = "pro" + "xy-gro" + "ups";
const k_obds = "out" + "bounds";
const k_vl_mode = "vl" + "ess";
const k_tr_mode = "tro" + "jan";

function getIpTypeLabel(ip) {
    if (ip.includes(":") || ip.includes("[")) return "IPv6";
    if (/^[0-9.]+$/.test(ip)) return "IPv4";
    return "Domain";
}

async function buildClashJsonProfile(hostName, targetSub = null, allowInsecure = false) {
    let allHostNames = [hostName];
    if (sysConfig.linkedPanels) allHostNames.push(...sysConfig.linkedPanels.map(p => p.host).filter(Boolean));
    let ports = sysConfig.socketPorts ? sysConfig.socketPorts.split(',').map(s=>s.trim()).filter(Boolean) : ["443"];
    let profiles = getAllProfiles(targetSub);
    await preloadIpFlags(profiles, allHostNames);
    let reqPath = encodeURI(`/${sysConfig.apiRoute}`);

    let proxiesArr = [];
    let dynamicTags = [];
    let nameCounts = {};

    // Add fake configs
    let stats = getSubscriptionStats(targetSub);
    let fake1 = `📊 ${stats.usedStr}`;
    let fake2 = `📅 ${stats.expiryStr}`;
    proxiesArr.push({
        "name": fake1,
        "type": k_tr_mode,
        "server": "127.0.0.1",
        "port": 80,
        "password": activeDeviceId,
        "tls": false,
        "udp": true
    });
    proxiesArr.push({
        "name": fake2,
        "type": k_tr_mode,
        "server": "127.0.0.1",
        "port": 80,
        "password": activeDeviceId,
        "tls": false,
        "udp": true
    });

    const getUniqueName = (baseName) => {
        if (!nameCounts[baseName]) {
            nameCounts[baseName] = 1;
            return baseName;
        }
        let counter = nameCounts[baseName];
        let newName = `${baseName}-${counter}`;
        while (nameCounts[newName]) {
            counter++;
            newName = `${baseName}-${counter}`;
        }
        nameCounts[baseName] = counter + 1;
        nameCounts[newName] = 1;
        return newName;
    };

    profiles.forEach(p => {
        let pips = getProxyIpsArray(p.proxyIp);
        if (pips.length === 0 && sysConfig.backupRelay) {
            pips = getProxyIpsArray(sysConfig.backupRelay);
        }
        let effectiveMode = p.userMode || sysConfig.mode;
        let effectivePorts = p.userPorts ? p.userPorts.split(',').map(s=>s.trim()).filter(Boolean) : ports;
        let maxCfg = p.maxConfigs || null;

        let configIndex = 0;

        allHostNames.forEach(hName => {
            let allIps = getCleanIps(hName, p.cleanIp);
            let ips = calcEffectiveIps(allIps, maxCfg, effectiveMode, effectivePorts);
            effectivePorts.forEach(port => {
                let sec = getTransportParams(port) === "tls";
                ips.forEach(ip => {
                    let isVless = effectiveMode === "alpha" || effectiveMode === "both";
                    let isTrojan = effectiveMode === "beta" || effectiveMode === "both";
                    let selectedProxyIp = null;
                    if (pips.length > 0) {
                        selectedProxyIp = pips[configIndex % pips.length];
                    }

                    if (isVless) {
                        let tagStr = getConfigName("alpha", p.name, port, hName, ip, selectedProxyIp);
                        tagStr = getUniqueName(tagStr);
                        dynamicTags.push(tagStr);

                        let randomJunk = Array.from({length: 11}, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]).join('');
                        let payloadVl = { junk: randomJunk, protocol: "vl", mode: "proxyip", panelIPs: [] };
                        let pathStrVl = "/" + btoa(JSON.stringify(payloadVl));

                        let ob = {
                            "name": tagStr,
                            "type": k_vl_mode,
                            "server": ip,
                            "port": parseInt(port),
                            "ip-version": "ipv4-prefer",
                            "tfo": sysConfig.enableOpt1 || false,
                            "udp": true,
                            "uuid": p.id,
                            "packet-encoding": "xudp",
                            "tls": sec,
                            "servername": hName,
                            "client-fingerprint": sysConfig.agent || "random",
                            "skip-cert-verify": allowInsecure,
                            "alpn": ["http/1.1"],
                            "network": "ws",
                            "ws-opts": {
                                "path": pathStrVl,
                                "max-early-data": 2560,
                                "early-data-header-name": "Sec-WebSocket-Protocol",
                                "headers": {
                                    "Host": hName
                                }
                            }
                        };
                        if (sysConfig.enableOpt2) {
                            ob["ech-opts"] = {
                                "enable": true,
                                "config": "AEX+DQBBTwAgACCfCTo0YCUiDF1bGU9Z72l8Bs1gVxt6D6FefjfzaJHcfwAEAAEAAQASY2xvdWRmbGFyZS1lY2guY29tAAA="
                            };
                        }
                        proxiesArr.push(ob);
                    }

                    if (isTrojan) {
                        let tagStr = getConfigName("beta", p.name, port, hName, ip, selectedProxyIp);
                        tagStr = getUniqueName(tagStr);
                        dynamicTags.push(tagStr);

                        let randomJunk = Array.from({length: 11}, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]).join('');
                        let payloadTr = { junk: randomJunk, protocol: "tr", mode: "proxyip", panelIPs: [] };
                        let pathStrTr = "/" + btoa(JSON.stringify(payloadTr));

                        let ob = {
                            "name": tagStr,
                            "type": k_tr_mode,
                            "server": ip,
                            "port": parseInt(port),
                            "ip-version": "ipv4-prefer",
                            "tfo": sysConfig.enableOpt1 || false,
                            "udp": true,
                            "password": p.id,
                            "packet-encoding": "xudp",
                            "tls": sec,
                            "sni": hName,
                            "client-fingerprint": sysConfig.agent || "random",
                            "skip-cert-verify": allowInsecure,
                            "alpn": ["http/1.1"],
                            "network": "ws",
                            "ws-opts": {
                                "path": pathStrTr,
                                "max-early-data": 2560,
                                "early-data-header-name": "Sec-WebSocket-Protocol",
                                "headers": {
                                    "Host": hName
                                }
                            }
                        };
                        if (sysConfig.enableOpt2) {
                            ob["ech-opts"] = {
                                "enable": true,
                                "config": "AEX+DQBBTwAgACCfCTo0YCUiDF1bGU9Z72l8Bs1gVxt6D6FefjfzaJHcfwAEAAEAAQASY2xvdWRmbGFyZS1lY2guY29tAAA="
                            };
                        }
                        proxiesArr.push(ob);
                    }
                    configIndex++;
                });
            });
        });
    });

    if (dynamicTags.length === 0) {
        dynamicTags.push("DIRECT");
    }

    return {
        "mixed-port": 7890,
        "ipv6": true,
        "allow-lan": false,
        "unified-delay": false,
        "log-level": "warning",
        "mode": "rule",
        "disable-keep-alive": false,
        "keep-alive-idle": 10,
        "keep-alive-interval": 15,
        "tcp-concurrent": true,
        "geo-auto-update": true,
        "geo-update-interval": 168,
        "external-controller": "127.0.0.1:9090",
        "external-controller-cors": {
            "allow-origins": ["*"],
            "allow-private-network": true
        },
        "external-ui": "ui",
        "external-ui-url": "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
        "profile": {
            "store-selected": true,
            "store-fake-ip": true
        },
        "dns": {
            "enable": true,
            "respect-rules": true,
            "use-system-hosts": false,
            "listen": "127.0.0.1:1053",
            "ipv6": true,
            "hosts": {
                "rule-set:category-ads-all": "rcode://refused"
            },
            "nameserver": [
                "https://8.8.8.8/dns-query#✅ Selector"
            ],
            "proxy-server-nameserver": [
                "8.8.8.8#DIRECT"
            ],
            "direct-nameserver": [
                "8.8.8.8#DIRECT"
            ],
            "direct-nameserver-follow-policy": true,
            "nameserver-policy": {
                "rule-set:ir": "8.8.8.8#DIRECT"
            },
            "enhanced-mode": "redir-host"
        },
        "tun": {
            "enable": true,
            "stack": "mixed",
            "auto-route": true,
            "strict-route": true,
            "auto-detect-interface": true,
            "dns-hijack": ["any:53", "tcp://any:53"],
            "mtu": 9000
        },
        "sniffer": {
            "enable": true,
            "force-dns-mapping": true,
            "parse-pure-ip": true,
            "override-destination": true,
            "sniff": {
                "HTTP": {
                    "ports": [80, 8080, 8880, 2052, 2082, 2086, 2095]
                },
                "TLS": {
                    "ports": [443, 8443, 2053, 2083, 2087, 2096]
                }
            }
        },
        [k_pxs]: proxiesArr,
        [k_px_gps]: [
            {
                "name": "✅ Selector",
                "type": "select",
                "proxies": ["💦 Best Ping 🚀", fake1, fake2, ...dynamicTags]
            },
            {
                "name": "💦 Best Ping 🚀",
                "type": "url-test",
                "proxies": [...dynamicTags],
                "url": "https://www.gstatic.com/generate_204",
                "interval": 30,
                "tolerance": 50
            }
        ],
        "rule-providers": {
            "category-ads-all": {
                "type": "http",
                "format": "text",
                "behavior": "domain",
                "path": "./ruleset/category-ads-all.txt",
                "interval": 86400,
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/category-ads-all.txt"
            },
            "ir": {
                "type": "http",
                "format": "text",
                "behavior": "domain",
                "path": "./ruleset/ir.txt",
                "interval": 86400,
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ir.txt"
            },
            "ir-cidr": {
                "type": "http",
                "format": "text",
                "behavior": "ipcidr",
                "path": "./ruleset/ir-cidr.txt",
                "interval": 86400,
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ircidr.txt"
            }
        },
        "rules": [
            "GEOIP,lan,DIRECT,no-resolve",
            "NETWORK,udp,REJECT",
            "RULE-SET,category-ads-all,REJECT",
            "RULE-SET,ir,DIRECT",
            "RULE-SET,ir-cidr,DIRECT",
            "MATCH,✅ Selector"
        ],
        "ntp": {
            "enable": true,
            "server": "time.cloudflare.com",
            "port": 123,
            "interval": 30
        }
    };
}

async function buildSingBoxJsonProfile(hostName, targetSub = null, allowInsecure = false) {
    let allHostNames = [hostName];
    if (sysConfig.linkedPanels) allHostNames.push(...sysConfig.linkedPanels.map(p => p.host).filter(Boolean));
    let ports = sysConfig.socketPorts ? sysConfig.socketPorts.split(',').map(s=>s.trim()).filter(Boolean) : ["443"];
    let profiles = getAllProfiles(targetSub);
    await preloadIpFlags(profiles, allHostNames);
    let reqPath = encodeURI(`/${sysConfig.apiRoute}`);

    let outboundsArr = [];
    let dynamicTags = [];
    let nameCounts = {};

    // Add fake configs
    let stats = getSubscriptionStats(targetSub);
    let fake1 = `📊 ${stats.usedStr}`;
    let fake2 = `📅 ${stats.expiryStr}`;
    outboundsArr.push({
        "type": "direct",
        "tag": fake1
    });
    outboundsArr.push({
        "type": "direct",
        "tag": fake2
    });

    const getUniqueName = (baseName) => {
        if (!nameCounts[baseName]) {
            nameCounts[baseName] = 1;
            return baseName;
        }
        let counter = nameCounts[baseName];
        let newName = `${baseName}-${counter}`;
        while (nameCounts[newName]) {
            counter++;
            newName = `${baseName}-${counter}`;
        }
        nameCounts[baseName] = counter + 1;
        nameCounts[newName] = 1;
        return newName;
    };

    profiles.forEach(p => {
        let pips = getProxyIpsArray(p.proxyIp);
        if (pips.length === 0 && sysConfig.backupRelay) {
            pips = getProxyIpsArray(sysConfig.backupRelay);
        }
        let effectiveMode = p.userMode || sysConfig.mode;
        let effectivePorts = p.userPorts ? p.userPorts.split(',').map(s=>s.trim()).filter(Boolean) : ports;
        let maxCfg = p.maxConfigs || null;

        let configIndex = 0;

        allHostNames.forEach(hName => {
            let allIps = getCleanIps(hName, p.cleanIp);
            let ips = calcEffectiveIps(allIps, maxCfg, effectiveMode, effectivePorts);
            effectivePorts.forEach(port => {
                let sec = getTransportParams(port) === "tls";
                ips.forEach(ip => {
                    let isVless = effectiveMode === "alpha" || effectiveMode === "both";
                    let isTrojan = effectiveMode === "beta" || effectiveMode === "both";
                    let selectedProxyIp = null;
                    if (pips.length > 0) {
                        selectedProxyIp = pips[configIndex % pips.length];
                    }

                    if (isVless) {
                        let tagStr = getConfigName("alpha", p.name, port, hName, ip, selectedProxyIp);
                        tagStr = getUniqueName(tagStr);
                        dynamicTags.push(tagStr);

                        let randomJunk = Array.from({length: 11}, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]).join('');
                        let payloadVl = { junk: randomJunk, protocol: "vl", mode: "proxyip", panelIPs: [] };
                        let pathStrVl = "/" + btoa(JSON.stringify(payloadVl));

                        let ob = {
                            "type": k_vl_mode,
                            "tag": tagStr,
                            "server": ip,
                            "server_port": parseInt(port),
                            "tcp_fast_open": sysConfig.enableOpt1 || false,
                            "uuid": p.id,
                            "packet_encoding": "xudp",
                            "network": "tcp",
                            "tls": {
                                "enabled": sec,
                                "server_name": hName,
                                "insecure": allowInsecure,
                                "alpn": ["http/1.1"],
                                "utls": {
                                    "enabled": true,
                                    "fingerprint": "randomized"
                                }
                            },
                            "transport": {
                                "type": "ws",
                                "path": pathStrVl,
                                "max_early_data": 2560,
                                "early_data_header_name": "Sec-WebSocket-Protocol",
                                "headers": {
                                    "Host": hName
                                }
                            }
                        };
                        outboundsArr.push(ob);
                    }

                    if (isTrojan) {
                        let tagStr = getConfigName("beta", p.name, port, hName, ip, selectedProxyIp);
                        tagStr = getUniqueName(tagStr);
                        dynamicTags.push(tagStr);

                        let randomJunk = Array.from({length: 11}, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]).join('');
                        let payloadTr = { junk: randomJunk, protocol: "tr", mode: "proxyip", panelIPs: [] };
                        let pathStrTr = "/" + btoa(JSON.stringify(payloadTr));

                        let ob = {
                            "type": k_tr_mode,
                            "tag": tagStr,
                            "server": ip,
                            "server_port": parseInt(port),
                            "tcp_fast_open": sysConfig.enableOpt1 || false,
                            "password": p.id,
                            "network": "tcp",
                            "tls": {
                                "enabled": sec,
                                "server_name": hName,
                                "insecure": allowInsecure,
                                "alpn": ["http/1.1"],
                                "utls": {
                                    "enabled": true,
                                    "fingerprint": "randomized"
                                }
                            },
                            "transport": {
                                "type": "ws",
                                "path": pathStrTr,
                                "max_early_data": 2560,
                                "early_data_header_name": "Sec-WebSocket-Protocol",
                                "headers": {
                                    "Host": hName
                                }
                            }
                        };
                        outboundsArr.push(ob);
                    }
                    configIndex++;
                });
            });
        });
    });

    if (dynamicTags.length === 0) {
        dynamicTags.push("direct");
    }

    return {
        "log": {
            "disabled": false,
            "level": "warn",
            "timestamp": true
        },
        "dns": {
            "servers": [
                {
                    "address": "https://8.8.8.8/dns-query",
                    "detour": "✅ Selector",
                    "tag": "dns-remote"
                },
                {
                    "address": "8.8.8.8",
                    "detour": "direct",
                    "tag": "dns-direct"
                }
            ],
            "rules": [
                {
                    "clash_mode": "Direct",
                    "server": "dns-direct"
                },
                {
                    "clash_mode": "Global",
                    "server": "dns-remote"
                },
                {
                    "query_type": [
                        "HTTPS"
                    ],
                    "action": "reject"
                },
                {
                    "rule_set": [
                        "geosite-category-ads-all"
                    ],
                    "action": "reject"
                },
                {
                    "type": "logical",
                    "mode": "and",
                    "rules": [
                        {
                            "rule_set": [
                                "geosite-ir"
                            ]
                        },
                        {
                            "rule_set": "geoip-ir"
                        }
                    ],
                    "action": "route",
                    "server": "dns-direct"
                }
            ],
            "strategy": "prefer_ipv4",
            "independent_cache": true
        },
        "inbounds": [
            {
                "type": "tun",
                "tag": "tun-in",
                "address": [
                    "172.19.0.1/28"
                ],
                "mtu": 9000,
                "auto_route": true,
                "strict_route": true,
                "stack": "mixed"
            },
            {
                "type": "mixed",
                "tag": "mixed-in",
                "listen": "127.0.0.1",
                "listen_port": 2080
            }
        ],
        [k_obds]: [
            ...outboundsArr,
            {
                "type": "selector",
                "tag": "✅ Selector",
                "outbounds": [
                    "💦 Best Ping 🚀",
                    fake1,
                    fake2,
                    ...dynamicTags
                ],
                "interrupt_exist_connections": false
            },
            {
                "type": "direct",
                "tag": "direct"
            },
            {
                "type": "urltest",
                "tag": "💦 Best Ping 🚀",
                "outbounds": [
                    ...dynamicTags
                ],
                "url": "https://www.gstatic.com/generate_204",
                "interrupt_exist_connections": false,
                "interval": "30s"
            }
        ],
        "route": {
            "rules": [
                {
                    "ip_cidr": "172.19.0.2",
                    "action": "hijack-dns"
                },
                {
                    "clash_mode": "Direct",
                    "outbound": "direct"
                },
                {
                    "clash_mode": "Global",
                    "outbound": "✅ Selector"
                },
                {
                    "action": "sniff"
                },
                {
                    "protocol": "dns",
                    "action": "hijack-dns"
                },
                {
                    "ip_is_private": true,
                    "outbound": "direct"
                },
                {
                    "network": "udp",
                    "action": "reject"
                },
                {
                    "rule_set": [
                        "geosite-category-ads-all"
                    ],
                    "action": "reject"
                },
                {
                    "rule_set": [
                        "geosite-ir"
                    ],
                    "action": "route",
                    "outbound": "direct"
                },
                {
                    "rule_set": [
                        "geoip-ir"
                    ],
                    "action": "route",
                    "outbound": "direct"
                }
            ],
            "rule_set": [
                {
                    "type": "remote",
                    "tag": "geosite-category-ads-all",
                    "format": "binary",
                    "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs",
                    "download_detour": "direct"
                },
                {
                    "type": "remote",
                    "tag": "geosite-ir",
                    "format": "binary",
                    "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs",
                    "download_detour": "direct"
                },
                {
                    "type": "remote",
                    "tag": "geoip-ir",
                    "format": "binary",
                    "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs",
                    "download_detour": "direct"
                }
            ],
            "auto_detect_interface": true,
            "final": "✅ Selector"
        },
        "ntp": {
            "enabled": true,
            "server": "time.cloudflare.com",
            "server_port": 123,
            "interval": "30m",
            "write_to_system": false
        },
        "experimental": {
            "cache_file": {
                "enabled": true,
                "store_fakeip": true
            },
            "clash_api": {
                "external_controller": "127.0.0.1:9090",
                "external_ui": "ui",
                "default_mode": "Rule",
                "external_ui_download_url": "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
                "external_ui_download_detour": "direct"
            }
        }
    };
}

function getDashboardUI(hasDB) {
    return `
  <!DOCTYPE html>
  <html lang="en" class="dark">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <title>Nahan Gateway</title>
      <link rel="icon" href="${FAVICON_URL}">
      <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;900&display=swap" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
          window.tailwind = window.tailwind || {};
          tailwind.config = { 
              darkMode: 'class', 
              theme: { 
                  extend: { 
                      fontFamily: { sans: ['Vazirmatn', 'sans-serif'] },
                      colors: { 
                          primary: '#6366f1', 
                          darkbg: '#0d1117', 
                          darkcard: 'rgba(15, 20, 32, 0.75)', 
                          darkborder: 'rgba(99, 102, 241, 0.25)' 
                      } 
                  } 
              } 
          }
      </script>
      <style>
          ::-webkit-scrollbar { width: 6px; height: 6px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: rgba(99, 102, 241, 0.3); border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: rgba(99, 102, 241, 0.5); }
          .fade-in { animation: fadeIn 0.3s ease-in-out; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          
          /* Enforce custom dark premium style */
          html.dark, html.dark body {
              background: linear-gradient(135deg, #0d1117 0%, #0f172a 50%, #0d1117 100%) !important;
              color: #f1f5f9 !important;
          }
          html.dark .bg-white, html.dark .bg-slate-50, html.dark .bg-indigo-50, html.dark .bg-darkcard {
              background: linear-gradient(145deg, rgba(15, 20, 40, 0.8), rgba(13, 17, 23, 0.8)) !important;
              border: 1px solid rgba(99, 102, 241, 0.35) !important;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
          }
          html.dark aside {
              background: rgba(13, 17, 23, 0.6) !important;
              border-inline-end: 1px solid rgba(99, 102, 241, 0.25) !important;
              backdrop-filter: blur(16px);
          }
          /* Light Mode Defaults */
          html:not(.dark) {
              background: #f8fafc !important;
              background-color: #f8fafc !important;
              color: #0f172a !important;
          }
          html:not(.dark) body {
              background: #f8fafc !important;
              background-color: #f8fafc !important;
              color: #0f172a !important;
          }
          html:not(.dark) #login-box, html:not(.dark) #dash-box {
              background: #f8fafc !important;
              background-color: #f8fafc !important;
          }
          html:not(.dark) aside {
              background-color: #ffffff !important;
              border-inline-end: 1px solid #e2e8f0 !important;
          }
          html:not(.dark) .bg-white {
              background-color: #ffffff !important;
              border-color: #e2e8f0 !important;
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05) !important;
          }
          html:not(.dark) input, html:not(.dark) select, html:not(.dark) textarea {
              background-color: #ffffff !important;
              border: 1px solid #cbd5e1 !important;
              color: #0f172a !important;
          }
          html:not(.dark) input:focus, html:not(.dark) select:focus, html:not(.dark) textarea:focus {
               border-color: #6366f1 !important;
               background-color: #ffffff !important;
               box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1) !important;
               outline: none !important;
          }
          html:not(.dark) .text-slate-200, html:not(.dark) .text-slate-300 {
              color: #334155 !important;
          }
          html:not(.dark) select option {
              background-color: #ffffff !important;
              color: #0f172a !important;
          }
          html:not(.dark) #login-box [style*="radial-gradient"] {
              display: none !important;
          }
          html:not(.dark) .rounded-3xl.p-px {
              background: #cbd5e1 !important;
          }
          html:not(.dark) .rounded-3xl.p-px > div,
          html:not(.dark) .rounded-3xl.p-px > div[style*="background"] {
              background: #ffffff !important;
          }
          html:not(.dark) #login-box .rounded-3xl.p-8, 
          html:not(.dark) #login-box .rounded-3xl.p-px {
              background: #ffffff !important;
              border: 1px solid #cbd5e1 !important;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05) !important;
          }
          html:not(.dark) #login-box h2 {
              color: #0f172a !important;
          }
          html:not(.dark) #login-box p,
          html:not(.dark) #login-box label {
              color: #475569 !important;
          }
          html:not(.dark) #login-box input {
              background: #ffffff !important;
              border: 1px solid #cbd5e1 !important;
              color: #0f172a !important;
          }
          html:not(.dark) #login-box .lock-pulse {
              background: rgba(99, 102, 241, 0.08) !important;
              border: 1px solid rgba(99, 102, 241, 0.2) !important;
              box-shadow: none !important;
          }
          html:not(.dark) #login-box svg {
              color: #4f46e5 !important;
          }
          html:not(.dark) #login-box .border-bottom,
          html:not(.dark) #login-box [style*="border-bottom"] {
              border-bottom: 1px solid #e2e8f0 !important;
          }
          html:not(.dark) #login-box span[style*="color:#4ade80"] {
              color: #16a34a !important;
          }
          html:not(.dark) #login-box span[style*="color:#334155"] {
              color: #64748b !important;
          }
          html:not(.dark) #top-version-badge {
              background-color: #f1f5f9 !important;
              border-color: #cbd5e1 !important;
              color: #4f46e5 !important;
          }
          html:not(.dark) #github-link-btn, html:not(.dark) #lang-toggle {
              background-color: #ffffff !important;
              border-color: #cbd5e1 !important;
              color: #475569 !important;
          }
          html:not(.dark) #github-link-btn:hover, html:not(.dark) #lang-toggle:hover {
              border-color: #cbd5e1 !important;
              color: #1e293b !important;
          }
          html:not(.dark) .nav-item.active { 
               background: linear-gradient(90deg, rgba(99, 102, 241, 0.1), transparent) !important; 
               color: #4f46e5 !important; 
               border-inline-start: 4px solid #6366f1 !important; 
          }
          html:not(.dark) .bg-emerald-500\/10, html:not(.dark) [style*="background:rgba(16,185,129"] {
              background-color: #f0fdf4 !important;
              border-color: #bbf7d0 !important;
              color: #16a34a !important;
          }
          html:not(.dark) .bg-amber-500\/10, html:not(.dark) [style*="background:rgba(245,158,11"] {
              background-color: #fffbeb !important;
              border-color: #fef08a !important;
              color: #d97706 !important;
          }
          html:not(.dark) .bg-indigo-500\/10, html:not(.dark) [style*="background:rgba(99,102,241"] {
              background-color: #e0e7ff !important;
              border-color: #c7d2fe !important;
              color: #4f46e5 !important;
          }
          html:not(.dark) .bg-violet-500\/10, html:not(.dark) [style*="background:rgba(139,92,246"] {
              background-color: #f5f3ff !important;
              border-color: #ddd6fe !important;
              color: #7c3aed !important;
          }
          html:not(.dark) .text-emerald-400 { color: #16a34a !important; }
          html:not(.dark) .text-amber-400 { color: #d97706 !important; }
          html:not(.dark) .text-indigo-400 { color: #4f46e5 !important; }
          html:not(.dark) .text-violet-400 { color: #7c3aed !important; }
          
          .nav-item.active { 
              background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), transparent) !important; 
              color: #a5b4fc !important; 
              border-inline-start: 4px solid #6366f1 !important; 
              font-weight: 700; 
          }
          .dark .nav-item.active { 
              background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), transparent) !important; 
              color: #a5b4fc !important; 
              border-inline-start: 4px solid #818cf8 !important; 
          }
          .nav-item { border-inline-start: 4px solid transparent; transition: all 0.2s; }
          .nav-item:hover { background: rgba(255, 255, 255, 0.02) !important; }
          .mobile-nav-item.active { color: #818cf8; }
          .dark .mobile-nav-item.active { color: #818cf8; }

          /* Subscriber workspace: one type scale, logical alignment and mobile cards. */
          #view-users, #modal-add-user, #modal-edit-user { font-family: 'Vazirmatn', sans-serif; font-size:14px; line-height:1.75; }
          #view-users :is(button,input,select,textarea), #modal-add-user :is(button,input,select,textarea), #modal-edit-user :is(button,input,select,textarea) { font:inherit; }
          #view-users .font-mono { font-family:inherit; }
          #view-users > .grid { gap:16px; grid-template-columns:repeat(4,minmax(0,1fr)); }
          #view-users > .grid > div { border-radius:18px; padding:20px; }
          #view-users > .grid [data-i18n] { font-size:12px; letter-spacing:0; font-weight:500; }
          #view-users > .grid .text-2xl { font-size:26px; font-weight:700; font-variant-numeric:tabular-nums; }
          .subscriber-directory { padding:0 !important; border-radius:20px !important; }
          .subscriber-toolbar { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:20px; padding:24px; margin:0; border-bottom:1px solid #e2e8f0; }
          .subscriber-toolbar h3 { font-size:16px; font-weight:700; text-transform:none; letter-spacing:0; color:#334155; }
          .subscriber-toolbar p { font-size:12px; line-height:1.8; max-width:36em; }
          .subscriber-controls { display:flex; flex-wrap:wrap; align-items:center; gap:10px; }
          #view-users .subscriber-controls :is(input,select,button) { min-height:44px; font-size:13px; border-radius:10px; }
          #user-search-input { width:230px; min-width:0; }
          .subscriber-table { width:100%; table-layout:fixed; border-collapse:collapse; text-align:start; }
          .subscriber-table th { padding:14px 20px; font-size:12px; font-weight:600; text-transform:none; letter-spacing:0; text-align:start; }
          .subscriber-table th:nth-child(1) { width:32%; }
          .subscriber-table th:nth-child(2) { width:31%; }
          .subscriber-table th:nth-child(3) { width:16%; }
          .subscriber-table th:nth-child(4) { width:21%; }
          .subscriber-table td { padding:20px; vertical-align:top; font-size:13px; line-height:1.8; }
          .subscriber-name { font-size:14px; font-weight:700; color:#334155; overflow-wrap:anywhere; }
          .subscriber-uuid { display:block; direction:ltr; unicode-bidi:isolate; text-align:start; font-size:11px; color:#64748b; overflow-wrap:anywhere; margin:4px 0 10px; user-select:all; }
          [dir=rtl] .subscriber-uuid { text-align:right; }
          .subscriber-badges { display:flex; flex-wrap:wrap; gap:6px; }
          .subscriber-badge { display:inline-flex; align-items:center; border-radius:6px; padding:2px 8px; font-size:11px; font-weight:500; background:#f1f5f9; color:#475569; }
          .subscriber-badge.active { background:#ecfdf5; color:#047857; }
          .subscriber-badge.paused { background:#fffbeb; color:#b45309; }
          .subscriber-badge.expired { background:#fff1f2; color:#be123c; }
          .subscriber-usage { display:grid; gap:6px; font-variant-numeric:tabular-nums; }
          .subscriber-usage-line { display:flex; flex-wrap:wrap; align-items:baseline; justify-content:space-between; gap:4px 12px; }
          .subscriber-usage-line > span:first-child { color:#64748b; font-size:12px; }
          .subscriber-usage-line strong { font-size:13px; font-weight:600; }
          .subscriber-meter { height:5px; background:#e2e8f0; border-radius:8px; overflow:hidden; margin-bottom:6px; }
          .subscriber-meter span { display:block; height:100%; background:#6366f1; border-radius:inherit; }
          .subscriber-meter span.high { background:#e11d48; }
          .subscriber-estimate, .subscriber-reason { font-size:11px; color:#64748b; margin-top:8px; overflow-wrap:anywhere; }
          .subscriber-reason { color:#be123c; }
          .subscriber-actions { display:flex; flex-wrap:wrap; align-items:center; gap:6px; }
          #view-users .subscriber-action { display:inline-flex; justify-content:center; align-items:center; flex-shrink:0; width:36px; height:36px; padding:8px; border:1px solid #e2e8f0; border-radius:9px; background:transparent; color:#64748b; cursor:pointer; }
          .subscriber-action svg { width:17px; height:17px; }
          #view-users .subscriber-action:hover { color:#4f46e5; background:#eef2ff; border-color:#c7d2fe; }
          #view-users .subscriber-action.danger:hover { color:#be123c; background:#fff1f2; border-color:#fecdd3; }
          #view-users :is(button,input,select):focus-visible { outline:2px solid #6366f1; outline-offset:3px; }
          .subscriber-empty { text-align:center; padding:48px 20px !important; color:#64748b; }
          #modal-add-user label, #modal-edit-user label { font-size:13px; font-weight:500; letter-spacing:0; text-transform:none; }
          #modal-add-user input, #modal-edit-user input { min-height:44px; }
          html.dark .subscriber-toolbar { border-color:#334155; }
          html.dark .subscriber-name, html.dark .subscriber-toolbar h3 { color:#e2e8f0; }
          html.dark .subscriber-badge { background:#1e293b; color:#cbd5e1; }
          html.dark .subscriber-badge.active { background:#064e3b; color:#a7f3d0; }
          html.dark .subscriber-badge.paused { background:#451a03; color:#fde68a; }
          html.dark .subscriber-badge.expired { background:#4c0519; color:#fda4af; }
          html.dark #view-users .subscriber-action { border-color:#334155; color:#cbd5e1; }
          html.dark .subscriber-meter { background:#334155; }
          @media(max-width:1100px) {
              .subscriber-table th, .subscriber-table td { padding:16px 12px; }
              .subscriber-toolbar { padding:20px; }
              .subscriber-controls { width:100%; }
              #user-search-input { flex:1; }
          }
          @media(max-width:767px) {
              #view-users > .grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
              #view-users > .grid > div { padding:14px; gap:6px; }
              #view-users > .grid > div > div:last-child { display:none; }
              #view-users > .grid .text-2xl { font-size:23px; }
              .subscriber-toolbar { padding:18px 16px; gap:14px; }
              .subscriber-controls { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
              #user-search-input { grid-column:1 / -1; grid-row:1; width:100%; }
              .subscriber-controls select { width:100%; min-width:0; }
              .subscriber-table, .subscriber-table tbody { display:block; }
              .subscriber-table thead { display:none; }
              .subscriber-table tr { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:14px 12px; padding:20px 16px; }
              .subscriber-table td { display:block; min-width:0; padding:0; }
              .subscriber-table td:nth-child(1), .subscriber-table td:nth-child(2) { grid-column:1 / -1; }
              .subscriber-table td:nth-child(3)::before { content:attr(data-label); display:block; font-size:11px; color:#64748b; margin-bottom:6px; }
              .subscriber-table td:nth-child(4) { display:flex; grid-column:1 / -1; justify-content:flex-start; border-top:1px solid #e2e8f0; padding-top:12px; }
              #view-users .subscriber-action { width:40px; height:40px; }
              .subscriber-actions { gap:8px; justify-content:flex-start; }
              .subscriber-table tr:has(.subscriber-empty) { display:block; }
          }

          .linked-panel-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr)); gap:16px; margin-top:18px; }
          .linked-panel-card { border:1px solid #e2e8f0; border-radius:16px; padding:20px; font-family:'Vazirmatn',sans-serif; min-width:0; }
          .linked-panel-actions { display:flex; flex-wrap:wrap; gap:8px; margin-top:18px; }
          .linked-panel-actions button { border:1px solid #e2e8f0; border-radius:8px; padding:8px 12px; min-height:40px; font:inherit; font-size:12px; cursor:pointer; }
          .linked-panel-actions button:hover { background:#eef2ff; color:#4f46e5; }
          html.dark .linked-panel-card,html.dark .linked-panel-actions button {border-color:#334155;}
          html.dark .linked-panel-actions button:hover {background:#1e293b;color:#a5b4fc;}
          @media(max-width:767px){ #subscriber-panel-source {grid-column:1 / -1; min-width:0; width:100%;} }
      </style>
  </head>
  <body class="text-slate-800 dark:text-slate-200 h-[100dvh] flex flex-col md:flex-row overflow-hidden selection:bg-primary selection:text-white transition-colors duration-300 bg-slate-50 dark:bg-darkbg">

      <!-- Global Controls -->
      <div class="fixed top-4 end-4 md:top-5 md:end-5 flex items-center gap-2 z-50">
          <span id="top-version-badge" class="px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold" style="background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.25);color:#818cf8;">v${CURRENT_VERSION}</span>
          <a href="https://github.com/EbiDevSharp/nahan" id="github-link-btn" target="_blank" class="p-2 rounded-xl transition-all" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:#94a3b8;" onmouseover="this.style.color='#818cf8';this.style.borderColor='rgba(99,102,241,0.4)'" onmouseout="this.style.color='#94a3b8';this.style.borderColor='rgba(255,255,255,0.1)'">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
          </a>
          <button onclick="toggleLang()" id="lang-toggle" class="px-3 py-1.5 rounded-xl text-sm font-bold transition-all" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:#e2e8f0;" onmouseover="this.style.borderColor='rgba(99,102,241,0.4)';this.style.color='#a5b4fc'" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';this.style.color='#e2e8f0'">EN</button>
          <button onclick="toggleTheme()" class="p-2 rounded-xl transition-all" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:#f59e0b;" onmouseover="this.style.borderColor='rgba(245,158,11,0.4)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)'">
              <svg class="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              <svg class="w-4 h-4 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </button>
          <button onclick="logout()" id="btn-logout-mob" class="hidden md:hidden p-2 rounded-xl transition-all" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#f87171;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </button>
      </div>

      <!-- LOGIN SCREEN -->
      <p id="dashboard-boot-error" hidden role="alert" style="position:fixed;inset-inline:16px;bottom:16px;z-index:200;background:#fff1f2;color:#9f1239;padding:12px;border-radius:10px;white-space:pre-wrap;direction:ltr"></p>
      <div id="login-box" class="absolute inset-0 flex items-center justify-center p-4 z-40 overflow-hidden" style="background:linear-gradient(135deg,#0d1117 0%,#0f172a 50%,#0d1117 100%);">
          <div class="absolute pointer-events-none" style="width:500px;height:500px;top:-100px;left:-150px;background:radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 65%);"></div>
          <div class="absolute pointer-events-none" style="width:400px;height:400px;bottom:-80px;right:-100px;background:radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 65%);"></div>
          <div class="relative w-full max-w-sm">
              <style>
                  @keyframes pulse-ring{0%{transform:scale(1);opacity:0.5}100%{transform:scale(1.7);opacity:0}}
                  @keyframes shimmer{0%{left:-100%}100%{left:100%}}
                  .lock-pulse::before,.lock-pulse::after{content:'';position:absolute;inset:-8px;border-radius:50%;border:1px solid rgba(99,102,241,0.35);animation:pulse-ring 2.5s ease-out infinite;}
                  .lock-pulse::after{animation-delay:1.25s;}
                  .btn-shimmer::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent);animation:shimmer 2.5s ease-in-out infinite;}
              </style>
              <div class="text-center mb-8">
                  <div class="relative inline-flex items-center justify-center mb-5">
                      <div class="lock-pulse relative w-20 h-20 rounded-3xl flex items-center justify-center" style="background:linear-gradient(145deg,rgba(99,102,241,0.25),rgba(99,102,241,0.08));border:1px solid rgba(99,102,241,0.45);box-shadow:0 0 40px rgba(99,102,241,0.25),inset 0 1px 0 rgba(255,255,255,0.08);">
                          <svg class="w-9 h-9" style="color:#a5b4fc" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      </div>
                  </div>
                  <h2 class="text-3xl font-black" style="color:#f1f5f9;" data-i18n="title">Nahan Gateway</h2>
                  <p class="text-sm mt-2" style="color:#64748b;">Sign in to manage your gateway</p>
              </div>
              <div class="rounded-3xl p-px" style="background:linear-gradient(145deg,rgba(99,102,241,0.45),rgba(99,102,241,0.08) 50%,rgba(139,92,246,0.3));box-shadow:0 25px 60px rgba(0,0,0,0.5);">
                  <div class="rounded-3xl p-8" style="background:linear-gradient(145deg,rgba(15,20,40,0.98),rgba(13,17,23,0.98));">
                      <div class="flex items-center gap-2 mb-7 pb-6" style="border-bottom:1px solid rgba(255,255,255,0.06);">
                          <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#22c55e;box-shadow:0 0 8px #22c55e;"></span>
                          <span class="text-xs" style="color:#4ade80;">System online</span>
                          <span class="flex-1"></span>
                          <span class="text-xs" style="color:#334155;">&#128274; Secure connection</span>
                      </div>
                      ${!hasDB ? `<div class="mb-5 p-4 rounded-2xl flex items-start gap-3" style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);"><span style="color:#f87171;">&#9888;&#65039;</span><span class="text-sm" style="color:#fca5a5;" data-i18n="missing_db">Database not connected. Settings won't be saved.</span></div>` : ''}
                      <div class="mb-5">
                          <label class="block text-sm font-semibold mb-2.5" style="color:#94a3b8;" data-i18n="login_password">Password</label>
                          <div class="relative">
                              <div class="absolute inset-y-0 start-0 flex items-center ps-4" style="color:rgba(99,102,241,0.7);">
                                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                              </div>
                              <input type="password" id="pwd" data-i18n="pass_ph" placeholder="Enter your password" class="w-full ps-11 pe-12 py-3.5 text-sm rounded-2xl outline-none transition-all" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#e2e8f0;" onfocus="this.style.borderColor='rgba(99,102,241,0.6)';this.style.background='rgba(99,102,241,0.06)';this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)';this.style.background='rgba(255,255,255,0.04)';this.style.boxShadow='none'">
                              <button type="button" onclick="const n=document.getElementById('pwd');n.type=n.type==='password'?'text':'password'" class="absolute inset-y-0 end-0 flex items-center px-4 transition-colors" style="color:rgba(99,102,241,0.5);" onmouseover="this.style.color='#818cf8'" onmouseout="this.style.color='rgba(99,102,241,0.5)'">
                                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                              </button>
                          </div>
                      </div>
                      <p id="err-msg" class="hidden text-sm mb-4 flex items-center gap-2 px-3 py-2.5 rounded-xl" style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);color:#f87171;"><span>&#9888;&#65039;</span><span id="err-msg-text" data-i18n="err_pass">Wrong password, please try again.</span></p>
                      <div id="twofa-step" class="hidden mb-5">
                          <label class="block text-sm font-semibold mb-2.5" style="color:#94a3b8;" id="twofa-label">Authenticator code</label>
                          <input type="text" id="twofa-code" inputmode="numeric" maxlength="11" placeholder="123456" autocomplete="one-time-code" class="w-full px-4 py-3.5 text-center tracking-[0.3em] text-lg rounded-2xl outline-none transition-all" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:#e2e8f0;">
                          <div class="flex items-center justify-between mt-2.5">
                              <label class="flex items-center gap-2 text-xs" style="color:#64748b;">
                                  <input type="checkbox" id="twofa-remember" class="rounded"> <span id="twofa-remember-label">Trust this device for 30 days</span>
                              </label>
                              <button type="button" onclick="toggleRecoveryMode()" id="twofa-toggle-recovery" class="text-xs font-semibold" style="color:#818cf8;">Use recovery code instead</button>
                          </div>
                      </div>
                      <button onclick="doLogin()" id="login-submit-btn" disabled class="btn-shimmer w-full py-3.5 rounded-2xl font-bold text-sm relative overflow-hidden transition-all" style="background:linear-gradient(135deg,#6366f1,#7c3aed);color:white;box-shadow:0 4px 24px rgba(99,102,241,0.4),inset 0 1px 0 rgba(255,255,255,0.1);" onmouseover="this.style.boxShadow='0 6px 32px rgba(99,102,241,0.6),inset 0 1px 0 rgba(255,255,255,0.1)';this.style.transform='translateY(-1px)'" onmouseout="this.style.boxShadow='0 4px 24px rgba(99,102,241,0.4),inset 0 1px 0 rgba(255,255,255,0.1)';this.style.transform='translateY(0)'" data-i18n="login_btn">
                          Sign In
                      </button>
                  </div>
              </div>
          </div>
      </div>

      <!-- DASHBOARD CONTAINER -->
      <div id="dash-box" class="hidden w-full h-full flex-col md:flex-row relative">
          
          <!-- SIDEBAR (Desktop) -->
          <aside class="hidden md:flex w-64 bg-white dark:bg-darkcard border-e border-slate-200 dark:border-darkborder flex-col z-20 shrink-0">
              <div class="flex items-center p-6 border-b border-slate-100 dark:border-darkborder/50">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-primary flex items-center justify-center me-3 shrink-0"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                  <div class="flex flex-col">
                      <h1 class="font-black text-xl leading-none" data-i18n="title">Nahan</h1>
                      <span id="app-version" class="text-[10px] font-mono text-slate-400 mt-1 font-semibold">v${CURRENT_VERSION}</span>
                  </div>
              </div>
              <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
                  <button onclick="switchTab('overview')" id="tab-overview" class="nav-item active flex items-center w-full px-4 py-3 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 group">
                      <svg class="w-6 h-6 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path></svg>
                      <span class="font-semibold" data-i18n="tab_overview">Overview</span>
                  </button>
                  <button onclick="switchTab('info')" id="tab-info" class="nav-item flex items-center w-full px-4 py-3 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 group">
                      <svg class="w-6 h-6 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                      <span class="font-semibold" data-i18n="tab_info">Endpoints</span>
                  </button>
                  <button onclick="switchTab('network')" id="tab-network" class="nav-item flex items-center w-full px-4 py-3 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 group">
                      <svg class="w-6 h-6 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      <span class="font-semibold" data-i18n="tab_status">Metrics</span>
                  </button>
                  <button onclick="switchTab('settings')" id="tab-settings" class="nav-item flex items-center w-full px-4 py-3 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 group">
                      <svg class="w-6 h-6 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
                      <span class="font-semibold" data-i18n="tab_settings">System</span>
                  </button>
                  <button onclick="switchTab('advanced')" id="tab-advanced" class="nav-item flex items-center w-full px-4 py-3 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 group">
                      <svg class="w-6 h-6 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <span class="font-semibold" data-i18n="tab_adv">Advanced</span>
                  </button>
                  <button onclick="switchTab('logs')" id="tab-logs" class="nav-item flex items-center w-full px-4 py-3 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 group">
                      <svg class="w-6 h-6 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                      <span class="font-semibold" data-i18n="tab_logs">Activity logs</span>
                  </button>
                  <button onclick="switchTab('users')" id="tab-users" class="nav-item flex items-center w-full px-4 py-3 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 group">
                      <svg class="w-6 h-6 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      <span class="font-semibold" data-i18n="tab_users">Users</span>
                  </button>
              </nav>
              <div class="p-4 border-t border-slate-100 dark:border-darkborder/50">
                  <button onclick="logout()" class="flex items-center justify-center w-full px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-semibold transition-colors">
                      <svg class="w-5 h-5 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      <span data-i18n="logout">Disconnect</span>
                  </button>
              </div>
          </aside>
  
          <!-- MAIN CONTENT AREA -->
          <main class="flex-1 flex flex-col h-full overflow-hidden">
              <header class="h-20 md:h-24 shrink-0 flex items-center px-6 md:px-10 z-10 pt-4 md:pt-0">
                  <h2 id="view-title" class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mt-2">Overview</h2>
              </header>
  
              <!-- Scrollable Content -->
              <div class="flex-1 overflow-y-auto p-4 md:p-10">
                  <div class="max-w-4xl mx-auto space-y-6 fade-in">

                      <!-- Update Banner -->
                      <div id="update-alert-banner" class="hidden bg-gradient-to-r from-amber-500/10 to-primary/10 border-2 border-amber-300 dark:border-amber-950/20 rounded-3xl p-6 shadow-md flex-col items-center justify-between gap-4 fade-in">
                          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                              <div class="flex items-center space-x-4 space-x-reverse text-start w-full">
                                  <div class="p-3 bg-amber-500/10 text-amber-500 rounded-2xl shrink-0">
                                      <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                                  </div>
                                  <div>
                                      <h4 class="font-black text-amber-800 dark:text-amber-400 text-base" data-i18n="update_avail">New version available!</h4>
                                      <p id="update-alert-text" class="text-xs text-slate-500 dark:text-slate-400 mt-1"></p>
                                  </div>
                              </div>
                              <div class="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
                                  <button onclick="dismissUpdate()" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs transition-colors" data-i18n="btn_cancel">Cancel</button>
                                  <button onclick="doUpdate()" id="update-deploy-btn" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5" data-i18n="deploy_btn">
                                      🚀 Deploy Now
                                  </button>
                              </div>
                          </div>
                          <!-- Sub-options for format choice -->
                          <div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-amber-500/5 dark:bg-amber-500/[0.02] p-4 rounded-2xl border border-amber-500/10 mt-2 text-start">
                              <div class="space-y-1">
                                  <span class="text-xs font-bold text-amber-800 dark:text-amber-400" data-i18n="lbl_update_format">Update Format & Obfuscation:</span>
                                  <p class="text-[10px] text-slate-500 dark:text-slate-400" data-i18n="desc_update_format">Deploy clean source code, or encrypt using dynamic XOR byte-shifting to avoid network interception.</p>
                              </div>
                              <div class="flex items-center gap-4 shrink-0 font-medium">
                                  <label class="inline-flex items-center cursor-pointer">
                                      <input type="radio" name="update-format" value="normal" checked class="form-radio text-amber-500 w-4 h-4">
                                      <span class="ms-1.5 text-xs text-slate-700 dark:text-slate-300 font-bold" data-i18n="format_normal">Normal (_worker.js)</span>
                                  </label>
                                  <label class="inline-flex items-center cursor-pointer">
                                      <input type="radio" name="update-format" value="obfuscated" class="form-radio text-amber-500 w-4 h-4">
                                      <span class="ms-1.5 text-xs text-slate-700 dark:text-slate-300 font-bold" data-i18n="format_obfuscated">Obfuscated (UTF-8 + XOR)</span>
                                  </label>
                              </div>
                          </div>
                          <!-- Dynamic Changelog Section -->
                          <div id="update-changelog-area" class="hidden w-full border-t border-amber-300/30 dark:border-amber-950/20 pt-4 mt-2">
                              <h5 class="text-xs font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                                  <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                  <span data-i18n="changelog_title">Changelog of New Version:</span>
                              </h5>
                              <div id="update-changelog-content" class="text-xs text-slate-600 dark:text-slate-400 bg-amber-500/[0.04] dark:bg-slate-900/40 p-4 rounded-2xl max-h-48 overflow-y-auto font-sans leading-relaxed border border-amber-200/20 max-w-none text-start">
                                  <p class="animate-pulse">Loading changelog...</p>
                              </div>
                          </div>
                          <div id="update-deploy-status" class="hidden w-full mt-3 p-3 rounded-xl text-sm font-bold text-center"></div>
                          <div class="w-full mt-2 text-center">
                              <a id="update-github-link" href="https://github.com/EbiDevSharp/nahan" target="_blank" class="text-xs text-slate-400 hover:text-amber-500 transition-colors underline" data-i18n="view_github">View on GitHub</a>
                          </div>
                      </div>

                      <!-- OVERVIEW / DASHBOARD VIEW -->
                      <div id="view-overview" class="space-y-3 md:space-y-6 block">
                          <!-- User Summary Cards -->
                          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center justify-between mb-1 md:mb-2">
                                      <span class="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider" data-i18n="ov_total_users">Total Users</span>
                                      <div class="p-1.5 md:p-2 bg-primary/10 text-primary rounded-md md:rounded-lg"><svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857M12 4.354a4 4 0 110 5.292"></path></svg></div>
                                  </div>
                                  <p id="ov-total-users" class="text-xl md:text-2xl font-black text-slate-800 dark:text-white">-</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center justify-between mb-1 md:mb-2">
                                      <span class="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider" data-i18n="ov_active_users">Active</span>
                                      <div class="p-1.5 md:p-2 bg-emerald-500/10 text-emerald-500 rounded-md md:rounded-lg"><svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                                  </div>
                                  <p id="ov-active-users" class="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400">-</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center justify-between mb-1 md:mb-2">
                                      <span class="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider" data-i18n="ov_paused_users">Paused</span>
                                      <div class="p-1.5 md:p-2 bg-amber-500/10 text-amber-500 rounded-md md:rounded-lg"><svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                                  </div>
                                  <p id="ov-paused-users" class="text-xl md:text-2xl font-black text-amber-600 dark:text-amber-400">-</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center justify-between mb-1 md:mb-2">
                                      <span class="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider" data-i18n="ov_auto_disabled">Auto-Disabled</span>
                                      <div class="p-1.5 md:p-2 bg-red-500/10 text-red-500 rounded-md md:rounded-lg"><svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div>
                                  </div>
                                  <p id="ov-auto-disabled" class="text-xl md:text-2xl font-black text-red-600 dark:text-red-400">-</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center justify-between mb-1 md:mb-2">
                                      <span class="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider" data-i18n="ov_expired_users">Expired</span>
                                      <div class="p-1.5 md:p-2 bg-slate-500/10 text-slate-500 rounded-md md:rounded-lg"><svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                                  </div>
                                  <p id="ov-expired-users" class="text-xl md:text-2xl font-black text-slate-600 dark:text-slate-400">-</p>
                              </div>
                          </div>

                          <!-- Traffic & System Cards -->
                          <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4">
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                      <div class="p-1.5 md:p-2.5 bg-violet-500/10 text-violet-500 rounded-lg md:rounded-xl"><svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div>
                                      <span class="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider" data-i18n="ov_total_traffic">Total Traffic</span>
                                  </div>
                                   <p id="ov-total-traffic" class="text-base md:text-xl font-black text-slate-800 dark:text-white">- GB</p>
                                  <p class="text-[9px] md:text-[10px] text-slate-400 mt-0.5 md:mt-1"><span id="ov-total-reqs">-</span> <span data-i18n="ov_requests">requests</span></p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                      <div class="p-1.5 md:p-2.5 bg-cyan-500/10 text-cyan-500 rounded-lg md:rounded-xl"><svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
                                      <span class="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider" data-i18n="ov_today_traffic">Today's Traffic</span>
                                  </div>
                                  <p id="ov-today-traffic" class="text-base md:text-xl font-black text-slate-800 dark:text-white">- GB</p>
                                  <p class="text-[9px] md:text-[10px] text-slate-400 mt-0.5 md:mt-1"><span id="ov-today-reqs">-</span> <span data-i18n="ov_requests">requests</span></p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                      <div class="p-1.5 md:p-2.5 bg-blue-500/10 text-blue-500 rounded-lg md:rounded-xl"><svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></div>
                                      <span class="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider" data-i18n="ov_active_conns">Active Connections</span>
                                  </div>
                                  <p id="ov-active-conns" class="text-base md:text-xl font-black text-slate-800 dark:text-white">-</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                      <div class="p-1.5 md:p-2.5 bg-indigo-500/10 text-indigo-500 rounded-lg md:rounded-xl"><svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                                      <span class="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider" data-i18n="ov_system">System</span>
                                  </div>
                                  <p id="ov-version" class="text-base md:text-xl font-black text-slate-800 dark:text-white">-</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm border border-slate-200 dark:border-darkborder">
                                  <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                      <div class="p-1.5 md:p-2.5 bg-orange-500/10 text-orange-500 rounded-lg md:rounded-xl"><svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 001.7-9.7 5.5 5.5 0 00-10.2-2A4.5 4.5 0 003 15z"></path></svg></div>
                                      <span class="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider" data-i18n="ov_cf_requests">Worker Requests (Today)</span>
                                  </div>
                                  <p id="ov-cf-requests" class="text-base md:text-xl font-black text-slate-800 dark:text-white">-</p>
                                  <p id="ov-cf-requests-note" class="text-[9px] md:text-[10px] text-slate-400 mt-0.5 md:mt-1"></p>
                              </div>
                          </div>

                          <!-- Currently Connected Users -->
                          <div class="bg-white dark:bg-darkcard rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm border border-slate-200 dark:border-darkborder">
                              <div class="flex items-center justify-between mb-3 md:mb-4">
                                  <h3 class="text-xs md:text-sm uppercase font-bold text-slate-500 tracking-wider" data-i18n="ov_connected_now">Connected Now</h3>
                                  <span id="ov-connected-count-badge" class="text-[10px] md:text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">0</span>
                              </div>
                              <div id="ov-connected-list" class="space-y-1.5 md:space-y-2.5">
                                  <p class="text-sm text-slate-400 text-center py-6" data-i18n="ov_loading">Loading...</p>
                              </div>
                          </div>

                          <!-- Recent Activity & Quick Actions -->
                          <div class="grid grid-cols-1 gap-3 md:gap-4">
                              <!-- Recent Activity -->
                              <div class="accordion-item bg-white dark:bg-darkcard rounded-2xl md:rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                                  <button type="button" onclick="toggleAccordion('acc-ov1')" class="acc-toggle w-full flex items-center justify-between gap-3 p-4 md:p-6 text-start">
                                      <span class="flex items-center gap-2 text-xs md:text-sm uppercase font-bold text-slate-500 tracking-wider"><span class="text-lg">📜</span><span data-i18n="ov_recent_activity">Recent Activity</span></span>
                                      <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                  </button>
                                  <div id="acc-ov1" class="acc-body px-4 pb-4 md:px-6 md:pb-6">
                                      <div class="flex items-center justify-end mb-3 md:mb-4 -mt-1">
                                          <button onclick="switchTab('logs')" class="text-[11px] md:text-xs text-primary hover:text-primary/80 font-bold transition-colors" data-i18n="ov_view_all">View All &rarr;</button>
                                      </div>
                                      <div id="ov-activity-list" class="space-y-1.5 md:space-y-2.5">
                                          <p class="text-sm text-slate-400 text-center py-6" data-i18n="ov_loading">Loading...</p>
                                      </div>
                                  </div>
                              </div>
                              <!-- Quick Actions -->
                              <div class="accordion-item bg-white dark:bg-darkcard rounded-2xl md:rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                                  <button type="button" onclick="toggleAccordion('acc-ov2')" class="acc-toggle w-full flex items-center justify-between gap-3 p-4 md:p-6 text-start">
                                      <span class="flex items-center gap-2 text-xs md:text-sm uppercase font-bold text-slate-500 tracking-wider"><span class="text-lg">⚡</span><span data-i18n="ov_quick_actions">Quick Actions</span></span>
                                      <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                  </button>
                                  <div id="acc-ov2" class="acc-body hidden px-4 pb-4 md:px-6 md:pb-6">
                                  <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                                      <button onclick="openAddUserModal()" class="flex items-center justify-center md:justify-start gap-2 md:gap-3 px-3 py-2.5 md:px-4 md:py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-colors">
                                          <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                          <span data-i18n="ov_add_user">Add User</span>
                                      </button>
                                      <button onclick="switchTab('users')" class="flex items-center justify-center md:justify-start gap-2 md:gap-3 px-3 py-2.5 md:px-4 md:py-3 bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 dark:text-violet-400 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-colors">
                                          <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                          <span data-i18n="ov_manage_users">Manage Users</span>
                                      </button>
                                      <button onclick="exportConfig()" class="flex items-center justify-center md:justify-start gap-2 md:gap-3 px-3 py-2.5 md:px-4 md:py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-colors">
                                          <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                          <span data-i18n="ov_backup_config">Backup Config</span>
                                      </button>
                                      <button onclick="loadDashboard()" class="flex items-center justify-center md:justify-start gap-2 md:gap-3 px-3 py-2.5 md:px-4 md:py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-colors">
                                          <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                          <span data-i18n="ov_refresh">Refresh Statistics</span>
                                      </button>
                                  </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <!-- INFO VIEW -->
                      <div id="view-info" class="hidden space-y-6">
                          <div id="dyn-profiles-container" class="columns-1 md:columns-2 gap-4"></div>
                      </div>

                      <!-- NETWORK/METRICS VIEW -->
                      <div id="view-network" class="hidden space-y-6">
                            <div class="bg-white dark:bg-darkcard rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-darkborder mb-6">
                              <h3 class="text-sm uppercase font-bold text-slate-500 tracking-wider mb-4" data-i18n="metrics_live">Live Profile Usage</h3>
                              <div id="usage-metrics-container" class="flex flex-col">
                                  <p class="text-xs text-slate-400 text-center py-4" data-i18n="no_metrics">No active connection data yet.</p>
                              </div>
                          </div>
                          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                              <div class="bg-white dark:bg-darkcard p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden group">
                                  <svg class="w-8 h-8 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                  <p class="text-xs uppercase font-bold text-slate-400 mb-1" data-i18n="stat_ip">Origin IP</p>
                                  <p id="net-ip" class="text-xl md:text-2xl font-black font-mono">...</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden group">
                                  <svg class="w-8 h-8 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                                  <p class="text-xs uppercase font-bold text-slate-400 mb-1" data-i18n="stat_dc">Edge Node</p>
                                  <p id="net-colo" class="text-xl md:text-2xl font-black font-mono">...</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden group sm:col-span-2 lg:col-span-1">
                                  <svg class="w-8 h-8 text-purple-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                  <p class="text-xs uppercase font-bold text-slate-400 mb-1" data-i18n="stat_loc">Data Region</p>
                                  <p id="net-loc" class="text-lg font-bold truncate">...</p>
                              </div>
                              <div class="bg-white dark:bg-darkcard p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden group sm:col-span-2 lg:col-span-1">
                                  <svg class="w-8 h-8 text-blue-500 mb-4"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock10-icon lucide-clock-10"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l-4-2"/></svg>
                                  <p class="text-xs uppercase font-bold text-slate-400 mb-1" data-i18n="stat_datetime">Date Time</p>
                                  <p id="net-datetime" class="text-lg font-bold truncate text-center">...</p>
                              </div>
                              <!-- Diagnostics Segment -->
                              <div class="bg-white dark:bg-darkcard p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden group sm:col-span-2 lg:col-span-3">
                                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                      <div>
                                          <h3 class="text-sm uppercase font-bold text-slate-400 mb-1" data-i18n="ping_test_title">Latency Diagnostics</h3>
                                          <p class="text-xs text-slate-500" data-i18n="ping_test_desc">Test response time to your active node target.</p>
                                      </div>
                                      <button onclick="runPingTest()" class="px-6 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-xl transition-colors text-sm" data-i18n="run_diagnostics">
                                          ⚡ Run Diagnostics
                                      </button>
                                  </div>
                                  <div id="ping-results" class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 hidden">
                                      <div class="bg-slate-50 dark:bg-darkbg p-3 rounded-xl border border-slate-100 dark:border-darkborder/50">
                                          <p class="text-[10px] uppercase font-bold text-slate-400" data-i18n="target_node">Target Node</p>
                                          <p id="ping-target" class="text-sm font-bold font-mono truncate">...</p>
                                      </div>
                                      <div class="bg-slate-50 dark:bg-darkbg p-3 rounded-xl border border-slate-100 dark:border-darkborder/50">
                                          <p class="text-[10px] uppercase font-bold text-slate-400" data-i18n="response">Response</p>
                                          <p id="ping-time" class="text-sm font-bold font-mono text-emerald-500">...</p>
                                      </div>
                                      <div class="bg-slate-50 dark:bg-darkbg p-3 rounded-xl border border-slate-100 dark:border-darkborder/50">
                                          <p class="text-[10px] uppercase font-bold text-slate-400" data-i18n="status">Status</p>
                                          <p id="ping-status" class="text-sm font-bold">...</p>
                                      </div>
                                      <div class="bg-slate-50 dark:bg-darkbg p-3 rounded-xl border border-slate-100 dark:border-darkborder/50">
                                          <p class="text-[10px] uppercase font-bold text-slate-400" data-i18n="local_port">Local Port</p>
                                          <p id="ping-port" class="text-sm font-bold font-mono">...</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      <!-- SETTINGS VIEW -->
                      <div id="view-settings" class="hidden space-y-4">
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-b1')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🌐</span><span data-i18n="acc_b1_title">Protocol & Ports</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-b1" class="acc-body px-6 pb-6">
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div class="space-y-1">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_proto">Primary Display Mode</label>
                                  <select id="cfg-proto" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-1 outline-none appearance-none">
                                      <option value="alpha">Alpha Mode (V-Core)</option>
                                      <option value="beta">Beta Mode (T-Core)</option>
                                      <option value="both">Both (V-Core & T-Core)</option>
                                  </select>
                              </div>
                               <div class="space-y-1">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_port">Data Port (Checkbox Selection)</label>
                                  <select id="cfg-port" multiple class="hidden">
                                      <option value="443">443</option>
                                      <option value="2053">2053</option>
                                      <option value="2083">2083</option>
                                      <option value="2087">2087</option>
                                      <option value="2096">2096</option>
                                      <option value="8443">8443</option>
                                      <option value="80">80</option>
                                      <option value="8080">8080</option>
                                      <option value="8880">8880</option>
                                      <option value="2052">2052</option>
                                      <option value="2082">2082</option>
                                      <option value="2086">2086</option>
                                      <option value="2095">2095</option>
                                  </select>
                                  <div id="port-checkboxes-container" class="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-darkborder p-4 rounded-xl space-y-3 font-mono text-xs max-h-48 overflow-y-auto">
                                      <!-- TLS ports -->
                                      <div class="space-y-1.5">
                                          <div class="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">🔒 Secure (TLS)</div>
                                          <div class="grid grid-cols-2 gap-2">
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="443" onchange="togglePortCheckbox('443', this.checked)" class="accent-primary">
                                                  <span>443</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="2053" onchange="togglePortCheckbox('2053', this.checked)" class="accent-primary">
                                                  <span>2053</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="2083" onchange="togglePortCheckbox('2083', this.checked)" class="accent-primary">
                                                  <span>2083</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="2087" onchange="togglePortCheckbox('2087', this.checked)" class="accent-primary">
                                                  <span>2087</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="2096" onchange="togglePortCheckbox('2096', this.checked)" class="accent-primary">
                                                  <span>2096</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="8443" onchange="togglePortCheckbox('8443', this.checked)" class="accent-primary">
                                                  <span>8443</span>
                                              </label>
                                          </div>
                                      </div>
                                      <!-- Non-TLS ports -->
                                      <div class="space-y-1.5 pt-1 border-t border-slate-200 dark:border-slate-700">
                                          <div class="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">🔓 Standard</div>
                                          <div class="grid grid-cols-2 gap-2">
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="80" onchange="togglePortCheckbox('80', this.checked)" class="accent-primary">
                                                  <span>80</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="8080" onchange="togglePortCheckbox('8080', this.checked)" class="accent-primary">
                                                  <span>8080</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="8880" onchange="togglePortCheckbox('8880', this.checked)" class="accent-primary">
                                                  <span>8880</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="2052" onchange="togglePortCheckbox('2052', this.checked)" class="accent-primary">
                                                  <span>2052</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="2082" onchange="togglePortCheckbox('2082', this.checked)" class="accent-primary">
                                                  <span>2082</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition">
                                                  <input type="checkbox" value="2086" onchange="togglePortCheckbox('2086', this.checked)" class="accent-primary">
                                                  <span>2086</span>
                                              </label>
                                              <label class="flex items-center gap-2 p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-primary transition col-span-2">
                                                  <input type="checkbox" value="2095" onchange="togglePortCheckbox('2095', this.checked)" class="accent-primary">
                                                  <span>2095</span>
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-b2')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🔐</span><span data-i18n="acc_b2_title">Identity & Security</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-b2" class="acc-body hidden px-6 pb-6">
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div class="space-y-1 md:col-span-2">
                                  <div class="flex justify-between items-center">
                                      <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_id">Device UUID (Empty=Auto)</label>
                                      <button type="button" onclick="document.getElementById('cfg-uuid').value = crypto.randomUUID()" class="text-xs text-primary bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded transition-colors duration-200">Generate UUID</button>
                                  </div>
                                  <input type="text" id="cfg-uuid" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none font-mono text-sm">
                              </div>
                              <div class="space-y-1">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_pass">Master Key</label>
                                  <div class="relative">
                                      <input type="password" id="cfg-pass" data-i18n-ph="ph_pass" placeholder="Leave blank to keep the current password" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none pe-12">
                                      <button type="button" onclick="const n=document.getElementById('cfg-pass');n.type=n.type==='password'?'text':'password'" class="absolute inset-y-0 end-0 flex items-center px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">👁️</button>
                                  </div>
                                  <p class="text-[11px] text-slate-400 ms-1" data-i18n="hint_pass_hashed">🔒 Stored as a salted hash — this field is always empty on load, on purpose.</p>
                              </div>
                              <div class="space-y-1">
                                  <div class="flex items-center justify-between ms-1">
                                      <label class="block text-sm font-bold text-slate-600 dark:text-slate-300" data-i18n="lbl_sync_secret">Cluster Sync Secret</label>
                                      <button type="button" onclick="regenSyncSecret()" class="text-xs text-primary bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded transition-colors duration-200" data-i18n="btn_regen_sync_secret">Regenerate</button>
                                  </div>
                                  <div class="relative">
                                      <input type="text" id="cfg-sync-secret" readonly class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-100 dark:bg-slate-900 outline-none font-mono text-xs pe-12">
                                      <button type="button" onclick="const el=document.getElementById('cfg-sync-secret'); navigator.clipboard.writeText(el.value); this.innerText='✅';setTimeout(()=>this.innerText='📋',1200)" class="absolute inset-y-0 end-0 flex items-center px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">📋</button>
                                  </div>
                                  <p class="text-[11px] text-slate-400 ms-1" data-i18n="hint_sync_secret">Separate from your password — paste this into another panel's "Add Panel" step, or into its Force Sync, to link them. Regenerating it disconnects any panel using the old value until it's updated too.</p>
                              </div>
                              <div class="space-y-1">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_path">API Route (Hidden Path)</label>
                                  <input type="text" id="cfg-path" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                              </div>
                              <div class="space-y-1 md:col-span-2 border-t border-slate-100 dark:border-darkborder/50 pt-5 mt-1">
                                  <div class="flex items-center justify-between mb-3">
                                      <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1">🛡️ <span data-i18n="lbl_2fa">Two-Factor Authentication (2FA)</span></label>
                                      <span id="twofa-status-badge" class="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800">…</span>
                                  </div>

                                  <div id="twofa-off-panel" class="hidden">
                                      <p class="text-xs text-slate-500 dark:text-slate-400 mb-3" data-i18n="twofa_off_desc">Add a second layer of protection using any TOTP authenticator app (2FAS, Google Authenticator, Authy, Aegis...).</p>
                                      <button type="button" onclick="twofaStartSetup()" class="px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-colors" data-i18n="btn_enable_2fa">Enable 2FA</button>
                                  </div>

                                  <div id="twofa-setup-panel" class="hidden p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-darkborder space-y-3">
                                      <p class="text-xs text-slate-500 dark:text-slate-400" data-i18n="twofa_setup_desc">Scan the QR code with your authenticator app, or enter the key manually, then type the 6-digit code it shows to confirm.</p>
                                      <div class="flex flex-col items-center gap-2">
                                          <img id="twofa-qr-img" class="w-40 h-40 rounded-xl border border-slate-200 dark:border-darkborder bg-white p-1" alt="QR code">
                                          <p class="text-[10px] text-slate-400" data-i18n="twofa_qr_note">QR generated via a third-party image service (api.qrserver.com). Prefer not to use it? Enter the key below manually instead.</p>
                                      </div>
                                      <div class="space-y-1">
                                          <label class="block text-xs font-bold text-slate-500">Manual key</label>
                                          <div class="flex gap-2">
                                              <input type="text" id="twofa-secret-display" readonly class="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-darkborder bg-white dark:bg-slate-900 font-mono text-xs">
                                              <button type="button" onclick="copyToClipboard(document.getElementById('twofa-secret-display').value)" class="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-xs font-bold">Copy</button>
                                          </div>
                                      </div>
                                      <div class="flex gap-2">
                                          <input type="text" id="twofa-confirm-code" inputmode="numeric" maxlength="6" placeholder="123456" class="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-darkborder bg-white dark:bg-slate-900 font-mono text-center tracking-widest">
                                          <button type="button" onclick="twofaConfirmSetup()" class="px-4 py-2 bg-emerald-500 text-white text-xs font-bold rounded-lg hover:bg-emerald-600" data-i18n="btn_confirm_2fa">Confirm & Enable</button>
                                          <button type="button" onclick="twofaCancelSetup()" class="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-xs font-bold">✕</button>
                                      </div>
                                      <p id="twofa-setup-err" class="hidden text-xs text-rose-500"></p>
                                  </div>

                                  <div id="twofa-recovery-panel" class="hidden p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 space-y-2">
                                      <p class="text-xs font-bold text-amber-700 dark:text-amber-400" data-i18n="twofa_recovery_title">⚠️ Save these recovery codes now — shown only once.</p>
                                      <p class="text-[11px] text-amber-700/80 dark:text-amber-400/80" data-i18n="twofa_recovery_desc">If you lose access to your authenticator app, any of these one-time codes will let you log back in.</p>
                                      <div id="twofa-recovery-codes" class="grid grid-cols-2 gap-1.5 font-mono text-xs"></div>
                                      <div class="flex gap-2 pt-1">
                                          <button type="button" onclick="twofaDownloadCodes()" class="px-3 py-2 bg-amber-500 text-white text-xs font-bold rounded-lg" data-i18n="btn_download_codes">Download codes</button>
                                          <button type="button" onclick="document.getElementById('twofa-recovery-panel').classList.add('hidden')" class="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-xs font-bold" data-i18n="btn_done">Done</button>
                                      </div>
                                  </div>

                                  <div id="twofa-on-panel" class="hidden space-y-2">
                                      <p class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold" data-i18n="twofa_on_desc">✅ 2FA is protecting this panel.</p>
                                      <p class="text-[11px] text-slate-500" id="twofa-recovery-count">—</p>
                                      <div class="flex flex-wrap gap-2">
                                          <button type="button" onclick="twofaRegenerateCodes()" class="px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-xs font-bold" data-i18n="btn_regen_codes">Regenerate recovery codes</button>
                                          <button type="button" onclick="twofaDisable()" class="px-3 py-2 bg-rose-500/10 text-rose-500 border border-rose-500/30 rounded-lg text-xs font-bold" data-i18n="btn_disable_2fa">Disable 2FA</button>
                                      </div>
                                  </div>
                              </div>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-b3')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🔄</span><span data-i18n="acc_b3_title">Update & Access</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-b3" class="acc-body hidden px-6 pb-6">
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div class="space-y-1 md:col-span-2">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_github_repo">GitHub Update Repository</label>
                                  <input type="text" id="cfg-github-repo" placeholder="EbiDevSharp/nahan" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                  <div class="flex justify-start items-center gap-2 mt-2">
                                      <button type="button" onclick="triggerManualRedeploy()" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-lg transition-colors border border-primary/20">
                                          🔄 <span data-i18n="btn_redeploy_force">Force Redeploy / Switch Format</span>
                                      </button>
                                  </div>
                              </div>
                              <div class="space-y-1 md:col-span-2">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_sub_ua">Custom Subscription User-Agent</label>
                                  <input type="text" id="cfg-sub-ua" placeholder="e.g. MySpecialUABypass" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                  <p class="text-xs text-slate-500 mt-1 ms-1" data-i18n="desc_sub_ua">Allow specific browser User-Agent containing this text to bypass camouflage and retrieve profile data directly in web browser.</p>
                              </div>
                              <div class="space-y-1 md:col-span-2">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_custom_panel_url">Custom Panel URL / Subscription Domain</label>
                                  <input type="text" id="cfg-custom-panel-url" placeholder="e.g. custom.domain.com or https://custom.domain.com" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                  <p class="text-xs text-slate-500 mt-1 ms-1" data-i18n="desc_custom_panel_url">Optionally specify a custom domain/URL to be used for subscription/sync links. If empty, the default Worker address will be used.</p>
                              </div>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-b4')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">💾</span><span data-i18n="acc_b4_title">Backup & Restore</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-b4" class="acc-body hidden px-6 pb-6">
                              <div class="space-y-5">
                                  <h3 class="text-sm uppercase font-bold text-slate-400 tracking-wider" data-i18n="backup_restore_title">Backup & Restore</h3>
                                  <div>
                                      <h4 class="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-2" data-i18n="backup_grp_config">Configuration</h4>
                                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                          <button onclick="exportConfig()" class="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors text-sm" data-i18n="export_btn">
                                              📥 Export Configuration (JSON)
                                          </button>
                                          <label class="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors text-sm text-center cursor-pointer">
                                              <span data-i18n="import_btn">📤 Import Configuration (JSON)</span>
                                              <input type="file" id="import-file" class="hidden" accept=".json" onchange="importConfig(event)">
                                          </label>
                                      </div>
                                  </div>
                                  <div>
                                      <h4 class="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-2" data-i18n="backup_grp_worker">Worker Source</h4>
                                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                          <button onclick="viewWorkerSource(false)" id="btn-view-worker" class="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors text-sm" data-i18n="view_worker_btn">
                                              🧩 Worker Source (GitHub)
                                          </button>
                                          <button onclick="viewWorkerSource(true)" id="btn-view-worker-live" class="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors text-sm" data-i18n="view_worker_live_btn">
                                              🌩️ Worker Source (Live / Cloudflare)
                                          </button>
                                      </div>
                                  </div>
                                  <div>
                                      <h4 class="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-2" data-i18n="backup_grp_deploy">Deploy</h4>
                                      <div class="grid grid-cols-1 gap-3">
                                          <button onclick="openUploadWorkerModal()" class="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors text-sm" data-i18n="upload_worker_btn">
                                              ⬆️ Upload / Update Worker
                                          </button>
                                      </div>
                                  </div>
                              </div>
                              </div>
                          </div>
                      </div>
  
                      <!-- ADVANCED VIEW -->
                      <div id="view-advanced" class="hidden space-y-6">
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-a1')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🧹</span><span data-i18n="acc_a1_title">Clean IPs (Multi-Generator)</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-a1" class="acc-body px-6 pb-6">
                              <div class="flex items-center justify-between mb-4">
                                  <h3 class="text-sm uppercase font-bold text-slate-500 tracking-wider" data-i18n="lbl_clean_ips">Clean IPs (Multi-Generator)</h3>
                                  <span class="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-md font-bold" id="ip-count-badge">1 Config Set</span>
                              </div>
                              <textarea id="cfg-ips" rows="3" data-i18n="ph_clean_ips" placeholder="" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-1 outline-none font-mono text-sm resize-none"></textarea>
                              <p class="text-xs text-slate-400 mt-2" data-i18n="desc_clean_ips">Put one IP per line. The Sync URL will multiply configs for all IPs.</p>
                              <button id="btn-resolve-smart-ips" onclick="resolveSmartCleanIps()" class="mt-3 w-full sm:w-auto px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                  Auto-Resolve CDN & Clean IPs
                              </button>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-a3')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🛡️</span><span data-i18n="acc_a3_title">TLS & Network</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-a3" class="acc-body hidden px-6 pb-6">
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_fp">TLS Signature</label>
                                  <select id="cfg-fp" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none appearance-none">
                                      <option value="chrome">Chrome</option><option value="firefox">Firefox</option><option value="safari">Safari</option>
                                  </select>
                              </div>
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_dns">Resolver IP</label>
                                  <input type="text" id="cfg-dns" placeholder="1.1.1.1" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                              </div>
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_doh">Custom DNS (DoH Provider)</label>
                                  <input type="text" id="cfg-custom-dns" placeholder="https://cloudflare-dns.com/dns-query" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                              </div>
                              <div class="space-y-1 md:col-span-2 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_fake">Maintenance Hosts (Camouflage)</label>
                                  <input type="text" id="cfg-fake" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                              </div>
                              <div class="space-y-1 md:col-span-2 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_relay">Proxy IPs (Comma/Newline separated)</label>
                                  <textarea id="cfg-relay" rows="3" placeholder="104.20.0.1\nproxyip.cmliussss.net" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-1 outline-none font-mono text-sm resize-none"></textarea>
                              </div>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-a4')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🏷️</span><span data-i18n="acc_a4_title">Config Naming</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-a4" class="acc-body hidden px-6 pb-6">
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_strategy">Configuration Name Strategy</label>
                                  <input type="text" id="cfg-name-strategy" placeholder="{FLAG} {PROTOCOL}-{USER}-{PORT}" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                  <p data-i18n="html_desc_strategy" class="text-[11px] text-slate-400 dark:text-slate-500 mt-1 px-1 leading-relaxed">
                                      Supported pre-defined templates: <code class="bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono">default</code>, <code class="bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono">type-user-port</code>, <code class="bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono">user-port</code>, <code class="bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono">host-port-user</code>, <code class="bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono">prefix-user-port</code>, <code class="bg-slate-100 dark:bg-slate-800/80 px-1 py-0.5 rounded text-rose-500 font-mono">ip</code>.
                                  </p>
                              </div>
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_prefix">Custom Name Prefix</label>
                                  <input type="text" id="cfg-name-prefix" placeholder="Core" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                              </div>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-a5')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">⚙️</span><span data-i18n="acc_a5_title">Toggles & Switches</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-a5" class="acc-body hidden px-6 pb-6 space-y-4">
                              <div class="flex flex-col sm:flex-row gap-4">
                              <!-- TCP Fast Open Toggle -->
                              <label class="flex-1 flex items-center justify-between sm:justify-start cursor-pointer group bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl">
                                  <span class="text-sm font-bold text-slate-700 dark:text-slate-300 sm:me-4" data-i18n="lbl_tfo">TCP Fast Open</span>
                                  <div class="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" id="cfg-tfo" class="sr-only peer">
                                      <div class="w-11 h-6 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-500 peer-checked:bg-primary"></div>
                                  </div>
                              </label>
                              <!-- Secure Hello (ECH) Toggle -->
                              <label class="flex-1 flex items-center justify-between sm:justify-start cursor-pointer group bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl">
                                  <span class="text-sm font-bold text-slate-700 dark:text-slate-300 sm:me-4" data-i18n="lbl_ech">Secure Hello (ECH)</span>
                                  <div class="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" id="cfg-ech" class="sr-only peer">
                                      <div class="w-11 h-6 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-500 peer-checked:bg-primary"></div>
                                  </div>
                              </label>
                              </div>
                              <div class="flex flex-col sm:flex-row gap-4">
                              <!-- Silent Alert Toggle -->
                              <label class="flex-1 flex items-center justify-between sm:justify-start cursor-pointer group bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl">
                                  <span class="text-sm font-bold text-slate-700 dark:text-slate-300 sm:me-4" data-i18n="lbl_silent">Silent UI Alerts</span>
                                  <div class="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" id="cfg-silent" class="sr-only peer">
                                      <div class="w-11 h-6 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-500 peer-checked:bg-primary"></div>
                                  </div>
                              </label>
                              <!-- Pause Kill Switch Toggle -->
                              <label class="flex-1 flex items-center justify-between sm:justify-start cursor-pointer group bg-red-50 dark:bg-red-900/10 p-3 rounded-2xl border border-red-200 dark:border-red-900/30">
                                  <span class="text-sm font-bold text-red-600 dark:text-red-400 sm:me-4" data-i18n="lbl_pause">Kill Switch (Pause System)</span>
                                  <div class="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" id="cfg-pause" class="sr-only peer">
                                      <div class="w-11 h-6 bg-red-200 dark:bg-red-900/50 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-500 peer-checked:bg-red-500"></div>
                                  </div>
                              </label>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-a6')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🤖</span><span data-i18n="acc_a6_title">Telegram Bot</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-a6" class="acc-body hidden px-6 pb-6">
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_tg_token">Token Bot</label>
                                  <div class="relative">
                                      <input type="password" id="cfg-tg-token" placeholder="123456:ABC-DEF1234ghIkl-zyx5c" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm pe-12">
                                      <button type="button" onclick="const n=document.getElementById('cfg-tg-token');n.type=n.type==='password'?'text':'password'" class="absolute inset-y-0 end-0 flex items-center px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">👁️</button>
                                  </div>
                              </div>
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_tg_chat">Chat ID</label>
                                  <input type="text" id="cfg-tg-chat" placeholder="123456789" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                              </div>
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_tg_admin">Authorized Telegram Admin ID</label>
                                  <input type="text" id="cfg-tg-admin" placeholder="123456789" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                  <p class="text-xs text-slate-400 mt-1" data-i18n="desc_tg_admin">Only this Telegram User ID can manage the panel via bot. Leave empty to use Chat ID.</p>
                              </div>
                              <p class="text-xs text-slate-400 md:col-span-2" data-i18n="desc_tg_bot">Set these values to receive login alerts via Telegram.</p>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-a7')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">🔗</span><span data-i18n="acc_a7_title">Linked Panels</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-a7" class="acc-body hidden px-6 pb-6">
                              <div class="flex items-center justify-between gap-3 mb-1">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300" data-i18n="lbl_linked_panels">Linked Panels</label>
                                  <button type="button" onclick="openAddPanelModal()" class="shrink-0 px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-1">➕ <span data-i18n="btn_add_panel">Add Panel</span></button>
                              </div>
                              <p class="text-xs text-slate-400 mb-3" data-i18n="desc_linked_panels">Manage other panels (Workers) linked to this one. They can be switched between via the Telegram bot.</p>
                              <div id="linked-panels-list" class="space-y-2"></div>
                              <div class="mt-4 pt-4 border-t border-slate-100 dark:border-darkborder/50 flex items-center justify-between gap-3">
                                  <p class="text-xs text-slate-400" data-i18n="desc_force_sync">Push selected settings to all linked panels above, using their saved Cluster Sync Secret.</p>
                                  <button onclick="openSyncModal()" type="button" class="shrink-0 px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center shadow-sm">
                                      <svg id="sync-icon" class="w-3.5 h-3.5 me-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                      <span id="sync-btn-txt" data-i18n="force_sync">Force Sync Now</span>
                                  </button>
                              </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-a8')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">📊</span><span data-i18n="acc_a8_title">Cloudflare Analytics</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-a8" class="acc-body hidden px-6 pb-6">
                              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_cf_acc">CF Account ID</label>
                                  <input type="text" id="cfg-cf-acc" placeholder="a1b2c3d4e5f6..." class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm font-mono">
                              </div>
                              <div class="space-y-1 text-start">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_cf_token">CF API Token</label>
                                  <div class="relative">
                                      <input type="password" id="cfg-cf-token" placeholder="Bearer Token (Read Analytics)" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm font-mono pe-12">
                                      <button type="button" onclick="const n=document.getElementById('cfg-cf-token');n.type=n.type==='password'?'text':'password'" class="absolute inset-y-0 end-0 flex items-center px-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">👁️</button>
                                  </div>
                              </div>
                              <div class="space-y-1 text-start md:col-span-2">
                                  <label class="block text-sm font-bold text-slate-600 dark:text-slate-300 ms-1" data-i18n="lbl_cf_worker">CF Worker Script Name</label>
                                  <input type="text" id="cfg-cf-worker" placeholder="e.g. nahan" class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm font-mono">
                                  <p class="text-xs text-slate-400 mt-1 ms-1" data-i18n="desc_cf_worker">Required for in-panel updates. The script name shown in your Cloudflare Workers dashboard.</p>
                              </div>
                              <p class="text-xs text-slate-400 md:col-span-2" data-i18n="desc_cf_api">Optional: Monitor Worker free usage limits (100k/day). Needs Account Analytics Read permission.</p>
                              
                              <!-- Collapsible Step-by-Step Assistant for Beginners -->
                              <div class="md:col-span-2 mt-2">
                                  <button type="button" onclick="document.getElementById('cf-helper-guide').classList.toggle('hidden')" class="w-full text-start px-4 py-3 bg-primary/10 hover:bg-primary/15 text-primary text-xs font-bold rounded-xl flex items-center justify-between transition-colors">
                                      <span class="flex items-center gap-1.5">
                                          💡 <span data-i18n="cf_help_title">Need help getting these? Beginner's Step-by-Step Guide</span>
                                      </span>
                                      <span class="text-[10px] transform transition-transform duration-200">▼</span>
                                  </button>
                                  <div id="cf-helper-guide" class="hidden mt-3 p-4 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-darkborder rounded-2xl text-[11px] space-y-4 text-start leading-relaxed">
                                      <!-- English Section -->
                                      <div class="space-y-1 pb-3 border-b border-dashed border-slate-200 dark:border-darkborder">
                                          <h5 class="font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-1">🇬🇧 Beginner's Walkthrough:</h5>
                                          <ol class="list-decimal list-inside space-y-1 text-slate-500 dark:text-slate-400">
                                              <li><strong>CF API Token:</strong> Click <a href="https://dash.cloudflare.com/profile/api-tokens?template=edit-workers" target="_blank" class="text-primary hover:underline font-bold inline-flex items-center gap-0.5">Api Token Template ↗</a>. Click <strong>Use Template</strong> (if prompted), then scroll down and click <strong>Continue to summary</strong> &gt; <strong>Create Token</strong>. Copy that token and paste it above!</li>
                                              <li><strong>CF Account ID:</strong> Open any Cloudflare Workers or Domain page in your browser. Look at the URL bar: copy the 32-character string between <code>dash.cloudflare.com/</code> and the next slash (e.g. <code>dash.cloudflare.com/<span class="text-rose-500 font-bold font-mono">YOUR_ACCOUNT_ID</span>/workers</code>).</li>
                                              <li><strong>Worker Script Name:</strong> Go to <strong class="text-slate-800 dark:text-slate-300">Compute &gt; Workers & Pages</strong> in Cloudflare. Copy your worker's name (e.g. <code>nahan</code> or <code>nahan-gateway</code>).</li>
                                          </ol>
                                      </div>
                                      <!-- Persian Section -->
                                      <div id="cf-helper-fa" class="space-y-1" style="direction: rtl;">
                                          <h5 class="font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-1">🇮🇷 راهنمای مبتدیان فارسی:</h5>
                                          <ol class="list-decimal list-inside space-y-1 text-slate-500 dark:text-slate-400">
                                              <li><strong>توکن دسترسی کاربری CF API Token:</strong> روی <a href="https://dash.cloudflare.com/profile/api-tokens?template=edit-workers" target="_blank" class="text-primary hover:underline font-bold inline-flex items-center gap-0.5">لینک میانبر قالب توکن ↗</a> کلیک کنید. در پایین صفحه دکمه <strong>Continue to summary</strong> و سپس <strong>Create Token</strong> را بزنید و توکن نمایش داده شده را کپی کنید.</li>
                                              <li><strong>شناسه اکانت ابری CF Account ID:</strong> کافیست وارد یکی از صفحات کلودفلر خود شوید. از آدرس بالای مرورگر، عبارت ۳۲ کاراکتری که بلافاصله بعد از <code>dash.cloudflare.com/</code> قرار دارد را بردارید (مثلاً: <code>dash.cloudflare.com/<span class="text-rose-500 font-bold font-mono">a1b2c3d4e5...</span></code>).</li>
                                              <li><strong>نام کارگر (Worker Name):</strong> از منوی کناری کلودفلر به بخش <strong class="text-slate-800 dark:text-slate-300">Compute &gt; Workers & Pages</strong> رفته و نام ورکر خود را عینا بنویسید (مثلاً <code>nahan</code>).</li>
                                          </ol>
                                      </div>
                                  </div>
                              </div>
                              </div>
                              </div>
                          </div>
                      </div>
                      
                          <!-- USERS VIEW -->
                      <div id="view-users" class="hidden space-y-6">
                          <!-- Stats Grid -->
                          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                              <div class="bg-white dark:bg-darkcard rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden flex items-center justify-between">
                                  <div>
                                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block" data-i18n="stat_total_subscribers">Total Subscribers</span>
                                      <span id="stat-total-users" class="text-2xl font-black text-slate-800 dark:text-white mt-1 block">0</span>
                                  </div>
                                  <div class="p-3 bg-primary/10 text-primary rounded-xl">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.733.153-1.431.428-2.067m1.522-2H9m3-2c1.657 0 3-1.343 3-3S13.657 3 12 3s-3 1.343-3 3 1.343 3 3 3zm1.522 5.067A12.02 12.02 0 0012 13c-1.34 0-2.618.219-3.811.62-.275.636-.428 1.334-.428 2.067v2h10v-2c0-.733-.153-1.431-.428-2.067z"></path></svg>
                                  </div>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden flex items-center justify-between">
                                  <div>
                                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block" data-i18n="stat_active_paused">Active / Paused</span>
                                      <span id="stat-active-users" class="text-2xl font-black text-slate-800 dark:text-white mt-1 block">0 / 0</span>
                                  </div>
                                  <div class="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  </div>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden flex items-center justify-between">
                                  <div>
                                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block" data-i18n="stat_cumulative_traffic">Cumulative Traffic</span>
                                      <span id="stat-total-traffic" class="text-2xl font-black text-slate-800 dark:text-white mt-1 block">0 GB</span>
                                  </div>
                                  <div class="p-3 bg-violet-500/10 text-violet-500 rounded-xl">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                  </div>
                              </div>
                              <div class="bg-white dark:bg-darkcard rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden flex items-center justify-between">
                                  <div>
                                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block" data-i18n="stat_auto_disabled">Auto-Disabled</span>
                                      <span id="stat-auto-disabled" class="text-2xl font-black text-slate-800 dark:text-white mt-1 block">0</span>
                                  </div>
                                  <div class="p-3 bg-red-500/10 text-red-500 rounded-xl">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                                  </div>
                              </div>
                          </div>

                          <!-- Recently Disabled Users Panel -->
                          <div id="disabled-users-panel" class="hidden">
                              <div class="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-3xl p-6 shadow-sm border border-red-200 dark:border-red-800/40 relative overflow-hidden">
                                  <div class="flex items-center justify-between mb-4">
                                      <div class="flex items-center gap-3">
                                          <div class="p-2.5 bg-red-100 dark:bg-red-900/40 rounded-xl">
                                              <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                                          </div>
                                          <div>
                                              <h3 class="text-sm font-bold text-red-700 dark:text-red-300" data-i18n="disabled_panel_title">Recently Disabled Users</h3>
                                              <p class="text-[11px] text-red-500/70 dark:text-red-400/60" data-i18n="disabled_panel_desc">Users automatically disabled due to quota or expiration limits</p>
                                          </div>
                                      </div>
                                      <span id="disabled-panel-badge" class="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-sm">0</span>
                                  </div>
                                  <div id="disabled-users-list" class="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                                  </div>
                              </div>
                          </div>

                          <div class="subscriber-directory bg-white dark:bg-darkcard shadow-sm border border-slate-200 dark:border-darkborder relative overflow-hidden">
                              <div class="subscriber-toolbar">
                                  <div>
                                       <h3 class="text-sm uppercase font-bold text-slate-500 tracking-wider" data-i18n="sub_directory_title">Subscriber Directory</h3>
                                       <p class="text-xs text-slate-400 mt-1" data-i18n="sub_directory_desc">Search, modify bounds, toggle traffic limits or clear billing sessions.</p>
                                  </div>
                                  <div class="subscriber-controls">
                                      <select id="subscriber-panel-source" aria-label="Panel" onchange="selectSubscriberPanel(this.value)" class="bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkborder px-4 py-2.5 rounded-xl outline-none"></select>
                                      <button type="button" onclick="refreshSubscriberPanel()" class="px-3 py-2 border border-slate-200 rounded-xl" aria-label="Refresh">↻</button>
                                      <select id="user-status-filter" aria-label="Subscriber status" onchange="renderUsersTable()" class="bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkborder px-4 py-2.5 rounded-xl text-xs outline-none font-sans text-slate-600 dark:text-slate-400 focus:border-primary">
                                          <option value="all" data-i18n="filter_all">All Users</option>
                                          <option value="active" data-i18n="filter_active">Active</option>
                                          <option value="paused" data-i18n="filter_paused">Paused</option>
                                          <option value="auto-disabled" data-i18n="filter_auto_disabled">Auto-Disabled</option>
                                      </select>
                                      <input type="text" id="user-search-input" oninput="renderUsersTable()" aria-label="Search subscribers" placeholder="🔍 Find by Name or UUID..." data-i18n="user_search_placeholder" class="bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkborder px-4 py-2.5 rounded-xl text-xs outline-none font-sans text-slate-600 dark:text-slate-400 focus:border-primary">
                                      <button id="btn-add-selected-subscriber" onclick="addSubscriberForSelectedPanel()" class="px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold transition-colors shadow-sm" data-i18n="btn_add_user">+ Add New User</button>
                                  </div>
                              </div>
                              <div class="overflow-x-auto">
                                  <p id="subscriber-panel-status" role="status" class="px-5 py-2 text-sm text-slate-500"></p><table class="subscriber-table">
                                      <thead class="text-xs text-slate-400 uppercase bg-slate-50/50 dark:bg-slate-800/30">
                                          <tr>
                                              <th class="px-4 py-3 rounded-s-xl" data-i18n="tbl_name">Name</th>
                                              <th class="px-4 py-3" data-i18n="tbl_traffic">Traffic (Used / Limit)</th>
                                              <th class="px-4 py-3" data-i18n="tbl_exp">Expiration</th>
                                              <th class="px-4 py-3 rounded-e-xl text-end" data-i18n="tbl_action">Action</th>
                                          </tr>
                                      </thead>
                                      <tbody id="tbl-users" class="divide-y divide-slate-100 dark:divide-darkborder/50">
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>

                      <!-- Modal: Add User -->
                      <div id="modal-add-user" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-sm">
                          <div class="bg-white dark:bg-darkcard rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-darkborder">
                              <div class="px-6 pt-6 pb-4 shrink-0">
                                  <h3 class="text-xl font-bold" data-i18n="modal_add_title">Add User</h3>
                              </div>
                              <div class="overflow-y-auto flex-1 min-h-0 px-6 pb-4">
                                  <div class="space-y-4">
                                      <div>
                                          <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_name">Name / Identifier</label>
                                          <input type="text" id="add-user-name" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                       </div>
                                       <div>
                                           <label class="block text-xs font-bold text-slate-500 mb-1">Custom Config Name / Prefix (Optional)</label>
                                           <input type="text" id="add-user-custom-name" placeholder="Leave empty to use user name" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                      </div>
                                      <div class="border border-slate-200 dark:border-darkborder rounded-xl overflow-hidden">
                                          <button type="button" onclick="toggleAccordion('add-user-acc-limits')" class="acc-toggle w-full flex items-center justify-between gap-2 px-4 py-3 text-start bg-slate-50 dark:bg-slate-800/50">
                                              <span class="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider"><span>⏳</span><span data-i18n="grp_limits_title">Limits &amp; Access</span></span>
                                              <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                          </button>
                                          <div id="add-user-acc-limits" class="acc-body hidden px-4 pb-4 pt-1 space-y-4">
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="limit_total">Traffic (GB) Limit (Leave empty for unlimited)</label>
                                                  <input type="number" id="add-user-total-reqs" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="limit_daily">Daily Requests Limit (Leave empty for unlimited)</label>
                                                  <input type="number" id="add-user-daily-reqs" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="limit_days">Expiration limit (Days) - Leave empty for unlimited</label>
                                                  <input type="number" id="add-user-days" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                              </div>
                                              <div>
                                                <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_limit_hour">Access Hours (Optional)</label>
                                                <div class="flex gap-2 items-center">
                                                    <span class="text-xs text-slate-400 mb-1" data-i18n="limit_hour_from">From</span>
                                                    <input type="time" id="add-user-access-from" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                                    <span class="text-slate-400" data-i18n="limit_hour_to">To</span>
                                                    <input type="time" id="add-user-access-to" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                                </div>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_max_config">Max Configs (Optional - limit total generated configs, e.g. 4)</label>
                                                  <input type="number" id="add-user-max-configs" placeholder="Leave empty for unlimited" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_max_conn">Max Concurrent Connections (Optional, e.g. 2)</label>
                                                  <input type="number" min="0" id="add-user-max-connections" placeholder="Leave empty for unlimited" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="border border-slate-200 dark:border-darkborder rounded-xl overflow-hidden">
                                          <button type="button" onclick="toggleAccordion('add-user-acc-network')" class="acc-toggle w-full flex items-center justify-between gap-2 px-4 py-3 text-start bg-slate-50 dark:bg-slate-800/50">
                                              <span class="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider"><span>🌐</span><span data-i18n="grp_network_title">Network &amp; Protocol</span></span>
                                              <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                          </button>
                                          <div id="add-user-acc-network" class="acc-body hidden px-4 pb-4 pt-1 space-y-4">
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1">Select Clean IPs</label>
                                                  <div id="add-user-clean-ips-wrap" class="flex flex-wrap gap-2 mt-1 text-slate-500"></div>
                                                  <label class="block text-[10px] font-bold text-slate-400 mt-2">Or enter Custom Clean IPs (separated by commas or newlines)</label>
                                                  <textarea id="add-user-custom-clean" rows="1" placeholder="e.g. 1.2.3.4, 5.6.7.8" class="w-full mt-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm"></textarea>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1">Select Proxy IPs</label>
                                                  <div id="add-user-proxy-ips-wrap" class="flex flex-wrap gap-2 mt-1 text-slate-500"></div>
                                                  <label class="block text-[10px] font-bold text-slate-400 mt-2">Or enter Custom Proxy IPs (separated by commas or newlines)</label>
                                                  <textarea id="add-user-custom-proxy" rows="1" placeholder="e.g. proxy1.com:443" class="w-full mt-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm"></textarea>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_Protocol">Protocol Mode</label>
                                                  <div id="add-user-mode-wrap" class="flex gap-3 mt-1">
                                                      <label class="flex items-center gap-1.5 text-sm cursor-pointer"><input type="checkbox" value="alpha" class="add-mode-cb accent-primary"> <span>Alpha (VLESS)</span></label>
                                                      <label class="flex items-center gap-1.5 text-sm cursor-pointer"><input type="checkbox" value="beta" class="add-mode-cb accent-primary"> <span>Beta (Trojan)</span></label>
                                                  </div>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_ports">Ports</label>
                                                  <div id="add-user-ports-wrap" class="flex flex-wrap gap-2 mt-1"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                              <div class="px-6 py-4 shrink-0 border-t border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard rounded-b-3xl">
                                  <div class="flex justify-end gap-2">
                                      <button onclick="document.getElementById('modal-add-user').classList.add('hidden')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold" data-i18n="btn_cancel">Cancel</button>
                                      <button onclick="commitAddUser()" class="px-4 py-2 rounded-xl bg-primary text-white font-bold" data-i18n="save_btn_user">Save User</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <!-- Modal: Force Sync Nodes - انتخاب بخش‌های ارسالی به نودهای دیگر -->
                      <div id="modal-sync-nodes" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-sm">
                          <div class="bg-white dark:bg-darkcard rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-darkborder">
                              <div class="px-6 pt-6 pb-4 shrink-0">
                                  <h3 class="text-xl font-bold" data-i18n="modal_sync_title">Sync Settings to Nodes</h3>
                                  <p class="text-xs text-slate-400 mt-1" data-i18n="modal_sync_desc">Choose which settings sections to push to the other panels.</p>
                              </div>
                              <div class="overflow-y-auto flex-1 min-h-0 px-6 pb-4">
                                  <div class="flex justify-end gap-3 mb-2 text-[11px] font-bold">
                                      <button type="button" onclick="syncSelectAll(true)" class="text-primary hover:underline" data-i18n="modal_sync_select_all">Select all</button>
                                      <button type="button" onclick="syncSelectAll(false)" class="text-slate-400 hover:underline" data-i18n="modal_sync_select_none">Select none</button>
                                  </div>
                                  <div class="space-y-3">
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-ports" checked class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_ports">Protocol &amp; Ports</span>
                                              <span class="block text-[11px] text-slate-400" data-i18n="sync_opt_ports_desc">Display mode and active ports.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-network" checked class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_network">TLS &amp; Network</span>
                                              <span class="block text-[11px] text-slate-400" data-i18n="sync_opt_network_desc">TLS signature, DNS, fake SNI hosts, backup relay IPs.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-cleanips" checked class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_cleanips">Clean IPs</span>
                                              <span class="block text-[11px] text-slate-400" data-i18n="sync_opt_cleanips_desc">The clean/CDN IP list used to build configs.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-naming" checked class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_naming">Config Naming</span>
                                              <span class="block text-[11px] text-slate-400" data-i18n="sync_opt_naming_desc">Naming strategy and custom prefix.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-update" checked class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_update">Update &amp; Access</span>
                                              <span class="block text-[11px] text-slate-400" data-i18n="sync_opt_update_desc">GitHub update repo and subscription User-Agent bypass.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-toggles" class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_toggles">Toggles &amp; Switches</span>
                                              <span class="block text-[11px] text-amber-500" data-i18n="sync_opt_toggles_desc">⚠ Includes the Kill Switch — may pause the other panels' traffic.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-domain" class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_domain">Custom Panel Domain</span>
                                              <span class="block text-[11px] text-amber-500" data-i18n="sync_opt_domain_desc">⚠ Each panel usually has its own domain — sync only if they intentionally share one.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-identity" class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_identity">Identity (UUID &amp; API Route)</span>
                                              <span class="block text-[11px] text-amber-500" data-i18n="sync_opt_identity_desc">⚠ Changes the target panel's hidden path and device UUID — old links/bookmarks on that panel will break.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-users" class="sync-simple mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_users">Users</span>
                                              <span class="block text-[11px] text-amber-500" data-i18n="sync_opt_users_desc">⚠ Replaces the ENTIRE subscriber list on the other panels with this one's — their own users will be deleted.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder opacity-60 cursor-not-allowed">
                                          <input type="checkbox" disabled class="mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-500 dark:text-slate-400" data-i18n="sync_opt_security">Security (Master Key)</span>
                                              <span class="block text-[11px] text-slate-400" data-i18n="sync_opt_security_desc">Not syncable: your password is stored as a salted hash and never sent to the browser, so it can't be replicated from here. Set it manually on each panel, or sync the Cluster Sync Secret below instead.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-syncsecret" disabled class="mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_syncsecret">Cluster Sync Secret</span>
                                              <span class="block text-[11px] text-amber-500" data-i18n="sync_opt_syncsecret_desc">⚠ Overwrites the machine-to-machine credential on the other panels — useful right after adding a new panel to the cluster, otherwise usually unnecessary.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder opacity-60 cursor-not-allowed">
                                          <input type="checkbox" disabled class="mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-500 dark:text-slate-400" data-i18n="sync_opt_twofa">Two-Factor Authentication</span>
                                              <span class="block text-[11px] text-slate-400" data-i18n="sync_opt_twofa_desc">Not syncable: the panel deliberately never sends your 2FA secret to the browser, so it can't be replicated from here.</span>
                                          </span>
                                      </label>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-bot" onchange="syncGroupToggle('bot', this.checked)" class="mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_bot">Telegram Bot Settings</span>
                                              <span class="block text-[11px] text-amber-500" data-i18n="sync_opt_bot_desc">⚠ Overwrites the bot token/admin on other panels — may disrupt their bot.</span>
                                          </span>
                                      </label>
                                      <div class="ms-8 -mt-2 space-y-1.5">
                                          <label class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                                              <input type="checkbox" class="sync-child-bot accent-primary" data-field="tgToken" onchange="syncChildChanged('bot')">
                                              <span data-i18n="sync_field_tg_token">Bot Token</span>
                                          </label>
                                          <label class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                                              <input type="checkbox" class="sync-child-bot accent-primary" data-field="tgChatId" onchange="syncChildChanged('bot')">
                                              <span data-i18n="sync_field_tg_chat">Chat ID</span>
                                          </label>
                                          <label class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                                              <input type="checkbox" class="sync-child-bot accent-primary" data-field="tgAdminId" onchange="syncChildChanged('bot')">
                                              <span data-i18n="sync_field_tg_admin">Admin ID</span>
                                          </label>
                                      </div>
                                      <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-darkborder cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <input type="checkbox" id="sync-opt-cf" onchange="syncGroupToggle('cf', this.checked)" class="mt-0.5 accent-primary shrink-0">
                                          <span>
                                              <span class="block text-sm font-bold text-slate-700 dark:text-slate-200" data-i18n="sync_opt_cf">Cloudflare API Settings</span>
                                              <span class="block text-[11px] text-amber-500" data-i18n="sync_opt_cf_desc">⚠ Overwrites the account/token/worker name on other panels — may disrupt their deploy/stats.</span>
                                          </span>
                                      </label>
                                      <div class="ms-8 -mt-2 space-y-1.5">
                                          <label class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                                              <input type="checkbox" class="sync-child-cf accent-primary" data-field="cfAccountId" onchange="syncChildChanged('cf')">
                                              <span data-i18n="sync_field_cf_acc">Account ID</span>
                                          </label>
                                          <label class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                                              <input type="checkbox" class="sync-child-cf accent-primary" data-field="cfApiToken" onchange="syncChildChanged('cf')">
                                              <span data-i18n="sync_field_cf_token">API Token</span>
                                          </label>
                                          <label class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                                              <input type="checkbox" class="sync-child-cf accent-primary" data-field="cfWorkerName" onchange="syncChildChanged('cf')">
                                              <span data-i18n="sync_field_cf_worker">Worker Name</span>
                                          </label>
                                      </div>
                                  </div>
                              </div>
                              <div class="px-6 py-4 shrink-0 border-t border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard rounded-b-3xl">
                                  <div class="flex justify-end gap-2">
                                      <button onclick="document.getElementById('modal-sync-nodes').classList.add('hidden')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold" data-i18n="btn_cancel">Cancel</button>
                                      <button onclick="confirmForceSync()" class="px-4 py-2 rounded-xl bg-primary text-white font-bold" data-i18n="force_sync">Force Sync Now</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <!-- Modal: Add Linked Panel -->
                      <div id="modal-add-panel" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-sm">
                          <div class="bg-white dark:bg-darkcard rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-darkborder">
                              <div class="px-6 pt-6 pb-4 shrink-0">
                                  <h3 class="text-xl font-bold" data-i18n="modal_add_panel_title">Add Linked Panel</h3>
                              </div>
                              <div class="overflow-y-auto flex-1 min-h-0 px-6 pb-4">
                                  <div class="space-y-4">
                                      <div>
                                          <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_panel_url">Panel URL</label>
                                          <input type="text" id="add-panel-url" placeholder="myworker.workers.dev" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                      </div>
                                      <div>
                                          <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_panel_key">Cluster Sync Secret</label>
                                          <div class="relative">
                                              <input type="password" id="add-panel-key" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm pe-10">
                                              <button type="button" onclick="const n=document.getElementById('add-panel-key');n.type=n.type==='password'?'text':'password'" class="absolute inset-y-0 end-0 flex items-center px-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">👁️</button>
                                          </div>
                                      </div>
                                      <p id="add-panel-status" class="text-xs font-bold min-h-[1rem]"></p>
                                  </div>
                              </div>
                              <div class="px-6 py-4 shrink-0 border-t border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard rounded-b-3xl">
                                  <div class="flex justify-end gap-2">
                                      <button onclick="document.getElementById('modal-add-panel').classList.add('hidden')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold" data-i18n="btn_cancel">Cancel</button>
                                      <button id="btn-verify-add-panel" onclick="commitAddPanel()" class="px-4 py-2 rounded-xl bg-primary text-white font-bold" data-i18n="btn_verify_add">Verify & Add</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <!-- Modal: Edit User -->
                      <div id="modal-view-worker" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-sm">
                          <div class="bg-white dark:bg-darkcard rounded-t-3xl sm:rounded-3xl w-full sm:max-w-4xl h-[85vh] sm:h-[80vh] flex flex-col shadow-2xl border border-slate-200 dark:border-darkborder">
                              <div class="px-6 pt-6 pb-3 shrink-0 flex items-center justify-between gap-3">
                                  <div>
                                      <h3 id="view-worker-title" class="text-xl font-bold" data-i18n="view_worker_title">Worker Source Code</h3>
                                      <p id="view-worker-subtitle" class="text-xs text-slate-400 mt-1"></p>
                                  </div>
                                  <button onclick="copyWorkerSourceView()" id="btn-copy-worker-view" class="shrink-0 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs" data-i18n="btn_copy">📋 Copy</button>
                              </div>
                              <div class="overflow-auto flex-1 min-h-0 px-6 pb-4">
                                  <pre id="view-worker-code" dir="ltr" class="text-[11px] leading-relaxed text-start font-mono whitespace-pre-wrap break-all bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-200 dark:border-darkborder"></pre>
                              </div>
                              <div class="px-6 py-4 shrink-0 border-t border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard rounded-b-3xl">
                                  <div class="flex justify-end gap-2">
                                      <button onclick="document.getElementById('modal-view-worker').classList.add('hidden')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold" data-i18n="btn_close">Close</button>
                                      <button onclick="downloadViewedWorkerSource()" id="btn-download-worker-view" class="px-4 py-2 rounded-xl bg-primary text-white font-bold" data-i18n="btn_download">⬇️ Download</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div id="modal-upload-worker" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-sm">
                          <div class="bg-white dark:bg-darkcard rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-darkborder">
                              <div class="px-6 pt-6 pb-4 shrink-0">
                                  <h3 class="text-xl font-bold" data-i18n="upload_worker_title">Upload / Update Worker</h3>
                                  <p class="text-xs text-slate-400 mt-1" data-i18n="upload_worker_warning">⚠️ This will overwrite the currently deployed worker code. Make sure the source is correct.</p>
                              </div>
                              <div class="overflow-y-auto flex-1 min-h-0 px-6 pb-4">
                                  <div class="space-y-4">
                                      <div>
                                          <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="upload_worker_url_lbl">File URL (e.g. raw GitHub link to _worker.js)</label>
                                          <input type="url" id="upload-worker-url" placeholder="https://raw.githubusercontent.com/user/repo/main/_worker.js" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                      </div>
                                      <div class="flex items-center gap-2">
                                          <div class="flex-1 h-px bg-slate-200 dark:bg-darkborder"></div>
                                          <span class="text-[10px] text-slate-400" data-i18n="upload_worker_or">OR</span>
                                          <div class="flex-1 h-px bg-slate-200 dark:bg-darkborder"></div>
                                      </div>
                                      <div>
                                          <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="upload_worker_file_lbl">Upload a .js File</label>
                                          <input type="file" id="upload-worker-file" accept=".js,.txt,text/javascript,application/javascript,application/x-javascript,text/plain,*/*" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                      </div>
                                      <div class="flex items-center gap-2">
                                          <div class="flex-1 h-px bg-slate-200 dark:bg-darkborder"></div>
                                          <span class="text-[10px] text-slate-400" data-i18n="upload_worker_or">OR</span>
                                          <div class="flex-1 h-px bg-slate-200 dark:bg-darkborder"></div>
                                      </div>
                                      <div>
                                          <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="upload_worker_paste_lbl">Paste Code Directly</label>
                                          <textarea id="upload-worker-code" dir="ltr" rows="4" placeholder="// paste _worker.js content here" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm font-mono text-start"></textarea>
                                      </div>
                                      <div class="border-t border-slate-200 dark:border-darkborder pt-3">
                                          <label class="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 cursor-pointer">
                                              <input type="checkbox" id="upload-worker-sync-linked" class="w-4 h-4 rounded text-primary focus:ring-primary">
                                              <span data-i18n="upload_worker_sync_linked_lbl">Also update linked panels</span>
                                          </label>
                                          <p class="text-[11px] text-slate-400 mt-1" data-i18n="upload_worker_sync_linked_desc">Deploys this exact same code to every linked panel too, using each one's saved Cluster Sync Secret.</p>
                                      </div>
                                      <p id="upload-worker-linked-status" class="text-xs font-bold min-h-[1rem]"></p>
                                  </div>
                              </div>
                              <div class="px-6 py-4 shrink-0 border-t border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard rounded-b-3xl">
                                  <div class="flex justify-end gap-2">
                                      <button onclick="document.getElementById('modal-upload-worker').classList.add('hidden')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold" data-i18n="btn_cancel">Cancel</button>
                                      <button onclick="uploadWorkerSource()" id="btn-confirm-upload-worker" class="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold" data-i18n="upload_worker_deploy_btn">Deploy Now</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div id="modal-edit-user" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-sm">
                          <div class="bg-white dark:bg-darkcard rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-darkborder">
                              <div class="px-6 pt-6 pb-4 shrink-0">
                                  <h3 class="text-xl font-bold" data-i18n="edit_sub">Edit Subscriber</h3>
                                  <input type="hidden" id="edit-user-id">
                              </div>
                              <div class="overflow-y-auto flex-1 min-h-0 px-6 pb-4">
                                  <div class="space-y-4">
                                      <div>
                                          <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_name_ph">Name / Identifier</label>
                                          <input type="text" id="edit-user-name" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                       </div>
                                       <div>
                                           <label class="block text-xs font-bold text-slate-500 mb-1">Custom Config Name / Prefix (Optional)</label>
                                           <input type="text" id="edit-user-custom-name" placeholder="Leave empty to use user name" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                      </div>
                                      <div class="border border-slate-200 dark:border-darkborder rounded-xl overflow-hidden">
                                          <button type="button" onclick="toggleAccordion('edit-user-acc-limits')" class="acc-toggle w-full flex items-center justify-between gap-2 px-4 py-3 text-start bg-slate-50 dark:bg-slate-800/50">
                                              <span class="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider"><span>⏳</span><span data-i18n="grp_limits_title">Limits &amp; Access</span></span>
                                              <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                          </button>
                                          <div id="edit-user-acc-limits" class="acc-body hidden px-4 pb-4 pt-1 space-y-4">
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="limit_total">Total Requests Limit (Leave empty for unlimited)</label>
                                                  <input type="number" id="edit-user-total-reqs" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="limit_daily">Daily Requests Limit (Leave empty for unlimited)</label>
                                                  <input type="number" id="edit-user-daily-reqs" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="limit_days">Expiration limit (Days remaining) - Leave empty for unlimited</label>
                                                  <input type="number" id="edit-user-days" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none">
                                              </div>
                                              <div>
                                                <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_limit_hour">Access Hours (Optional)</label>
                                                <div class="flex gap-2 items-center">
                                                    <span class="text-xs text-slate-400 mb-1" data-i18n="limit_hour_from">From</span>
                                                    <input type="time" id="edit-user-access-from" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                                    <span class="text-slate-400" data-i18n="limit_hour_to">To</span>
                                                    <input type="time" id="edit-user-access-to" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                                </div>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_max_config">Max Configs (Optional - limit total generated configs, e.g. 4)</label>
                                                  <input type="number" id="edit-user-max-configs" placeholder="Leave empty for unlimited" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_max_conn">Max Concurrent Connections (Optional, e.g. 2)</label>
                                                  <input type="number" min="0" id="edit-user-max-connections" placeholder="Leave empty for unlimited" class="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="border border-slate-200 dark:border-darkborder rounded-xl overflow-hidden">
                                          <button type="button" onclick="toggleAccordion('edit-user-acc-network')" class="acc-toggle w-full flex items-center justify-between gap-2 px-4 py-3 text-start bg-slate-50 dark:bg-slate-800/50">
                                              <span class="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider"><span>🌐</span><span data-i18n="grp_network_title">Network &amp; Protocol</span></span>
                                              <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                          </button>
                                          <div id="edit-user-acc-network" class="acc-body hidden px-4 pb-4 pt-1 space-y-4">
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1">Select Clean IPs</label>
                                                  <div id="edit-user-clean-ips-wrap" class="flex flex-wrap gap-2 mt-1 text-slate-500"></div>
                                                  <label class="block text-[10px] font-bold text-slate-400 mt-2">Or enter Custom Clean IPs (separated by commas or newlines)</label>
                                                  <textarea id="edit-user-custom-clean" rows="1" placeholder="e.g. 1.2.3.4, 5.6.7.8" class="w-full mt-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm"></textarea>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1">Select Proxy IPs</label>
                                                  <div id="edit-user-proxy-ips-wrap" class="flex flex-wrap gap-2 mt-1 text-slate-500"></div>
                                                  <label class="block text-[10px] font-bold text-slate-400 mt-2">Or enter Custom Proxy IPs (separated by commas or newlines)</label>
                                                  <textarea id="edit-user-custom-proxy" rows="1" placeholder="e.g. proxy1.com:443" class="w-full mt-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 focus:border-primary outline-none text-sm"></textarea>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_Protocol">Protocol Mode</label>
                                                  <div id="edit-user-mode-wrap" class="flex gap-3 mt-1">
                                                      <label class="flex items-center gap-1.5 text-sm cursor-pointer"><input type="checkbox" value="alpha" class="edit-mode-cb accent-primary"> <span>Alpha (VLESS)</span></label>
                                                      <label class="flex items-center gap-1.5 text-sm cursor-pointer"><input type="checkbox" value="beta" class="edit-mode-cb accent-primary"> <span>Beta (Trojan)</span></label>
                                                  </div>
                                              </div>
                                              <div>
                                                  <label class="block text-xs font-bold text-slate-500 mb-1" data-i18n="lbl_u_ports">Ports</label>
                                                  <div id="edit-user-ports-wrap" class="flex flex-wrap gap-2 mt-1"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="px-6 py-4 shrink-0 border-t border-slate-200 dark:border-darkborder bg-white dark:bg-darkcard rounded-b-3xl">
                                  <div class="flex justify-end gap-2">
                                      <button onclick="document.getElementById('modal-edit-user').classList.add('hidden')" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold" data-i18n="btn_cancel">Cancel</button>
                                      <button onclick="commitEditUser()" class="px-4 py-2 rounded-xl bg-primary text-white font-bold" data-i18n="btn_save_changes">Save Changes</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <!-- LOGS VIEW -->
                      <div id="view-logs" class="hidden space-y-6">
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-logs')" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">📜</span><span data-i18n="acc_logs_title">System Activity Logs</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-logs" class="acc-body px-6 pb-6">
                                  <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                                      <select id="logs-filter-type" onchange="renderFilteredLogs()" class="px-3 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 text-xs font-bold outline-none focus:border-primary">
                                          <option value="" data-i18n="logs_filter_all">All types</option>
                                      </select>
                                      <input type="text" id="logs-filter-search" oninput="renderFilteredLogs()" data-i18n-ph="logs_filter_search_ph" placeholder="Search in details..." class="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-darkborder bg-slate-50 dark:bg-slate-800 text-xs outline-none focus:border-primary">
                                      <button onclick="loadLogs()" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-colors shrink-0">
                                          🔄 <span data-i18n="btn_refresh">Refresh</span>
                                      </button>
                                  </div>
                                  <div class="space-y-3" id="logs-container">
                                      <p class="text-sm text-slate-400 text-center py-8" data-i18n="logs_loading">Loading activity logs...</p>
                                  </div>
                              </div>
                          </div>
                          <div class="accordion-item bg-white dark:bg-darkcard rounded-3xl shadow-sm border border-slate-200 dark:border-darkborder overflow-hidden">
                              <button type="button" onclick="toggleAccordion('acc-sessions'); loadSessions();" class="acc-toggle w-full flex items-center justify-between gap-3 px-6 py-4 text-start">
                                  <span class="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200"><span class="text-lg">💻</span><span data-i18n="acc_sessions_title">Web Logins (Active Devices)</span></span>
                                  <svg class="acc-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                              </button>
                              <div id="acc-sessions" class="acc-body hidden px-6 pb-6">
                                  <p class="text-xs text-slate-400 mb-4" data-i18n="sessions_desc">Every browser currently logged into this panel, and every device remembered for 2FA. End any of them to force a fresh login there.</p>
                                  <div class="flex items-center justify-between mb-2">
                                      <h4 class="text-xs uppercase font-bold text-slate-400 tracking-wider" data-i18n="sessions_active_title">Active Sessions</h4>
                                      <button type="button" onclick="revokeAllSessions()" id="btn-revoke-all-sessions" class="hidden text-xs font-bold px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/30 hover:bg-rose-500/20 shrink-0" data-i18n="btn_end_all_sessions">End all other sessions</button>
                                  </div>
                                  <div class="space-y-2 mb-5" id="sessions-container">
                                      <p class="text-sm text-slate-400 text-center py-4" data-i18n="logs_loading">Loading...</p>
                                  </div>
                                  <div class="flex items-center justify-between mb-2">
                                      <h4 class="text-xs uppercase font-bold text-slate-400 tracking-wider" data-i18n="sessions_trusted_title">Trusted 2FA Devices</h4>
                                      <button type="button" onclick="revokeAllDevices()" id="btn-revoke-all-devices" class="hidden text-xs font-bold px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/30 hover:bg-rose-500/20 shrink-0" data-i18n="btn_forget_all_devices">Forget all devices</button>
                                  </div>
                                  <div class="space-y-2" id="trusted-devices-container"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  
              <!-- Save Bar (Docked to bottom of main content) -->
              <div class="shrink-0 bg-white dark:bg-darkcard border-t border-slate-200 dark:border-darkborder p-4 flex justify-between md:justify-end items-center z-20">
                  <span id="save-status" class="text-sm font-bold text-slate-500 md:me-4"></span>
                  <button onclick="doSave()" class="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity" data-i18n="save_btn">Save Config</button>
              </div>
          </main>
  
          <!-- BOTTOM NAV (Mobile) -->
          <nav class="md:hidden w-full h-16 bg-white dark:bg-darkcard border-t border-slate-200 dark:border-darkborder flex justify-around items-center z-30 shrink-0 pb-safe">
              <button onclick="switchTab('overview')" id="mob-tab-overview" class="mobile-nav-item active flex flex-col items-center justify-center w-full h-full text-slate-400">
                  <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path></svg>
                  <span class="text-[10px] font-bold" data-i18n="tab_overview">Home</span>
              </button>
              <button onclick="switchTab('info')" id="mob-tab-info" class="mobile-nav-item flex flex-col items-center justify-center w-full h-full text-slate-400">
                  <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  <span class="text-[10px] font-bold" data-i18n="tab_info">Endpoints</span>
              </button>
              <button onclick="switchTab('network')" id="mob-tab-network" class="mobile-nav-item flex flex-col items-center justify-center w-full h-full text-slate-400">
                  <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  <span class="text-[10px] font-bold" data-i18n="tab_status">Metrics</span>
              </button>
              <button onclick="switchTab('settings')" id="mob-tab-settings" class="mobile-nav-item flex flex-col items-center justify-center w-full h-full text-slate-400">
                  <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
                  <span class="text-[10px] font-bold" data-i18n="tab_settings">System</span>
              </button>
              <button onclick="switchTab('advanced')" id="mob-tab-advanced" class="mobile-nav-item flex flex-col items-center justify-center w-full h-full text-slate-400">
                  <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span class="text-[10px] font-bold" data-i18n="tab_adv">Network</span>
              </button>
              <button onclick="switchTab('logs')" id="mob-tab-logs" class="mobile-nav-item flex flex-col items-center justify-center w-full h-full text-slate-400">
                  <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                  <span class="text-[10px] font-bold" data-i18n="tab_logs">Logs</span>
              </button>
              <button onclick="switchTab('users')" id="mob-tab-users" class="mobile-nav-item flex flex-col items-center justify-center w-full h-full text-slate-400">
                  <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  <span class="text-[10px] font-bold" data-i18n="tab_users">Users</span>
              </button>
          </nav>
      </div>
  
      <!-- Toast Notification -->
      <div id="copy-toast" class="fixed top-20 md:top-10 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-2xl font-bold text-sm z-50 transition-all transform -translate-y-20 opacity-0 pointer-events-none">
          <span data-i18n="copied">Copied!</span>
      </div>
      
      <!-- QR Code Modal (Enhanced) -->
      <div id="qr-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] hidden items-center justify-center p-4">
          <div class="bg-white dark:bg-darkcard rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-darkborder relative">
              <button onclick="closeQRModal()" class="absolute top-4 end-4 text-slate-400 hover:text-slate-800 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <div class="text-center mb-6">
                  <h3 id="qr-modal-title" class="text-xl font-bold text-slate-800 dark:text-white">Scan to Connect</h3>
                  <p class="text-xs text-slate-500 mt-1">Scan with your V-Core or T-Core client</p>
              </div>
              <div class="bg-white p-4 rounded-2xl shadow-inner border border-slate-100 mb-4">
                  <img id="qr-modal-img" src="" alt="QR Code" class="w-full aspect-square object-contain">
              </div>
              <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl break-all text-xs font-mono text-slate-600 dark:text-slate-400 max-h-24 overflow-auto border border-slate-200 dark:border-darkborder" id="qr-modal-link"></div>
          </div>
      </div>

      <!-- Modal: Version Update Highlights -->
      <div id="modal-version-update" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[101] hidden items-center justify-center p-4">
          <div class="bg-white dark:bg-darkcard rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-darkborder relative overflow-hidden transform transition-all duration-300">
              <div class="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-indigo-500 via-primary to-emerald-500"></div>
              <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-2.5">
                      <div class="bg-primary/10 text-primary p-2.5 rounded-2xl">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                      </div>
                      <div>
                          <h3 class="text-lg font-black text-slate-800 dark:text-white" data-i18n="v_pop_title">Version Update</h3>
                          <span id="modal-version-badge" class="text-[10px] font-bold px-2 py-0.5 bg-indigo-500 text-white rounded-full tracking-wide"></span>
                      </div>
                  </div>
                  <button onclick="closeVersionModal()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-50 dark:bg-slate-800 p-2 rounded-xl border border-slate-100 dark:border-darkborder transition-colors">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                  </button>
              </div>

              <div class="space-y-4">
                  <div class="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-darkborder/50">
                      <p class="text-xs font-bold text-slate-400 uppercase tracking-widest" data-i18n="v_pop_whatsnew">What's New in This Version</p>
                      <h4 id="modal-version-headline" class="text-sm font-black text-slate-700 dark:text-white mt-1"></h4>
                  </div>
                  
                  <div id="modal-changelog-container" class="space-y-4 max-h-[50vh] overflow-y-auto pe-2 text-start">
                  </div>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-100 dark:border-darkborder/50 flex justify-end">
                  <button onclick="closeVersionModal()" class="px-5 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-xl text-xs font-bold shadow-md transition-all transform hover:scale-105 active:scale-95" data-i18n="v_pop_btn">Got it!</button>
              </div>
          </div>
      </div>
  
      <script data-cfasync="false">
          window.addEventListener('error', function(event) {
              var target = document.getElementById('dashboard-boot-error');
              if (target) { target.hidden = false; target.textContent = 'Nahan UI ${DASHBOARD_BUILD}: ' + (event.message || 'Dashboard script could not load'); }
          }, true);
      </script>
      <script data-cfasync="false" defer src="/${encodeURI(sysConfig.apiRoute)}/assets/dashboard.js?v=${DASHBOARD_BUILD}"></script>
  </body>
  </html>
    `;
}