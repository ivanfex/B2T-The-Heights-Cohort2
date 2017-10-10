//The amount of resources
var resources = 1000;

//Level of each faction of the hexcity
var population = 1;
var protection = 1;
var politics = 1;
var technology = 1;

//The point incrementer of the points for each faction
var resDecreaser = 0.5;
var resIncrementer = 0;
var populIncrementer = 0.075;
var protecIncrementer = 0;
var politIncrementer = 0;
var techIncrementer = 0;

//XP like points for leveling up tiles and factions
var protecPoints = 0;
var politPoints = 0;
var techPoints = 0;

//The point cap for the current level of a faction
var resLevelCap = 5000;
var populLevelCap = 5000;
var protecLevelCap = 1500;
var politLevelCap = 1500;
var techLevelCap = 1500;

//An array objects to store the id, faction type and level of each tile
var hexs = [
    {hex: 'a1', type: '', level: 0},
    {hex: 'a2', type: '', level: 0},
    {hex: 'a3', type: '', level: 0},
    {hex: 'a4', type: '', level: 0},
    {hex: 'b1', type: '', level: 0},
    {hex: 'b2', type: '', level: 0},
    {hex: 'b3', type: '', level: 0},
    {hex: 'b4', type: '', level: 0},
    {hex: 'b5', type: '', level: 0},
    {hex: 'c1', type: '', level: 0},
    {hex: 'c2', type: '', level: 0},
    {hex: 'c3', type: '', level: 0},
    {hex: 'c4', type: '', level: 0}
];

//Updates the point status of each faction
function update(){
    keepResources()
    keepPopulation();
    keepProtection();
    keepPolitics();
    keepTech();
}
function keepResources(){
    if(resources < resLevelCap || resources > 0){
        resources += resIncrementer;
        resources -= resDecreaser;
    }
    document.getElementById('resDisplay').innerHTML = ('Resources ' + Math.floor(resources));
}
function keepPopulation(){
    if(population < populLevelCap){
        population += populIncrementer;
    }
    document.getElementById('populDisplay').innerHTML = ('Population ' + Math.floor(population));
}
function keepProtection(){
    //Display the protection level, the current points and the current points cap
    if(protecPoints < protecLevelCap){
        protecPoints += protecIncrementer;
    }
    document.getElementById('protecDisplay').innerHTML = ('Protection Level ' + protection + ' (' + protecPoints + '/' + protecLevelCap + ')');
}
function keepPolitics(){
    //Display the politics level, the current points and the current points cap
    if(politPoints < politLevelCap){
        politPoints += politIncrementer;
    }
    document.getElementById('politDisplay').innerHTML = ('Politics Level ' + politics + ' (' + politPoints + '/' + politLevelCap + ')');
}
function keepTech(){
    //Display the technology level, the current points and the current points cap
    if(techPoints < techLevelCap){
        techPoints += techIncrementer;
    }
    document.getElementById('techDisplay').innerHTML = ('Tech Level ' + technology + ' (' + techPoints + '/' + techLevelCap + ')');
}

randomBackgrounds();
//Chooses a random tile from the terrain folder and displays it on the webpage
    function randomBackgrounds(){
        for(var i = 0; i < hexs.length; i++){
            document.getElementById(hexs[i].hex).src = ('Assets/Tiles/Empty/' + findTile() + '.png');
        }
    }
    //Finds a random tile in the terrain folder
    function findTile(){
        var oneTile = parseInt(Math.random() * 14);
        console.log(oneTile);
        return oneTile;
    }
    //Called by onclick on each tile to level it up
    function levelUp(thisHex){
        var selector = document.getElementById('factions').value;
        switch (thisHex.id) {
            case 'a1':
                if(hexs[0].type == '' && hexs[0].level == 0){
                    hexs[0].type = selector;
                    hexs[0].level = 1;
                    newFactionTile(hexs[0]);
                }else{
                    upgradeTile(hexs[0]);
                }
                break;
            case 'a2':
                if(hexs[1].type == '' && hexs[1].level == 0){
                    hexs[1].type = selector;
                    hexs[1].level = 1;
                    newFactionTile(hexs[1]);
                }else{
                    upgradeTile(hexs[1]);
                }
                    break;
            case 'a3':
                if(hexs[2].type == '' && hexs[2].level == 0){
                    hexs[2].type = selector;
                    hexs[2].level = 1;
                    newFactionTile(hexs[2]);
                }else{
                    upgradeTile(hexs[2]);
                }
                    break;
            case 'a4':
                if(hexs[3].type == '' && hexs[3].level == 0){
                    hexs[3].type = selector;
                    hexs[3].level = 1;
                    newFactionTile(hexs[3]);
                }else{
                    upgradeTile(hexs[3]);
                }
                    break;
            case 'b1':
                if(hexs[4].type == '' && hexs[4].level == 0){
                    hexs[4].type = selector;
                    hexs[4].level = 1;
                    newFactionTile(hexs[4]);
                }else{
                    upgradeTile(hexs[4]);
                }
                    break;
            case 'b2':
                if(hexs[5].type == '' && hexs[5].level == 0){
                    hexs[5].type = selector;
                    hexs[5].level = 1;
                    newFactionTile(hexs[5]);
                }else{
                    upgradeTile(hexs[5]);
                }
                    break;
            case 'b3':
                if(hexs[6].type == '' && hexs[6].level == 0){
                    hexs[6].type = selector;
                    hexs[6].level = 1;
                    newFactionTile(hexs[6]);
                }else{
                    upgradeTile(hexs[6]);
                }
                    break;
            case 'b4':
                if(hexs[7].type == '' && hexs[7].level == 0){
                    hexs[7].type = selector;
                    hexs[7].level = 1;
                    newFactionTile(hexs[7]);
                }else{
                    upgradeTile(hexs[7]);
                }
                    break;
            case 'b5':
                if(hexs[8].type == '' && hexs[8].level == 0){
                    hexs[8].type = selector;
                    hexs[8].level = 1;
                    newFactionTile(hexs[8]);
                }else{
                    upgradeTile(hexs[8]);
                }
                    break;
            case 'c1':
                if(hexs[9].type == '' && hexs[9].level == 0){
                    hexs[9].type = selector;
                    hexs[9].level = 1;
                    newFactionTile(hexs[9]);
                }else{
                    upgradeTile(hexs[9]);
                }
                    break;
            case 'c2':
            if(hexs[10].type == '' && hexs[10].level == 0){
                hexs[10].type = selector;
                hexs[10].level = 1;
                newFactionTile(hexs[10]);
            }else{
                upgradeTile(hexs[10]);
            }
                break;
            case 'c3':
                if(hexs[11].type == '' && hexs[11].level == 0){
                    hexs[11].type = selector;
                    hexs[11].level = 1;
                    newFactionTile(hexs[11]);
                }else{
                    upgradeTile(hexs[11]);
                }
                    break;
            case 'c4':
                if(hexs[12].type == '' && hexs[12].level == 0){
                    hexs[12].type = selector;
                    hexs[12].level = 1;
                    newFactionTile(hexs[12]);
                }else{
                    upgradeTile(hexs[12]);
                }
                    break;
        }
        console.log(hexs);
    }

    function newFactionTile(thisTile){
        switch(thisTile.type){
            case 'resources':
                document.getElementById(thisTile.hex).src = ('Assets/Tiles/Resources/1.png')
                break;
            case 'population':
                document.getElementById(thisTile.hex).src = ('Assets/Tiles/Population/1.png')
                break;
            case 'protection':
                document.getElementById(thisTile.hex).src = ('Assets/Tiles/Protection/1.png')
                break;
            case 'politics':
                document.getElementById(thisTile.hex).src = ('Assets/Tiles/Politics/1.png')
                break;
            case 'technology':
                document.getElementById(thisTile.hex).src = ('Assets/Tiles/Technology/1.png')
                break;
        }
    }
    //The logic and point substraction tile behind upgrades
    function upgradeTile(upHex){
        switch(upHex.type){
            case 'resources':
                if(resources > resLevelCap){
                    upHex.level += 1;
                    resLevelCap *= 1.5;
                    updateTile(upHex);
                }
                break;
            case 'population':
                if(population > populLevelCap){
                    upHex.level += 1;
                    populLevelCap *= 1.5;
                    updateTile(upHex);
                }
                break;
            case 'protection':
                if(protecPoints > protecLevelCap){
                    upHex.level += 1;
                    protecLevelCap *= 1.5;
                    updateTile(upHex);
                }
                break;
            case 'politics':
                if(politPoints > politLevelCap){
                    upHex.level += 1;
                    politLevelCap *= 1.5;
                    updateTile(upHex);
                }
                break;
            case 'technology':
                if(techPoints > techLevelCap){
                    upHex.level += 1;
                    techLevelCap *= 1.5;
                    updateTile(upHex);
                }
        }
    }
    function updateTile(upHex){
        switch(upHex.type){
            case 'resources':
                switch(upHex.level){
                    case 2:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 3:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 4:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 5:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 6:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 7:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 8:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 9:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 10:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 11:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                    case 12:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Resources/' + upHex.level + '.png');
                        break;
                }
                break;
            case 'population':
                switch(upHex.level){
                    case 2:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 3:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 4:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 5:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 6:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 7:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 8:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 9:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                    case 10:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Population/' + upHex.level + '.png');
                        break;
                }
                break;
            case 'protection':
                switch(upHex.level){
                    case 2:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Protection/' + upHex.level + '.png');
                        break;
                    case 3:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Protection/' + upHex.level + '.png');
                        break;
                    case 4:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Protection/' + upHex.level + '.png');
                        break;
                    case 5:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Protection/' + upHex.level + '.png');
                        break;
                    case 6:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Protection/' + upHex.level + '.png');
                        break;
                    case 7:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Protection' + upHex.level + '.png');
                        break;
                    case 8:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Protection' + upHex.level + '.png');
                        break;
                }
                break;
            case 'politics':
                switch(upHex.level){
                    case 2:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Politics/' + upHex.level + '.png');
                        break;
                    case 3:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Politics/' + upHex.level + '.png');
                        break;
                    case 4:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Politics/' + upHex.level + '.png');
                        break;
                    case 5:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Politics/' + upHex.level + '.png');
                        break;
                    case 6:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Politics/' + upHex.level + '.png');
                        break;
                    case 7:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Politics/' + upHex.level + '.png');
                        break;
                }
                break;
            case 'technology':
                switch(upHex.level){
                    case 2:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Technology/' + upHex.level + '.png');
                        break;
                    case 3:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Technology/' + upHex.level + '.png');
                        break;
                    case 4:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Technology/' + upHex.level + '.png');
                        break;
                    case 5:
                        document.getElementById(upHex.hex).src = ('Assets/Tiles/Technology/' + upHex.level + '.png');
                        break;
                }
                break;
        }
    }
//Update the display each second
var time = setInterval(update, 1000);
