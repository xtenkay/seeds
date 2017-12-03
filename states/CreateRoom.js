var CreateRoom = function() {};

var players;
var roomNumber;

function createRoomNumber(){
	if (roomNumber == undefined){
		roomNumber = Math.floor(Math.random() * 1000);
		console.log("Room Number = " + roomNumber);
	} else{
		console.log("Room Number already defined!");
		console.log("Room Number = " + roomNumber);
	}
}

CreateRoom.prototype = {

  	menuConfig: {
    	startY: 200,
    	startX: 650
  	},
  
	preload: function(){
  
      game.load.image('background', 'assets/images/backgroundJoin.png');
          
      },

	init: function (){
		this.titleText = game.make.text(game.world.centerX, 100, "Create Room", {
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

    
	create: function(){
  
	game.add.sprite(0,0,'background');
	game.add.existing(this.titleText);
	this.addMenuOption('2', function () {
		players = 2;
		console.log("Players = " + players);
		createRoomNumber();
	});
	this.addMenuOption('3', function () {
		players = 3;
		console.log("Players = " + players);
		createRoomNumber();
	});
	this.addMenuOption('4', function () {
		players = 4;
		console.log("Players = " + players);
		createRoomNumber();
	});
	},
	
	update: function(){
		if(roomNumber != undefined){
			this.roomNumber = game.make.text(game.world.centerX, 650, "Room Number = "+roomNumber, {
				font: 'bold 60pt sourceSans',
				fill: 'black',
				stroke: 'white',
				strokeThickness: '5',
				align: 'center'
			});
			this.roomNumber.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
			this.roomNumber.anchor.set(0.5);
			game.add.existing(this.roomNumber);
		}
		
	}
  };

  Phaser.Utils.mixinPrototype(CreateRoom.prototype, mixins);