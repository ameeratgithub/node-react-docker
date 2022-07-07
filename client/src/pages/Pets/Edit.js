import { Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PetForm from "../../components/Pets/Form"


function EditPet() {
    let navigate = useNavigate()
    const [pet, setPet] = useState()

    let { id } = useParams();

    useEffect(() => {
        fetchPet()
    }, [id])

    const fetchPet = async () => {
        const response = await fetch(`/api/pets/${id}`)
        const _pet = await response.json()

        setPet(_pet)
    }

    const action = async (state) => {
        const response = await fetch(`/api/pets/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })

        await response.json()
        navigate('/pets')
    }
    return <Stack direction='column' sx={{ maxWidth: '600px' }}>
        <Typography variant="h5" sx={{ textAlign: 'left', mb: '10px' }}>Edit Pet</Typography>
        <PetForm action={action} pet={pet} />
    </Stack>

}

export default EditPet