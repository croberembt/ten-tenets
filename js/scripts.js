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

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

const clear = document.querySelector('.clear');
const list = document.getElementById('goalList');
const input = document.getElementById('input');

let GOALLIST = [];

let id = 0;

GOALLIST = [{} ,{} , ...];

GOALLIST[0] ->

{
    name: 'Sleep at least 8 hours every night',
    id: 0,
    done: false,
    trash: false
}

GOALLIST[1] ->

{
    name: 'Eat at least one serving of vegetables every day',
    id: 0,
    done: false,
    trash: false
}

localStorage.setItem('key', 'value');

let data = localStorage.getItem('TODO');

localStorage.setItem('TODO', JSON.stringify(GOALLIST)); 

if (data) {
    GOALLIST = JSON.parse(data);
    loadGoalList(GOALLIST);
    id = GOALLIST.length;
} else {
    LIST = [];
    id = 0; 
}



// functions

function loadGoalList(array) {
    array.forEach(function(item) {
        addGoal(item.name, item.id, item.done, item.trash); 
    });
};

function addGoal(goal, id) {
    const text =                 
    `<div class='goal1'>
        <i class='fa ${DONE} complete' job='complete' id='${id}'></i>
        <p class='text ${LINE}'>${goal}</p>
        <i class='fa fa-trash-o' job='delete' id='${id}'></i>
    </div>`
    
    const position = 'beforeend';
    
    list.insertAdjacentHTML(position, text);
};

function completeGoal(element) {
    element.classList.toggle(CHECK); 
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH); 
    GOALLIST[element.id].done = GOALLIST[element.id].done ? false : true; 
}; 

function removeGoal(element) {
    element.parentNode.parentNode.removeChild(element.parentNode); 
    GOALLIST[element.id].trash = true; 
}; 


// event listeners 

list.addEventListener('click', function(event) {
    let element = event.target;
    const elementJOB = event.target.attributes.job.value; // delete or complete
    if(elementJOB == 'complete') {
        completeGoal(element);
    } else if (elementJOB == 'delete') {
        removeGoal(element);
    }
});

document.addEventListener('keyup', function(event) {
    const DONE = done ? CHECK : UNCHECK; 
    const LINE = done ? LINE_THROUGH : '';
    if (trash) { return; }
    if (event.key == 13) {
        const goal = input.value;
    }
    if (goal) {
        addGoal(goal, name, id, done, trash); 
        GOALLIST.push(
            {
                name: goal,
                id: id,
                done: false,
                trash: false
            }
        );
    }
    input.value='';
    id++;
});

clear.addEventListner('click', function() {
    localStorage.clear(); 
    location.reload(); 
}); 

// END GOAL LIST CODE

