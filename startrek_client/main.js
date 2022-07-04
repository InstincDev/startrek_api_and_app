document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:7000/api/${alienName}`)
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}