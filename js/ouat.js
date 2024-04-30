const openlibraryUrl = "https://openlibrary.org/search.json?"

// Global variable to store fetched books
let fetchedBooks = {};

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

    let placeSet = new Set(); // Use a Set to store unique places

    const LIMIT = 100; //Search through 100 books at a time
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

            // Process each book in the current response
            for (const element of json.docs) {
                let title = element.title;
                let author = element.author_name;
                console.log(title + " - " + author);
            }

            // Increment the offset for the next request
            offset += LIMIT;
        } else {
            console.log("Error fetching data:", json.error);
            console.log(`Shutting down ${functionName} program...`);
            break; // Exit the loop if there's an error
        }

    } while (offset < numFound); // Continue fetching until we've retrieved all books
}

async function checkObject(object, time) {
    let searchWord = new RegExp(`\\b${object}\\b`, 'i'); // Use RegExp constructor to create regex(regular expression)

    try {
        // Wait for the books to be fetched
        while (!fetchedBooks[time]) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Wait for a short time before checking again
        }

        let books = fetchedBooks[time]; // Get the fetched books from the global array

        if (books.length > 0) {
            if (books.some(word => searchWord.test(word))) {
                console.log(`The array contains the word '${object}'.`);
                return true;
                // Then show object in drop-down menu
            } else {
                console.log(`The array does not contain the word '${object}'`);
                return false;
                // Do not show object in drop-down menu
            }
        } else {
            console.log("No subjects fetched.");
        }
    } catch (error) {
        console.error("Error checking object:", error);
    }
}

async function processList(json, subjectSet, placeSet) {

    if (subjectSet) {
        for (const element of json.docs) {
            if (element.subject && Array.isArray(element.subject)) {
                let subjects = element.subject
                for (const subElement of subjects) {
                    subjectSet.add(subElement); //Add each subject to the list
                }
            }
        }

    } else {
        for (const element of json.docs) {
            if (element.place && Array.isArray(element.place)) {
                let places = element.place;
                for (const placeElement of places) {
                    placeSet.add(placeElement); //Add each place to the list
                }
            }
        }
    }

}

let eraMenu = document.getElementById("era_menu");
let thingMenu = document.getElementById("thing_menu");
let placeMenu = document.getElementById("place_menu");

const centuries = [
    "11th_century",
    "12th_century",
    "13th_century",
    "14th_century",
    "15th_century",
    "16th_century",
    "17th_century",
    "18th_century",
    "19th_century",
    "20th_century",
    "21st_century"
];

const things = [
    "man", "woman", "dog", "cat", "mouse", "fish", "girl", "boy"
]

centuries.forEach(function (century) {
    let option = document.createElement('option')
    option.value = century;
    option.textContent = century.replace("_", " ");
    eraMenu.appendChild(option);
})

document.addEventListener("DOMContentLoaded", function () {

    // Function to update thing menu based on selected era
    async function updateThingMenu() {
        // Clear existing options
        thingMenu.innerHTML = "";

        fetchBooksByTime(eraMenu.value)
        // Show loading message
        thingMenu.disabled = true;
        thingMenu.innerHTML = "<option>Loading...</option>";

        let thingCount = 0
        // Add new options
        for (const thing of things) {
            let objectExists = await checkObject(thing, eraMenu.value);
            if (objectExists) {
                thingCount++
                let option = document.createElement("option");
                option.text = thing;
                option.value = thing;
                thingMenu.appendChild(option);
            }
        }

        // Hide loading message
        thingMenu.disabled = false;
        if(thingCount > 1){
            thingMenu.removeChild(thingMenu.querySelector('option'));
        }
    }

    // Function to update place menu based on selected thing
    async function updatePlaceMenu() {

        // Show loading message
        placeMenu.disabled = true;
        placeMenu.innerHTML = "<option>Loading...</option>";

        let places = await getBookByObject(eraMenu.value, thingMenu.value)
        placeMenu.innerHTML = ""

        for (const place of places) {
            let option = document.createElement("option")
            option.value = place
            option.textContent = place
            placeMenu.appendChild(option)
        }

        // Hide loading message and remove it
        placeMenu.disabled = false;
        if (places.length > 1) {
            placeMenu.removeChild(placeMenu.querySelector('option'));
        }
    }

    // Event listener for thing menu change
    eraMenu.addEventListener("click", function (event) {
        let target = event.target;
        if (target.tagName === 'OPTION') {
            updateThingMenu()
        }
    })

    // Event listener for place menu change
    thingMenu.addEventListener("click", function (event) {
        let target = event.target;
        if (target.tagName === 'OPTION') {
            updatePlaceMenu()
        }
    })
})

let form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let eraInput = eraMenu.value;
    let thingInput = thingMenu.value
    let placeInput = placeMenu.value
    console.log(eraInput, thingInput, placeInput);
    await getBookByPlace(eraInput, thingInput, placeInput);
});