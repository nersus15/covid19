import 'bootstrap/dist/css/bootstrap.css';
import './scripts/component/app-bar';
import main from './scripts/data/main.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './scripts/component/content.js';
import dt from 'datatables.net-bs4/';
import './scripts/component/clock.js';  
// Inisialisasi Datatables
dt(window, $);

//  End

// Menambahkan element heading
$('.other-menus').append('<digi-clock></digi-clock>');
$('body').append('<content-heading></content-heading>');
$('content-heading')[0].data = {title: "Corona Virus Data Monitoring"};

// End 

$(document).ready(main);