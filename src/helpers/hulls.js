import hullsJson from '../data/TIShipHullTemplate.json';

export const GUNSHIP = 'Gunship';
export const ESCORT = 'Escort';
export const CORVETTE = 'Corvette';
export const FRIGATE = 'Frigate';
export const MONITOR = 'Monitor';
export const DESTROYER = 'Destroyer';
export const CRUISER = 'Cruiser';
export const BATTLECRUISER = 'Battlecruiser';
export const BATTLESHIP = 'Battleship';
export const LANCER = 'Lancer';
export const DREADNOUGHT = 'Dreadnought';
export const TITAN = 'Titan';

export const NOSE_ONE = 'OneNose';
export const NOSE_TWO_VERT = 'TwoNoseVert';
export const NOSE_THREE_ANGLE = 'ThreeNoseAngle';
export const NOSE_FOUR = 'FourNose';

export const HULL_ONE = 'OneHull';
export const HULL_TWO_HORIZ = 'TwoHullHoriz';

export const playerHulls = hullsJson.filter(hull => !hull.alien).map(hull => {
    hull.noseMounts = [];
    hull.hullMounts = [];

    switch (hull.dataName) {
        case GUNSHIP:
            hull.noseMounts = [NOSE_ONE]
            break;
        case ESCORT:
            hull.hullMounts = [HULL_ONE]
            break;
        case CORVETTE:
            hull.noseMounts = [NOSE_ONE];
            hull.hullMounts = [HULL_ONE];
            break;
        case FRIGATE:
            hull.noseMounts = [NOSE_ONE];
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            break;
        case MONITOR:
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            break;
        case DESTROYER:
            hull.hullMounts = [HULL_ONE];
            break;
        case CRUISER:
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            hull.noseMounts = [NOSE_ONE, NOSE_TWO_VERT];
            break;
        case BATTLECRUISER:
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            hull.noseMounts = [NOSE_ONE, NOSE_TWO_VERT, NOSE_THREE_ANGLE];
            break;
        case BATTLESHIP:
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            hull.noseMounts = [NOSE_ONE, NOSE_TWO_VERT];
            break;
        case LANCER:
            hull.noseMounts = [NOSE_ONE, NOSE_TWO_VERT, NOSE_FOUR];
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            break;
        case DREADNOUGHT:
            hull.noseMounts = [NOSE_ONE, NOSE_TWO_VERT, NOSE_THREE_ANGLE];
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            break;
        case TITAN:
            hull.noseMounts = [NOSE_ONE, NOSE_TWO_VERT, NOSE_THREE_ANGLE, NOSE_FOUR];
            hull.hullMounts = [HULL_ONE, HULL_TWO_HORIZ];
            break;
        default:
            console.log('Unknown hull type: ' + hull.dataName);
    }

    return hull;
});

