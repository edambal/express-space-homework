const express = require('express');
const router = express.Router();

const marsM = require('../models/marsMissions');
const images =['https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/sn-curiosity.jpg?itok=2XMLUPhh',
'https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg',
'https://solarsystem.nasa.gov/system/content_pages/main_images/1068_rover2-1.jpg',
'https://upload.wikimedia.org/wikipedia/commons/3/3a/Sojourner_on_Mars_PIA01122.jpg',
'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2002/11/rosetta_swings_by_mars/9157617-5-eng-GB/Rosetta_swings_by_Mars_pillars.jpg'];

for(let i=0;i<marsM.length;i++){
    marsM[i]['img'] = images[i];
}



router.get('/',(req,res)=>{
    res.render('index',{
        missions : marsM
    })
});

router.get('/:id',(req,res)=>{
    res.render('./missions/showmissions',{
        mission : marsM[req.params.id]
    })
})

module.exports = router;