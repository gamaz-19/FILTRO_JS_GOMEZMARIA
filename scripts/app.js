function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest();
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${nombreUsar}&tt`
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                let data = JSON.parse(xhr.responseText);
                if (data.results && data.results.length > 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML+= `
                        <div class="card">
                            <img src="${data["description"][i]["#IMG_POSTER"]}" alt="">
                            <h3>${data["description"][i]["name"]}</h3>
                            <p><strong>Status:</strong>${data["description"][i]["#TITLE"]}</p>
                            <p><strong>Species:</strong>${data["description"][i]["species"]}</p>
                        </div>`
                        console.log(data)
                    };
                }
                }
                catch(err){
                    alert("no ")
                }
            }
        };
        xhr.send();
    }