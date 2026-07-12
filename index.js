require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
    checkUpdate: false, 
});

client.on('ready', async () => {
    console.log(`✅ Logged in successfully as: ${client.user.tag}`);
    console.log('🚀 Account is now online 24/7.');
    client.user.setPresence({ status: 'online' }); 
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error("❌ Error: DISCORD_TOKEN not found in .env file");
    process.exit(1);
}

client.login(token);
