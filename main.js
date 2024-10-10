$(document).ready(function(){
    $('header button').click(function(){
        
    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const tarefa = $('tarefa').val();
        const novoItem = $('<li></li>');
        $(`<div class="nova-tarefa">

            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})