let sliderImages = document.querySelectorAll('.slider__image');
let imagesSource = [];

for (i = 0; i < sliderImages.length; i++) {
	imagesSource[i] = sliderImages[i].src;
	sliderImages[i].remove();
}

let imageNumber = 0;

function createImageToRight() {
	if (imageNumber === imagesSource.length - 1) {
		imageNumber = 0;
	} else {
		imageNumber++;
	}
	createImage();
	rightAnim();
}

function createImageToLeft() {

	if (imageNumber === 0) {
		imageNumber = imagesSource.length - 1;
	} else {
		imageNumber--;
	}
	createImage();
	leftAnim();
}

function createImage() {
	let image = document.createElement('img');
	image.src = imagesSource[imageNumber];
	image.classList.add('slider__image');
	document.querySelector('.slider__picarea').appendChild(image);
	image.style.opacity = 0 +'%';
	if (image.previousSibling !== 'null') {
		image.previousSibling.remove();
	}
}

function rightAnim() {
	let image = document.querySelector('.slider__image');
	image.style.animation = "movetoright 0.5s ease-in 0.05s forwards";
}

function leftAnim() {
	let image = document.querySelector('.slider__image');
	image.style.animation = "movetoleft 0.5s ease-in 0.05s forwards";
}

function createBase() {
	let image = document.createElement('img');
	image.src = imagesSource[imageNumber];
	image.classList.add('slider__image');
	document.querySelector('.slider__picarea').appendChild(image);
}


createBase();
right.onclick = createImageToRight;
left.onclick = createImageToLeft;
