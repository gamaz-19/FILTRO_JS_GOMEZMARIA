function buscarPersonaje() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest();
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${nombreUsar}`
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                let data = JSON.parse(xhr.responseText);
                console.log(data);
                console.log("holi")
                if (data) {
                    
                    let daticos = data.description;
                    for (let i = 0; i < daticos.length; i++) {
                        let div = document.getElementById("resultados");
                        console.log(daticos,"holi");
                        div.innerHTML+= `
                        <div class="card">
                            <img src="${daticos[i]["#IMG_POSTER"]}" alt="">
                            <h3>${daticos[i]["#TITLE"]}</h3>
                        </div>` 
                    };
                }
            }
            catch (err) {
                alert("no")
            }
        } 
        
        };
        xhr.send();
    };

buscarPersonaje();



