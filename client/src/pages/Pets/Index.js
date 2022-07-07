
import { useEffect, useState } from 'react';
import PetsContainer from '../../components/Pets/PetsContainer';

function Pets() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        getPets()
    }, [])

    const getPets = async () => {
        const resp = await fetch(`/api/pets`);
        setPets(await resp.json())
    }

    return <>
        <PetsContainer pets={pets} addPet={true} />
    </>

}

export default Pets