(function() {
  var utf8Length;

  module.exports = utf8Length = function(s) {
    var c, i, l;
    l = 0;
    i = 0;
    while (i < s.length) {
      c = s.charCodeAt(i);
      if (c <= 0x007f) {
        l += 1;
      } else if (c <= 0x07ff) {
        l += 2;
      } else if (c >= 0xd800 && c <= 0xdfff) {
        l += 2;
      } else {
        l += 3;
      }
      i++;
    }
    return l;
  };

}).call(this);
