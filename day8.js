function addElement(){
    let newElement = document.createElement('p')
    newElement.innerHTML = 'New Element'
    document.getElementById('new').appendChild(newElement)
}

/*const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addContent);*/

function addContent(){
    const text = document.getElementById('textInput').value
    document.getElementById('list').innerHTML += `<h1>${text}</h1>`

    /*let text = document.getElementById('textInput').value
    let newDiv = document.createElement('div')
    let newContent = document.createTextNode(text)
    newDiv.appendChild(newContent)

    let currentDiv = document.getElementById('div1')
    document.body.insertBefore(newDiv, currentDiv)*/
}

/*function submit(){
    let text = document.getElementById('textInput').value
    document.getElementById('result').innerHTML = text
}*/

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((json) => console.log(json))*/

async function fetchData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.json();

    const titleList = document.getElementById('titleList')
    for(let i = 0; i < json.length; i++){
        titleList.innerHTML += `<h3>${json[i].title}</h3>`
    }
}
fetchData()