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
        remove
    }
})();

const Player = (name, marker) => {
    return {
        name,
        marker
    }
};

const Game = (() => {
    const player1 = Player('X', 'X');
    const player2 = Player('O', 'O');
    let currentPlayer = player1;

    const disableBoard = (board) => {
        board.forEach((element, index) => {
            board[index] = '-'
        });
    };

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
            console.log(`${currentPlayer.name} wins`)
            disableBoard(Gameboard.board);
            console.log(Gameboard.board);
        } else if (rowTwo == 'XXX' || rowTwo == 'OOO') {
            alert(`${currentPlayer.name} wins!`);
        } else if (rowThree == 'XXX' || rowThree == 'OOO'){
            alert(`${currentPlayer.name} wins!`);
        } else if (columnOne == 'XXX' || columnOne == 'OOO') {
            alert(`${currentPlayer.name} wins!`);
        } else if (columnTwo == 'XXX' || columnTwo == 'OOO') {
            alert(`${currentPlayer.name} wins!`);
        } else if (columnThree == 'XXX' || columnThree == 'OOO') {
            alert(`${currentPlayer.name} wins!`);
        } else if (diagOne == 'XXX' || diagOne == 'OOO') {
            alert(`${currentPlayer.name} wins!`);
        } else if (diagTwo == 'XXX' || diagTwo == 'OOO') {
            alert(`${currentPlayer.name} wins!`);
        } 
    };

    const nextPlayer = (current) => {
        if (current == player1) {
            return currentPlayer = player2;
        } else {
            return currentPlayer = player1;
        }
    };

    const displayTurn = (current) => {
        const turnDiv = document.querySelector('.indicator');
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
        document.querySelectorAll('.array-div').forEach(item => {
            item.addEventListener('click', function(){
                mark(item);
            });
        });
    };

    addListeners();
    displayTurn(currentPlayer);

})();