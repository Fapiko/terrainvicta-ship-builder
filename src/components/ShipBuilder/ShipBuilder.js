import {Box, Grid} from "@mui/material";
import {emptyComponentMappings, selectComponentMappings} from "./components/EmptyComponent";
import DriveList from "./components/DriveList";
import {useState} from "react";
import ComponentSummary from "./ComponentSummary";
import {useSelector} from "react-redux";

const centerRow = 3;
const armorRow = 7;
const imageWidth = 72;

const ShipBuilder = (props) => {
    const ship = useSelector(state => state.ship);
    const highlightedComponent = useSelector(state => state.ship.highlightedComponentType);

    console.log(highlightedComponent);

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

    const px = (num, offset) => {
        if (offset === undefined) {
            offset = 0;
        }

        let position = num * imageWidth;
        position += offset * imageWidth;

        return position + 'px';
    }

    const customGrid = () => {
        const images = [];

        const columnLists = {};
        for (const [y, column] of Object.entries(slotMap)) {
            if (columnLists[y] === undefined) {
                columnLists[y] = [];
            }

            for (const [x, slotType] of Object.entries(column)) {
                if (slotType.includes('Armor') || slotType.includes('Propellant')) {
                    continue;
                }

                columnLists[y].push(slotType);
            }
        }

        ship.hull.shipModuleSlots.forEach(slot => {
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
            if (slot.moduleSlotType.toLowerCase() === highlightedComponent) {
                filename = selectComponentMappings[slot.moduleSlotType];
            } else {
                filename = emptyComponentMappings[slot.moduleSlotType];
            }

            const image = <img
                key={`${x}-${y}`}
                style={{position: 'absolute', top: px(slot.y, offset), left: px(slot.x)}}
                width={'72px'}
                src={`assets/shipbuildericons/${filename}.png`}
                alt={'icon'}/>

            images.push(image);
        });

        return images;
    }

    const imgGrid = customGrid()

    return (
        <Box sx={{backgroundColor: 'background.default', width: '100%', minHeight: '700px'}}>
            <Box sx={{display: 'flex'}}>
                <DriveList componentSelectionChanged={setSelectedComponent}/>
            </Box>
            <Grid container>
                <Grid item xs={3}>
                    <Box>Ship summary</Box>
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
                        {imgGrid}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShipBuilder;