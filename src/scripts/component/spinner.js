class Spinner extends HTMLElement {
    set buat (styles){
        if(!styles.color)
            styles.color = 'text-dark';

        if(!styles.width)
            styles.width = '2';
        
        if(!styles.height)
            styles.height = '2';
        
        if(!styles.type)
            styles.type = 'spinner-border';

        this._styles = styles;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="text-center">
            <span style = "" class="${this._styles.color}">Loading...</span>
            <br/>
            <div class="${this._styles.type} ${this._styles.color}" style="width: ${this._styles.width}rem; height: ${this._styles.width}rem;" role="status">
                </div>
            </div>
        `;
    }
}

customElements.define('bt-spinner', Spinner);