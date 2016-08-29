var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function AdminList(props) {
 
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 col-sm-1 hidden-xs'></div>
                <div className='col-md-8 col-sm-10 col-xs-12'>
                    <div className='table-responsive'>
                        <br />
                        <table className='table table-bordered' id='blogs-list'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Label</th>
                                    <th>Likes</th>
                                    <th>Publish Date</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Label</th>
                                    <th>Likes</th>
                                    <th>Publish Date</th>
                                    <th>Modify</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className='col-md-2 col-sm-1 hidden-xs'></div>
            </div>
        </div>
    );
}

module.exports = AdminList;
