var random = 0;
var randomScrollX = 0;
var randomScrollY = 0;
var randomPosX = 0;
var randomPosY = 0;
var interval;

function startInterval() {
  clearInterval(interval); // Clear the existing interval, if any
  interval = setInterval(() => {
    random = Math.random();
    randomScrollX = Math.random() - 0.5;
    randomScrollY = Math.random() - 0.5;
    randomPosX = Math.random();
	randomPosY = Math.random();
  }, 100);
}

var lumaInterval;
var lumaArray = [1, 0.4,10,0.7,1,0.8,0.01,0.1,0.1,0.1,0.1]
var lumaValue = 0;

function startLumaInterval() {
  clearInterval(lumaInterval); 
  var currentIndex = 0;

  lumaInterval = setInterval(() => {
    lumaValue = lumaArray[currentIndex];
    currentIndex = (currentIndex + 1) % lumaArray.length;
  }, 400);
}

var imageInterval;
var imageArray = ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjVvazg0YmpoNDVjMWQycHYzMHU5aHl6Y3JoamMzM2djaG1mMXlvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tPlaxbzaO1kRG9O/giphy.mp4', 
                  'https://media.giphy.com/media/l46Cjl6gJY6rQUc4U/giphy.mp4',
                  'https://media.giphy.com/media/l3q2t4j3PO6Hs41tS/giphy.mp4',
                  'hhttps://media.giphy.com/media/26xBGA6sBQrFAh8as/giphy.mp4',
                  'https://media.giphy.com/media/l3q2IFHpEWeVvXwRO/giphy.mp4'
                 ];
var imageValue = '';

function startImageInterval() {
	var currentIndex = 0
  	clearInterval(imageInterval);	
  	imageInterval = setInterval(() => {
    	imageValue = imageArray[currentIndex];
      	console.log(imageValue)
      	s0.initVideo(imageValue)
      	currentIndex = (currentIndex + 1) % imageArray.length;
    },1500)

}


function clamp(number, minimum, maximum) {
    return Math.max(minimum, Math.min(number, maximum));
}

startLumaInterval();

startInterval();

startImageInterval();

a.show()

voronoi(() => Math.sin(time) * 10,9, () => random)
  .diff(osc(1,1,1))
  .contrast(1.3)
  .scrollX(() => Math.sin(time) )
  .scrollY(() => Math.sin(time)) 
  .layer(
  	src(o0).scale(0.99).luma(() => lumaValue)
  )
  .layer(osc(1,1,1).kaleid().mask(shape(4,() => random / 2 )).scrollX(() => randomPosX).scrollY(() => randomPosY).color(0,1,0))
  .modulateRotate(src(s0))
  .layer(src(o0).scale(() => clamp(randomScrollX, 0.999, 0.97)).scrollY(() => clamp(randomScrollY,-0.001,0.001)).scrollX(() => clamp(randomScrollX,-0.001,0.001)).luma(() => lumaValue))
.contrast(() => clamp(a.fft[2],1,1.1))
.layer(src(s0).luma(1.2))
  .out(o0)

