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

"use strict";

var config = {
	num: 150,
	speed: 0.1,
	scale: 0.8,
	anim_period: 500,

	vision: 200,
	fear: 0.2,

	width: undefined,
	height: undefined,

	border_repulsion_margin: undefined,
	border_repulsion: 1,
}
var bugs = [];
var ctx, canvas;
var prev;
var mouse = {"x": null, "y": null}

var tex = [
	[new Image(), new Image(), new Image()], 
	[new Image(), new Image(), new Image()], 
	[new Image(), new Image(), new Image()], 
	[new Image(), new Image()], 
	[new Image(), new Image(), new Image()]
];

function loop(time) {
	// Calc delta
	if (prev === undefined) {
		prev = time;
	}
	const delta = time-prev;

	// Update
	for (var i = 0; i < config.num; i++) {
		bugs[i].x += bugs[i].dx*config.speed*delta;
		bugs[i].y += bugs[i].dy*config.speed*delta;
        
        bugs[i].dx += Math.log(Math.max(config.border_repulsion_margin-bugs[i].x, bugs[i].x-(config.width-config.border_repulsion_margin), 0)/config.border_repulsion_margin+1)**2 * (config.border_repulsion_margin-bugs[i].x > 0 ? 1 : -1);
        bugs[i].dy += Math.log(Math.max(config.border_repulsion_margin-bugs[i].y, bugs[i].y-(config.height-config.border_repulsion_margin), 0)/config.border_repulsion_margin+1)**2 * (config.border_repulsion_margin-bugs[i].y > 0 ? 1 : -1);

        if (mouse.x != null && mouse.y != null && Math.sqrt((mouse.x-bugs[i].x)**2 + (mouse.y-bugs[i].y)**2) < config.vision) {
            bugs[i].dx += (bugs[i].x-mouse.x)*config.fear;
            bugs[i].dy += (bugs[i].y-mouse.y)*config.fear;
        }

		let c = Math.sqrt(bugs[i].dx**2 + bugs[i].dy**2);
		bugs[i].dx /= c;
		bugs[i].dy /= c;
	}

	// Draw
    ctx.clearRect(0, 0, config.width, config.height);

    ctx.save();
    for (var i = 0; i < config.num; i++) {
    	ctx.setTransform(config.scale, 0, 0, config.scale, Math.floor(bugs[i].x), Math.floor(bugs[i].y));
        ctx.rotate(Math.atan2(bugs[i].dy, bugs[i].dx));

        let imgs = tex[bugs[i].type];
        let img = imgs[Math.floor((time/config.anim_period + bugs[i].offset)%imgs.length)];

        ctx.drawImage(img, Math.floor(-img.width / 2), Math.floor(-img.height / 2));
    }
    ctx.restore();

    // Next frame
	prev = time;
    window.requestAnimationFrame(loop);
}

function load_textures() {
	tex[0][0].src = static_url + 'img/bg/hnusak1.png';
    tex[0][1].src = static_url + 'img/bg/hnusak2.png';
    tex[0][2].src = static_url + 'img/bg/hnusak3.png';
    tex[1][0].src = static_url + 'img/bg/hovnival1.png';
    tex[1][1].src = static_url + 'img/bg/hovnival2.png';
    tex[1][2].src = static_url + 'img/bg/hovnival3.png';
    tex[2][0].src = static_url + 'img/bg/chroust1.png';
    tex[2][1].src = static_url + 'img/bg/chroust2.png';
    tex[2][2].src = static_url + 'img/bg/chroust3.png';
    tex[3][0].src = static_url + 'img/bg/modrmura1.png';
    tex[3][1].src = static_url + 'img/bg/modrmura2.png';
    tex[4][0].src = static_url + 'img/bg/mura1.png';
    tex[4][1].src = static_url + 'img/bg/mura2.png';
    tex[4][2].src = static_url + 'img/bg/mura3.png';
}

window.addEventListener('mousemove', function(evt) {
    try {
        let rect = canvas.getBoundingClientRect();
        mouse = {"x": evt.clientX - rect.left, "y": evt.clientY - rect.top};
    } catch {
        
    }
});

window.addEventListener("load", function() {
	load_textures();

	canvas = document.getElementById('bugs');
    var width = canvas.scrollWidth;
    var chaos_height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    //var height = canvas.scrollHeight;

    canvas.width = width;
    canvas.height = chaos_height;

    config.width = width;
    config.height = chaos_height;
    config.border_repulsion_margin = Math.min(width/10.0, chaos_height/5.0)/2;

    ctx = canvas.getContext("2d");

    for (var i = 0; i < config.num; i++) {
    	var ang = Math.random()*2*Math.PI;
    	bugs[i] = {
    		"x": Math.random() * config.width, 
    		"y": Math.random() * config.height, 
    		"dx": Math.cos(ang), 
    		"dy": Math.sin(ang),
    		"offset": Math.random(),
    		"type": Math.floor(Math.random() * 5),
    	};
    }

    var stream = document.getElementById("stream");

    for (var i = 0; i<21; i++) {
        var bug = document.createElement("img");
        bug.classList.add("sidebug");
        bug.src = [static_url + 'img/bg/modrmura2.png', static_url + 'img/bg/hnusak1.png', static_url + 'img/bg/chroust1.png', static_url + 'img/bg/mura1.png'][Math.floor(Math.random()*4)]
        bug.style = "max-width: 90%; top: " + i + Math.random()*5 + "rem; left: 20%; transform: rotate(" + (-90 + [-10, 12, -11, 22, 5, 0, -4][i%7]) + "deg);";
        stream.appendChild(bug);
    }

    window.requestAnimationFrame(loop);
});

window.onresize = function() {
    var width = canvas.scrollWidth;
    var chaos_height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    canvas.width = width;
    canvas.height = chaos_height;
    config.width = width;
    config.height = chaos_height;
    config.border_repulsion_margin = Math.min(width/10.0, chaos_height/5.0)/2;
};



}
/*
     FILE ARCHIVED ON 09:34:34 May 24, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:03:29 Jun 18, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.739
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.013
  esindex: 0.016
  cdx.remote: 29.081
  LoadShardBlock: 84.531 (3)
  PetaboxLoader3.datanode: 77.08 (4)
  load_resource: 94.737
  PetaboxLoader3.resolve: 80.312
*/