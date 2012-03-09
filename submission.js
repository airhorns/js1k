var image = new Image();
var currentHue = 50, currentSaturation = 100, currentLightness = 50, editing = false;
image.src = exampleImageSource;
image.onload = function() {
  c.width = image.width+80;
  c.height = Math.max(image.height, 385);
  a.drawImage(image,78,0);

  setInterval(function() {
    // Draw three components of color picker
    var hueGradient = a.createLinearGradient(0, 0, 25, 360);
    for(i=0;i<7;i++) {
      hueGradient.addColorStop(i/6, "hsl("+i*60+","+currentSaturation+"%,"+currentLightness+"%)");
    }
    a.fillStyle = hueGradient;
    a.fillRect(0, 0, 25, 360);

    var saturationGradient = a.createLinearGradient(27, 0, 52, 360);
    saturationGradient.addColorStop(0, "hsl("+currentHue+",0%,"+currentLightness+"%)");
    saturationGradient.addColorStop(1, "hsl("+currentHue+",100%,"+currentLightness+"%)");
    a.fillStyle = saturationGradient;
    a.fillRect(26, 0, 25, 360);

    var lightnessGradient = a.createLinearGradient(54, 0, 79, 360);
    lightnessGradient.addColorStop(0, "hsl("+currentHue+","+currentSaturation+"%,0%)");
    lightnessGradient.addColorStop(1, "hsl("+currentHue+","+currentSaturation+"%,100%)");
    a.fillStyle = lightnessGradient;
    a.fillRect(52, 0, 25, 360);

    // Draw box representing current color
    currentStyle = "hsl("+currentHue+","+currentSaturation+"%,"+currentLightness+"%)";
    a.fillStyle = currentStyle;
    a.fillRect(0, 361, 77, 25);
    // Draw position indicators for hsl
    a.fillStyle = "rgb(0,0,0)";
    a.fillRect(0, Math.min(currentHue, 360), 25, 1);
    a.fillRect(26, Math.min(currentSaturation/100*360-1, 360), 25, 1);
    a.fillRect(52, Math.min(currentLightness/100*360, 360), 25, 1);
  }, 30);

  // Add event listeners
  c.addEventListener('mousedown', function() {
    editing = true;
  });

  c.addEventListener('mouseup', function() {
    editing = false;
  });

  c.addEventListener('mousemove', function(e) {
    x = e.x - 10;
    y = e.y - 10;
    if(editing) {
      if(x < 25) {
        currentHue = y;
      } else if (x < 50) {
        currentSaturation = y/360*100;
      } else if (x < 75) {
        currentLightness = y/360*100;
      } else {
        a.fillStyle = currentStyle;
        a.fillRect(x, y, 5, 5);
      }
    }
  });

};
