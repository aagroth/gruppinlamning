// Import from API unsplash 

// Key acress 
const apiKey = 'AEOBTsOUS5ImwxRIGUxpdSGTcy_9qw3cqpCMtUuyYUU';

// Fetch documentation 
fetch('https://api.unsplash.com/search/photos?page=1&query=pearl&per_page=4&client_id=AEOBTsOUS5ImwxRIGUxpdSGTcy_9qw3cqpCMtUuyYUU')


// create resquest 

.then( resquest => {resquest.json()
.then( data=> {
    for (let image of data.results) {
    
        let { width, height } = image
        let imageURL = image.urls.regular
        let imageWidth = 50
        let imageHeight = image.urls.regular
  
        // create in rublik.SCSS 

          document.querySelector('.grid').innerHTML += `<img class='grid__item' src="${imageURL}">`
          
}
``})
})