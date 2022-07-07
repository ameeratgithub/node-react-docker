import OwnerItem from "./OwnerItem"

function OwnersList({owners}) {    
    
    return owners.map(owner => (
        <OwnerItem owner={owner} key={owner.id} />
    ))
}

export default OwnersList