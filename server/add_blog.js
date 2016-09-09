module.exports = {
    result: function(req, res) {
        return addBlog(req, res);
    }
};

function addBlog(req, res) {
    
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

                //Timestamp
                if(!Date.now) {
                    Date.now = function() { return new Date().getTime(); }
                }

                var categoryArr = req.body.category.split(",");
               
                //TODO:
                //Add aws sdk for saving images instead of rethinkdb binary
                r.db(db_config.name()).table('Blogs').insert({

                    title: req.body.title, 
                    type: req.body.type,
                    shortDescription: req.body.shortDescription,
                    label: req.body.label,
                    category: categoryArr,
                    article: req.body.article,
                    publishDate: Date.now(),
                    likes: 0,
                    profilePic: r.binary(req.files.profilePic[0].buffer),
                    coverPic: r.binary(req.files.profilePic[0].buffer)

                }).run(connection, function(err, data) {

                    if (err) {

                        result.status = false;
                        result.err = err;
                        res.json(result);

                    } else {

                        result.status = true;
                        result.data = "inserted";
                        res.json(result);

                    }

                });

            }

        }

    });

}
