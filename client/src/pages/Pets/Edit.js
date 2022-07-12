import { Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import PetForm from "../../components/Pets/Form"
import { getOwners } from "../../redux/actions/owners"
import { getPet, updatePet } from "../../redux/actions/pets"


function EditPet() {
    let navigate = useNavigate()

    let { id } = useParams();


    const fetchOwners = (state) => {
        const owners = state.app.owners
        if (owners)
            return Array.isArray(owners) ? owners : owners?.payload
    }
    
    const state = useSelector(state => {
        return { pet: state.app.pet, owners: fetchOwners(state) }
    }, shallowEqual) || {}

    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPet(id))
        dispatch(getOwners())
    }, [id, dispatch])

    const action = async (state) => {
        dispatch(updatePet({ id, ...state }))
        navigate('/pets')
    }
    return <Stack direction='column' sx={{ maxWidth: '600px' }}>
        <Typography variant="h5" sx={{ textAlign: 'left', mb: '10px' }}>Edit Pet</Typography>
        {state?.pet?.name && <PetForm action={action} pet={state?.pet} owners={state?.owners} />}
    </Stack>

}

export default EditPet