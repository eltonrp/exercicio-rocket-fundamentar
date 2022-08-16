//parentNode e parentElement
//selecionam o elemento pai
const body = document.querySelector('body')

console.log(body)
console.log(body.parentNode)
console.log(body.parentElement)

//childNodes e children
//retornam elementos filhos
//childNodes em forma de NodesList e consideram espaços vazio como elementos text
//children retornam como HTNLCollection e eliminam espaços em vazio
//porém, com NodeList é possível rodar forEach
const elements = document.querySelector('header')

console.log(elements)
console.log(elements.childNodes)
console.log(elements.children)

//firstChild e firstElementChild
//firstChild considera espaço vazio
//firstElementChild não considera espaço vazio
console.log(body.firstChild)
console.log(body.firstElementChild)

//lastChild e lastElementChild
//retornam o último elemento filho
console.log(body.lastChild)
console.log(body.lastElementChild)

//nextSibling e nextElementSibling
//retornam o próximo elemento irmão
//nextSibling considera espaço vazio
//nextElementSibling não considera espaço vazio
const header = document.querySelector('header')

console.log(header.nextSibling)
console.log(header.nextElementSibling)


//previousSibling e previousElementSibling
//previousSibling considera espaço vazio
//previousElementSibling não considera espaço vazio
const el = document.querySelector('body script')

console.log(el)
console.log(el.previousSibling)
console.log(el.previousElementSibling)

//Adicionando elemento na página
//createElement
const div = document.createElement('div')
div.innerText = 'Div criada com createElement'

//append e prepend
//essa variável body foi criada acima
//append adiciona o elemento como último filho
//prepend adiciona o elemento como primeiro filho
// body.append(div)
body.prepend(div)

//insertBefore
//adiciona elemento antes
const h2 = document.createElement('h2')
h2.innerText = 'Elemento h2 com createElement'
const script = body.querySelector('script')
console.log(script)
// body.insertBefore(h2, script)

//criando um insertAfter
body.insertBefore(h2, header.nextSibling)
h2.addEventListener('mouseover', red)
h2.addEventListener('mouseout', black)
function red() {
  h2.style.color='red'
}
function black(){
  h2.style.color='black'
}
const input = document.querySelector('input')
input.addEventListener('keyup', function(event) {
  console.log(event.currentTarget.value)
})
console.log(input)
