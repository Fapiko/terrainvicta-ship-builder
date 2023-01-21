import {Box, Grid} from "@mui/material";
import {emptyComponentMappings, selectComponentMappings} from "./components/EmptyComponent";
import {useState} from "react";
import ComponentSummary from "./ComponentSummary";
import {useDispatch, useSelector} from "react-redux";
import CategoryTab from "./CategoryTab";
import ComponentList from "./components/ComponentList";
import {dndActions} from "../../store/dnd-slice";
import ShipSummary from "./ShipSummary";
import IncrementDecrement from "./components/IncrementDecrement";

const centerRow = 3;
const armorRow = 7;
const imageWidth = 72;

const ShipBuilder = (props) => {
    const dispatch = useDispatch();
    const ship = useSelector(state => state.ship);
    const highlightedComponent = useSelector(state => state.ship.highlightedComponentType);
    const [populatedComponents, setPopulatedComponents] = useState({});
    const dnd = useSelector(state => state.dnd);

    const selectedComponentCategory = 'drive';

    const [selectedComponent, setSelectedComponent] = useState({});
    let componentsByType = {
        utility: [],
        nosehardpoint: [],
        hullhardpoint: [],
        battery: {},
        drive: {},
        radiator: {},
        powerplant: {},
        tailarmor: {},
        sidearmor: {},
        lateralarmor: {},
        propellant: {},
    };

    const slotMap = {};
    ship.hull.shipModuleSlots.forEach(slot => {
        if (slot.x === '' || slot.x === null) {
            return;
        }

        if (slotMap[slot.x] === undefined) {
            slotMap[slot.x] = {};
        }

        slotMap[slot.x][slot.y] = slot.moduleSlotType;

        const normalizedSlotType = slot.moduleSlotType.toLowerCase();
        switch (normalizedSlotType) {
            case 'utility':
            case 'nosehardpoint':
            case 'hullhardpoint':
                componentsByType[normalizedSlotType].push({x: slot.x, y: slot.y});
                break
            default:
                componentsByType[normalizedSlotType] = {x: slot.x, y: slot.y};
        }
    });

    const px = (position) => {
        return position + 'px';
    }

    const positionOffset = (num, offset) => {
        if (offset === undefined) {
            offset = 0;
        }

        let position = num * imageWidth;
        return position + offset * imageWidth;
    }

    const allowDropHandler = (e) => {
        e.preventDefault();
    }

    const onDropHandler = (coordinates) => {
        const expectedComponentType = slotMap[coordinates.x][coordinates.y];
        if (dnd.itemType !== expectedComponentType.toLowerCase()) {
            console.log('Dropped item type does not match expected component type', dnd.itemType, expectedComponentType);
            return;
        }

        const newState = {...populatedComponents};
        if (newState[coordinates.x] === undefined) {
            newState[coordinates.x] = {};
        }

        newState[coordinates.x][coordinates.y] = dnd.item;
        setPopulatedComponents(newState);
        dispatch(dndActions.drop());
    }

    let driveLocation = {top: 0, left: 0}
    const customGrid = () => {
        const images = [];

        const columnLists = {};
        for (const [y, column] of Object.entries(slotMap)) {
            if (columnLists[y] === undefined) {
                columnLists[y] = [];
            }

            for (const slotType of Object.values(column)) {
                if (slotType.includes('Armor') || slotType.includes('Propellant')) {
                    continue;
                }

                columnLists[y].push(slotType);
            }
        }

        ship.hull.shipModuleSlots.forEach(slot => {
            if (slot.moduleSlotType.includes('Armor') || slot.moduleSlotType.includes('Propellant')) {
                return;
            }

            if (slot.x === '' || slot.x === null) {
                return;
            }

            const x = slot.x;
            const y = slot.y;

            let offset = 0;
            if (y !== centerRow && y !== armorRow) {
                const length = columnLists[x].length;

                switch (length) {
                    case 2:
                        offset = .5;
                        break;
                    case 3:
                        offset = 1;
                        break;
                    case 4:
                        if (y === 0 || y === 6) {
                            offset = 1.5;
                        } else {
                            offset = .5;
                        }
                        break;
                    default:
                }

                if (y > centerRow) {
                    offset *= -1;
                }
            }

            let filename = '';
            if (populatedComponents[x] !== undefined && populatedComponents[x][y] !== undefined) {
                filename = `ico_${populatedComponents[x][y].normalizedDataName.replace('-', '_').toLowerCase()}`;
            } else if (slot.moduleSlotType.toLowerCase() === highlightedComponent) {
                filename = selectComponentMappings[slot.moduleSlotType];
            } else {
                filename = emptyComponentMappings[slot.moduleSlotType];
            }

            let maxHeight = 1;
            for (const column of Object.values(columnLists)) {
                if (column.length > maxHeight) {
                    maxHeight = column.length;
                }
            }

            const pixelOffset = centerRow - (maxHeight / 2);

            const top = positionOffset(slot.y, offset - pixelOffset);
            const left = positionOffset(slot.x);

            if (slot.moduleSlotType === 'Drive') {
                driveLocation = {
                    top: top,
                    left: left,
                };
            }

            const image = <img
                onDragOver={allowDropHandler}
                onDrop={onDropHandler.bind(null, {x, y})}
                key={`${x}-${y}`}
                style={{
                    position: 'absolute',
                    top: px(top),
                    left: px(left),
                }}
                width={'72px'}
                src={`assets/shipbuildericons/${filename}.png`}
                alt={'icon'}/>

            images.push(image);
        });

        return images;
    }

    const componentsList = [];
    for (const components of Object.values(populatedComponents)) {
        for (const component of Object.values(components)) {
            componentsList.push(component);
        }
    }

    const imgGrid = customGrid()

    return (
        <Box sx={{backgroundColor: 'background.default', width: '100%', minHeight: '700px'}}>
            <Grid container columns={8}>
                <Grid item xs={1}>
                    <CategoryTab selected={selectedComponentCategory === 'noseweapons'}>NOSE
                        WEAPONS</CategoryTab>
                </Grid>
                <Grid item xs={1}>
                    <CategoryTab selected={selectedComponentCategory === 'hullweapons'}>HULL
                        WEAPONS</CategoryTab>
                </Grid>
                <Grid item xs={1}>
                    <CategoryTab selected={selectedComponentCategory === 'utilitymodules'}>UTILITY
                        MODULES</CategoryTab>
                </Grid>
                <Grid item xs={1}>
                    <CategoryTab
                        selected={selectedComponentCategory === 'radiators'}>RADIATORS</CategoryTab>
                </Grid>
                <Grid item xs={1}>
                    <CategoryTab
                        selected={selectedComponentCategory === 'battery'}>BATTERY</CategoryTab>
                </Grid>
                <Grid item xs={1}>
                    <CategoryTab selected={selectedComponentCategory === 'powerplant'}>POWER
                        PLANT</CategoryTab>
                </Grid>
                <Grid item xs={1}>
                    <CategoryTab
                        selected={selectedComponentCategory === 'drive'}>DRIVE</CategoryTab>
                </Grid>
                <Grid item xs={1}>
                    <CategoryTab
                        selected={selectedComponentCategory === 'armor'}>ARMOR</CategoryTab>
                </Grid>
            </Grid>
            <Box sx={{display: 'flex'}}>
                <ComponentList componentSelectionChanged={setSelectedComponent}
                               componentCategory={selectedComponentCategory}/>
            </Box>
            <Grid container>
                <Grid item xs={3}>
                    <ShipSummary hull={ship.hull} components={componentsList}/>
                    <ComponentSummary component={selectedComponent}/>
                </Grid>
                <Grid item xs={9}>
                    <Box sx={{
                        position: 'relative',
                        width: '720px',
                        margin: 'auto',
                        marginTop: '20px',
                        marginBottom: '20px'
                    }}>
                        <IncrementDecrement top={driveLocation.top - imageWidth / 2 - 10}
                                            left={driveLocation.left - 10}
                                            label='Propellant Tanks'/>
                        {imgGrid}
                        <IncrementDecrement top={driveLocation.top + imageWidth + 10}
                                            left={driveLocation.left + 8}
                                            label=''/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShipBuilder;