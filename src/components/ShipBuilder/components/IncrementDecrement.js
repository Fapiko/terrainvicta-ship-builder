import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

const IncrementDecrement = (props) => {
    return (
        <div style={{
            display: 'inline-block',
            position: 'absolute',
            top: `${props.top}px`,
            left: `${props.left}px`
        }}>
            <div>
                {props.label}
            </div>
            <div style={{display: 'block', textAlign: 'center'}}>
                <DecrementButton/>
                1
                <IncrementButton/>
            </div>
        </div>
    )
}

export default IncrementDecrement;