     $(document).ready(function(){
    	$('.header').on("click","a", function (event) {
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		var timeScroll = 1000;
		$('body,html').animate({scrollTop: top}, timeScroll);
	});
    });
 	var windowCloser = function(className){
 		var controller = document.getElementsByClassName(className);
    	controller[0].style.display = "none";
 	}

    windowCloser('feedback');
    windowCloser('galleri-popup');

    var windowOpener = function(className){
    	var controller = document.getElementsByClassName(className);
    	controller[0].style.display = "flex";
    }
		var newMass = [];
    var pictureUrls = [];
    for(var i = 0; i < 21; i++){
    	pictureUrls[i] = 'img/galleri/' + (i+1) + '.jpg';
    }



    var makeElement = function (tagName, className) {
    	var element = document.createElement(tagName);
    	element.classList.add(className);

    	return element;
    };

    var createImgBlock = function(imgUrl){
    	var galleriItem = makeElement('div', 'galleri-item');

    	var border = makeElement('div', 'border');
    	border.id = 'border';
    	galleriItem.appendChild(border);

    	var picture = makeElement('img', 'galleri--img');
    	picture.src = imgUrl;
    	picture.alt = 'Охота в Беларуси';
    	galleriItem.appendChild(picture);
			newMass.push(galleriItem);
    	return galleriItem;
    }

    var galleriList = document.querySelector('.galleri-items');

    for (var i = 0; i < pictureUrls.length; i++) {
    	var galleriItem = createImgBlock(pictureUrls[i]);
    	galleriList.appendChild(galleriItem);
    }

    createImgBlock(pictureUrls);

// setings of slick

	$('.direction-blocks').slick({
		arrows: false,
		dots: true
	});
	$('.slider-blocks').slick({
		arrows: false,
		dots: true
	});