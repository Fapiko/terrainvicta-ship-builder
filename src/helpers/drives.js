import drivesJson from '../data/TIDriveTemplate.json';

const drivesMap = {};
drivesJson.forEach(drive => {
    if (drive.dataName.includes('Alien')) {
        return;
    }

    const normalizedDataName = drive.dataName.slice(0, -2)
    if (!(normalizedDataName in drivesMap)) {
        drivesMap[normalizedDataName] = [];
    }

    const normalizedFriendlyName = drive.friendlyName.slice(0, -3);

    drivesMap[normalizedDataName][drive.thrusters] = {
        ...drive,
        normalizedDataName: normalizedDataName,
        normalizedFriendlyName: normalizedFriendlyName,
        componentType: 'drive',
    };

    return drivesMap;
});

export const playerDrives = Object.entries(drivesMap).map(keyValue => {
    const [name] = keyValue;

    return drivesMap[name][1]
});

export const maxThrusters = (drive) => {
    if (drive === undefined) {
        return 0;
    }

    const foundDrive = drivesMap[drive.normalizedDataName];
    return foundDrive[foundDrive.length - 1].thrusters;
}

export const driveByNameWithThrusterCount = (name, thrusters) => {
    return drivesMap[name][thrusters];
}

export const thrustDisplay = (thrust) => {
    return `${thrust.toLocaleString('en-US')} Newtons`;
}

export const displayKps = (exhaustVelocity) => {
    if (exhaustVelocity > 1000) {
        return `${(exhaustVelocity / 1000).toFixed(2)}K kps`;
    } else {
        return `${(exhaustVelocity).toFixed(2)} kps`;
    }
}