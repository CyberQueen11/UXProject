export async function fetchSubjects(selectedEra) {
  const subjectSet = new Set();
  const openlibraryURL = "https://openlibrary.org/search.json?";
  const LIMIT = 500;
  let offset = 0;
  let numFound = 0;
  let maxSearchNum = 1000;

  while (offset < maxSearchNum) {
    console.log("Fetching subjects...")
    let eraURL = `${openlibraryURL}language=eng&limit=${LIMIT}&offset=${offset}&time=${selectedEra}`;

    let resp = await fetch(eraURL);
    let json = await resp.json();

    for (const element of json.docs) {
      if (element.subject && Array.isArray(element.subject)) {
        element.subject.forEach((subElement) => subjectSet.add(subElement));
      }
    }

    if (json.numFound) {
      numFound = json.numFound;
      if (numFound < maxSearchNum) maxSearchNum = numFound;
    } else {
      break;
    }

    offset += LIMIT;
  }

  return subjectSet;
}
