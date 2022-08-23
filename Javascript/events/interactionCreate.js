/** @format */

const { Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, '..', 'commands');
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith('.js'));
let commands = new Collection();

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.set(command.data.name, command);
}

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({
				content: 'There was an error while executing this command!',
				ephemeral: true
			});
		}

		console.log(
			`User: ${interaction.user.tag} in #${interaction.channel.name} triggered an interaction: ${interaction.commandName}.`
		);
	}
};
