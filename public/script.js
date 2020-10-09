
//var url = "https://api.nasa.gov/planetary/apod?api_key=";
//let api_key = "Ysb2skbhVBdjbwhlaQOPkJegj1iUslWg0jj2hh1N";

let searchButton = document.querySelector('#search')

searchButton.addEventListener('click', ()=>{
    console.log('button pressed');
    sendApiRequest()

});


async function sendApiRequest(){
    let api_key = "Ysb2skbhVBdjbwhlaQOPkJegj1iUslWg0jj2hh1N";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data) {
    
    document.querySelector("#img").innerHTML += `<img src="${data.url}">`
    document.querySelector("#explanation").innerHTML += data.explanation
}

