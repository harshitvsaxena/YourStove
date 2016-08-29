var React = require('react');
var AdminAddUI = require('../../ui/admin/AdminAdd'); 

var AdminAdd = React.createClass({
    render: function() {
        return (
            <div>
                <AdminAddUI />
            </div>
        );    
    }    
});

module.exports = AdminAdd;
