var diaMilis = 86400000;
var hoje = new Date();
function validaDataSeparada(dia, mes, ano){
    diafim = 0;
    if ((!isNumero(dia)) || (!isNumero(mes)) || (!isNumero(ano))) 
        return false;
    dia = (((dia.length > 1) && (dia[0] == "0")) ? dia[1] : dia) * 1;
    mes = (((mes.length > 1) && (mes[0] == "0")) ? mes[1] : mes) * 1;
    ano = (ano) * 1;
    
    if ((ano < 0) || (mes < 1) || (mes > 12)) 
        return false;
    switch (mes) {
        case 1:
            diafim = 31;
            break;
        case 3:
            diafim = 31;
            break;
        case 5:
            diafim = 31;
            break;
        case 7:
            diafim = 31;
            break;
        case 8:
            diafim = 31;
            break;
        case 10:
            diafim = 31;
            break;
        case 12:
            diafim = 31;
            break;
        case 4:
            diafim = 30;
            break;
        case 6:
            diafim = 30;
            break;
        case 9:
            diafim = 30;
            break;
        case 11:
            diafim = 30;
            break;
    }
    if (mes == 2) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) 
                diafim = 29;
            else 
                diafim = 28;
        }
        else {
            if (ano % 4 == 0) 
                diafim = 29;
            else 
                diafim = 28;
        }
    }
    if ((dia < 1) || (dia > diafim)) 
        return false;
    return true;
}

function validaDataExtenso(dia, mes, ano){
    switch (mes.toUpperCase()) {
        case "JANEIRO":
            mes = 1;
            break;
        case "FEVEREIRO":
            mes = 2;
            break;
        case "MARÇO":
            mes = 3;
            break;
        case "ABRIL":
            mes = 4;
            break;
        case "MAIO":
            mes = 5;
            break;
        case "JUNHO":
            mes = 6;
            break;
        case "JULHO":
            mes = 7;
            break;
        case "AGOSTO":
            mes = 8;
            break;
        case "SETEMBRO":
            mes = 9;
            break;
        case "OUTUBRO":
            mes = 10;
            break;
        case "NOVEMBRO":
            mes = 11;
            break;
        case "DEZEMBRO":
            mes = 12;
            break;
    }
    return validaDataSeparada(dia, mes, ano);
}

function mesToExtenso(mes){
    switch (mes) {
        case "1":
            mes = "Janeiro";
            break;
        case "2":
            mes = "Fevereiro";
            break;
        case "3":
            mes = "Março";
            break;
        case "4":
            mes = "Abril";
            break;
        case "5":
            mes = "Maio";
            break;
        case "6":
            mes = "Junho";
            break;
        case "7":
            mes = "Julho";
            break;
        case "8":
            mes = "Agosto";
            break;
        case "9":
            mes = "Setembro";
            break;
        case "10":
            mes = "Outubro";
            break;
        case "11":
            mes = "Novembro";
            break;
        case "12":
            mes = "Dezembro";
            break;
    }
    return mes;
}

function validaData(data){
    if (data == '') 
        return false;
    var vetorData = data.split("/");
    if (vetorData.length != 3) 
        return false;
    return validaDataSeparada(vetorData[0], vetorData[1], vetorData[2]);
}

function validaHoraSeparada(hora, minuto){
    if ((!isNumero(hora)) || (!isNumero(minuto))) 
        return false;
    if ((hora > 23) || (minuto > 59)) 
        return false;
    return true;
}

function validaHora(horario){
    if (horario == '') 
        return false;
    var vetorHorario = horario.split(":");
    if (vetorHorario.length != 2) 
        return false;
    return validaHoraSeparada(vetorHorario[0], vetorHorario[1]);
}

function isNumero(nro){
    for (var i = 0; i < nro.length; i++) {
        if (isNaN(parseInt(nro.charAt(i)))) 
            return false;
    }
    return true;
}

//SOMA MÊS
function somaMes(data, n_mes){
    var vetorData = data.split("/");
    var dia = parseInt(((vetorData[0] < 10) && (vetorData[0].length > 1)) ? vetorData[0].charAt(1) : vetorData[0]);
    var mes = parseInt(((vetorData[1] < 10) && (vetorData[1].length > 1)) ? vetorData[1].charAt(1) : vetorData[1]) + (n_mes);
    var ano = parseInt(vetorData[2]);
    if (mes > 12) {
        ano += Math.floor(mes / 12);
        mes = mes % 12;
        if (mes == 0) {
            mes = 12;
            ano--;
        }
    }
    if (mes < 1) {
        if (mes == 0) {
            mes = 12;
            ano--;
        }
        else {
            ano += Math.floor(mes / 12);
            mes = 12 + (mes % 12);
        }
    }
    if ((mes == 2) && (dia > 28)) {
        dia = 29;
        if (!validaDataSeparada(dia, mes, ano)) {
            dia = 28;
        }
    }
    else 
        if (dia == 31) {
            if (!validaDataSeparada(dia, mes, ano)) {
                dia = 30;
            }
        }
    data = ((dia < 10) ? "0" + dia : dia) + ((mes < 10) ? "/0" + mes : "/" + mes) + "/" + ano;
    return data;
}

function validaDatas(campo1, campo2){
    var dataIni = campo1.val().split("/");
    var dataFim = campo2.val().split("/");
    var arrayDataIni = dataIni[1] + "/" + dataIni[0] + "/" + dataIni[2];
    var arrayDataFim = dataFim[1] + "/" + dataFim[0] + "/" + dataFim[2];
    var dataIniMili = Date.parse(arrayDataIni);
    var dataFimMili = Date.parse(arrayDataFim);
    
    return (!(dataIniMili > dataFimMili));
}

function validaHorarios(campo1, campo2){
    var horarioIni = campo1.val().split(":");
    var horarioFim = campo2.val().split(":");
    if (horarioIni[0] > horarioFim[0]) 
        return false;
    else 
        if (horarioIni[0] == horarioFim[0]) {
            if (horarioIni[1] > horarioFim[1]) 
                return false;
            else 
                if (horarioIni[1] == horarioFim[1]) 
                    return true;
        }
    return true;
}

//VALIDA CAMPOS A PARTIR DE FUNÇÃO DO RSV
function validaCampoData(valor){
	if(valor!="")
		return (validaData(valor));
	else
		return true
}

function validaDataNasc(parametro){
	var vetParam = parametro.split("/");
	$("#"+vetParam[0]+" .pv-campo-erro").removeClass("pv-campo-erro");
	var retorno = [];	

	if(($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()!="")&&(!validaData($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()))){	   
		retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[1]+"]"), "Insira uma data válida"];
	}   
	if($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()!=""){
		var mesAtual = hoje.getMonth()+1;   
		var dataHoje = somaMes(hoje.getDate()+"/"+mesAtual+"/"+hoje.getFullYear(), 0);	   
		var dataHojeMili = Date.parse(dataHoje);
		var dataNasc = $("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val();	   
		var dataNascMili = Date.parse(dataNasc);

		if(dataNascMili >= dataHojeMili){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[1]+"]"), "A data de nascimento deve ser menor que a data atual"];
		}
	}	
	if(retorno.length){
		return retorno;
	}
	return true;
}

function validaPeriodoData(parametro){
	var vetParam = parametro.split("/");
	$("#"+vetParam[0]+" .pv-campo-erro").removeClass("pv-campo-erro");		
	var retorno = [];	
	var vdnasc = true;
	
	if($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()!=""){		
		if(!validaData($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val())){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[1]+"]"), "Insira uma data inicial válida no campo período"];
			vdnasc = false;
		}	
		if(($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val()=="")){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[2]+"]"), "Preencha a data final no campo período"];
		}
	}
	if($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val()!=""){
		if(!validaData($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val())){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[2]+"]"), "Insira uma data final válida no campo período"];
			vdnasc = false;
		}
		if(($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()=="")){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[1]+"]"), "Preencha a data inicial no campo período"];
		}
	}
	if((vdnasc)&&(($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()!="") && ($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val()!=""))){
		if(!validaDatas($("#"+vetParam[0]+" input[name="+vetParam[1]+"]"),$("#"+vetParam[0]+" input[name="+vetParam[2]+"]"))){
			retorno[retorno.length] = [$("input[name="+vetParam[2]+"]"),"A data final deve ser maior ou igual à data inicial no campo período"];
		}
	}	
	if(retorno.length){
		return retorno;
	}
    return true;
}

function validaCampoHora(valor){
	if(valor!="")
		return (validaHora(valor));
	else
		return true
}

function validaPeriodoHora(parametro){
	var vetParam = parametro.split("/");
	$("#"+vetParam[0]+" .pv-campo-erro").removeClass("pv-campo-erro");
	var retorno = [];
	var vhorario = true;

	if($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()!=""){
		if(!validaHora($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val())){
			vhorario = false;
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[1]+"]"), "Insira uma hora inicial válida no campo período"];
		}
		if(($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val()=="")){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[2]+"]"), "Preencha a hora final no campo período"];
		}
	}
	if($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val()!=""){
		if(!validaHora($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val())){
			vhorario = false;
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[2]+"]"), "Insira uma hora final válida no campo período"];
		}
		if(($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()=="")){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[1]+"]"), "Preencha a hora inicial no campo período"];
		}
	}
	if((vhorario)&&(($("#"+vetParam[0]+" input[name="+vetParam[1]+"]").val()!="") && ($("#"+vetParam[0]+" input[name="+vetParam[2]+"]").val()!=""))){
		if(!validaHorarios($("#"+vetParam[0]+" input[name="+vetParam[1]+"]"),$("#"+vetParam[0]+" input[name="+vetParam[2]+"]"))){
			retorno[retorno.length] = [$("#"+vetParam[0]+" input[name="+vetParam[2]+"]"),"A hora final deve ser maior ou igual à hora inicial no campo período"];
		}	
	}
	if(retorno.length){
		return retorno;
	}
	return true;
}