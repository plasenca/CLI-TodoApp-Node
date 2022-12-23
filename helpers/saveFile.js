import {existsSync, readFileSync, writeFileSync} from "fs";

const file = './db/data.json';

const saveDB = ( data ) => {

    writeFileSync(file, JSON.stringify(data));
}

/**
 * 
 * @returns {Array<Task>}
 */
const readDB = () => {

    if(!existsSync(file)) return null;

    const info = readFileSync( file, {
        encoding: 'utf-8',
    } );

    const data = JSON.parse(info);

    return data;
}

export{
    saveDB,
    readDB
}
