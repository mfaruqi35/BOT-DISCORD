// Import dependencies
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); 

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Log when the bot is ready
client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

// Respond to interactions
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

// Login to Discord with token from .env
client.login(process.env.DISCORD_TOKEN);
