var React = require('react');
var AdminModifyUI = require('../../ui/admin/AdminModify');

var AdminModify = React.createClass({
    render: function() {
        return (
            <div>
                <AdminModifyUI />
            </div>
        );    
    }    
});

module.exports = AdminModify;
