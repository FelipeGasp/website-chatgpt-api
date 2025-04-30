

async function sendPrompt(){
    const titulo = document.getElementById("title").value;
    const autor = document.getElementById("author").value;
    console.log("Titulo: " + titulo);
    console.log("Autor: " + autor);
    console.log("Enviando prompt...");
    fetch(`/prompt?titulo=${titulo}&autor=${autor}`,{
        method: 'GET',
        headers: {
            contentType: 'application/json'
        }
    }).then((response)=>{
        console.log("teste")
    })
}