/**/_jsload2&&_jsload2('pointcollection', 'A.extend(id.prototype,{za:function(a){var b=this;b.map=this.P=a;b.zc=document.createElement("canvas");b.zc.style.cssText="position: absolute; left: 0; top: 0;";b.ca=b.zc;a=b.map.Cb();b.zc.width=a.width;b.zc.height=a.height;b.zc.id="myCanvasElement";b.map.Wf().Gt.appendChild(b.zc);b.Fy=new $g;b.hi();b.map.addEventListener("click",function(a){a=ah(b.Fy,a.offsetX,a.offsetY);a!==q&&b.dispatchEvent("click",{point:a.point})});b.Zk=q;b.map.addEventListener("mousemove",function(a){for(var e=b.map.vx(),f= e.length,g=q,i=0;i<f&&!(e[i]instanceof D.PointCollection&&(g=ah(e[i].Fy,a.offsetX,a.offsetY),g!==q));i++);g===q?(b.Zk!==q&&(b.dispatchEvent("mouseout",{point:b.Zk.point}),b.Zk=q),b.zc.style.cursor=""):(b.Zk===q?(b.dispatchEvent("mouseover",{point:g.point}),b.Zk=g):b.Zk!==g&&(b.dispatchEvent("mouseout",{point:b.Zk.point}),b.dispatchEvent("mouseover",{point:g.point}),b.Zk=g),b.zc.style.cursor="pointer")});return b.zc},hi:function(){this.Fy.data.wF=[];var a=this.map.Cb();this.zc.width=a.width;this.zc.height= a.height;this.zc.style.left=this.map.Ee.style.left;this.zc.style.top=this.map.Ee.style.top;if(this.ia.ja&&this.ia.ja.length){this.zc.getContext("2d").clearRect(0,0,this.zc.width,this.zc.height);-1!==document.location.href.indexOf(".local")&&(console&&console.time)&&console.time("\\u904d\\u5386\\u7ed8\\u5236\\u9ebb\\u70b9");this.zc.getContext("2d").beginPath();for(var b=0,c;c=this.ia.ja[b];b++){var e=this.map.vc(c);if(!(0>e.x||0>e.y||e.x>a.width||e.y>a.height)){var f;switch(this.K.shape){case 1:f=new bh; break;case 2:f=new ch;break;case 4:f=new dh;break;case 5:f=new eh;break;case fd:f=new fh;break;default:f=new fh}switch(this.K.size){case 1:("circle"===f.type||"star"===f.type)&&f.Af(1);if("rectangle"===f.type||"rhombus"===f.type)f.Eh(2),f.Dh(2);break;case 2:("circle"===f.type||"star"===f.type)&&f.Af(2);if("rectangle"===f.type||"rhombus"===f.type)f.Eh(4),f.Dh(4);break;case 3:("circle"===f.type||"star"===f.type)&&f.Af(4);if("rectangle"===f.type||"rhombus"===f.type)f.Eh(8),f.Dh(8);break;case gd:("circle"=== f.type||"star"===f.type)&&f.Af(5);if("rectangle"===f.type||"rhombus"===f.type)f.Eh(10),f.Dh(10);break;case 5:("circle"===f.type||"star"===f.type)&&f.Af(8);if("rectangle"===f.type||"rhombus"===f.type)f.Eh(16),f.Dh(16);break;case 6:("circle"===f.type||"star"===f.type)&&f.Af(10);if("rectangle"===f.type||"rhombus"===f.type)f.Eh(20),f.Dh(20);break;case 7:("circle"===f.type||"star"===f.type)&&f.Af(15);if("rectangle"===f.type||"rhombus"===f.type)f.Eh(30),f.Dh(30);break;default:if(("circle"===f.type||"star"=== f.type)&&f.Af(5),"rectangle"===f.type||"rhombus"===f.type)f.Eh(10),f.Dh(10)}this.K.color&&("circle"===f.type||"star"===f.type||"rectangle"===f.type||"rhombus"===f.type)&&f.Wk(this.K.color);f.ap(this.zc.getContext("2d"),e.x,e.y);f.point=c;this.Fy.data.wF.push(f)}}this.zc.getContext("2d").fillStyle=this.K.color;this.zc.getContext("2d").fill();-1!==document.location.href.indexOf(".local")&&(console&&console.timeEnd)&&console.timeEnd("\\u904d\\u5386\\u7ed8\\u5236\\u9ebb\\u70b9")}},M_:function(a){this.ia.ja= a;this.hi()},Ci:function(a){a.color&&(this.K.color=a.color);a.size&&(this.K.size=a.size);a.shape&&(this.K.shape=a.shape);this.hi()},clear:function(){this.ia.ja=[];this.hi()},remove:function(){this.clear();this.zc&&this.zc.parentNode&&this.zc.parentNode.removeChild(this.zc);this.dispatchEvent(new P("onremove"))}});id.prototype.initialize=id.prototype.za;id.prototype.draw=id.prototype.hi;id.prototype.setPoints=id.prototype.M_;id.prototype.setStyles=id.prototype.Ci;id.prototype.clear=id.prototype.clear; id.prototype.remove=id.prototype.remove;function $g(){this.data={wF:[]}}function ah(a,b,c){for(var e=0,f;f=a.data.wF[e];e++)if(f.Gk(),b>f.position.x-f.vp()/2&&b<f.position.x+f.vp()/2&&c>f.position.y-f.Gk()/2&&c<f.position.y+f.Gk()/2)return f;return q}function ch(){this.type="waterdrop";this.position={x:0,y:0}}var gh=document.createElement("img"),hh=t;gh.onload=function(){hh=p};gh.src=D.pa+"images/point-collection/red-marker-10x13.png";var ih=document.createElement("img");ih.onload=u(); ih.src=D.pa+"images/point-collection/blue-marke-15x16.png";ch.prototype.ap=function(a,b,c){var e=this;hh===t?setTimeout(function(){e.ap(a,b,c)},10):(e.Q2=a,e.position.x=b,e.position.y=c,a.save(),a.translate(b-gh.width/2,c-gh.height/2),a.drawImage(gh,0,0,gh.width,gh.height,0,0,gh.width,gh.height),a.restore())};ch.prototype.ma=x("position");ch.prototype.vp=function(){return gh.width};ch.prototype.Gk=function(){return gh.height}; function fh(a){this.type="circle";a=a||{};this.M={Fa:a.radius||10,color:a.color||"#fa937e"};this.position={x:0,y:0}}fa=fh.prototype;fa.ap=function(a,b,c){this.position.x=b;this.position.y=c;a.save();a.translate(b,c);a.beginPath();a.fillStyle=this.M.color;a.arc(0,0,this.M.Fa,0,2*Math.PI,t);a.fill();a.restore()};fa.Af=function(a){this.M.Fa=a};fa.BL=function(){return this.M.Fa};fa.Wk=function(a){this.M.color=a};fa.ma=x("position");fa.vp=function(){return 2*this.M.Fa};fa.Gk=function(){return 2*this.M.Fa}; function bh(a){this.type="star";a=a||{};this.M={Fa:a.radius||10,SE:a.pointsNumber||5,YW:a.fraction||0.4,color:a.color||"#fa937e"};this.position={x:0,y:0}}fa=bh.prototype;fa.ap=function(a,b,c){this.position.x=b;this.position.y=c;a.save();a.fillStyle=this.M.color;a.beginPath();a.translate(b,c);a.moveTo(0,0-this.M.Fa);for(b=0;b<this.M.SE;b++)a.rotate(Math.PI/this.M.SE),a.lineTo(0,0-this.M.Fa*this.M.YW),a.rotate(Math.PI/this.M.SE),a.lineTo(0,0-this.M.Fa);a.fill();a.restore()}; fa.Af=function(a){this.M.Fa=a};fa.Wk=function(a){this.M.color=a};fa.ma=x("position");fa.vp=function(){return 2*this.M.Fa};fa.Gk=function(){return 2*this.M.Fa};function dh(a){this.type="rectangle";a=a||{};this.M={width:a.width||10,height:a.height||10,color:a.color||"#fa937e"};this.position={x:0,y:0}}fa=dh.prototype;fa.ap=function(a,b,c){this.position.x=b;this.position.y=c;a.save();a.translate(b-this.M.width/2,c-this.M.height/2);a.fillStyle=this.M.color;a.fillRect(0,0,this.M.width,this.M.height);a.restore()}; fa.Eh=function(a){this.M.width=a};fa.vp=function(){return this.M.width};fa.Dh=function(a){this.M.height=a};fa.Gk=function(){return this.M.height};fa.Wk=function(a){this.M.color=a};fa.ma=x("position");function eh(a){this.type="rhombus";a=a||{};this.M={width:a.width||10,height:a.height||10,color:a.color||"#fa937e"};this.position={x:0,y:0}}fa=eh.prototype; fa.ap=function(a,b,c){this.position.x=b;this.position.y=c;a.save();a.fillStyle=this.M.color;a.translate(b-this.M.width/2,c-this.M.height/2);a.beginPath();a.moveTo(0+0.5*this.M.width,0);a.lineTo(0,0+0.5*this.M.height);a.lineTo(0+0.5*this.M.width,0+this.M.height);a.lineTo(0+this.M.width,0+0.5*this.M.height);a.lineTo(0+0.5*this.M.width,0);a.closePath();a.fill();a.restore()};fa.Eh=function(a){this.M.width=a};fa.vp=function(){return this.M.width};fa.Dh=function(a){this.M.height=a};fa.Gk=function(){return this.M.height}; fa.Wk=function(a){this.M.color=a};fa.ma=x("position"); ');
