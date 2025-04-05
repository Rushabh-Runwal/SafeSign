# 🔐 Safe Sign – Privacy Policy Analyzer Chrome Extension

**Safe Sign** is a lightweight Chrome extension that detects privacy policies or terms of use on any website, analyzes the content, and provides a privacy score along with potential concerns — helping users make informed decisions about their data.

## 🚀 Features

- ✅ Automatically detects Privacy Policy / Terms of Use pages
- 🧠 Analyzes key phrases to identify privacy risks
- 🔒 Displays a privacy score out of 100
- ⚠️ Highlights major concerns with severity badges
- 📦 Fully local, no user data is stored or sent to servers

## 🧩 Tech Stack

- Chrome Extension (Manifest v3)
- HTML/CSS/JavaScript
- Rule-based keyword scanner (can be upgraded to LLM or OM1)


## 🛠 Installation (Local Dev Setup)

1. Clone or download this repo to your machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in top-right).
4. Click **"Load unpacked"** and select the `SafeSign` folder.
5. Navigate to any website and click the extension icon to see the analysis.

## 🔍 How It Works

- **content.js** scans the webpage for links to "Privacy", "Terms", or "Conditions".
- If a policy is found, it fetches the content and sends it to the analyzer.
- The analyzer runs a simple keyword-based check with severity scores.
- The results are displayed in a **popup** as a score and concern list.

## ⚡ Example Output

Privacy Score: 70/100 ❌ Shares data with third parties ⚠️ Collects your location ✅ Mentions encryption



## 💡 Future Improvements

- Integrate with OM1 for local NLP analysis
- Add voice summary using TTS (Text-to-Speech)
- Use LLMs for deeper understanding of legal jargon
- Community-sourced privacy ratings

## 🏁 Hackathon Notes

Built with ❤️ at **SFHacks 2025** under the "Tech for Good" and **Best Use of OM1** tracks.

---

> Empowering users with transparency. Because signing should always be **Safe**.
