function EnviarMensagem(){
	var usuario={
		nome:"",
		email:"",
		telefone:"",
		mensagem:""
	};
	
	usuario.nome=document.getElementById("nomef").value;//id correto é nomef
	document.getElementById("nomef").innerHTML=usuario.nome;
	usuario.telefone=document.getElementById("telefonef").value;
	document.getElementById("telefonef").innerHTML=usuario.telefone;
	usuario.email=document.getElementById("emailf").value;
	document.getElementById("emailf").innerHTML=usuario.email;
	usuario.mensagem=document.getElementById("mensagemf").value;
	document.getElementById("mensagemf").innerHTML=usuario.mensagem;



		usuarioE=Object.create(usuario);
		document.getElementById("nomec").innerHTML = usuario.nome;
		document.getElementById("telefonec").innerHTML = usuario.telefone;
		document.getElementById("emailc").innerHTML = usuario.email;
		document.getElementById("mensagemc").innerHTML = usuario.mensagem;


}
	
	