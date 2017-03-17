function aleatorio(inferior,superior){
	var pass = new Array();
	var i=0;
	while(i<4){
		var temp;
	   	numPossibilidades = superior - inferior;
	   	aleat = Math.random() * numPossibilidades;
	   	aleat = Math.floor(aleat);
	   	temp = parseInt(inferior) + aleat;
	   	if(!sameValue(pass,temp)){
	   		pass[i] = temp;
	   		i++;
	   	}
	}
	return pass;
}

function sameValue(array,valor){
	var arrayLen = array.length;
	for (var i=0; i < arrayLen; i++) {
		if(array[i]==valor){
			return true;
		}
	}
}

function getResult(arrayPass, arrayTemp){
	var resultTmp = new Array();
	var result = new Array();
	for (var r=0; r < arrayTemp.length; r++) {
		for (var t=0; t < arrayPass.length; t++) {
			if(arrayTemp[r] == arrayPass[t]){
				if(r == t){
					resultTmp.push(0);
				}else{
					resultTmp.push(1);
				}
			}else{
				resultTmp.push(2);
			}
 		}
		result.push(prepareResult(resultTmp));
		resultTmp = [];
	}
	return result;
}

function prepareResult(resultTemp){
	var aux = resultTemp[0];
	for(var x=1; x<resultTemp.length ; x++){
		if(resultTemp[x] < aux){
			aux = resultTemp[x];
		}
	}
	return aux;
}

function resultWin(resultLine){
	for (var r=0; r < resultLine.length; r++) {
		if(resultLine[r] != '0'){
			return false;
		}
	}
	return true;
}

function gameOver(count){
	if(count < 8){
		return false;
	}else{
		return true;
	}
}

function checkDateOk(value) {
	var date=value;
	var erro = false;

	if(moreThanToday(date)){
		erro = true;
	} else {
		var ardt=new Array;
		var ExpReg=new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
		ardt=date.split("/");
		if ( date.search(ExpReg)==-1){
			erro = true;
		}
		else if (((ardt[1]==4)||(ardt[1]==6)||(ardt[1]==9)||(ardt[1]==11))&&(ardt[0]>30))
			erro = true;
		else if ( ardt[1]==2) {
			if ((ardt[0]>28)&&((ardt[2]%4)!=0))
				erro = true;
			if ((ardt[0]>29)&&((ardt[2]%4)==0))
				erro = true;
		}
	}

	if (erro) {
		alert("nao e uma data valida!!!");
	} else {
		alert("valida!!!");
	}

	return erro;
}

function moreThanToday(dateTemp){
	var today = new Date();
	var dateParse = dateTemp.split("/");
	var date = new Date(dateParse[2],dateParse[1],dateParse[0]);
	if(date.getTime() >= today.getTime()){
		return true;
	} else {
		return false;
	}
}

function checkEtiqueta(etiqueta){
	var etiquetaTemp = etiqueta;
	var validaCdTemp = 0;
	var multi = 2;
	var validaCdTemp10;
	var restoValidador;
	var ultimoDg;

	if(isNumeric(etiquetaTemp)){
		for (var x = etiqueta.length; x < 15; x++) {
			etiqueta = "0" + etiqueta;
		}
		alert(etiqueta);

		for (var x = etiqueta.length-1; x > 1; x--) {
			validaCdTemp = validaCdTemp + etiqueta.substring(x - 1, x) * multi++;
			if (multi == 10)multi = 2;
		}
		alert(validaCdTemp);

		validaCdTemp10 = validaCdTemp * 10;
		alert(validaCdTemp10);

		restoValidador = validaCdTemp10%11;
		alert(restoValidador);

		if(restoValidador == 10){
			restoValidador = 0;
		}

		ultimoDg = etiqueta.substring(etiqueta.length-1, etiqueta.length);
		alert(restoValidador);

		if(ultimoDg == restoValidador){
			return true;
		} else {
			return false;
		}

	}else{
		return false;
	}
}

function isNumeric(str) {
	var er = /^[0-9]+$/;
	return (er.test(str));
}

function atalho(e){
	var keychar;

	// Internet Explorer
	try {
		keychar = String.fromCharCode(event.keyCode);
		e = event;
	}
	// Firefox, Opera, Chrome, etc...
	catch(err) {
		keychar = String.fromCharCode(e.keyCode);
	}

	if (e.ctrlKey && e.shiftKey && keychar == 'Z') {
		// Coloque seu código aqui
		alert('Você digitou CTRL + A');
		return false;
	}
	return true;
}

function checkEtiqueta(etiqueta){
	var etiquetaTemp = etiqueta;
	var validaCdTemp = 0;
	var multi = 2;
	var validaCdTemp10;
	var restoValidador;
	var ultimoDg;

	if(isNumeric(etiquetaTemp)){
		for (var x = etiqueta.length; x < 15; x++) {
			etiqueta = "0" + etiqueta;
		}
		alert(etiqueta);

		for (var x = etiqueta.length-1; x > 1; x--) {
			validaCdTemp = validaCdTemp + etiqueta.substring(x - 1, x) * multi++;
			if (multi == 10)multi = 2;
		}
		alert(validaCdTemp);

		validaCdTemp10 = validaCdTemp * 10;
		alert(validaCdTemp10);

		restoValidador = validaCdTemp10%11;
		alert(restoValidador);

		if(restoValidador == 10){
			restoValidador = 0;
		}

		ultimoDg = etiqueta.substring(etiqueta.length-1, etiqueta.length);
		alert(restoValidador);

		if(ultimoDg == restoValidador){
			return true;
		} else {
			return false;
		}

	}else{
		return false;
	}
}

