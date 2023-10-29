console.clear();

var board = document.getElementById('board');
const questions = document.getElementById('setup-questions');
const controls = document.getElementById('controls');

let heaps = [3, 5, 7];


function setup() {
    controls.appendChild(questions);
    questions.style.opacity = 1;     
    board.style.opacity = 1;
    questions.r
}

function playHumanFirst() {
    questions.remove();
    console.log('playHumanFirst');
}

function playComputerFirst() {
    questions.remove();
    // console.log(heaps[0] ^ heaps[1] ^ heaps[2]);

    if (heaps[0] ^ heaps[1] ^ heaps[2] == 0) {
        console.log('losing position');
        let heap = Math.floor(Math.random() * 3);
        let amount = Math.floor(Math.random() * heaps[heap]) + 1;
        console.log(heap, amount);

    }

}

