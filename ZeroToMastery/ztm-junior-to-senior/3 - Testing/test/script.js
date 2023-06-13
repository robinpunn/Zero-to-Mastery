const googleDatabse = [
  "cats.com",
  "dogs.com",
  "pets.com",
  "animals.com",
  "catpictures.com",
  "myfavouritedogs.com",
  "myfavouritecats.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cat", googleDatabse));

module.exports = googleSearch;
