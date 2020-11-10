import { Server } from 'http';
const s = Server((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers',
        'Content-Type': 'application/json'});
    if (req.url === '/result4/') {
    let data = '';
    req
    .on('data', chunk => {
        data+=chunk;
    })
    .on('end', ()=>res.end(JSON.stringify(
        {
        "message" : "rozpadyuka",
        "x-result" : req.headers["x-test"],
        "x-body" : data
        }))
    );
} else {res.end('OK\n')};
});

s.listen(80);
