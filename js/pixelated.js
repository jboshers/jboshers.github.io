var ctx = canvas.getContext('2d'),
    img = new Image(),
    play = false;

/// turn off image smoothing - this will give the pixelated effect
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

/// wait until image is actually available
img.onload = pixelate;

/// some image, we are not struck with CORS restrictions as we
/// do not use pixel buffer to pixelate, so any image will do
img.src = 'http://pbs.twimg.com/profile_images/671556792543920128/EsnmiI-i_400x400.jpg';

/// MAIN function
function pixelate(v) {

    /// if in play mode use that value, else use slider value
    var size = (play ? v : 10) * 0.01,

        /// cache scaled width and height
        w = canvas.width * size,
        h = canvas.height * size;

    ctx.drawImage(img, 0, 0, w, h);

    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}

  function stopAnim() {
    play = true;
    pixelate(10);
  }

  function toggleAnim() {
    play = true;
    pixelate(100);
  }

  var cvs = document.getElementById('canvas');
  cvs.addEventListener('mouseenter', toggleAnim, false);
  cvs.addEventListener('mouseout', stopAnim, false);
