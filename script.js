let firstName = prompt('What is your name')
alert(`Nice to meet you ${firstName}.`)

let years = prompt(
  `Nice to meet you ${firstName}, What year would you like to go to?`
)
const startGame = () => {
  if (years >= 2015) {
    let biffOrGriff = prompt(
      "I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
    )
    // If Biff is chosen
    if (biffOrGriff === 'B') {
      let standOrRun = prompt(
        'Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)'
      )
      if (standOrRun === 'S') {
        alert(
          'Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure'
        )
      } else if (standOrRun === 'R') {
        alert(
          "You get away, but your future Marty Jr. is heckled for the rest of his days for his dad's cowardice"
        )
      } else {
        alert('That is not a choice')
      }
      // If Griff is chosen
    } else if (biffOrGriff === 'G') {
      let InOrOut = prompt(
        'Griff is asking you if you are in, or out. What do you say? (I/O)'
      )

      if (InOrOut === 'I') {
        alert(
          'Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.'
        )
      } else if (InOrOut === 'O') {
        alert(
          'Good Call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure'
        )
      }
    }
  }
  if (years <= 2014) {
    let newName = prompt(
      "Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What new name would you like to go by until then?"
    )
    alert(`Welcome to the future ${newName}`)
  }
}
if (years <= 1984) {
  let futureOne = prompt(
    "I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)"
  )
  switch (futureOne) {
    case 'Y':
      alert(
        "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955"
      )
      break
    case 'N':
      alert(
        'Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.'
      )
      break
    case 'S':
      alert(
        'Ineresting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.'
      )
      break
    default:
      alert('Please choose another choice')
  }
}

startGame()

const startAgain = prompt('Play Again')
if (startAgain === 'Y') {
  startGame()
}
