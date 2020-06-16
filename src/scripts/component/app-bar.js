import './clock.js';
class AppBar extends HTMLElement{
    connectedCallback(){
        this._digiStyle = {

        }
        this.render();
    }
    
    render(){
        this.innerHTML =
        `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <p style="cursor: pointer;" id = "home" class="navbar-brand" href="#">Covid-19</p>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <p style="cursor: pointer;" id ="about-me" class="nav-link">About Me</p>
                    </li>
                </ul>
            </div> 
            <div class="other-menus pull-right"> 
            </div>
            <button class="navbar-toggler left" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        `;

    }
}
customElements.define('app-bar', AppBar);