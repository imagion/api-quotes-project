import './style.css'

async function getQuote() {
  const res = await fetch('https://api.quotable.io/quotes/random')
  return res.json()
}

async function newQuote() {
  try {
    const data = await getQuote()

    const app = document.querySelector('#app')
    const quote = document.createElement('div')
    quote.classList.add('wrapper')
    quote.innerHTML = `<q class="self-start text-xl pl-6 border-l-4 border-fuchsia-300 h-[3.5rem]">${data[0].content}</q>`

    const author = document.createElement('p')
    author.classList.add('author')
    author.innerHTML = `${data[0].author}`

    const button = document.createElement('button')
    button.classList.add('button')
    button.innerHTML = `Another Quote`
    button.addEventListener('click', () => {
      app.innerHTML = ''
      newQuote()
    })

    quote.appendChild(author)
    quote.appendChild(button)
    app.appendChild(quote)
  } catch (e) {
    console.error(e)
  }
}
newQuote()
