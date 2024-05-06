const openlibraryUrl = "https://openlibrary.org/search.json?"

// Global variable to store fetched books
// This array is needed for the checkObjects function. We want to be able to check if the list is empty or not.
let fetchedBooks = {};

// Function to fetch data from Open Library
async function fetchData(time, object, place, processFunction) {
    const LIMIT = 1000;
    let offset = 0;
    let numFound = 0;
    let maxSearchNum = 5000;

    do {
        console.log(`Fetching data from Open Library with offset: ${offset}`);

        // Construct the URL based on parameters
        let url = `${openlibraryUrl}time=${time}&language=eng&limit=${LIMIT}&offset=${offset}`;
        if (object) {
            url += `&subject=${object}`;
        }
        if (place) {
            url += `&place=${place}`;
        }

        // Make the fetch request with the current offset
        let resp = await fetch(url);
        let json = await resp.json();

        // Check if the response is ok
        if (resp.ok) {
            numFound = json.numFound;
            if (numFound > 0) {
                console.log(`${numFound} books found`);
            } else {
                console.log("No items found");
                return; // Exit the function if no items are found
            }

            if (numFound < maxSearchNum) {
                maxSearchNum = numFound
            }

            //Since different fetches use different process methods we fetch the limbda functions that are sent in asan argument
            // Process each item in the current response
            processFunction(json);

            // Increment the offset for the next request
            offset += LIMIT;
        } else {
            console.log("Error fetching data:", json.error);
            return; // Exit the function if there's an error
        }

    } while (offset < maxSearchNum); // Continue fetching until reached specified limit
}

// Helper function to handle errors and log messages
function handleFetchError(json, functionName) {
    console.log("Error fetching data:", json.error);
    console.log(`Shutting down ${functionName} program...`);
}

async function checkObject(object, time) {
    //Here we search for the word/subject that the user selected in the drop down menu(man, woman, cat....)
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

//Print out book here
function processBooks(json) {
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    let numFound = json.numFound;
    let randomNum = Math.floor(Math.random() * numFound);

    // Process each book in the current response
    for (const element of json.docs) {
        createCard(
            cardContainer,
            element.title,
            element.author_name ? element.author_name[0] : "Unknown",
            element.isbn ? element.isbn[0] : "Unknown",
            element.publish_year ? element.publish_year[0] : "Unknown"
        );
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

async function fetchBooksByTime(time) {
    const functionName = fetchBooksByTime.name;
    console.log(`${functionName} is called and running...`);

    if (!fetchedBooks[time]) {
        let subjectSet = new Set();

        await fetchData(time, null, "", json => processList(json, subjectSet, true))
            .catch(json => handleFetchError(json, functionName));

        fetchedBooks[time] = [...subjectSet];
    }

    return fetchedBooks[time];
}

async function getBookByObject(time, object) {
    const functionName = getBookByObject.name;
    console.log(`${functionName} is called and running...`);

    let placeSet = new Set();

    await fetchData(time, object, "", json => processList(json, false, placeSet))
        .catch(json => handleFetchError(json, functionName));

    console.log([...placeSet]); // Print out places
    return [...placeSet];
}

async function getBookByPlace(time, object, place) {
    const functionName = getBookByPlace.name;
    console.log(`${functionName} is called and running...`);

    await fetchData(time, object, place, processBooks)
        .catch(json => handleFetchError(json, functionName));
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

// Create the era drop down menus list for user
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

        // Add new options for each subject found
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
        if (thingCount > 1) {
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
    }

    // Event listener for thing menu change. updateThingMenu when user chooses something in the drop down era menu
    eraMenu.addEventListener("click", function (event) {
        let target = event.target;
        if (target.tagName === 'OPTION') {
            updateThingMenu()
            placeMenu.innerHTML = ""
        }
    })

    // Event listener for place menu change. same as era menu but updates placemenu instead
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
   // console.log(eraInput, thingInput, placeInput);
    await getBookByPlace(eraInput, thingInput, placeInput);
});

function createCard(container, title, author, isbn, year) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgElement = document.createElement("img");
    imgElement.src = "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg";
    card.appendChild(imgElement);

    let titleElement = document.createElement("p");
    titleElement.innerText = "Title: " + title;
    card.appendChild(titleElement);

    let authorElement = document.createElement("p");
    authorElement.innerText = "Author: " + author;
    card.appendChild(authorElement);

    let yearElement = document.createElement("p");
    yearElement.innerText = "Publish Year: " + year;
    card.appendChild(yearElement);

    let isbnElement = document.createElement("p");
    isbnElement.innerText = "ISBN: " + isbn;
    card.appendChild(isbnElement);

    container.appendChild(card);
}

