let data = [
    'sultik',
]

let wrapperlists = document.getElementById("wrapper-lists")
let btn = document.getElementById("btn")

function getData() {
    data.map((item) => {
        let list = document.createElement("btn")
        let inputRadio = document.createElement("input")
        inputRadio.type = "radio"
        let text = document.createElement("p")
        text.innerHTML = item

        list.appendChild(inputRadio)
        list.appendChild(text)
        list.classList.add('list')

        wrapperlists.appendChild(list)
    })

}
getData()

btn.addEventListener('click', () => {
    if (input.value.trim()) {
        data.push(input.value)
        console.log(data);

        input.value = ''
        getData()
    } else {
        alert('iputga yozing')
    }
})