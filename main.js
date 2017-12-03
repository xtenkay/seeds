// Global Variables
var
game = new Phaser.Game(1366, 768, Phaser.AUTO, 'game'),
Main = function () {},
gameOptions = {
  playSound: true,
  playMusic: true
},
musicPlayer;


Main.prototype = {

    preload: function () {
      
        //game.cache = new Phaser.Cache(game);
        //game.load.reset();
        //game.load.removeAll();

        game.load.image('loading',  'assets/images/loading.png');
        game.load.image('brand',    'assets/images/logo.png');
        game.load.image('background', 'assets/images/backgroundMenu.png');
        game.load.script('utils',   'lib/utils.js');
        game.load.script('splash',  'states/Splash.js');
      },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
    
  }

};

game.state.add('Main', Main);
game.state.start('Main');