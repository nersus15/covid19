import patientIcon from '../src/images/patient.svg';
import criticalIcon from '../src/images/critical.svg';
import recoveredIcon from '../src/images/recovered.svg';
import deathIcon from '../src/images/death.svg';
import hospitalBedIcon from '../src/images/hospital-bed.svg';
import bloodTestIcon from '../src/images/blood-test.svg';

const modalConf = {
    "form" : {
         modalId: "modalID",
         wrapper: ".generated-modals",
         opt: {
            type: 'form',
            open: true,
            destroy: true,
            saatBuka: ()=>{
                $(document).on('change', '.btn-file :file', function() {
                    var input = $(this),
                        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');

                    input.trigger('fileselect', [label]);
                    });
                    
                    $('.btn-file :file').on('fileselect', function(event, label) {
                        
                    var input = $(this).parents('.input-group').find(':text'),
                        log = label;
                    
                    if( input.length ) {
                        input.val(log);
                    } else {
                        if( log ) alert(log);
                    }
                
                });
                function readURL(input) {
                    window.file = input.files;
                    // console.log(input.files[0]);
                    // if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onloadend = function (e) {
                            console.log(e.target.result)
                            // $('#img-'+id).attr('src', e.target.result);
                        }
                        
                    //     reader.readAsDataURL(input.files[0]);
                    // }
                }
        
                $("#inputFile").change(function(){
                    readURL(this);
                    
                }); 	
            } ,
            saatTutup: (e)=>{
                e.preventDefault();
                $("#" + e.target.id).remove();
            },
            formOpt: {
                enctype: 'multipart/form-data',
                formId: "idFomrModal",
                formAct: "aturwah",
                formMethod: 'POST',
            },
            modalTitle: "Modal Hasil Generate",
            modalBody: [
                // {label: "Select", type: 'select', name: 'tesSelect', class: 'form-control', options: {'satu dua' : 'Satu atau dua', 'dua tifa' : 'dua atau tiga'}},
                {label: "Input File", type: 'file', name: 'newVideo', id: "inputFile", style: {

                }},
            ],
            modalFooter: [
                {type: 'reset', data: 'data-dismiss="modal"', text: 'Batal', id: "batal", class: "btn btn btn-warning" },
                {type: 'button', text: 'Upload', id: "upload", class: "btn btn btn-primary" }
            ]
        }
    },
    "country-detail":{
        modalId: "country-detail",
        wrapper: ".generated-modals",
        opt: {
            size: 'modal-lg',
            type: 'detail',
            kembali: true,
            saatBuka: ()=>{} ,
            saatTutup: (e)=>{},
            modalTitle: "Detail Country",
            modalBody: {
                cardDisplay: 'grid',
                card: [      
                                
                    {
                        id: 'total_tests',
                        styles: "background-color: #f2d411; color: white;",
                        images: [
                            {src: bloodTestIcon, alt: 'total test icon', position: 'left', styles: 'width: 70px;'},
                        ]
                    },
                    {
                        id: 'total_cases',
                        styles: "background-color: #f74114; color: white",
                        images: [
                            {src: patientIcon, alt: 'total cases icon', position: 'left', styles: 'width: 70px;'},
                        ]
                    },
                    {
                        id: 'active_cases',
                        styles: "background-color: #eb265a; color: white",
                        images: [
                            {src: hospitalBedIcon, alt: 'active cases icon', position: 'left', styles: 'width: 70px;'},
                        ]
                    },
                    {
                        id: 'total_recovered',
                        styles: "background-color: #32cf0a; color: white",
                        images: [
                            {src: recoveredIcon, alt: 'total recovered icon', position: 'left', styles: 'width: 70px;'},
                        ]
                    },
                    {
                        id: 'serious_critical',
                        styles: "background-color:#046e91; color: white",
                        images: [
                            {src: criticalIcon, alt: 'serious critical icon', position: 'left', styles: 'width: 70px;'},
                        ]
                    },
                    {
                        id: 'total_deaths',
                        styles: "background-color: #910404; color: white",
                        images: [
                            {src: deathIcon, alt: 'total deaths icon', position: 'left', styles: 'width: 70px;'},
                        ]
                    }
                ]
            }
        }
    }    
}
export default modalConf;