import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import {useState} from "react";

const IncrementDecrement = (props) => {
    let min = 0;
    if (props.min !== undefined) {
        min = props.min;
    }

    const [count, setCount] = useState(min);


    const decrementCount = () => {
        let newCount = count - 1;

        if (newCount < min) {
            newCount = min;
        }

        setCount(newCount);
        props.onChange(newCount);
    }

    const incrementCount = () => {
        let newCount = count + 1;

        if (props.max !== undefined && newCount > props.max) {
            newCount = props.max;
        }

        setCount(newCount);
        props.onChange(newCount);
    }

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
                <DecrementButton clickHandler={decrementCount}/>
                {count}
                <IncrementButton clickHandler={incrementCount}/>
            </div>
        </div>
    )
}

export default IncrementDecrement;