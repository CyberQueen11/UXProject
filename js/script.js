async function getBooksBySubject(subject) {
    const LIMIT = 100
    let resp = await fetch(`https://openlibrary.org/subjects/${subject}.json?limit=${LIMIT}`)
    let json = await resp.json()

    let bookList = []
    bookList.push(json.works)

    let bookContainer = document.getElementById('books')
    for (let i = 0; i < 10; i++) {
        let bookDiv = document.createElement('div')
        let randBook = (bookList[0][(Math.floor(Math.random()*100))])

        console.log(randBook)

        bookDiv.textContent = randBook.title + " - " + randBook.authors[0].name
        bookContainer.appendChild(bookDiv)
    }
}

getBooksBySubject('fiction')