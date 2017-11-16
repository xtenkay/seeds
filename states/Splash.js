  var Splash = function () {},
  playSound = true,
  playMusic = true,
  music;

  Splash.prototype = {

  loadScripts: function () {
  game.load.script('WebFont', 'vendor/webfontloader.js');
  game.load.script('gamemenu','states/GameMenu.js');
  game.load.script('thegame', 'states/Game.js');
  game.load.script('gameover','states/gameover.js');
  game.load.script('credits', 'states/credits.js');
  game.load.script('options', 'states/options.js');
  },

  loadBgm: function () {
  game.load.audio('dangerous', 'assets/bgm/Dangerous.mp3');
  game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
  },

  loadImages: function () {
  game.load.image('menu-bg', 'assets/images/background.png');
  game.load.image('options-bg', 'assets/images/options-bg.png');
  game.load.image('gameover-bg', 'assets/images/gameover-bg.png');
  },

  loadFonts: function () {
  WebFontConfig = {
    custom: {
      families: ['sourceSans'],
      urls: ['assets/style/sourceSans.css']
    }
  }
  },

  init: function () {
  this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
  this.logo       = game.make.sprite(game.world.centerX, 200, 'brand');
  this.status     = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
  utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
  game.add.existing(this.logo).scale.setTo(0.8);
  game.add.existing(this.loadingBar);
  game.add.existing(this.status);
  this.load.setPreloadSprite(this.loadingBar);

  this.loadScripts();
  this.loadImages();
  this.loadFonts();
  this.loadBgm();

  },

  addGameStates: function () {

  game.state.add("GameMenu",GameMenu);
  game.state.add("Game",Game);
  game.state.add("GameOver",GameOver);
  game.state.add("Credits",Credits);
  game.state.add("Options",Options);
  },

  addGameMusic: function () {
  music = game.add.audio('dangerous');
  music.loop = true;
  music.play();
  },

  create: function() {
  this.status.setText('Ready!');
  this.addGameStates();
  this.addGameMusic();

  setTimeout(function () {
    game.state.start("GameMenu");
  }, 2000);
  }
  };