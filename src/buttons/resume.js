const { ActionRowBuilder } = require("discord.js");
const { back, loop, lyrics, skip, pause } = require("../components/button");

module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });

    queue.node.resume();
    
    const newRow = new ActionRowBuilder().addComponents(back(!queue.history.previousTrack), pause, skip, loop(queue.repeatMode))
    currMsg.edit({
        components: [newRow]
    })

    return inter.deleteReply();
}