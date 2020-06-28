class Player {
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;
    }
    //it brings the playerCount value from the dtabase to the variable
    getCount() {
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            playerCount = data.val();
        })
    }
    //updates the playerCount value in the database from the variable
    updateCount(count) {
       database.ref('/').update({
           playerCount:count
       })   
    }
    //creates player node and in player it will create player1, player2, player3, player4 nodes
    //create and update the name and distance of the player1,player2, player3, player4
    update() {
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    //brings info of all the player1, player2, player3, player4(name,distance)
    static getPlayerInfo() {
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val()
        })
    }
}