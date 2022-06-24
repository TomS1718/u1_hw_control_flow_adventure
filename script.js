const firstName = prompt('What is your name')
alert(`Nice to meet you ${name}.`)

const startGame = () => {
  let greaterYear = prompt('What year would you like to go to?')

  if (greaterYear >= 2015) {
    alert("I see you're a fan of Back to the Future 2.")
    alert('Would you rather deal with Biff, or Griff? (B/G)')
    let biffOrGriff = prompt('B for Biff or G for Griff')

    if (biffOrGriff === 'B') {
      alert(
        'Hmm, interesting. Biff is angry and has a cane. Do  you stand and fight, or run away like a coward (S/R)'
      )
    }
    let standOrRun = prompt('S for stand or R for run')
    if (standOrRun === 'S') {
      alert(
        'Good Choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure'
      )
    } else if (standOrRun === 'R') {
      alert(
        "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."
      )

      if (biffOrGriff === 'G') {
        alert(
          'Griff is asking you if you are in, or out. What do you say? (I/O)'
        )
        inOrOut = prompt('I for in or O for out')

        if (inOrOut === 'I') {
          alert(
            'Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. no more time travel for you'
          )
        } else if (inOrOut === 'O') {
          alert(
            'Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure'
          )
        } else {
          alert('Your answer is not a choice')
        }
        if (greaterYear <= 2014) {
          alert(
            "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?"
          )
          let greaterYear = prompt(
            'What name would you like to by by until then?'
          )
          if (greaterYear <= 1955)
            switch (greaterYear) {
              case 'H':
                alert(
                  "Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut instance of."
                )
                break
              case 'M':
                alert(
                  "You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855."
                )
                break
              case 'T':
                alert(
                  'Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment.'
                )
                break
              default:
                alert('Not sure on your choice')
            }
        }
      }
    }
  }
}

startGame()

const startAgain = prompt('Play Again')
if (startAgain === 'Y') {
  startGame()
}
