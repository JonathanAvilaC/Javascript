// Esto lo hago pa divertirme ♪

console.log("Modo de juego")
console.log("Este es un juego en base a probabilidades")
console.log("Robocito y tú tienen 20 de vida")
console.log("Cada lanzamiento varía entre 0 y 10, que se irá restando a la vida del contrincante")
console.log("Ganas si logras destruirlo antes que él a ti. Buena suerte!")
console.log("")


let cond = window.confirm("Debes abrir la consola con [F12] para ver las instrucciones y jugar. Si no las ves, presiona cancelar.");

if (cond) {
    alert("Se recomienda abrir la consola lo suficiente para una correcta visualización.");
    let name = prompt("Ingresa tu nombre");

    while (name == "" || name == null) {
        alert("Debes ingresar un nombre");
        name = prompt("Ingresa tu nombre");
    }

    let player1 = 20
    let player2 = 20
    let p1;
    let playerRandom1;
    let playerRandom2;
    let character = "=";
    let game = true;

    let m1 = "Excelente tirada!"
    let m2 = "Que buena tirada"
    let m3 = "Eso estuvo decente"
    let m4 = "Hoy la suerte no te sonríe"
    let m5 = "Definitivamente la suerte no te sonríe"


    while (game) {
        console.clear();
        if (p1 != undefined) {
            console.log("Comments:")
            if (!p1) {
                console.log(name + " ha pasado su turno")
            } else {
                console.log(name + " ha sacado " + playerRandom1)
                switch (true) {
                    case (playerRandom1 > 9):
                        console.log(m1);
                        break;
                    case (playerRandom1 > 4):
                        console.log(m2);
                        break;
                    case (playerRandom1 > 2):
                        console.log(m3);
                        break;
                    case (playerRandom1 > 0):
                        console.log(m4);
                        break;
                    default:
                        console.log(m5);
                        break;
                }
                
            }
            console.log("")
                console.log("Robocito ha sacado " + playerRandom2)
            switch (true) {
                case (playerRandom2 > 9):
                    console.log(m1);
                    break;
                case (playerRandom2 > 4):
                    console.log(m2);
                    break;
                case (playerRandom2 > 2):
                    console.log(m3);
                    break;
                case (playerRandom2 > 0):
                    console.log(m4);
                    break;
                default:
                    console.log(m5);
                    break;
            }

            console.log("_".repeat(60))
            console.log(`${name} (${player1}) ` + character.repeat(player1))
            console.log("_".repeat(60))

            console.log("_".repeat(60))
            console.log(`Robocito (${player2}) ` + character.repeat(player2))
            console.log("_".repeat(60))
        }


        console.log("        __\\_/__")
        console.log("        | @ @ |")
        console.log("        | +++ | ")
        console.log("  0=======   =======0 ")
        console.log("          || ")
        console.log("          || ")
        console.log("         //\\\\")
        console.log("        //  \\\\")
        console.log("       //    \\\\")
        console.log("     <==      ==>")

        p1 = window.confirm("Es tu turno ¿Deseas lanzar? Si presionas cancelar tu turno se saltará.")

        playerRandom1 = Math.floor(Math.random() * 10);
        playerRandom2 = Math.floor(Math.random() * 10);

        if (p1) {
            player2 = player2 - playerRandom1;
        }

        player1 = player1 - playerRandom2;

        if (player2 <= 0 && player1 > 0) {
            player2 = 0;
            game = false;
            console.clear();
            console.log("_".repeat(60))
            console.log(`${name} (${player1 < 0 ? 0 : player1}) ` + character.repeat(player1 < 0 ? 0 : player1))
            console.log("_".repeat(60))
            console.log("_".repeat(60))
            console.log(`Robocito (${player2}) ` + character.repeat(player2))
            console.log("_".repeat(60))

            console.log("        ~~    ~~")
            console.log("        __\\_/__")
            console.log("        | X X |")
            console.log("        | ___ | ")
            console.log("  0=======   =======0 ")
            console.log("          || ")
            console.log("          || ")
            console.log("         //\\\\")
            console.log("        //  \\\\")
            console.log("       //    \\\\")
            console.log("     <==      ==>")
            alert("Derrotaste a Robocito ¡Felicitaciones!")
        } else if (player1 <= 0 && player2 > 0) {
            player1 = 0;
            game = false;
            console.clear();
            console.log("_".repeat(60))
            console.log(`${name} (${player1}) ` + character.repeat(player1))
            console.log("_".repeat(60))
            console.log("_".repeat(60))
            console.log(`Robocito (${player2 < 0 ? 0 : player2}) ` + character.repeat(player2 < 0 ? 0 : player2))
            console.log("_".repeat(60))

            console.log("        ||")
            console.log("        ||")
            console.log("   ====    ====")
            console.log("        ||")
            console.log("        || ")
            console.log("        || ")
            console.log("   =============")
            console.log("   =============")

            alert("Que lastima, no pudiste vencer a Robocito.")

        } else if (player1 <= 0 && player2 <= 0) {
            player1 = 0;
            player2 = 0;
            game = false;
            console.clear();
            console.log("_".repeat(60))
            console.log(`${name} (${player1}) ` + character.repeat(player1))
            console.log("_".repeat(60))
            console.log("_".repeat(60))
            console.log(`Robocito (${player2}) ` + character.repeat(player2))
            console.log("_".repeat(60))


            console.log("           ~~    ~~")
            console.log("           __\\_/__")
            console.log("           | X X |")
            console.log("           | ___ |                        ||")
            console.log("     0=======   =======0                  ||")
            console.log("              ||                     ====    ====")
            console.log("              ||                          ||")
            console.log("             //\\\\                         ||")
            console.log("            //  \\\\                        || ")
            console.log("           //    \\\\                  =============")
            console.log("         <==      ==>                =============")

            alert("¡Es un empate! Ambos se aniquilaron.")

        }

    }

    if (!game) {
        let tryagain = window.confirm("Desdes volver a jugar")

        if (tryagain) {
            location.reload();
        } else {
            alert("Si cambias de opinión solo debes refrescar la página.")
        }
    }


} else {
    alert("La página se refrescará al presionar OK.");
    location.reload();
}
