import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

//~ getPhotosByQuery через fetch()
// export const getPhotosByQuery = currentQuery => {
//   const requestParams = new URLSearchParams({
//     query: currentQuery,
//     color: 'black_and_white',
//     orientation: 'portrait',
//     client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
//     per_page: 12,
//   });

//   return fetch(`https://api.unsplash.com/search/photos?${requestParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

//~ getPhotosByQuery через axios()
export const getPhotosByQuery = currentQuery => {
  const requestParams = {
    query: currentQuery,
    color: 'black_and_white',
    orientation: 'portrait',
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    per_page: 12,
  };

  return axios.get(`/search/photos`, { params: requestParams });
};

//~ getPhotosByQuery через fetch()
// export const getRandomPhotos = () => {
//   const requestParams = new URLSearchParams({
//     orientation: 'portrait',
//     count: 12,
//     client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
//   });

//   return fetch(`https://api.unsplash.com/photos/random?${requestParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };

//~ getPhotosByQuery через axios()
export const getRandomPhotos = () => {
  const requestParams = {
    orientation: 'portrait',
    count: 12,
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  };

  return axios.get('/photos/random', { params: requestParams });
};
