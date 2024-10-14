$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const enderecoDaNovaTarefa = $('#endereco-tarefa-nova').val();
        const novoItem = $('<li style="display: none"></li>')
        $(`<li="${enderecoDaNovaTarefa}" />`).appendTo(novoItem);
        
    })
})

