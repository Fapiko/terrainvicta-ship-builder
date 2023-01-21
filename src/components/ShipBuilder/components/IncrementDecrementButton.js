import {Box} from "@mui/material";
import {useState} from "react";

const IncrementDecrementButton = (props) => {
    const [hovering, setHovering] = useState(false);

    let backgroundColor = 'background.paper';
    if (hovering) {
        backgroundColor = 'background.hover';
    }

    const mouseEnterHandler = () => {
        setHovering(true);
    }

    const mouseLeaveHandler = () => {
        setHovering(false);
    }

    return (
        <Box sx={{
            backgroundColor: `${backgroundColor}`,
            fontSize: 16,
            fontWeight: 'bold',
            display: 'inline-block',
            width: '20px',
            height: '20px',
            textAlign: 'center',
            lineHeight: '15px',
            borderRadius: '50%',
            borderColor: 'text.primary',
            borderStyle: 'solid',
            borderWidth: '2px',
            cursor: 'pointer',
            marginLeft: '3px',
            marginRight: '3px',
        }} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            {props.children}
        </Box>
    );
}

export default IncrementDecrementButton;