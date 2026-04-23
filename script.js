let state = {
    heroHp : 100 ,
    enemyHP : 100,
    isHeroTurn: true,
    isDefend: false ,
    isGameOver: false,
    msg:"" ,
    round: 0 
}

let heroAttack = () => {
    let damage = getRandom(10 , 30);
    state.enemyHP = Math.max(state.enemyHP-damage, 0) ;
    state.msg += "you Attack with damage :" + damage  + " , "; 
    checkifGameOver()
    updateUI()
     
    state.isHeroTurn = false ; 
    enemyTurn()
    

 };

let heroHeal = () => {
    let heal = getRandom(5 , 15);
     state.heroHp=Math.min(100 ,state.heroHp + heal );
     state.msg += "you Heal with  :" + heal + " Pint , ";
    checkifGameOver() 
    updateUI()

    
    
    state.isHeroTurn = false ; 
    enemyTurn()

 };

 let heroDefend = () => {
    state.isDefend= true ; 
    state.msg += "you Defend, ";
    
    checkifGameOver() 
    updateUI()
    enemyTurn()
 };

 let getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let checkifGameOver = () =>{
    if (state.enemyHP <= 0 || state.heroHp <= 0 ) { 
    document.getElementById("hero-hp").innerHTML = Math.max(state.heroHp , 0 ) ; 
    document.getElementById("enemy-hp").innerHTML = Math.max (state.enemyHP,0)  ; 

    if(state.enemyHP <= 0) {
        state.msg = "you Win !! "
    }else if(state.heroHp <= 0){
         state.msg = "Lost !!";
    }else{
        state.msg = "GameOver";
    }

    document.getElementById("heroAttackbtn").disabled = true;
    document.getElementById("heroHealbtn").disabled = true;
    document.getElementById("heroDefendbtn").disabled = true;
    }
}

let enemyTurn = () => { 
    if(state.enemyHP > 0 && state.heroHp > 0){
    let damage = getRandom(10 , 30);
    
    if(state.isDefend)
        damage=damage-getRandom(5 , 20)
    state.isDefend=false;
    state.heroHp = Math.max(state.heroHp-damage,0);
    state.msg += " And your Eenemy Attack with :" + damage  + " Pint , "; 
    checkifGameOver() 
    state.round += 1
    updateUI()
    state.isHeroTurn = true ; 
    state.msg ="";
    }

}

let updateUI = ()=>{
    document.getElementById("hero-hp").innerHTML = state.heroHp ; 
    document.getElementById("hp-value").style.width = state.heroHp + "%"
    document.getElementById("enemy-hp").innerHTML = state.enemyHP ; 
    document.getElementById("enemy-hp-value").style.width = state.enemyHP + "%"
    document.getElementById("round").innerHTML ="Round " + state.round
    document.getElementById("msg").innerHTML = state.msg

}

let resetGame = () =>{

    state.heroHp = 100 ,
    state.enemyHP =100,
    state.isHeroTurn= true,
    state.isDefend= false ,
    state.isGameOver= false;
    state.round = 0
    state.msg = ""
    document.getElementById("heroAttackbtn").disabled = false
    document.getElementById("heroHealbtn").disabled = false
    document.getElementById("heroDefendbtn").disabled = false
    updateUI()
    document.getElementById("msg").innerHTML = ""
}

