/**/_jsload2&&_jsload2('canvablepath', 'function qh(a){a=a.replace(/,/gm," ");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\\s])/gm,"$1 $2");a=a.replace(/([^\\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([0-9])([+\\-])/gm,"$1 $2");a=a.replace(/(\\.[0-9]*)(\\.)/gm,"$1 $2");a=a.replace(/([Aa](\\s+[0-9]+){3})\\s+([01])\\s*([01])/gm,"$1 $3 $4 ");a=qh.GV(a);a=qh.trim(a);this.BP=new function(a){this.NF= a.split(" ");this.reset=function(){this.rh=-1;this.Tt=this.Qw="";this.start=new qh.eg(0,0);this.Rw=new qh.eg(0,0);this.qb=new qh.eg(0,0);this.ja=[];this.Jo=[]};this.iM=function(){return this.rh>=this.NF.length-1};this.zj=function(){return this.iM()?p:this.NF[this.rh+1].match(/^[A-Za-z]$/)!=q};this.qE=function(){switch(this.Qw){case "m":case "l":case "h":case "v":case "c":case "s":case "q":case "t":case "a":case "z":return p}return t};this.ML=function(){this.rh++;return this.NF[this.rh]};this.vj=function(){return parseFloat(this.ML())}; this.uZ=function(){this.Tt=this.Qw;this.Qw=this.ML()};this.Em=function(){return this.cZ(new qh.eg(this.vj(),this.vj()))};this.xD=function(){var a=this.Em();return this.Rw=a};this.Bk=function(){var a=this.Em();return this.qb=a};this.CL=function(){return"c"!=this.Tt.toLowerCase()&&"s"!=this.Tt.toLowerCase()&&"q"!=this.Tt.toLowerCase()&&"t"!=this.Tt.toLowerCase()?this.qb:new qh.eg(2*this.qb.x-this.Rw.x,2*this.qb.y-this.Rw.y)};this.cZ=function(a){this.qE()&&(a.x+=this.qb.x,a.y+=this.qb.y);return a};this.hj= function(a,b,f){f!=q&&(0<this.Jo.length&&this.Jo[this.Jo.length-1]==q)&&(this.Jo[this.Jo.length-1]=Math.atan2(f.y-this.ja[this.ja.length-1].y,f.x-this.ja[this.ja.length-1].x));this.SB(a,b==q?q:Math.atan2(a.y-b.y,a.x-b.x))};this.SB=function(a,b){this.ja.push(a);this.Jo.push(b)}}(a);this.jb=function(){return this.hi(q)};this.hi=function(a){var c=this.BP;c.reset();var e=new qh.gP;for(a!=q&&a.beginPath();!c.iM();)switch(c.uZ(),c.Qw){case "M":case "m":var f=c.Bk();c.hj(f);e.ug(f.x,f.y);a!=q&&a.moveTo(f.x, f.y);for(c.start=c.qb;!c.zj();)f=c.Bk(),c.hj(f,c.start),e.ug(f.x,f.y),a!=q&&a.lineTo(f.x,f.y);break;case "L":case "l":for(;!c.zj();){var g=c.qb,f=c.Bk();c.hj(f,g);e.ug(f.x,f.y);a!=q&&a.lineTo(f.x,f.y)}break;case "H":case "h":for(;!c.zj();)f=new qh.eg((c.qE()?c.qb.x:0)+c.vj(),c.qb.y),c.hj(f,c.qb),c.qb=f,e.ug(c.qb.x,c.qb.y),a!=q&&a.lineTo(c.qb.x,c.qb.y);break;case "V":case "v":for(;!c.zj();)f=new qh.eg(c.qb.x,(c.qE()?c.qb.y:0)+c.vj()),c.hj(f,c.qb),c.qb=f,e.ug(c.qb.x,c.qb.y),a!=q&&a.lineTo(c.qb.x,c.qb.y); break;case "C":case "c":for(;!c.zj();){var i=c.qb,g=c.Em(),k=c.xD(),f=c.Bk();c.hj(f,k,g);e.QB(i.x,i.y,g.x,g.y,k.x,k.y,f.x,f.y);a!=q&&a.bezierCurveTo(g.x,g.y,k.x,k.y,f.x,f.y)}break;case "S":case "s":for(;!c.zj();)i=c.qb,g=c.CL(),k=c.xD(),f=c.Bk(),c.hj(f,k,g),e.QB(i.x,i.y,g.x,g.y,k.x,k.y,f.x,f.y),a!=q&&a.bezierCurveTo(g.x,g.y,k.x,k.y,f.x,f.y);break;case "Q":case "q":for(;!c.zj();)i=c.qb,k=c.xD(),f=c.Bk(),c.hj(f,k,k),e.LJ(i.x,i.y,k.x,k.y,f.x,f.y),a!=q&&a.quadraticCurveTo(k.x,k.y,f.x,f.y);break;case "T":case "t":for(;!c.zj();)i= c.qb,k=c.CL(),c.Rw=k,f=c.Bk(),c.hj(f,k,k),e.LJ(i.x,i.y,k.x,k.y,f.x,f.y),a!=q&&a.quadraticCurveTo(k.x,k.y,f.x,f.y);break;case "A":case "a":for(;!c.zj();){var i=c.qb,m=c.vj(),n=c.vj(),g=c.vj()*(Math.PI/180),o=c.vj(),k=c.vj(),f=c.Bk(),s=new qh.eg(Math.cos(g)*(i.x-f.x)/2+Math.sin(g)*(i.y-f.y)/2,-Math.sin(g)*(i.x-f.x)/2+Math.cos(g)*(i.y-f.y)/2),v=Math.pow(s.x,2)/Math.pow(m,2)+Math.pow(s.y,2)/Math.pow(n,2);1<v&&(m*=Math.sqrt(v),n*=Math.sqrt(v));o=(o==k?-1:1)*Math.sqrt((Math.pow(m,2)*Math.pow(n,2)-Math.pow(m, 2)*Math.pow(s.y,2)-Math.pow(n,2)*Math.pow(s.x,2))/(Math.pow(m,2)*Math.pow(s.y,2)+Math.pow(n,2)*Math.pow(s.x,2)));isNaN(o)&&(o=0);var w=new qh.eg(o*m*s.y/n,o*-n*s.x/m),i=new qh.eg((i.x+f.x)/2+Math.cos(g)*w.x-Math.sin(g)*w.y,(i.y+f.y)/2+Math.sin(g)*w.x+Math.cos(g)*w.y),y=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))*Math.sqrt(Math.pow(b[0],2)+Math.pow(b[1],2)))},z=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(y(a,b))},o=z([1,0],[(s.x-w.x)/m,(s.y- w.y)/n]),v=[(s.x-w.x)/m,(s.y-w.y)/n],w=[(-s.x-w.x)/m,(-s.y-w.y)/n],s=z(v,w);-1>=y(v,w)&&(s=Math.PI);1<=y(v,w)&&(s=0);v=1-k?1:-1;w=o+v*(s/2);c.SB(new qh.eg(i.x+m*Math.cos(w),i.y+n*Math.sin(w)),w-v*Math.PI/2);c.SB(f,w-v*Math.PI);e.ug(f.x,f.y);a!=q&&(y=m>n?m:n,f=m>n?1:m/n,m=m>n?n/m:1,a.translate(i.x,i.y),a.rotate(g),a.scale(f,m),a.arc(0,0,y,o,o+s,1-k),a.scale(1/f,1/m),a.rotate(-g),a.translate(-i.x,-i.y))}break;case "Z":case "z":a!=q&&a.closePath(),c.qb=c.start}return e}} qh.trim=function(a){return a.replace(/^\\s+|\\s+$/g,"")};qh.GV=function(a){return a.replace(/[\\s\\r\\t\\n]+/gm," ")};qh.eg=function(a,b){this.x=a;this.y=b}; qh.gP=function(){this.Cn=this.Bn=this.Jj=this.Ij=Number.NaN;this.x=x("Ij");this.y=x("Jj");this.width=function(){return this.Bn-this.Ij};this.height=function(){return this.Cn-this.Jj};this.ug=function(a,b){if(a!=q){if(isNaN(this.Ij)||isNaN(this.Bn))this.Bn=this.Ij=a;a<this.Ij&&(this.Ij=a);a>this.Bn&&(this.Bn=a)}if(b!=q){if(isNaN(this.Jj)||isNaN(this.Cn))this.Cn=this.Jj=b;b<this.Jj&&(this.Jj=b);b>this.Cn&&(this.Cn=b)}};this.XB=function(a){this.ug(a,q)};this.YB=function(a){this.ug(q,a)};this.LJ=function(a, b,c,e,f,g){c=a+2/3*(c-a);e=b+2/3*(e-b);this.QB(a,b,c,c+1/3*(f-a),e,e+1/3*(g-b),f,g)};this.QB=function(a,b,c,e,f,g,i,k){var m=[a,b],n=[c,e],o=[f,g],s=[i,k];this.ug(m[0],m[1]);this.ug(s[0],s[1]);for(rh=0;1>=rh;rh++)if(a=function(a){return Math.pow(1-a,3)*m[rh]+3*Math.pow(1-a,2)*a*n[rh]+3*(1-a)*Math.pow(a,2)*o[rh]+Math.pow(a,3)*s[rh]},b=6*m[rh]-12*n[rh]+6*o[rh],c=-3*m[rh]+9*n[rh]-9*o[rh]+3*s[rh],e=3*n[rh]-3*m[rh],0==c)0!=b&&(b=-e/b,0<b&&1>b&&(0==rh&&this.XB(a(b)),1==rh&&this.YB(a(b))));else if(e=Math.pow(b, 2)-4*e*c,!(0>e)&&(f=(-b+Math.sqrt(e))/(2*c),0<f&&1>f&&(0==rh&&this.XB(a(f)),1==rh&&this.YB(a(f))),b=(-b-Math.sqrt(e))/(2*c),0<b&&1>b))0==rh&&this.XB(a(b)),1==rh&&this.YB(a(b))};this.ug(l,l);this.ug(l,l)};D.hP=qh; ');