var variables = [80,50,30,10,90,95]
var variable_cir = document.getElementsByClassName('variable');
var variable_num = document.getElementsByClassName('variable_num');
for (var i = 0; i < variable_cir.length; i++) {
	variable_cir[i].style.strokeDashoffset = (440 - (440 * variables[i]) / 100);
	variable_num[i].innerHTML = variables[i]+"%"
}