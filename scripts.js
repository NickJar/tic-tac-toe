//gameboard module
const gameBoard = (() => {

    let gameBoard = [];
    let xMarks = [];
    let oMarks = [];

   
    document.querySelectorAll('.tile').forEach(tile => 
    tile.addEventListener("click", function (){

        if(gameBoard.length == 9 || document.getElementById('subheader').textContent == "X's Win!" || document.getElementById('subheader').textContent == "O's Win!"){
            resetBoard();
        }
            
        if(player1.turn == "true" && tile.innerHTML == ""){
            tile.innerHTML = player1.mark;
            gameBoard.push(player1.mark);
            xMarks.push(parseInt(tile.id));
            player1.turn = "false";
            player2.turn = "true"
        }
        
        else if(player2.turn == "true" && tile.innerHTML == ""){
            tile.innerHTML = player2.mark;
            gameBoard.push(player2.mark);
            oMarks.push(parseInt(tile.id));
            player2.turn = "false";
            player1.turn = "true"
    
        }

        winCheck();
     }))

    function winCheck() {
        const winCombos = [
            [0,1,2],
            [0,3,6],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,4,6],
            [2,5,8],
            [0,4,8], 
        ]

        // Loop iterates over each winCombo array 
        for(let [index, combo] of winCombos.entries()) {
            // Check if player moves index is equal to combo array index 
            if (combo.every(elem => xMarks.indexOf(elem) > -1) && document.getElementById('subheader').textContent == '') {
                document.getElementById('subheader').textContent= "X's Win!"
                console.log(subheader.textContent);
                 
            } else if (combo.every(elem => oMarks.indexOf(elem) > -1) && document.getElementById('subheader').textContent == '') {
                document.getElementById('subheader').textContent= "O's Win!"
        
            } 
        }
        if (gameBoard.length == 9 && document.getElementById('subheader').textContent == '') {
            document.getElementById('subheader').textContent= "It's a tie!"
       
        }
     
        
    }

    function resetBoard(){
        xMarks = [];
        oMarks = [];
        gameBoard = [];
        document.querySelectorAll('.tile').forEach(tile => tile.textContent='');
        document.getElementById('subheader').textContent = '';
    }


})();

 //player factory function
 const playerFactory = ((playername, order, mark, turn) => {
    return {playername, order, mark, turn};
    });
    
let player1 = playerFactory("nick", 1, "X", "true");
let player2 = playerFactory("bot", 2, "O", "false");