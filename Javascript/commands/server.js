/** @format */

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with Server info!'),
	async execute(interaction) {
		await interaction.reply('Server info.!');
	}
};
