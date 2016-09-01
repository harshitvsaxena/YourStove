var React = require('react');
var AdminBlogDisplay = require('../../ui/admin/AdminBlogDisplay');

var AdminModify = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return ({
            id: '',
            title: '',
            type: '',
            shortDescription: '',
            label: '',
            category: [],
            article: '',
            coverPic: '',
            profilePic: ''
        });   
    },
    checkBlogId: function() {
        
        var that = this;
        if (this.state.id === '' || this.state.id === null || this.state.id === 'undefined') {
            that.context.router.push({
                pathname: '/admin/login/list'
            });
        }
        console.log(this.state);

    },
    getBlogData: function() {
    
       $.ajax({
            url: "http://localhost:8124/get_all_blogs",
            method: "GET",
            data: {id: this.state.id},
            success: function(data) {

                if (data.status) {
                
                    

                } else {

                    alert("Error! \nContact Developer!!!");

                }
            }
        }).bind(this);
   
    },
    componentWillMount: function() {

        var query = this.props.location.query; 
        var that = this;
        if (typeof query.blogId !== 'undefined') {
            that.setState({
                id: query.blogId
            });
        }
        console.log()

    },
    componentDidMount: function() {
        
        this.checkBlogId();
        //console.log(query);
        //console.log(this.state);
         
    },
    render: function() {
        return (
            <div>
                <AdminBlogDisplay
                    id={this.state.id}
                    title={this.state.title}
                    type={this.state.type}
                    shortDescription={this.state.shortDescription}
                    label={this.state.label}
                    category={this.state.category}
                    article={this.state.article}
                    coverPic={this.state.coverPic}
                    profilePic={this.state.profielPic}
                />
            </div>
        );    
    }    
});

module.exports = AdminModify;
