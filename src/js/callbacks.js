import {heroes} from "./heroes";

export const searchHero = (heroId, callback) => {
    const hero = heroes[heroId];

    if (hero) {
        callback(null, hero);
    } else {
        callback(`no existe el heroId: ${heroId}`);
    }

}
