/**/_jsload2&&_jsload2('geoctrl', 'A.extend(Hc.prototype,{initialize:function(a){var b=this;Dc.prototype.initialize.call(b,a);b.Ha();b.sr={"default":D.pa+"images/geolocation-control/mobile/default-40x40.png",loading:D.pa+"images/geolocation-control/mobile/loading-40x40.gif",success:D.pa+"images/geolocation-control/mobile/success-40x40.png",fail:D.pa+"images/geolocation-control/mobile/fail-40x40.png"};b.rj=b.R.children[0];b.uD=b.rj.children[0];b.ip=b.uD.children[0];b.sD=b.rj.children[1];b.hL=b.sD.children[0].children[0];var c;b.P.addEventListener("moveend", function(){if(c){var a=b.P.Qb();a.lng===c.lng&&a.lat===c.lat?b.Mr(b.sr.success):(b.Mr(b.sr["default"]),b.AQ())}});A.V(b.ip,"click",function(){b.Mr(b.sr.loading);(new Geolocation({timeout:1E4})).getCurrentPosition(function(e){b.Mr(b.sr.success);if(e.address&&b.m.S_){var f="";e.address.city?f+=e.address.city:e.address.province&&(f+=e.address.province);e.address.district&&(f+=e.address.district);e.address.street&&(f+=e.address.street);e.address.street_number&&(f+=e.address.street_number);b.WT(f)}var f= new Q(e.longitude,e.latitude),g=b.m.KM?b.m.KM:new $c(D.pa+"images/geolocation-control/point/position-icon-14x14.png",new N(14,14));window[a.da+"locationMarker"]&&a.Jb(window[a.da+"locationMarker"]);g=new W(f,{icon:g});c=f;b.vD=f;a.Ra(g);window[a.da+"locationMarker"]=g;a.vd(f,15);e.address&&(b.gs={province:e.address.province||"",city:e.address.city||"",district:e.address.district||"",street:e.address.street||"",streetNumber:e.address.street_number||""},Sa(7001,{longitude:e.longitude,latitude:e.latitude, accuracy:e.accuracy}));e=new P("locationSuccess");e.point=b.vD;e.addressComponent=b.gs;b.dispatchEvent(e)},function(a){b.Mr(b.sr.fail);var c=new P("locationError");c.code=a.errorCode;c.message=a.Ak;b.dispatchEvent(c)})});return b.R},location:function(){var a=this;a.P0.push({});(new Geolocation({timeout:1E4})).getCurrentPosition(function(b){a.vD=new Q(b.longitude,b.latitude);b.address&&(a.gs={province:b.address.province||"",city:b.address.city||"",district:b.address.district||"",street:b.address.street|| "",streetNumber:b.address.street_number||""});b=new P("locationSuccess");b.point=a.vD;b.addressComponent=a.gs;a.dispatchEvent(b)},function(b){var c=new P("locationError");c.code=b.errorCode;c.message=b.Ak;a.dispatchEvent(c)})},iX:function(){return this.gs?this.gs:q},YP:function(){this.P?this.Me(this.P):this.map&&this.Me(this.map)},Ha:function(){Dc.prototype.Ha.call(this);this.R.style.cssText="height: 32px;";this.R.innerHTML=this.$q()},$q:function(){return[\'<div class="BMap_geolocationContainer" style="height: 32px; margin: 0px; box-sizing: border-box; border: 1px solid #d9d7d5; border-radius: 3px; -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.2); overflow: hidden;">\', \'<div class="BMap_geolocationIconBackground" style="float: left; width: 32px; height: 32px; background-image: url(\\\'\'+D.pa+"images/geolocation-control/mobile/gradient-bg-1x64.png\'); background-size: 1px 32px; background-repeat: repeat-x;\\">",\'<div class="BMap_geolocationIcon" style="width: 32px; height: 32px; cursor: pointer; background-image: url(\\\'\'+D.pa+"images/geolocation-control/mobile/default-40x40.png\'); background-size: 20px 20px; background-repeat: no-repeat; background-position: center center;\\"></div>", "</div>",\'<div class="BMap_geolocationAddress" style="display: none; float: left; min-width: 50px; padding-left: 10px; padding-right: 10px; border-left: 1px solid #d9d7d5; background-image: url(\'+D.pa+\'images/geolocation-control/mobile/gradient-bg-1x64.png); background-size: 1px 32px; background-repeat: repeat-x;">\',\'<div style="height: 32px; display: table-cell; vertical-align: middle;"><div class="BMap_geolocationAddressText" style="font-size: 12px; color: #666666; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block; min-width: 50px; max-width: 200px;"></div></div></div></div>\'].join("")}, Mr:function(a){this.ip.style.backgroundImage="url(\'"+a+"\')"},WT:function(a){this.sD.style.display="block";this.hL.textContent=a},AQ:function(){this.hL.textContent="";this.sD.style.display="none"}});Hc.prototype.location=Hc.prototype.location;Hc.prototype.getAddressComponent=Hc.prototype.iX; ');