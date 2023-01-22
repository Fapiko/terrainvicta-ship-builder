import laserWeaponsJson from '../data/TILaserWeaponTemplate.json';
import missileWeaponsJson from '../data/TIMissileTemplate.json';
import particleWeaponsJson from '../data/TIParticleWeaponTemplate.json';
import plasmaWeaponsJson from '../data/TIPlasmaWeaponTemplate.json';
import magneticGunsJson from '../data/TIMagneticGunTemplate.json';
import gunsJson from '../data/TIGunTemplate.json';

const mapWeaponType = (type, weapon) => {
    let friendlyName = weapon.friendlyName;
    if (friendlyName === undefined) {
        friendlyName = weapon.displayName;
    }

    return {
        ...weapon,
        friendlyName: friendlyName,
        weaponType: type,
        mountType: weapon.mount.includes('Nose') ? 'nose' : 'hull',
    };
}

const playerFilter = (weapon) => {
    return !weapon.dataName.includes('Alien');
}

export const laserWeapons = laserWeaponsJson.filter(playerFilter).map(weapon => {
    return mapWeaponType('laser', weapon);
});

export const missileWeapons = missileWeaponsJson.filter(playerFilter).map(weapon => {
    return mapWeaponType('missile', weapon);
});

export const particleWeapons = particleWeaponsJson.filter(playerFilter).map(weapon => {
    return mapWeaponType('particle', weapon);
});

export const plasmaWeapons = plasmaWeaponsJson.filter(playerFilter).map(weapon => {
    return mapWeaponType('plasma', weapon);
});

export const magneticGuns = magneticGunsJson.filter(playerFilter).map(weapon => {
    return mapWeaponType('magnetic', weapon);
});

export const guns = gunsJson.filter(playerFilter).map(weapon => {
    return mapWeaponType('gun', weapon);
});

const allPlayerWeapons = [
    ...laserWeapons,
    ...missileWeapons,
    ...particleWeapons,
    ...plasmaWeapons,
    ...magneticGuns,
    ...guns,
];


export const allNoseWeapons = allPlayerWeapons.filter(weapon => {
    return weapon.mountType === 'nose';
});
