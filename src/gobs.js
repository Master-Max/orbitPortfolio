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
const stopButton = document.getElementById('stop-btn');


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


// Test Stuff

//const canvasDiv = document.getElementById('canvas-div');
