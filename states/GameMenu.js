var GameMenu = function () {};

GameMenu.prototype = {

    init: function () {
        this.titleText = game.make.text(game.world.centerX, 100, "Game Menu", {
          font: 'bold 60pt sourceSans',
          fill: '#FDFFB5',
          align: 'center'
        });
        this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        this.titleText.anchor.set(0.5);
      },

    preload: function () {
    },
  
    create: function () {
        game.add.sprite(0, 0, 'menu-bg');
        game.add.existing(this.titleText);
        game.stage.disableVisibilityChange = true; // <------ here it is
      }
  };