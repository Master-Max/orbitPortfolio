import '/style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.set(0,0,25);

renderer.render( scene, camera );

// const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
// const material = new THREE.MeshStandardMaterial( { color:0x8AFF47 } );
// const torus = new THREE.Mesh( geometry, material );

// scene.add(torus)

// const pointLight = new THREE.PointLight(0xffffff)
// pointLight.position.set (0 ,0 ,0)

// const ambientLight = new THREE.AmbientLight(0xffffff)

// scene.add(pointLight, ambientLight)

// const ambientLight = new THREE.AmbientLight(0xffffff)
// scene.add(ambientLight)

const mainLight = new THREE.PointLight(0xffffff, 22.0);
scene.add( mainLight);



// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function createSun() {
  const material = new THREE.MeshPhongMaterial({
    color:'yellow',
    emissive: '#F8CE3B',
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const sunMesh = new THREE.Mesh( geometry, material);
  sunMesh.scale.set(5, 5, 5);

  console.log('making sun mesh');
  console.log(sunMesh);

  return sunMesh
}

function createEarth() {
  const material = new THREE.MeshPhongMaterial({
    color: 'teal',
    emissive: '#112244',
    flatShading: true
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const earthMesh = new THREE.Mesh( geometry, material);
  // earthMesh.scale.set(1, 1, 1);

  return earthMesh
}

function createMoon() {
  const material = new THREE.MeshPhongMaterial({
    emissive: '#191A0F',
    flatShading: true
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const mesh = new THREE.Mesh( geometry, material);
  mesh.scale.set(0.5, 0.5, 0.5);

  return mesh
}

function createMars() {
  const material = new THREE.MeshPhongMaterial({
    color: 'red',
    emissive: '#191AFF',
    flatShading: true
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const mesh = new THREE.Mesh( geometry, material);
  mesh.scale.set(0.4, 0.4, 0.4);

  return mesh
}

function createSaturn() {
  const materialS = new THREE.MeshPhongMaterial({
    color: '#3F940B',
    emissive: '#899C3D',
    flatShading: true
  });
  const geometryS = new THREE.SphereBufferGeometry(1, 12, 12);

  const meshS = new THREE.Mesh( geometryS, materialS);
  meshS.scale.set(1.2, 1.2, 1.2);
 
  return meshS
}

function createRing() {
  const materialR = new THREE.MeshPhongMaterial({
    color: '#F3F1C3',
    emissive: '#F3F1C3',
    flatShading: true
  });
  materialR.color.convertSRGBToLinear();
  const geometryR = new THREE.TorusGeometry( 1.8, .15, 16, 100 );
  const meshR = new THREE.Mesh( geometryR, materialR);

  meshR.rotateX(1.3)

  return meshR
}

function createJupiter() {
  const material = new THREE.MeshPhongMaterial({
    color: '#E97E09',
    emissive: '#B79700',
    flatShading: true
  });
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const mesh = new THREE.Mesh( geometry, material);
  mesh.scale.set(1.7, 1.7, 1.7);
 
  return mesh
}
function createJMoon1(){
  const material = new THREE.MeshPhongMaterial({
    emissive: '#191A0F',
    flatShading: true
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const mesh = new THREE.Mesh( geometry, material);
  mesh.scale.set(0.25, 0.25, 0.25);

  return mesh
}
function createJMoon2(){
  const material = new THREE.MeshPhongMaterial({
    emissive: '#191A0F',
    flatShading: true
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const mesh = new THREE.Mesh( geometry, material);
  mesh.scale.set(0.4, 0.4, 0.4);

  return mesh
}
function createJMoon3(){
  const material = new THREE.MeshPhongMaterial({
    emissive: '#191A0F',
    flatShading: true
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const mesh = new THREE.Mesh( geometry, material);
  mesh.scale.set(0.5, 0.5, 0.5);

  return mesh
}
function createJMoon4(){
  const material = new THREE.MeshPhongMaterial({
    emissive: '#191A0F',
    flatShading: true
  });
  material.color.convertSRGBToLinear();
  const geometry = new THREE.SphereBufferGeometry(1, 12, 12);

  const mesh = new THREE.Mesh( geometry, material);
  mesh.scale.set(0.2, 0.2, 0.2);

  return mesh
}


let sun = createSun();
let earth = createEarth();
let moon = createMoon();
let mars = createMars();

let jupiter = createJupiter();
let jupiterMoon1 = createJMoon1();
let jupiterMoon2 = createJMoon2();
let jupiterMoon3 = createJMoon3();
let jupiterMoon4 = createJMoon4();


let saturn = createSaturn();
let ring = createRing();

const sunOrbit1 = new THREE.Object3D();
const earthOrbit = new THREE.Object3D();
earthOrbit.position.x = 10;
const moonOrbit = new THREE.Object3D();
moonOrbit.position.x = 2;
const sunOrbit2 = new THREE.Object3D();
const marsOrbit = new THREE.Object3D();
marsOrbit.position.x = 17;

const sunOrbit3 = new THREE.Object3D;
const jupiterOrbit = new THREE.Object3D();
jupiterOrbit.position.x = 45;

const jupiterOrbit1 = new THREE.Object3D();

const jupiterOrbit2 = new THREE.Object3D();

const jupiterOrbit3 = new THREE.Object3D();

const jupiterOrbit4 = new THREE.Object3D();

const jupiterMoonOrbit1 = new THREE.Object3D();
jupiterMoonOrbit1.position.x = 3;
const jupiterMoonOrbit2 = new THREE.Object3D();
jupiterMoonOrbit2.position.x = 5;
const jupiterMoonOrbit3 = new THREE.Object3D();
jupiterMoonOrbit3.position.x = 7;
const jupiterMoonOrbit4 = new THREE.Object3D();
jupiterMoonOrbit4.position.x = 9;

const sunOrbit4 = new THREE.Object3D();
const saturnOrbit = new THREE.Object3D();
saturnOrbit.position.x = 75;

moonOrbit.add(moon)
earthOrbit.add(moonOrbit)
earthOrbit.add(earth)
// sunOrbit1.add(sun)
sunOrbit1.add(earthOrbit)

marsOrbit.add(mars)
sunOrbit2.add(marsOrbit)

jupiterMoonOrbit1.add(jupiterMoon1)
jupiterMoonOrbit2.add(jupiterMoon2)
jupiterMoonOrbit3.add(jupiterMoon3)
jupiterMoonOrbit4.add(jupiterMoon4)
jupiterOrbit1.add(jupiterMoonOrbit1)
jupiterOrbit2.add(jupiterMoonOrbit2)
jupiterOrbit3.add(jupiterMoonOrbit3)
jupiterOrbit4.add(jupiterMoonOrbit4)
jupiterOrbit.add(jupiter)

jupiterOrbit.add(jupiterOrbit1)

jupiterOrbit.add(jupiterOrbit2)

jupiterOrbit.add(jupiterOrbit3)

jupiterOrbit.add(jupiterOrbit4)
sunOrbit3.add(jupiterOrbit)

saturnOrbit.add(ring)
saturnOrbit.add(saturn)
sunOrbit4.add(saturnOrbit)
// sunOrbit1.add(earth)

// const group = new THREE.Group();
// group.add(sunOrbit1);

// scene.add(group);
scene.add(sun, sunOrbit1, sunOrbit2, sunOrbit3, sunOrbit4);
// scene.add(sun);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = 25 + (t * -0.015);
  // camera.position.x = t * -0.0002;
  camera.position.y = t * -0.008;
  camera.lookAt(0,0,0);

}

document.body.onscroll = moveCamera

// function onWindowResize() {
        
//   // camera.aspect = width / height;
//   // camera.updateProjectionMatrix();
//   renderer.setSize(width, height)
// }

// window.addEventListener('resize', onWindowResize)


function animate(){
  requestAnimationFrame( animate );

    sun.rotation.y += 0.019;

    earth.rotation.y +=0.01;
    earthOrbit.rotation.y +=0.01;
    sunOrbit1.rotation.y +=0.01;

    mars.rotation.y +=0.005;
    sunOrbit2.rotation.y +=0.007;

    sunOrbit3.rotation.y +=0.0006
    jupiterOrbit1.rotation.y +=0.1;
    jupiterOrbit2.rotation.y +=0.05;
    jupiterOrbit3.rotation.y +=0.0333;
    jupiterOrbit4.rotation.y +=0.025;


    // ring.rotation.x =(Math.cos(sunOrbit3.rotation.y * (1/4)));
    sunOrbit4.rotation.y +=0.0005;
  // torus.rotation.x += 0.01;
  // torus.rotation.z += 0.005;
  // torus.rotation.y += 0.01;

  // controls.update();

  renderer.render( scene, camera );
}

animate()
