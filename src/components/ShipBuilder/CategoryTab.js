import {Box} from "@mui/material";
import {useState} from "react";

const CategoryTab = (props) => {
    const [hovering, setHovering] = useState(false);

    let backgroundColor = 'background.paper';
    if (props.selected || hovering) {
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
            lineHeight: '40px',
            backgroundColor: `${backgroundColor}`,
            textAlign: 'center',
            cursor: 'pointer',
        }} onClick={props.onClick} onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}>
            {props.children}
        </Box>
    )
}

export default CategoryTab;