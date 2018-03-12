const endpoint = "https://fxgyita3ed.execute-api.us-east-1.amazonaws.com/dev/stories"

const getStories = (state = 'started') => {
  const url = `${endpoint}?state=${state}`;

  return fetch(url)
    .then( r => {
      return r.json();
    })
}

export default getStories;
