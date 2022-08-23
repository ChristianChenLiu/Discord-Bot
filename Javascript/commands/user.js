/** @format */

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with User info!'),
	async execute(interaction) {
		await interaction.reply('User info.!');
	}
};
