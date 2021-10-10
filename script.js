const score1 = document.querySelector('.player1-score')
const score2 = document.querySelector('.player2-score')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const th = document.querySelectorAll('th')
const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')
const s4 = document.querySelector('#s4')
const s5 = document.querySelector('#s5')
const s6 = document.querySelector('#s6')
const s7 = document.querySelector('#s7')
const s8 = document.querySelector('#s8')
const s9 = document.querySelector('#s9')

let p1 = 1
let p2 = 0 
let x = innerHTML = "X"
let o = innerHTML = "O"
	
for(let i = 0; i < 9; i++) {
	th[i].addEventListener('click', () => {
		if(p1 > p2){
			th[i].classList.add('red')
			th[i].innerHTML = "X"
			p1--
			p2++
			win("X", score1)
			player1.classList.remove("highlight")
			player2.classList.add("highlight")
			score1.classList.remove("highlight")
			score2.classList.add("highlight")
		} else if (p2 > p1) {
			th[i].classList.add('blue')
			th[i].innerHTML = "O"
			p1++
			p2--
			win("O", score2)
			player2.classList.remove("highlight")
			player1.classList.add("highlight")
			score2.classList.remove("highlight")
			score1.classList.add("highlight")
		}
	})
}

if (p1 > p2) {
	player2.classList.remove("highlight")
	player1.classList.add("highlight")
	score2.classList.remove("highlight")
	score1.classList.add("highlight")
}

function inner(e){
	e.innerHTML = ""
}

function remove(e){
	e.classList.remove("blue")
	e.classList.remove("red")
}

function clear() {
	th.forEach(e => {
		inner(e)
		remove(e)
})
}

function tie() {
	let i = 0
	th.forEach(e => {
		if(e.innerHTML == "O" || e.innerHTML == "X") {
			i++
		}
	})
	if (i === 9) {
		setTimeout(clear, 1000);
	}
}

function win(letter, score){
	if(s1.innerHTML == letter && s2.innerHTML == letter && s3.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else if(s4.innerHTML == letter && s5.innerHTML == letter && s6.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else if(s7.innerHTML == letter && s8.innerHTML == letter && s9.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else if(s1.innerHTML == letter && s4.innerHTML == letter && s7.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else if(s2.innerHTML == letter && s5.innerHTML == letter && s8.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else if(s3.innerHTML == letter && s6.innerHTML == letter && s9.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else if(s1.innerHTML == letter && s5.innerHTML == letter && s9.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else if(s3.innerHTML == letter && s5.innerHTML == letter && s7.innerHTML == letter){
		score.innerHTML++
		setTimeout(clear, 1000);
	}
	else {
		tie()
	}
}