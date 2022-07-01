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
            <td>${details.name}</td>
            <td>${details.price}</td>
            <td>${details.type}</td>

            
            <td> <i class="fa-solid fa-file-pen" onclick="edit(${details.id})"></i>    <i class="fa-solid fa-trash-can"></i></td>
        </tr>
        `
    })
}
theGame()


//edit button

// function editItem(id) {
//     let item =item.find (item => item.id ===id)
//     item.title = 'new'
// }

// editItem(${item.id})



function edit(id){
    const newProp = prompt('What would u change')
    const task = games.find((game) => game.id === id);
    games.type = newProp
    localStorage.setItem('game',JSON.stringify(games));
    theGame();
};