class DigiClock extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="digiClock">
                <span class="tgl"></span>
                <span class="jam"></span>
            </div>`;
    }
}
customElements.define('digi-clock', DigiClock);