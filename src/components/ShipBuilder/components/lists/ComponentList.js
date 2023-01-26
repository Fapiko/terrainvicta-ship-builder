import DriveList from "./DriveList";
import NoseWeaponsList from "./NoseWeaponsList";

const ComponentList = (props) => {
    switch (props.componentCategory) {
        case 'drive':
            return <DriveList componentSelectionChanged={props.componentSelectionChanged}/>
        case 'noseweapons':
            return <NoseWeaponsList componentSelectionChanged={props.componentSelectionChanged}/>
        default:
            console.log('Unknown component category: ' + props.componentCategory)
            return <></>
    }
}

export default ComponentList;