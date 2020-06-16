import 'bootstrap/dist/css/bootstrap.css';
import './scripts/component/app-bar';
import main from './scripts/data/main.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './scripts/component/content.js';
import dt from 'datatables.net-bs4/';

// Inisialisasi Datatables
dt(window, $);

//  End

// Menambahkan element heading
$('body').append('<content-heading></content-heading>');
$('content-heading')[0].data = {title: "Corona Virus Realtime Data", subtitle: "Update every 10 minutes"};

// End 

$(document).ready(main);