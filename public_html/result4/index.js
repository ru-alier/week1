import { Server } from 'http';
// import 'fast-json-stable-stringify';
const s = Server((req, res) => {
    let data = '';
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers',
        'Content-Type': 'application/json'});
    debugger;
    req
    .on('data', chunk => {
        data+=chunk;
    })
    .on('end', ()=>
    res.end(JSON.stringify({
        "message" : "rozpadyuka",
    "x-result" : req.headers["x-test"],
    "x-body" : data
    }))
    );
});
s.listen(80);