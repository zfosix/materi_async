const http = require('http');
// Common JS / ESM - Ecmascript
const {testFunction, newFunction} = require('./function');
const { resolve } = require('path');

// Promise
const printAgakTelat = () => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve('Sudah sampai');
               // reject('Saya kena tilang pak');
          }, 1000 * 5);
     });
}

var server = http.createServer(async(req, res) => {
     switch (req.url){
          case '/about':
               testFunction();
               newFunction('Ini berasal dari parameter');
          console.log('Saya Otw')
          const value = await printAgakTelat()
          // .then((value) => {
          console.log(value);w
          console.log('Ngopi')
          // })
          .catch((error) => console.log(error));
          res.write('Ini about');
          res.end();
          break;
          case '/contact':
          testFunction();
          newFunction();
          res.write('Ini contact');
          res.end();
          break;
     default:
          res.write('404 Not Found');
          res.end();
     }     
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});




// // CommonJS / ESM - Ecmascript
// const http = require('http');
// const {testFunction, newFunction} = require('./function');
// const { error } = require('console');

// // Promise
// const printAgakTelat = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Sudah Sampai');
//             reject('Saya Kena Tilang');
//         }, 1000 * 5);
//     });
// }

// var server = http.createServer(async(req, res) => {
//     switch (req.url) {
//         case '/about':
//             testFunction();
//             newFunction('Ini berasal dari parameter');
//             console.log('Saya OTW');
//             const value = await printAgakTelat();
//             console.log(value);
//             console.log('Ngopi');
//             res.write('Ini about');
//             res.end();
//             break;
//         case '/contact':
//             res.write('Ini contact');
//             res.end();
//             break;
//         default:
//             res.write('404 Not Found');
//             res.end();
//             break;
//     }

//     // if (req.url == '/about') {
//     //     res.write('Ini about');
//     //     res.end();
//     // } else if (req.url == '/contact') {
//     //     res.write('Ini contact');
//     //     res.end();
//     // } else {
//     //     res.write('404 Not Found');
//     //     res.end();
//     // }
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server berjalan di http://localhost:${port}`);
// });