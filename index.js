
async function api_call(){
    let response = await fetch("https://pixabay.com/api/?key=10057780-3190006b8a15797f5e46d7464&q=football&image_type=photo&imageHeight=500&imageWidth=500&per_page=100");
    let data = await response.json()
    return data;
}

function add_data(data){
    var main_div = document.getElementsByClassName("main_div")

    for(var k = 0; k < data.length; k++){
        console.log(data[k])
        var divs = document.createElement("div")
        divs.className += 'a'

        var img = document.createElement("img")
        img.src = data[k]["userImageURL"]

        var inner_div = document.createElement("div")
        inner_div.className += 'txt'
        inner_div.innerHTML = "Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil."

        divs.appendChild(img)
        divs.appendChild(inner_div)

        main_div[0].appendChild(divs)

    }
    
    console.log(data)
}


api_call()
.then(data => add_data(data.hits)); 