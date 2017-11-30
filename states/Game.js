var Game = function () {};

var backKey;

var gameOptions = {
  
      // flipping speed in milliseconds
      flipSpeed: 250,
  
      // flipping zoom ratio. Simulates the card to be raised when flipping
      flipZoom: 1.1
  }


Game.prototype = {
    
  preload: function(){
    
        game.load.image('background', 'assets/images/game-bg.jpg');
        game.load.spritesheet("cards", "assets/images/card.png", 175, 248);
            
            
        },
    create: function(){
    
		game.add.sprite(0,0,'background');
		this.card =  game.add.sprite(game.width / 2, game.height / 2, "cards", 0);
		this.card.anchor.set(0.5);
		this.card.isFlipping = false;

		this.backKey = game.input.keyboard.addKey(Phaser.Keyboard.F1);

		this.card.inputEnabled = true;
		this.card.input.start(0, true);
		this.card.input.enableDrag(false, true, true);


		// On Click start Tween to "Flip" card. Check if Mouse is inside Card before doing flip
		game.input.onUp.add(function(){
			if((game.input.mousePointer.x > this.card.x - 80) && (game.input.mousePointer.x < this.card.x + 80) ){
			if(!this.card.isFlipping){
				this.card.isFlipping = true;
				this.flipTween.start();
			}
			}
		}, this);
		

		this.flipTween = game.add.tween(this.card.scale).to({
			x: 0,
			y: gameOptions.flipZoom
		}, gameOptions.flipSpeed / 2, Phaser.Easing.Linear.None);

		this.flipTween.onComplete.add(function(){
			this.card.frame = 1 - this.card.frame;
			this.backFlipTween.start();
		}, this);

		this.backFlipTween = game.add.tween(this.card.scale).to({
			x: 1,
			y: 1
		}, gameOptions.flipSpeed / 2, Phaser.Easing.Linear.None);

		this.backFlipTween.onComplete.add(function(){
			this.card.isFlipping = false;
		}, this);
	},

	update: function(){
		if (this.backKey.isDown){
			game.state.start("Splash");
		}
	}
    };