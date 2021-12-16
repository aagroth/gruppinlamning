const apiKey = 'AEOBTsOUS5ImwxRIGUxpdSGTcy_9qw3cqpCMtUuyYUU';

fetch('https://api.unsplash.com/search/photos?page=1&query=pearl&per_page=4&client_id=AEOBTsOUS5ImwxRIGUxpdSGTcy_9qw3cqpCMtUuyYUU')

.then( resquest => {resquest.json()
.then( data=> {
    for (let image of data.results) {
    
        let { width, height } = image
        let imageURL = image.urls.regular
        let imageWidth = image
        let imageHeight = image
  
        // if (width > height)      
          document.querySelector('.parent').innerHTML += `<img class='child' src="${imageURL}">`
          
          // div.style.backgroundURL = imageURL
}
``})
})

/*
//jquery syntax
fetch.getJSON('https://api.unsplash.com/search/photos?page=1&query=pearl_id=AEOBTsOUS5ImwxRIGUxpdSGTcy_9qw3cqpCMtUuyYUU', 
function(data) {
    console.log(data);

var imageList = data.results; 
$.each(imageList, function(i, val){

    var image = val;
    var imageURL = val.urls.regular;
    var imageWidth = val.width;
    var imageHeight = val.height;

    if (imageWidth > imageHeight){

    $('.unsplash').append('<div class="image"><img src=" '+ imageURL +'"</div>');
    }
});
    
}); */