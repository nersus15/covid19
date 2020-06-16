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
                    },
                    {
                        id: 'total_cases',
                    },
                    {
                        id: 'active_cases',
                    },
                    {
                        id: 'total_recovered',
                    },
                    {
                        id: 'serious_critical',
                    },
                    {
                        id: 'total_deaths',
                    }
                ]
            }
        }
    }    
}
export default modalConf;