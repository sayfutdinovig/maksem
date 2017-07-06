function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, self) {
    ev.preventDefault();
    ev.stopPropagation();

    var movedObjId = ev.dataTransfer.getData("text");
    var $movedObj = $('#' + movedObjId);

    // добавить ajax отправлять movedObjId и self.id



    if ($movedObj.find('#' + self.id).length || self.id == movedObjId) {
        alert('Так нельзя :)');
        return;
    }

    $.ajax({
        type: "POST",
        url: "/move_node",
        data: {id: movedObjId,parentId: self.id},
        success: function (data) {
            if (data == true) {
                // if (ev.target.className == 'li-element') {
                //     $('#' + ev.target.id).children(".children").append($movedObj);
                // } else {
                   if ($("#"+self.id).children(".glyphicon-menu-down").length > 0) {
                       $(self).children(".children").append($movedObj);
                   }
                   else {
                       $movedObj.remove();
                   }
                // }
            }
        }
    });


}
