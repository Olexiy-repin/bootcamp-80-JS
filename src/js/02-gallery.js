// https://unsplash.com/documentation

import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
};

const createGalleryCardTemplate = ({ alt_description: alt, urls: { regular: url } }) => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${url}" alt="${alt}" />
  </li>
  `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchFormEl } = event;

  const userQuery = searchFormEl.elements.user_query.value.trim();

  if (!userQuery) {
    iziToast.error({
      message: 'Поле для пошуку має бути заповненим!',
      position: 'topRight',
    });

    return;
  }

  refs.galleryList.innerHTML = '';

  fetch(
    `https://api.unsplash.com/search/photos?query=${userQuery}&color=black_and_white&orientation=portrait&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg&per_page=12`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message: 'Зображень не знайдено!',
          position: 'topRight',
        });

        return;
      }

      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
