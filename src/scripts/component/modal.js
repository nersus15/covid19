import ModalGen from '../modal/modal.js';
import modalConf from '../../../config/modal.config.js';
import moment from 'moment';

class Modal extends HTMLElement {
    sebelumRender(){
        const {modalId, wrapper, opt} = modalConf["country-detail"];
        const textMap = {
            'total_tests': 'Total test yang dilakukan',
            'total_cases': 'Total Kasus',
            'active_cases': 'Total yang Dirawat',
            'total_recovered': 'Total Sembuh',
            'serious_critical': 'Kasus Kritis',
            'total_deaths': 'Total Meninggal'               
        };

        opt.modalTitle= "Detail Kasus di Negara " + this._data.country_name;
        opt.modalSubtitle = "Update pada: " + moment(this._data.record_date).format('LL LT')
        opt.modalBody.card.forEach((card, index)=> {
            opt.modalBody.card[index].subtitle = this._data[card.id];
            opt.modalBody.card[index].title = textMap[card.id];
        })
        const html = ModalGen.generateModal(modalId, wrapper, opt);
        $.when(this.render(html)).done(() => {
            this.setelahRender(modalId);
        })
    }

    set buat(data) {
        this._data = data.latest_stat_by_country[0];
        this.sebelumRender();
    }
    
    setelahRender(modalid){
        $("#" + modalid).modal('show');
        $("#" + modalid).on('hidden.bs.modal', () => {
            $('modal-detail').remove();
        })
    }
    render(html){
        this.innerHTML = html;
    }
}
customElements.define('modal-detail', Modal);