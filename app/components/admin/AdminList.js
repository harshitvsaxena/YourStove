var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var AdminListUI = require('../../ui/admin/AdminList');
var $ = require('jquery');
require('datatables.net')(window, $);
require('../../styles/datatables/css/jquery.dataTables.css');

var AdminList = React.createClass({
    loadData: function() {
        $.ajax({
            url: "http://localhost:8124/get_all_blogs",
            method: "GET",
            success: function(data) {
                data.data.map(function(currentValue, index, arr) {
                    $("#blogs-list tbody").append("<tr> \
                        <td>" + currentValue.title  + "</td> \
                        <td>" + currentValue.type + "</td> \
                        <td>" + currentValue.label  + "</td> \
                        <td>" + currentValue.likes + "</td> \
                        <td>" + currentValue.publishDate + "</td> \
                        <td><a style='cursor: pointer;' value='" + currentValue.id + "'>Modify</a></td> \
                    </tr>");
               });
                $('#blogs-list').DataTable({
                    "order": [4, "desc"]
                });
                $("#blogs-list").on('click', 'tbody tr a', function() {
                    console.log($(this).attr('value'));
                    //now push it to modify using this.push.state something or <Link to="ideas" params={{ testvalue: "hello" }}>Create Idea</Link>
                });
 
            }
        });
    },
    componentDidMount: function() {
        this.loadData();
    },
    render: function() {
        return (
            <div>
                <AdminListUI />
            </div>
        );    
    }    
});

module.exports = AdminList;
