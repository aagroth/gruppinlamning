const apiKey = 'AEOBTsOUS5ImwxRIGUxpdSGTcy_9qw3cqpCMtUuyYUU';

fetch('https://api.unsplash.com/search/photos?page=1&query=pearl&per_page=4&client_id=AEOBTsOUS5ImwxRIGUxpdSGTcy_9qw3cqpCMtUuyYUU')

.then( resquest => {resquest.json()
.then( data=> {
    for (let image of data.results) {
    
        let { width, height } = image
        let imageURL = image.urls.regular
        let imageWidth = 50
        let imageHeight = image.urls.regular
  
        // if (width > height)      
          document.querySelector('.grid').innerHTML += `<img class='grid__item' src="${imageURL}">`
          
          // div.style.backgroundURL = imageURL
}
``})
})