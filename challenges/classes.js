// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attrs){
//   this.length = attrs.length;
//   this.width = attrs.width;
//   this.height = attrs.height;
// }

// CuboidMaker.prototype.volume = function(length, width, height){
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function(length, width, height){
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

class CuboidMaker{
  constructor(attrs){
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker{
  constructor(cubeAttrs){
    super(cubeAttrs)
    this.side = cubeAttrs.side;
  }
  cubeVol(){
    return Math.pow(this.side, 3);
  }
  cubeSurfaceArea(){
    return 6 * Math.pow(this.side, 2);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

//===STRETCH===
const cubeBaby = new CubeMaker({
  side: 10
})

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cubeBaby.cubeVol()); // 1000
console.log(cubeBaby.cubeSurfaceArea()); // 600



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.