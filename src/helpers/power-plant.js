import {getPowerPlantLoc} from "./localizations";

export const getRequiredPowerPlantLoc = (name) => {
    return getPowerPlantLoc('PowerPlantRequirement', name);
}