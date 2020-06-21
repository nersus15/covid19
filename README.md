# covid19
Project untuk submission kelas Belajar Fundamental Front End Web dari Dicoding
Didalam simple project ini topik utama nya adalah tracking data covid-19 (global)
Menggunakan beberapa teknologi:

1. Custom Web Component dengan javascript
2. Webpack untuk menyatukan semua resource (html, css, js, gambar)
3. Load data dengan cara Asynchronous
4. Penulisan javascript dengan ES6
5. Babel untuk menterjemahkan syntax javascript agar compatible dengan semua browser
6. Modul untuk generate modal otomatis (hasil coba coba😅)

## Bonus:
* Membuat server dan route sederhana dengan node.js(express)

## Untuk menjalankan projectnya di komputer lokal:
1. Clone/ download project
2. Extract dan masuk ke folder project di terminal
3. Ktikan npm install
4. kemudian setelah proses selesai, lanjutkan dengan mengetik npm run build
5. Setelah selesai, ktikan npm run start:dev untuk menjalankan webpack dev server yang berfungsi untuk membuat lokal server yang nantinya akan otomatis reload ketika ada perubahan source code

Untuk file node.server.js bisa dihapus jika menjalankan di server lokal, kemudian hapus "express" dari daftar dependencies dan juga hapus key 'start' di object scripts

Untuk melihat hasilnya bisan mengunjungi
[Demo](https://c-19-kamscode.herokuapp.com/)

Sumber data (Api):

Affected country: https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected
Latest stat by country: https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country={nama negara}
Selengkapnya di: https://rapidapi.com/astsiatsko/api/coronavirus-monitor
