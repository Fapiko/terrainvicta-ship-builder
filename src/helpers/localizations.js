const powerPlantLocalizationsJson = require('../data/localizations/en/TIPowerPlantTemplate.en.json');
const driveLocalizationsJson = require('../data/localizations/en/TIDriveTemplate.en.json');

export const getPowerPlantLoc = (field, name) => {
    return powerPlantLocalizationsJson[`TIPowerPlantTemplate.${field}.${name}`];
}

export const getDriveLoc = (...args) => {
    const key = args.join('.');

    return driveLocalizationsJson[`TIDriveTemplate.${key}`];
}