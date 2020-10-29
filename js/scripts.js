// START CAROUSEL CODE

$(function() {
    $('.carousel').carousel(  { interval: 4000 });
    $('#carouselControl').click(function(){
        if ($('#carouselControl').children('i').hasClass('fa-pause')) {
            $('.carousel').carousel('pause');
            $('#carouselControl').children('i').removeClass('fa-pause');
            $('#carouselControl').children('i').addClass('fa-play');
        } else {
            $('.carousel').carousel('cycle');
            $('#carouselControl').children('i').removeClass('fa-play');
            $('#carouselControl').children('i').addClass('fa-pause');
        }
    });
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    });
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
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
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const input9 = document.getElementById('input9');
const input10 = document.getElementById('input10');

// class names

const check = 'fa-check-circle';
const uncheck = 'fa-circle-thin';
const line = 'goalLine'; 
const noline = ''; 
const checkColor = 'goalComplete';
const uncheckColor = 'goalIncomplete';

// local storage

let data = localStorage.getItem('GOAL');

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
    <div class='goal container' style='margin-top: 20px'>
        <div class='row'>
            <i class='fa ${DONE} ${COLOR}' job='complete' id='${id}' style='margin-right: 10px; margin-top: 5px'></i>
            <p class='text ${LINE}'>${goal}</p>
            <i class='fa fa-trash-o' job='delete' id='${id}' style='margin-left: 10px; margin-top: 5px'></i>
        </div>
    </div>
    `; 
    
    const position = 'beforeend';
    
    list.insertAdjacentHTML(position, item);
};

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

// all add goal event listeners 1-10

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input1.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input1.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input2.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input2.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input3.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input3.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input4.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input4.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input5.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input5.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input6.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input6.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input7.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input7.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input8.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input8.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input9.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input9.value = '';
    }
});

document.addEventListener('keyup', function(event) {
    let goal = ''; 
    if (event.keyCode == 13) {
         goal = input10.value;
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
        localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
        id++;
        input10.value = '';
    }
});

// other event listeners

list.addEventListener('click', function(event) {
    let element = event.target;
    const elementJob = element.attributes.job.value; // delete or complete
    if(elementJob == 'complete') {
       completeGoal(element);
    } else if (elementJob == 'delete') {
        removeGoal(element);
    }
    localStorage.setItem('GOAL', JSON.stringify(GOALLIST)); 
});

clear.addEventListener('click', function() {
    localStorage.clear(); 
    location.reload(); 
}); 

// END GOAL LIST CODE

