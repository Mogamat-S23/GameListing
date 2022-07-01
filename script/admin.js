// console.log(JSON.parse(localStorage.getItem('game')))
// localStorage.clear()
let games = JSON.parse(localStorage.getItem('game'))


function theGame() {
    document.getElementById('display').innerHTML ='';
    games.forEach((details,index) => {
        document.getElementById('display').innerHTML += 
        `
        <tr>
            <td>${details.id}</td>
            <td><img src="${details.URL}" width="100px" height="100px"></td>
            <td>${details.name}</td>
            <td>${details.price}</td>
            <td>${details.type}</td>

            
            <td> 
            <a class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
            <i class="fa-solid fa-file-pen" onclick="edit(${details.id})"></i>    
            
            </a>
            <i class="fa-solid fa-trash-can" onclick="remove(${index})"></i>
        </tr>

        <!-- Modal -->
                <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit the Game </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h6>Type of Id</h6>
                    <input value="${details.id}">
                    <h6>Type of URL</h6>
                    <input value="${details.Genre}">
                    <h6>Amount of Name</h6>
                    <input value="${details.icon2}">
                    <h6>Amount of Price</h6>
                    <input value="${details.icon}">
                    <h6> Type</h6>
                    <input value="${details.URL}">
                    <h6> Type</h6>
                    <input value="${details.name}">
                    <h6> Type</h6>
                    <input value="${details.platform}">
                    <h6> Type</h6>
                    <input value="${details.type}">
                    <h6>Enter price</h6>
                    <input value="${details.price}">
                    <h6>Enter description</h6>
                    <input value="${details.desc}">
                    <h6>Enter image</h6>
                    <input value="${details.image}">


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="edit(${index})">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
        `
    })
}
theGame()

///edit button 

function edit(){
    // const newProp = prompt('Change Game Name')
    // const task = games.find((game) => game.id === id);
    // task.name = newProp
    localStorage.setItem('game',JSON.stringify(games));
    // window.location.reload();
    theGame();
};

//delete button
function remove(id) {
    if (id > -1) {
      games.splice(id, 1);
      // Apply the change
      localStorage.setItem('game', JSON.stringify(games));
    }
    for(i=0;i<games.length;i++){
        games[i].id = i+1;
    }
    // newgames = games.filter(cover =>{
    //     cover.id-1 !== id
    // })

    theGame();
};

//add button



