const Player = window.lePlayer;

Player.plugin('helloworld', function(pluginOptions) {
    const player = this;
    player.on('click', () => console.log(`Hello ${pluginOptions.name}`));
})
