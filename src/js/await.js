import {searchHero, searchHeroAsync} from "./promises";


const heroIds = ['zord', 'iron', 'spider'];
const herosPromises = heroIds.map(searchHero);


export const getHeroArray = async () => {

    return await Promise.all(heroIds.map(searchHero));


    // const heroArray = [];
    // for (const heroId of heroIds) {
    //     heroArray.push(searchHero(heroId));
    // }
    //
    // // always use await of array outside of for **
    // return await Promise.all(heroArray);

}


export const getHeroAwait = async (heroId) => {
    try{
        const hero = await searchHeroAsync(heroId);
        return hero;
    } catch(err) {
        console.log('catch!!!');
        console.log(err);
        throw err;
    }
}


export const heroCycle = async() => {
    console.time('heroCycle');

    // outside of stack runtime
    herosPromises.forEach(async (hero) => console.log(await hero));


    // const heroes = Promise.all(herosPromises);
    // console.log(heroes);

    // const heroes = await Promise.all(herosPromises);
    // heroes.forEach(console.log);

    // al promises trigger in one second... all triggered
    // for await (const hero of herosPromises) {
    //     console.log(hero);
    // }

    console.timeEnd('heroCycle');
}


export const heroIfAwait = async (heroId) => {
    if ((await searchHero(heroId)).nombre === 'Spider') {
        console.log('found');
    } else {
        console.log('not found');
    }
}