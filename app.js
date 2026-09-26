const games = [

    // BOARD
    ["Tic Tac Toe", "board", "X and O battle.", "✕"],
    ["Connect Four", "board", "Connect four pieces.", "●"],
    ["Chess", "board", "Classic chess duel.", "♟"],
    ["Checkers", "board", "Capture your opponent.", "◉"],
    ["Reversi", "board", "Control the board.", "●"],
    ["Gomoku", "board", "Five in a row wins.", "⚫"],
    ["Battleship", "board", "Find enemy ships.", "⚓"],
    ["Mancala", "board", "Move stones strategically.", "◆"],
    ["Nine Men's Morris", "board", "Build three-piece lines.", "●"],
    ["Dots and Boxes", "board", "Complete more boxes.", "□"],
    ["Four in a Row", "board", "Build a winning line.", "●"],
    ["Hex", "board", "Connect your sides.", "⬡"],
    ["Domino Duel", "board", "Match your tiles.", "▣"],
    ["Backgammon", "board", "Race your pieces.", "◈"],
    ["Chinese Checkers", "board", "Reach the opposite side.", "✦"],

    // CARD
    ["Memory Match", "card", "Find matching pairs.", "◆"],
    ["War", "card", "Higher card wins.", "♠"],
    ["Go Fish", "card", "Collect matching cards.", "♣"],
    ["Crazy Eights", "card", "Discard your cards.", "8"],
    ["High or Low", "card", "Guess the next card.", "↑"],
    ["Card Duel", "card", "Battle with cards.", "♠"],
    ["Speed Cards", "card", "Play as quickly as possible.", "⚡"],
    ["Blackjack Duel", "card", "Get close to 21.", "21"],
    ["Pairs", "card", "Find the pairs.", "♥"],
    ["Color Cards", "card", "Match card colors.", "●"],
    ["Number Cards", "card", "Build number combinations.", "7"],
    ["Battle Cards", "card", "Defeat your opponent.", "⚔"],
    ["Lucky Draw", "card", "Draw and score.", "★"],

    // ARCADE
    ["Pong", "arcade", "Classic paddle battle.", "▮"],
    ["Snake Duel", "arcade", "Grow your snake.", "🐍"],
    ["Breakout Duel", "arcade", "Break the blocks.", "◆"],
    ["Space Duel", "arcade", "Defeat the enemy ship.", "✦"],
    ["Asteroid Battle", "arcade", "Survive the asteroids.", "●"],
    ["Tank Duel", "arcade", "Battle with tanks.", "▰"],
    ["Rocket Race", "arcade", "Reach the finish first.", "🚀"],
    ["Meteor Dodge", "arcade", "Avoid falling meteors.", "☄"],
    ["Laser Duel", "arcade", "Hit your opponent.", "⚡"],
    ["Target Rush", "arcade", "Hit targets quickly.", "◎"],
    ["Ball Bounce", "arcade", "Keep your ball alive.", "●"],
    ["Platform Duel", "arcade", "Reach the platform goal.", "▲"],
    ["Jump Battle", "arcade", "Jump and score.", "↑"],
    ["Cannon Duel", "arcade", "Aim and fire.", "◉"],

    // PUZZLE
    ["2048 Duel", "puzzle", "Combine numbers.", "2048"],
    ["Sudoku Duel", "puzzle", "Solve the grid.", "9"],
    ["Minesweeper Duel", "puzzle", "Avoid the mines.", "✹"],
    ["Word Duel", "puzzle", "Build better words.", "A"],
    ["Number Rush", "puzzle", "Solve numbers quickly.", "123"],
    ["Math Duel", "puzzle", "Answer math questions.", "＋"],
    ["Color Match", "puzzle", "Match colors.", "●"],
    ["Pattern Master", "puzzle", "Find the pattern.", "◇"],
    ["Tile Match", "puzzle", "Match tiles.", "▦"],
    ["Maze Race", "puzzle", "Escape the maze.", "⌁"],
    ["Memory Grid", "puzzle", "Remember the positions.", "▦"],
    ["Shape Puzzle", "puzzle", "Complete the shapes.", "△"],
    ["Logic Duel", "puzzle", "Outthink your opponent.", "?"],

    // SPORTS
    ["Mini Football", "sports", "Score more goals.", "⚽"],
    ["Basketball Duel", "sports", "Score more baskets.", "🏀"],
    ["Tennis Duel", "sports", "Win the rally.", "🎾"],
    ["Table Tennis", "sports", "Fast paddle action.", "🏓"],
    ["Air Hockey", "sports", "Score past your opponent.", "●"],
    ["Mini Golf", "sports", "Finish in fewer shots.", "⛳"],
    ["Penalty Shootout", "sports", "Score the penalty.", "⚽"],
    ["Boxing Duel", "sports", "Score points in rounds.", "◉"],
    ["Bowling Duel", "sports", "Knock down pins.", "●"],
    ["Archery Duel", "sports", "Hit the target.", "◎"],
    ["Baseball Hit", "sports", "Time your swing.", "●"],
    ["Volleyball Duel", "sports", "Keep the ball alive.", "●"],
    ["Skate Race", "sports", "Race to the finish.", "▲"],

    // ACTION
    ["Ninja Duel", "action", "Fast reflex battle.", "⚔"],
    ["Sword Duel", "action", "Defend and attack.", "⚔"],
    ["Treasure Hunt", "action", "Find the hidden treasure.", "◆"],
    ["Dungeon Duel", "action", "Explore and score.", "♜"],
    ["Robot Battle", "action", "Battle the robot.", "◇"],
    ["Castle Defense", "action", "Defend your castle.", "♜"],
    ["Alien Attack", "action", "Stop the invasion.", "✦"],
    ["Monster Chase", "action", "Escape the monster.", "◆"],
    ["Pirate Duel", "action", "Find the treasure.", "⚓"],
    ["Spy Chase", "action", "Catch your opponent.", "◎"],
    ["Space Hunter", "action", "Hunt the targets.", "✦"],
    ["Jungle Run", "action", "Reach the finish.", "▲"],
    ["Robot Race", "action", "Race your robot.", "◇"],

    // QUICK
    ["Rock Paper Scissors", "quick", "Choose your move.", "✊"],
    ["Reaction Test", "quick", "React faster.", "⚡"],
    ["Quick Tap", "quick", "Tap as quickly as possible.", "●"],
    ["Coin Duel", "quick", "Guess the coin.", "●"],
    ["Dice Duel", "quick", "Roll for victory.", "⚄"],
    ["Color Reaction", "quick", "Choose the correct color.", "●"],
    ["Fast Math", "quick", "Answer first.", "＋"],
    ["Quick Memory", "quick", "Remember the sequence.", "◆"],
    ["Button Battle", "quick", "Press faster.", "●"],
    ["Guess the Number", "quick", "Guess the hidden number.", "?"],
    ["Higher or Lower", "quick", "Predict the next number.", "↑"],
    ["Odd or Even", "quick", "Pick the correct answer.", "2"],
    ["Speed Click", "quick", "Click more times.", "⚡"],
    ["Target Click", "quick", "Hit the target first.", "◎"],
    ["Mini Quiz", "quick", "Answer questions.", "?"],
    ["Emoji Guess", "quick", "Guess the answer.", "★"],
    ["Flag Guess", "quick", "Identify the flag.", "▣"],
    ["Trivia Duel", "quick", "Answer trivia questions.", "?"],
    ["Sequence Race", "quick", "Remember the sequence.", "123"],
    ["Word Race", "quick", "Find words quickly.", "A"]
];


let selectedCategory = "all";
let selectedMode = "offline";


const gameGrid = document.getElementById("gameGrid");
const searchInput = document.getElementById("search");


function renderGames() {

    const searchText =
        searchInput.value
        .trim()
        .toLowerCase();


    gameGrid.innerHTML = "";


    const filtered =
        games.filter(game => {

            const name = game[0].toLowerCase();
            const category = game[1];

            const categoryMatch =
                selectedCategory === "all" ||
                category === selectedCategory;

            const searchMatch =
                name.includes(searchText);

            return categoryMatch && searchMatch;
        });


    if (filtered.length === 0) {

        gameGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
                color:#a9c5b5;
            ">
                No games found.
            </div>
        `;

        return;
    }


    filtered.forEach((game, index) => {

        const name = game[0];
        const category = game[1];
        const description = game[2];
        const doodle = game[3];


        const card =
            document.createElement("article");

        card.className = "game-card";


        card.innerHTML = `

            <div class="game-doodle"
                 aria-label="${name} illustration">

                ${doodle}

            </div>

            <div class="game-info">

                <h3>${name}</h3>

                <p>
                    ${description}
                </p>

                <span class="game-tag">
                    ${category.toUpperCase()}
                </span>

                <button
                    class="play-btn"
                    type="button"
                    data-game="${name}"
                >
                    PLAY
                </button>

            </div>
        `;


        card
            .querySelector(".play-btn")
            .addEventListener(
                "click",
                () => launchGame(name)
            );


        gameGrid.appendChild(card);

    });

}


function filterCategory(category) {

    selectedCategory = category;

    renderGames();

}


function setMode(mode) {

    selectedMode = mode;

    const text = {

        offline:
            "Offline 2-player mode selected.",

        bot:
            "Bot mode selected.",

        online:
            "Online multiplayer selected."
    };


    alert(text[mode]);

}


function launchGame(name) {

    if (name === "Tic Tac Toe") {

        window.location.href =
            "games/tic-tac-toe.html";

        return;
    }


    if (name === "Connect Four") {

        window.location.href =
            "games/connect-four.html";

        return;
    }


    if (name === "Pong") {

        window.location.href =
            "games/pong.html";

        return;
    }


    alert(
        `${name} is in the game library. Its game engine will be added next.`
    );

}


searchInput.addEventListener(
    "input",
    renderGames
);


renderGames();
