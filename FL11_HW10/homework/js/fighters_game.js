const hundred = 100;
function probabilityOfAttack(agility) {
  const procent = hundred - agility;
  return Math.random() < procent / hundred;
}
function Fighter(fighter) {
  this.fighterInfo = fighter;
  this.fighterInfo.wins = 0;
  this.fighterInfo.losses = 0;
  this.fighterInfo.activeHp = this.fighterInfo.hp;
  if(this.fighterInfo.activeHp === this.fighterInfo.hp) {
    this.fighterInfo.currentHP = this.fighterInfo.hp;
  }
  this.getName = () => {
    return this.fighterInfo.name;
  }
  this.getDamage = () => {
    return this.fighterInfo.damage;
  }
  this.getAgility = () => {
    return this.fighterInfo.agility;
  }
  this.getHealth = () => {
    return this.fighterInfo.currentHP;
  }
  this.attack = (defender) => {
    this.defenderInfo = defender;
    const chance = probabilityOfAttack(defender.getAgility());
    if(chance) {
      this.defenderInfo.fighterInfo.currentHP -= this.getDamage();
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
    }else {
      console.log(`${this.getName()} attack missed`);
    }
  }
  this.logCombatHistory = () => {
    console.log(`Name: ${this.fighterInfo.name}, Wins: ${this.fighterInfo.wins}, Losses: ${this.fighterInfo.losses}`);
  }
  this.heal = (point) => {
    this.fighterInfo.currentHP += point;
    if(this.fighterInfo.currentHP > this.fighterInfo.hp) {
      this.fighterInfo.currentHP = this.fighterInfo.hp
    }
  }
  this.dealDamage = (point) => {
    this.fighterInfo.currentHP -= point;
    if(this.fighterInfo.currentHP < 0) {
      this.fighterInfo.currentHP = 0;
    }
  }
  this.addWin = () => {
    this.fighterInfo.wins++
  }
  this.addLoss = () => {
    this.fighterInfo.losses++
  }
}
function battle(myFighter1, myFighter2) {
  if(myFighter1.getHealth() === 0) {
    console.log(`${myFighter1.getName()} is dead and can't fight.`);
  }else if(myFighter2.getHealth() === 0) {
    console.log(`${myFighter2.getName()} is dead and can't fight.`);
  }else {
    let battleConfirm = true;
    this.battleBreak = () => {
      if (myFighter1.getHealth() < 0) {
        const heal = Math.abs(myFighter1.getHealth());
        myFighter1.heal(heal);
        myFighter1.addLoss();
        myFighter2.addWin();
        battleConfirm = false;
      }else if (myFighter2.getHealth() < 0) {
        const heal = Math.abs(myFighter2.getHealth());
        myFighter2.addLoss();
        myFighter1.addWin();
        myFighter2.heal(heal);
        battleConfirm = false;
      }else {
        battleConfirm = true;
      }
    }

    while (battleConfirm) {
      myFighter1.attack(myFighter2);
      this.battleBreak();
      if (!battleConfirm) {
        break
      }
      myFighter2.attack(myFighter1);
      this.battleBreak();
    }
  }
}