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
            nextPlayer(currentPlayer);
            displayTurn(currentPlayer);
            console.log(Gameboard.board);
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