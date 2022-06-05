const txtElement = ['MA AL HIKMAH 2','SMA AL HIKMAH 2','SMK WICAKSANA','MTS AL HIKMAH 2','SMP AL HIKMAH 2',
					'MMA AL HIKMA 2','MAHAD ALY','AKPER AL HIKMAH 2'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 200);

})();