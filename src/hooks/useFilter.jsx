import React, { useState, useEffect, useContext } from 'react'
import { FetchContext } from '../App';

export default function useFilter() {
    const data = useContext(FetchContext);
    const [price, setPrice] = useState();
    const [type, setType] = useState();
    const [subtype, setSubtype] = useState();
    const [tendency, setTendency] = useState();
    const [offer, setOffer] = useState();
    const [filteredData, setFilteredData] = useState();

    let filterData = () => {data.filter( product =>
        product.price <= price &&
        product.type === type &&
        product.subtpye === subtype &&
        product.tendency === tendency &&
        product.offer === offer
        )
        
    }

    return {  }
}
