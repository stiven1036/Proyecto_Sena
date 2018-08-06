function valUsuarioReg() {
    var correoUsuario = document.forms["frmSesion"]["email"].value;
    var passUsuario = document.forms["frmSesion"]["pwd"].value;
    if ((correoUsuario && passUsuario) == "") {
        alert("Los campos no pueden estar vacios");
        document.frmSesion;
        return false;
    }
    else{
        if (correoUsuario == "hgomez@sena.edu.co") {
            if (passUsuario === "123456") {
                //return true;
                //window.location = "home.html";
                //document.frmSesion.open(home.html);
                window.open("home.html");
            } else {
                alert("Password no coincide");
            }
            //alert("Asociado habil. Mostrar candidatos");
            //window.location = ("candidatos.html");
            //window.open("candidatos.html");
        } else {
            alert("Correo no registrado");
        }
    }
}