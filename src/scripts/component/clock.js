class DigiClock extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'})
    }

    set buat(data){
        this.render();
    }

    render(){
        this.shadow.innerHTML = `
            <div class="digiClock">
                <p class="btn btn-primay">ada</p>
                <span class="tgl"></span>
                <span class="jam"></span>
            </div>`;
    }
}
customElements.define('digi-clock', DigiClock);