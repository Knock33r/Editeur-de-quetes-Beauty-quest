let Aller = document.querySelector(".Aller-t");

Aller.addEventListener('click', () => {
    console.log('Je suis cliqué');    
    let aller_co = document.getElementById("aller_co").value;
    let aller_rg = document.getElementById("aller_rg").value;
    let aller_rec = document.getElementById("aller_rec").value;
    let aller_id = document.getElementById("aller_id").value;
    let resultat = `endRewards:
- id: moneyReward
  money: ${aller_rec}
scoreboard: false
startMessage: §6<§eQuêtes§6> §aVous avez commencé la quête §e{quest_name}§a.
name: aller en ${aller_co}
endMsg: §6<§eQuêtes§6> §aVous avez terminé la quête §e{quest_name}§a.
manager:
  branches:
    '0':
      stages:
        '0':
          region: ${aller_rg}
          world: world
          exit: false
          stageType: REGION
      endingStages: {}
id: ` + aller_id;

navigator.clipboard.writeText(resultat)
Aller.innerHTML = "Copié!"
});
    

//---------------------------------------------------------------------------------------------



//    document.getElementById('a').innerHTML = resultat
//<pre id="a" class="resultat">Le code apparaitra ici.</pre>