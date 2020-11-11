// changes what information is visible on my personal website

// sets up initial view by making everything invisible
function initialize() {
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#education').style.display = 'none';
    document.querySelector('#projects').style.display = 'none';
    document.querySelector('#questions').style.display = 'none';
}

// fades out a specified div and fades in another div
function fade(fadeIn) {
    vanish('about');
    vanish('education');
    vanish('projects');
    vanish('questions');
    conjure(fadeIn);
}

// makes a certain div dissapear
function vanish(divArg) {
    document.querySelector(`#${divArg}`).style.opacity = '0.75';
    document.querySelector(`#${divArg}`).style.opacity = '0.50';
    document.querySelector(`#${divArg}`).style.opacity = '0.25';
    document.querySelector(`#${divArg}`).style.opacity = '0';
    document.querySelector(`#${divArg}`).style.display = 'none';
}

// makes a certain div appear
function conjure(divArg) {
    document.querySelector(`#${divArg}`).style.opacity = '0'
    document.querySelector(`#${divArg}`).style.display = 'block';
    document.querySelector(`#${divArg}`).style.opacity = '0.25';
    document.querySelector(`#${divArg}`).style.opacity = '0.50';
    document.querySelector(`#${divArg}`).style.opacity = '0.75';
    document.querySelector(`#${divArg}`).style.opacity = '1';
}    
