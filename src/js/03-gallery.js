// https://unsplash.com/documentation

import iziToast from 'izitoast';
import { refs } from './refs';
import { createGalleryCardTemplate } from './render-functions';
import { getPhotosByQuery, getRandomPhotos } from './unsplash-api';

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

const initGalleryByRandomPhotos = async () => {
  try {
    refs.preloader.classList.add('is-active');

    const { data } = await getRandomPhotos();

    const galleryCardsTemplate = data.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  } finally {
    refs.preloader.classList.remove('is-active');
  }
};

initGalleryByRandomPhotos();

const onSearchFormSubmit = async event => {
  try {
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

    refs.preloader.classList.add('is-active');

    const data = await getPhotosByQuery(userQuery);

    if (data.total === 0) {
      iziToast.error({
        message: 'Зображень не знайдено!',
        position: 'topRight',
      });

      return;
    }

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  } finally {
    refs.preloader.classList.remove('is-active');
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
