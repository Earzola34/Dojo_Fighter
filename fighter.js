function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min + 1);
  }

  class Fighter {
    constructor(name)
    {
      this.name = name, 
        this.health = 10,
        this.strength;
        this.defense;
    }

    attack(defender) { 
        this.strength = randomGenerator(5, 10);
        defender.defense = randomGenerator(5, 10);

        console.log("-----------------------------------------------------")
        console.log("NEW ROUND:")
        console.log(`${this.name}'s strength (${this.strength}) vs ${defender.name}'s defense (${defender.defense})`)
        console.log("-----------------------------------------------------")

        this.doDamage(defender);
        this.status(defender);

    }

    doDamage(defender) {
        let damage = this.strength - defender.defense;
        if (damage < 0){
            console.log(`${this.name} was not strong enough to damage`)
        }
        else{
            defender.health -= damage;
            console.log(`${this.name} caused ${damage} damage to ${defender.name}`)
        }

    }
    status(defender) { 
        console.log("=====================================================")
        console.log(`HEALTH: ${this.name} ${this.health} & ${defender.name} ${defender.health}`)
        console.log("=====================================================")
    }

}

function gameStart(name1, name2) {    

    const players = [name1, name2];
    let aa = randomGenerator (0,2)-1; 

    let dd = 0;
    if (aa === 0){ dd = 1}
    if (aa === 1){ dd = 0}



    while (players[0].health > 0 && players[1].health > 0){
        players[aa].attack(players[dd]);

        if (aa === 0){ let dd = 1}
        if (aa === 1){ let dd = 0}
        if (players[dd].health > 0) {
            players[dd].attack(players[aa]);
          }
    }
    if (players[aa].health <= 0){
        console.log(`${players[aa].name} has been defeated... ${players[dd].name} WINS!`)
        return
    }
    if (players[dd].health <= 0){
        console.log(`${players[dd].name} has been defeated... ${players[aa].name} WINS!`)
        return
    }

}

  const Apollo = new Fighter("Apollo");

  const BigEd = new Fighter("BigEd");
 
  gameStart(Apollo, BigEd);


  let firstPunch = randomGenerator(0, 2);
  console.log(firstPunch);