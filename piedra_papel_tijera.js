function getComputerChoice() {
    const words = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * words.length)
    return words[random]
}

function RoundGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        return {
            message: "Rock beats scissor. You win!",
            player_won: true
        }
        
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        return {
            message: "Paper beats rock. You lose, try again!",
            player_won: false
        }
        
    }
    if (playerSelection == "rock" && computerSelection == "rock") {
        return {
            message: "It's a tie",
            player_won: null
        }
        
    }
    if (playerSelection == "scissor" && computerSelection == "rock") {
        return {
            message: "Rock beats scissor. You lose, try again!",
            player_won: false
        }
        
    }
    if (playerSelection == "scissor" && computerSelection == "paper") {
        return {
            message: "Scissor beats paper. You win!",
            player_won: true
        }
        
    }
    if (playerSelection == "scissor" && computerSelection == "scissor") {
        return {
            message: "It's a tie",
            player_won: null
        }
        
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return {
            message:"Paper beats rock. You win!",
            player_won: true
        }
        
    }
    if (playerSelection == "paper" && computerSelection == "scissor") {
        return {
            message:"Scissor beats paper. You lose, try again!",
            player_won: false
        }
        
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        return {
            message: "It's a tie",
            player_won: null
        }
        
    }
    //console.log(playerSelection, computerSelection)
}

function Game(RoundGame) {
    for (let i = 0; i < 5; i++) {
    }
}
function Play(playerchoice) {
    const computerSelection = getComputerChoice()
    let cpu_selection = document.getElementById('cpu_selection')
    let image = document.createElement("img")
    image.src = imagenes[computerSelection]
    cpu_selection.innerHTML = ""
    cpu_selection.appendChild(image)
    let resultado = document.getElementById("Resultado")
    let game_result = RoundGame(playerchoice, computerSelection)
    
    resultado.textContent = game_result.message
    if (game_result.player_won === true) {
        resultado.className = "winner"
    }else if(game_result.player_won === false) {
        resultado.className = "loser"
    }else {
        resultado.className = "tie"
    }

    
}
const imagenes = {
    rock: "https://static.vecteezy.com/system/resources/previews/005/395/142/non_2x/stone-cartoon-with-pointing-left-gesture-vector.jpg",
    paper: "https://e7.pngegg.com/pngimages/527/119/png-clipart-paper-loose-leaf-drawing-illustration-paper-miscellaneous-television.png",
    scissor: "https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cartoon-art-scissors-illustration-image_1401856.jpg"
}
