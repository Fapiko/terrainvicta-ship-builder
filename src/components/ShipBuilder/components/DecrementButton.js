import IncrementDecrementButton from "./IncrementDecrementButton";

const DecrementButton = (props) => {
    return (
        <IncrementDecrementButton clickHandler={props.clickHandler}>-</IncrementDecrementButton>
    );
}

export default DecrementButton;