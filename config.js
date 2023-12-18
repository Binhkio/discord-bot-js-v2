module.exports = {
    app: {
        token: 'MTE4NjM3MTMzOTU2MTQ3MjA2MA.GcpTEa.N-nn4oeU9ldPwBdMnCYzYVI6fyEjki0me5IYTg',
        playing: 'Discord',
        global: true,
        guild: '',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
