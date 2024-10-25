    $(document).ready(function () {
        $("header button").click(function () {
        $("form").slideDown();
        });
    
        $("form").on("submit", function (e) {
        e.preventDefault();
        const novaTarefa = $("#tarefa").val();

        const novoItem = $(`<li style="display: none">${novaTarefa}</li>`);
        $("ul").append(novoItem);
        novoItem.slideDown();
    
        $("#tarefa").val("");
        });

        $("ul").on("click", "li", function() {
            $(this).toggleClass("concluído");
        });
    });
