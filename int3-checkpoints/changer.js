document.getElementById('button').onclick = function() {
    var color = document.getElementById("color");
    document.getElementById("test").style.backgroundColor = color.value;
};