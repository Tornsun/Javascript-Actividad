let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

corredores[corredores.indexOf("Roberto")] = "Jorge";

corredores[corredores.indexOf("Jorge")] = "Ramiro";

corredores.splice(corredores.indexOf("Roberto"), 1);

const indexAndrea = corredores.indexOf("Andrea");
corredores.splice(indexAndrea, 1);
corredores.splice(indexAndrea, 0, "Andrea");


corredores[4] = "Jose";

console.log(corredores);