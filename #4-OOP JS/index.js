import { Table, Card } from "./lib";

// Data Table
const myTable = new Table({
    columns: ["Name", "Email", "Phone Number", "Address"],
    data: [
      ["Indra Wendah", "indrah.wendah@gmail.com", "085792343411", "Jl. Taman Engganu No.12, Gresik"],
      ["Muzayyin A.", "zayin-almuza@gmail.com", "089777321124", "Cibuluh, Bogor Utara Kota Bogor"],
      ["Paulen Aulia", "aulia.paulen04.@gmail.com", "082365416623", "Jl. Imam Bonjol No.112, Madiun"]
    ]
});
const dataTable = document.getElementById("table");
myTable.render(dataTable);

// Data Card
const myCard = new Card({
    data: [
      ["asset/html.png", "About HTML", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat totam itaque dolores consequatur, fuga commodi, mollitia laboriosam amet blanditiis neque aliquid at assumenda debitis provident."],
      ["asset/css.png", "About CSS", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat totam itaque dolores consequatur, fuga commodi, mollitia laboriosam amet blanditiis neque aliquid at assumenda debitis provident."],
      ["asset/js.png", "About JavaScript", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat totam itaque dolores consequatur, fuga commodi, mollitia laboriosam amet blanditiis neque aliquid at assumenda debitis provident."]
    ]
  });
  const dataCard = document.getElementById("card");
  myCard.render(dataCard);