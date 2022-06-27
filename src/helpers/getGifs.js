export const getGifs = async (category) => {
  const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=4ewpJM0R4TExtyLHh53F5XHsr6a7fAKF&q=${category}&limit=20`;
  const resp = await fetch(giphyApiUrl);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
