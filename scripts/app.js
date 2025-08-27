function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`
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
                            <img src="${data["results"][i]["image"]}" alt="">
                            <h3>${data["results"][i]["name"]}</h3>
                            <p><strong>Status:</strong>${data["results"][i]["status"]}</p>
                            <p><strong>Species:</strong>${data["results"][i]["species"]}</p>
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