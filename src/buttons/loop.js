const { QueueRepeatMode } = require('discord-player');
const { pause, back, resume, skip, loop } = require('../components/button');
const { ActionRowBuilder } = require('@discordjs/builders');

module.exports = async ({  inter, queue }) => { 

    const methods = ['disabled', 'track', 'queue'];

    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌`, ephemeral: true });

    const repeatMode = queue.repeatMode

    if (repeatMode === 0) queue.setRepeatMode( QueueRepeatMode.TRACK)

    if (repeatMode === 1 ) queue.setRepeatMode( QueueRepeatMode.QUEUE)

    if (repeatMode === 2) queue.setRepeatMode( QueueRepeatMode.OFF)

    const newRow = new ActionRowBuilder().addComponents(back(!queue.history.previousTrack), queue.isPlaying() ? pause : resume, skip, loop(repeatMode))
    currMsg.edit({
        components: [newRow]
    })

    return inter.deleteReply();

}