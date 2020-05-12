function atualizaverde(id){
	
	alert(id);
}

function removediv(id){
	var idtratado = id.trim();
	
	var div = document.getElementById(idtratado);
	while( div.firstChild ) div.removeChild( div.firstChild);
	var tbl = document.getElementById("tbl");
	
	div.parentNode.removeChild(div);
}


function lightdiv(hash){
	var gr = document.getElementById("dvgr" + hash);
	var yl = document.getElementById("dvyl" + hash);
	var rd = document.getElementById("dvrd" + hash);
	
	gr.classList.add("pg_light");
	yl.classList.remove("pg_medium");
	rd.classList.remove("pg_hard");
}

function mediumdiv(hash){
	var gr = document.getElementById("dvgr" + hash);
	var yl = document.getElementById("dvyl" + hash);
	var rd = document.getElementById("dvrd" + hash);
	
	gr.classList.remove("pg_light");
	yl.classList.add("pg_medium");
	rd.classList.remove("pg_hard");
}

function harddiv(hash){
	var gr = document.getElementById("dvgr" + hash);
	var yl = document.getElementById("dvyl" + hash);
	var rd = document.getElementById("dvrd" + hash);
	
	gr.classList.remove("pg_light");
	yl.classList.remove("pg_medium");
	rd.classList.add("pg_hard");
}