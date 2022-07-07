import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OwnersList from '../../components/Owners/OwnersList';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';




function Owners() {
    const [owners, setOwners] = useState([])

    useEffect(() => {
        getOwners()
    }, [])

    const getOwners = async () => {
        const resp = await fetch(`/api/owners`);
        setOwners(await resp.json())
    }

    return <>
        <Typography variant="h5" sx={{textAlign:'left', mb:'10px'}}>Owners</Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} component="div" >
                <TableHead component="div">
                    <TableRow component="div">
                        <TableCell component="div">Name</TableCell>
                        <TableCell component="div" align="right">Email</TableCell>
                        <TableCell component="div" align="right">Phone</TableCell>
                        <TableCell component="div" align="right">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody component="div">
                    <OwnersList owners={owners} />
                </TableBody>
            </Table>
        </TableContainer>
    </>

}

export default Owners