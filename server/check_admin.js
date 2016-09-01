module.exports = {
    result: function(req, res) {
        return checkAdmin(req, res);
    }
};

function checkAdmin(req, res) {
    
    var result = { status: false, data: null, err: null };
    var status,data,error;

    var r = require('rethinkdb');
    var db_config = require('../server/db_config');
    var connection = null;

    r.connect({

        host: db_config.host(),
        port: db_config.port()

    }, function(err, conn) {

        if (err) {

            result.status = false;
            result.err = err;
            res.json(result);

        } else {

            connection = conn;

            if (connection) {

                r.db(db_config.name()).table('Admins').filter({username: req.body.username, password: req.body.password}).run(connection, function(err, cursor) {

                    if (err) {

                        result.status = false;
                        result.err = err;
                        res.json(result);

                    } else {

                        cursor.toArray(function(err, data) {

                            if (err) {

                                result.status = false;
                                result.err = err;
                                res.json(result);

                            } else {

                                if(data.length === 0) {
                                    //Login fail
                                    result.status = false;
                                } else {
                                    //Login pass
                                    result.status = true;
                                }
                                //result.data = data;
                                res.json(result);

                            }

                        });

                    }

                });

            }

        }

    });

}
