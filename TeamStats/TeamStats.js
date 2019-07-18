const team = {
  _players: [
    {
      fName: 'Pablo',
      lName: 'Sanchez',
      age: 24
    },
    {
      fName: 'John',
      lName: 'Doe',
      age: 25
    },
    {
      fName: 'Jim',
      lName: 'Smith',
      age: 27
    }
  ],
  _games: [
    {
      opp: 'Madrid',
      teamPts: 3,
      oppPts: 4
    },
    {
      opp: 'Barca',
      teamPts: 3,
      oppPts: 2
    },
    {
      opp: 'Milan',
      teamPts: 2,
      oppPts: 1
    },
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(fName, lName, age){
    let player ={
      fName,
      lName,
      age
    };
    this.players.push(player);
  },
  addGame(oppName, tPoints, oppPoints){
    let game ={
      oppName,
      tPoints,
      oppPoints
    };
    this.games.push(game);
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Anderlecht', 2, 2);
team.addGame('Liverpool', 1, 0);
team.addGame('PSG', 1, 2);

console.log(team.games);
