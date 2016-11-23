import $ from 'jquery';

window.lePlayer.plugin('helloworld', function(pluginOptions) {
    const player = this;
    player.on('click', () => console.log(`Hello ${pluginOptions.name}`));
})
