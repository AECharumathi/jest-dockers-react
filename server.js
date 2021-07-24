const jsonServer = require('json-server');
const server = jsonServer.create();
const _ = require('lodash')
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8001;
    
server.use(middlewares);
server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter({
    '/api/usersEnquired': '/usersEnquired'
}));
    
server.post('/api/usersEnquired', (req, res) => {
    const db = router.db; // Assign the lowdb instance
    console.log("hello")
    if (Array.isArray(req.body)) {
        req.body.forEach(element => {
            insert(db, 'usersEnquired', element); // Add a post
        });
    }
    else {
        insert(db,'usersEnquired', req.body); // Add a post
    }
    res.sendStatus(200)
    
    /**
     * Checks whether the id of the new data already exists in the DB
     * @param {*} db - DB object
     * @param {String} collection - Name of the array / collection in the DB / JSON file
     * @param {*} data - New record
     */
    function insert(db, collection, data) {
        const table = db.get(collection);
        if (_.isEmpty(table.find(data).value())) {
            table.push(data).write();
        }
    }
});
    
server.use(router);
server.listen(port);