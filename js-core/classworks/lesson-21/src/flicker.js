let flicker = {
  uri: 'https://api.flickr.com/services/rest/?',
  queryMethod: 'flickr.photos.search',
  apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e',
};
let text = 'cats';
const url = `${flicker.uri}method=${flicker.queryMethod}&api_key=${flicker.apiKey}&text=${text}&page=1&format=json&nojsoncallback=1`;

// let src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

function template(strings, ...keys) {
  console.log(strings);
  console.log(keys);

  return (values) => {
    console.log(values);
  }
}

template`<MyClass myProperty>`;