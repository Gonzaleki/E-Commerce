import React, { useState } from 'react'
import axios from 'axios'
import '../styles/form.css'

export default function UploadForm() {
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        type: '',
        subtype: '',
        price: "",
        img: '',
        tendency: false,
        offer: false
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleChangeCheck = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/dataBase", formData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };


    return (
        <div>
            <form className="form-product" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="name of product" value={formData.name}
                    onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" placeholder="price of product" value={formData.price}
                    onChange={handleChange} />
                <label htmlFor="img">URL Image</label>
                <input type="text" name="img" id="img" placeholder="image of product" value={formData.img}
                    onChange={handleChange} />
                <label htmlFor="tendency">Is Tendency?</label>
                <input type="checkbox" name="tendency" id="tendency" placeholder="tendency of product" value={formData.tendency}
                    onChange={handleChangeCheck} />
                <label htmlFor="offer">Is Offer?</label>
                <input type="checkbox" name="offer" id="offer" placeholder="offer of product" value={formData.offer}
                    onChange={handleChangeCheck} />
                <button style={{ marginTop: '10px' }} type="submit">Upload product</button>
            </form>
        </div>
    )
}
