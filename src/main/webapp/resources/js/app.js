$(document).ready(function() {

    var blue = $('.root').attr("id");
    $(".dropdown-toggle-js").dropdown();

    $(document).on("submit", ".form-add", function (e) {
        var object = form_to_object($(this));
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/node",
            dataType: 'json',
            data: JSON.stringify(object),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var parentNode = $("#" + object.id);

                if (parentNode.children(".glyphicon-menu-down").length > 0) {
                    parentNode.children(".children").append(format(data, object.name, object.parentId));
                }
            }
        });
    });

    $(document).on("click", ".dropdown-menu", function (e) {
        $('input[name=id]').val($(e.currentTarget).attr("node-id"));

    });

    $(document).on("click", ".arrow", function (e) {

        var param = $(e.currentTarget).parent().attr("id");
        var selectedObject =  $("#" + param);
        selectedObject.children(".arrow").removeClass('arrow');
        addSpiner(param);
        $.ajax({
            type: "GET",
            url: "/node",
            data:{id:param},
            success: function (data) {


                $("#" + blue).children('.node-name').removeClass('blue');
                blue = param;
                selectedObject.children('.node-name').addClass('blue');
                selectedObject.children(".glyphicon-menu-right").addClass('unvisible');


                setTimeout(function () {

                    selectedObject.children(".glyphicon-menu-right").addClass('glyphicon-menu-down');
                    selectedObject.children(".glyphicon-menu-right").removeClass('glyphicon-menu-right');
                    selectedObject.children(".glyphicon-folder-close").addClass('glyphicon-folder-open');
                    selectedObject.children(".glyphicon-folder-close").removeClass('glyphicon-folder-close');

                    data.forEach(function(item, i, arr) {
                        selectedObject.children(".children").append(format(item.id, item.name, item.parentId));
                    });

                    deleteSpinner(param);
                    selectedObject.children(".glyphicon-menu-down").removeClass('unvisible');

                }, 2000)
            },
            error: function () {
                selectedObject.children(".glyphicon-menu-right").addClass('arrow');
            }
        });

    });


    $(document).on("click", ".glyphicon-menu-down", function (e) {
        var param = $(e.currentTarget).parent().attr("id");
        var selectedObject =  $("#" + param);

        $("#" + blue).children('.node-name').removeClass('blue');
        blue = param;
        selectedObject.children('.node-name').addClass('blue');

        selectedObject.children(".glyphicon-menu-down").addClass('glyphicon-menu-right');
        selectedObject.children(".glyphicon-menu-down").removeClass('glyphicon-menu-down');
        selectedObject.children(".glyphicon-folder-open").addClass('glyphicon-folder-close');
        selectedObject.children(".glyphicon-folder-open").removeClass('glyphicon-folder-open');
        selectedObject.children(".children").children().remove();
        selectedObject.children(".glyphicon-menu-right").addClass('arrow');
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
        var object = form_to_object($(this));

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
            }
        });
    });
});

    function form_to_object(selector) {
        var ary = $(selector).serializeArray();
        var obj = {};
        for (var a = 0; a < ary.length; a++) obj[ary[a].name] = ary[a].value;
        return obj;
    }


    function format(id, name, parentId) {
        var result =
            '<li id=' + id + ' class="li-element" draggable="true" ondragstart="drag(event)">' +
            '<span class="arrow glyphicon glyphicon-menu-right" aria-hidden="true" ></span>' +
            '<span class="glyphicon glyphicon-folder-close" aria-hidden="true" ondrop="drop(event, this)" ondragover="allowDrop(event)"></span>' +
            '<span class="node-name">' + name  + '</span>' +
            '<div class = "dropdown" >' +
            '<a href = "#" class = "dropdown-toggle-js" data-toggle = "dropdown" >' +
            'Edit' +
            '<b class = "caret" > </b>' +
            '</a>' +
            '<ul class = "dropdown-menu" ' + 'node-id=' + '"' + id + '"' + ' node-name=' + '"' + name + '"' + ' node-parentId = ' + '"' + parentId + '"' + '>' +
            '<li> <a href = "#" data-toggle = "modal" data-target = "#basicModal" data-id> Add </a> </li>' +
            '<li class="rename-node"> <a href = "#" data-toggle = "modal" data-target ="#basicRenameModal"> Rename </a> </li>' +
            '<li class="delete-node"> <a href = "#"> Delete </a> </li>' +
            '</ul>' +
            '</div>' +
            '<ul class="children" >' +
            '</ul>' +
            '</li>';
        return result;
    }

    function addSpiner(id){
        var spiner = '<div class="page-preloader"><span class="spinner"></span></div>';
        $("#"+id).prepend(spiner);
    }

    function deleteSpinner(id){
        $("#"+id).children('.page-preloader').remove();
    }