/**/_jsload2&&_jsload2('marker', 'function th(a,b){0<a.fg.length?a.fg[a.fg.length-1].m.finish=b:a.m.finish=b} A.extend(jb.prototype,{initialize:function(a){this.map=a;this.Oj();this.ha();this.og&&this.og.za(this.map,this);A.lang.Ja.call(this,this.da);if(this.ca)return this.ca.da=this.da,this.Wa||A.U.aa(this.ca),this.ca},ha:function(){function a(a,b){var g=a.srcElement||a.target,i=a.clientX||a.pageX,k=a.clientY||a.pageY;if(a&&b&&i&&k&&g){var g=A.U.ma(c.cb),m=Hb();b.pixel=b.ab=new R(i-g.left+m[1],k-g.top+m[0]);b.point=c.bc(b.ab);b.pointN=c.pg(b.ab)}return b}if(this.ca){var b=this,c=this.map;A.V(this.ca,"mouseover", function(c){b.ql||b.dispatchEvent(a(c,ma(new P("onmouseover"),c)))});A.V(this.ca,"mouseout",function(c){b.ql||b.dispatchEvent(a(c,ma(new P("onmouseout"),c)))});b.K.mf&&(A.V(this.ca,"touchstart",function(a){b.ha.HB=new R(a.changedTouches[0].clientX,a.changedTouches[0].clientY)}),A.V(this.ca,"touchend",function(c){var f=fb(),g=new R(c.changedTouches[0].clientX,c.changedTouches[0].clientY);10<Math.abs(g.x-b.ha.HB.x)||10<Math.abs(g.y-b.ha.HB.y)?b.ha.HB=q:(b.dispatchEvent(a(c,ma(new P("onclick"),c))), f-b.kH<b.map.M.mC&&b.dispatchEvent(a(c,ma(new P("ondblclick"),c))),b.kH=f)}),J()||A.V(this.ca,"click",function(c){for(var f=c.srcElement||c.target;f;){if(f===b.ca){(!(b instanceof W)||b instanceof W&&(!b.HA||b.HA&&b.ma().Ub(b.HA)))&&b.dispatchEvent(a(c,ma(new P("onclick"),c)));break}else if(b.map&&b.map.Sa&&f===b.map.Sa.Cc)break;f=f.parentNode}}),A.V(this.ca,"dblclick",function(c){b.dispatchEvent(a(c,ma(new P("ondblclick"),c)));oa(c)}),(!A.ga.Xe||4>A.ga.Xe)&&A.V(this.ca,"contextmenu",function(c){b.dispatchEvent(a(c, ma(new P("onrightclick"),c)))}));A.V(this.ca,"mousedown",function(c){if(b instanceof W)b.HA=b.ma();b.dispatchEvent(a(c,ma(new P("onmousedown"),c)))});A.V(this.ca,"mouseup",function(c){b.dispatchEvent(a(c,ma(new P("onmouseup"),c)));A.ga.Xe>=4&&(c.button===2&&b.K.mf)&&b.dispatchEvent(a(c,ma(new P("onrightclick"),c)))})}},aa:function(){this.Wa!==t&&(this.Wa=t,Vc.prototype.aa.call(this),this.Fb&&(this.Fb.xb&&this.Fb.xb===this)&&this.Mc())},show:function(){this.Wa!==p&&(this.Wa=p,Vc.prototype.show.call(this))}, TN:function(a){if(a)for(var b in a)typeof this.K[b]===typeof a[b]&&(this.K[b]=a[b])},cq:function(a){this.zIndex=a;this.Yl()},Yl:function(){var a;Kb(this.zIndex)?a=this.zIndex:(a=0,this.map&&this.ma()&&(a=this.ma()?this.ma().lat:0,a=Vc.Kk(a)+(this.K.YJ||0)));this.ca&&(this.ca.style.zIndex=a)},bm:function(a){this.og=a;this.map&&a.za(this.map,this)},Pp:function(){this.og.remove();this.og=q}});V(sg,{show:sg.show,hide:sg.aa,addContextMenu:sg.bm,removeContextMenu:sg.Pp});W.Ou=Vc.Kk(-90)+1E6;W.pG=W.Ou+1E6;W.MR=function(a){if(W.gv[a])return W.gv[a];var b=W.gv[a]=["BMap_"+Math.round(1E4*Math.random()),"BMap_"+Math.round(1E4*Math.random())],c=rd[a],e=W.qU;e||(e=W.qU=H("style",{type:"text/css"}),document.getElementsByTagName("head")[0].appendChild(e));e.textContent+=W.vH(c.Km,b[0])+W.vH(c.gu,b[1]);return W.gv[a]}; W.vH=function(a,b){var c=["@-webkit-keyframes "+b+" {\\\\n"];A.oc.Pb(a,function(a){c.push(100*a.ac,"% { ");c.push("-webkit-transform: translate(",a.translate[0],"px,",a.translate[1],"px); ");c.push("-webkit-animation-timing-function: ",a.lc,"; ");c.push("}\\\\n")});c.push("}\\\\n");return c.join("")}; W.TP=function(a,b){if(!W.Mh&&(W.Mh=H("img",{src:I.ua+"drag_cross.png",width:13,height:9}),W.Mh.style.position="absolute",6==A.ga.oa)){delete W.Mh;var c=(W.Mh=H("div")).style;c.position="absolute";c.width="13px";c.height="9px";c.filter=\'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src="\'+I.ua+\'drag_cross.png")\'}c=W.Mh.style;c.left=a.width-6+"px";c.top=a.height-5+"px";b.appendChild(W.Mh)};W.GT=function(){W.Mh&&W.Mh.parentNode&&W.Mh.parentNode.removeChild(W.Mh)};W.gv=[]; W.SG=function(){this.style.WebkitAnimation=""}; A.extend(W.prototype,{initialize:function(a){this.kr();jb.prototype.initialize.call(this,a);this.Wa||A.U.aa(this.Dc);this.point=this.map?Za(this.point,this.map.M.Ma):this.point;this.va(this.point);this.Wb(this.K.Be);this.Ey(this.K.Yk);this.Zp(this.K.rotation);this.K.label&&this.$u&&this.K.label.addEventListener("remove",this.$u);this.Fj(this.K.label);this.Hc(this.K.title);this.tA();return this.ca},kr:function(){this.Ui||(this.Ui=p,this.fd=this.Dc=this.Ud=this.ca=q,this.zl=t)},Oj:function(){var a= this.map.Wf();this.ca=Eb(a.EE,this.bT());this.Dc=Eb(a.OM,this.US());this.Dc.da=this.da},bT:function(){var a=[\'<span class="BMap_Marker BMap_noprint" unselectable="on" \'];a.push(this.K.title?\'title="\'+this.K.title+\'"\':\'"\');a.push(\' style="position:absolute;padding:0;margin:0;border:0;width:0;height:0;-moz-user-select:none;\');a.push(this.K.mf?"cursor:pointer;":"");a.push("background:url("+I.ua+"blank.gif);");a.push("width:"+this.K.Be.size.width+"px;");a.push("height:"+this.K.Be.size.height+"px;");a.push(\'"></span>\'); return a.join("")},US:function(){var a=[\'<span class="BMap_Marker" unselectable="on" \'];a.push(\'style="position:absolute;padding:0;margin:0;border:0;\');a.push(\'width:0;height:0;-moz-user-select:none"></span>\');return a.join("")},fU:function(){var a=[\'<span unselectable="on" \'];a.push(\'style="position:absolute;padding:0;margin:0;border:0;\');a.push(\'width:0;height:0;-moz-user-select:none"></span>\');return a.join("")},draw:function(){if(this.ca){var a=this.fS();this.ca.style.left=a[0].x+"px";this.ca.style.top= a[0].y+"px";this.Dc&&(this.Dc.style.left=a[0].x+"px",this.Dc.style.top=a[0].y+"px");this.Ud&&(this.Ud.style.left=a[1].x+"px",this.Ud.style.top=a[1].y+"px");this.Fb!=q&&this.Fb.eb()&&this.Fb.va();this.Yl()}},fS:function(){var a=this.K.Ga||new N(0,0),b=this.K.Be.anchor||new N(0,0),c=this.map.cf(this.ma()),b=[new R(c.x+a.width-b.width,c.y+a.height-b.height)];if(this.K.Yk){var e=this.K.Yk.anchor||new N(0,0);b[1]=new R(c.x+a.width-e.width,c.y+a.height-e.height)}return b},ob:function(){this.map?(this.ca= this.initialize(this.map),this.Eq&&(this.fn(this.Eq),delete this.Eq)):delete this.Eq},remove:function(){this.fn(q);this.Dc&&this.Dc.parentNode&&this.Dc.parentNode.removeChild(this.Dc);this.Ud&&this.Ud.parentNode&&this.Ud.parentNode.removeChild(this.Ud);this.Fb&&(this.Fb.xb&&this.Fb.xb===this)&&(this.Mc(),this.Fb=q);this.cc=this.fd=this.Ud=this.Dc=q;if(this.K.label){var a=this.K.label;a.removeEventListener("remove",this.$u);A.lang.Yw(a.da);a.YN(q);a.ca=q;this.K.label=q}jb.prototype.remove.call(this)}, aa:function(){jb.prototype.aa.call(this);this.ca&&A.U.aa(this.ca);this.Dc&&A.U.aa(this.Dc);this.Ud&&A.U.aa(this.Ud)},show:function(){jb.prototype.show.call(this);this.ca&&A.U.show(this.ca);this.Dc&&A.U.show(this.Dc);this.Ud&&A.U.show(this.Ud)},Wb:function(a){if(a instanceof $c||a instanceof ad)if(this.K.Be=a,this.map&&this.ca&&this.Dc){try{this.fd&&(this.Dc.removeChild(this.fd),this.fd=q),this.ca.style.width=a.size.width+"px",this.ca.style.height=a.size.height+"px"}catch(b){}if(this.K.Be){var c=this.fd= H(a instanceof $c?"div":"canvas"),e=c.style;e.position="absolute";e.padding=e.margin="0";e.width=a.size.width+"px";e.height=a.size.height+"px";e.overflow="hidden";a instanceof ad?(c.width=a.size.width,c.height=a.size.height,a.ob(c)):(c.innerHTML=uh(a),c.gL=t);this.Dc.appendChild(this.fd)}this.draw()}},Ey:function(a){if(a instanceof $c&&(this.K.Yk=a,this.map&&this.ca&&this.Dc)){this.Ud||(this.Ud=Eb(this.map.Wf().PM,this.fU()));try{this.cc&&(this.Ud.removeChild(this.cc),this.cc=q),this.Ud.style.width= a.size.width+"px",this.Ud.style.height=a.size.height+"px"}catch(b){}if(this.K.Yk){var c=this.cc=H("div"),e=c.style;e.position="absolute";e.padding=e.margin="0";e.width=a.size.width+"px";e.height=a.size.height+"px";e.overflow="hidden";c.innerHTML=uh(a);c.gL=t;this.Ud.appendChild(this.cc)}this.draw()}},Fj:function(a){if(a&&a instanceof dd){var b=this;Ua.load("marker",function(){b.ZT(a)},p)}},ZT:function(a){if(a instanceof dd){this.K.label=a;var b=this;this.K.label.Pi||(this.K.label.Pi=p,this.$u=function(){b.K.label= q},this.K.label.addEventListener("remove",this.$u));if(this.map){a.Me(this.map);a.ca?this.Dc.appendChild(a.ca):(a.ca=Eb(this.ca,a.Ba()),a.ca.da=a.da);var c=a.ca.style;c.left=a.K.Ga.width+"px";c.top=a.K.Ga.height+"px";a.YN(this)}}},tA:function(){function a(a,b){b.pixel=b.ab=a.ab;b.point=b.point=a.point;return b}function b(a){var b=a.clientX,c=a.clientY;a.changedTouches&&(b=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY);return new R(b,c)}if(this.ca&&!this.ca.Pi){this.ca.Pi=p;var c=this.map, e=this,f=0,g=0,i=0,k={x:0,y:0};this.Js=function(a){if(e.K.jc&&2!=a.button){e.zl=p;var k=c.vc(e.point),o=b(a);f=o.x-k.x;g=o.y-k.y;i=fb();e.map&&e.map.ba&&(e.map.ba.hv=e);A.V(e.map.platform,"mousemove",e.oj);A.V(e.map.platform,"mouseup",e.nj);A.V(e.map.platform,"touchmove",e.oj);A.V(e.map.platform,"touchend",e.nj);e.ca&&e.ca.setCapture&&e.ca.setCapture();e.ca.style.cursor=e.K.Kd;"touchstart"==a.type&&na(a)}};this.oj=function(i){if(e.zl&&(i=b(i),k=i=new R(i.x-f,i.y-g),e.Qz=i,e.K.JN&&15<i.x&&i.x<e.map.width- 15&&30<i.y&&i.y<e.map.height-15||!e.K.JN)){var n=e.map.bc(i),o=e.map.pg(i),o={ab:i,point:n,yf:o};e.Ml=e.Nl=0;if(20>=i.x||i.x>=e.map.width-20||50>=i.y||i.y>=e.map.height-10){if(20>=i.x?e.Ml=8:i.x>=e.map.width-20&&(e.Ml=-8),50>=i.y?e.Nl=8:i.y>=e.map.height-10&&(e.Nl=-8),!e.Le)e.Le=setInterval(function(){c.Kg(e.Ml,e.Nl,{noAnimation:p});var a=c.bc(e.Qz);e.va(a)},30)}else e.Le&&(clearInterval(e.Le),e.Le=q),e.va(n);e.ql||(e.dispatchEvent(a(o,new P("ondragstart"))),e.ql=p,e.K.CN&&(e.fn(3),W.TP(e.K.Be.anchor, e.Dc)));e.dispatchEvent(a(o,new P("ondragging")))}};this.nj=function(){e.ca&&e.ca.releaseCapture&&e.ca.releaseCapture();e.zl=t;e.map&&e.map.ba&&(e.map.ba.hv=q);A.hd(document,"mousemove",e.oj);A.hd(document,"mouseup",e.nj);A.hd(document,"touchmove",e.oj);A.hd(document,"touchend",e.nj);f=g=0;e.Le&&(clearInterval(e.Le),e.Le=q);if(100<=fb()-i&&(2<k.x||2<k.y))e.ql=t,e.dispatchEvent(a({ab:e.map.vc(e.ma()),point:e.ma(),yf:e.bk()},new P("ondragend"))),e.K.CN&&(e.fn(4),W.GT()),k.x=k.y=0;e.Yl();e.ca&&(e.ca.style.cursor= e.K.mf?"pointer":"")};A.V(this.ca,"mousedown",this.Js);A.V(this.ca,"touchstart",this.Js)}},va:function(a){a=this.map?Za(a,this.map.M.Ma):a;if(a instanceof Q||a instanceof L)this.point=this.K.point=new L(a.lng,a.lat),this.draw()},Yl:function(){var a;this.zl==p?a=W.pG:this.K.sE==p?a=W.Ou+(this.NG||0):Kb(this.zIndex)?a=this.zIndex:(a=0,this.map&&this.bk()&&(a=Vc.Kk(this.bk().lat)+this.K.YJ));this.ca&&(this.ca.style.zIndex=a);this.Dc&&(this.Dc.style.zIndex=a)},Di:function(a,b){this.K.sE=!!a;a&&(this.NG= b||0);this.Yl()},Hc:function(a){this.K.title=a+"";this.ca&&(this.ca.title=this.K.title)},Rd:function(a){a instanceof N&&(this.K.Ga=a,this.va(this.ma()))},fn:function(a){var b=this;Ua.load("markeranimation",function(){b.XT(a)},p)},XT:function(a){if(this.fd){this.BQ(a!=q);var b=rd[a];b&&(b=b?b.options.OO:t,!J()||b?this.vR(a):this.uR(a))}},BQ:function(a){this.cH(this.fd);this.cH(this.cc);if(a){if(this.Pj&&(this.Pj.stop(),this.Pj=q),this.fd.style.top=this.fd.style.left="0px",this.cc)this.cc.style.top= this.cc.style.left="0px"}else if(this.Pj){var b=this;th(this.Pj,function(){b.Pj=q})}},uR:function(a){var b=rd[a],a=W.MR(a);this.XI(this.fd,a[0],b);this.XI(this.cc,a[1],b)},cH:function(a){a&&(a.style.WebkitAnimation="",A.hd(a,"webkitAnimationEnd",W.SG))},XI:function(a,b,c){a&&(A.V(a,"webkitAnimationEnd",W.SG),a.style.WebkitAnimation=b+" "+c.options.duration+"ms"+(c.options.loop==zb?" infinite":""))},vR:function(a){var b=this.fd.style,c=t,e;this.cc&&(c=p,e=this.cc.style);var f=rd[a],g=this,i=f.Km.length, k=f.options.duration,m=g.Pj=new xb({duration:0,Zo:zb}),n=f.Km,o=f.gu;b.top=n[0].translate[1]+"px";c&&(e.left=o[0].translate[0]+"px",e.top=o[0].translate[1]+"px");for(var s=1;s<i;s++)(function(){function a(){}var b=[n[s].translate[0]-n[s-1].translate[0],n[s].translate[1]-n[s-1].translate[1]],e=[n[s-1].translate[0],n[s-1].translate[1]];if(c)var z=[o[s].translate[0]-o[s-1].translate[0],o[s].translate[1]-o[s-1].translate[1]],B=[o[s-1].translate[0],o[s-1].translate[1]];var C=yb[n[s-1].lc];s==i-1&&(a=f.options.loop!= zb?function(){g.Pj=q}:function(){g.Pj.start()});m.add(new xb({duration:(f.Km[s].ac-n[s-1].ac)*k,Nc:40,Zo:zb,dc:C,Ba:function(a){if(g.fd)g.fd.style.top=e[1]+Math.round(a*b[1])+"px";if(c&&g.cc){g.cc.style.left=B[0]+Math.round(a*z[0])+"px";g.cc.style.top=B[1]+Math.round(a*z[1])+"px"}},finish:a}))})();m.start()},Zp:function(a){if(a&&(this.K.rotation=a,this.map&&this.ca&&this.Dc))try{if(this.fd){var b=this.fd.style;b.webkitTransform="rotate("+this.K.rotation+"deg)";b.oZ="rotate("+this.K.rotation+"deg)"; b.transform="rotate("+this.K.rotation+"deg)";var c=Math.cos(this.K.rotation/180*Math.PI),e=-Math.sin(this.K.rotation/180*Math.PI),f=Math.sin(this.K.rotation/180*Math.PI),g=Math.cos(this.K.rotation/180*Math.PI);b.filter="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+c+",M12= "+e+",M21= "+f+",M22="+g+")";b.qZ="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+c+",M12= "+e+",M21= "+f+",M22="+g+")";b.I6="bottom 50%";b.pZ="bottom 50%";b.F0="bottom 50%"}this.cc&& (b=this.cc.style,b.webkitTransform="rotate("+this.K.rotation+"deg)",b.oZ="rotate("+this.K.rotation+"deg)",b.transform="rotate("+this.K.rotation+"deg)",c=Math.cos(this.K.rotation/180*Math.PI),e=-Math.sin(this.K.rotation/180*Math.PI),f=Math.sin(this.K.rotation/180*Math.PI),g=Math.cos(this.K.rotation/180*Math.PI),b.filter="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+c+",M12= "+e+",M21= "+f+",M22="+g+")",b.qZ="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+ c+",M12= "+e+",M21= "+f+",M22="+g+")",b.B1="bottom 50%",b.pZ="bottom 50%",b.F0="bottom 50%")}catch(i){}}});V(tg,{setIcon:tg.Wb,setPosition:tg.va,setOffset:tg.Rd,setLabel:tg.Fj,setTitle:tg.Hc,setTop:tg.Di,setAnimation:tg.fn,setShadow:tg.Ey,show:tg.show,hide:tg.aa,remove:tg.remove,setRotation:tg.Zp,getRotation:tg.DL});function uh(a){var b="",b="",c=a.imageUrl,e=a.imageOffset,f=a.imageSize;6==A.ga.oa&&0<c.toLowerCase().indexOf(".png")?(b=["<div"],a.printImageUrl&&b.push(\' class="BMap_noprint"\'),b.push(\' style="width: 1px; height: 1px;\'),b.push("; left:"+e.width+"px"),b.push("; top:"+e.height+"px"),b.push("; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src=\'"+c+"\')"),b.push(\'; position:absolute;"></div>\'),a.printImageUrl&&(b.push(\'<img class="BMap_noscreen" style="display: block; border:none;margin-left:\'+ e.width+"px;"),b.push("margin-top:"+e.height+\'px;" src="\'+a.printImageUrl+\'" />\'))):(b=[\'<img src="\',c,\'" style="display: block; border:none;margin-left:\'+e.width+"px","; margin-top:"+e.height+"px","; "],f&&b.push("; width:"+f.width+"px; height:"+f.height+"px;"),b.push(\'" />\'));return b=b.join("")};A.extend(dd.prototype,{Oj:function(){var a=this.K,b=this.content,c=H("label",{"class":"BMapLabel",unselectable:"on"});a.title&&(c.title=a.title);var e=c.style;e.position="absolute";e.MozUserSelect="none";0==a.width||"auto"==a.width?e.display="inline":(e.width=a.width+"px",e.display="block",e.overflow="hidden");"true"==a.mf?e.cursor="pointer":A.ga.oa||(e.cursor="inherit");c.innerHTML=b;this.map.Wf().wE.appendChild(c);this.ca=c;this.Td(a.hq);return c},va:function(a){a=this.map?Za(a,this.map.M.Ma):a; if((a instanceof Q||a instanceof L)&&!this.tx())this.point=this.K.position=new L(a.lng,a.lat),this.draw()},draw:function(){if(this.ca&&this.ma()&&!this.tx()){var a=this.K.Ga||new N(0,0),b=this.map.cf(this.ma());this.ca.style.left=b.x+a.width+"px";this.ca.style.top=b.y+a.height+"px";this.Yl()}},ob:function(){this.map&&!this.io&&(this.ca=this.initialize(this.map),this.draw())},Pc:function(a){this.content=a;this.ca&&(this.ca.innerHTML=a)},qF:function(a){0<=a&&1>=a&&(this.K.opacity=a);if(this.ca){var b= this.ca.style;b.opacity=a;b.filter="alpha(opacity="+100*a+")"}},Rd:function(a){a instanceof N&&(this.K.Ga=new N(a.width,a.height),this.tx()&&this.ca?(this.ca.style.left=a.width+"px",this.ca.style.top=a.height+"px"):this.draw())},Td:function(a){a=a||{};this.K.hq=A.extend(this.K.hq,a);if(this.ca)for(var b in a)try{this.ca.style[b]=a[b]}catch(c){}},Hc:function(a){this.K.title=a+"";this.ca&&(this.ca.title=this.K.title)}});V(ug,{setStyle:ug.Td,setContent:ug.Pc,setPosition:ug.va,setOffset:ug.Rd,setTitle:ug.Hc}); ');
