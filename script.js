document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/*
const texts = [
    "Hi, I am Arshvir, a CSE student",
    "Who likes Artificial Intelligence,",
    "Who likes Machine Learning,",
    "Who likes Robotics,",
    "Who likes Software Engineering"
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (charIndex < texts[index].length) {
        typingText.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Typing speed
    } else {
        setTimeout(() => {
            erase();
        }, 2000); // Pause before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.innerHTML = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Erasing speed
    } else {
        index = (index + 1) % texts.length; // Move to next text
        setTimeout(type, 500); // Pause before typing next
    }
}

// Start typing
type();
*/
/*
const texts = [
    "Hi, I am Arshvir, a CSE student",
    "Artificial Intelligence,",
    "Machine Learning,",
    "Robotics,",
    "Software Engineering"
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");
const topicText = document.getElementById("topic-text");

// Function to type the first line and stabilize it
function typeFirstLine() {
    if (charIndex < texts[0].length) {
        typingText.innerHTML += texts[0].charAt(charIndex);
        charIndex++;
        setTimeout(typeFirstLine, 100); // Typing speed
    } else {
        // After the first line is fully typed, stabilize it
        setTimeout(() => {
            topicText.innerHTML = "Who likes "; // Add "Who likes"
            index = 0; // Reset index for topics
            charIndex = 0; // Reset charIndex for the first topic
            typeNextLine(); // Start typing the next lines
        }, 2000); // Pause before typing "Who likes"
    }
}

// Function to type the subsequent lines
function typeNextLine() {
    if (index < texts.length - 1) {
        if (charIndex < texts[index + 1].length) {
            topicText.innerHTML = "Who likes " + texts[index + 1].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeNextLine, 100); // Typing speed
        } else {
            // Pause before moving to the next topic
            setTimeout(() => {
                index++; // Move to the next topic
                charIndex = 0; // Reset charIndex for new topic
                typeNextLine(); // Start typing the next line
            }, 2000); // Pause before the next line
        }
    } else {
        // Reset and start over after finishing all topics
        index = 0;
        setTimeout(() => {
            charIndex = 0;
            topicText.innerHTML = "Who likes "; // Reset to "Who likes "
            typingText.innerHTML = texts[0]; // Reset to the first line
            typeFirstLine(); // Start typing the first line again
        }, 2000); // Pause before restarting
    }
}

// Start typing the first line
typeFirstLine();
*/


const texts = [
    "Hi, I am Arshvir, a CSE student",
    "Artificial Intelligence,",
    "Machine Learning,",
    "Robotics,",
    "Software Engineering"
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");
const topicText = document.getElementById("topic-text");

// Function to type the first line and stabilize it
function typeFirstLine() {
    if (charIndex < texts[0].length) {
        typingText.innerHTML += texts[0].charAt(charIndex);
        charIndex++;
        setTimeout(typeFirstLine, 100); // Typing speed
    } else {
        // After the first line is fully typed, stabilize it
        setTimeout(() => {
            topicText.innerHTML = "Who likes "; // Add "Who likes"
            index = 0; // Reset index for topics
            charIndex = 0; // Reset charIndex for the first topic
            setTimeout(typeNextLine, 500); // Start typing the next lines after a pause
        }, 2000); // Pause before typing "Who likes"
    }
}

// Function to type the subsequent lines
function typeNextLine() {
    if (index < texts.length - 1) {
        if (charIndex < texts[index + 1].length) {
            topicText.innerHTML = "Who likes " + texts[index + 1].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeNextLine, 100); // Typing speed
        } else {
            // Pause before moving to the next topic
            setTimeout(() => {
                index++; // Move to the next topic
                charIndex = 0; // Reset charIndex for new topic
                setTimeout(typeNextLine, 500); // Start typing the next line after a pause
            }, 2000); // Pause before the next line
        }
    } else {
        // Reset and start over after finishing all topics
        index = 0;
        charIndex = 0;
        setTimeout(() => {
            topicText.innerHTML = "Who likes "; // Reset to "Who likes "
            typingText.innerHTML = ""; // Clear typing text
            typeFirstLine(); // Start typing the first line again
        }, 2000); // Pause before restarting
    }
}

// Start typing the first line
typeFirstLine();


/*
const texts = [
    "Hi, I am Arshvir, a CSE student",
    "Artificial Intelligence,",
    "Machine Learning,",
    "Robotics,",
    "Software Engineering"
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");
const topicText = document.getElementById("topic-text");

// Load typing sound
const typingSound = new Audio('typing-sound.mp3');

// Function to type the first line and stabilize it
function typeFirstLine() {
    if (charIndex < texts[0].length) {
        typingText.innerHTML += texts[0].charAt(charIndex);
        typingSound.play(); // Play typing sound
        charIndex++;
        setTimeout(typeFirstLine, 100); // Typing speed
    } else {
        // After the first line is fully typed, stabilize it
        setTimeout(() => {
            topicText.innerHTML = "Who likes "; // Add "Who likes"
            index = 0; // Reset index for topics
            charIndex = 0; // Reset charIndex for the first topic
            setTimeout(typeNextLine, 500); // Start typing the next lines after a pause
        }, 2000); // Pause before typing "Who likes"
    }
}

// Function to type the subsequent lines
function typeNextLine() {
    if (index < texts.length - 1) {
        if (charIndex < texts[index + 1].length) {
            topicText.innerHTML = "Who likes " + texts[index + 1].substring(0, charIndex + 1);
            typingSound.play(); // Play typing sound
            charIndex++;
            setTimeout(typeNextLine, 100); // Typing speed
        } else {
            // Pause before moving to the next topic
            setTimeout(() => {
                index++; // Move to the next topic
                charIndex = 0; // Reset charIndex for new topic
                setTimeout(typeNextLine, 500); // Start typing the next line after a pause
            }, 2000); // Pause before the next line
        }
    } else {
        // Reset and start over after finishing all topics
        index = 0;
        charIndex = 0;
        setTimeout(() => {
            topicText.innerHTML = "Who likes "; // Reset to "Who likes "
            typingText.innerHTML = ""; // Clear typing text
            typeFirstLine(); // Start typing the first line again
        }, 2000); // Pause before restarting
    }
}

// Start typing the first line
typeFirstLine();
*/