import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/js/solid.js'
class AboutMe extends HTMLElement{
    set buat(data){
        this._data = data;
        this.render();
    }

    render(){
        this. innerHTML = `
            <div class="row">
            <div class="col-xs-12 col-sm-7 col-md-7">
                <div class="well well-sm">
                    <div class="row">
                        <div class="col-sm-6 col-md-6">
                            <img src="${this._data.image}" alt="Photo Profile" class="img-rounded img-responsive" />
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <h4>${this._data.name}</h4>
                            <small><cite title="${this._data.alamat}">${this._data.alamat} <i class="fas fa-map-marker-alt"></i>
                            </i></cite></small>
                            <p>
                                <i class="fas fa-gift"></i> ${this._data.tglLahir}
                                <br />
                                <i class="fas fa-envelope"></i> ${this._data.email}
                                <br />
                                <i class="fas fa-school"></i> ${this._data.kampus}
                                <br />
                                Dicoding: <a target="_blank" href="${this._data.dicoding}">${this._data.dicoding.replace('https://', '')}</a> <br/>
                                </p>
                            <!-- Split button -->
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="socials" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Social
                                </button>
                                <div class="dropdown-menu" aria-labelledby="socials">
                                    <a class="dropdown-item" target="_blank" href="${this._data.instagram}">Instagram</a>
                                    <a class="dropdown-item" target="_blank" href="${this._data.facebook}">Facebook</a>
                                    <a class="dropdown-item" target="_blank" href="${this._data.github}">Github</a>
                                    <a class="dropdown-item" target="_blank" href="${this._data.linkedin}">Linkedin</a>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
customElements.define('about-me', AboutMe);