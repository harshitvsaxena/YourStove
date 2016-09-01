var React = require('react');
var AdminBlogDisplay = require('../../ui/admin/AdminBlogDisplay');

var AdminAdd = React.createClass({
    renderJQuery: function() {

        $(".summernote").summernote({
            minHeight: 500,
            maxHeight: null
        });

    },
    componentDidMount: function() {
        this.renderJQuery();
    },
    render: function() {
        return (
            <div>
                <AdminBlogDisplay />
            </div>
        );    
    }    
});

module.exports = AdminAdd;
