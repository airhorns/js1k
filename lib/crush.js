Q = [];

for (i = 127; --i; i - 10 && i - 13 && i - 34 && i - 39 && i - 92 && Q.push(String.fromCharCode(i)));

module.exports = doCrush = function(code) {
    var a;
    i = a = code.replace(/([\r\n]|^)\s*\/\/.*|[\r\n]+\s*/g, "").replace(/\\/g, "\\\\"), B = a.length / 2, m = "";
    for (S = encodeURI(i).replace(/%../g, "i").length; ; m = c + m) {
        for (c = 0, i = 122; !c && --i; !~a.indexOf(Q[i]) && (c = Q[i])) ;
        if (!c) break;
        for (o = {}, M = N = e = Z = t = 0; ++t <= B; ) for (i = 0; ++i < a.length - t; ) if (!o[x = a.substr(j = i, t)] && ~(j = a.indexOf(x, j + t))) for (Z = t, o[x] = 1; ~j; o[x]++) j = a.indexOf(x, j + t);
        B = Z;
        for (i in o) {
            j = encodeURI(i).replace(/%../g, "i").length;
            if (j = (R = o[i]) * j - R - j - 1) if (j > M || j == M && R > N) M = j, N = R, e = i;
        }
        if (!e) break;
        a = a.split(e).join(c) + c + e;
    }
    c = a.split('"').length < a.split("'").length ? (B = '"', /"/g) : (B = "'", /'/g);
    return "_=" + B + a.replace(c, "\\" + B) + B + ";for(Y=0;$=" + B + m + B + "[Y++];)with(_.split($))_=join(pop());eval(_)";
};
