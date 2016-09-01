var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function AdminHeader(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 col-sm-1 hidden-xs'></div>
                <div className='col-md-8 col-sm-10 col-xs-12'>
                    <h1>YourStove - Admin Panel</h1>
                    <hr />
                    <ul className='nav nav-tabs'>
                        <li className={props.location==='/admin/login/list'?"active":""}>
                            <Link to='/admin/login/list'>Browse</Link>
                        </li>
                        <li className={props.location==='/admin/login/add'?"active":""}>
                            <Link to='/admin/login/add'>Write</Link>
                        </li>
                    </ul> 
                </div>
                <div className='col-md-2 col-sm-1 hidden-xs'></div>
            </div>
        </div>
    );
}

AdminHeader.propTypes = {
    location: PropTypes.string.isRequired
};

module.exports = AdminHeader;
