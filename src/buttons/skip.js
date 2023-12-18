const { endedEmbed } = require("../components/embed");

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });
    
    queue.node.skip();

    currMsg.edit({
        embeds: [endedEmbed(queue.currentTrack)],
        components: []
    })

    return inter.deleteReply();
}