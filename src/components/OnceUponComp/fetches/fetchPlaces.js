// Function to fetch places based on the selected era and character
export async function fetchPlaces(selectedEra, selectedCharacter) {
  const placeSet = new Set();
  const openlibraryUrl = "https://openlibrary.org/search.json?";

  let characterURL = `${openlibraryUrl}language=eng&time=${selectedEra}&subject=${selectedCharacter}`;

  let resp = await fetch(characterURL);
  let json = await resp.json();

  console.log("Fetching places... ");

  if (json.numFound) {
    json.docs.forEach((element) => {
      // Check if the document has a 'place' field and if it is an array
      if (element.place && Array.isArray(element.place)) {
        element.place.forEach((placeElement) => {
          let placeObject = {
            value: placeElement.toLowerCase(),
            label: placeElement,
          };
          placeSet.add(placeObject);
        });
      }
    });
  }

  return placeSet;
}
