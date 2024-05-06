// Function to fetch books by time
async function fetchBooksByTime(time) {
    if (!fetchedBooks[time]) {
        const functionName = fetchBooksByTime.name;
        let subjectSet = new Set(); // Use a Set to store unique subjects
  
        const LIMIT = 1000; // Search through 1000 books at a time
        let offset = 0;
        console.log(`${functionName} is called and running...`);
  
        let numFound = 0;
  
        do {
            console.log(`Fetching ${functionName} data from Open Library with offset: ${offset}`);
  
            // Make the fetch request with the current offset
            let resp = await fetch(`${openlibraryUrl}time=${time}&language=eng&limit=${LIMIT}&offset=${offset}`);
            let json = await resp.json();
  
            // Check if the response is ok
            if (resp.ok) {
                numFound = json.numFound;
                if (numFound > 0) {
                    console.log(`${numFound} books found with ${time} time`);
                } else {
                    console.log("No books found :(");
                    console.log(`Shutting down ${functionName} program...`);
                    break; // Exit the loop if no books are found
                }
  
                // Process each book in the current response
                processList(json, subjectSet, false);
  
                // Increment the offset for the next request
                offset += LIMIT;
            } else {
                console.log("Error fetching data:", json.error);
                console.log(`Shutting down ${functionName} program...`);
                break; // Exit the loop if there's an error
            }
  
        } while (offset === 5000); //Fecth until we've reached 5000 books
  
        // Convert the Set back to an array if needed
        let subjectList = [...subjectSet];
  
        // Store the fetched books in the global variable
        fetchedBooks[time] = subjectList;
    }
  
    return fetchedBooks[time];
  }
  
  async function getBookByObject(time, object) {
    const functionName = getBookByObject.name
  
    let placeSet = new Set();
  
    const LIMIT = 1000;
    let offset = 0;
    console.log(`${functionName} is called and running...`);
  
    let numFound = 0;
  
    do {
        console.log(`Fetching ${functionName} data from Open Library with offset: ${offset}`);
  
        // Make the fetch request with the current offset
        let resp = await fetch(`${openlibraryUrl}time=${time}&subject=${object}&language=eng&limit=${LIMIT}&offset=${offset}`);
        let json = await resp.json();
  
        // Check if the response is ok
        if (resp.ok) {
            numFound = json.numFound;
  
            if (numFound > 0) {
  
                console.log(`${numFound} books found with "${time}" time and a "${object}" object`);
            } else {
                console.log("No books found :(");
                console.log(`Shutting down ${functionName} program...`);
                break; // Exit the loop if no books are found
            }
  
            // Process each book in the current response
            processList(json, false, placeSet);
  
            // Increment the offset for the next request
            offset += LIMIT;
  
        } else {
            console.log("Error fetching data:", json.error);
            console.log(`Shutting down ${functionName} program...`);
            break; // Exit the loop if there's an error
        }
  
    } while (offset < numFound); // Continue fetching until we've retrieved all books
  
    // Convert the Set back to an array if needed
  
    let placeList = [...placeSet];
    console.log(placeList); //Show list of places in dropdown menu
    return placeList;
  }
  
  async function getBookByPlace(time, object, place) {
  
    const functionName = getBookByPlace.name
  
    const LIMIT = 100;
    let offset = 0;
    console.log(`${functionName} is called and running...`);
  
    let numFound = 0;
  
    do {
        console.log(`Fetching ${functionName} data from Open Library with offset: ${offset}`);
  
        // Make the fetch request with the current offset
        let resp = await fetch(`${openlibraryUrl}time=${time}&subject="${object}"&place=${place}&language=eng&limit=${LIMIT}&offset=${offset}`);
        let json = await resp.json();
  
        // Check if the response is ok
        if (resp.ok) {
            numFound = json.numFound;
            if (numFound > 0) {
                console.log(numFound + " books found");
            } else {
                console.log("No books found");
                console.log(`Shutting down ${functionName} program...`);
                break; // Exit the loop if no books are found
            }
  
        processBooks(json)
  
            // Increment the offset for the next request
            offset += LIMIT;
        } else {
            console.log("Error fetching data:", json.error);
            console.log(`Shutting down ${functionName} program...`);
            break; // Exit the loop if there's an error
        }
  
    } while (offset < numFound); // Continue fetching until we've retrieved all books
  }
  