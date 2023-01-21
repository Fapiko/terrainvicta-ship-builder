const ShipBuilderIcon = (props) => {
    return (
        <img width={'72px'} src={`assets/shipbuildericons/${props.filename}.png`}
             alt={props.filename}/>
    );
}

export default ShipBuilderIcon;
