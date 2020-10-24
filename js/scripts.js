// START CAROUSEL CODE

$(function() {
    $(".carousel").carousel(  { interval: 8000 });
    $("#carouselControl").click(function(){
        if ($("#carouselControl").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselControl").children("i").removeClass("fa-pause");
            $("#carouselControl").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselControl").children("i").removeClass("fa-play");
            $("#carouselControl").children("i").addClass("fa-pause");
        }
    });
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});

// END CAROUSEL CODE


// START GOAL LIST CODE

// variables

let GOALLIST = [];

let id = 0;


// select elements

const clear = document.querySelector('.clear');
const list = document.getElementById('goalList');
const input = document.getElementById('input1');

// class names

const check = 'fa-check-circle';
const uncheck = 'fa-circle-thin';
const line = 'goalLine'; 
const noline = ''; 
const checkColor = 'goalComplete';
const uncheckColor = 'goalIncomplete';

// local storage

let data = localStorage.getItem("GOAL");

if (data) {
    GOALLIST = JSON.parse(data);
    id = GOALLIST.length;
    loadGoalList(GOALLIST);
} else {
    GOALLIST = [];
    id = 0;
}

// functions

function loadGoalList(array) {
    array.forEach(function(item) {
        addGoal(item.name, item.id, item.done, item.trash); 
    });
};

function addGoal(goal, id, done, trash) {
    if (trash) {
        { return; }
    }; 

    const DONE = done ? check : uncheck; 
    const LINE = done ? line : noline;
    const COLOR = done ? checkColor : uncheckColor;
    
    const item =                 
    `
    <div class='goal1'>
        <i class='fa ${DONE} ${COLOR}' job='complete' id='${id}'></i>
        <p class='text ${LINE}'>${goal}</p>
        <i class='fa fa-trash-o' job='delete' id='${id}'></i>
    </div>
    `; 
    
    const position = 'beforeend';
    
    list.insertAdjacentHTML(position, item);
};

addGoal("drink coffee done", 1, true, false); 
addGoal("drink coffee undone", 1, false, false); 

function completeGoal(element) {
    element.classList.toggle(check); 
    element.classList.toggle(uncheck);
    element.classList.toggle(checkColor);
    element.classList.toggle(uncheckColor);
    element.parentNode.querySelector('.text').classList.toggle(line); 
    GOALLIST[element.id].done = GOALLIST[element.id].done ? false : true; 
}; 

function removeGoal(element) {
    element.parentNode.parentNode.removeChild(element.parentNode); 
    GOALLIST[element.id].trash = true; 
}; 


// event listeners 

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input.value;
    }
    if (goal) {
        addGoal(goal, id, false, false); 
        GOALLIST.push(
            {
               name: goal,
               id: id,
               done: false,
               trash: false
            }
        );
        localStorage.setItem("GOAL", JSON.stringify(GOALLIST)); 
        id++;
        input.value = '';
    }
});

list.addEventListener('click', function(event) {
    let element = event.target;
    const elementJob = element.attributes.job.value; // delete or complete
    if(elementJob == 'complete') {
       completeGoal(element);
    } else if (elementJob == 'delete') {
        removeGoal(element);
    }
    localStorage.setItem("GOAL", JSON.stringify(GOALLIST)); 
});

clear.addEventListener('click', function() {
    localStorage.clear(); 
    location.reload(); 
}); 

// END GOAL LIST CODE

