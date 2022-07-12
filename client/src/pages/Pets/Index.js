
import { useEffect } from 'react';
import PetsContainer from '../../components/Pets/PetsContainer';

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPets } from '../../redux/actions/pets';

function Pets() {

    const pets = useSelector(state => {
        const pets = state.app.pets
        if (pets)
            return Array.isArray(pets) ? pets : pets?.payload
    }, shallowEqual) || []

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPets())
    }, [dispatch])

    return <>
        <PetsContainer pets={pets} addPet={true} />
    </>

}

export default Pets