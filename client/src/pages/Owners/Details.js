import { Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PetsContainer from "../../components/Pets/PetsContainer";
import { getOwner } from "../../redux/actions/owners";

function Owner() {
    let { id } = useParams();

    const owner = useSelector(state => {
        return state.app.owner
    }, shallowEqual) || {}

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOwner(id))
    }, [dispatch, id])

    return owner && <Stack direction="column" spacing={2} sx={{ textAlign: 'left' }}>
        <Typography variant="h5">Owner Details</Typography>
        <Grid container justifyContent="start" spacing={2}>
            <Grid item xs={6} md={3}><b>Name: </b>{owner.name}</Grid>
            <Grid item xs={6} md={3}><b>Email: </b>{owner.email}</Grid>
            <Grid item xs={6} md={3}><b>Phone: </b>{owner.phone}</Grid>
            <Grid item xs={6} md={3}><b>Address: </b>{owner.address}</Grid>
        </Grid>
        <PetsContainer pets={owner.pets} />
    </Stack>

}

export default Owner