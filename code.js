var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6917b851-5761-4372-92af-fbb9867868b6","4d73f46b-9ac4-4f65-962b-28eb92345179","47d40909-066a-4792-8a3b-bc8e92288b8c","6bbd220b-c74f-443b-b6e2-3e4a2475df01","883625d4-e442-4b6d-ad7a-04cb20e67793"],"propsByKey":{"6917b851-5761-4372-92af-fbb9867868b6":{"name":"people","sourceUrl":null,"frameSize":{"x":397,"y":282},"frameCount":1,"looping":true,"frameDelay":12,"version":"bAofYWgbkPdTDPKGqQBNg.DJpa7Eiwz0","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":282},"rootRelativePath":"assets/6917b851-5761-4372-92af-fbb9867868b6.png"},"4d73f46b-9ac4-4f65-962b-28eb92345179":{"name":"car_black_1","sourceUrl":null,"frameSize":{"x":71,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"NShxYg9U9TdvHm0WM5Nv1bMMi6mdTVI8","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":130},"rootRelativePath":"assets/4d73f46b-9ac4-4f65-962b-28eb92345179.png"},"47d40909-066a-4792-8a3b-bc8e92288b8c":{"name":"car_red_1","sourceUrl":null,"frameSize":{"x":70,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"lwgSPgNeRdIZ52FALNkh3VmODmY5jsU7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":131},"rootRelativePath":"assets/47d40909-066a-4792-8a3b-bc8e92288b8c.png"},"6bbd220b-c74f-443b-b6e2-3e4a2475df01":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"883625d4-e442-4b6d-ad7a-04cb20e67793":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("people");
  sam.scale = 0.1;
  
  car1 = createSprite(100,150,10,10);
  car1.setAnimation("car_black_1");
  car1.scale = 0.3;
  car1.velocityY = 6;
  car2 = createSprite(245,150,10,10);
  car2.setAnimation("car_red_1");
  car2.scale = 0.3;
  car2.velocityY = 6;
  car3 = createSprite(175,230,10,10);
  car3.setAnimation("car_green_1");
  car3.scale = 0.3;
  car3.velocityY = -6;
  car4 = createSprite(320,230,10,10);
  car4.setAnimation("car_blue_1");
  car4.scale = 0.3;
  car4.velocityY = -6;
  
 
//add the velocity to make the car move.

function draw() {
   background("white");
   car1.bounceOff(boundary1);
   car2.bounceOff(boundary1);
   car3.bounceOff(boundary1);
   car4.bounceOff(boundary1);
   car1.bounceOff(boundary2);
   car2.bounceOff(boundary2);
   car3.bounceOff(boundary2);
   car4.bounceOff(boundary2);
  
    sam.collide(boundary1);
    sam.collide(boundary2);
  if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)) {
    sam.x = 20;
    sam.y = 190;
    life = life+1;
  }
  if (keyDown("right")){
    sam.x = sam.x+5;
  }
  if (keyDown("left")){
    sam.x = sam.x-5;
  }
  if (keyDown("down")){
    sam.y = sam.y+5;
  }
  if (keyDown("up")){
    sam.y = sam.y-5;
  }
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
