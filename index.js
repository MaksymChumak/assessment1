var bgcontrol1 = document.getElementById('bg1control');
var bgcontrol2 = document.getElementById('bg2control');
var bgcontrol3 = document.getElementById('bg3control');
var bgcontrol4 = document.getElementById('bg4control');
var ch1 = document.getElementById('ch1');
var ch2 = document.getElementById('ch2');
var ch3 = document.getElementById('ch3');
/*-------------------- Level 3 ------------------------------*/
bgcontrol1.addEventListener('click', function(){
	ch1.style.backgroundImage = 'url(i1.jpg)';
	ch2.style.backgroundImage= 'url(i2.jpg)';
	ch3.style.backgroundImage = 'url(i3.jpg)';
	
});

bgcontrol2.addEventListener('click', function(){
	ch1.style.backgroundImage = 'url(i4.jpg)';
	ch2.style.backgroundImage= 'url(i5.jpg)';
	ch3.style.backgroundImage = 'url(i6.jpg)';
});

bgcontrol3.addEventListener('click', function(){
	ch1.style.backgroundImage = 'url(i7.jpg)';
	ch2.style.backgroundImage= 'url(i8.jpg)';
	ch3.style.backgroundImage = 'url(i9.jpg)';
});

bgcontrol4.addEventListener('click', function(){
	ch1.style.backgroundImage = 'url(i10.jpg)';
	ch2.style.backgroundImage= 'url(i11.jpg)';
	ch3.style.backgroundImage = 'url(i12.jpg)';
});
/*-------------------- Level 4 ------------------------------*/
var zoom = document.getElementById('zoom');
ch1.addEventListener('mouseenter', function() {
	zoom.style.backgroundImage = ch1.style.backgroundImage;
});

ch2.addEventListener('mouseenter', function() {
	zoom.style.backgroundImage = ch2.style.backgroundImage;
});

ch3.addEventListener('mouseenter', function() {
	zoom.style.backgroundImage = ch3.style.backgroundImage;
});

var bg = document.getElementById('bg');
document.getElementById('make-bg').addEventListener('click', function() {
	bg.style.backgroundImage = zoom.style.backgroundImage; 
});

document.getElementById('reset-bg').addEventListener('click',  function() {
	bg.style.backgroundImage = 'none';
});

document.getElementById('show-app').addEventListener('click',  function() {
	document.getElementById('app1').style.display = 'block';
});

document.getElementById('hide-app').addEventListener('click',  function() {
	document.getElementById('app1').style.display = 'none';
});

zoom.addEventListener('click', function() {
	document.getElementById('zoomcontrols').style.display = 'block';
});
/*-------------------- Level 5 ------------------------------*/
var zoomWidth = 100;
var zoomHeight = 70;
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
plus.addEventListener('click', function() {
	zoomWidth += 10;
	zoomHeight += 7;
	if (zoomWidth > 100) {
		zoomWidth = 100;
	}
	if (zoomHeight > 70) {
		zoomHeight = 70;
	}
	zoom.style.width = zoomWidth + '%';
	zoom.style.height = zoomHeight + '%';
});

minus.addEventListener('click', function() {
	zoomWidth -= 10;
	zoomHeight -= 7;
	zoom.style.width = zoomWidth + '%';
	zoom.style.height = zoomHeight + '%';
});
/*-------------------- Level 6 ------------------------------*/
var previous = document.getElementById('previouscontrol');
var next = document.getElementById('nextcontrol');
next.addEventListener('click', function() {
	if (ch1.style.backgroundImage == 'url("i1.jpg")') {
		ch1.style.backgroundImage = 'url(i4.jpg)';
		ch2.style.backgroundImage= 'url(i5.jpg)';
		ch3.style.backgroundImage = 'url(i6.jpg)';	
	}
	else if (ch1.style.backgroundImage == 'url("i4.jpg")') {
		ch1.style.backgroundImage = 'url(i7.jpg)';
		ch2.style.backgroundImage= 'url(i8.jpg)';
		ch3.style.backgroundImage = 'url(i9.jpg)';
	}
	else if (ch1.style.backgroundImage == 'url("i7.jpg")') {
		ch1.style.backgroundImage = 'url(i10.jpg)';
		ch2.style.backgroundImage= 'url(i11.jpg)';
		ch3.style.backgroundImage = 'url(i12.jpg)';	
	}
	else {
		ch1.style.backgroundImage = 'url(i1.jpg)';
		ch2.style.backgroundImage= 'url(i2.jpg)';
		ch3.style.backgroundImage = 'url(i3.jpg)';
	}
});

previous.addEventListener('click', function() {
	if (ch1.style.backgroundImage == 'url("i1.jpg")') {
		ch1.style.backgroundImage = 'url(i10.jpg)';
		ch2.style.backgroundImage= 'url(i11.jpg)';
		ch3.style.backgroundImage = 'url(i12.jpg)';	
	}
	else if (ch1.style.backgroundImage == 'url("i4.jpg")') {
		ch1.style.backgroundImage = 'url(i1.jpg)';
		ch2.style.backgroundImage= 'url(i2.jpg)';
		ch3.style.backgroundImage = 'url(i3.jpg)';
	}
	else if (ch1.style.backgroundImage == 'url("i7.jpg")') {
		ch1.style.backgroundImage = 'url(i4.jpg)';
		ch2.style.backgroundImage= 'url(i5.jpg)';
		ch3.style.backgroundImage = 'url(i6.jpg)';	
	}
	else {
		ch1.style.backgroundImage = 'url(i7.jpg)';
		ch2.style.backgroundImage= 'url(i8.jpg)';
		ch3.style.backgroundImage = 'url(i9.jpg)';
		console.log(ch1.style.backgroundImage);
	}
});


