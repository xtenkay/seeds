var GameMenu = function() {};


GameMenu.prototype = {

  menuConfig: {
    startY: 260,
    startX: 30
  },

  preload: function () {
    game.load.image('background', 'assets/images/backgroundMenu.png');
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "Game Title", {
      font: 'bold 60pt sourceSans',
      fill: 'black',
      stroke: 'white',
      strokeThickness: '5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {

    /* if (musicPlayer.name !== "clearAir" && playMusic) {
      musicCreated = true;
      musicPlayer.stop();
      musicPlayer = game.add.audio('clearAir');
      musicPlayer.loop = true;
      musicPlayer.play();
    } */
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'background');
    game.add.existing(this.titleText);

    this.addMenuOption('Create', function () {
      game.state.start("CreateRoom");
    });
    this.addMenuOption('Join', function () {
      game.state.start("JoinRoom");
    });
    this.addMenuOption('Options', function () {
      game.state.start("Options");
    });
    this.addMenuOption('Credits', function () {
      game.state.start("Credits");
    });
  }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);