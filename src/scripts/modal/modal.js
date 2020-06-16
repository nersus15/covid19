import path from 'path';
class ModalGen {
    // stored_modal = {}
    set storeModal(params) {
        this._storedModal[params.key] = params.modal;   
    }
    
    static generateModal (modalId, wrapper, opt) { 
        let body = "";
        let foot = "";

        if(!opt.type)
            opt.type = "nonForm";
        if(!modalId){
            alert("Id Modal harus di isi!");
            return;
        }
        if(!opt){
            alert("Opt harus di isi!");
            return;
        }

        if(!opt.modalTitle)
            opt.modalTitle = "Untitled";
        if(opt.modalBody)
           body += this.tambahkanBody(opt.type, opt);
        
        if(opt.modalFooter){
            opt.modalFooter.forEach(el => {            
                var id = !el.id ? "": el.id; 
                var data = el.data ? el.data : "";                  
                foot += `<button ${data} type = "${el.type}" id = "${id}" class = "${el.class}"> ${el.text} </button>`;
            });
        }

        var modalTemplate = 
            `<div class="modal fade" id="${modalId}" tabindex="-1" role="dialog">
                <div class="modal-dialog ${opt.size}" role="document">
                    <div class="modal-content">
                        <div class="modal-header d-block">
                            <div class = 'd-flex'>
                                <h5 class="modal-title"> ${opt.modalTitle}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <h6 class = "modal-title text-muted"> ${opt.modalSubtitle} </h6>
                        </div>
                        <div class="modal-body">${body}</div>
                        <div class="modal-footer">${foot}</div>
                    </div>
                </div>
            </div>`;
    
        if(opt.open)
            opt.tulis = true;

        if(opt.tulis)
            $(wrapper).append(modalTemplate);

        if(opt.open)
            $("#" + modalId).modal('show');
    
        if(opt.destroy)
            $("#" + modalId).on('hidden.bs.modal', opt.saatTutup);
        
        $("#" + modalId).on('shown.bs.modal', opt.saatBuka);
        if(opt.kembali)
            return modalTemplate;
    }
    static tambahkanBody (type, opt){
        let bodyEl = '';
        let inputEl = "";
        const cardEl = opt.modalBody.card;
        const input = opt.modalBody.input;
        if(type == 'form'){
            var form = opt.formOpt;
            if(!form.formId)
                form.formId = 'noId'
            if(!form.enctype)
                form.enctype = '';
            if(!form.formMethod)
                form.formMethod = "POST";

            input.forEach(element => {
                if(element.type == 'select')
                    inputEl += this.generateSelect(element);
                else    
                    inputEl += this.generateInput(element);
            });

            bodyEl += `<div class="modal-body">
                        <form enctype = "${form.enctype}" id ="${form.formId}" method = " ${form.formMethod}" action = "${form.formAct}">
                            ${inputEl}
                        </form>
                    </div>`;
            
            return bodyEl;
        }

        else if (type == 'detail') {
            let card = "";
            if(opt.modalBody.cardDisplay == 'grid')
                card += '<div class="row row-cols-1 row-cols-md-2">';
            
            cardEl.forEach(element => {
                card += '<div class="col mb-4">';
                card += this.generateCard(element);
                card += '</div>';
            });

            if(opt.modalBody.cardDisplay == 'grid')
                card += '</div>';

            bodyEl += card + '</div>';   

        }else{
            input.forEach(element => {
                if(element.type == 'select')
                    inputEl += this.generateSelect(element);
                else    
                   inputEl += this.generateInput(element);
            });
            bodyEl += `
                <div class="modal-body">
                    ${inputEl}
                </div>`;
            
            
        }
        return bodyEl;
    }
    
    static generateCard(el){
        let card = "";
        let cardHead = "";
        let Topimage = '';
        let Bottomimage = '';
        let Leftimage = '';
        let Rightimage = '';
        let links = "";
        let buttons = "";
        if(!el.styles)
            el.styles = '';

        if(!el.class)
            el.class = '';

        if(el.width == 'standart' || !el.width)
            cardHead += `<div id="${el.id}" class="card ${el.class}" style="width: 18rem; ${el.styles}">`;
        else 
            cardhead += `<div id="${el.id}" class="card ${el.class}" style="width: ${el.width}; ${el.styles}">`;

        if(el.images){
            el.images.forEach(image => {
                if(!image.styles)
                    image.styles = '';
                if(image.class)
                    image.class = '';

                if(image.position == 'top')
                    Topimage += `<img class="${image.class}" style="${image.styles}" src="${image.src}" class="card-img-top" alt="${image.alt}">`;

                if(image.position == 'left')
                    Leftimage += `<img class="${image.class}" style="${image.styles}" src="${image.src}" class="card-img-top" alt="${image.alt}">`;

                if(image.position == 'bottom')
                    Bottomimage += `<img class="${image.class}" style="${image.styles}" src="${image.src}" class="card-img-top" alt="${image.alt}">`;
                
                if(image.position == 'right')
                    Rightimage += `<img class="${image.class}" style="${image.styles}" src="${image.src}" class="card-img-top" alt="${image.alt}">`;
            });
        }

        if(!el.title)
            el.title = '';
        
            if(!el.subtitle)
            el.subtitle = ''

        if(!el.text)
            el.text = '';
        
        if(el.buttons && el.buttons.length > 0){
            el.buttons.forEach(button =>{
                if(button.type == 'link')
                    buttons += `<a id="${button.id}" ${extra} href="${button.link}" class="btn ${button.class}">${button.text}</a>`;
                else
                    buttons += `<button id="${button.id}" ${extra} type="${button.type} clbuttonss="btn ${button.class}">${button.text}</button>`;
            })
        }
        if(el.links && el.links.length > 0){
            el.links.forEach(link => {
                links += `<a href="${link.href}" ${link.extra} id="${link.id}" class="card-link ${link.class}">${link.text}</a>`;
            })
        }
            if(!Leftimage && !Rightimage){
                card += 
                    `${cardHead}
                        <div class="card-body">
                            ${Topimage}
                            
                            <h5 class="card-title">${el.title}</h5>
                            <h6 class="card-subtitle mb-2">${el.subtitle}</h6>
                            <p class="card-text">${el.text}</p>
                            ${links}
                            ${buttons}
                            ${Bottomimage}
                        </div>
                    </div>`;
            }else{
                card += `
                ${cardHead}
                    <div class="card-body">
                        <div style='display: flex'> 
                            ${Leftimage}                        
                            <div style="margin-left: 2%">
                                <h5 class="card-title">${el.title}</h5>
                                <h6 class="card-subtitle mb-2">${el.subtitle}</h6>
                                <p class="card-text">${el.text}</p>
                            </div>
                            ${Rightimage}
                        </div>
                        ${links}
                        ${buttons}                        
                    </div>
                </div>`
            }




        return card;  
    }
    static generateSelect (el) {
        var options = Object.keys(el.options);
        var selectOpt = '';
        var id = !el.id ? el.name : el.id;
        options.forEach((opt, index) => {
            selectOpt += `<option value = "${opt}"> ${el.options[opt]}</option>`;
        });
        var select = `
            <div class = "form-group">
                <label class = "control-label" for = "${id}"> ${el.label}</label>
                <select name = "${el.name}" id = "${id}" class = "${el.class}" >
                    ${selectOpt}
                </select>
            </div>`;        
        return select
    }
    static generateInput (el) {
        var id = !el.id ? el.name : el.id;
        var placeholder = el.placeholder ? el.placeholder : "";
        if (el.type == 'file'){
            return `
                <div class="input-group col-sm-7">
                    <span class="input-group-btn">
                        <span class="btn btn-default btn-file">
                            Browse… <input type="${el.type}" name="${el.name}" id="${id}">
                        </span>
                    </span>
                    <input type="text" class="form-control" readonly>
                </div>`     
        }
        else
            return `<div class = "form-group"> <label class= "control-label" for = "${id}"> ${el.label} </label> <input name = "${el.name}" type = "${el.type}" id = "${id}" class = "${el.class}" placeholder = "${placeholder}"> </div>`;
    }

    get getModal(){
        return this._storedModal;
    }
}

export default ModalGen;