var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function AdminBlogDisplay(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 col-sm-1 hidden-xs'></div>
                <div className='col-md-8 col-sm-10 col-xs-12'>
                    <h2>Add Blog</h2>
                    
                    <hr /> 
                    <h3>Basic Details</h3>
                    <form onSubmit={props.onSubmitBlog} encType="multipart/form-data">
                        <p>
                            <br />
                            Category: 
                            <select id='blog-type' className='form-control' value={props.type} onChange={props.onUpdateType}>
                                <option value=''>-- Select One --</option>
                                <option value='quick-cook'>Quick Cooks</option>
                                <option value='eat-out'>Eat Outs</option>
                            </select>
                            <br />
                            Name:
                            <input id='blog-title' className='form-control' type='text' placeholder="Article Name" value={props.title} onChange={props.onUpdateTitle} />
                            <br />
                            Short Description: 
                            <textarea id='blog-shortDescription' className='form-control' placeholder='Short Description' value={props.shortDescription} onChange={props.onUpdateShortDescription} />
                            <br />
                            Label: 
                            <input id='blog-label' className='form-control' type="text" placeholder='Label' value={props.label} onChange={props.onUpdateLabel} />
                            <br />
                            Categories:
                            <input id='blog-category-1' className='form-control' type='text' placeholder='Category-1' value={props.category[0]} onChange={props.onUpdateCategory} />
                            <input id='blog-category-2' className='form-control' type='text' placeholder='Category-2' value={props.category[1]} onChange={props.onUpdateCategory} />
                            <input id='blog-category-3' className='form-control' type='text' placeholder='Category-3' value={props.category[2]} onChange={props.onUpdateCategory} />
                            <br />
                            Profile Pic: 
                            <input type='file' className='btn btn-default' name="profilePic" onChange={props.onUpdateProfilePic} />
                            <br />
                            Cover Pic: 
                            <input type='file' className='btn btn-default' name="coverPic" onChange={props.onUpdateCoverPic} />
                        </p>            

                        <hr />
                        <h3>Write</h3>
                        <div className='summernote'>{((props.article==='undefined')||(props.article===''))?'Write here.':props.article}</div>
                        <hr />
                        <input className='btn btn-lg btn-success' type='submit' value='Publish' /> 
                    </form>

                    <hr />
                    <br /><br />
                    
                </div>
                <div className='col-md-2 col-sm-1 hidden-xs'></div>
            </div>
        </div>
    );
}

AdminBlogDisplay.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    shortDescription: PropTypes.string,
    label: PropTypes.string,
    category: PropTypes.array,
    article: PropTypes.string,
    profilePic: PropTypes.object,
    coverPic: PropTypes.object,
    onUpdateTitle: PropTypes.func.isRequired,
    onUpdateType: PropTypes.func.isRequired,
    onUpdateShortDescription: PropTypes.func.isRequired,
    onUpdateLabel: PropTypes.func.isRequired,
    onUpdateCategory: PropTypes.func.isRequired,
    onUpdateArticle: PropTypes.func.isRequired,
    onUpdateProfilePic: PropTypes.func.isRequired,
    onUpdateCoverPic: PropTypes.func.isRequired,
    onSubmitBlog: PropTypes.func.isRequired
}

module.exports = AdminBlogDisplay;
