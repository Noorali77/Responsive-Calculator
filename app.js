function num(a){
    var ab = document.getElementById("text1").value +=a;
}

function clearboo(){
    document.getElementById('text1').value = '';
}

function equal(){
    var ab = document.getElementById("text1")
    ab.value = eval(ab.value)
}

function remove(){
    var back = document.getElementById('text1').value;
    document.getElementById('text1').value = back.substr (0,back.length-1)
}