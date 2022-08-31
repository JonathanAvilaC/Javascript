// Esto lo hago pa divertirme ♪
let imp = (msj) => console.log(msj);

imp("Modo de juego")
imp("Este es un juego en base a probabilidades")
imp("Robocito y tú tienen 20 de vida")
imp("Cada lanzamiento varía entre 0 y 10, que se irá restando a la vida del contrincante")
imp("Ganas si logras destruirlo antes que él a ti. Buena suerte!")
imp("")


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

    let caseFunct = (randomNumber) => {
        switch (true) {
            case (randomNumber > 9):
                imp(m1);
                break;
            case (randomNumber > 4):
                imp(m2);
                break;
            case (randomNumber > 2):
                imp(m3);
                break;
            case (randomNumber > 0):
                imp(m4);
                break;
            default:
                imp(m5);
                break;
        }
    }

    while (game) {
        console.clear();

        let lifeBar = (name, player1, player2) =>{
            imp("_".repeat(60))
            imp(`${name} (${player1}) ` + character.repeat(player1))
            imp("_".repeat(60))
            imp("_".repeat(60))
            imp(`Robocito (${player2}) ` + character.repeat(player2))
            imp("_".repeat(60))
        }

        if (p1 != undefined) {
            imp("Comments:")
            if (!p1) {
                imp(name + " ha pasado su turno")
            } else {
                imp(name + " ha sacado " + playerRandom1)
                caseFunct(playerRandom1);
            }
            imp("")
            imp("Robocito ha sacado " + playerRandom2)
            caseFunct(playerRandom2);
            lifeBar(name, player1, player2);
        }

        imp("        __\\_/__")
        imp("        | @ @ |")
        imp("        | +++ | ")
        imp("  0=======   =======0 ")
        imp("          || ")
        imp("          || ")
        imp("         //\\\\")
        imp("        //  \\\\")
        imp("       //    \\\\")
        imp("     <==      ==>")

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
            lifeBar(name, player1, player2);

            imp("        ~~    ~~")
            imp("        __\\_/__")
            imp("        | X X |")
            imp("        | ___ | ")
            imp("  0=======   =======0 ")
            imp("          || ")
            imp("          || ")
            imp("         //\\\\")
            imp("        //  \\\\")
            imp("       //    \\\\")
            imp("     <==      ==>")
            alert("Derrotaste a Robocito ¡Felicitaciones!")

        } else if (player1 <= 0 && player2 > 0) {
            player1 = 0;
            game = false;
            console.clear();
            lifeBar(name, player1, player2);

            imp("        ||")
            imp("        ||")
            imp("   ====    ====")
            imp("        ||")
            imp("        || ")
            imp("        || ")
            imp("   =============")
            imp("   =============")
            alert("Que lastima, no pudiste vencer a Robocito.")

        } else if (player1 <= 0 && player2 <= 0) {
            player1 = 0;
            player2 = 0;
            game = false;
            console.clear();
            lifeBar(name, player1, player2);

            imp("           ~~    ~~")
            imp("           __\\_/__")
            imp("           | X X |")
            imp("           | ___ |                        ||")
            imp("     0=======   =======0                  ||")
            imp("              ||                     ====    ====")
            imp("              ||                          ||")
            imp("             //\\\\                         ||")
            imp("            //  \\\\                        || ")
            imp("           //    \\\\                  =============")
            imp("         <==      ==>                =============")
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
