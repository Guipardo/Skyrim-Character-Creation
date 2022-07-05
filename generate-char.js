/* RETRIEVE DATA */
var charForm = document.getElementById('character-info');

charForm.addEventListener("submit", function(e){
    e.preventDefault();

     /* GET ALL HTML ELEMENTS OF CHARACTER EXPORT RECORD */
     var recordName = getFormItem('record-name');
     var recordProfession = getFormItem('record-profession');
     var recordSex = getFormItem('record-sex');
     var recordRace = getFormItem('record-race');
     var recordAlignment = getFormItem('record-alignment');
     var recordCivilWarSide = getFormItem('record-civil-war-side');
     var recordPointsDistribution = getFormItem('record-points-distribution');
     var recordBackstory = getFormItem('record-backstory');
     var recordAlliesFactions = getFormItem('record-allies-factions');
     var recordEnemiesFactions = getFormItem('record-enemies-factions');
     var recordMageSkills = getFormItem('record-mage-factions');
     var recordWarriorSkills = getFormItem('record-warrior-factions');
     var recordThiefSkills = getFormItem('record-thief-factions');
     var recordGuardianStone = getFormItem('record-guardian-stone');
     var recordAlliedDeity = getFormItem('record-allied-deity');
     var recordEnemyDeity = getFormItem('record-enemy-deity');
     var recordAllyDaedricPrince = getFormItem('record-ally-daedric-prince');
     var recordEnemyDaedricPrince = getFormItem('record-enemy-daedric-prince');
     var recordHouses = getFormItem('record-houses');
     var recordOtherHouse = getFormItem('record-other-house');
     var recordSpouse = getFormItem('record-spouse');
     var recordFirstSonDaughter = getFormItem('record-first-son-daughter');
     var recordSecondSonDaughter = getFormItem('record-second-son-daughter');

    /* CLEAR PREVIOUS DATA */
    clearHTMLContent(recordName);
    clearHTMLContent(recordProfession);
    clearHTMLContent(recordSex);
    clearHTMLContent(recordRace);
    clearHTMLContent(recordAlignment);
    clearHTMLContent(recordCivilWarSide);
    clearHTMLContent(recordPointsDistribution);
    clearHTMLContent(recordBackstory);
    clearHTMLContent(recordAlliesFactions);
    clearHTMLContent(recordEnemiesFactions);
    clearHTMLContent(recordMageSkills);
    clearHTMLContent(recordWarriorSkills);
    clearHTMLContent(recordThiefSkills);
    clearHTMLContent(recordGuardianStone);
    clearHTMLContent(recordAlliedDeity);
    clearHTMLContent(recordEnemyDeity);
    clearHTMLContent(recordAllyDaedricPrince);
    clearHTMLContent(recordEnemyDaedricPrince);
    clearHTMLContent(recordHouses);
    clearHTMLContent(recordOtherHouse);
    clearHTMLContent(recordSpouse);
    clearHTMLContent(recordFirstSonDaughter);
    clearHTMLContent(recordSecondSonDaughter);

    /* GET ALL DATA FROM THE CHARACTER CREATION FORM */
    var charName = getFormData('char-name');
    var profession = getFormData('profession');
    var sex = getFormData('sex');
    var race = getFormData('race');
    var alignment = getFormData('alignment');
    var civilWarSide = getFormData('civil-war-side');
    var pointsDistribution = getFormData('points-distribution');
    var backstory = getFormData('backstory');
    var guardianStone = getFormData('guardian-stone');
    var alliedDeity = getFormData('allied-deity');
    var enemyDeity = getFormData('enemy-deity');
    var allyDaedricPrince = getFormData('ally-daedric-prince');
    var enemyDaedricPrince = getFormData('enemy-daedric-prince');
    var spouse = getFormData('spouse');
    var firstSonDaughter = getFormData('first-son-daughter');
    var secondSonDaughter = getFormData('second-son-daughter');
    var otherHouse = getFormData('other-house');
    
    /* var backstory = getFormData('backstory') */

    /* SET VALUES INTO HTML ELEMENTS */
    setHTMLContent(recordName,charName);
    setHTMLContent(recordProfession,profession);
    setHTMLContent(recordSex,sex);
    setHTMLContent(recordRace,race);
    setHTMLContent(recordAlignment,alignment);
    setHTMLContent(recordCivilWarSide,civilWarSide);
    setHTMLContent(recordPointsDistribution,pointsDistribution);
    setHTMLContent(recordBackstory,backstory);
    setHTMLContentList(recordAlliesFactions,'allies-factions');
    setHTMLContentList(recordEnemiesFactions,'enemies-factions');
    setHTMLContentList(recordMageSkills,'mage-skills');
    setHTMLContentList(recordWarriorSkills,'warrior-skills');
    setHTMLContentList(recordThiefSkills,'thief-skills');
    setHTMLContent(recordGuardianStone,guardianStone);
    setHTMLContent(recordAlliedDeity,alliedDeity);
    setHTMLContent(recordEnemyDeity,enemyDeity);
    setHTMLContent(recordAllyDaedricPrince, allyDaedricPrince);
    setHTMLContent(recordEnemyDaedricPrince, enemyDaedricPrince);
    setHTMLContent(recordSpouse,spouse);
    setHTMLContent(recordFirstSonDaughter,firstSonDaughter);
    setHTMLContent(recordSecondSonDaughter,secondSonDaughter);
    setHTMLContentList(recordHouses,'houses-list');
    setHTMLContent(recordOtherHouse,otherHouse);

    /* HIDE PREVIOUS FORM AND SHOW CHARACTER RECORD COMPLETED */
    hideForm('menu');
    hideForm('main-content');
    exportChar('character-record');
})

/* SHOW DATA AT PAGE */
function exportChar(element_id){
    document.getElementById(element_id).classList.remove('hide');
    document.getElementById(element_id).classList.add('export-data');
}

function hideForm(element_id){
    document.getElementById(element_id).classList.add('hide');
}

function showForm(){
    document.getElementById('character-record').classList.add('hide');
    document.getElementById('character-record').classList.remove('export-data');
    document.getElementById('menu').classList.remove('hide');
    document.getElementById('main-content').classList.remove('hide');
}

/* GET AND HANDLE WITH DATA */
function setHTMLContent(item, content){
    item.innerHTML = item.innerHTML + " " + content;
}

function setHTMLContentList(htmlElement, dataId){
    var checkboxes = document.querySelectorAll('#' + dataId + ' input[type=checkbox]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        setHTMLContent(htmlElement, checkboxes[i].value +";");
    }
}

function clearHTMLContent(item){
    item.innerHTML = " ";
}

function getFormItem(id){
    return document.getElementById(id);
}

function getFormData(id){
    return document.getElementById(id).value;
}