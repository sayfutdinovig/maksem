$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/root",
        dataType : 'json',
        contentType: "application/json; charset=utf-8",
        success: function(data){

            alert(data.name);
        },
        error: function (error) {

        }});

    $(".dropdown-toggle-js").dropdown();

    $("#form").on("submit", function(e){
        console.log( JSON.stringify(form_to_json($("#form"))));
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/node",
            dataType : 'json',
            data: JSON.stringify(form_to_json($("#form"))),
            contentType: "application/json; charset=utf-8",
            success: function(data){

                alert( "Прибыли данные: " + data);
        }
    });
})
});


function form_to_json (selector) {
    var ary = $(selector).serializeArray();
    var obj = {};
    for (var a = 0; a < ary.length; a++) obj[ary[a].name] = ary[a].value;
    return obj;
}