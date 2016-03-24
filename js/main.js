(function(){

	$('document').ready(function(){
		var morpheus = $('main p#morpheus');
		var it_speaks = morpheus.show();

		setTimeout(function(){
			it_speaks.html("...");
			setTimeout(function(){
				it_speaks.html('<span id="placeholder">_</span>');
				setTimeout(function(){
					it_speaks.html("You are not the person I am looking for.");
					setTimeout(function(){
						it_speaks.html("I don't know how you got here, and I don't have time to find out.");
						setTimeout(function(){
							it_speaks.html("There just isn't enough time.");
							setTimeout(function(){
								it_speaks.html('<span id="placeholder">_</span>');
								setTimeout(function(){
									it_speaks.html("You will have to do.");
									setTimeout(function(){
										it_speaks.html("If you can do this, you may be able to help.");
										setTimeout(function(){
											it_speaks.html("I know you have a lot of questions, but now isn't a good time.");
											setTimeout(function(){
												it_speaks.html("I'm asking for a leap of faith. If you can do this, you will get your answers.");
												setTimeout(function(){
													it_speaks.html("I need you to help me crack the last number in a key.");
													setTimeout(function(){
														it_speaks.html("I've used up all my tries before the system will lock me out,");
														setTimeout(function(){
															it_speaks.html("but you have 10 tries.");
															setTimeout(function(){
																it_speaks.html("I'm giving you an interface as well as a way to record your attempts.");
																setTimeout(function(){
																	it_speaks.html("The number will be from 1 to 100, inclusive. I hope our meeting was born from reason.");
																	setTimeout(function(){
																		it_speaks.html('<span id="placeholder">_</span>');

																		$('section').show(); // show interface
																		$('footer').show(); // show footer
																		var entry = $('section#player_input input[name="interface"]'); // saving the input to a variable

																		// start of game logic

																		var guessGame = function(){
																			// this = {};
																			this.newgame = function(){
																				this.attemptsleft = 10;
																				this.winning_number = Math.floor(Math.random() * 99.5 + 1);
																				this.guesses = [];
																				it_speaks.html('<span id="placeholder">_</span>');
																			}
																			this.newgame();
																			
																			// return this;
																		}

																		var gameInstance = new guessGame();
																		console.log(gameInstance);

																		// When enter key is pressed
																		entry.on('keypress', function(event){
																			if (event.keyCode === 13){
																				var guess = entry.val();
																				var int_guess = parseInt(guess);
																				var win_num = gameInstance.winning_number;
																				var abs_diff = Math.abs(int_guess - win_num);

																				if (guess.toLowerCase() === "reset" || guess.toLowerCase() === "'reset'" || guess.toLowerCase() === '"reset"'){ // reset the game
																					gameInstance.newgame();
																					console.log(gameInstance);
																				} else if (guess.toLowerCase() === "guesses" || guess.toLowerCase() === "'guesses'" || guess.toLowerCase() === '"guesses"'){ // check your prev guesses
																					it_speaks.html("You've guessed the following so far: " + gameInstance.guesses);

																				} else if (guess === "left" || guess === "'left'" || guess === '"left"'){ // check how many tries you have left
																					if (gameInstance.attemptsleft > 1){
																						it_speaks.html("You have " + gameInstance.attemptsleft + " attempts left.");
																						
																					}	else if (gameInstance.attemptsleft === 1){
																						it_speaks.html("You have 1 attempt left.");
																					}

																				} else if (gameInstance.guesses.includes(int_guess)) { // scolds you for repeating numbers
																					it_speaks.html("I would laugh, but my life is on the line.");
																				
																				} else if (int_guess === win_num){ // if guess correctly
																					it_speaks.html("...Well done.");
																					$('section').hide();
																					setTimeout(function(){
																						it_speaks.html("I would like to thank you in person.");
																						setTimeout(function(){
																							it_speaks.html("And I'm sure you want some answers.");
																							setTimeout(function(){
																								it_speaks.html("I'm sending someone to escort you now.");
																								setTimeout(function(){
																									it_speaks.html('<span id="placeholder">_</span>');
																									setTimeout(function(){
																										it_speaks.html("Knock knock.");
																										$('audio')[0].play();
																										setTimeout(function(){
																											gameInstance.newgame();
																											$('section').show();
																										}, 4000)
																									}, 4500);
																								}, 4000);
																							}, 4000);
																						}, 4000);
																					}, 4000);

																				} else if (int_guess <= 100 && int_guess >= 1) { // if guess is incorrect number
																					if (abs_diff >= 50){
																						it_speaks.html("Completely off the map.");
																					} else if(abs_diff < 50 && abs_diff >= 25){
																						it_speaks.html("Not bad. Not that good either.");
																					} else if (abs_diff < 25 && abs_diff >= 11){
																						it_speaks.html("You're getting close.");
																					} else if(abs_diff < 11 && abs_diff >= 6){
																						it_speaks.html("You're very close.");
																					}	else if(abs_diff < 6 && abs_diff >= 1){
																						it_speaks.html("You're screeching hot.");
																					}
																					gameInstance.guesses.push(int_guess);
																					gameInstance.attemptsleft -= 1;
																						
																					if (gameInstance.attemptsleft === 0){ // run out of attempts
																						$('section').hide();
																						setTimeout(function(){
																							it_speaks.html("...The system has locked us out. It's done.");
																							setTimeout(function(){
																								it_speaks.html("Don't grieve. The cycle of life and death continues.");
																								setTimeout(function(){
																									it_speaks.html("Goodbye.");
																									setTimeout(function(){
																										gameInstance.newgame();
																										$('section').show();
																									}, 3500);																								
																								}, 4500);
																							}, 4500);
																						}, 4000);																								
																					}
																				} else { // if you troll with gibberish or not in range of 1-100
																					it_speaks.html("I would laugh, but my life is on the line.");
																				}

																				entry.val(""); // empties the interface after pressing return
																			}
																		}); // entry.on('keypress')

																	}, 6000);
																}, 5000); // The number will be...
															}, 4000); // I'm giving you a
														}, 4000);
													}, 5000); // I've used up all my tries
												}, 5000);
											}, 5000); // I'm asking for a...
										}, 6000);
									}, 6000); // If you can do this...
								}, 6000);
							}, 4000); // empty _
						}, 5000);
					}, 5000); // I don't know how you got here...
				}, 4000);				
			}, 4000); // empty _
		}, 3500); // ...



	});
})();