import DriveComponentSummary from "./DriveComponentSummary";

const ComponentSummary = (props) => {
    switch (props.component.componentType) {
        case 'drive':
            return <DriveComponentSummary drive={props.component}/>
        default:
            return (
                <></>
            );
    }
}

export default ComponentSummary;