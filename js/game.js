//alert('Works!');

const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
}

//console.log(target);

//console.log(document.getElementById('map'));

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');

let clicks = 0;

//console.log ($map);

$map.addEventListener('click', function (e) {
    //console.log ('click');
    clicks++;
    let distance = getDistance (e, target);
    //console.log (distance);
    let distanceHint = getDistanceHint(distance);
    //console.log (distanceHint);
    //$distance.innerHTML = distanceHint;
    $distance.innerHTML = `<h1>${distanceHint}</h1>`   

    if (distance < 20) {
      alert (`Found the Treasure in ${clicks} clicks!`);
      location.reload();
    
    }
} )