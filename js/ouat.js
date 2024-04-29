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
                console.log(`${numFound} books found with ${time} time`);

            } else {
                console.log("No books found");
                console.log("Shutting down getBookByTime program...");
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
            console.log("Shutting down getBookByTime program...");
            break; // Exit the loop if there's an error
        }
        
    } while (offset < numFound); // Continue fetching until we've retrieved all books

    // Convert the Set back to an array if needed
    let subjectList = [...subjectSet];
    console.log(subjectList);
    return subjectList;
}

const timeTest = "10th_century";//Users drop down choice


async function checkObject(object){
    let searchWord = new RegExp(`\\b${object}\\b`, 'i'); // Use RegExp constructor to create regex(regular expression)

    let subjects = await getBookByTime(timeTest);

    try {
        if(subjects.length > 0) {
            if(subjects.some(word => searchWord.test(word))){
                console.log(`The array contains the word '${object}'.`);
                return true;
                //Then show object in drop down menu
            } else {
                console.log(`The array does not contain the word '${object}'`);
                return false;
                //Do not show object in drop down menu
            }
        } else {
            console.log("No subjects fetched.");
        }
    } catch (error) {
        console.error("Error fetching subjects:", error);
    }
}

const objectTest = "book";

if(checkObject(objectTest)){ //If the word is found then look for books
    getBookByObject(timeTest, objectTest)
}

async function getBookByObject(time, object){
    let subjectSet = new Set(); // Use a Set to store unique subjects

    const LIMIT = 100;
    let offset = 0;
    console.log("getBookByObject() is called and running...");
    
    let numFound = 0;

    do {
        console.log("Fetching getBookByObject data from Open Library with offset: " + offset);
        
        // Make the fetch request with the current offset
        let resp = await fetch(`https://openlibrary.org/search.json?time=${time}&subject=${object}&language=eng&limit=${LIMIT}&offset=${offset}`);
        let json = await resp.json();

        // Check if the response is ok
        if (resp.ok) {
            numFound = json.numFound;
            if (numFound > 0) {
                console.log(`${numFound} books found with ${time} time and a ${object} object`);
            } else {
                console.log("No books found");
                console.log("Shutting down getBookByObject program...");
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
            console.log("Shutting down getBookByObject program...");
            break; // Exit the loop if there's an error
        }
        
    } while (offset < numFound); // Continue fetching until we've retrieved all books

    // Convert the Set back to an array if needed
    let subjectList = [...subjectSet];
    console.log(subjectList);
    return subjectList;
}














async function getBookByPlace(place){}


async function getBookByChoices(time, object, place) {
    const LIMIT = 100;
    let offset = 0;
    console.log("getBookByChoices() is called and running...");
    
    let numFound = 0;

    do {
        console.log("Fetching getBookByChoices data from Open Library with offset: " + offset);
        
        // Make the fetch request with the current offset
        let resp = await fetch(`https://openlibrary.org/search.json?time=${time}&subject="${object}"&place=${place}&language=eng&limit=${LIMIT}&offset=${offset}`);
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
            for (const element of json.docs) {
                let title = element.title;
                let author = element.author_name;
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
const object = "travel";
const place = "istanbul";
//getBookByChoices(time, object, place);
