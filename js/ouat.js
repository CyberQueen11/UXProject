
async function getBooksText(text) {
    console.log("getBookToSearch() is called")
    const LIMIT = 5
    let resp = await fetch(`https://openlibrary.org/search/inside.json?q="${textToSearch}"&limit=${LIMIT}`)
    let json = await resp.json()

    let bookTextList = []

    if (resp.ok) {
        console.log("Fetching text data from Open Library...")

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

const textToSearch = "is this for real?";

//getBooksText(textToSearch);


let bookRevealList = [];

async function getBookByTime(time) {
    let subjectSet = new Set(); // Use a Set to store unique subjects

    const LIMIT = 100;
    let offset = 0;
    console.log("getBookByTime() is called and running...");
    
    let numFound = 0;

    do {
        console.log("Fetching getBookByTime data from Open Library with offset: " + offset);
        
        // Make the fetch request with the current offset
        let resp = await fetch(`https://openlibrary.org/search.json?time=${time}&language=eng&limit=${LIMIT}&offset=${offset}`);
        let json = await resp.json();

        // Check if the response is ok
        if (resp.ok) {
            numFound = json.numFound;
            if (numFound > 0) {
                console.log(numFound + " books found");
            } else {
                console.log("No books found");
                console.log("Shutting down program...");
                break; // Exit the loop if no books are found
            }

            // Process each book in the current response
            for (const element of json.docs) {
                let subjects = element.subject;
                for (const subElement of subjects) {
                    subjectSet.add(subElement); // Add each subject to the Set
                }
            }

            // Increment the offset for the next request
            offset += LIMIT;
        } else {
            console.log("Error fetching data:", json.error);
            console.log("Shutting down program...");
            break; // Exit the loop if there's an error
        }
        
    } while (offset < numFound); // Continue fetching until we've retrieved all books

    // Convert the Set back to an array if needed
    let subjectList = [...subjectSet];
    console.log(subjectList);
}

const timeTest = "10th_century";
getBookByTime(timeTest);

//
async function getBookByThing(thing){}

async function getBookByPlace(place){}


async function getBookByChoices(time, thing, place) {
    const LIMIT = 100;
    let offset = 0;
    console.log("getBookByChoices() is called and running...");
    
    let numFound = 0;

    do {
        console.log("Fetching getBookByChoices data from Open Library with offset: " + offset);
        
        // Make the fetch request with the current offset
        let resp = await fetch(`https://openlibrary.org/search.json?time=${time}&subject="${thing}"&place=${place}&language=eng&limit=${LIMIT}&offset=${offset}`);
        let json = await resp.json();

        // Check if the response is ok
        if (resp.ok) {
            numFound = json.numFound;
            if (numFound > 0) {
                console.log(numFound + " books found");
            } else {
                console.log("No books found");
                break; // Exit the loop if no books are found
            }

            // Process each book in the current response
            for (let i = 0; i < json.docs.length; i++) {
                let title = json.docs[i].title;
                let author = json.docs[i].author_name;
                console.log(title + " - " + author);
            }

            // Increment the offset for the next request
            offset += LIMIT;
            console.log(offset)
        } else {
            console.log("Error fetching data:", json.error);
            break; // Exit the loop if there's an error
        }
        
    } while (offset < numFound); // Continue fetching until we've retrieved all books
}

const time = "20th_century";
const thing = "travel";
const place = "istanbul";
//getBookByChoices(time, thing, place);
