function gameObject(){
    const statsObject = {
        home: {
            teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players:{
                'Alan Anderson':{
                        number:0,
                        shoe:16,
                        points:22,
                        rebounds:12,
                        assists:12,
                        steals:3,
                        blocks:1,
                        slamDunks:1,
                    },
                'Reggie Evans':{
                        number:30,
                        shoe:14,
                        points:12,
                        rebounds:12,
                        assists:12,
                        steals:12,
                        blocks:12,
                        slamDunks:7,
                    },
                'Brook Lopez':{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                'Mason Plumlee':{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                'Jason Terry':{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                }                                    
            }
        },
        away: {
            teamName:'Charlotte Hornets',
            colors:['Turquoise','Purple'],
            players:{
                    'Jeff Adrien':{
                        number:4,
                        shoe:18,
                        points:10,
                        rebounds:1,
                        assists:1,
                        steals:2,
                        blocks:7,
                        slamDunks:2,
                    },                                                      
                    'Bismak Biyombo':{
                        number:0,
                        shoe:16,
                        points:12,
                        rebounds:4,
                        assists:7,
                        steals:7,
                        blocks:15,
                        slamDunks:10,
                    },
                    'DeSagna Diop':{
                        number:2,
                        shoe:14,
                        points:24,
                        rebounds:12,
                        assists:12,
                        steals:4,
                        blocks:5,
                        slamDunks:5,
                    },
                    'Ben Gordon':{
                        number:8,
                        shoe:15,
                        points:33,
                        rebounds:3,
                        assists:2,
                        steals:1,
                        blocks:1,
                        slamDunks:0,
                    },             
                    'Brendan Haywood':{
                        number:33,
                        shoe:15,
                        points:6,
                        rebounds:12,
                        assists:12,
                        steals:22,
                        blocks:5,
                        slamDunks:12,
                    }           
                }
            }
    }
    return statsObject
}

const bigObj = gameObject()

function numPointsScored(playerName){
    let game = gameObject() ;
    for (let gameKey in game){ 
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let playerObj = teamObj[teamKey]
            for (let playerKey in playerObj){
            if (playerName === playerKey){
                return playerObj[playerKey].points
            }
        }
        }   
    }
}

function shoeSize(playerName){
    let game = gameObject() ;
    for (let gameKey in game){ 
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let playerObj = teamObj[teamKey]
            for (let playerKey in playerObj){
            if (playerName === playerKey){
                return playerObj[playerKey].shoe
            }
        }
        }   
    }
}

//function teamColors
function teamColors(team){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey]
        for (let teamKey in teamObj)
            if (team === teamObj[teamKey]){
                return teamObj.colors
        } 
    }
}



//function teamNames

function teamNames(){
    let nameArray =[];
    let game = gameObject();
    for (let gameKey in game){
        let teamKey = game[gameKey];
        nameArray.push(teamKey.teamName);
    }
    return nameArray;
}
//teamNames()

//function playerNumbers
function playerNumbers(team){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey]
        if (team === teamObj.teamName){
            let numberArr = [];
            for (let player in teamObj.players){
            numberArr.push(teamObj.players[player].number)
            }
            return numberArr 
        }
    }
}
playerNumbers()

//function playerStats
function playerStats(playerName){
    let game = gameObject() ;
    for (let gameKey in game){ 
        let teamObj = game[gameKey];
        for (let teamKey in teamObj){
            let playerObj = teamObj[teamKey]
            for (let playerKey in playerObj){
            if (playerName === playerKey){
                return playerObj[playerKey]
            }
        }
        }   
    }
}

//function bigShoeRebounds
 

function bigShoeRebounds(){
    let game = gameObject() ; //get the game object
    let shoeArray = [];
    for (let gameKey in game){  // for each key in game (home,away)
        let teamObj = game[gameKey]; // 
        for (let player in teamObj.players){ // look at each player in players 
            shoeArray.push(teamObj.players[player].shoe) //get their shoe size and push into array
        }
        let largestShoe = Math.max(...shoeArray)
        console.log(largestShoe)
        debugger
        }
    }


//game > home/away > players > playerName > shoe
bigShoeRebounds()

// mostPointsScored

//winningTeam

//playerWithLongestName

//function doesLongNameStealATon