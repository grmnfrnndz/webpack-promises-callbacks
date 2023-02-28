import {heroes} from "./heroes";


export const searchHero = (heroId) => {

    const hero = heroes[heroId];

    return new Promise((resolve, reject) => {
        hero ?  setTimeout(() => resolve(hero), 1000): reject(`no existe el heroId: ${heroId}`);
    });
}

export const searchHeroAsync = async (heroId) => {
    const hero = heroes[heroId];

    if (!hero) throw `no existe el heroId: ${heroId}`;

    // throw vs throw new Error(''): the different in between, it the explained info of error.

    return hero;
}




const lowPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>resolve('lowPromise'), 2000);
});

const mediumPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>resolve('mediumPromise'), 1500);
});

const fastPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>resolve('fastPromise'), 1000);
});


// lowPromise.then(console.log);
// mediumPromise.then(console.log);
// fastPromise.then(console.log);

// Promise.race([lowPromise, mediumPromise, fastPromise])
//     .then(console.log)
//     .catch(console.log);

// searchHeroAsync('spider')
//     .then(console.log)
//     .catch(console.error);
//
// searchHeroAsync('zord')
//     .then(console.log)
//     .catch(console.error);


export {
    lowPromise,
    mediumPromise,
    fastPromise,
}
