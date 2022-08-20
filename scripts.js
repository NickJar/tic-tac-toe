//gameboard module
const gameBoard = (() => {
    let gameBoard = [];
    return {};
})();

//player factory function
const playerFactory = ((playername, order, mark) => {
    return {playername, order, mark};
});

let player1 = playerFactory("nick", 1, "x");
let player2 = playerFactory("bot", 2, "o");