import { Button, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"

function PetForm({ pet, action }) {

    const [state, setState] = useState({
        name: '', colour: '', age: '', breed: '', type: '', owner: ''
    })

    useEffect(() => {
        if (pet) {
            const { name, colour, age, breed, type, owner } = pet
            setState({ name, colour, age, breed, type, owner })
        }
    }, [pet])

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const handleAction = () => {
        action(state)
    }

    return <Stack direction="column" spacing={2}>
        <TextField name="name" label="Name" variant="outlined" value={state.name} onChange={handleChange} />
        <TextField name="colour" label="Colour" variant="outlined" value={state.colour} onChange={handleChange} />
        <TextField name="age" label="Age (years)" variant="outlined" value={state.age} onChange={handleChange} />
        <TextField name="breed" label="Breed" variant="outlined" value={state.breed} onChange={handleChange} />
        <TextField name="type" label="Type" variant="outlined" value={state.type} onChange={handleChange} />
        <TextField name="owner" label="Owner" variant="outlined" value={state.owner} onChange={handleChange} />
        <Button variant="contained" onClick={handleAction}>Submit</Button>
    </Stack>
}

export default PetForm