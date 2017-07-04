$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/root",
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            alert(data.name);
        },
        error: function (error) {

        }
    });

    $(".dropdown-toggle-js").dropdown();

    $(document).on("submit", ".form-add", function (e) {
        var object = form_to_json($(this));
        console.log(JSON.stringify(object));
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/node",
            dataType: 'json',
            data: JSON.stringify(object),
            contentType: "application/json; charset=utf-8",
            success: function (data) {

                $("#"+object.id).append(format(data, object.name, object.parentId));
            }
        });
    });

    $(document).on("click", ".dropdown-menu", function (e) {
        $('input[name=id]').val($(e.currentTarget).attr("node-id"));

    });

    $(document).on("click", ".rename-node", function (e) {
        $('input[name=id]').val($(e.currentTarget).parent().attr("node-id"));
        $('input[name=name]').val($(e.currentTarget).parent().attr("node-name"));
    });

    $(document).on("click", ".delete-node", function (e) {
        var param = $(e.currentTarget).parent().attr("node-id");
        $.ajax({
            type: "POST",
            url: "/delete_node",
            data:{id:param},
            success: function (data) {
                if (data == true) {
                    $("#"+param).remove();
                }
                else {
                    alert('Error for process delete')
                }
            }
        });

    });


    $(document).on("submit", ".form-rename", function (e) {
        var object = form_to_json($(this));
        console.log(JSON.stringify(object));
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/rename_node",
            dataType: 'json',
            data: JSON.stringify(object),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                if (data == true)
                {
                    
                }else {
                    alert("Error");
                }
               // $("#"+object.id).append(format(data, object.name, object.parentId));
            }
        });
    });
});

    function form_to_json(selector) {
        var ary = $(selector).serializeArray();
        var obj = {};
        for (var a = 0; a < ary.length; a++) obj[ary[a].name] = ary[a].value;
        return obj;
    }


    function format(id, name, parentId) {
        var result =
            '<li class = "close-catalog" id=' + id + '>' +
             name +
            '<div class = "dropdown" >' +
            '<a href = "#" class = "dropdown-toggle-js" data-toggle = "dropdown" >' +
            'Edit' +
            '<b class = "caret" > </b>' +
            '</a>' +
            '<ul class = "dropdown-menu" ' + 'node-id=' + '"' + id + '"' + ' node-name=' + '"' + name + '"' + ' node-parentId = ' + '"' + parentId + '"' + '>' +
            '<li> <a href = "#" class = "btn btn-lg btn-success" data-toggle = "modal" data-target = "#basicModal" data-id> Add </a> </li>' +
            '<li> <a href = "#"> Rename </a> </li>' +
            '<li class="delete-node"> <a href = "#"> Delete </a> </li>' +
            '</ul>' +
            '</div>' +
            '</li>';
        return result;
    }