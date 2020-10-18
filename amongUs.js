// Crewmate vs Immposter
const numPlayer = 10
const numImposter = 5

function initPlayerState(numPlayer) {
    let playerState = []
    for (let i = 0; i < numPlayer; i++) {
        playerState.push(0)
    }

    return playerState
}

function createImposter(playerState, numImposter) {
    let imposterIndexes = []
    while (imposterIndexes.length < numImposter) {
        let idx = Math.floor(Math.random() * 1000) % numPlayer
        if (imposterIndexes.indexOf(idx) < 0) {
            imposterIndexes.push(idx)
            playerState[idx] = 1
        }
    }

    return playerState
}

function main() {
    // 0: crewmate, 1: imposter
    let playerState = initPlayerState(numPlayer)

    console.log("Before random:", playerState)
    playerState = createImposter(playerState, numImposter)
    console.log("After random:", playerState)
}

main()

