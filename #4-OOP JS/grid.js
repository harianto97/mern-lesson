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


