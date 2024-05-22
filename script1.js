let validera3 = document.querySelector('.Aller_c')

validera3.addEventListener('click', () => {

  console.log('Je suis cliqué');    
  let apprivoiser_name= document.getElementById("apprivoiser-info").value;
  let apprivoiser_Animal = document.getElementById("Animal").value;
  let apprivoiser_rec = document.getElementById("apprivoiser_rec").value;
  let apprivoiser_id = document.getElementById("apprivoiser-id").value;
  let apprivoiser_q = document.getElementById("apprivoiser_q").value
  let resultat = `endRewards:
  - id: moneyReward
    money: ${apprivoiser_rec}
  scoreboard: false
  startMessage: §6<§eQuêtes§6> §aVous avez terminé la quête §e{quest_name}§a.
  name: apprivoiser ${apprivoiser_name}
  endMsg: §6<§eQuêtes§6> §aVous avez terminé la quête §e{quest_name}§a.
  manager:
    branches:
      '0':
        stages:
          '0':
            entityType: ${apprivoiser_Animal}
            amount: ${apprivoiser_q}
            stageType: TAME
        endingStages: {}
  id: ${apprivoiser_id}`;

navigator.clipboard.writeText(resultat)
app_t.innerHTML = "Copié!"
});

