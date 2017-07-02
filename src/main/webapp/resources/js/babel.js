
var App = React.createClass({

    render: function() {
        var data = this.props.data;
        var News = React.createClass({
            render: function() {
                var data = this.props.data;
                debugger;
                var template = data.map(function (item, index) {

                    return
                    (
                    <ul>
                    <li className = "close-catalog" >
                        {root.name}
                    <div className = "dropdown" >
                        <a href = "#" className = "dropdown-toggle-js" data-toggle = "dropdown" >
                        Edit
                        <b className = "caret" > </b>
                        </a>
                        <ul className = "dropdown-menu" >
                        <li> <a href = "#" className = "btn btn-lg btn-success" data-toggle = "modal" data-target = "#basicModal"> Add </a> </li>
                        <li> <a href = "#"> Rename </a> </li>
                        <li> <a href = "#"> Delete </a> </li>
                        </ul>
                        </div></li>
                        </ul>

                    //     <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                    //     <div class="modal-dialog">
                    //     <div class="modal-content">
                    //     <div class="modal-body">
                    //     <h3>Please write </h3>
                    // </div>
                    //
                    //
                    // <form id="form">
                    //     <input name="name" type="text" value="" required/>
                    // <input name="id" type="hidden" value ="{item.id}" />
                    //     <div class="modal-footer">
                    //     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    //     <button type="submit" class="btn btn-primary">Add node</button>
                    // </div>
                    // </form>
                    // </div>
                    // </div>
                    // </div>
                    )
                });

                return (
                    <div className="news">
                    {template}
                    </div>
                );
            }})

        if (catalog != undefined)
           return ( <div className="App" >
                <News data={data}/>
            </div>)
        else return (ddddddddddddd);

    }
});


ReactDOM.render(
    <App />,
    document.getElementById('root')
);