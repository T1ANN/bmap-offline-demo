/**/_jsload2&&_jsload2('poly', 'function vh(a,b){return!a||!b?0:Math.round(Math.sqrt(Math.pow(a.lng-b.lng,2)+Math.pow(a.lat-b.lat,2)))}function wh(a,b){jb.call(this);this.point=a;this.type=b;this.K={}}A.lang.xa(wh,jb,"Vertex"); A.extend(wh.prototype,{initialize:function(a){this.map=a;var b="";this.point=Za(this.point,this.map.M.R2);var b=this.type?"BMap_vectex BMap_vectex_nodeT":"BMap_vectex BMap_vectex_node",c=this.mH=this.ca=document.createElement("div");c.className=b;a.Wf().VO.appendChild(c);this.tA();return c},draw:function(){var a=this.map.cf(this.point);this.mH.style.left=a.x-5+"px";this.mH.style.top=a.y-5+"px"},va:function(a){if(a instanceof Q||a instanceof L)this.point=this.K.point=this.map?Za(a,this.map.M.Ma):a, this.draw()},bk:x("point"),ma:function(){var a=this.map;return a?db(this.point,a.M.Ma):this.point},tA:function(){function a(a,b){b.pixel=b.ab=a.ab;b.point=b.point=a.point;b.pointN=b.yf=a.yf;return b}function b(a){var b=a.clientX,c=a.clientY;a.changedTouches&&(b=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY);return new R(b,c)}if(this.ca&&!this.ca.Pi){this.ca.Pi=p;var c=this.map,e=this,f=0,g=0,i=0,k={x:0,y:0};this.Js=function(a){oa(a);if(2!=a.button){e.zl=p;var k=c.vc(e.point),o=b(a);f= o.x-k.x;g=o.y-k.y;i=fb();e.map.ba.hv=e;A.V(document,"mousemove",e.oj);A.V(document,"mouseup",e.nj);A.V(document,"touchmove",e.oj);A.V(document,"touchend",e.nj);e.ca&&e.ca.setCapture&&e.ca.setCapture();e.ca.style.cursor=e.K.Kd;"touchstart"==a.type&&na(a)}};this.oj=function(i){if(e.zl){i=b(i);k=i=new R(i.x-f,i.y-g);e.Qz=i;var n=e.map.bc(i),o=e.map.pg(i),n={ab:i,point:n,yf:o};e.Ml=e.Nl=0;if(20>=i.x||i.x>=e.map.width-20||50>=i.y||i.y>=e.map.height-10){if(20>=i.x?e.Ml=8:i.x>=e.map.width-20&&(e.Ml=-8), 50>=i.y?e.Nl=8:i.y>=e.map.height-10&&(e.Nl=-8),!e.Le)e.Le=setInterval(function(){c.Kg(e.Ml,e.Nl,{noAnimation:p});var a=c.bc(e.Qz);e.va(a)},30)}else e.Le&&(clearInterval(e.Le),e.Le=q),e.va(o);e.ql||(e.dispatchEvent(a(n,new P("ondragstart"))),e.ql=p);e.dispatchEvent(a(n,new P("ondragging")))}};this.nj=function(){e.ca&&e.ca.releaseCapture&&e.ca.releaseCapture();e.zl=t;e.map.ba.hv=q;A.hd(document,"mousemove",e.oj);A.hd(document,"mouseup",e.nj);A.hd(document,"touchmove",e.oj);A.hd(document,"touchend", e.nj);f=g=0;e.Le&&(clearInterval(e.Le),e.Le=q);if(100<=fb()-i&&(2<k.x||2<k.y))e.ql=t,e.dispatchEvent(a({ab:e.map.vc(e.ma()),point:e.ma(),yf:e.bk()},new P("ondragend"))),k.x=k.y=0;e.Yl();e.ca&&(e.ca.style.cursor=e.K.mf?"pointer":"")};this.dW=function(b){oa(b);e.dispatchEvent(a({ab:e.map.vc(e.ma()),point:e.ma()},new P("ondelVertexMarker")))};A.V(this.ca,"mousedown",this.Js);A.V(this.ca,"touchstart",this.Js);A.V(this.ca,"contextmenu",this.dW)}}});A.extend(bd.prototype,{mQ:function(a){return this.repeat?this.oQ(a):this.nQ(a)},oQ:function(a){var b=this.repeat,c=[],e,f,g;if(this.FI){e=Math.floor(1/this.repeat)+1;for(f=0;f<e;f++)c.push(xh(a,1-b*f,p))}else{g=a.aj[a.aj.length-1];e=Math.floor(g/b)+1;for(f=0;f<e;f++)c.push(xh(a,g-f*b,t))}return c},nQ:function(a){return[xh(a,this.jk,this.EI)]},hide:function(){if(this.ad&&0<this.ad.length)for(var a=this.ad.length-1;0<=a;a--)this.ad[a].aa()},show:function(){if(this.ad&&0<this.ad.length)for(var a=this.ad.length- 1;0<=a;a--)this.ad[a].show()}});function xh(a,b,c){var e=a.ja;if(c){if(0>=b)return{point:e[0],index:1};if(1<=b)return{point:e[e.length-1],index:e.length-1};c=a.KS*b;b=yh(c,a.Tl);a=(c-a.Tl[b-1])/(a.Tl[b]-a.Tl[b-1])}else{c=b;b=a.aj[a.aj.length-1];if(0>=c)return{point:e[0],index:1};if(c>=b)return{point:e[e.length-1],index:e.length-1};b=yh(c,a.aj);a=(c-a.aj[b-1])/(a.aj[b]-a.aj[b-1])}c=e[b-1];e=e[b];return{point:new Q(c.lng+(e.lng-c.lng)*a,c.lat+(e.lat-c.lat)*a),index:b}} A.oc.indexOf=function(a,b,c){var e=a.length,c=c|0;for(0>c&&(c=Math.max(0,e+c));c<e;c++)if(c in a&&a[c]===b)return c;return-1};function yh(a,b){var c=zh(b.concat(a));return A.oc.indexOf(c,a)}function zh(a){if(2>a.length)return a;for(var b=Math.floor(a.length/2),c=a.slice(0,b),a=a.slice(b),c=zh(c),a=zh(a),b=[];0<c.length&&0<a.length;)c[0]>a[0]?b.push(a.shift()):b.push(c.shift());return b.concat(c).concat(a)};A.extend(Xc.prototype,{initialize:function(a){a&&this.vv&&a.addEventListener("onmousemove",this.vv);a=jb.prototype.initialize.call(this,a);this.K.pf===p&&(this.kj(),this.dm());return a},Oj:function(){this.ca=(this.Vn=Ah.Xs(this.map)).Ho()},dd:x("ca"),ha:function(){function a(a,b){var c=a.srcElement||a.target,i=Hb(),k=a.pageX?a.pageX:a.clientX+i[1],i=a.pageY?a.pageY:a.clientY+i[0];if(a&&b&&k&&i&&c){var c=A.lang.Tc(c.da).map,m=A.U.ma(c.cb);b.ab=new R(k-m.left,i-m.top);b.point=c.bc(b.ab);b.yf=c.pg(b.ab); b.pixel=b.ab;b.point=b.point;b.pointN=b.yf}return b}var b=this.ca,c=this;"canvas"!==Ah.Xs(this.map).up()&&!J()&&(c.K.mf&&(b.style.cursor="pointer",A.V(b,"click",function(b){c.lI&&c.lI.Ub(c.map.mv())&&c.dispatchEvent(a(b,ma(new P("onclick"),b)))}),A.V(b,"dblclick",function(b){c.dispatchEvent(a(b,ma(new P("ondblclick"),b)))}),(!A.ga.Xe||4>A.ga.Xe)&&A.V(this.ca,"contextmenu",function(b){c.dispatchEvent(a(b,ma(new P("onrightclick"),b)))})),A.V(b,"mousedown",function(b){c.dispatchEvent(a(b,ma(new P("onmousedown"), b)));c.lI=c.map.mv()}),A.V(b,"mouseup",function(b){c.dispatchEvent(a(b,ma(new P("onmouseup"),b)))}),A.V(this.ca,"mouseup",function(b){c.dispatchEvent(a(b,ma(new P("onmouseup"),b)));A.ga.Xe>=4&&(b.button===2&&c.K.mf)&&c.dispatchEvent(a(b,ma(new P("onrightclick"),b)))}));b=q;this.Pi||(this.Pi=p,this.vv=function(a){if(c.map&&!c.map.ba.hv){var b=c.jS(a.point),g=parseFloat(b.Ia),i;if(g<c.K.TM){i=c.Xa.Sx?new P("onmousemove"):new P("onmouseover");c.Xa.sM=t;c.Xa.Sx=p}else if(!c.Xa.sM&&c.Xa.Sx){i=new P("onmouseout"); c.Xa.Sx=t;c.Xa.sM=p}if(i){if(!(c instanceof pd)&&i.type==="onmousemove"&&c.Xa.Sx===p&&(g===0||g>c.K.TM)){i.pixel=i.ab=a.ab;i.point=i.point=a.point;i.pointN=i.yf=a.yf}else{i.point=i.point=this.pN(b.ab);i.pixel=i.ab=this.vc(i.point);i.pointN=i.yf=this.lT(b.ab)}c.dispatchEvent(i)}}},this.map.addEventListener("onmousemove",this.vv),this.addEventListener("mouseover",u()),this.addEventListener("mouseout",u()))},draw:function(a){if(this.ca&&this.Vn){var b;if(this.K.fX){this.rD=[];b=q;for(var c=0;c<this.ja.length- 1;c++){var e=this.mV(this.ja[c],this.ja[c+1],b);b=e[e.length-1]&&e[e.length-1].wh;this.rD=this.rD.concat(e)}b=this.CH(this.rD)}else if(this.K.AE&&0<this.ja.length){this.Et=[];b=q;for(c=0;c<this.ja.length-1;c++)this.Et.push({point:this.ja[c],wh:b||T.Ya(this.ja[c])}),e=b||T.Ya(this.ja[c]),b=T.Ya(this.ja[c+1]),15437726<vh(b,e)&&(b.lng=b.lng<e.lng?b.lng+sb:b.lng-sb),this.Et.push({point:this.ja[c+1],wh:b}),b=this.Et[this.Et.length-1].wh;b=this.CH(this.Et)}else b=this.nv(this.ja);"canvas"===this.Vn.Nb&& this.Uv?(this.Uv(),this.Vn.Sd(this.ca,b,this.K)):this.Vn.Sd(this.ca,b);this instanceof pd&&this.K.oi&&this.nR(a)}},ob:function(){this.map&&(this.initialize(this.map),this.ca.style.WebkitUserSelect="none",this.draw())},nv:function(a){var b=this.map,c=[],e=b.le(),f=this.le();if(!e.ot(f)||0===a.length||!this.ca||!this.Uc())return[c];this.K.pf||(e=this.Dm(b.la()),this.kf[e]?a=this.kf[e]:(a=Bh(a,this.Hk(b.la())),a=this.kf[e]=a));e=this.K.N0;c.push(b.cf(a[0],q,e));for(var g=f=1,i=a.length;f<i;f++){var k= b.cf(a[f],q,e);k.Ub(c[g-1])||(c.push(k),g++)}return[c]},V1:function(a){if(a&&0<a.length){for(var b=[],c=q,e=0;e<a.length-1;e++){b.push({point:a[e],wh:c||T.Ya(a[e])});var f=c||T.Ya(a[e]),c=T.Ya(a[e+1]);30037726<vh(c,f)&&(c.lng=c.lng<f.lng?c.lng+sb:c.lng-sb);b.push({point:a[e+1],wh:c});c=b[b.length-1].wh}return b}},Dm:function(a){return this.K.Dm?this.K.Dm(a):6>a?0:10>a?1:15>a?2:3},Hk:function(a){return this.K.Hk?this.K.Hk(a):Xc.PE[this.Dm(a)]},Nr:function(a){this.kf.length=0;a=Xc.nx(a);this.Bo=a.slice(0, a.length-1);this.ja=a.slice(0);this.Hh();this.draw();this.dispatchEvent(new P("onlineupdate"))},mV:function(a,b,c){var e=[];e.push({point:a,wh:c||T.Ya(a)});var f=c||T.Ya(a);if(a.Ub(b)||25E4>T.Ek(a,b)){var c=T.Ya(b),g=vh(c,f);30037726<g&&(c.lng=c.lng<f.lng?c.lng+sb:c.lng-sb);c&&e.pop();e.push({point:b,wh:c});return e}for(var g=T.Md(U(a.lng),U(a.lat),U(b.lng),U(b.lat)),c=Math.round(g/15E4),i=this.cK(a,b),k=0;k<c;k++){var m=this.dK(a,b,k/c,i),n=T.Ya(m),g=vh(n,f);30037726<g&&(n.lng=n.lng<f.lng?n.lng+ sb:n.lng-sb);e.push({point:m,wh:n});f=n}c=T.Ya(b);g=vh(c,f);30037726<g&&(c.lng=c.lng<f.lng?c.lng+sb:c.lng-sb);e.push({point:b,wh:c});return e},Sd:function(a){this.Nr(a);this.K.pf===p&&(this.kj(),this.dm())},kn:function(a,b){b&&this.ja[a]&&(this.kf.length=0,this.ja[a]=new Q(b.lng,b.lat),this.Hh(),this.K.pf===p&&(this.kj(),this.dm()),this.draw(),this.dispatchEvent(new P("onlineupdate")))},setStrokeColor:function(a){this.K&&(this.K.strokeColor=a);this.Vl("strokecolor",a)},bq:function(a){0<a&&(this.K.tc= a,this.Vl("strokeweight",a),"dashed"===this.FL()&&(this.map&&"svg"===Ah.Xs(this.map).up())&&this.Vl("strokestyle","dashed"))},$p:function(a){a===l||(1<a||0>a)||(this.K.zd=a,this.map&&this.Vl("strokeopacity",a))},$t:function(a){1<a||0>a||(this.K.zg=a,this.Vl("fillopacity",a))},aq:function(a){"solid"!==a&&"dashed"!==a||(this.K.strokeStyle=a,this.Vl("strokestyle",a))},setFillColor:function(a){this.K.fillColor=a||"";this.Vl("fillcolor",a)},Vl:function(a,b){this.Vn&&(this.Vn.setAttribute(this.ca,a,b|| "",this.GL()),this.dispatchEvent(new P("onlineupdate")))},dm:function(){var a=this;if(!a.uc.length)for(var b=this.OL(),c=function(b){a.Jv(b)},e=u(),f=function(b){a.ZA(b)},g=function(b){a.PP(b)},i=0,k=b.length;i<k;i++){var m=b[i],n=new wh(m.yb,m.sa);n.addEventListener("ondragging",c);n.addEventListener("ondragstart",e);n.addEventListener("ondragend",f);n.addEventListener("ondelVertexMarker",g);n.index=i;n.sa=m.sa;this.uc.push(n);this.map&&this.map.Ra(n)}},kj:function(){for(var a;a=this.uc.pop();)this.map.Jb(a); this.uc.length=0},OL:function(){for(var a=[],b=0,c=this.ja.length;b<c;b++){var e=this.ja[b];a.push({yb:e,sa:0});if(b<c-1){var f=this.ja[b+1],e=new Q((e.lng+f.lng)/2,(e.lat+f.lat)/2);a.push({yb:e,sa:1})}}return this.nc=a},e2:u(),ZA:function(a){this.Xa.mj&&(this.map.Jb(this.Xa.mj),delete this.Xa.mj);this.Xa.Bi&&(this.map.Jb(this.Xa.Bi),delete this.Xa.Bi);this.Xa.xi&&(this.map.Jb(this.Xa.xi),delete this.Xa.xi);var b=a.yf,a=a.currentTarget.index,c;if(0!==a%2){this.Tn(a);this.Bq(a,b,0);var e=Za(this.nc[a- 1].yb,this.map.M.Ma);c=Za(this.nc[a+1].yb,this.map.M.Ma);e=this.Ts(e,b);c=this.Ts(b,c);this.Bq(a,e,1);this.Bq(a+2,c,1);a=Math.ceil(a/2);c=this.ja.slice();a=c.splice(a,this.ja.length-a);c[c.length]=b;c=c.concat(a)}else this.nc[a].yb=b,0<=a-2&&(e=Za(this.nc[a-2].yb,this.map.M.Ma),e=this.Ts(e,b),this.uc[a-1].show(),this.uc[a-1].va(e)),a+2<this.nc.length&&(c=Za(this.nc[a+2].yb,this.map.M.Ma),c=this.Ts(b,c),this.uc[a+1].show(),this.uc[a+1].va(c)),this instanceof od&&this.nc.length-1===a&&(this.Tn(0),this.Bq(0, b,0),this.Tn(1),this.Bq(1,this.Ts(Za(this.nc[0].yb,this.map.M.Ma),Za(this.nc[1].yb,this.map.M.Ma)),1),this.uc[0].ca.style.zIndex="-10000000"),a/=2,this.ja.splice(a,1,b),this instanceof od&&this.ja.length-1===a&&this.ja.splice(0,1,b),c=this.ja;b=0;for(a=this.uc.length;b<a;b++)this.uc[b].index=b;this.ja=c;this.Nr(c)},PP:function(a){if(0===a.target.type||0===a.target.sa){var b=[];if(6>this.nc.length)alert("\\u70b9\\u4f4d\\u5927\\u4e8e3,\\u624d\\u80fd\\u5220\\u9664");else{0==a.target.index||a.target.index==this.nc.length- 1?(this.Tn(this.nc.length-1),this.Tn(0)):this.Tn(a.target.index);this.kj();for(a=0;a<this.nc.length;a++)0===this.nc[a].sa&&b.push(this.nc[a].yb);this.ja=b;this.ja[0].lng==this.ja[this.ja.length-1].lng&&this.ja[0].lat==this.ja[this.ja.length-1].lat&&this.ja.splice(this.ja.length-1,1);this.Sd(this.ja)}}else alert("\\u53ea\\u80fd\\u5220\\u9664\\u5b9e\\u70b9")},Bq:function(a,b,c){var e=this;this.nc.splice(a,0,{yb:b,sa:c});b=new wh(b,c);b.addEventListener("ondragging",function(a){e.Jv(a)});b.addEventListener("ondragstart", u());b.addEventListener("ondragend",function(a){e.ZA(a)});b.index=a;b.sa=c;this.uc.splice(a,0,b);this.map.Ra(b)},Tn:function(a){this.map.Jb(this.uc[a]);this.nc.splice(a,1);this.uc.splice(a,1)},Ts:function(a,b){return new L((a.lng+b.lng)/2,(a.lat+b.lat)/2)},jS:function(a){var b,c,e,f,g,i,k=[],m=this.map.cf(a),k=this.nv(this.ja)[0],n=k.length;if(1<n){for(f=1;f<n;f++){var o=k[f-1],s=k[f];if(o&&s){o.x!==s.x?(g=(s.y-o.y)/(s.x-o.x),g=Math.abs(g*m.x+(s.y-g*s.x)-m.y)/Math.sqrt(g*g+1)):g=Math.abs(m.x-s.x); var v=Math.pow(s.y-o.y,2)+Math.pow(s.x-o.x,2),s=Math.pow(s.y-m.y,2)+Math.pow(s.x-m.x,2),o=Math.pow(o.y-m.y,2)+Math.pow(o.x-m.x,2),w=Math.pow(g,2);s-w+o-w>v&&(g=Math.sqrt(Math.min(s,o)));if(b==q||b>g)c=Math.sqrt(o-w)/Math.sqrt(v),e=Math.sqrt(s-w)/Math.sqrt(v),b=g,i=f;b=Math.min(b,g)}}if(!(this instanceof pd)){g=m=0;v=this.ja;for(f=0;f<n;f++)m=f===n-1?0:m+1,v[f].lat!==v[m].lat&&((a.lat>=v[f].lat&&a.lat<v[m].lat||a.lat>=v[m].lat&&a.lat<v[f].lat)&&a.lng<(v[m].lng-v[f].lng)*(a.lat-v[f].lat)/(v[m].lat- v[f].lat)+v[f].lng)&&g++;b=Math.min(b,0<g%2?0:b)}1<c&&(c=1);1<e&&(c=0);a=k[i-1].y-k[i].y;f=k[i-1].x-(k[i-1].x-k[i].x)*c;g=k[i-1].y-a*c}return{ab:new R(f,g),Ia:b}},show:function(){jb.prototype.show.call(this);this.draw();this.K.pf===p&&this.dm()},aa:function(){jb.prototype.aa.call(this);this.K.pf===p&&this.kj()},remove:function(){Vc.prototype.remove.call(this);this.K.pf===p&&this.kj()}}); function Ch(a,b){var c={top:0,bottom:0,right:0,left:0,all:0},e=a.x,f=a.y;f<b.$f?(c.top=8,c.all+=c.top):f>b.vi&&(c.bottom=4,c.all+=c.bottom);e>b.ui?(c.right=2,c.all+=c.right):e<b.Zf&&(c.left=1,c.all+=c.left);return c} function Bh(a,b){if(1>=a.length)return a;var c=a,e=b!==l?b*b:1,f=c.length,g=new ("undefined"!==typeof Uint8Array?Uint8Array:Array)(f),i=0,k=f-1,m=[],n=[],o,s,v,w;for(g[i]=g[k]=1;k;){s=0;for(o=i+1;o<k;o++){v=c[o];var y=c[i],z=c[k],B=y.lng,y=y.lat,C=z.lng-B,E=z.lat-y;if(0!==C||0!==E){var G=((v.lng-B)*C+(v.lat-y)*E)/(C*C+E*E);1<G?(B=z.lng,y=z.lat):0<G&&(B+=C*G,y+=E*G)}C=v.lng-B;E=v.lat-y;v=C*C+E*E;v>s&&(w=o,s=v)}s>e&&(g[w]=1,m.push(i,w,w,k));k=m.pop();i=m.pop()}for(o=0;o<f;o++)g[o]&&n.push(c[o]);return n} V(xg,{show:xg.show,hide:xg.aa,remove:xg.remove,setPath:xg.Sd,setPositionAt:xg.kn,setStrokeColor:xg.setStrokeColor,setStrokeWeight:xg.bq,setStrokeOpacity:xg.$p,setFillOpacity:xg.$t,setStrokeStyle:xg.aq,setFillColor:xg.setFillColor,getDom:xg.dd});A.extend(pd.prototype,{initialize:function(a){Xc.prototype.initialize.call(this,a);this.UI=[0];this.Lr=[0];this.Tl=[0];for(var a=1,b=this.ja,c=b.length;a<c;a++){this.UI[a]=T.Ek(b[a],b[a-1]);var e=T.Ya(b[a-1]),f=T.Ya(b[a]);this.Lr[a]=90-180*Math.atan2(f.lat-e.lat,f.lng-e.lng)/Math.PI;this.Tl[a]=this.Tl[a-1]+this.UI[a]}this.KS=this.Tl[c-1];this.Uv();this.Tv={};return this.ca},Uv:function(){this.setFillColor("");this.setStrokeColor(this.K.strokeColor);this.bq(this.K.tc);this.aq(this.K.strokeStyle);this.$p(this.K.zd)}, CH:function(a){if(!a)return[];for(var b=this.map,c=[],e=0;e<a.length;e++)c.push(b.fZ(a[e].wh));return[c].concat(this.UP(c,b.la(),p))},UP:function(a,b,c){for(var e=this.map,b=b||e.la(),f=[],g=[],b=c?e.b1(b):sb,c=0;c<a.length;c++)f.push(new R(a[c].x-b,a[c].y)),g.push(new R(a[c].x+b,a[c].y));return[f,g]},nv:function(a){var b=this.map,c=[],e=b.le(),f=this.le();if(!e.ot(f)||0==a.length||!this.ca||!this.Uc())return[c];!(J()&&5E3<a.length)&&!this.K.pf&&(e=this.Dm(b.la()),this.kf[e]?a=this.kf[e]:(f=Bh(a, this.Hk(b.la())),a=this.kf[e]=f));c.push(b.cf(a[0]));for(var g=e=1,f=a.length;e<f;e++){var i=b.cf(a[e]);i.Ub(c[g-1])||(c.push(i),g++)}a=[];e=b.offsetX;f=b.offsetY;g=b.M.ax;b={Zf:-e-g,$f:-f-g,ui:-e+g+b.width,vi:-f+g+b.height};e=0;for(f=c.length-1;e<f;e++){var k=c[e],m=c[e+1],g=b,n=i=t,o=t,k=new R(k.x,k.y),m=new R(m.x,m.y),s=Ch(k,g),v=Ch(m,g),w=l,y=l,z=l,B=g.Zf,C=g.$f,E=g.ui,G=g.vi;do 0===s.all&&0===v.all?o=i=p:0!==(s.all&v.all)?o=p:(w=0!==s.all?s:v,w.top?(y=k.x+(m.x-k.x)*(C-k.y)/(m.y-k.y),z=C):w.bottom? (y=k.x+(m.x-k.x)*(G-k.y)/(m.y-k.y),z=G):w.right?(z=k.y+(m.y-k.y)*(E-k.x)/(m.x-k.x),y=E):w.left&&(z=k.y+(m.y-k.y)*(B-k.x)/(m.x-k.x),y=B),n=p,w.all===s.all)?(k.x=Math.round(y),k.y=Math.round(z),s=Ch(k,g)):(m.x=Math.round(y),m.y=Math.round(z),v=Ch(m,g));while(!o);g=i?{uN:new R(k.x,k.y),vN:new R(m.x,m.y),clip:n?p:t}:l;g&&a.push(g)}c=[[]];e=0;for(f=a.length;e<f;e++)a[e].clip?(c[c.length-1].push(a[e].uN),c[c.length-1].push(a[e].vN),a[e+1]&&a[e+1].clip&&c.push([])):(c[c.length-1].push(a[e].uN),e==a.length- 1&&c[c.length-1].push(a[e].vN));return c},hide:function(){Xc.prototype.aa.call(this);if(this.K.oi&&0<this.K.oi.length)for(var a=0,b=this.K.oi.length;a<b;a++)this.K.oi[a].hide()},show:function(){Xc.prototype.show.call(this);if(this.K.oi&&0<this.K.oi.length)for(var a=0,b=this.K.oi.length;a<b;a++)this.K.oi[a].show()},nR:function(a){var b=this.sx(),c=b.la(),e=b.le();icons=this.K.oi;displayPixels=Xc.prototype.nv.call(this,this.ja);if(this.Tv[c]&&0<this.Tv[c].length)this.aj=this.Tv[c];else{for(var f=[0], g=1,i=displayPixels[0],k=i.length;g<k;g++)f[g]=f[g-1]+Ib(i[g],i[g-1]);this.aj=this.Tv[c]=f}for(g=0;g<icons.length;g++){var f=icons[g],i=f.g0,m,n;f.Nv[c]&&0<f.Nv[c].length?n=f.Nv[c]:f.Nv[c]=n=f.mQ(this);if(1===n.length)e.ns(n[0].point)&&(f.ad[0]&&(b.Jb(f.ad[0]),f.ad[0].remove()),f.aL||(7===i.Nb||5===i.Nb?i.Zp(-180+this.Lr[n[0].index]):i.Zp(this.Lr[n[0].index])),f.ad[0]=new W(n[0].point,{icon:i}),b.Ra(f.ad[0]));else if(1<n.length){var o=[],s,v={};if(a&&"onzoomend"===a.type){for(var w in f.ad)b.Jb(f.ad[w]), f.ad[w].remove();f.ad=[]}else A.oc.Pb(f.ad,function(a){e.ns(a.ma())?(s=""+a.ma().lat+(""+a.ma().lng),v[s]=p,o.push(a)):(b.Jb(a),a.remove())}),f.ad=o;for(w=0;w<n.length;w++){m=n[w].index;var k=n[w].point,y=""+k.lat+(""+k.lng);e.ns(k)&&!v[y]&&(f.aL||(7===i.Nb||5===i.Nb?i.setRotation(-180+this.Lr[m]):i.setRotation(this.Lr[m])),k=new W(k,{icon:i}),f.ad.push(k),b.Ra(k))}}}},Jv:function(a){var b=a.currentTarget,c=a.yf,e=b.index,f=this.nc,g,i=a=q;if(0==e){var k=Za(f[e+2].yb,this.map.M.Ma);g=[c,k];a=new L((k.lng+ c.lng)/2,(k.lat+c.lat)/2);this.uc[e+1]&&this.uc[e+1].aa()}else if(e==f.length-1){var m=Za(f[e-2].yb,this.map.M.Ma);g=[m,c];a=new L((m.lng+c.lng)/2,(m.lat+c.lat)/2);this.uc[e-1]&&this.uc[e-1].aa()}else m=Za(f[e-1].yb,this.map.M.Ma),k=Za(f[e+1].yb,this.map.M.Ma),g=[m,c,k],b.sa||(m=Za(f[e-2].yb,this.map.M.Ma),k=Za(f[e+2].yb,this.map.M.Ma),g=[m,c,k],a=new L((m.lng+c.lng)/2,(m.lat+c.lat)/2),i=new L((k.lng+c.lng)/2,(k.lat+c.lat)/2),this.uc[e-1]&&this.uc[e-1].aa(),this.uc[e+1]&&this.uc[e+1].aa());this.Xa.mj? (this.Xa.mj.Sd(g),this.Xa.mj.show()):(b=new pd(g,{strokeStyle:"dashed",strokeColor:this.K.strokeColor,tc:this.K.tc,zd:this.K.zd,AE:this.K.AE}),this.map.Ra(b),b.aa(),this.Xa.mj=b);!this.Xa.Bi&&a?(this.Xa.Bi=new wh(a,1),this.map.Ra(this.Xa.Bi)):a&&this.Xa.Bi.va(a);!this.Xa.xi&&i?(this.Xa.xi=new wh(i,1),this.map.Ra(this.Xa.xi)):i&&this.Xa.xi.va(i)}});A.oc.remove=function(a,b){for(var c=a.length;c--;)a[c]===b&&a.splice(c,1);return a};A.extend(od.prototype,{initialize:function(a){Xc.prototype.initialize.call(this,a);this.setStrokeColor(this.K.strokeColor);this.bq(this.K.tc);this.aq(this.K.strokeStyle);this.setFillColor(this.K.fillColor);this.$p(this.K.zd);this.$t(this.K.zg);return this.ca},kn:function(a,b){this.Bo[a]&&(this.kf.length=0,this.Bo[a]=new Q(b.lng,b.lat),this.ja[a]=new Q(b.lng,b.lat),0==a&&!this.ja[0].Ub(this.ja[this.ja.length-1])&&(this.ja[this.ja.length-1]=new Q(b.lng,b.lat)),this.Hh(),this.K.pf==p&&(this.kj(),this.dm()), this.draw(),this.dispatchEvent(new P("onlineupdate")))},Uv:function(){this.setStrokeColor(this.K.strokeColor);this.bq(this.K.tc);this.aq(this.K.strokeStyle);this.setFillColor(this.K.fillColor);this.$p(this.K.zd);this.$t(this.K.zg)},containPoint:function(a){var b=this.ja,c=t;if(a instanceof Q||a instanceof L){if(this.Tu.ns(a)){for(var e=a.lat,a=a.lng,f=0,g=b.length-1;f<b.length;g=f++){var i=b[f].lat,k=b[f].lng,m=b[g].lat,g=b[g].lng;k>a!=g>a&&e<(m-i)*(a-k)/(g-k)+i&&(c=!c)}return c}return t}},Jv:function(a){var b= a.currentTarget,c=a.point,e=b.index,f=this.nc,g,i=a=q;if(0==e){var k=db(f[f.length-2].yb,this.map.M.Ma),m=db(f[e+2].yb,this.map.M.Ma);g=[k,c,m];b.sa||(a=new Q((k.lng+c.lng)/2,(k.lat+c.lat)/2),i=new Q((m.lng+c.lng)/2,(m.lat+c.lat)/2))}else e==f.length-1?(m=db(f[2].yb,this.map.M.Ma),k=db(f[e-2].yb,this.map.M.Ma),g=[k,c,m],b.sa||(a=new Q((k.lng+c.lng)/2,(k.lat+c.lat)/2),i=new Q((m.lng+c.lng)/2,(m.lat+c.lat)/2))):(k=db(f[e-1].yb,this.map.M.Ma),m=db(f[e+1].yb,this.map.M.Ma),g=[k,c,m],b.sa||(k=db(f[e-2].yb, this.map.M.Ma),m=db(f[e+2].yb,this.map.M.Ma),g=[k,c,m],a=new Q((k.lng+c.lng)/2,(k.lat+c.lat)/2),i=new Q((m.lng+c.lng)/2,(m.lat+c.lat)/2),this.uc[e-1]&&this.uc[e-1].aa(),this.uc[e+1]&&this.uc[e+1].aa()));this.Xa.mj?this.Xa.mj.Sd(g):(b=new pd(g,{strokeStyle:"dashed",strokeColor:this.K.strokeColor,tc:this.K.tc,zd:this.K.zd}),this.map.Ra(b),this.Xa.mj=b);!this.Xa.Bi&&a?(this.Xa.Bi=new wh(a,1),this.map.Ra(this.Xa.Bi)):a&&this.Xa.Bi.va(a);!this.Xa.xi&&i?(this.Xa.xi=new wh(i,1),this.map.Ra(this.Xa.xi)): i&&this.Xa.xi.va(i)}});V(zg,{setPositionAt:zg.kn});A.extend(qd.prototype,{initialize:function(a){od.prototype.initialize.call(this,a);this.ja=this.pv(this.point,this.Fa);this.Hh();return this.ca},zf:function(a,b){a&&(this.kf.length=0,b||(this.nc=q),this.point=a,this.ja=this.pv(a,this.Fa),this.Hh(),this.draw(),this.dispatchEvent(new P("onlineupdate")))},Af:function(a,b){isNaN(a)||(this.kf.length=0,b||(this.nc=q),this.Fa=Math.abs(a),this.ja=this.pv(this.point,this.Fa),this.Hh(),this.draw(),this.dispatchEvent(new P("onlineupdate")))},Hk:function(a){return this.K.Hk? this.K.Hk(a):qd.PE[this.Dm(a)]},Jv:function(a){var b,a=a.currentTarget,c=this.nc;b=c[0].yb;c=c[c.length-1].yb;0==a.index?(b=a.ma(),a=c):a=a.ma();this.Af(T.Ek(Za(b,this.map.M.Ma),Za(a,this.map.M.Ma)),p);this.zf(b,p)},ZA:function(a){var a=a.currentTarget,b=a.index;this.nc[0]={yb:this.point,sa:0};1==b&&(this.nc[1]={yb:a.point,sa:0});this.kj();this.dm()},OL:function(){if(!this.nc){var a=[];a.push({yb:this.point,sa:0});a.push({yb:this.ja[Math.floor(3*this.ja.length/4)],sa:0});this.nc=a}return this.nc}}); V(yg,{setCenter:yg.zf,setRadius:yg.Af});var Ah={Xs:function(a){Ah["_"+a.da]||(Ah["_"+a.da]={});switch(a.M.QK){case 1:return Ah.HL(a);case 2:return Ah.PL(a);case 3:return Ah.BD(a)}if(J()&&Ah.nM()&&4!==a.M.QK)return Ah.BD(a);if(Ah.QY())return Ah.HL(a);if(Ah.RY())return Ah.PL(a);if(Ah.nM())return Ah.BD(a)},HL:function(a){Ah["_"+a.da].mJ||(Ah["_"+a.da].mJ=new D.JP(a));return Ah["_"+a.da].mJ},PL:function(a){Ah["_"+a.da].AJ||(Ah["_"+a.da].AJ=new D.MP(a));return Ah["_"+a.da].AJ},BD:function(a){Ah["_"+a.da].ZG||(Ah["_"+a.da].ZG=new D.iP(a));return Ah["_"+ a.da].ZG},RY:function(){if(Kb(Ah.rO))return Ah.rO;var a=Pb();return Ah.rO=a},QY:function(){Kb(Ah.qO)||(Ah.qO=Qb());return Ah.qO},nM:function(){Kb(Ah.pO)||(Ah.pO=Rb());return Ah.pO}};D.tq=Ah; ');