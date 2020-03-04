(function(){
	'use strict';

	//variáveis

	let arr = ['um', 'dois', 'tres', 'quatro'];
	let testimony = document.querySelectorAll('.depoimento_indv');
	let slideMarks = document.querySelectorAll('.depmt');
	let counter = 1;
	let startSlide = setInterval( checkSlidePosition, 5000 );

	//funções

	function initSlide(){
		testimony[counter].style.display = 'block';
		slideMarks[counter].style.background = "#fff";
		return;
	}

	function changeLastSlide(){
		testimony[counter - 1].style.display = 'none';
		slideMarks[counter - 1].style.background = "#5e5a52";
		return;
	}

	function checkSlidePosition(){
		//Se o slide estiver no último depoimento, mude o estado do slide anterior(changeLastSlide), zera o contador e reinicia o slide(initSlide)
		if( counter == testimony.length ){
			changeLastSlide();
			counter = 0;
			initSlide();
			return counter++;
		}

		if( counter == 0 ){
			initSlide();
			return counter++;
		}

		changeLastSlide();
		initSlide();
		return counter++;
	}

	//loop que percorre todos os slides ocultando-os, exceto o primeiro / Isso poderia ser feito pelo css também

	for( let i = 0, j = arr.length; i < j; i++ ){
		let valor = document.getElementById('depoimento_'+arr[i]+'');

		if( valor.id == 'depoimento_um' ){
			continue;
		}

		valor.style = 'display: none';
	}
})();