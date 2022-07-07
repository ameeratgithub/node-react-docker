import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';


function OwnerItem({ owner }) {
    return <TableRow
        key={owner.id}
        component={Link}
        to={`/owners/${owner.id}`}
        sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration:'none', }}
    >
        <TableCell component="div">{owner.name}</TableCell>
        <TableCell component="div" align="right">{owner.email}</TableCell>
        <TableCell component="div" align="right">{owner.phone}</TableCell>
        <TableCell component="div" align="right">{owner.address}</TableCell>
    </TableRow>
}

export default OwnerItem;