// Import dependencies
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
require('dotenv').config();

const clientId = '1326109647865905172'; 
const guildId = '1052147016744058902'; 

// Daftar perintah bot
const commands = [
    {
        name: 'ayo',
        description:'Mang Eak!',
    },
];

// Membuat instance REST untuk mengirim perintah
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        // Daftarkan perintah ke guild tertentu
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Log when the bot is ready
client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

// Respond to interactions
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ayo') {
        await interaction.reply('Mang Eak!');
    }
});

// Login to Discord with token from .env
client.login(process.env.DISCORD_TOKEN);
