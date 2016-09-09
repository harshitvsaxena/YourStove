var React = require('react');
var AdminBlogDisplay = require('../../ui/admin/AdminBlogDisplay');

var AdminAdd = React.createClass({
    getInitialState: function() {
        return {
            title: '',
            type: '',
            shortDescription: '',
            label: '',
            category: [],
            article: '',
            coverPic: {},
            profilePic: {}
        }
    },
    renderJQuery: function() {

        $(".summernote").summernote({
            minHeight: 500,
            maxHeight: null
        });

    },
    handleUpdateTitle: function(e) {
        this.setState({
            'title': e.target.value
        });
    },
    handleUpdateType: function(e) {
        this.setState({
            'type': e.target.value 
        });
    },
    handleUpdateShortDescription: function(e) {
        this.setState({
            'shortDescription': e.target.value
        });
    },
    handleUpdateLabel: function(e) {
        this.setState({
            'label': e.target.value
        });
    },
    handleUpdateCategory: function(e) {
        
        var that = this;
        switch (e.target.id) {
            
            case 'blog-category-1': that.state.category[0] = e.target.value; break;
            case 'blog-category-2': that.state.category[1] = e.target.value; break;
            case 'blog-category-3': that.state.category[2] = e.target.value; break;

        }

    },
    handleUpdateArticle: function(e) {
        var tmpValue = $('.summernote').summernote('code');
        this.state.article = tmpValue;
        return true;
    },
    handleUpdateProfilePic: function(e) {
        this.setState({
            profilePic: e.target.files
        });
    },
    handleUpdateCoverPic: function(e) {
        this.setState({
            coverPic: e.target.files
        });
    },
    handleSubmitBlog: function(e) {
        e.preventDefault();
        
        if (this.handleUpdateArticle()) {

            var data = {
                'title': this.state.title,
                'type': this.state.type,
                'shortDescription': this.state.shortDescription,
                'label': this.state.label,
                'category': this.state.category,
                'article': this.state.article,
                'coverPic': this.state.coverPic,
                'profilePic': this.state.profilePic
            };

            this.submitToDatabase(data);

        } else {
            
            alert('Was not able to submit. Please click publish again to retry.');

        }

    },
    submitToDatabase: function(data) {
        
        var formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("type", this.state.type);
        formData.append("shortDescription", this.state.shortDescription);
        formData.append("label", this.state.label);
        formData.append("category", this.state.category);
        formData.append("article", this.state.article);
        
        $.each(this.state.profilePic, function(key, value) {
            formData.append("profilePic", value);
        });
        
        $.each(this.state.coverPic, function(key, value) {
            formData.append("coverPic", value); 
        });
        
        $.ajax({
            url: '//localhost:8124/add_blog',
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false,
            success: function(data, textStatus, jqXHR) {
                if(typeof data.error === 'undefined') {
                    // Success
                    alert('success');
                } else {
                    alert("Error: " + data.error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Error: " + textStatus);
            }
        });
    },
    componentDidMount: function() {
        this.renderJQuery();
    },
    render: function() {
        return (
            <div>
                <AdminBlogDisplay
                    title={this.state.title}
                    type={this.state.type}
                    shortDescription={this.state.shortDescription}
                    label={this.state.label}
                    category={this.state.category}
                    article={this.state.article}
                    coverPic={this.state.coverPic}
                    profilePic={this.state.profilePic}
                    onUpdateTitle={this.handleUpdateTitle}
                    onUpdateType={this.handleUpdateType}
                    onUpdateShortDescription={this.handleUpdateShortDescription}
                    onUpdateLabel={this.handleUpdateLabel}
                    onUpdateCategory={this.handleUpdateCategory}
                    onUpdateArticle={this.handleUpdateArticle}
                    onUpdateCoverPic={this.handleUpdateCoverPic}
                    onUpdateProfilePic={this.handleUpdateProfilePic}
                    onSubmitBlog={this.handleSubmitBlog}
                />
            </div>
        );    
    }    
});

module.exports = AdminAdd;
