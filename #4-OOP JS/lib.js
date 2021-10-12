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

const table = new Table({
    columns: ["Name", "Email", "Phone Number", "Address"],
    data: [
      ["Indra Wendah", "indrah.wendah@gmail.com", "085792343411", "Jl. Taman Engganu No.12, Gresik"],
      ["Muzayyin A.", "zayin-almuza@gmail.com", "089777321124", "Cibuluh, Bogor Utara Kota Bogor"],
      ["Paulen Aulia", "aulia.paulen04.@gmail.com", "082365416623", "Jl. Imam Bonjol No.112, Madiun"]
    ]
});
const libTable = document.getElementById("table");
table.render(libTable);


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

const card1 = new Card({
  data: [
    ["asset/html.png", "About HTML", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat totam itaque dolores consequatur, fuga commodi, mollitia laboriosam amet blanditiis neque aliquid at assumenda debitis provident."],
    ["asset/css.png", "About CSS", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat totam itaque dolores consequatur, fuga commodi, mollitia laboriosam amet blanditiis neque aliquid at assumenda debitis provident."],
    ["asset/js.png", "About JavaScript", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat totam itaque dolores consequatur, fuga commodi, mollitia laboriosam amet blanditiis neque aliquid at assumenda debitis provident."]
  ]
});
const libCard = document.getElementById("card");
card1.render(libCard);


