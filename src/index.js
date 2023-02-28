import './styles.css';
import {getHeroArray, getHeroAwait, heroCycle, heroIfAwait} from "./js/await";

// console.time('await');
//
// getHeroArray().then(hero => {
//     console.table(hero);
//     console.log(hero);
//     console.timeEnd('await');
// })


// console.time('await');
//
// getHeroAwait('spider2')
//     .then(hero => {
//         console.log(hero);
//         console.timeEnd('await');
//     })
//     .catch(console.warn)



// heroCycle();

heroIfAwait('spider')