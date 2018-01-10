
//total ====> <=21
//each player 2cards
// stand +0 / hit +card

//generate random card
  //each card show only 4 times:
  //{A:1 or 11}
  //{J,Q,K === 10}
  //{nubers}

//hit play
//input=> number of player

//give two cards (first round)

//choose hit/stand
//if result > 21 loose
const Player = function(){
  this.sum = 0;
  this.deck = [];
}

Player.prototype.generateOrderedDeck = function() {
  const suits = [ '♥', '♣', '♠', '♦' ];
  const values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      this.deck.push(value + suit);
    });
  });
  return this.deck;
};

Player.prototype.shuffleDeck = function(deck) {
	let index;
	let temp;
	let deck = this.deck
	for (var i = 0; i < deck.length; i++){
		//generate random number from i to deck.length-1 (inclusive)
		index = Math.floor(Math.random()*(deck.length-i))+i;
		//swap values
		temp = deck[index];
		deck[index] = deck[i];
		deck[i] = temp;
	}
	this.deck = deck;
};


Player.prototype.blackJack = function(){

  let one = this.deck.pop();
  let two = this.deck.pop();

  let message = `your cards are:${one} and ${two}`;
  this.sum =one.charAt(1) + two.charAt(1);
}

Player.prototype.hit = function(){
  let new = this.deck.pop();
  this.sum += new;
  if(this.sum > 21) return 'you looose';
}

Player.prototype.stand = function(){
  //
}


const playerA = new Player;
