import IncrementDecrementButton from "./IncrementDecrementButton";

const IncrementButton = (props) => {
    return (
        <IncrementDecrementButton clickHandler={props.clickHandler}>+</IncrementDecrementButton>
    );
}

export default IncrementButton;