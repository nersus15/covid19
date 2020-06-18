import Sources from './source.js';
import '../component/tabel.js';
import '../component/modal.js';
import '../component/content.js';
import '../component/about.me.js';
import '../component/spinner.js';
import photoProfile from '../../images/profile.jpg';
const main = ()=>{
    const spinnerStyles = {
        color: 'text-info',
        width: '3', //dalam rem
        height: '3', // dalam rem
        type: 'spinner-grow'

    };
    let reload = setInterval(getAffectedCountry, 600000);
    const applyDatatables = () => {
        $('#tbl-affected-country').DataTable({
            "columnDefs": [ {
                "targets": 2,
                "createdCell": (td, cellData, rowData, row, col) => {
                    $(td).click(() => {
                        detailCountry($(cellData).data('item'));                        
                    })                  
                }
              } ]
        })
    }
    const renderAbout = () =>{
        const aboutMe = {
            image: photoProfile,
            name: "Fathurrahman",
            alamat: 'Desa Sukarara, Kec. Sakra Barat, Kab. Lombok Timur, NTB, Indonesia',
            tglLahir: '24 Agustus 1999',
            kampus: 'Universitas Bumigora, Mataram',
            email: 'fathur.ashter15@gmail.com',
            dicoding: 'https://www.dicoding.com/users/402401',
            github: 'https://www.github.com/nersus15',
            facebook: 'https://web.facebook.com/fathur.ashter15',
            instagram: 'https://www.instagram.com/fathur_ashter15/',
            linkedin: 'https://www.linkedin.com/in/fathurrahman-fathurrahman-417921173/',
        }
        $('.heading #err-detail').remove();
        $('bt-spinner').remove();
        $('.container').append('<about-me></about-me>');
        $('about-me')[0].buat = aboutMe;
        
    }

    const renderTable = data =>{
        $('.heading #err-detail').remove();
        $('bt-spinner').remove();
        $('.container').append('<affected-country></affected-country>');
        $.when($('affected-country')[0].buat = data).done(applyDatatables);

    } 

    const detailCountry = async country => {
        try{
            const detail = await Sources.getDataByCountry(country);
            $('.generated-modals').append('<modal-detail><modal-detail>');
            $('modal-detail')[0].buat = detail;
        }
        catch (err){
            $('.heading').after(`<h2 id="err-detail">${err}</h2>`);       
        }
    }

    async function getAffectedCountry () {
        try{
            tampilkanSpinner('.container');
            const res = await Sources.getAffectedCountry();  
            renderTable(res)
        }
        catch(err){
            $('.container').children().remove();
            $('.container').append(`<h2> ${err} </h2>`);
        }
    }

    const updateJam = ()=>{
        moment().locale('id');
        $('digi-clock .tgl').html(moment().format('LL'));
        $('digi-clock .jam').html(moment().format('LTS'));
        setTimeout(updateJam, 1000);
    }

    const tampilkanSpinner = (el) => {
        $(el).append('<bt-spinner></bt-spinner>');
        $('bt-spinner')[0].buat = spinnerStyles;
    }

    updateJam();
    getAffectedCountry();

    $('#home').click(() => {
        reload = setInterval(getAffectedCountry, 600000)
        $('content-heading')[0].data = {title: "Corona Virus Realtime Data", subtitle: "Update every 10 minutes"};
        getAffectedCountry();
    });

    $('#about-me').click(()=>{
        clearInterval(reload);
        $('content-heading')[0].data = {title: "Fathurrahman"};
        renderAbout();
    })
    
}
export default main;

