import { useState} from 'react'

export default function useFilter() {
    const [price, setPrice] = useState();
    const [type, setType] = useState();
    const [subtype, setSubtype] = useState();
    const [tendency, setTendency] = useState();
    const [offer, setOffer] = useState();


    return { price, setPrice, type, setType, subtype, setSubtype, tendency, setTendency, offer, setOffer}
}
