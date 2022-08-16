// Uso do Slice e Splice
let array = ['pera', 'uva', 'mAçã', 'salADA mista', 'carne', 'ovos']
console.log(array)
console.log(array.length)
console.log(array.indexOf('mAçã'))
console.log(array.slice(1, 3))
array.splice(1, 1)
console.log(array)

// document.writeln(array) => printa p array sem formatação

// Função printa o array Capitalizado e com índice
const arrayPrint = (array) => {
  array.forEach((element, index) => {
    document.getElementById('list').innerHTML += '<h2>' + (index + 1) + ': ' + element[0].toUpperCase() + element.substring(1).toLowerCase() + '</h2>'
  });
}
let count = 1
const arrayPrint2 = (array) => {
  for (element of array) {
    document.getElementById('list').innerHTML += '<h2>' + count + ': ' + element[0].toUpperCase() + element.substring(1).toLowerCase() + '</h2>'
    count++
  }
}

arrayPrint(array)
arrayPrint2(array)

function Dog(specie, name, age) {
  this.breed = specie
  this.name = name
  this.age = age
  this.attack = function () {
    if (this.name == 'Loki') {
      return `${this.name} está soltando gases fétidos`
    } else {
      return `${this.name} está prestes a te morder`
    }
  }
}
const loki = new Dog('Franchie Bulldog', 'Loki', 13, 1)
const jorge = new Dog('Rottweiller', 'Jorge', 20, 15)
console.log(loki, jorge)

const date = new Date('2022-04-19 0:00')
console.log(date)

const word = 'paralelepípedo'
console.log(Array.from(word))

sayMyName(loki.name)

function sayMyName(name) {
  document.getElementById("demo").innerHTML = name
}

var math = {
  'factorial': function factorial(n) {
    if (n <= 1)
      return 1;
    return n * factorial(n - 1);
  }
};

console.log(math.factorial(5))

const whoIsThis = (name) => {
  document.getElementById('demo2').innerHTML = name
  console.log(name)
}

whoIsThis('Elton')

function whoIsThere(name) {
  console.log('Antes da callback')
  name()
  console.log("Depois da callback")
}

whoIsThere(
  () => {
    console.log('Dentro de uma callback')
  }
);

// Função autoexec => dá erro se a expressão anterior não finaliza com ;
(function () {
  console.log('Função auto executável')
})()

console.log(1 + 1 == 2 ? 'correto' : 'larga a mão de ser burro bicho')

let user = new String('Elton')
user.surName = 'Possidonio'
let age = new Number(38)
age.bornDate = new Date('1984-04-19 0:00')
console.log(age.bornDate.__proto__)
console.log(user, (age.bornDate.toLocaleDateString()))

delete user.surName
console.log(user)

let condicional = 'algo'

switch (condicional) {
  case 'algo':
    console.log('algo')
    break
  case 'outra coisa':
    console.log('outra coisa')
    break
  default:
    console.log('default')
    break
}

function myName(name = '') {
  if (name === '') {
    throw new Error('Nome necessário')
  }
  console.log(name)
}

try {
  myName('')
} catch (e) {
  console.log(e)
}
console.log('Continua...')

for (let i = 1; i <= 10; i++) {
  if (i === 8) {
    continue
  }
  console.log('for: ', i)
}

let i = 27895643258
while (i > 20) {
  console.log('while: ', i)
  i /= 20
}

let char = 'Marley'
for (let letter of char) {
  console.log(letter)
}

let chars = ['Marley', 'John', 'Michael', 'Roy']
for (let char of chars) {
  console.log(char)
}

let person = {
  name: 'John',
  age: 38,
  weight: 88.6
}

for (let property in person) {
  console.log(property + ': ' + person[property])
}


//Exercício Fluxo de Caixa Familiar
let family = {
  incomes: [1000, 3200, 250.43, 360.45, 5382.54],
  expenses: [320.34, 128.45, 176.87, 1450.00, 4368]
}

function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const positive = total >= 0

  let balanceText = 'NEGATIVO'

  if (positive) {
    balanceText = 'POSITIVO'
  }

  console.log(`Seu saldo está ${balanceText}, R$ ${total.toFixed(2)}`)
}

calculateBalance()

// Exercíco Celsius <-> Fahrenheit
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  //fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  //fluxo normal F -> C
  let upgradeDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
  let degreeSign = 'C'

  //fluxo alternativo
  if (celsiusExists) {
    upgradeDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => celsius * 9 / 5 + 32
    degreeSign = 'F'

  }

  return formula(upgradeDegree) + degreeSign

}
try {
  console.log(transformDegree('10c'))
  console.log(transformDegree('50f'))
  console.log(transformDegree('50cf'))
  console.log(transformDegree('50z'))
} catch (error) {
  console.log(error)
}

function getDegree(degree) {
  const isCelsiusDegree = degree.toUpperCase().includes('C')
  const isFahrenheitDegree = degree.toUpperCase().includes('F')
  if (isCelsiusDegree) {
    degree = Number(degree.toUpperCase().replace('C', ''))
    if (isNaN(degree)) {
      throw new Error('Grau inválido')
    } else {
      let formula = celsius => celsius * 9 / 5 + 32
      return formula(degree) + 'F'
    }
  } else if (isFahrenheitDegree) {
    degree = Number(degree.toUpperCase().replace('F', ''))
    if (isNaN(degree)) {
      throw new Error('Grau inválido')
    } else {
      formula = fahrenheit => (fahrenheit - 32) * 5 / 9
      return formula(degree).toFixed(2) + 'C'
    }
  } else {
    throw new Error('Grau não identificado')
  }
}

try {
  console.log(getDegree('60f'))
  console.log(getDegree('0c'))
  // console.log(getDegree('30'))
  console.log(getDegree('50ff'))
} catch (error) {
  console.log(error.message)
}
// const stringTeste = '50cc'
// const numTeste = Number(stringTeste.toUpperCase().replace('C', ''))
// console.log(isNaN(numTeste))

//Exercício Buscando e encontrando dados em Array
/* 
  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
      • Contar o número de categorias e o número de livros em cada categoria
      • Contar o número de autores
      • Mostrar livros do autor Auguto Cury
      • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategory = booksByCategory.length
console.log('Total de categorias:', totalCategory)

//total de livros por categoria
for(let category of booksByCategory) {
  console.log(`Total de livros da categoria ${category.category}:`, category.books.length)
}

//total de autores
function countAuthors() {
  let authors = []
  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log(authors)
  console.log(`Total de autores: ${authors.length}`)
}

countAuthors()

//Mostrar livros do autor Auguto Cury
function booksOfAugustoCury() {
  let books = []
  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === 'Augusto Cury') {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros de Augustu Cury: ${books.join(', ')}`)
}

booksOfAugustoCury()

//função que recebe o nome do autor
function booksOfAuthor(author) {
  let books = []
  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === author) {
        books.push(book.title)
      }
    }
  }
  if(books.length > 0){
    console.log(`Livros de ${author}: ${books.join(', ')}`)
  } else console.log(`Não foram encontrados livros do author(a) ${author}`)
}

booksOfAuthor('Stephen R. Covey')