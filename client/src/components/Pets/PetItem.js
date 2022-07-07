import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';


function PetItem({ pet }) {
    return <TableRow
        key={pet.email}
        component="div"
        sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none', }}
    >
        <TableCell component="div">{pet.name}</TableCell>
        <TableCell component="div" align="right">{pet.colour}</TableCell>
        <TableCell component="div" align="right">{pet.age}</TableCell>
        <TableCell component="div" align="right">{pet.breed}</TableCell>
        <TableCell component="div" align="right">{pet.type}</TableCell>
        <TableCell component="div" align="right">
            <Button size='small' component={Link} to={`/pets/${pet.id}/edit`}>
                Edit
            </Button>
        </TableCell>
    </TableRow>
}

export default PetItem;