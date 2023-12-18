const { REST, Routes } = require('discord.js');

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

const registerCommand = async (commands) => {
    try {
        console.log(">> Loading application (/) commands...")
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
        console.log('=> Commands loaded successful.');
    } catch (error) {
        console.error(error);
    }
}

module.exports = registerCommand