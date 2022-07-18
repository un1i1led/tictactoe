const gameboard = (() => {
    const targetDiv = document.querySelector('.board');

    let board = ['', '', '', '', '', '', '', '', ''];

    const display = (target) => {
        for (i = 0; i < 9; i++){
            const arrayDiv = document.createElement('div');
            arrayDiv.className = 'array-div';
            arrayDiv.innerHTML = target[i];
            arrayDiv.setAttribute('data-id', i);
            targetDiv.appendChild(arrayDiv);
        }
    }

    display(board);

    return {
        display
    }

})();
