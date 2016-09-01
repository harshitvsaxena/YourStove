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
                    <p>
                        <br />
                        Category: 
                        <select id='blog-type' className='form-control' value={typeof props.type !== 'undefined'?props.type:""}>
                            <option value=''>-- Select One --</option>
                            <option value='quick-cook'>Quick Cooks</option>
                            <option value='eat-out'>Eat Outs</option>
                        </select>
                        <br />
                        Name:
                        <input id='blog-title' className='form-control' type='text' placeholder="Article Name" />
                        <br />
                        Short Description: 
                        <textarea id='blog-shortDescription' className='form-control' placeholder='Short Description'></textarea>
                        <br />
                        Label: 
                        <input id='blog-label' className='form-control' type="text" placeholder='Label' />
                        <br />
                        Categories:
                        <input id='blog-category-1' className='form-control' type='text' placeholder='Category-1' />
                        <input id='blog-category-2' className='form-control' type='text' placeholder='Category-2' />
                        <input id='blog-category-3' className='form-control' type='text' placeholder='Category-3' />
                        <br />
                        Profile Pic: 
                        <input type='file' className='btn btn-default' />
                        <br />
                        Cover Pic: 
                        <input type='file' className='btn btn-default' />
                    </p>            

                    <hr />
                    <h3>Write</h3>
                    <div className='summernote'>Write here.</div>
                    
                    <hr />
                    <input className='btn btn-lg btn-success' type='button' value='Publish' /> 
                   
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
    coverPic: PropTypes.string,
    profilePic: PropTypes.string

}

module.exports = AdminBlogDisplay;
