function obtenerEveelucion() {
    var eveelucion = prompt("Ingresa el nombre de tu piedrita de eveelucion :3");

    var piedritaEveelucionEnMinusculas = eveelucion.toLowerCase();

    var piedritaEveelucionSinEspacios = piedritaEveelucionEnMinusculas.replace(/\s/g, "");

    var eveeluciones = "";

    switch (piedritaEveelucionSinEspacios) {
        case "agua":
            eveeluciones = "Vaporeon";
            break;
        case "rayo":
            eveeluciones = "Jolteon";
            break;
        case "fuego":
            eveeluciones = "Flareon";
            break;
        case "hoja":
            eveeluciones = "Leafeon";
            break;
        case "hielo":
            eveeluciones = "Glaceon";
            break;
        default:
            eveeluciones = "No se encontró una evolución correspondiente a esa piedrita";
            break;
    }

    console.log("La evolución de Eevee utilizando la piedrita " + eveelucion + " es: " + eveeluciones);

}