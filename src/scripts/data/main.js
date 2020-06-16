import Sources from './source.js';
import '../component/tabel.js';
import '../component/modal.js';
import '../component/content.js';
import '../component/about.me.js';
const main = ()=>{
    let reload = setInterval(init, 600000);
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
            image: 'https://www.dicoding.com/images/small/avatar/2019040917343047ff214c7a8d07ee3b5aea1f6451b1fd.jpg',
            name: "Fathurrahman",
            alamat: 'Desa Sukarara, Kec. Sakra Barat, Kab. Lombok Timur, NTB, Indonesia',
            tglLahir: '24 Agustus 1999',
            kampus: 'Universitas Bumigora, Mataram',
            email: 'fathur.ashter15@gmail.com',
            dicoding: 'https://www.dicoding.com/users/402401',
            github: 'https://www.github.com/nersus15',
            facebook: 'https://web.facebook.com/fathur.ashter15',
            instagram: 'https://www.instagram.com/fathur_ashter15/'
        }
        $('.heading #err-detail').remove();
        $('.container').children().remove();
        $('.container').append('<about-me></about-me>');
        $('about-me')[0].buat = aboutMe;
        
    }

    const renderTable = data =>{
        $('.heading #err-detail').remove();
        $('.container').children().remove();
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

    async function init () {
        try{
            $('.container').append('<h4>Loading...</h4>');
            const res = await Sources.getAffectedCountry();  
            renderTable(res)
        }
        catch(err){
            $('.container').children().remove();
            $('.container').append(`<h2> ${err} </h2>`);
        }
    }
    init();

    $('#home').click(() => {
        reload = setInterval(init, 600000)
        $('content-heading')[0].data = {title: "Corona Virus Realtime Data", subtitle: "Update every 10 minutes"};
        init();
    });

    $('#about-me').click(()=>{
        clearInterval(reload);
        $('content-heading')[0].data = {title: "Fathurrahman"};
        renderAbout();
    })
    
}
export default main;

