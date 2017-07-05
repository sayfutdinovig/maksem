$(document).ready(function() {


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
                if ($("#" + object.id).children(".children").find('li').length > 0) {
                    $("#" + object.id).children(".children").append(format(data, object.name, object.parentId));
                }
            }
        });
    });

    $(document).on("click", ".dropdown-menu", function (e) {
        $('input[name=id]').val($(e.currentTarget).attr("node-id"));

    });

    $(document).on("click", ".glyphicon-menu-right", function (e) {

        var param = $(e.currentTarget).parent().attr("id");
        $.ajax({
            type: "GET",
            url: "/node",
            data:{id:param},
            success: function (data) {
                data.forEach(function(item, i, arr) {
                    $("#" + param).children(".glyphicon-menu-right").addClass('glyphicon-menu-down');
                    $("#" + param).children(".glyphicon-menu-right").removeClass('glyphicon-menu-right');
                    $("#" + param).children(".glyphicon-folder-close").addClass('glyphicon-folder-open');
                    $("#" + param).children(".glyphicon-folder-close").removeClass('glyphicon-folder-close');
                    $("#" + param).children(".children").append(format(item.id, item.name, item.parentId));
                })
            }
        });

    });


    $(document).on("click", ".glyphicon-menu-down", function (e) {

        var param = $(e.currentTarget).parent().attr("id");

        $("#" + param).children(".glyphicon-menu-down").addClass('glyphicon-menu-right');
        $("#" + param).children(".glyphicon-menu-down").removeClass('glyphicon-menu-down');
        $("#" + param).children(".glyphicon-folder-open").addClass('glyphicon-folder-close');
        $("#" + param).children(".glyphicon-folder-open").removeClass('glyphicon-folder-open');
        $("#" + param).children(".children").children().remove();


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
                    $("#" + +object.id).children(".node-name").text(object.name);
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
            '<li id=' + id + '>' +
            '<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>' +
            '<span class="glyphicon glyphicon-folder-close" aria-hidden="true"></span>' +
            '<span class="node-name">' + name  + '</span>' +
            '<div class = "dropdown" >' +
            '<a href = "#" class = "dropdown-toggle-js" data-toggle = "dropdown" >' +
            'Edit' +
            '<b class = "caret" > </b>' +
            '</a>' +
            '<ul class = "dropdown-menu" ' + 'node-id=' + '"' + id + '"' + ' node-name=' + '"' + name + '"' + ' node-parentId = ' + '"' + parentId + '"' + '>' +
            '<li> <a href = "#" class = "btn btn-lg btn-success" data-toggle = "modal" data-target = "#basicModal" data-id> Add </a> </li>' +
            '<li class="rename-node"> <a href = "#" class = "btn btn-lg btn-success" data-toggle = "modal" data-target ="#basicRenameModal"> Rename </a> </li>' +
            '<li class="delete-node"> <a href = "#"> Delete </a> </li>' +
            '</ul>' +
            '</div>' +
            '<ul class="children">' +
            '</ul>' +
            '</li>';
        return result;
    }