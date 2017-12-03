var JoinRoom = function () {};

var roomNumber;
var promptText = "Numero da Sala";

function setRoomNumber(){
	 roomNumber = prompt("Numero da Sala", promptText);
	 roomNumber = roomNumber.replace(/[^0-9\.]+/g, '');
	if (roomNumber.length != 3){
		promptText = "O Número deve ter 3 digitos!";
		setRoomNumber();
	} else {
		return;
	}
}

JoinRoom.prototype = {

	preload: function(){
		
		game.load.image('background', 'assets/images/backgroundJoin.png');
				
		},

	create: function(){

		game.add.sprite(0,0,'background');
		
		setRoomNumber();
		console.log(roomNumber);

		var style = { font: "65px Arial", fill: "#FFFFFF", align: "center" };

		var text = game.add.text(game.world.centerX, game.world.centerY, "Room Number = "+roomNumber, style);
		
		text.anchor.set(0.5);

	}

	
}