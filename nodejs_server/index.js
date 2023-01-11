// const http = require('http');
// const url = require('url');
// const fs = require('fs');


// const hostname = '127.0.0.1';
// const port = 3000;

// const html = fs.readFileSync('./index.html', 'utf-8');

// const server = http.createServer((req, res) => {
//     const { query, pathname } = url.parse(req.url, true);

//     console.log(req.path)
//     if (pathname === "/random") {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         })
//         res.end(html)
//     }
//     // console.log(query)

//     // console.log(req.method)
//     else if (pathname === "/") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.writeHead(200, {'my-own-header': 'mine'})
//         res.end(
//         '<html><h1>hello World</h1></html>');
//     }
    
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// import the  modules
const http = require('http');
const fs = require('fs');
const url = require('url');

// Declare our port and host
const hostname = "127.0.0.1";
const port = 3000;

const overview = fs.readFileSync('./templates/overview.html', 'utf-8');
const productHtmlFile = fs.readFileSync('./templates/template-product.html', 'utf-8')
const api = fs.readFileSync('./data/data.json', 'utf-8')
// create a new server
const server = http.createServer((req, res) => {
    // console.log(req)
    const { query, pathname } = url.parse(req.url, true);

    if (pathname === '/' || pathname === '/overview') {
        // res.setHeader('Content-Type', 'text/plain');
        // if (query) {
        //     all_queries = {
        //         car: query.car,
        //         fruit: query.fruit,
        //         country: query.country
        //     }

        //     console.log(all_queries)
        // }
        
        res.writeHead(200, 
            {
                "Content-Type": "text/html",
                "my-personal-header": "whatever  want"
            })
        // res.end("<html><h1>Our first server or whatever we put here</h1></html>");
        res.end(overview)
        } else if (pathname === '/product') {
            const id = Number(query.product_id)
            console.log(id)
            const dataArray = JSON.parse(api)
            let newProductHtml; 
            // console.log(dataArray)
            dataArray.forEach((el) => {
                if (el.id === id) {
                    newProductHtml = productHtmlFile.replace(/{%PRODUCTNAME%}/g, el.productName)
                    newProductHtml = newProductHtml.replace(/{%DESCRIPTION%}/g, el.description)
                    newProductHtml = newProductHtml.replace(/{%PRICE%}/g, el.price)
                }
            })

            res.writeHead(200, 
                {
                    "Content-Type": "text/html",
                    "my-personal-header": "whatever  want"
                })
                res.end(newProductHtml)

    
        } else if (pathname === '/api') {
            res.writeHead(200,
                {
                "Content-Type": "application/json"
        })
        res.end(api)
        

        } else {
            res.writeHead(404, 
                {
                    "Content-Type": "text/html"
                })
            res.end("<html><h1>Page Not Found</h1>")
        }
    
    
});


// Tell our server to listen on the specified port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
