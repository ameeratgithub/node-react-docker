import { Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import PetForm from "../../components/Pets/Form"


function AddPet() {
    let navigate = useNavigate()
    const action = async (state) => {
        const response = await fetch(`/api/pets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(state)
        })

        await response.json()
        navigate('/pets')
    }
    return <Stack direction='column' sx={{ maxWidth: '600px' }}>
        <Typography variant="h5" sx={{ textAlign: 'left', mb: '10px' }}>Add Pet</Typography>
        <PetForm action={action} />
    </Stack>

}

export default AddPet