fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=94d0235861c54cc1be4fb98fd9e7779c`)
  .then(res => res.json())
  .then(res => {
    if (res.status==='error'){
      throw new Error(res.message);
    } else {
    document.getElementById('dataNews').innerHTML = render (res)
    }
  })
  .catch(err => {
    document.getElementById('dataNews').innerHTML = handlerError(err)
  });


const button = document.querySelector('.tombol');
button.addEventListener('click', function(){
  let textSearch = document.querySelector('.textsearch');
  fetch(`https://newsapi.org/v2/everything?q=${textSearch.value}&language=id&apiKey=94d0235861c54cc1be4fb98fd9e7779c`)
  .then(res => res.json())
  .then(res => {
    if (res.status==='error'){
      throw new Error(res.message);
    } else {
    document.getElementById('dataNews').innerHTML = render (res)
    }
  })
  .catch(err => {
    document.getElementById('dataNews').innerHTML = handlerError(err)
  });
});


function render(res) {
  let news = res.articles;
  let open = `<div class="row row-cols-1 row-cols-md-3 g-1">`;
  let close = `</div>`;
  news.forEach(data => {
    open += `
    <div class="col">
      <div class="card border-gray mb-2" style="width: 18rem;">
        <img src="${data.urlToImage}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data.source.name} - ${data.publishedAt}</h6> 
          <p class="card-text">${data.description}</p>
          <a href="${data.url}" class="btn btn-success">Lanjutkan Membaca...</a>
          </div>
        </div>
      </div>
    ` 
  })
  return open+close;
}

function handlerError(err) {
  let pesan = `
  <div class="text-center">
  <p>${err}</p>
  </div>
  `
  return pesan;
}