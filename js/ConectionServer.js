let datos = [];
let _this= this;
const xhttp = new XMLHttpRequest()
xhttp.onreadystatechange=function(){
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var temp = JSON.parse(xhttp.responseText);
        //datos = temp;
        _this.setState({datos: temp});
    }
};
xhttp.open('GET', 'https://pruebaaaa2168.000webhostapp.com/mostrar.php',true);
xhttp.send();
//window.alert(datos);