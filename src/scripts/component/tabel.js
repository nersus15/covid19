import main from "../data/main";

class Tabel extends HTMLElement{
    set buat(d){
        this._data = d;
        this.render();
    }
    render(){
        let rows = "";
        this._data.forEach((data, index) => {
            rows += `<tr>
                        <td>${index +1}</td>
                        <td>${data}</td>
                        <td>
                            <button data-item = "${data}" class = "btn detail-country btn-sm btn-outline-info"> Detail </button>
                        </td>
                    </tr>`;
        });
        
        this.innerHTML = `
            <table id = "tbl-affected-country" class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                <tbody>                
            </table>`;
    }
}
customElements.define('affected-country', Tabel);