# Project Nahan (نهان) - Detailed System Guide

Welcome to the comprehensive technical documentation and system guide for **Project Nahan**. This guide explains all features, hidden definitions, configurations, and operations within your secure IoT Telemetry Gateway and Subscription Panel.

---

## 1. 🔍 Revealing the Masked/Disguised Terminology

To bypass active network censorship and prevent DPI (Deep Packet Inspection), Project Nahan utilizes custom terminology to mask well-known protocols and formats. Below are the hidden meanings behind these terms:

| Disguised Term | Real Protocol/Concept | Explanation |
| :--- | :--- | :--- |
| **Alpha Mode (V-Core)** | **VLESS Protocol** | The primary lightweight and secure transport protocol used to deliver secure traffic bypass networks. |
| **Beta Mode (T-Core)** | **Trojan Protocol** | A fast, stealth protocol that disguises network traffic as standard HTTPS web browsing. |
| **Format Alpha / Format A** | **Base64 vless:// / trojan:// URI** | Raw subscription stream containing base64-encoded proxy connection strings in uniform format. |
| **Format Beta / Format B** | **Clash (YAML Layout)** | A structured configuration profile delivered in lightweight YAML format for Clash clients (Clash Meta, Stash). |
| **Format Gamma / Format C** | **Sing-Box (JSON Rules)** | A unified JSON diagnostic payload and profile mapping configured for Sing-Box, Shadowrocket, and compatible apps. |
| **Backup Relay IP / Proxy IP** | **Cloudflare Workers Proxy** | An intermediate Clean IP or CDN address used to bypass the direct Cloudflare IP blocks. |
| **Secret API Route** | **Hidden URL Prefix** | A customized secret route serving administrative actions and preventing scanning of the endpoint. |
| **Maintenance Hosts** | **Camouflage Website** | A safe, non-blocked destination (e.g., Ubuntu, Docker) that the system forwards scanner probes to if someone opens your worker root or without valid headers. |

---

## 2. 🎛️ Comprehensive Feature Explanation (Tab by Tab)

### 📡 1. Endpoints Tab (نقاط اتصال)
This is the delivery area where subscriber profiles and proxy connection streams are obtained.

*   **Profiles / Users List**: Separated cards or cards representing each active configuration profile.
*   **Copy Button**: Instantly copies the subscription link to the clipboard.
*   **QR Button**: Renders a dynamic, browser-compatible QR Code of the subscription link for quick mobile scanning.
*   **Format Alpha Link**: The default Base64/URI collection sub-link.
*   **Format Beta Link**: Custom link containing `&flag=clash` parameter to serve YAML Clash configurations.
*   **Format Gamma Link**: Custom link containing `&flag=sing` parameter to serve Sing-box JSON subscription.
*   **Retrieve Parsed Content Button**: Displays the decoded, human-readable raw content inside a secure pop-up directly in the browser, showing exactly what is being sent to your client software.
*   **Print Config Card Button**: Optimizes the page layout for clean printing or saving as a PDF.

---

### 📊 2. Metrics Tab (شاخص‌ها)
Displays live diagnostics and geographic telemetry of the Cloudflare CDN edge serving your requests.

*   **Origin IP**: Shows the external IP of the client requesting the admin dashboard or subscription.
*   **Edge Node (Colo)**: Shows the Cloudflare tripartite airport code (e.g., IKA, FRA) executing your Worker thread.
*   **Data Region**: Resolves the exact city and country of the incoming request connection.
*   **Live Profile Usage**: Displays real-time metrics showing which user-profiles or UUIDs reached the gateway, and how many requests they made.
*   **Latency Diagnostics (Run Diagnostics Button)**: Triggers a secure browser-to-node ping check measuring actual latency in milliseconds from your local machine to the active target nodes.

---

### ⚙️ 3. System Tab (تنظیمات پایه)
Configure the central identity parameters and route properties of your deployment.

*   **Primary Display Mode**: Choose what protocol type is generated. Options are VLESS (Alpha Mode), Trojan (Beta Mode), or Combined (Both).
*   **Data Ports Selector**: Select which Cloudflare compatible ports are used (e.g., 443, 2053, 2083 for secure TLS; 80, 8080 for standard plain HTTP). Multiple ports can be selected simultaneously.
*   **Device UUID (Hidden Password)**: The core unique key of your encryption. Leave empty to let the system generate a secure UUID.
*   **API Route (Hidden Path)**: Custom path to your admin dashboard and sync engine. For example, setting this to `secure88` will change your dashboard access to `https://your-domain.com/secure88/dash`.
*   **Master Key (Admin Password)**: Your credential passcode to login into this control board.
*   **Custom Panel URL / Subscription Domain**: A new custom field allowing you to specify an alternative domain name or URL (e.g., `custom-domain.com` or `https://sub.domain.com`) to be used when generating and copying subscriber links. If set, the panel replaces the default worker hostname with this URL.
*   **Backup & Restore (Export / Import Configuration)**: 
    *   *Export*: Download your complete configurations as a structured `.json` secure file.
    *   *Import*: Read and apply previous backups instantly. Requires clicking "Update Config" to persist.

---

### 🌐 4. Advanced Tab (پیشرفته)
Fine-tune sub-layer protocols, CDN overrides, and clustering settings.

*   **Clean IPs (Multi-Generator)**: Input a custom list of high-speed, non-cached CDN fronting IPs (one per line). The subscription generator multiplies client configurations for each of these entered Clean IPs!
*   **Slave Worker Nodes (Cluster Sync)**: Enter domains of independent sibling workers. The master node automatically syncs user limits and dashboard configurations with them in real-time on every save!
*   **TLS Signature (Fingerprint)**: Emulate browser network finger-signatures (Chrome, Firefox, Safari) to bypass passive profiling.
*   **Resolver IP**: Enter the DNS IP used to bypass standard resolver tracking.
*   **Custom DNS (DoH Provider)**: Secure DNS-Over-HTTPS provider (defaults to Cloudflare DoH) to query censorship-blocked domains.
*   **Maintenance Hosts (Camouflage)**: A safe list of domain redirectors used as camouflage for non-authorized viewers.
*   **Backup Relay IP / Proxy IP**: Enter an alternative IP used to proxy connections through the outer cloud network.
*   **TCP Fast Open (TFO)**: Check to minimize handshaking latencies over networks that support TCP fast-pathing.
*   **Secure Hello (ECH - Encrypted Client Hello)**: Enable ECH support on compatible clients to hide hostnames in TLS handshakes.
*   **Telegram Bot Webhook Integration** (`tgToken` & `tgChatId`): Connect a Telegram Bot to receive security alerts when the dashboard is accessed.
*   **Kill Switch (Pause System)**: Immediately pause all gateway relays and block connections instantly for security.

---

### 👥 5. Users Tab (کاربران)
Manage subscriber identities, monitor data limits, and configure expiration.

*   **User Search**: Speedily search through subscribers by name or UUID.
*   **Add User Button**: Displays form to input Name, Traffic limit, and custom Duration limits.
*   **Usage Calculator**: Estimates traffic based on total requests where approximately *6000 requests = 1 GB* of bandwidth usage.
*   **Limit Exceeded / Daily Limit Exceeded Warnings**: Automatically locks the user sub-stream once limits are reached.
*   **Reset Total Traffic Button**: Instantly resets the cumulative counter for that specific user.
*   **Edit User**: Edit name, expiration days, or total traffic thresholds.
*   **Pause User (⏸️/▶️)**: Instantly suspend subscriber subscription without deleting their config.

---

### 📋 6. Activity Logs Tab (گزارش فعالیت)
*   Provides a persistent historical feed tracking administrative sessions, sync handshakes, and success/failed login attempts with IP, geographical region, and timestamp metrics.
