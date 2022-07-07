import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from '@mui/material';
import PetsList from './PetsList';
import { Link } from 'react-router-dom';




function PetsContainer({ pets, addPet }) {
    return <>
        {addPet && <Grid container direction="row" justifyContent="space-between" sx={{ mb: '10px' }}>
            <Grid>
                <Typography variant="h5" sx={{ textAlign: 'left', mb: '10px' }}>Pets</Typography>
            </Grid>
            <Grid item>
                <Button component={Link} to={'/pets/add'} variant="contained">
                    Add
                </Button>
            </Grid>
        </Grid>}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} component="div" >
                <TableHead component="div">
                    <TableRow component="div">
                        <TableCell component="div">Name</TableCell>
                        <TableCell component="div" align="right">Colour</TableCell>
                        <TableCell component="div" align="right">Age</TableCell>
                        <TableCell component="div" align="right">Breed</TableCell>
                        <TableCell component="div" align="right">Type</TableCell>
                        <TableCell component="div" align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody component="div">
                    <PetsList pets={pets} />
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default PetsContainer