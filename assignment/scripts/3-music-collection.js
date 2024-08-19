console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];


function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
};
collection.push(album);
return album;
}
console.log(addToCollection(myCollection, 'someone you loved', 'lewis Capaldi', '2019'));
console.log(addToCollection(myCollection, 'Billie Jean', 'Michael Jackson', '1983'));
console.log(addToCollection(myCollection, 'Lonely', 'Akon', '2005'));
console.log(addToCollection(myCollection, 'One Love', 'Bob Marley', '1965'));
console.log(addToCollection(myCollection, 'I will always love you', 'Whitney Houston', '1992'));
console.log(addToCollection(myCollection, 'California Love', '2Pac', '1996'));

console.log(myCollection);


function showCollection(collection) {
  for (let album of collection) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}
function findByArtist(collection, artist) {
  let results = [];
  for (let album of collection) {
      if (album.artist === artist) {
          results.push(album);
      }
  }
  return results;
}


console.log(findByArtist(myCollection, '2Pac')); // Should return albums by Artist A
console.log(findByArtist(myCollection, 'Lewis Capaldi')); // Should return an empty array

function search(collection, searchCriteria) {
  if (!searchCriteria || (!searchCriteria.artist && !searchCriteria.year)) {
      return collection;
  }

  let results = [];
  for (let album of collection) {
      let artistMatch = searchCriteria.artist ? album.artist === searchCriteria.artist : true;
      let yearMatch = searchCriteria.year ? album.yearPublished === searchCriteria.year : true;

      if (artistMatch && yearMatch) {
          results.push(album);
      }
  }
  return results;
}

console.log(search(myCollection, { artist: '2Pac', year: 1996 })); 
console.log(search(myCollection, { artist: 'lewis capaldi', year: 2019 }));
console.log(search(myCollection, {})); 
console.log(search(myCollection)); 
console.log(search(myCollection, { artist: 'Michael Jackson', year: 1983 })); 

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
