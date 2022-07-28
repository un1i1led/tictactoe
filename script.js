const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const boardDiv = document.querySelector('.board');
    const remove = () => {
        boardDiv.remove();
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

    const mark = (item) => {
        Gameboard.remove();
        Gameboard.board[0] = currentPlayer.marker;
        Gameboard.display();
    };

    document.querySelectorAll('.array-div').forEach(item => {
        item.addEventListener('click', function(){
            mark(item);
        });
    });


})();