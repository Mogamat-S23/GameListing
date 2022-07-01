// console.log(JSON.parse(localStorage.getItem('game')))
// localStorage.clear()
let games = JSON.parse(localStorage.getItem('game'))


function theGame() {
    games.forEach((details,index) => {
        document.getElementById('display').innerHTML += 
        `
        <tr>
            <td>${details.id}</td>
            <td><img src="${details.URL}" width="100px" height="100px"></td>
            <td><input enabled value="${details.name}"</td>
            <td><input enabled value="${details.price}"</td>
            <td><input enabled value="${details.type}"</td>

            
            <td> <i class="fa-solid fa-file-pen" onclick="edit(${details.id})"></i>    <i class="fa-solid fa-trash-can"></i></td>
        </tr>
        `
    })
}
theGame()

///edit button 

function edit(id){
    const newProp = prompt('Change Game Name')
    const task = games.find((game) => game.id === id);
    task.name = newProp
    localStorage.setItem('game',JSON.stringify(games));
    window.location.reload();
    theGame();
};

///delet button

function remove(id) {
    if (id > -1) {
      games.splice(id, 1);
      // Apply the change
      localStorage.setItem('game', JSON.stringify(games));
    }
    for(i=0;i<games.length;i++){
        games[i].id = i+1;
    }
    theGame();
};