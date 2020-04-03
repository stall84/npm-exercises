// retrieve random doggo image from dog.ceo then apply it as your wallpaper

const axios = require('axios');
const download = require('download-file');
const wallpaper = require('wallpaper');



axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
        var url = response.data.message;
        var options = {
            directory: "./images/",
            filename: "dogPaper.jpg"
        }
        download(url, options, function(err) {
            if (err) {
                console.log('There was an error: ', err);
                return;
            }
            console.log('WOOF!');
        }) 
    });
    
   
