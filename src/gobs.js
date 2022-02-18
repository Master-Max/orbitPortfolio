/****************************************
* Draw Array
*****************************************/
const renderQueue = [];
function removeFromRenderQueue(obj){
  const index = renderQueue.indexOf(obj);
  renderQueue.splice(index, 1);
}

const tmpQueue = [];
/****************************************
* Collision Array

TODO...

I'm not sure if im removing objects eficently...
I should look more into this.

maybe rather than objects telling the renderQueue to remove them
when they meet the right conditions I can have the objects set a value
to false like renderMeNextFrame and if that is false, when the object
is looked at in the update loop then the object will be removed.

I could also have the object store it's position in the queue but then
when it gets removed I would need to update all other objects positions

A whole other thing is somehting called pooling that I should probably do

because there will never be more than 3 cannonballs at any time I can reuse
instances of the cannonballs rather than remake a new one every time

I may also be able to do this with the asteroids though since they multiply
it may not work as well.

I still dont know why sometimes asteroids with a health of 2 disapear without
making children

and for that matter random asteroids ocationally appear out of nowhere

I belive these issues to be related

TODO2...

At some point I should really just dedicate memory space at the start to the
cannonballs, I only allow 4 to spawn ever so it shouldn't be to hard.

This may fix the disapearing cannonball problem but IDK if that's still a
bug in the current build

I may want to look into doing something like this for the asteroids too but
idk exactly how I would do that since the asteroids become more numerous
each level.

I do really need to make a restart button at some point.

Also I may want to look into local highscores for now before moving towards
the ultimate goal of a hosted api for handeling that feature.

ALSO an automatic refresh of the entire site when you move the window around
could be a good idea.

*****************************************/
const collisionQueue = [];
function removeFromCollisionQueue(obj){
  const index = collisionQueue.indexOf(obj);
  collisionQueue.splice(index,1);
}

const asteroidQueue = [];
function removeFromAsteroidQueue(obj){
  const index = asteroidQueue.indexOf(obj);
  asteroidQueue.splice(index,1);
}



/****************************************
*Dev Buttons
*****************************************/
const startButton = document.getElementById('start-btn');
console.log(startButton);
const stopButton = document.getElementById('stop-btn');
console.log(stopButton);

/****************************************
*Player Stuff
*****************************************/
let player;

/****************************************
* Game Stuff
*****************************************/
let currentLevel = 1;
let currentSpawnNumber = 4;
let isGameRunning = false;
let nextLevel = 2;
let nextSpawnNumber = 6;

let currentScene = 1;

/****************************************
* Highscore Stuff
*****************************************/

// let localScores = undefined;

let tmpScores = window.localStorage.getItem('highscores');
console.log(tmpScores + '\ntypeof: ' + typeof(tmpScores));

let ttd = [1000, 2000, 3000, 5000, 10000];//Temp Test Data

if(tmpScores == null){
  window.localStorage.setItem('highscores', JSON.stringify(ttd));
}

let ttsd = window.localStorage.getItem('highscores')
let tttsd = JSON.parse(ttsd);

// Sort TTTSD

tttsd.sort(function(a,b){return b-a});

setLeaderboard(tttsd);

console.log('TTSD: ' + ttsd);
console.log('Typeof ttsd: ' + typeof(ttsd) + '\nTypeof tttsd: ' + typeof(tttsd));
console.log(ttsd[0] + '\n tttsd: ' + tttsd[0]);

if(tmpScores == null){console.log('YUP its null')}
else{

}

function setLeaderboard(arr){
  let LI1 = document.getElementById('leaderboard1');
  LI1.innerHTML = arr[0];
  let LI2 = document.getElementById('leaderboard2');
  LI2.innerHTML = arr[1];
  let LI3 = document.getElementById('leaderboard3');
  LI3.innerHTML = arr[2];
  let LI4 = document.getElementById('leaderboard4');
  LI4.innerHTML = arr[3];
  let LI5 = document.getElementById('leaderboard5');
  LI5.innerHTML = arr[4];
}

// Test Stuff

//const canvasDiv = document.getElementById('canvas-div');
