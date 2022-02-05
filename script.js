const selectionbuttons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const yourscorespan = document.querySelector('[data-your-score]')
const compscorespan = document.querySelector('[data-comp-score]')
const SELECTIONS = [
    {
        name : 'rock',
        beats : 'scissors',
        emoji : '👊'
    },
    {
        name : 'paper',
        beats : 'rock',
        emoji : '🖐️'
    },
    {
        name : 'scissors',
        beats : 'paper',
        emoji : '✌️'
    }
]

var winner = false

selectionbuttons.forEach(selectionbutton => {
    selectionbutton.addEventListener('click', e =>{
        const selectionname = selectionbutton.dataset.selection
        const yourselection = SELECTIONS.find(selection => selectionname === selection.name)
        const compselection = randomselction()
        
        winner = false
        if(iswinner(compselection, yourselection)){
            winner=true
            compscorespan.innerText = parseInt(compscorespan.innerText) + 1
        }
        addresult(compselection, winner)
        
        winner = false
        if(iswinner(yourselection, compselection)){
            winner=true
            yourscorespan.innerText = parseInt(yourscorespan.innerText) + 1
        }
        addresult(yourselection, winner)
    })
})

function iswinner(selection, opponent){
    if(selection.beats===opponent.name) return true
    else return false
}

function addresult(selection , winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function randomselction(){
    const index = Math.floor(Math.random()*3)
    return SELECTIONS[index]
}