import {Box, Grid, Tooltip} from "@mui/material";
import {useDispatch} from "react-redux";
import {shipActions} from "../../../../store/ship-slice";
import {dndActions} from "../../../../store/dnd-slice";
import CategoryTab from "../../CategoryTab";
import {useState} from "react";
import {allNoseWeapons} from "../../../../helpers/weapons";

const NodeWeaponsList = (props) => {
    const dispatch = useDispatch();
    const [weaponCategory, setWeaponCategory] = useState('all');

    const weaponSelectedHandler = (weapon) => {
        dispatch(shipActions.highlightComponents('nosehardpoint'));
        props.componentSelectionChanged(weapon);
    }

    let filteredWeapons = allNoseWeapons;
    if (weaponCategory !== 'all') {
        filteredWeapons = allNoseWeapons.filter(weapon => weapon.weaponType === weaponCategory);
    }

    const weapons = filteredWeapons.map(weapon => {
        const iconName = weapon.dataName.toLowerCase().replaceAll('-', '_');

        const dragStartHandler = (drive) => {
            weaponSelectedHandler(drive);

            dispatch(dndActions.startDrag({
                item: drive,
                itemType: 'drive',
            }));
        }

        const tooltip = <div>
            <div>{weapon.friendlyName}</div>
        </div>

        return (
            <Tooltip key={weapon.dataName} sx={{maxWidth: '500px'}} title={tooltip}>
                <img onDragStart={dragStartHandler.bind(null, weapon)} draggable
                     onClick={weaponSelectedHandler.bind(null, weapon)}
                     src={`assets/shipbuildericons/ico_${iconName}.png`} alt={weapon.name}
                     height={72}/>
            </Tooltip>
        );
    });

    return (
        <>
            <Grid container sx={{mt: 1, mb: 1}}>
                <Grid item xs={3}>
                    <CategoryTab onClick={setWeaponCategory.bind(null, 'all')}
                                 selected={weaponCategory === 'all'}>ALL</CategoryTab>
                </Grid>
                <Grid item xs={3}>
                    <CategoryTab onClick={setWeaponCategory.bind(null, 'magnetic')}
                                 selected={weaponCategory === 'magnetic'}>MAGNETIC
                        WEAPONS</CategoryTab>
                </Grid>
                <Grid item xs={3}>
                    <CategoryTab onClick={setWeaponCategory.bind(null, 'plasma')}
                                 selected={weaponCategory === 'plasma'}>PLASMA WEAPONS</CategoryTab>
                </Grid>
                <Grid item xs={3}>
                    <CategoryTab onClick={setWeaponCategory.bind(null, 'laser')}
                                 selected={weaponCategory === 'laser'}>LASERS</CategoryTab>
                </Grid>
            </Grid>
            <Box sx={{display: 'flex', flexWrap: 'wrap', maxHeight: '200px', overflow: 'auto'}}>
                {weapons}
            </Box>
        </>
    );
}

export default NodeWeaponsList;