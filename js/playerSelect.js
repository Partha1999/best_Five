
const selectionPlayerDiasbled = document.getElementsByClassName('player');
for (let i = 0; i < selectionPlayerDiasbled.length; i++) {
    let selectionPlayer = selectionPlayerDiasbled[i];
    selectionPlayer.addEventListener('click', function (event) {
        event.target.style.backgroundColor = 'gray';
        document.getElementById('selectionPlayer');
        selectionPlayer.setAttribute('disabled', true);
    });
}
function selectedFivePlayer(element) {

    const playerSelected = element.parentNode.children[1].innerText;

    const addPlayer = document.getElementById('list-container');

    const list = document.querySelectorAll('ol li');
    if (list.length < 5) {
        const li = document.createElement('li');
        li.innerText = playerSelected;
        li.classList.add('listPlayer');
        addPlayer.appendChild(li);
    }
    else {
        alert('max player selection completed')
    }
}