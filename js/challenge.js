//GLOBAL ELEMENTS AND BUTTONS
let timer = document.getElementById("counter");
let pauseButton = document.getElementById("pause");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let form = document.querySelector('#comment-form');
let interval;
let paused = false

// Starts timer when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    interval = setInterval(startTimer, 1000);
})

// Function that actually starts the timer
let count = 0
function startTimer () {
    timer.textContent = count++;
}

// EventListener that decrements the count manually
minus.addEventListener('click', function() {
    timer.textContent = count--
})
//EventListener that increments the count manually
plus.addEventListener('click', function () {
    timer.textContent = count++
})

//EventListener that counts the amount of likes and creates a new Element displaying that count
let numOfLikes = 1;

heart.addEventListener('click', function () {
     let ul = document.querySelector('.likes');
     let li = document.createElement('li');
     li.setAttribute("Id", timer.textContent)
     let numOfClicks = document.getElementById(`${timer.textContent}`);
     if (numOfClicks == null) {
         numOfLikes = 1;
         li.innerText = `${timer.textContent} was liked ${numOfLikes} times.`;
         ul.appendChild(li);
     }
     else {
         numOfClicks.innerText = `${timer.textContent} was liked ${numOfLikes++} times.`;
     }
})

//Eventlistener that leaves a comment when Submit is clicked
form.addEventListener('submit', addComment);

    function addComment (e) {
        e.preventDefault()
        let input = document.querySelector("#comment-input").value
        let list = document.getElementById('list');
        let commentList = document.createElement('p');
        commentList.innerText = input;
        list.appendChild(commentList)
}

// put all Buttons besides pause in an array
let buttons = document.getElementsByTagName("button");
let buttonArr = [];


for (let i = 0; i < buttons.length; i++) {
    if(buttons[i].id != "pause") {
        buttonArr.push(buttons[i])
    }
}

//functions that disables and enables the buttons
function disable(button) {
    button.setAttribute("disabled", true)
};
function enable(button) {
    button.removeAttribute("disabled")
};

//switches text between pause and resume
function switchToResume() {
    pauseButton.innerText = "resume"
};
function switchToPause() {
    pauseButton.innerText = "pause"
};

//Eventlistener that pauses and resets the timer when "clicked"
pauseButton.addEventListener('click', function () {
    if (paused == false) {
        clearInterval(interval);
        buttonArr.forEach(button => disable(button));
        switchToResume();
        
    }
    if (paused == true) {
        interval = setInterval(startTimer, 1000);
        buttonArr.forEach(button => enable(button))
        switchToPause();
        
    }

    paused = !paused
})
