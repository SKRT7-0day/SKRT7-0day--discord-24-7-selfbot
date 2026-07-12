# SKRT7-0day — Discord 24/7 Selfbot

A lightweight Node.js script that keeps a Discord account online and active around the clock.

> ⚠️ **Disclaimer:** Selfbots (automating a *user* account rather than a bot account) violate Discord's Terms of Service and can result in account termination. Use at your own risk, for educational/personal purposes only.

## 📁 Project Structure

| File | Description |
|------|--------------|
| `index.js` | Main script — starts and runs the selfbot |
| `package.json` | Project metadata and dependencies |
| `.env.example` | Template for required environment variables |
| `.gitignore` | Files/folders excluded from Git tracking |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- A Discord account token

### Installation

```bash
git clone https://github.com/SKRT7-0day/SKRT7-0day--discord-24-7-selfbot.git
cd SKRT7-0day--discord-24-7-selfbot
npm install
```

### Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in your values (e.g. your account token).

### Run

```bash
node index.js
```

## 🔒 Security Notes

- **Never** share your `.env` file or commit it to GitHub.
- `.env` is already excluded via `.gitignore`.
- Regenerate your token immediately if it's ever exposed.

## 📄 License

This project is provided as-is for personal/educational use.
