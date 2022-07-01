let games = JSON.parse(localStorage.getItem('game')) ?
JSON.parse(localStorage.getItem('game')) :
localStorage.setItem('game',JSON.stringify([
    {
        id: 1,
        Genre :' Sports',
        
        icon: '<i class="fa-solid fa-users"></i>',
        icon2:'<i class="fa-solid fa-hand-fist"></i>',
        URL: '../Images/2k20.jpg',
        name:'WWE 2K20',
        platform: 'Third Person',
        type:'Multiplayer',
        price:400,
        desc: 'WWE 2K20 is a professional wrestling video game developed by Visual Concepts and published by 2K Sports. Players take control of different unique models of Bayley, Banks, Lynch & Flair, in 15 matches. The 2K Towers mode, first introduced in WWE 2K19, made its return to the series.',
        image:'../Images/2k2-1.jpg'

    },

    {
        id: 2,
        Genre :' Shooting',
        
        icon2:'<i class="fa-solid fa-crosshairs"></i>',
        icon:'<i class="fa-solid fa-users"></i>',
        URL: '../Images/battle.jpg',
        name:'Battelfield 2042',
        platform: 'Third Person',
        type:'Multiplayer',
        price:500,
        desc: 'Battlefield 2042 marks the return to the iconic all-out warfare of the franchise. Adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal. With support for 128 players, prepare for unprecedented scale on vast environments.',
        image:'../Images/battle1.jpg'
        
    },

    {
        id: 3,
        Genre :'Shooting',
       
        icon:'<i class="fa-solid fa-user-group"></i>',
        icon2:'<i class="fa-solid fa-crosshairs"></i>',
        URL: '../Images/blood.jpg',
        name:'Back4Blood',
        platform: 'First Person',
        type:'Co-Op',
        price:500,
        desc: 'Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the centre of a war against the Ridden. These once-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilisation.',
        image:'../Images/blood1.jpg'
        
    },

    {
        id: 4,
        Genre :'Shooting',
       
        icon:'<i class="fa-solid fa-users"></i>',
        icon2:'<i class="fa-solid fa-crosshairs"></i>',
        URL: '../Images/cod.jpg',
        name:'Call Of Duty: Black Ops  ',
        platform: 'First Person',
        type:'Multiplayer',
        price:400,
        desc: 'Black Ops Cold War is set during the early 80s of the Cold War. The campaign follows CIA operative Russel Adler as he pursues an alleged Soviet spy, whose goal is to subvert the United States and tilt the balance of power towards the Soviet Union.',
        image:'../Images/cold1.jpg'
        
    },

    {
        id: 5,
        Genre :'Racing',
        
        icon:'<i class="fa-solid fa-user"></i>',
        icon2:'<i class="fa-solid fa-flag-checkered"></i>',
        URL: '../Images/nfs.jpg',
        name:'Need For Speed : Heat ',
        platform: 'First/Third Person',
        type:'Solo',
        price:700,
        desc: 'Need for Speed Heat is a racing game set in an open world environment called Palm City, a fictionalised version of Miami, Florida and its surrounding areas. The in-game map features diverse geography, including mountainous areas and open fields.',
        image:'../Images/nfs2.jpg'
        
    },

    {
        id: 6,
        Genre :'Open World',
       
        icon: '<i class="fa-solid fa-users"></i>',
        icon2:'<i class="fa-solid fa-globe"></i>',
        URL: '../Images/ghost.jpg',
        name:'Ghost ',
        platform: 'Third person ',
        type:'Multiplayer',
        price:900,
        desc: 'Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.',
        image:'../Images/ghost1.jpg'
        
    },

     
    {
        id: 7,
        Genre :' Sport',
       
        icon:'<i class="fa-solid fa-users"></i>',
        icon2:'<i class="fa-solid fa-futbol"></i>',
        URL: '../Images/fifa21.jpg',
        name:'Fifa 21 ',
        platform: 'Third Person',
        type:'Multiplayer',
        price:900,
        desc: 'FIFA 21 is an association football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series.',
        image:'../Images/fifa21-2.jpg'
        
    },

    {
        id: 8,
        Genre :'Open World',
     
        icon: '<i class="fa-solid fa-users"></i>',
        icon2:'<i class="fa-solid fa-globe"></i>',
        URL: '../Images/far.jpg',
        name:'Far Cry 6 ',
        platform: 'First Person',
        type:'Multiplayer',
        price:800,
        desc: 'Far Cry® 6 thrusts players into the adrenaline-filled world of a modern-day guerrilla revolution. As dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, dutifully at his side. Become a guerrilla fighter and burn their regime to the ground.',
        image:'../Images/far2.jpg'
        
    },

    {
      id: 9,
      Genre :'Action/Adventure',
     
      icon:'<i class="fa-solid fa-users"></i>',
      icon2:'<i class="fa-solid fa-hand-fist"></i>',
      URL: '../Images/watch.jpg',
      name:'Watch Dogs :Legion ',
      platform: 'Third Person',
      type:'Multiplayer',
      price:700,
      desc: 'Watch Dogs: Legion is an action-adventure game played from a third-person perspective, and taking place within an open world setting based upon London, which can be explored either on foot ─ utilizing parkour moves ─ vehicles, or fast-travelling via the city Underground stations.',
      image:'../Images/watch1.jpg'
      
  },

  {
    id: 10,
    Genre :' Sport',
    
    icon:'<i class="fa-solid fa-users"></i>',
    icon2:'<i class="fa-solid fa-basketball"></i>',
    URL: '../Images/nba.jpg',
    name:'NBA 2K22 ',
    platform: 'Third Person',
    type:'Multiplayer',
    price:800,
    desc: 'NBA 2K22 is a 2021 basketball simulation video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association. It is the 23rd installment in the NBA 2K franchise and the successor to NBA 2K21.',
    image:'../Images/nba2.jpg'
    
},

{
  id: 11,
  Genre :'Action ',

  icon:'<i class="fa-solid fa-users"></i>',
  icon2:'<i class="fa-solid fa-hand-fist"></i>',
  URL: '../Images/combat.jpg',
  name:'Mortal Combat ',
  platform: 'First Person',
  type:'Multiplayer',
  price:800,
  desc: 'Mortal Kombat 11 is a 2019 fighting game developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment. Running on a heavily modified version of Unreal Engine 3, It is the eleventh and final main installment in the Mortal Kombat series and a sequel to 2015 Mortal Kombat X',
  image:'../Images/combat2.jpg'
  
},

{
  id: 12,
  Genre :'Action/Adventure',

  icon: '<i class="fa-solid fa-users"></i>',
  icon2:'<i class="fa-solid fa-hand-fist"></i>',
  URL: '../Images/days.jpg',
  name:'Days Gone ',
  platform: 'Third Person',
  type:'Multiplayer',
  price:800,
  desc: 'Days Gone is a massive open-world action-adventure game set in a harsh wilderness two years after a devastating global pandemic. Play as Deacon St. John, a drifter and bounty hunter who rides the broken road, fighting to survive while searching for a reason to live.',
  image:'../Images/days2.jpg'
  
},

{
  id: 13,
  Genre :'Open World',
  
  icon:'<i class="fa-solid fa-users"></i>',
  icon2:'<i class="fa-solid fa-globe"></i>',
  URL: '../Images/gtav.jpg',
  name:'Grand Theft Auto V ',
  platform: 'First/Third person ',
  type:'Multiplayer',
  price:800,
  desc: 'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.',
  image:'../Images/gta2.jpg'
  
},

{
  id: 14,
  Genre :'Action',
 
  icon:'<i class="fa-solid fa-users"></i>',
  icon2:'<i class="fa-solid fa-hand-fist"></i>',
  URL: '../Images/ufc4jpg.jpg',
  name:'UFC 4 ',
  platform: 'Third Person ',
  type:'Multiplayer',
  price:600,
  desc: 'Like its predecessor, UFC 4 is a fighting game based on the mixed martial arts promotion Ultimate Fighting Championship (UFC). There are 229 unique fighters, with 81 alternate versions.',
  image:'../Images/ufc1.jpg'
  
},

{
  id: 15,
  Genre :'Horror',

  icon:'<i class="fa-solid fa-users"></i>',
  icon2:'<i class="fa-solid fa-skull"></i>',
  URL: '../Images/memories.jpg',
  name:'11-11: Memories Retold ',
  platform: 'Third person ',
  type:'Multiplayer',
  price:800,
  desc: '11-11: Memories Retold is an immersive, beautiful, and emotionally charged game. It is at its best when it functions as a playable film, with you making the major decisions. Where it falls down is in its clunky gameplay and story beats that are locked behind secret item collection.',
  image:'../Images/mem1.jpg'
  
},

{
  id: 16,
  Genre :'Racing',
 
  icon: '<i class="fa-solid fa-user-group"></i>',
  icon2:'<i class="fa-solid fa-flag-checkered"></i>',
  URL: '../Images/f121.jpg',
  name:'Formula 1 : 2021 ',
  platform: 'First/Third Person',
  type:'Co-Op',
  price:700,
  desc: 'F1 2021 is the best-looking and most customisable instalment of the long-running Codemasters series to date, and the ability to tinker under the hood of the core career experience and play co-op with a friend is very welcome. With the addition of Braking Point it is also arguably the boldest F1 game so far.',
  image:'../Images/f12.jpg'
  
},


]));


function getGames(g) {
  document.getElementById('row-listing').innerHTML =''
    g.forEach((game, index) => {
        document.getElementById('row-listing').innerHTML +=
        `<div class ="col-3"> 
            <div class="card" style="width: 21rem; ">
        <img src="${game.URL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${game.name}</h5>
          <h5 class="card-title">${game.icon2}${game.Genre}</h5>
          <h5 class="card-title">${game.platform}</h5>
          <h5 class="card-title">R${game.price.toFixed(2)}</h5>
          <span>${game.icon}${game.type}</span>
        </div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
            View Game
          </button>
      </div>
        
        
        <!-- Modal -->
  <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${game.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class ="row">
        <div class ="col-6">
        <div class="modal-body">
        </div>
        <img src="${game.image}" class="card-img-top" alt="...">
        </div>
        <div class="col-6">
        
        <p>${game.desc}</p>

        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
  </div>
        `
    })
}
getGames(games);


//SORT BY Genre

function sortGenre(genre) {
  if (genre.target.value === 'All') {
    return getGames (games)
  }
  let genreArr = games.filter(Y => {
   return Y.Genre == genre.target.value
  }) 
  getGames(genreArr)
}

document.getElementById('genre').addEventListener('change',sortGenre);



//Sort BY PRICE

function sortPrice(price) {
  if (price.target.value <= '1000') {
    return getGames (games)
  }
  let PriceArr = games.filter(Y => {
   return Y.price == price.target.value
  }) 
  getGames(PriceArr)
}

document.getElementById('price').addEventListener('change',sortPrice);

//SORT BY TYPE

function sortPlatform(platform) {
  if (platform.target.value === 'All') {
    return getGames (games)
  }
  let PlatformArr = games.filter(Y => {
   return Y.platform == platform.target.value
  }) 
  getGames(PlatformArr)
}

document.getElementById('platform').addEventListener('change',sortPlatform);
//SORT BY platform

function sortType(type) {
  if (type.target.value === 'All') {
    return getGames (games)
  }
  let typeArr = games.filter(Y => {
   return Y.type == type.target.value
  }) 
  getGames(typeArr)
}

document.getElementById('type').addEventListener('change',sortType);


