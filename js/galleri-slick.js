for(let i = 0; i<21; i++){
	newMass[i].addEventListener('click', function(){
		for(let j = i; j<21; j++){
			let a = document.createElement('div');
			a.style.backgroundImage = "url('img/galleri/" + (j+1) + ".jpg')";
			a.className = 'galleri-slider-item';
			document.querySelector('.slider-window').appendChild(a);
		}
		for(let j = 0; j<i; j++){
			let a = document.createElement('div');
			a.style.backgroundImage = "url('img/galleri/" + (j+1) + ".jpg')";
			a.className = 'galleri-slider-item';
			document.querySelector('.slider-window').appendChild(a);
		}
			document.querySelector('.galleri-slider').style.visibility = 'visible';
			$('.slider-window').slick();
			document.body.style.overflow = '';
	});
};

$('.close-btn-white').on('click', slickcreater);
document.addEventListener('click', e=>{
	if(e.target.id=='galleri-popup'){
		$(".galleri-popup").hide();
	}
	if(e.target.id=='feedback'){
		$(".feedback").hide();
	}
	if(e.target.id=='galleri-slider-id'){
	 slickcreater();
	}
});

function slickcreater(){
		document.querySelector('.galleri-slider').style.visibility = 'hidden';
		$('.slider-window').slick('unslick');
		let b = document.querySelector('.slider-window');
		while(b.firstChild){
			b.removeChild(b.firstChild);
		}
}