const getdata = (url, success) => {    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){
            success(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url, true);
    xhr.send();    
};

const success = (data)=> {
    data.forEach(function(d) {
        document.getElementById("datas").innerHTML +=
        `<tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.username}</td>
            <td>${d.email}</td>
            <td>${d.address.street} ${d.address.suite} ${d.address.city}</td>
            <td>${d.company.name}</td>
        </tr>`        
    });
}

getdata("https://jsonplaceholder.typicode.com/users/",success);
