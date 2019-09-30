/* Alterado para cursor aceitar 'Setas', a tecla 'Home' e a tecla 'Delete' Mantis: 0052904 */
var ponto = new RegExp('\\.', 'g');
var virgula = new RegExp(',', 'g');
var v_obj = "";
var flgValidouEmail = "";

function retornaQtdEspeciais(text){

	var qtdP = text.match(ponto);

	if(qtdP != null){
		qtdP = qtdP.length;
	} else {
		qtdP = 0;
	}
	
	var qtdV = text.match(virgula);

	if(qtdV != null){
		qtdV = qtdV.length;
	} else {
		qtdV = 0;
	}
	
	return qtdP + qtdV;
	
}

function recolocaCursor(start, qtd1, qtd2, obj){
	
	if(obj != null){
		v_obj = obj;
	}
	
	if(qtd1 > qtd2){
		start = start - 1;
	} else if ( qtd1 < qtd2){
		start = start + 1;
	}
	
	if(v_obj.createTextRange) {

	     //v_obj.focus ();
  
       var oSel = document.selection.createRange();
  
       oSel.moveStart ('character', -v_obj.value.length);
	   oSel.moveEnd ('character', -v_obj.value.length);
  
       oSel.moveStart ('character', start);
       oSel.moveEnd ('character', 0);
       oSel.select();

	} else if(v_obj.selectionStart) {
		v_obj.setSelectionRange(start, start);
	}
}

function retornaCursor(obj){
	
	if(obj != null){
		v_obj = obj;
	}

	if(document.selection) {
		var iCaretPos = 0;
		//v_obj.focus ();
		var sel = document.selection.createRange();
		var selLength = document.selection.createRange().text.length;
		if(v_obj.value != null && v_obj.value != undefined && v_obj.value.length != undefined ){
			sel.moveStart ('character', -v_obj.value.length);
		}
		iCaretPos = sel.text.length - selLength;
		return iCaretPos;
		
	} else if(v_obj.selectionStart != null) {
		return v_obj.selectionStart;
	}

}

function Mascara(o, f, e) {
	if(!verificaSeta(e))
	{
		v_obj = o;
		v_fun = f;
		setTimeout("execmascara()", 1);
	}
}

function MascaraVencimento(o, f, e) {
	if(!verificaSeta(e))
	{
		v_obj = o;
		v_fun = f;
		execmascara();
	}
}

function mascaraDesabilitaEnter(o, f, e){	
	desabilitarEnter(e);
	Mascara(o, f, e);
}

/* Função que Executa os objetos */
function execmascara() {

	var start;
	var qtd1, qtd2;
	var objInicial = v_obj.value.length;
	start = retornaCursor();
	qtd1 = retornaQtdEspeciais(v_obj.value);

	if(flgValidouEmail != "ok"){
		if(v_obj.value.lastIndexOf(".") != -1 || v_obj.value.lastIndexOf(",") != -1){
			objInicial--;
		}
	}else{
		if(v_obj.value.lastIndexOf(",") != -1){
			objInicial--;
		}
	}
	
	v_obj.value = v_fun(v_obj.value);
	
	dif = parseInt(objInicial) - parseInt(v_obj.value.length);
	
	if(dif == 1){
		start = start - 1;
	}else if(dif == 2){
		start = start - 2;
	}
	
	qtd2 = retornaQtdEspeciais(v_obj.value);
	recolocaCursor(start, qtd1, qtd2);
}

/* Função de verificação de Setas (37 e 39) , tecla 'Home' (36) e tecla 'Delete' (46) e tecla 'BackSpace' (8) e tecla 'Shift' (16) TAB(9)*/
function verificaSeta(e){
	if(e != null){
		codigo = pegaCodigo(e);

		if(codigo == '37' || codigo == '39' || codigo == '36' || codigo == '8' || codigo == '16' || codigo == '46' || codigo == "9"){
			return true;
		}
	}
	return false;
}

/** Função que pega keyCode de acordo com o navegador */
function pegaCodigo(e){
	if(window.event){
		return e.keyCode;
	}else if(e.which){
		// Se o navegador for Firefox, Opera...
		return e.which;;
	}
}

/* Função que permite apenas numeros */
function Integer(v) {
	return v.replace(/\D/g, "");
}

/* Função que padroniza numero e ano do estudo aceitacao*/
function EstudoAceitacao(v) {
	v = v.replace(/\D/g, "");
	return v;
}

/* Função que padroniza telefone (11) 4184-1241, (11) #4184-1241  */
function Telefone(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
	if(v.length == 13)
	{
		v = v.replace(/(\d{4})(\d)/, "$1-$2");
	}
	else if(v.length == 14)
	{
		v = v.replace(/(\d{5})(\d)/, "$1-$2");
	}
	return v;
}

/* Função que padroniza telefone 4184-1241, #4184-1241 */
function TelefoneCorpo(v) {
	v = v.replace(/\D/g, "");
	if(v.length == 8)
	{
		v = v.replace(/(\d{4})(\d)/, "$1-$2");
	}
	else if(v.length == 9)
	{
		v = v.replace(/(\d{5})(\d)/, "$1-$2");
	}
	return v;
}

/* Função que padroniza telefone (11) 41841241, #4184-1241 */
function TelefoneCall(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
	return v;
}

/* Função que padroniza CPF */
function Cpf(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{3})(\d)/, "$1.$2");
	v = v.replace(/(\d{3})(\d)/, "$1.$2");

	v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
	return v;
}

/* Função que padroniza o corpo do CPF */
function CorpoCpf(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{3})(\d)/, "$1.$2");
	v = v.replace(/(\d{3})(\d)/, "$1.$2");

	return v;
}

/* Função que padroniza CEP */
function Cep(v) {
	v = v.replace(/[^0-9]/g, "");
	v = v.replace(/D/g, "");
	v = v.replace(/^(\d{5})(\d)/, "$1-$2");
	return v;
}

/* Função que padroniza CNPJ */
function Cnpj(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/^(\d{2})(\d)/, "$1.$2");
	v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
	v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
	v = v.replace(/(\d{4})(\d)/, "$1-$2");
	return v;
}

/* Função que padroniza CPF PPW */
function CpfSemDigito(v) {
	v = v.replace(/\D/g, "");
	
//	//se for maior que 9 exclui o ultimo digito
//	if(v.length>9){
//		v=v.substring(0, v.length - 1);
//	}
		
	if (v.length > 0 && v.length<9) {
			
		for(j=v.length;j<9;j++){
				v = "0" + v;
		}

	}
	v = v.replace(/(\d{3})(\d)/, "$1.$2");
	v = v.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    return v;
}

/* Função que permite apenas numeros Romanos */
function Romanos(v) {
	v = v.toUpperCase();
	v = v.replace(/[^IVXLCDM]/g, "");

	while (v.replace(
			/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/, "") != "");
		v = v.replace(/.$/, "");
	return v;
}

/* Função que desabilita caracteres especiais para email*/
function ValidarEmail(v){
	v = v.replace(/[^a-z0-9A-Z@_.\-]/g, "");
	flgValidouEmail = "ok";
	return v;
}

function alphaNum(v){

	v = v.replace(/[^a-z0-9A-Z ]/g, "");
	
	return v;
}

function alpha(v){

	v = v.replace(/[^a-zA-Z ]/g, "");
	
	return v;
}

/* Função que padroniza o Site */
function Site(v) {
	v = v.replace(/^http:\/\/?/, "");
	dominio = v;
	caminho = "";
	if (v.indexOf("/") > -1)
		dominio = v.split("/")[0];
	caminho = v.replace(/[^\/]*/, "");
	dominio = dominio.replace(/[^\w\.\+-:@]/g, "");
	caminho = caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g, "");
	caminho = caminho.replace(/([\?&])=/, "$1");
	if (caminho != "")
		dominio = dominio.replace(/\.+$/, "");
	v = "http://" + dominio + caminho;
	return v;
}

/* Função que padroniza DATA */
function Data(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{2})(\d)/, "$1/$2");
	v = v.replace(/(\d{2})(\d)/, "$1/$2");
	
	if (v.length > 10)
		v = v.substring(0, 10);
	
	return v;
}

/* Função que padroniza DATA */
function Hora(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{2})(\d)/, "$1:$2");
	return v;
}

/* Função que padroniza valor percentual com negativo */
function ValorNegativo(v) {
	//Aceita numeros ou o sinal NEGATIVO no primeiro caracter:
	if (v.indexOf("-") == 0){
		var mod = '-';
	}
	
	v = v.replace(/\D/g, "");
	
	if(mod != null){
			if(v.length <= 3)
				v = v.replace(/^(\d{1})(\d)/, "$1,$2");
			else
				v = v.replace(/^(\d{2})(\d)/, "$1,$2");
			v = mod.concat(v);
			return v;
	}
	
	if(v.length <= 3)
		v = v.replace(/^(\d{1})(\d)/, "$1,$2");
	else if(v.length < 5)
		v = v.replace(/^(\d{2})(\d)/, "$1,$2");
	else
		v = v.replace(/^(\d{3})(\d)/, "$1,$2");
	
	return v;
}

/* Função que padroniza valor monétario */
function Valor(v) {
	v = v.replace(/\D/g, ""); // Remove tudo o que não é dígito
	v = v.replace(/(\d)(\d{17})$/,"$1.$2");
	v = v.replace(/(\d)(\d{14})$/,"$1.$2");
	v = v.replace(/(\d)(\d{11})$/,"$1.$2");
	v = v.replace(/(\d)(\d{8})$/,"$1.$2");
	v = v.replace(/(\d)(\d{5})$/,"$1.$2");
	v = v.replace(/(\d)(\d{2})$/,"$1,$2");
	return v;
}

/* Função que padroniza coeficiente desconto */
function Coeficiente(v) {
	v = v.replace(/\D/g, ""); // Remove tudo o que não é dígito
	v = v.replace(/(\d)(\d{2})$/,"$1,$2");
	v = v.replace(/(\d)(\d{3})$/,"$1,$2");
	return v;
}

function valorPercentual(v){

	
	v=v.replace(/\D/g,"");//remove tudo que não é digito
	
	while(v.length > 0 && v.charAt(0)=="0"){
		if(v.length > 1)
		v=v.substring(1,v.length);
		else
			v="";
	}
	//se for maior que 5 exclui o ultimo digito
	if(v.length>5){
		v=v.substring(0, v.length - 1);
	}
	
	if(v.length==1){
		v="0000"+v;
	}
	else if(v.length==2){
		v="000"+v;	
	}
	else if(v.length==3){
		v="00"+v;
	}	
	else if(v.length==4){
		v="0"+v;
	}
	
	v=v.replace(/(\d)(\d{4})$/,"$1,$2");
	return v;

}

function valorPercentualDuasCasas(v){

	
	v=v.replace(/\D/g,"");//remove tudo que não é digito
	
	while(v.length > 0 && v.charAt(0)=="0"){
		if(v.length > 1)
		v=v.substring(1,v.length);
		else
			v="";
	}
	//se for maior que 5 exclui o ultimo digito
	if(v.length>4){
		v=v.substring(0, v.length - 1);
	}
	
	if(v.length==1){
		v="00"+v;
	}
	else if(v.length==2){
		v="0"+v;	
	}
	
	v=v.replace(/(\d)(\d{2})$/,"$1,$2");
	return v;

}

function valorPercentualUmaCasa(v){

	v=v.replace(/\D/g,"");//remove tudo que não é digito

	//se for maior que 5 exclui o ultimo digito
	if(v.length>3){
		v=v.substring(v.length - 3, v.length);
	}

	if(v.length==1){
		v="0"+v;
	} else if (v.length==2) {
		v="0"+v;	
	}

	v=v.replace(/(\d)(\d{1})$/,"$1,$2");
	return v;
}

/* Função que padroniza Area */
function Area(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d)(\d{2})$/, "$1.$2");
	return v;
}

/* Função que padroniza valor monétario em geral*/
function mascara_dinheiro(v) {
	textoNumerico = v.replace(/\D/g, "");
	textoNumerico = textoNumerico.replace(/^0/, "");
	textoFormatado = "";
	if (textoNumerico.length == 1) {
		return "0,0" + textoNumerico;
	} else if (textoNumerico.length == 2) {
		return "0," + textoNumerico;
	} else {
		for (i = 0; i < textoNumerico.length; i++) {
			if (i == textoNumerico.length - 2) {
				textoFormatado += ",";
			}
			if ((i != 0 && textoNumerico.length - i >= 5)
					&& ((textoNumerico.length - i + 1) % 3 == 0)) {
				textoFormatado += ".";
			}
			textoFormatado += textoNumerico.charAt(i);
		}
		return textoFormatado;
	}
}

/* Função que formata o numero do cartao de credito */
function mascaraCartao(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{4})(\d)/, "$1.$2");
	v = v.replace(/(\d{4})(\d)/, "$1.$2");
	v = v.replace(/(\d{4})(\d)/, "$1.$2");
	v = v.replace(/(\d{4})(\d{4})(\d{4})(\d)/, "$1.$2.$3.$4");

	return v;
}

/* Mascara para DD/MMMM */
function ddAAAA(v) {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{2})(\d)/, "$1/$2");

	return v;
}

/** Mascara Placa Veiculo para tipos AA-9999 ou AAA-9999 **/
function placa(v){
	var tam = v.length;
	var caracter = v.substring(tam-1,tam);
	if(tam < 3){
		if(!caracter.match(/[a-zA-Z]/)){
			v = v.replace(caracter,"");
		}
	}else if(tam == 3){
		if(caracter.match(/[a-zA-Z]/)){
			v.replace("-", "");
		}else{
			v.replace("-", "");
			if(v.indexOf("-")==-1){
				v = v.substring(0, tam-1);
				v = v + "-";
				v = v + caracter;
			}
		}
	}else if(tam>3){
		if(isNaN(caracter)){
			v = v.substring(0, tam-1);
			v.replace("-", "");
			if(v.indexOf("-")==-1){
				v = v + "-";
			}
		}else if(tam == 4){
			v.replace("-", "");
			if(v.indexOf("-")==-1){
				v = v.substring(0, tam-1);
				v = v + "-";
				v = v + caracter;
			}
		}
		if(tam > 7){
			var valorSemLetras = v.replace(/\D/g, "");
			//Se valorSemLetras retornar mais de 4 numeros não aceito mais nenhum numero
			if(valorSemLetras.length > 4){
				v = v.substring(0, tam-1);
			}
		}
	}
	return v;
}

function MascaraCaracterEspecial(v) {
	return v.replace(/[^0-9\-\_\/]/g, "");
}

function validar(o,f){ 
	v_obj=o 
	v_fun=f 
	setTimeout("execvalidacao()",1) 
} 

function execvalidacao(){ 
	v_obj.value=v_fun(v_obj.value) 
}

function validarPercentual(v) {
	v = v.replace(",", "");

	if (v > 1000) {
		alert("Percentual informado ultrapassou o limite de 100%. Verifique!");
		v = "";
	}

	return v=v.replace(/(\d)(\d{1})$/,"$1,$2");
}