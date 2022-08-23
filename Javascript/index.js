/** @format */

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { javascript_bot_token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's javascript_bot_token
client.login(javascript_bot_token);
