// Initial environment
const inst = [
    "[Modo de juego]",
    "Este es un juego en base a probabilidades.",
    "Robocito y tú tienen 20 de vida.",
    "Cada lanzamiento varía entre 0 y 10, que se irá restando a la vida del contrincante.",
    "Ganas si logras destruirlo antes que él a ti. Buena suerte!",
    "\n"
]
console.log(inst.join("\n"))

const botName = "Robocito"

const messages = {
    init_msg: "Debes abrir la consola con [F12] para ver las instrucciones y jugar. Si no las ves, presiona cancelar.",
    sec_msg: "Se recomienda abrir la consola lo suficiente para una correcta visualización.",
    name_msg: ['Ingresa tu nombre', 'Debes ingresar un nombre'],
    game_msg: ['Excelente tirada!', 'Que buena tirada', 'Eso estuvo decente', 'Hoy la suerte no te sonríe', 'Definitivamente la suerte no te sonríe'],
    turn_msg: "Es tu turno ¿Deseas lanzar? Si presionas cancelar tu turno se saltará.",
    p1_win: `Derrotaste a ${botName} ¡Felicitaciones!`,
    p2_win: `Que lastima, no pudiste vencer a ${botName}.`,
    draw: "¡Es un empate! Ambos se aniquilaron.",
    try_again: "Deseas volver a jugar",
    choice1: "Si cambias de opinión solo debes refrescar la página.",
    choice2: "La página se refrescará al presionar OK.",
}

let cond = window.confirm(messages.init_msg);
const playersData = {
    player1: null,
    player2: botName,
    life1: 20,
    life2: 20,
    playerRandom1: 0,
    playerRandom2: 0,
    turn_p1: undefined,
    game: true,
}

let caseFunct = (randomNumber, messages) => {
    switch (true) {
        case (randomNumber > 9):
            console.log(messages.game_msg[0]);
            break;
        case (randomNumber > 4):
            console.log(messages.game_msg[1]);
            break;
        case (randomNumber > 2):
            console.log(messages.game_msg[2]);
            break;
        case (randomNumber > 0):
            console.log(messages.game_msg[3]);
            break;
        default:
            console.log(messages.game_msg[4]);
            break;
    }
}

let lifeBar = (playersData) =>{
    console.log("_".repeat(60))
    console.log(`${playersData.player1} (${playersData.life1}) ` + "=".repeat(playersData.life1))
    console.log("_".repeat(60))
    console.log("_".repeat(60))
    console.log(`${playersData.player2} (${playersData.life2}) ` + "=".repeat(playersData.life2))
    console.log("_".repeat(60))
}

// start game
if (cond) {
    alert(messages.sec_msg);
    playersData.player1 = prompt(messages.name_msg[0]);

    while (playersData.player1 == "" || playersData.player1 == null) {
        alert(messages.name_msg[1]);
        playersData.player1 = prompt(messages.name_msg[0]);
    }

    while (playersData.game) {
        console.clear();
        if (playersData.turn_p1 != undefined) {
            console.log("Comments:")
            if (!playersData.turn_p1) {
                console.log(`${playersData.player1} ha pasado su turno`)
            } else {
                console.log(`${playersData.player1} ha sacado ${playersData.playerRandom1}`)
                caseFunct(playersData.playerRandom1, messages);
            }
            console.log("")
            console.log(`${playersData.player2} ha sacado ${playersData.playerRandom2}`)
            caseFunct(playersData.playerRandom2, messages);
            lifeBar(playersData);
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

        playersData.turn_p1 = window.confirm(messages.turn_msg)
        playersData.playerRandom1 = Math.floor(Math.random() * 10);
        playersData.playerRandom2 = Math.floor(Math.random() * 10);

        if(playersData.turn_p1) {
            playersData.life2 = playersData.life2 - playersData.playerRandom1;
        }
        playersData.life1 = playersData.life1 - playersData.playerRandom2;

        if (playersData.life2 <= 0 && playersData.life1 > 0) {
            playersData.life2 = 0;
            playersData.game = false;
            console.clear();
            lifeBar(playersData);

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
            alert(messages.p1_win)

        } else if (playersData.life1 <= 0 && playersData.life2 > 0) {
            playersData.life1 = 0;
            playersData.game = false;
            console.clear();
            lifeBar(playersData);

            console.log("        ||")
            console.log("        ||")
            console.log("   ====    ====")
            console.log("        ||")
            console.log("        || ")
            console.log("        || ")
            console.log("   =============")
            console.log("   =============")
            alert(messages.p2_win)

        } else if (playersData.life1 <= 0 && playersData.life2 <= 0) {
            playersData.life1 = 0;
            playersData.life2 = 0;
            playersData.game = false;
            console.clear();
            lifeBar(playersData);

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
            alert(messages.draw)

        }
    }

    if (!playersData.game) {
        let tryagain = window.confirm(messages.try_again)

        if (tryagain) {
            location.reload();
        } else {
            alert(messages.choice1)
        }
    }

} else {
    alert(messages.choice2);
    location.reload();
}
