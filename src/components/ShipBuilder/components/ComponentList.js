import DriveList from "./DriveList";

const ComponentList = (props) => {
    switch (props.componentCategory) {
        case 'drive':
            return <DriveList componentSelectionChanged={props.componentSelectionChanged}/>
        default:
            console.log('Unknown component category: ' + props.componentCategory)
            return <></>
    }
}

export default ComponentList;