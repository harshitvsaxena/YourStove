module.exports = {
    result: function(req, res) {
        return getAllBlogs(req, res);
    }
};

function getAllBlogs(req, res) {
    
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

                r.db(db_config.name()).table('Blogs').pluck('id', 'title', 'type', 'label', 'likes', 'publishDate').run(connection, function(err, cursor) {

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

                                result.status = true;
                                result.data = data;
                                res.json(result);

                            }

                        });

                    }

                });

            }

        }

    });

}
