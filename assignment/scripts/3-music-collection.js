console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}
console.log(
  addToCollection(myCollection, "someone you loved", "Lewis Capaldi", "2019")
);
console.log(
  addToCollection(myCollection, "Billie Jean", "Michael Jackson", "1983")
);
console.log(addToCollection(myCollection, "Lonely", "Akon", "2005"));
console.log(addToCollection(myCollection, "One Love", "Bob Marley", "1965"));
console.log(
  addToCollection(
    myCollection,
    "I will always love you",
    "Whitney Houston",
    "1992"
  )
);
console.log(addToCollection(myCollection, "California Love", "2Pac", "1996"));

console.log("My music collection is:", myCollection);

function showCollection(collection) {
  for (let album of collection) {
    console.log(
      `${album.title} by ${album.artist}, published in ${album.yearPublished}`
    );
  }
}
showCollection(myCollection);

function findByArtist(collection, artist) {
  let albumFound = [];
  for (let album of collection) {
    if (album.artist === artist) {
      albumFound.push(album);
    }
  }
  return albumFound;
}

console.log("The album found is:", findByArtist(myCollection, "2Pac"));
console.log("The album found is:", findByArtist(myCollection, "Lewis Capaldi"));
console.log(
  "The album found is:",
  findByArtist(myCollection, "Michael Jackson")
);
console.log("The album found is:", findByArtist(myCollection, "Bob Marley"));
console.log(
  "The album found is:",
  findByArtist(myCollection, "Whitney Houston")
);
console.log("The album found is:", findByArtist(myCollection, "Akon"));


  

try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
