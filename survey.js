const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('What do you think of Node.js? ', answer => {
	console.log(`Thank you for your valuable feedback: ${answer}`);

	rl.question(`What's your name?`, answer => {
		console.log(`Nice to meet you ${answer}`);
		let hobby = '';
		rl.question(`What's an activity that you like to do`, answer => {
			console.log(`That's cool that you're into ${answer}`);
			hobby += answer;
			rl.question(`What do you listen to while doing that?`, answer => {
				console.log(`That's cool that you listen to ${answer} while ${hobby}`);
				rl.question(`Which meal is your favourite`, answer => {
					if (answer === 'lunch') {
						console.log(`Really? ${answer}?`);
					} else if (answer === 'breakfast') {
						console.log(`Ohh man, me too! I love ${answer}!`);
					} else if (answer === 'diner') {
						console.log(`I usually skip ${answer}`);
					} else if (answer === 'brunch') {
						console.log(`${answer}! Wow, you're such a hipster`);
					} else {
						console.log(`Answer with a legit meal time`);
						rl.question(`Which meal is your favourite`, answer => {
							if (answer === 'lunch') {
								console.log(`Really? ${answer}?`);
							} else if (answer === 'breakfast') {
								console.log(`Ohh man, me too! I love ${answer}!`);
							} else if (answer === 'diner') {
								console.log(`I usually skip ${answer}`);
							} else if (answer === 'brunch') {
								console.log(`${answer}! Wow, you're such a hipster`);
							}
							rl.question(`What's your favourite thing to eat for that meal?`, answer => {
								console.log(`${answer}, that sounds really nice`);
								rl.question(`Which sport is your absolute favourite?`, answer => {
									console.log(`Nice! ${answer} is awesome in my opinion`);
									rl.question('what is your philosophy about god?', answer => {
										console.log(`Yahhh mon, same. I think ${answer} too.`);
										console.log(`Nice getting to know you. Peace bro!`);
										rl.close();
									});
								});
							});
						});
					}
				});
			});
		});
	});
});
