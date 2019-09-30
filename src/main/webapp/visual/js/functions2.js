$.noConflict();
var residencial = "";
var comercial = "";
var celular = "";
var modalTexto = '#PopUp\\:msg';

jQuery(document).ready(function($) {
	
	$("table[id*='tabelaConvidados']").dataTable({
		"sPaginationType": "full_numbers",
		"aLengthMenu": [5],
		"iDisplayLength": 5,
		"oLanguage": {
			"sInfo": "_START_ a _END_ de _TOTAL_ linhas",
			"sInfoEmpty": "0 a 0 de 0 linhas",
			"sEmptyTable": "Nenhum resultado encontrado",
			"sZeroRecords": "Nenhum resultado encontrado",
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
			"sLoadingRecords": "Carregando...",
			"sProcessing": "Processando...",
			"oPaginate": {
				"sPrevious": "",
				"sNext": "",
				"sFirst": "",
				"sLast": ""
			}
		}
	});
	
	$("div[id*='formulario-consulta:tabelaConvidados_length']").hide();
	$("div[id*='formulario-consulta:tabelaConvidados_filter']").hide();	
	
	$(".mask-monetario12").mask("9.999.999.999,99");
	$(".mask-monetario17").mask('99.999.999.999,99', {reverse: true});
	$(".mask-cep").mask("99999-999");
	$(".mask-cpf").mask("999.999.999-99");
	$(".mask-data").mask("99/99/9999");
	$(".mask-data2").mask("99/99/9999");
	$('.datepicker').datePicker({startDate:'01/01/1900'});

	$(".mask-residencial").mask("(99) 99999-9999");
	$(".mask-residencial").focusout(function () {
		$(".mask-residencial").val(MascaraResidencial($(".mask-residencial").val()));
		$(".mask-residencial").val(residencial);
	});

	$(".mask-comercial").mask("(99) 99999-9999");
	$(".mask-comercial").focusout(function () {
		$(".mask-comercial").val(MascaraComercial($(".mask-comercial").val()));
		$(".mask-comercial").val(comercial);
	});

	$(".mask-celular").mask("(99) 99999-9999");
	$(".mask-celular").focusout(function () {
		$(".mask-celular").val(MascaraCelular($(".mask-celular").val()));
		$(".mask-celular").val(celular);
	});
	
	$(".mask-residencial").bind("keydown keyup keypress", function(event){
		var v = $(".mask-residencial").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(11, v)){
				var start = retornaCursorMask($(".mask-residencial").get(0));
				$(".mask-residencial").val(v);
				recolocaCursorMask(start, $(".mask-residencial").get(0));
				event.preventDefault();
			}
		}
	});
	
	$(".mask-comercial").bind("keydown keyup keypress", function(event){
		var v = $(".mask-comercial").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(11, v)){
				var start = retornaCursorMask($(".mask-comercial").get(0));
				$(".mask-comercial").val(v);
				recolocaCursorMask(start, $(".mask-comercial").get(0));
				event.preventDefault();
			}
		}
	});
	
	$(".mask-celular").bind("keydown keyup keypress", function(event){
		var v = $(".mask-celular").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(11, v)){
				var start = retornaCursorMask($(".mask-celular").get(0));
				$(".mask-celular").val(v);
				recolocaCursorMask(start, $(".mask-celular").get(0));
				event.preventDefault();
			}
		}
	});
	
	$(".mask-cep").bind("keydown keyup keypress", function(event){
		var v = $(".mask-cep").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(8, v)){
				var start = retornaCursorMask($(".mask-cep").get(0));
				$(".mask-cep").val(v);
				recolocaCursorMask(start, $(".mask-cep").get(0));
				event.preventDefault();
			}
		}
	});
	
	$(".mask-cpf").bind("keydown", function(event){
		var v = $(".mask-cpf").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(11, v)){
				var start = retornaCursorMask($(".mask-cpf").get(0));
				$(".mask-cpf").val(v);
				recolocaCursorMask(start, $(".mask-cpf").get(0));
				event.preventDefault();
			}
		}
	});
	
	$(".mask-data").bind("keydown", function(event){
		var v = $(".mask-data").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(8, v)){
				var start = retornaCursorMask($(".mask-data").get(0));
				$(".mask-data").val(v);
				recolocaCursorMask(start, $(".mask-data").get(0));
				event.preventDefault();
			}
		}
	});
	
	$(".mask-data2").bind("keydown", function(event){
		var v = $(".mask-data2").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(8, v)){
				var start = retornaCursorMask($(".mask-data2").get(0));
				$(".mask-data2").val(v);
				recolocaCursorMask(start, $(".mask-data2").get(0));
				event.preventDefault();
			}
		}
	});
	

	$(".mask-data2").bind("keydown", function(event){
		var v = $(".mask-data2").val();
		var charCode = event.which;
		if((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106)){
			if(lengthMask(8, v)){
				var start = retornaCursorMask($(".mask-data2").get(0));
				$(".mask-data2").val(v);
				recolocaCursorMask(start, $(".mask-data2").get(0));
				event.preventDefault();
			}
		}
	});
	
/*
 * ############################# INICIO - dados cadastrais
 * ###########################
 */		
	$('#form-dadosCadastrais').bind('copy paste', function (e) {
		e.preventDefault();
	});
	
	$('#form-dadosCadastrais').ready(function() {
		if($("#form-dadosCadastrais\\:aceita-sms").val() == 1){
			$("#form-dadosCadastrais\\:chk-sms").attr("checked", true);
		}
		if($("#form-dadosCadastrais\\:aceita-email").val() == 1){
			$("#form-dadosCadastrais\\:chk-email").attr("checked", true);
		}
	});
	
	$("#form-dadosCadastrais\\:btn-pesquisar").click(function(){
		return validarPesquisaCEP();
	});
	
	$("#form-dadosCadastrais\\:btn-confirmar").click(function(){
		return validarFormDadosCadastrais();
	});
	
	autoConfirm('form-dadosCadastrais');
	disableSubmitEnter('form-dadosCadastrais');
/*
 * ############################# FIM - dados cadastrais
 * ###########################
 */

/*
 * ############################# INICIO - recebimentoFatura
 * ###########################
 */	
	$('#form-recebimentoFatura').bind('copy paste', function (e) {
		e.preventDefault();
	});

	$("#form-recebimentoFatura\\:btn-confirmar").click(function(){
		return validarFormRecebimentoFatura();
	});
	autoConfirm('form-recebimentoFatura');
	disableSubmitEnter('form-recebimentoFatura');
/*
 * ############################# FIM - recebimentoFatura
 * ###########################
 */	

/*
 * ############################# INICIO - cartaoAdicional
 * ###########################
 */	
	
	$('#form-cartaoAdicional').bind('copy paste', function (e) {
		e.preventDefault();
	});
	$("#form-cartaoAdicional\\:btn-confirmar").click(function(){
		return validarFormCartaoAdicional();
	});
	
	autoConfirm('form-cartaoAdicional');
	disableSubmitEnter('form-cartaoAdicional');
/*
 * ############################# FIM - cartaoAdicional
 * ###########################
 */		

/*
 * ############################# FIM - alterarVencimento
 * ###########################
 */		
	if($('#form-alterar-vencimento\\:callFunc') 
			&& $('#form-alterar-vencimento\\:callFunc').val() == 1){
		$('#form-alterar-vencimento\\:callFunc').val(0);
		$('#form-alterar-vencimento\\:btn-confirmar').click();
	}
/*
 * ############################# FIM - alterarVencimento
 * ###########################
 */	
	
/*
 * ############################# FIM - solicitarSenha
 * ###########################
 */		
	if($('#form-solicitar-senha\\:callFunc') 
			&& $('#form-solicitar-senha\\:callFunc').val() == 1){
		$('#form-solicitar-senha\\:callFunc').val(0);
		javascript:Richfaces.showModalPanel('modal-senha');
		$('#form-senha-modal\\:modal-confirmar-envio').click();
	}
/*
 * ############################# FIM - solicitarSenha
 * ###########################
 */
	
/*
 * ############################# INICIO - bloquearCartao
 * ###########################
 */		
	
	$("#form-bloqueioCartao\\:btn-modal-confirmar").click(function(){
		if(validarFormBloqueioCartao()){
			javascript:Richfaces.showModalPanel('modal-confirmar');
		}
	});
	
	$("#form-bloqueioCartao\\:motivo").change(function(){
		var motivo = $("#form-bloqueioCartao\\:motivo").val();
		if(motivo == "2" || motivo == "4"){
			$(".regioes").show();
		}else{
			$(".regioes").hide();
		}
	});
	
/*
 * ############################# FIM - bloquearCartao
 * ###########################
 */

	
/* ############################# FIM - desbloqueio ########################### */		

	$("#form-modal-titular\\:modal-confirmar-titular").click(function(){
		return setTimeout( 
				true
			, 5000);
	});
	
	
	$("#form-modal\\:modal-confirmar").click(function(){
		if(validarFormDesbloqueiarCartao()){
			return setTimeout( 
					true
				, 5000);
		}
		else return false;
	});
	
	
/* ############################# FIM - desbloqueio ########################### */	
	
/*
 * ############################# INICIO - cadastrarViagem
 * ###########################
 */	
	$("#form-cadastrarViagem\\:btn-registrar").click(function(){
		if(validarFormCadastrarViagem()){
			javascript:Richfaces.showModalPanel('modal-confirmar');
		}
		return false;
	});
	
/*
 * ############################# FIM - cadastrarViagem
 * ###########################
 */	
	
/* ############################# INICIO - Function ########################### */	
	
	
	function disableSubmitEnter(idForm){
		var form = $("#"+idForm);
		if(form.length)
			form.bind("keypress", function (e) {
			    if (e.keyCode && e.keyCode == 13) {
			        return false;
			    }else
			    	if (e.which && e.which == 13) {
				        return false;
				    }
			});
	}
	
	function autoConfirm(nameForm){
		if($('#'+nameForm+'\\:callFunc') 
				&& $('#'+nameForm+'\\:callFunc').val() == 1){
			$('#'+nameForm+'\\:callFunc').val(0);
			$('#'+nameForm+'\\:btn-sim').click();
		}
	}
	
	function validarPesquisaCEP(){
		var form = '#form-dadosCadastrais\\:';
		var cep = $(form+'cep');
		if(!(!!cep.val())){
			addClass(cep);
			msgCampo('Cep');
			return false;
		}
		return true;
	}
	
	function validarFormDadosCadastrais(){
		var form = '#form-dadosCadastrais\\:';
		var cep = $(form+'cep');
		var logra = $(form+'logradouro');
		var num = $(form+'numero');
		var bairro = $(form+'bairro');
		var cidade = $(form+'cidade');
		var estado = $(form+'estado');
		var opcao = $(form+'opcao');
		var email = $(form+'email');
		var sms = $(form+'chk-sms');
		var chkEmail = $(form+'chk-email');
		var celular = $(form+"tel-cel");
		var telRes = $(form+"tel-res");
		var telCom = $(form+"tel-com");
		
		removeClass(cep);
		removeClass(logra);
		removeClass(num);
		removeClass(bairro);
		removeClass(cidade);
		removeClass(estado);
		opcao.css('border-color','#C5C8CA');
		removeClass(email);
		removeClass(celular);
		removeClass(telRes);
		removeClass(telCom);
		
		if(!(!!cep.val())){
			addClass(cep);
			msgCampo('Cep');
			return false;
		}else if(cep.val()=='00000-000'){
			addClass(cep);
			msgCampo('Cep');
			return false;
		}
		if(!(!!$.trim(logra.val()))){
			addClass(logra);
			msgCampo('Logradouro');
			return false;
		}
		if(!(!!num.val())){
			addClass(num);
			msgCampo('Número');
			return false;
		}else if (num.val()<=0){
			addClass(num);
			msgCampo('Número');
			return false;
		}
		if(!(!!$.trim(bairro.val()))){
			addClass(bairro);
			msgCampo('Bairro');
			return false;
		}
		if(!(!!$.trim(cidade.val()))){
			addClass(cidade);
			msgCampo('Cidade');
			return false;
		}
		if(estado.val() == 0){
			addClass(estado);
			msgCampo('Estado');
			return false;
		}
		if(email.val() != ""){
			if(!validaEmail($.trim(email.val()))){
				addClass(email);
				msgCampo('E-mail');
				return false;
			}
		}
		if(opcao.val() == 'E'){
			if(!validaEmail(email.val())){
				addClass(email);
				msgCampo('E-mail');
				return false;
			}
		}
		if(sms.is(":checked")){
			if(celular.val() == ""){
				addClass(celular);
				msgCampo('Celular');
				return false;
			}
		}
		if(chkEmail.is(":checked")){
			if($.trim(email.val()) == ""){
				addClass(email);
				msgCampo('E-mail');
				return false;
			}
		}
		if(!!telRes.val()){
			if(!isDddValido(telRes.val().replace("(", "").substring(0, 2))){
				addClass(telRes);
				msgCampo('DDD Residencial');
				return false;
			}
		}
		if(telRes.val().length < 15){
			addClass(telRes);
			msgCampo('DDD Residencial');
			return false;
		}
		
		if(!!telCom.val()){
			if(!isDddValido(telCom.val().replace("(", "").substring(0, 2))){
				addClass(telCom);
				msgCampo('DDD Comercial');
				return false;
			}
		}
		if(telCom.val().length < 15){
			addClass(telCom);
			msgCampo('DDD Comercial');
			return false;
		}
		if(!!celular.val()){
			if(!isDddValido(celular.val().replace("(", "").substring(0, 2))){
				addClass(celular);
				msgCampo('DDD Celular');
				return false;
			}
		}
		if(celular.val().length < 15){
			addClass(celular);
			msgCampo('DDD Celular');
			return false;
		}
		
		javascript:Richfaces.showModalPanel('modal-confirmar');
		return false;
	}
	
	function validarFormRecebimentoFatura(){
		var form = '#form-recebimentoFatura\\:';
		var opcao = $(form+'opcao');
		var email = $(form+'email');
		
		opcao.css('border-color','#C5C8CA');
		removeClass(email);
		
		if(opcao.val() == '0'){
			opcao.css('border-color','red');
			msgCampo('Fatura por e-mail');
			return false;
		}
		if(opcao.val() == 'E' && !(!!email.val())){
			addClass(email);
			msgCampo('E-mail');
			return false;
		}
		
		if(!!email.val()){
			if(!validaEmail($.trim(email.val()))){
				addClass(email);
				msgCampo('E-mail');
				return false;
			}
		}
		if(opcao.val() == 'N')
			javascript:Richfaces.showModalPanel('modal-exclusao-recebimento');
		else
			javascript:Richfaces.showModalPanel('modal-confirmar');
		return false;
	}
	
	function validarFormDesbloqueiarCartao(){
		var form = "#form-modal\\:";
		var cpfTit = $(form+'cpf-titular').val();
		var cpfDes = $(form+'modal-cpf').val().replace('.','').replace('.','').replace('-','');
		
		if(cpfDes == null || cpfDes.length < 11){
			$('#PopUp\\:msg').text("CPF inválido, por favor, informar novamente.");
			javascript:Richfaces.hideModalPanel('modal-carregando');
			javascript:Richfaces.showModalPanel('modal-desbloquear');
			javascript:Richfaces.showModalPanel('PopUp:message');
			return false;
		}
		
		if(cpfTit == cpfDes){
			$('#PopUp\\:msg').text("CPF inválido, por favor, informar novamente.");
			javascript:Richfaces.hideModalPanel('modal-carregando');
			javascript:Richfaces.showModalPanel('modal-desbloquear');
			javascript:Richfaces.showModalPanel('PopUp:message');
			return false;
		}
		return true;
	}
	
	function validarFormCartaoAdicional(){
		var form = '#form-cartaoAdicional\\:';
		var cpfAdicional = $(form+'cpf-adicional');
		var nomeCompleto = $(form+'nome-completo');
		var nomePlastico = $(form+'nome-plastico');
		var dataNasc = $(form+'data-nasc');
		var sexo = $(form+'sexo');
		var parentesco = $(form+'parentesco');
		var estadoCivil = $(form+'estado-civil');
		var telefone = $(form+'telefone');
		var nomeMae = $(form+'nome-mae');
		
		removeClass(cpfAdicional);
		removeClass(nomeCompleto);
		removeClass(nomePlastico);
		removeClass(dataNasc);
		removeClass(sexo);
		removeClass(parentesco);
		removeClass(estadoCivil);
		removeClass(telefone);
		removeClass(nomeMae);
		
		if(!(!!cpfAdicional.val())){
			addClass(cpfAdicional);
			msgCampo('CPF do adicional');
			return false;
		}else{
			var cpf = cpfAdicional.val().replace('.','').replace('.','').replace('-','');
			if(!valida_cpf(cpf)){
				addClass(cpfAdicional);
				msgCampo('CPF do adicional');
				return false;
			}
		}
		
		if(!(!!nomeCompleto.val())){
			addClass(nomeCompleto);
			msgCampo('Nome completo');
			return false;
		}else{
			var nome = $.trim(nomeCompleto.val());
			if(nome.length < 2){
				addClass(nomeCompleto);
				msgCampo('Nome completo');
				return false;
			}else{
				var sobreNome = true;
				$.each( nome, function( key, value ) {
					 if(key > 0 && $.trim(value) != ""){
						 sobreNome = false;
					 }
				});
				if(sobreNome){
					addClass(nomeCompleto);
					msgCampo('Nome completo');
					return false;
				}
			}
		}
		if(!(!!nomePlastico.val())){
			addClass(nomePlastico);
			msgCampo('Nome no plástico');
			return false;
		}else{
			var nome2 = $.trim(nomePlastico.val());
			if(nome2.length < 2){
				addClass(nomePlastico);
				msgCampo('Nome no plástico');
				return false;
			}
		}
		if(!(!!dataNasc.val())){
			addClass(dataNasc);
			msgCampo('Data de nascimento');
			return false;
		}else{
			if(!isDataNascValida(dataNasc.val())){
				addClass(dataNasc);
				msgCampo('Data de nascimento');
				return false;
			}
		}
		if(!(!!estadoCivil.val())){
			addClass(estadoCivil);
			msgCampo('Estado civil');
			return false;
		}
		if(sexo.val() == "0"){
			addClass(sexo);
			msgCampo('Sexo');
			return false;
		}
		if(parentesco.val() == ""){
			addClass(parentesco);
			msgCampo('Parentesco');
			return false;
		}
		if(!(!!nomeMae.val())){
			addClass(nomeMae);
			msgCampo('Nome da Mãe');
			return false;
		}else{
			var nome3 = $.trim(nomeMae.val());
			if(nome3.length < 2){
				addClass(nomeMae);
				msgCampo('Nome da Mãe');
				return false;
			}
		}
		if(!(!!telefone.val())){
			addClass(telefone);
			msgCampo('Telefone Adicional');
			return false;
		}else{
			if(!isDddValido(telefone.val().replace("(", "").substring(0, 2))){
				addClass(telefone);
				msgCampo('DDD Telefone Adicional');
				return false;
			}
		}
		
		javascript:Richfaces.showModalPanel('modal-confirmar');
		return false;
	}
	
	function validarFormBloqueioCartao(){
		var form = '#form-bloqueioCartao\\:';
		var motivo = $(form+'motivo');
		var produto = $(form+'produto');
		var cont = 0;
		var prod = "";
		
		removeClass(motivo);
		
		if(!(!!motivo.val())){
			addClass(motivo);
			msgCampo('Motivo');
			return false;
		}
		if(motivo.val() == "2" || motivo.val() == "4"){
			prod = (produto == 1) ? "visa" : "master";
			var regiao = $(form+'regiao-'+prod);
			
			for(var i=0; i < 6; i++){
				regiao = $(regiao+'\\:'+i);
				if(regiao.is(":checked") == true){
				cont++;
				}
			}
			if(cont == 0){
				msgCampo('Região');
				return false;
			}
		}
		return true;
	}
	
	function validarFormCadastrarViagem(){
		var form = '#form-cadastrarViagem\\:';
		var di = $(form+"data-inicial");
		var df = $(form+"data-final");
		var r1 = $(form+'regiao\\:0').is(':checked');
		var r2 = $(form+'regiao\\:1').is(':checked');
		var r3 = $(form+'regiao\\:2').is(':checked');
		var r4 = $(form+'regiao\\:3').is(':checked');
		var r5 = $(form+'regiao\\:4').is(':checked');
		var r6 = $(form+'regiao\\:5').is(':checked');
		var r7 = $(form+'regiao\\:6').is(':checked');
		var cont = 0;
		var cartaoSelecionado = $('.chk-card:checked').length > 0;
		var regioes = new Array(r1, r2, r3, r4, r5, r6, r7);
		
		removeClass(di);
		removeClass(df);
				
		if(!(!!di.val())){
			addClass(di);
			msgCampo('Data Inicial');
			return false;
		}
		if(!validarData(di.val().substring(0,2), di.val().substring(3,5), di.val().substring(6,10))){
			addClass(di);
			msgCampo('Data Inicial');
			return false;
		}
		
		if(!verificaDataMenor(di.val())){
			addClass(di);
			$('#PopUp\\:msg').text("A Data Inicial não pode ser menor que a Data Atual.");
			javascript:Richfaces.showModalPanel('PopUp:message');
			return false;
		}
		
		if(!(!!df.val())){
			addClass(df);
			msgCampo('Data Final');
			return false;
		}
		if(!validarData(df.val().substring(0,2), df.val().substring(3,5), df.val().substring(6,10))){
			addClass(df);
			msgCampo('Data Final');
			return false;
		}
		if(!verificaDataMaior(di.val(),df.val() )){
			addClass(df);
			$('#PopUp\\:msg').text("A Data Final não pode ser menor que a Data Inicial.");
			javascript:Richfaces.showModalPanel('PopUp:message');
			return false;
		}
		if(!cartaoSelecionado){
			$('#PopUp\\:msg').text("O campo Cliente não foi selecionado.");
			javascript:Richfaces.showModalPanel('PopUp:message');
			return false;
		}
		if(regioes.indexOf(true) == -1){
			$('#PopUp\\:msg').text("O campo Local não foi selecionado.");
			javascript:Richfaces.showModalPanel('PopUp:message');
			return false;
		}

		return true;
	}
	
	function valida_cpf(cpf){
	    var numeros, digitos, soma, i, resultado, digitos_iguais;
	    digitos_iguais = 1;
	    if (cpf.length < 11)
	          return false;
	    for (i = 0; i < cpf.length - 1; i++)
	          if (cpf.charAt(i) != cpf.charAt(i + 1))
	                {
	                digitos_iguais = 0;
	                break;
	                }
	    if (!digitos_iguais)
	          {
	          numeros = cpf.substring(0,9);
	          digitos = cpf.substring(9);
	          soma = 0;
	          for (i = 10; i > 1; i--)
	                soma += numeros.charAt(10 - i) * i;
	          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	          if (resultado != digitos.charAt(0))
	                return false;
	          numeros = cpf.substring(0,10);
	          soma = 0;
	          for (i = 11; i > 1; i--)
	                soma += numeros.charAt(11 - i) * i;
	          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	          if (resultado != digitos.charAt(1))
	                return false;
	          return true;
	          }
	    else
	          return false;
	}	
});

/* ############################# FIM - Function ########################### */	

function validarData(dia, mes, ano){
    diafim = 0;
    if ((!isNumero(dia)) || (!isNumero(mes)) || (!isNumero(ano))) 
        return false;
    dia = (((dia.length > 1) && (dia[0] == "0")) ? dia[1] : dia) * 1;
    mes = (((mes.length > 1) && (mes[0] == "0")) ? mes[1] : mes) * 1;
    ano = (ano) * 1;
    
    if ((ano < 1900) || (mes < 1) || (mes > 12))
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

function validaDatas(campo1, campo2){
    var dataIni = campo1.val().split("/");
    var dataFim = campo2.val().split("/");
    var arrayDataIni = dataIni[1] + "/" + dataIni[0] + "/" + dataIni[2];
    var arrayDataFim = dataFim[1] + "/" + dataFim[0] + "/" + dataFim[2];
    var dataIniMili = Date.parse(arrayDataIni);
    var dataFimMili = Date.parse(arrayDataFim);
    
    return (!(dataIniMili > dataFimMili));
}

function verificaDataMenor(data){
	if(!validaData(data)){	
		return false;
	}   
	var dataArray = data.split('/');
	var dataHojeMili = new Date(hoje.getFullYear(), hoje.getMonth(),hoje.getDate()).getTime();
	var dataInicMili  = new Date(dataArray[2], dataArray[1]-1, dataArray[0]).getTime();
    
	if(dataInicMili < dataHojeMili){
		return false;
	}
	return true;
}

function verificaDataMaior(dataInic, dataFin){
	if(!validaData(dataInic) || !validaData(dataFin)){	
		return false;
	}   
	var dataInicArray = dataInic.split('/');
	var dataFimArray = dataFin.split('/');
	
	var dataInicMili  = new Date(dataInicArray[2], dataInicArray[1]-1, dataInicArray[0]).getTime();
	var dataFimMili  = new Date(dataFimArray[2], dataFimArray[1]-1, dataFimArray[0]).getTime();
	
	if(dataFimMili < dataInicMili){
		return false;
	}
	return true;
}

function isDataNascValida(data){
	if(!validaData(data)){
		return false;
	}   
	var dataArray = data.split('/');
	var dataHojeMili = new Date(hoje.getFullYear(), hoje.getMonth(),hoje.getDate()).getTime();
	var dataNascMili  = new Date(dataArray[2], dataArray[1]-1, dataArray[0]).getTime();
	
	
	if(dataNascMili >= dataHojeMili){
		return false;
	}
	return true;
}



function acionarConfirmacao(form){
	javascript:Richfaces.showModalPanel(form+':modal-confirmacaoPositiva');
}

function removeClass(campo){
	campo.parent('div').removeClass('pv-campo-erro');
}

function addClass(campo){
	campo.parent('div').addClass('pv-campo-erro').focus();
}

function msgCampo(campo){
	var msg = "O campo " + campo + " não foi preenchido ou o campo não foi preenchido corretamente.";
	jQuery('#PopUp\\:msg').text(msg);
	javascript:Richfaces.showModalPanel('PopUp:message');
}

function validaEmail(email){
	if(email.indexOf("..") != -1){
		return false;
	}
	
	if (!email.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i)) {
		return false;
	}
	return true;
}

function isDddValido(ddd) {
	if(getListDDD().indexOf(ddd) != -1){
		return true;
	}else{
		return false;
	}
}

function getListDDD() {
	var lista = new Array("11", "13" ,"15", "18", "19" ,"21", "22", "31", "41", "43", "17" ,"42", "44", "45" ,"46", 
			"47", "48", "24", "27", "28", "32",	"33", "34", "35", "37", "38", "12", "14", "16", "51", "61", "62", "63",
			"64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85",
			"86", "87", "88", "89", "91", "53", "54", "55", "49", "92", "93", "94", "95", "96", "97", "98", "99");
	return lista;
}

function MascaraResidencial(obj) {

	var num = obj.replace(/[\s\(\)\_\-]/g, "");

	if (num.length == 10) {
		var ddd = num.substring(0, 2);
		var numero = num.substring(2);
		residencial = ddd + "0" + numero;
	} else if (num.length == 11) {
		residencial = num;
	} else {
		residencial = "";
	}

	jQuery(".mask-residencial").unmask();
	jQuery(".mask-residencial").mask("(99) 99999-9999");

}

function MascaraComercial(obj) {

	var num = obj.replace(/[\s\(\)\_\-]/g, "");

	if (num.length == 10) {
		var ddd = num.substring(0, 2);
		var numero = num.substring(2);
		comercial = ddd + "0" + numero;
	} else if (num.length == 11) {
		comercial = num;
	} else {
		comercial = "";
	}

	jQuery(".mask-comercial").unmask();
	jQuery(".mask-comercial").mask("(99) 99999-9999");

}

function MascaraCelular(obj) {

	var num = obj.replace(/[\s\(\)\_\-]/g, "");

	if (num.length == 10) {
		var ddd = num.substring(0, 2);
		var numero = num.substring(2);
		celular = ddd + "0" + numero;
	} else if (num.length == 11) {
		celular = num;
	} else {
		celular = "";
	}

	jQuery(".mask-celular").unmask();
	jQuery(".mask-celular").mask("(99) 99999-9999");

}

function lengthMask(maxLength, valor){
	var v = valor;
	var c = "";
	var count = 0;
	
	for(var i=0; i < v.length; i++){
		c = v.substring(i, i+1);
		if(getNumeros().indexOf(c) != -1){
			count++;
		}
	}
	if(count == maxLength){
		return true;
	}else{
		return false;
	}
}

function getNumeros(){
	var l = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
	return l;
}

function recolocaCursorMask(start, obj){
	
	if(obj != null){
		v_obj = obj;
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

function retornaCursorMask(obj){
	
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

function loadMasks() {
	jQuery(document).ready(function($) {
		$(".mask-money").maskMoney({symbol:'R$ ', showSymbol:false, thousands:'.', decimal:',', allowZero:true});  
		$(".mask-money-negative").maskMoney({symbol:'R$ ', showSymbol:false, thousands:'.', decimal:',', allowZero:true, allowNegative: true, precision:1, pad:'00'});  
		$(".mask-money-percent").maskMoney({symbol:'R$ ', showSymbol:false, thousands:'.', decimal:',', allowZero:true, precision:1, pad:'00'});		 
		$(".mask-percent").maskMoney({symbol:'R$ ', showSymbol:false, thousands:'.', decimal:',', allowZero:true, precision:1, pad:'00'});	
		$("tbody[id*='tblLancamentos']").maskMoney({symbol:"R$", showSymbol:false, thousands:".", decimal:","});
		
		 var calendarFooters = document.getElementsByClassName('rich-calendar-footer');
		 if(calendarFooters != null && calendarFooters.length > 0){
			 for(var i = 0; i < calendarFooters.length;i++){
				 document.getElementsByClassName('rich-calendar-footer')[i].style.display = 'none';
			 }
		 }
	});
}

function formataPercentual(value){
	var sinal = '';
	if (value.indexOf('-') != -1){
		sinal = '-';
	}
	
	value = value.replace(/\D/g,'');
	
	if (value.length == 0){
		return sinal + '00,0';
	
	} else if (value.length < 3) {
		var pad = "000";
		value = pad.substring(0, pad.length - value.length) + value;
	
	} else if (value.length > 3){
		value = value.substring(0, value.length - 3).replace(/^0+/, '') + value.substring(value.length - 3, value.length);
		
		if (value.length > 4) {
			value = value.substring(0, 4);
		}
	}

	var inicio = value.substring(0, value.length - 1);
	var fim = value.substring(value.length - 1, value.length);
	return sinal + inicio + ',' + fim;
}

function validaNumero(){
    if(event.keyCode< 48 || event.keyCode > 57){
     event.returnValue = false;     
    }
}

function recarregarTabela() {
	jQuery(document).ready(function($) {
		$("table[id*='tabelaConvidados']").dataTable({
			"sPaginationType": "full_numbers",
			"aLengthMenu": [5],
			"iDisplayLength": 5,
			"oLanguage": {
				"sInfo": "_START_ a _END_ de _TOTAL_ linhas",
				"sInfoEmpty": "0 a 0 de 0 linhas",
				"sEmptyTable": "Nenhum resultado encontrado",
				"sZeroRecords": "Nenhum resultado encontrado",
				"sInfoFiltered": "(filtered from _MAX_ total entries)",
				"sLoadingRecords": "Carregando...",
				"sProcessing": "Processando...",
				"oPaginate": {
					"sPrevious": "",
					"sNext": "",
					"sFirst": "",
					"sLast": ""
				}
			}
		});
	});
}

function aplicaMascaraCarteiraCorretor(inputField, selectFieldId){
	var selectedOption = jQuery("select[id*='" + selectFieldId + "']").find(":selected").val();
	
	if (selectedOption != undefined){
		if (selectedOption == 7){
			jQuery(inputField).mask('?******', {placeholder: ''});
			return;
		}
	}
	jQuery(inputField).mask('?9999999999', {placeholder: ''});
	jQuery(inputField).val().toUpperCase();
}

function limparCampo(id){
	jQuery("input[id*='" + id + "']").val('');
}
//-- Camba ZeLuis 11/02/2015 - chamado 234121
function fSleep(milliseconds) {

	var start = new Date().getTime();
	for (var i = 0; i < 10000000; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}