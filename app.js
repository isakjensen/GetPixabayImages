const empty = require('empty-folder');
const fetch = require('node-fetch');
const sharp = require('sharp');

let token = 'YOUR_PIXABAY_API_TOKEN';
let url = 'https://pixabay.com/api/?key=' + token + '&min_width=3000&min_height=3000&image_type=photo&q=ocean&orientation=horizontal&order=latest&per_page=30';

fetch(url).then(res => res.json()).then(function(json) {

    EmptyFolder('./generated/');

    for (let i = 0; i < json.hits.length; i++)
    {
        let image = json.hits[i];
        
        SaveImage(image.largeImageURL, image.id);
    }

    console.log(json.hits.length + ' files were generated...');

});

async function EmptyFolder(folder)
{
    empty(folder, false, (x)=>{
        if(x.error) {
            console.error(x.error);
        }
    });
}

async function SaveImage(url, id)
{
    const response = await fetch(url);
    const buffer = await response.buffer();

    sharp(buffer).resize(3000, 3000).toFile('./generated/' + id + '.jpg', (err, info) => {});
}