module.exports = {
    host: function() {
        return get_db_host();
    },
    port: function() {
        return get_db_port();
    },
    name: function() {
        return get_db_name();
    }
} 

function get_db_host() {
    return 'localhost';
}

function get_db_port() {
    return '32769'; //Alias of port 28015 -> given by docker
}

function get_db_name() {
    return 'YourStove';
}
