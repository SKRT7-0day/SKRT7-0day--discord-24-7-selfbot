require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');

// Initialize Discord Client
const client = new Client({ checkUpdate: false });

// Read Server and Voice Channel IDs from environment variables
const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.CHANNEL_ID;

// Event listener when account logs in successfully
client.on('ready', async () => {
    console.log(`✅ Logged in successfully as: ${client.user.tag}`);

    // Set account status to Online
    client.user.setPresence({ status: 'online' });

    // Attempt to join the designated voice channel
    try {
        const guild = await client.guilds.fetch(GUILD_ID);
        const channel = guild.channels.cache.get(CHANNEL_ID);

        if (channel) {
            joinVoiceChannel({
                channelId: channel.id,
                guildId: guild.id,
                adapterCreator: guild.voiceAdapterCreator,
                selfMute: true, // Mutes microphone upon joining
                selfDeaf: true  // Deafens audio upon joining
            });
            console.log(`🔊 Successfully joined voice channel: ${channel.name}`);
        } else {
            console.log('❌ Voice channel not found. Please verify your CHANNEL_ID.');
        }
    } catch (error) {
        console.error('❌ Error connecting to the voice channel:', error);
    }
});

// Login to Discord using the token stored in .env
client.login(process.env.DISCORD_TOKEN);
