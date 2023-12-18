const { EmbedBuilder } = require("discord.js")

const playEmbed = (track) => new EmbedBuilder()
    .setAuthor({
            name: `🔥 NOW PLAYING 🔥`,
            iconURL: `https://cdn.discordapp.com/avatars/${track.requestedBy.id}/${track.requestedBy.avatar}.png`
        })
    .setTitle('🎶🎶 ' + track.title)
    .setColor('Blue')
    .setImage(track.thumbnail)
    .setURL(track.url)
    .addFields({ name: '🏷️ Author', value: `\`${track.author}\``, inline: true })
    .addFields({ name: '📢 Added by', value: `\`${track.requestedBy.username}\``, inline: true })
    .addFields({ name: '🕖 Duration', value: `\`${track.duration}\``, inline: true })
    .setTimestamp()

const endedEmbed = (track) => new EmbedBuilder()
    .setAuthor({
        name: "🔥 PLAYED 🔥",
        iconURL: `https://cdn.discordapp.com/avatars/${track.requestedBy.id}/${track.requestedBy.avatar}.png`
    })
    .setTitle(track.title)
    .setURL(track.url)
    .setColor('Blue')
    .setTimestamp()

const addEmbed = (track) => new EmbedBuilder()
    .setAuthor({
        name: "✅ ADD TRACK",
        iconURL: `https://cdn.discordapp.com/avatars/${track.requestedBy.id}/${track.requestedBy.avatar}.png`
    })
    .setTitle('🎶🎶 ' + track.title)
    .setColor('Green')
    .setURL(track.url)
    .addFields({ name: '🏷️ Author', value: `\`${track.author}\``, inline: true })
    .addFields({ name: '📢 Added by', value: `\`${track.requestedBy.username}\``, inline: true })
    .addFields({ name: '🕖 Duration', value: `\`${track.duration}\``, inline: true })
    .setTimestamp()

const multiAddEmbed = (tracks) => new EmbedBuilder()
    .setAuthor({
        name: "✅ ADD PLAYLIST",
        iconURL: `https://cdn.discordapp.com/avatars/${tracks[0].requestedBy.id}/${tracks[0].requestedBy.avatar}.png`
    })
    .setTitle('🎶🎶 ' + tracks[0].title)
    .setColor('Green')
    .setURL(tracks[0].url)
    .addFields({ name: '📢 Added by', value: `\`${tracks[0].requestedBy.username}\``, inline: true })
    .addFields({ name: '🎧 Tracks', value: `\`${tracks.length}\``, inline: true })
    .setTimestamp()

module.exports = {
    playEmbed,
    endedEmbed,
    addEmbed,
    multiAddEmbed,
}
