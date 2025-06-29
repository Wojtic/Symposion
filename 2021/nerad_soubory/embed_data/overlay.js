var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

google.maps.__gjsload__('overlay', function(_){var Kt=function(a){this.h=a},xla=function(){},Lt=function(a){a.Bo=a.Bo||new xla;return a.Bo},yla=function(a){this.Na=new _.Yh(function(){var b=a.Bo;if(a.getPanes()){if(a.getProjection()){if(!b.Cn&&a.onAdd)a.onAdd();b.Cn=!0;a.draw()}}else{if(b.Cn)if(a.onRemove)a.onRemove();else a.remove();b.Cn=!1}},0)},zla=function(a,b){function c(){return _.Zh(e.Na)}var d=Lt(a),e=d.rm;e||(e=d.rm=new yla(a));_.qb(d.ab||[],_.F.removeListener);var f=d.Za=d.Za||new _.Or,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.js=d.js||new Kt(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.ab=[_.F.addListener(a,"panes_changed",c),_.F.addListener(g,"zoom_changed",c),_.F.addListener(g,"offset_changed",c),_.F.addListener(b,"projection_changed",c),_.F.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.pf&&(_.qg(b,"Ox"),_.eg(b,148440))},Dla=function(a){if(a){var b=a.getMap();if(Ala(a)!==b&&b&&b instanceof _.pf){var c=b.__gm;c.overlayLayer?a.__gmop=new Bla(b,a,c.overlayLayer):c.h.then(function(d){d=d.Qa;var e=new Mt(b,d);d.tb(e);c.overlayLayer=e;Cla(a);Dla(a)})}}},Cla=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.h.unbindAll(),b.h.set("panes",null),b.h.set("projection",null),b.l.ig(b),b.j&&(b.j=!1,b.h.onRemove?b.h.onRemove():b.h.remove()))}},Ala=function(a){return(a=a.__gmop)?a.map:null},
Bla=function(a,b,c){this.map=a;this.h=b;this.l=c;this.j=!1;_.qg(this.map,"Ox");_.eg(this.map,148440);c.Ff(this)},Ela=function(a,b){a.h.get("projection")!=b&&(a.h.bindTo("panes",a.map.__gm),a.h.set("projection",b))},Mt=function(a,b){this.m=a;this.l=b;this.h=null;this.j=[]};_.C(Kt,_.G);
Kt.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.je(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.h:null))};var Nt={};_.C(yla,_.G);Nt.Ff=function(a){if(a){var b=a.getMap();(Lt(a).Nr||null)!==b&&(b&&zla(a,b),Lt(a).Nr=b)}};Nt.ig=function(a){var b=Lt(a),c=b.Za;c&&c.unbindAll();(c=b.js)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.ab&&_.qb(b.ab,_.F.removeListener);b.ab=null;b.rm&&(b.rm.Na.Kd(),b.rm=null);delete Lt(a).Nr};var Ot={};Bla.prototype.draw=function(){this.j||(this.j=!0,this.h.onAdd&&this.h.onAdd());this.h.draw&&this.h.draw()};Mt.prototype.dispose=function(){};Mt.prototype.Ec=function(a,b,c,d,e,f,g,h){var k=this.h=this.h||new _.Cp(this.m,this.l,function(){});k.Ec(a,b,c,d,e,f,g,h);a=_.z(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,Ela(b,k),b.draw()};Mt.prototype.Ff=function(a){this.j.push(a);this.h&&Ela(a,this.h);this.l.refresh()};Mt.prototype.ig=function(a){_.xb(this.j,a)};Ot.Ff=Dla;Ot.ig=Cla;_.af("overlay",{Kp:function(a){if(a){(0,Nt.ig)(a);(0,Ot.ig)(a);var b=a.getMap();b&&(b instanceof _.pf?(0,Ot.Ff)(a):(0,Nt.Ff)(a))}},preventMapHitsFrom:function(a){_.fq(a,{onClick:function(b){return _.Lp(b.event)},wd:function(b){return _.Ip(b)},Rh:function(b){return _.Jp(b)},Yd:function(b){return _.Jp(b)},Fd:function(b){return _.Kp(b)}}).Li(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.ff);a.addEventListener("contextmenu",_.ff);a.addEventListener("dblclick",_.ff);a.addEventListener("mousedown",
_.ff);a.addEventListener("mousemove",_.ff);a.addEventListener("MSPointerDown",_.ff);a.addEventListener("pointerdown",_.ff);a.addEventListener("touchstart",_.ff);a.addEventListener("wheel",_.ff)}});});


}
/*
     FILE ARCHIVED ON 22:08:46 May 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:03:41 Jun 18, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.513
  exclusion.robots: 0.054
  exclusion.robots.policy: 0.027
  esindex: 0.027
  cdx.remote: 24.167
  LoadShardBlock: 149.451 (3)
  PetaboxLoader3.datanode: 145.806 (4)
  PetaboxLoader3.resolve: 367.359 (2)
  load_resource: 384.106
*/