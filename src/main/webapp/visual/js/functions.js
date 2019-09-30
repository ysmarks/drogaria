var basic = "1px solid #C5C8CA";

function dadosCadastrais(){
	var cep = document.getElementById('form:cep');
	var logra = document.getElementById('form:logradouro');
	var numero = document.getElementById('form:numero');
	var bairro = document.getElementById('form:bairro');
	var comp = document.getElementById('form:complemento');
	var cidade = document.getElementById('form:cidade');
	var estado = document.getElementById('form:estado');
	var opcao = document.getElementById('form:opcao');
	var email = document.getElementById('form:email');
	
	cep.style.border = basic;
	logra.style.border = basic;
	numero.style.border = basic;
	bairro.style.border = basic;
	comp.style.border = basic;
	cidade.style.border = basic;
	estado.style.border = basic;
	opcao.style.border = basic;
	email.style.border = basic;
	
	if(!(!!cep.value) || cep.value.length < 9){
		cep.focus();
		styleRed('cep');
		mostrarMsgObrigatorio("Cep");
		return;	
		
	}if(!(!!logra.value) || $.trim(logra.value)==""){
		logra.focus();
		mostrarMsgObrigatorio("Logradouro");
		styleRed('logradouro');
		return;
		
	}if(!(!!numero.value)){
		numero.focus();
		mostrarMsgObrigatorio("Número");
		styleRed('numero');
		return;
		
	}if(!(!!bairro.value)){
		bairro.focus();
		mostrarMsgObrigatorio("Bairro");
		styleRed('bairro');
		return;
		
	}if(!(!!cidade.value)){
		cidade.focus();
		mostrarMsgObrigatorio("Cidade");
		styleRed('cidade');
		return;
		
	}if(!(!!estado.value)){
		estado.focus();
		document.getElementById("PopUp:msg").innerHTML = "O campo Estado não foi selecionado.";
		javascript:Richfaces.showModalPanel('PopUp:message');
		styleRed('estado');
		return;
	
	}if(opcao.value == '0'){
		opcao.focus();
		document.getElementById("PopUp:msg").innerHTML = "Selecione uma opção valida.";
		javascript:Richfaces.showModalPanel('PopUp:message');
		styleRed('opcao');
		return;
	
	}if(opcao.value == 'S' && !(!!email.value)){
		email.focus();
		document.getElementById("PopUp:msg").innerHTML = "O campo E-mail não foi preenchido.";
		javascript:Richfaces.showModalPanel('PopUp:message');
		styleRed('email');
		return;
		
	}if(opcao.value == 'S' || opcao.value == 'N' && !!email.value){
		if(!validaEmail(email.value)){
			email.focus();
			styleRed('email');
			return;
		}
		javascript:Richfaces.showModalPanel('confirmar');
		
	}if(opcao.value == 2 && !(!!email.value)){
		javascript:Richfaces.showModalPanel('nao-confirmar');
	
	}
}
	
function mostrarMsgObrigatorio(campo){
	document.getElementById('PopUp:msg').innerHTML = "O campo " + campo + " não foi preenchido ou foi preenchido incorretamente.";
	javascript:Richfaces.showModalPanel('PopUp:message');
}

function styleRed(campo){
	document.getElementById('form:'+campo).style.Class('pv-campo-erro');
}

function confirmarEmail(){
	var email = document.getElementById('form:email').value;
	document.getElementById('form:txt-email').innerHTML = email;
	javascript:Richfaces.showModalPanel('confirmar-email');
}

function validaEmail(email){
	if(email.lastIndexOf("@") < 1 || email.substring(email.lastIndexOf("@"), email.length).indexOf(".") < 2 || email.substring(email.lastIndexOf("."), email.length).length < 3){
		document.getElementById("PopUp:msg").innerHTML = "E-mail informado é inválido.";
		javascript:Richfaces.showModalPanel('PopUp:message');
		return false;
	}
	
	return true;
}

function recebimentoFatura(){
	var opcao = document.getElementById('form:opcao');
	var email = document.getElementById('form:email');
	
	opcao.style.border = basic;
	email.style.border = basic;
	
	if(opcao.value == '0'){
		opcao.focus();
		document.getElementById("PopUp:msg").innerHTML = "Selecione uma opção valida.";
		javascript:Richfaces.showModalPanel('PopUp:message');
		styleRed('opcao');
		return;
	
	}if(opcao.value == 'S' && !(!!email.value)){
		email.focus();
		document.getElementById("PopUp:msg").innerHTML = "O campo E-mail não foi preenchido.";
		javascript:Richfaces.showModalPanel('PopUp:message');
		styleRed('email');
		return;
		
	}if(opcao.value == 'S' || opcao.value == 'N' && !!email.value){
		if(!validaEmail(email.value)){
			email.focus();
			styleRed('email');
			return;
		}
		javascript:Richfaces.showModalPanel('confirmar');
		
	}if(opcao.value == 2 && !(!!email.value)){
		javascript:Richfaces.showModalPanel('nao-confirmar');
	
	}
}

function validarData(){
	var di = Richfaces.getComponent('calendar', document.getElementById('form:dInicial')).getSelectedDateString('dd/MM/yyyy');
	var df = Richfaces.getComponent('calendar', document.getElementById('form:dFinal')).getSelectedDateString('dd/MM/yyyy');
	
	
	if(!(!!di) || !(!!df))return;
	
	if(df < di){
		
		Richfaces.getComponent('calendar', document.getElementById('form:dFinal')).resetSelectedDate();
		document.getElementById("PopUp:msg").innerHTML = "A Data Final não pode ser menor que a Data Inicial.";
		javascript:Richfaces.showModalPanel('PopUp:message');
		
	}
}

function mascara(o,f){
	v_obj=o;
	v_fun=f;
	setTimeout("execmascara()",1);
	}

function execmascara(){
	v_obj.value=v_fun(v_obj.value);
	}

function moeda(v){
	if(v.length<3){
		var str = "" + v
		var pad = "000"
		v = pad.substring(0, pad.length - str.length) + str
	}else{
		v = v.replace(/^0/, '');
	}
	
	v=v.replace(/\D/g,"");
	v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2");
	
	z = v.split(',');
	nStr = z[0];
	nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    
    while (rgx.test(x1)) {
         x1 = x1.replace(rgx, '$1' + '.' + '$2'); 
     }
    
     return x1 + x2 +","+z[1];
}
