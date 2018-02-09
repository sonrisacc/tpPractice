function Drone() {}

Drone.prototype.takeoff = function takeoff(callback) {
  setTimeout(function() {
    callback();
    console.log('Took off');
  }, 600);
};
Drone.prototype.turnOnCamera = function turnOnCamera(callback) {
  setTimeout(function() {
    callback();
    console.log('Camera turned on');
  }, 1000);
};
Drone.prototype.pointDownGimbal = function pointDownGimbal(callback) {
  setTimeout(function() {
    callback();
    console.log('Gimbal pointing down');
  }, 750);
};
Drone.prototype.flyToMission = function FlyToMission(callback) {
  setTimeout(function() {
    callback();
    console.log('Flown to mission');
  }, 2000);
};
Drone.prototype.takePhoto = function takePhoto(callback) {
  setTimeout(function() {
    callback();
    console.log('Photo taken');
  }, 500);
};
Drone.prototype.land = function land(callback) {
  setTimeout(function() {
    callback();
    console.log('Landed');
  }, 1000);
};
Drone.prototype.hey = function hey(callback) {
  console.log('heyheyhey');
  console.log('this', this);
  // callback();
  return this;
};
Drone.prototype.ha = function ha(callback) {
  setTimeout(function() {
    // callback();
    console.log('ha');
  }, 100);
};
// DON'T MODIFY ANYTHING ABOVE HERE

// START ADD YOUR CODE HERE
// function AsyncDrone() {
//   Drone.call(this);
//   this.queue = [];
// }
// AsyncDrone.prototype = Object.create(Drone.prototype);
// AsyncDrone.prototype.constructor = AsyncDrone;
// //
// const temp = new AsyncDrone();
const tempDrone = new Drone();
// let a = temp.land;
//
// temp.land = function() {
//   const _land = function() {
//     return new Promise((resolve, reject) => {
//       a(val => {
//         resolve();
//       });
//     });
//   };
//   this.queue.push(_land);
//   return this;
// };
// temp.land();

// let a = tempDrone.land;
// let b = tempDrone.takePhoto;
// tempDrone.land = () => new Promise(resolve => a(resolve));
//
// const myApi = previousActions => {
//   previousActions = previousActions || Promise.resolve();
//   return {
//     a: () => myApi(previousActions.then(tempDrone.land)),
//     b: () => myApi(previousActions.then(tempDrone.takePhoto))
//   };
// };
//
// let drone = myApi();
// drone.a().b();

// const tempDrone = new Drone();
let takeoff = tempDrone.takeoff;
let turnOnCamera = tempDrone.turnOnCamera;
let pointDownGimbal = tempDrone.pointDownGimbal;
let flyToMission = tempDrone.flyToMission;
let takePhoto = tempDrone.takePhoto;
let land = tempDrone.land;

tempDrone.takeoff = () => new Promise(resolve => takeoff(resolve));
tempDrone.turnOnCamera = () => new Promise(resolve => turnOnCamera(resolve));
tempDrone.pointDownGimbal = () =>
  new Promise(resolve => pointDownGimbal(resolve));
tempDrone.flyToMission = () => new Promise(resolve => flyToMission(resolve));
tempDrone.takePhoto = () => new Promise(resolve => takePhoto(resolve));
tempDrone.land = () => new Promise(resolve => land(resolve));

const myApi = previousActions => {
  previousActions = previousActions || Promise.resolve();
  return {
    takeoff: () => myApi(previousActions.then(tempDrone.takeoff)),
    turnOnCamera: () => myApi(previousActions.then(tempDrone.turnOnCamera)),
    pointDownGimbal: () =>
      myApi(previousActions.then(tempDrone.pointDownGimbal)),
    flyToMission: () => myApi(previousActions.then(tempDrone.flyToMission)),
    takePhoto: () => myApi(previousActions.then(tempDrone.takePhoto)),
    land: () => myApi(previousActions.then(tempDrone.land))
  };
};

let drone = myApi();
drone.land().takePhoto();
// END ADD YOUR CODE HERE

// DONT MODIFY ANYTHING BELOW HERE
// console.log('Expected Output:');
// console.log('Took off');
// console.log('Camera turned on');
// console.log('Gimbal pointing down');
// console.log('Flown to mission');
// console.log('Photo taken');
// console.log('Landed');
//
// console.log('\n\nActual Output:');
// drone.takeoff();
// .turnOnCamera()
// .pointDownGimbal()
// .flyToMission()
// .takePhoto()
// .land();
