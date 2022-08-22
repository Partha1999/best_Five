function addToSelectedPlayer(element) {
    
    const playerSelected = element.parentNode.children[1].innerText;
    // console.log(playerSelected);

    const addPlayer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerSelected;
    li.classList.add('listPlayer');
    addPlayer.appendChild(li);

    
    // const listed = document.querySelectorAll('li');
    // for (const lists of listed) {
    //     lists.style.margin = '10px';
    // }

    const listed = document.getElementsByClassName('listPlayer');
    for (const lists of listed) {
        lists.style.margin = '10px';
    }

    const changeSelectedplayer = document.getElementsByClassName('select-player');
}
