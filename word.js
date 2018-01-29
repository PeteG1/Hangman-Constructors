var words = function() {
	this.firstWord = 'Paladin';
	this.secondWord = 'Cleric';
	this.secondWord = 'Ranger';
	this.thirdWord = 'Fighter';
	this.fourthWord = 'Wizard';
	this.fifthWord = 'Sorcerer';
	this.sixthWord = 'Monk';
	this.seventhWord = 'Warlock';
	this.eighthWord = 'Bard';
	};


module.exports = function word() {
		var randomWord = words[Math.floor (Math.random () * words.length-1)];

		function blanksFromAnswer(result) {
			var result = "_";
			for(i = 0; i < randomWord.length; i++) {
				text += result;
			}
			console.log(result);
		}
  };
