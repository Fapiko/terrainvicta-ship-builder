import TableColumnLeft from "./TableColumnLeft";
import TableColumnRight from "./TableColumnRight";

const KeyValueRow = (props) => {
    return <>
        <TableColumnLeft>
            {props.label}:
        </TableColumnLeft>
        <TableColumnRight>
            {props.children}
        </TableColumnRight>
    </>
}

export default KeyValueRow;