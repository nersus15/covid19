class Content extends HTMLElement{

    set data (data){
        this._data = data;
        if(!this._data.subtitle)
            this._data.subtitle = "";
        this.render();
    }
    render(){
        this.innerHTML = "";
        this.innerHTML = `
            <div class="content">
                <div class="heading" style="margin: 100px 30%; text-align: center">
                    <h2>${this._data.title}</h2>
                    <small style="font-size: 15px">${this._data.subtitle}</small>
                    <p id="date-update" style="color: #353030;"></p>
                </div>
                <div class="main">
                    <div class="container">
                        
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('content-heading', Content)
