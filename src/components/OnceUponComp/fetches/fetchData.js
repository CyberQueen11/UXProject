export async function fetchData(
  selectedEra,
  selectedCharacter,
  selectedPlace,
  setBook,
  setFetching
) {
  const openlibraryUrl = "https://openlibrary.org/search.json?";
  const LIMIT = 500;
  let offset = 0;
  let numFound = 0;
  let maxSearchNum = 5000;

  setBook(null);
  setFetching(true);

  do {
    console.log(`Fetching data from Open Library with offset: ${offset}`);

    let url = `${openlibraryUrl}language=eng&limit=${LIMIT}&offset=${offset}`;
    if (selectedEra) url += `&time=${selectedEra}`;
    if (selectedCharacter) url += `&subject=${selectedCharacter}`;
    if (selectedPlace) url += `&place=${selectedPlace}`;

    let resp = await fetch(url);
    let json = await resp.json();

    if (resp.ok) {
      numFound = json.numFound;

      if (numFound > 0) {
        console.log(`${numFound} books found`);

        while (true) {
          const randomIndex = Math.floor(Math.random() * numFound);
          const randomBook = json.docs[randomIndex];

          if (randomBook.cover_i) {
            const newBook = {
              title: randomBook.title,
              author: randomBook.author_name
                ? randomBook.author_name[0]
                : "Unknown",
              isbn: randomBook.isbn ? randomBook.isbn[0] : "Unknown",
              publish_year: randomBook.publish_year
                ? randomBook.publish_year[0]
                : "Unknown",
            };

            setBook(newBook);
            break;
          }
        }

        setFetching(false);
      } else {
        console.log("No items found");
        setFetching(false);
        return;
      }

      if (numFound < maxSearchNum) maxSearchNum = numFound;

      offset += LIMIT;
    } else {
      console.log("Error fetching data:", json.error);
      return;
    }
  } while (offset < maxSearchNum);
}
