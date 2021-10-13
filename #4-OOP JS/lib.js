// Library Table
class Table {
    constructor(init) {
      this.init = init;
    }
  
    tableHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    tableBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
          </tr>
        `;
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.tableHeader(this.init.columns) +
        this.tableBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
}

// Library Card
class Card {
    constructor(init) {
      this.init = init;
    }
  
    dataCard(data) {
      let open = `<div class="row row-cols-1 row-cols-md-3 g-1">`;
      let close = `</div>`;
  
      data.forEach((d) => {
        open += `
        <div class="col">
          <div class="card border-danger mb-2" style="width: 18rem;">
            <img src="${d[0]}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${d[1]}</h5>
              <p class="card-text">${d[2]}</p>
            </div>
          </div>
        </div>
        `;
      });
  
      return open + close;
    }  
      
  
    render(element) {
      let card = this.dataCard(this.init.data);
      element.innerHTML = card;
    }
}

export { Table, Card };

