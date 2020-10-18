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

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough'; 

function addGoal(goal, id, done, ) {

const clear = document.querySelector('.clear');

const list = document.getElementById('goalList');

const input = document.getElementById('input');


document.addEventListener('keyup', function(event) {
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
})

const text =                 
`<div class='goal1'>
    <i class='co fa-circle-thin' job='complete'></i>
    <p class='text'>${goal}</p>
    <i class='de fa-trash-o' job='delete'></i>
</div>`

const position = 'beforeend';

list.insertAdjacentHTML(position, text);


} 

addGoal('hello');


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

