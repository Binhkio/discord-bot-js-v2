const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const { back, loop, pause, lyrics, skip } = require('../../src/components/button');
const { playEmbed } = require('../../src/components/embed');
module.exports = (queue, track) => {
    if (!client.config.app.loopMessage && queue.repeatMode !== 0) return;
    const embed = playEmbed(track)

    const row1 = new ActionRowBuilder().addComponents(back(!queue.history.previousTrack), pause, skip, loop(queue.repeatMode))
    queue.metadata.send({ embeds: [embed], components: [row1] }).then(msg => global.currMsg = msg)

}
