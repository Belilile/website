function submitMessage() {
    const url = "http://127.0.0.1:5000/hammermurder";
    const requestData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http"
        }
    }
    
    fetch(url, requestData)
    .then((response) => response.text())
    .then((text) => console.log(text));
}


const el = document.querySelector("#submitmessage");
el.addEventListener('click', submitMessage);
