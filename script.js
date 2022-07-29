const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const boardDiv = document.querySelector('.board');
    const remove = () => {
        document.querySelectorAll('.array-div').forEach(item => {
            boardDiv.removeChild(item);
        });
    };

    const display = () => {
        for (let i = 0; i < board.length; i++){
            const cell = document.createElement('div');
            cell.setAttribute('data-id', i);
            cell.className = 'array-div';
            cell.innerHTML = board[i];
            boardDiv.appendChild(cell);
        };
    };

    display();
    
    return {
        board,
        display,
        remove,
    }
})();

const Player = (name, marker) => {
    return {
        name,
        marker
    }
};

const Game = (() => {
    const restartButton = document.querySelector('.btn-restart');
    const turnDiv = document.querySelector('.indicator');
    const player1 = Player('X', 'X');
    const player2 = Player('O', 'O');
    let currentPlayer = player1;
    let won = false;

    const restart = () => {
        const board = Gameboard.board;

        board.forEach((element, index) => {
            board[index] = '';
        });

        if (won == true) {
            const currentDiv = document.querySelector('.indicator');
            document.body.removeChild(currentDiv);
            createIndicator();
        }

        Gameboard.remove();
        Gameboard.display();
        won = false;
        currentPlayer = player1;
        displayTurn(currentPlayer);
        addListeners();
        console.log(board);
    }

    const createIndicator = () => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        document.body.prepend(indicator);
    }

    const checkWin = (board) => {
        const rowOne = board[0] + board[1] + board[2];
        const rowTwo = board[3] + board[4] + board[5];
        const rowThree = board[6] + board[7] + board[8];

        const columnOne = board[0] + board[3] + board[6];
        const columnTwo = board[1] + board[4] + board[7];
        const columnThree = board[2] + board[5] + board[8];

        const diagOne = board[0] + board[4] + board[8];
        const diagTwo = board[2] + board[4] + board[6];

        if (rowOne == 'XXX' || rowOne == 'OOO'){
            displayWinner(currentPlayer);
            won = true;
        } else if (rowTwo == 'XXX' || rowTwo == 'OOO') {
            displayWinner(currentPlayer);
            won = true;
        } else if (rowThree == 'XXX' || rowThree == 'OOO'){
            displayWinner(currentPlayer);
            won = true;
        } else if (columnOne == 'XXX' || columnOne == 'OOO') {
            displayWinner(currentPlayer);
            won = true;
        } else if (columnTwo == 'XXX' || columnTwo == 'OOO') {
            displayWinner(currentPlayer);
            won = true;
        } else if (columnThree == 'XXX' || columnThree == 'OOO') {
            displayWinner(currentPlayer);
            won = true;
        } else if (diagOne == 'XXX' || diagOne == 'OOO') {
            displayWinner(currentPlayer);
            won = true;
        } else if (diagTwo == 'XXX' || diagTwo == 'OOO') {
            displayWinner(currentPlayer);
            won = true;
        } 
    };

    const nextPlayer = (current) => {
        if (current == player1) {
            return currentPlayer = player2;
        } else {
            return currentPlayer = player1;
        }
    };

    const displayWinner = (current) => {
        turnDiv.remove();
        const winDiv = document.createElement('div');
        winDiv.className = 'indicator';
        winDiv.innerHTML = `${current.name} wins!`;
        document.body.prepend(winDiv);
    }

    const displayTurn = (current) => {
        turnDiv.innerHTML = `${current.name}'s turn`;
    }

    const mark = (item) => {
        if (Gameboard.board[item.dataset.id] != '') {
            return;
        } else {
            Gameboard.remove();
            Gameboard.board[item.dataset.id] = currentPlayer.marker;
            checkWin(Gameboard.board);
            nextPlayer(currentPlayer);
            displayTurn(currentPlayer);
            Gameboard.display();
            addListeners();
        }
    };

    const addListeners = () => {
        if (won == false) {
            document.querySelectorAll('.array-div').forEach(item => {
                item.addEventListener('click', function(){
                    mark(item);
                });
            });
        }
    };

    restartButton.addEventListener('click', restart);

    displayTurn(currentPlayer);
    addListeners();

})();