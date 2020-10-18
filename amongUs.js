// Crewmate vs Immposter
const numPlayer = 4
const numImposter = 1

function initPlayerState(numPlayer) {
    let playerState = []
    for (let i = 0; i < numPlayer; i++) {
        playerState.push(0)
    }

    return playerState
}

function main() {
    // 0: crewmate, 1: imposter
    let playerState = initPlayerState(numPlayer)

    console.log("Before random:", playerState)
    const imposterIndex = Math.floor(Math.random() * 10) % numPlayer
    playerState[imposterIndex] = 1

    console.log("After random:", playerState)
}

main()

