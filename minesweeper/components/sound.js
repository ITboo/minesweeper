const cells = document.querySelectorAll('.cell')


function playSound(sound) {
    console.log(sound)
    new Audio(sound).play()
}


cells.forEach((cell) => {
    const sound = 'minesweeper/components/sounds/cell.wav'
    cell.addEventListener('click', () => playSound(sound))
})