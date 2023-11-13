const http = require('http')
const data = require('./data')
var angka = 1
const cetak1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (angka == 1){
            resolve('program berhasil');
            }else{
            reject('program gagal');
            }
        }, 1000 * 5);
});
}

// async function cetak() {
//     // Implementasikan logika pencetakan di sini
//     return 'Hasil pencetakan';
//   }

var server = http.createServer(async (req, res) => {
    const gabung = data
    .filter(item => item.year === 2022)
    .sort((a, b) => a.car.localeCompare(b.car))

    console.log(await cetak1());

    gabung.forEach(item => {
        res.write(`${item.car}, ${item.model}, ${item.year}\n`);
      });

    res.end();
})

const port = 3000;
server.listen(port, ()=> {
    console.log(`Server berjalan didalam http://localhost:${port}`);
});