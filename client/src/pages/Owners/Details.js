import { Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PetsContainer from "../../components/Pets/PetsContainer";

function Owner() {
    const [owner, setOwner] = useState()
    let { id } = useParams();

    useEffect(() => {
        fetchOwner()
    }, [id]);

    const fetchOwner = async () => {
        const response = await fetch(`/api/owners/${id}`)
        const _owner = await response.json()

        setOwner(_owner)
    }

    return owner && <Stack direction="column" spacing={2} sx={{textAlign:'left'}}>
        <Typography variant="h5">Owner Details</Typography>
        <Grid container justifyContent="start" spacing={2}>
            <Grid item xs={6} md={3}><b>Name: </b>{owner.name}</Grid>
            <Grid item xs={6} md={3}><b>Email: </b>{owner.email}</Grid>
            <Grid item xs={6} md={3}><b>Phone: </b>{owner.phone}</Grid>
            <Grid item xs={6} md={3}><b>Address: </b>{owner.address}</Grid>
        </Grid>
        <PetsContainer pets={owner.pets}/>
    </Stack>

}

export default Owner