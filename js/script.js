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

const textToSearch = "is this for real?";

async function getBooksText(text) {
    console.log("getBookToSearch() is called")
    const LIMIT = 5
    let resp = await fetch(`https://openlibrary.org/search/inside.json?q="${textToSearch}"&limit=${LIMIT}`)
    let json = await resp.json()

    let bookTextList = []

    if (resp.ok) {
        console.log("Fetching text data from books...")

        // Check if json.hits exists before accessing its properties
        if (json.hits && json.hits.hits) {
            for (let i = 0; i < LIMIT; i++) {
                let title = json.hits.hits[i].fields.meta_title[0];

                if (bookTextList.includes(title)) {
                    continue;
                } else {
                    bookTextList.push(title);
                    console.log(title);

                }
            }
        } else {
            console.log("No hits found in the response.");
        }

        console.log(bookTextList.length + " books found with the text '" + textToSearch + "'");
    } else {
        console.log(resp.statusText)
    }
}

getBooksText(textToSearch);
