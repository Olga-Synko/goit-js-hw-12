// export function createMarkup(arr) {
//     return arr
//         .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
//     <li class="gallery-item">
//       <div class="gallery">
//        <a class="gallery-link" href="${largeImageURL}">
//        <img class="gallery-image"
//          src="${webformatURL}"
//          alt="${tags}"
//         />
//        </a>
       
//       <ul class="card-description">
//         <li class="description">Likes <span class="accent">${likes} </span></li>
//         <li class="description">Views <span class="accent">${views} </span></li>
//         <li class="description">Comments <span class="accent">${comments} </span></li>
//         <li class="description">Downloads <span class="accent">${downloads} </span></li>
//       </ul>
//       </div>
//     </li>
//     `).join("");
// }

export function renderImage(data) {
  return data.map(image => `<li class="gallery-item">
      <div class="image-cont">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="image-descr">
          <div class="descr-box">
            <p class="image-feature">Likes</p>
            <p class="image-data">${image.likes}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Views</p>
            <p class="image-data">${image.views}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Comments</p>
            <p class="image-data">${image.comments}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Downloads</p>
              <p class="image-data">${image.downloads}</p>
          </div>
        </div>
      </div>
    </li>
  `).join('');
}