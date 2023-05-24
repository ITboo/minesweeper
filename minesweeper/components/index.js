
import { startTimer } from "./stopwatch.js";
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const result = document.querySelector('.result');
    const flagsLeft = document.querySelector('.flags__left')
    const button = document.querySelector('.btn')

    let width = 10;
    let squares = [];
    let flags = 0;
    let bombAmount = 10;
    let isGameOver = false;

    const bombArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width * width - bombAmount).fill('empty')
    const gameArray = emptyArray.concat(bombArray)
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5)

    function create() {
        for (let i = 0; i < width * width; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', i);
            cell.classList.add(shuffledArray[i])
            grid.appendChild(cell);
            squares.push(cell);

            cell.addEventListener('click', function (e) {
                click(cell)
            })

            cell.oncontextmenu = function (e) {
                e.preventDefault()
                addFlag(cell)
            }
        }

        //add numbers
        for (let i = 0; i < squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width - 1)

            if (squares[i].classList.contains('empty')) {
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total++
                if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++
                if (i > 10 && squares[i - width].classList.contains('bomb')) total++
                if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total++
                if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total++
                if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total++
                if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains('bomb')) total++
                if (i < 89 && squares[i + width].classList.contains('bomb')) total++
                squares[i].setAttribute('data', total)
            }
        }
    }
    create()

    function click(cell) {
        let currentId = cell.id
        if (isGameOver) return
        if (cell.classList.contains('checked') || cell.classList.contains('flag')) return
        if (cell.classList.contains('bomb')) {
            gameOver()
        } else {
            let total = cell.getAttribute('data')
            if (total != 0) {
                cell.classList.add('checked')
                if (total == 1) cell.classList.add('one')
                if (total == 2) cell.classList.add('two')
                if (total == 3) cell.classList.add('three')
                if (total == 4) cell.classList.add('four')
                cell.innerHTML = total
                return
            }
            checkSquare(cell, currentId)
        }
        cell.classList.add('checked')
    }

    //check neighboring squares
    function checkSquare(cell, currentId) {
        const isLeftEdge = (currentId % width === 0)
        const isRightEdge = (currentId % width === width - 1)

        setTimeout(() => {
            if (currentId > 0 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId > 9 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1 - width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId > 10) {
                const newId = squares[parseInt(currentId - width)].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId > 11 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1 - width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 98 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 90 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1 + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 88 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1 + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 89) {
                const newId = squares[parseInt(currentId) + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
        }, 10)
    }

    function addFlag(cell) {
        if (isGameOver) return
        if (!cell.classList.contains('checked') && (flags < bombAmount)) {
            if (!cell.classList.contains('flag')) {
                cell.classList.add('flag')
                cell.innerHTML = ' 🚩'
                flags++
                flagsLeft.innerHTML = bombAmount - flags
                checkWin()
            } else {
                cell.classList.remove('flag')
                cell.innerHTML = ''
                flags--
                flagsLeft.innerHTML = bombAmount - flags
            }
        }
    }

    function gameOver(square) {
        result.innerHTML = `Game over. Try again`
        isGameOver = true
        squares.forEach(square => {
            if (square.classList.contains('bomb')) {
                square.innerHTML = '💣'
                square.classList.remove('bomb')
                square.classList.add('checked')
            }
        })
    }
    function checkWin() {
        let matches = 0

        for (let i = 0; i < squares.length; i++) {
            if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
                matches++
            }
            if (matches === bombAmount) {
                result.innerHTML = `Hooray! You found all mines in ## seconds and N moves!`
                isGameOver = true
            }
        }
    }
    let clickAmount = 0
    const interval = window.setInterval(startTimer, 10)
    grid.addEventListener('click', () => {
        clickAmount++
        if (clickAmount === 1) {
            return interval
        } else if (isGameOver) { clearInterval(interval) }
    })


})
