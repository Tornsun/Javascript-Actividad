function obtenerHoroscopo() {
    var fecha = prompt("Ingresa tu fecha de nacimiento en formato dd/mm");

    var partesFecha = fecha.split("/");
    var dia = parseInt(partesFecha[0]);
    var mes = parseInt(partesFecha[1]);
    var signo = "";
    var descripcion = "";

    switch (mes) {
        case 1:
            if (dia >= 20) {
                signo = "Acuario";
                descripcion = "Shiquillx de awa";
            } else {
                signo = "Capricornio";
                descripcion = "Shiquillx de añito nuevo";
            }
            break;
        case 2:
            if (dia >= 19) {
                signo = "Piscis";
                descripcion = "Shiquillx pez";
            } else {
                signo = "Acuario";
                descripcion = "Shiquillx de awa";
            }
            break;
        case 3:
            if (dia >= 21) {
                signo = "Aries";
                descripcion = "Shiquillx de fuego";
            } else {
                signo = "Piscis";
                descripcion = "Shiquillx pez";
            }
            break;
        case 4:
            if (dia >= 20) {
                signo = "Tauro";
                descripcion = "Shiquillx perezoso";
            } else {
                signo = "Aries";
                descripcion = "Shiquillx de fuego";
            }
            break;
        case 5:
            if (dia >= 21) {
                signo = "Geminis";
                descripcion = "Shiquillx doble cara";
            } else {
                signo = "Tauro";
                descripcion = "Shiquillx perezoso";
            }
            break;
        case 6:
            if (dia >= 21) {
                signo = "Cancer";
                descripcion = "Shiquillx cangrejo";
            } else {
                signo = "Geminis";
                descripcion = "Shiquillx doble cara";
            }
            break;
        case 7:
            if (dia >= 23) {
                signo = "Leo";
                descripcion = "Shiquillx lion";
            } else {
                signo = "Cancer";
                descripcion = "Shiquillx cangrejo";
            }
            break;
        case 8:
            if (dia >= 23) {
                signo = "Virgo";
                descripcion = "Shiquillx a secas";
            } else {
                signo = "Leo";
                descripcion = "Shiquillx lion";
            }
            break;
        case 9:
            if (dia >= 23) {
                signo = "Libra";
                descripcion = "Shiquillx jalowin";
            } else {
                signo = "Virgo";
                descripcion = "Shiquillx a secas";
            }
            break;
        case 10:
            if (dia >= 23) {
                signo = "Escorpio";
                descripcion = "Shiquillx malportadx";
            } else {
                signo = "Libra";
                descripcion = "Shiquillx jalowin";
            }
            break;
        case 11:
            if (dia >= 22) {
                signo = "Sagitario";
                descripcion = "Shiquillx cool";
            } else {
                signo = "Escorpio";
                descripcion = "Shiquillx malportadx";
            }
            break;
        case 12:
            if (dia >= 22) {
                signo = "Capricornio";
                descripcion = "Shiquillx de añito nuevo";
            } else {
                signo = "Sagitario";
                descripcion = "Shiquillx cool";
            }
            break;
        default:
            signo = "Fecha inválida";
            break;
    }

    console.log("Signo zodiacal: " + signo);
    console.log("Descripcion: " + descripcion);
}