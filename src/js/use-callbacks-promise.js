import { searchHero as searchHeroCallback } from "./js/callbacks";
import { searchHero as searchHeroPromise } from "./js/promises";
import './styles.css';

const heroId = 'zord';
const heroId2 = 'spider';

// searchHero(heroId, (error, hero) => {
//
//     if (error) {return console.error(error);}
//
//     searchHero(heroId2, (error2, hero2) => {
//
//         if (error2) {return console.error(error2);}
//
//         console.log(`HeroID: ${hero.nombre} - HeroID2: ${hero2.nombre}`);
//
//     });
//
// });

 // searchHeroPromise(heroId).then(hero => {
 //     // console.log(`Enviado heroID: ${hero.nombre}`);
 //
 //     searchHeroPromise(heroId2).then(hero2 => {
 //         console.log(`HeroID: ${hero.nombre} - HeroID2: ${hero2.nombre}`);
 //     });
 //
 // });


Promise.all([searchHeroPromise(heroId), searchHeroPromise(heroId2)])
    .then(([hero, hero2]) => {
        console.log(`HeroID: ${hero.nombre} - HeroID2: ${hero2.nombre}`);
    }).catch(err => {
    console.log(err);
    setTimeout(() => {
        alert(err);

    }, 400);
})
    .finally(() => {
            console.log(`Se termino el codigo.`);
        }
    );