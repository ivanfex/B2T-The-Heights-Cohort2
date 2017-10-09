var resources = 1000;
var population = 1;
var protection = 1;
var politics = 1;
var technology = 1;
var hexs = ['a1','a2','a3','a4','b1','b2','b3','b4','b5','c1','c2','c3','c4'];
randomBackgrounds();
    function randomBackgrounds(){
        for(var i = 0; i < hexs.length; i++){
            document.getElementById(hexs[i]).src = (findTile() + '.png');
        }
    }
    function findTile(){
        var oneTile = parseInt(Math.random() * 26);
        console.log(oneTile);
        return oneTile;
    }

    function update(){
        keepResources()
        keepPopulation();
        keepProtection();
        keepPolitics();
        keepTech();
    }
    // function changeImage(imageElement){
    //     imageElement.src = '/home/ivaneduardo68/Documents/TKH/Hexcity/hex/PNG/Tiles/Medieval/medieval_farm.png';
    // }

    function keepResources(){
        resources -= 0.5;
        document.getElementById('resDisplay').innerHTML = Math.floor(resources);
        console.log(resources);
    }
    function keepPopulation(){
        population += 0.5;
        document.getElementById('populDisplay').innerHTML = Math.floor(population);
    }
    function keepProtection(){
        document.getElementById('protecDisplay').innerHTML = ('Level ' + protection);
    }
    function keepPolitics(){
        document.getElementById('politDisplay').innerHTML = ('Level ' + politics);
    }
    function keepTech(){
        document.getElementById('techDisplay').innerHTML = ('Level ' + technology)
    }
var time = setInterval(update, 1000);
