var React = require('react');
var AdminListUI = require('../../ui/admin/AdminList');

var AdminList = React.createClass({
    render: function() {
        return (
            <div>
                <AdminListUI />
            </div>
        );    
    }    
});

module.exports = AdminList;
