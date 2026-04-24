// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */
//~ Рішення через колбеки
// const loadScript = (scriptUrl, onSuccess, onError) => {
//   const scriptEl = document.createElement('script');

//   scriptEl.src = scriptUrl;

//   scriptEl.addEventListener('load', event => {
//     onSuccess(`${scriptUrl} успішно завантажився!`);
//   });

//   scriptEl.addEventListener('error', event => {
//     onError(`${scriptUrl} не завантажився!`);
//   });

//   document.head.append(scriptEl);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   successMessage => {
//     console.log(successMessage);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       successMessage => {
//         console.log(successMessage);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           successMessage => {
//             console.log(successMessage);
//           },
//           errorMessage => {
//             console.log(errorMessage);
//           }
//         );
//       },
//       errorMessage => {
//         console.log(errorMessage);
//       }
//     );
//   },
//   errorMessage => {
//     console.log(errorMessage);
//   }
// );

//~ Рішення через проміси
const loadScript = scriptUrl => {
  const promise = new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');

    scriptEl.src = scriptUrl;

    scriptEl.addEventListener('load', event => {
      resolve(`${scriptUrl} успішно завантажився!`);
    });

    scriptEl.addEventListener('error', event => {
      reject(`${scriptUrl} не завантажився!`);
    });

    document.head.append(scriptEl);
  });

  return promise;
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(errMessage => {
    console.log(errMessage);
  });

loadScript('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js')
  .then(successMessage => {
    console.log(successMessage);

    return loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
  })
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(errMessage => {
    console.log(errMessage);
  });

// const promise = new Promise(resolve => {
//   resolve('Done!');
// });

// promise
//   .then(result => {
//     console.log(result);

//     return new Promise(resolve => resolve('Hello!'));
//   })
//   .then(result => {
//     console.log(result);
//   });
