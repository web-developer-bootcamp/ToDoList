//click on todo to line through
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

//insert value to todo list
$("input[type='text']").on("keypress", function (e) {
    if (e.which === 13) {
        var ToDoText = $(this).val();
        $("ul").append("<li><span>X</span> " + ToDoText + "</li>");
        $(this).val("");
    }
});