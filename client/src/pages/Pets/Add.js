import { Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import PetForm from "../../components/Pets/Form"

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addPet } from "../../redux/actions/pets";
import { useEffect } from "react";
import { getOwners } from "../../redux/actions/owners";


function AddPet() {
    let navigate = useNavigate()

    const fetchOwners = (_state) => {
        const owners = _state.app.owners
        if (owners)
            return Array.isArray(owners) ? owners : owners?.payload
    }

    const state = useSelector(_state => {
        return { totalPets: _state.app.pets?.length, owners: fetchOwners(_state) }
    }, shallowEqual)

    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOwners())
    }, [dispatch])

    const action = async (_state) => {
        dispatch(addPet({ id: state.totalPets + 1, ..._state }))
        navigate('/pets')
    }
    return <Stack direction='column' sx={{ maxWidth: '600px' }}>
        <Typography variant="h5" sx={{ textAlign: 'left', mb: '10px' }}>Add Pet</Typography>
        <PetForm action={action} owners={state?.owners}/>
    </Stack>

}

export default AddPet