async function getBooksBySubject(subject) {
    const LIMIT = 100
    let resp = await fetch(`https://openlibrary.org/subjects/${subject}.json?limit=${LIMIT}`)
    let json = await resp.json()

    let bookList = []
    bookList.push(json.works);

    let bookContainer = document.getElementById('books')

    let randNumChecker = []

    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * LIMIT);

        //Check if book has already been pushed
        if (randNumChecker.includes(randomNum)) {
            //Bring back looper and restart current loop
            i--;
            continue
        } else {
            randNumChecker.push(randomNum)
        }

        let bookDiv = document.createElement('div')
        let randBook = (bookList[0][randomNum])


        console.log(i + " " + randBook)

        bookDiv.textContent = i + ". " + randBook.title + " - " + randBook.authors[0].name
        bookContainer.appendChild(bookDiv)
    }

    randNumChecker = []
}

getBooksBySubject('fiction')