import DriveComponentSummary from "./DriveComponentSummary";
import NoseWeaponComponentSummary from "./NoseWeaponComponentSummary";

const ComponentSummary = (props) => {
    switch (props.component.componentType) {
        case 'drive':
            return <DriveComponentSummary drive={props.component}/>
        case 'nosehardpoint':
            return <NoseWeaponComponentSummary weapon={props.component}/>
        default:
            console.log('Unknown component type: ' + props.component.componentType);
            return (
                <></>
            );
    }
}

export default ComponentSummary;