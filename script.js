function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const game = getParameterByName('game');
const vid = document.getElementById('draculaVideo');
const gameTitle = document.getElementById('gameTitle');
const mainImage = document.getElementById('mainImage');
const description = document.getElementById('description');
const ourGames = document.getElementById('ourGames');
const whyUs = document.getElementById('whyUs');
const whatYouGet = document.getElementById('whatYouGet');
const materials = document.getElementById('materials');
const download = document.getElementById('download');
const playersDetails = document.getElementById('playersDetails');
const price = document.getElementById('price');
const etsyLinks = ['','1267565417','1259146798','1273755151','1302289264','1263659450','1371770929'];
const titles = [' ', 'Vlad the Impaler 1', 'Vlad the Impaler 2', 'Vlad the Impaler 1 & 2', 'Pirates Island', 'Escape the Pyramid', 'Terror Aboard!'];
const descriptions = [' '];
descriptions.push(`You’re in a trip in Transylvania (Romania), searching for the legendary vampire named Dracula. You travel with some friends and family members. You hear about an old, abandoned castle which supposedly belonged to the Wallachian ruler Vlad III, also named “The Impaler”, the one who is believed to have turned into the infamous vampire. \n \n This castle - it is said - holds a very old secret, maybe even Dracula’s resting place. In order to discover that secret, one must first find out the precise years some specific historical events took place. You approach the castle and start to inspect it from the outside…`);
descriptions.push(`A while ago, you found a very important artifact: the resting place of Vlad the Impaler, the Wallachian ruler who got the nickname Dracula and inspired the famous vampire character. The only problem - the coffin seems to be protected by some kind of spell (or at least that’s what it suggests). In this quest, you must find the secret spell which opens it and check if the Dark Lord is true or legend.
It’s now time to get your gang ready, return to Transylvania and solve the Impaler’s mystery once and for all. One of your Romanian contacts promised to help you. So, you get your team and catch a plane to Bucharest...`);
descriptions.push(`This is a bundle containing the 2 parts of the Vlad Dracula instant download, print-it-yourself treasure hunt:
- PART 1: The Search for a Legendary Vampire;
- PART 2: A Legendary Quest in Transylvania.
These are 2 independent games, only linked through the story. They can be played in any order, but we recommend playing Part 1 first.
These are educational, not horror games; we recommend players aged 12 and up. Smaller children can play too, but probably need some help with some of the puzzles.`);
descriptions.push(`You take your friends to an exotic vacation to the Caribbeans. On the third day, while visiting a flea market, you stumble upon an
old book which catches your attention.
“Es muy barato!” – says the old seller. Yes, true, it’s pretty cheap for its value, so you decide to buy it. At your hotel, while browsing
through the book, you find what seems to be an old map. Interesting!
Another day in paradise. You go to the beach, enjoy the sun and the palm trees, but still feel the need for some action. You remember the
map. What if…
You gather your friends and tell them you want to go on an adventure.
“You can’t go alone, it’s too dangerous! We’ll join you, that’s what friends are for!”
So, you rent a cheap, old sailboat and follow the map. It leads you to a rather small, remote island. Your boat gets stuck in some rocks.
“I hope the tide will help us leave! Until then, let’s explore!”
Further on the island, you discover something written on a rock:
“Only the worthy can leave. Solve all puzzles! Cpt. J. W.”
You understand that you must solve some puzzles before you leave, so you continue to explore. You should have enough time before the
tide.`);
descriptions.push(`While visiting Egypt with a group of friends and relatives, you accidentally open a secret door inside the Big Pyramid of Giza. Full of curiosity, you all enter and the door closes behind you. OH, NO, YOU ARE TRAPPED! No problem, though, your brilliant minds will make an effort and find a way out. Calmly, you take out your flashlights and start exploring…
You realize that the room has another door, somehow protected by magic. You will need a special word to open it, so you look around, gather clues and try to solve the puzzle. This word could be anything! After you find the word, you must check it on the answers page. This must be accomplished by the Game Master or Game Wizard. Only if it’s correct can you go to the next chamber.
Every puzzle will open a door, every opened door will take you to the next chamber. How many chambers are there? When will you get out? Well… this depends on you. Cooperate as good as you can with your team and it will all be a fun adventure.
Ready? Let’s start!`);
descriptions.push(`Ahoy there, mateys! 🦜
    
Allow me to introduce the DIY Adventure Terror Aboard-game, the one you’ve been waiting for!

This is a downloadable, printable, do-it-yourself, fun boardgame which allows you to take some friends and enter the infamous pirate life by fighting both on land and water, stealing and hiding gold coins and building your treasure.

The game consists of some PDF files which will be available for download immediately after purchasing the game. Print these files, take some scissors and a bit of glue and start building your own game!`);

descriptions.push(`HallowGuess is a delightful and interactive Halloween party game that will have children putting their creative thinking and persuasive skills to the test. It can be played at home, at school, at parties...
 
   Get ready for a spooktacular time as players compete to provide the most fitting and imaginative descriptions for a set of mysterious Halloween objects! It's a game of wit, observation and convincing arguments as they strive to match their descriptions to the Game Master's secret pictures.`);

const ourGamesText = `Our printable escape room / treasure hunt games are perfect for any occasion, for children or adults. You just have to download the files, print them and have a unique experience! \n\n You'll experience some unforgettable adventures in space and time all over the world. Test your individual puzzle-solving skills, play with friends or family or create contests between teams; our games are great for parties, family quality time, school activities, team-building…
`;

const whyUsText = `- We pay a lot of attention to details; 
- The graphics are carefully edited to make your experience more enjoyable;
- We mix easier and harder puzzles, for a fun gameplay;
- We are open to any questions or suggestions, so don’t hesitate to contact us! 😍`;

const whatYouGetText = `This is a digital product, so you will receive a link to a download page. Buy this product and you will get:

- One PDF file with the game pages;
- One PDF file with the correct answers and the solutions;
- One PDF file with a Certificate to print and award each player who finishes the game;
- Lots of FUN and a great experience 🥰`;

const materialsText = `After downloading the files, you will need a color printer (or you may use a printing service) and a pair of scissors. Some games may require additional stuff, like paper glue. \n\n Keep in mind that an adventurous spirit is highly recommended 😁`;

const downloadText = `When you press the buy button, you will be redirected to our Etsy page. There, you will find the links for the download after making the purchase. If you don’t have an Etsy account, you will get an e-mail with the receipt and the download link; if you have an account, you’ll see a link named “View your files” taking you straight to the Downloads Page. <br><br>
You can find more details about the downloads at the <a href="http://www.etsy.com/help/article/3949">Etsy Help Page</a>.`;

const priceText = `All our games are sold on the Etsy platform, and the prices can differ due to all kinds of promotions and discounts. To see the current price for this game, please <a href="https://www.etsy.com/listing/${etsyLinks[game]}">go to our Etsy page.</a>.`;

playersDetailsText = `🧛‍♂️ 8+ years
🧍‍♀️🧍‍♂️ 1 – 6
⏳ ~ 60 min`;

// gameTitle.innerText = `${titles[game]}`;
if (game <=3){
    vid.style.display = "inline";
}

playersDetails.innerText = playersDetailsText;
mainImage.setAttribute('src',`library/mainImage${game}.jpg`);
description.innerText = `${descriptions[game]}`;
price.innerHTML = priceText;
ourGames.innerText = ourGamesText;
whyUs.innerText = whyUsText;
whatYouGet.innerText = whatYouGetText;
materials.innerText = materialsText;
download.innerHTML = downloadText;