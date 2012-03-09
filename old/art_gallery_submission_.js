c.width = w = 200;
c.heigh = h = 200;
rects = [{x: 10, y:10, width: 30, height: 30}], nextRect = 0;
vertexes = [];
c.addEventListener('mousedown', function(e) {
  nextRect = e;
});
c.addEventListener('mousemove', function(e) {
  if(nextRect) {
    nextRect.width = e.x - nextRect.x;
    nextRect.height = e.y - nextRect.y;
  }
});
c.addEventListener('mouseup', function(e) {
  rects.push(nextRect);
  nextRect = 0;
});
setInterval(function() {
  a.fillStyle = "rgba(255,255,255,1)";
  a.fillRect(0,0,w,h);
  a.fillStyle = "rgba(255,165,0,1)";
  for(i=0; i < rects.length; i++) {
    with(rects[i]) {
      a.fillRect(x,y,width||0,height||0);
    }
  }
  if(nextRect) {
    a.fillStyle = "rgba(255,165,0,0.5)";
    a.fillRect(nextRect.x, nextRect.y, nextRect.width || 0, nextRect.height || 0);
  }
  a.fillStyle = "rgba(0,0,0,1)";
  vertexes = [];
  imgd = a.getImageData(0,0,w,h).data;
  wp = w * 4;
  for( i = 0; i < imgd.length; i+=4) {
    s = imgd[i+1]+imgd[i+5]+imgd[i+wp+1]+imgd[i+wp+5];
    if(s == 750 || s == 930) {
      y=(i/4/w)|0;
      x=(i/4)-y*w;
      vertexes.push(x,y);
    }
  }
  for(i=0;i<vertexes.length; i+=2) {
    a.fillRect(vertexes[i],vertexes[i+1], 2,2);
  }
}, 30);
