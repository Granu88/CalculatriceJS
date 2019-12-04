function isSymbol(value) {
  return ['/', '*', '+', '-', '%'].indexOf(value) !== -1
}

function getLastChar() {
  return screen.innerHTML.substr(-1)
}

function addToScreen(value) {
  if(!isStarted) {
    if (!isSymbol(value))
      screen.innerHTML = null

    isStarted=true
  }

  const lastChar = getLastChar()

  if (isSymbol(lastChar) && isSymbol(value))
    removeToScreen()

  screen.innerHTML += value
}

function removeToScreen(lenght= -1){
  screen.innerHTML = screen.innerHTML. slice(0, lenght)
  if (!screen.innerHTML) {
    screen.innerHTML = 0
    isStarted = false
  }
}

const screen = document.getElementById('screen')
const buttons = document.querySelectorAll('.btn')

let isStarted = false

buttons.forEach(element => {
  element.addEventListener('click', function () {
    let value = this.textContent

    if (value === '<-'){
      removeToScreen()
    } else if (value === '='){
      screen.innerHTML = eval(screen.innerHTML)
    } else {
      addToScreen(value)
    }

  })
})
