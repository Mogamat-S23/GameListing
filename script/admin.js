// console.log(JSON.parse(localStorage.getItem('game')))
// localStorage.clear()
let games = JSON.parse(localStorage.getItem('game'))


function theGame() {
    document.getElementById('display').innerHTML ='';
    games.forEach((details,index) => {
        // console.log(details);
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
            <i class="fa-solid fa-file-pen"></i>    
            
            </a>
            <i class="fa-solid fa-trash-can" onclick="remove(${index})"></i>
            </td>   
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
                    <h6>Type of Genre</h6>
                    <input id="Genre${index}" value="${details.Genre}">
                    <h6>Amount of Name</h6>
                    <input value="${details.icon2}">
                    <h6> Type Name</h6>
                    <input id="name${index}" value="${details.name}">
                    <h6> Type Platform</h6>
                    <input id="platform${index}" value="${details.platform}">
                    <h6> Add Type</h6>
                    <input id="type${index}" value="${details.type}">
                    <h6>Enter price</h6>
                    <input id="price${index}" value="${details.price}">
                    <h6>Enter description</h6>
                    <input value="${details.desc}">

                    


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="edit(${index})" data-bs-dismiss="modal">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
        `
    })
}
theGame()

///edit button 

// function edit(id){
    // console.log("Im being clicked");
    // let eid = document.getElementById(`id${id}`).value
    // let eGenre = document.getElementById(`Genre${id}`).value
    // let ename = document.getElementById(`name${id}`).value
    // let eplatform = document.getElementById(`platform${id}`).value
    // let etype = document.getElementById(`type${id}`).value
    // let eprice = document.getElementById(`price${id}`).value
    // let edesc  = document.getElementById(`desc${id}`).value

    // console.log(eid);
    // games[id].id=parseInt(eid);
    // games[id].Genre=eGenre;
    // games[id].name=ename;
    // games[id].platform=eplatform;
    // games[id].type=etype;
    // games[id].price=parseInt(eprice);
    // games[id].desc=parseInt(edesc);

    // const newProp = prompt('Change Game Name')
    // const task = games.find((game) => game.id === id);
    // task.name = newProp
    // localStorage.setItem('game',JSON.stringify(games));
    // console.log(games[id]);
    // window.location.reload();
//     theGame();
// };
function edit(id) {
    // UPDATE
    console.log("Im being clicked");
    // variables for edited values
    let eGenre = document.getElementById(`Genre${id}`).value
    let ename = document.getElementById(`name${id}`).value
    let eplatform = document.getElementById(`platform${id}`).value
    let etype = document.getElementById(`type${id}`).value
    let eprice = document.getElementById(`price${id}`).value
    // let edesc  = document.getElementById(`desc${id}`).value
    // passing edited values into array
    games[id].Genre=eGenre;
    games[id].name=ename;
    games[id].platform=eplatform;
    games[id].type=etype;
    games[id].price=parseInt(eprice);
    // games[id].desc=edesc;
    //   Save it to localStorage
      localStorage.setItem('game', JSON.stringify(games));
    // Calling Function
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



