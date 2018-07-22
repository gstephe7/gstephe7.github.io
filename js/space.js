var canvas = document.getElementById('space');
var ctx = canvas.getContext('2d');
var stars = [];
var starsx = [];
var starsy = [];
var starsSize = [];
var numStars = 750;



function initCanvas() {
  canvas.width = 3000;
  canvas.height = 500;

  window.addEventListener('load', function() {

    for (var i = 0; i < numStars; i++) {
      var starx = Math.random() * canvas.width;
      var stary = Math.random() * canvas.height;
      var starSize = Math.random() * 10;

      starsx.push(starx);
      starsy.push(stary);
      starsSize.push(starSize);

      var star = new Image();

      star.src = 'img/star.png';

      stars.push(star);
    }

    setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < stars.length; i++) {
        ctx.drawImage(stars[i], starsx[i], starsy[i], starsSize[i], starsSize[i]);

        if (starsy[i] < -20) {
          starsy[i] = canvas.height;
        } else {
          starsy[i] = starsy[i] - .15;
        }
      }
    }, 20);

  });
}

initCanvas();
