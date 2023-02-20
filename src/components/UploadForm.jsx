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
            .post("/api/mydata", formData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        alert("Your data has been uploaded");
        setTimeout(() => {
            window.location.reload();
        }, 500
        );
    };


    return (
        <div>
            <form className="form-product" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="name of product" value={formData.name}
                    onChange={handleChange} />
                <label htmlFor="type">Type</label>
                <select type="text" name="type" id="type" placeholder="type of product" value={formData.type}
                    onChange={handleChange} >
                    <option hidden selected> -- select --</option>
                    <option >Shirts</option>
                    <option>Sweters</option>
                    <option>Jeans</option>
                    <option>Pants</option>
                    <option>Shorts</option>
                </select>
                
                {formData.type === 'Shirts' ? (<>
                    <label htmlFor="subtype">Sub-Type</label>
                    <select type="text" name="subtype" id="subtype" placeholder="subtype of product" value={formData.subtype}
                        onChange={handleChange} >
                        <option hidden selected> -- select --</option>
                        <option>T-Shirts</option>
                        <option>Tank Tops</option>
                        <option>Polos</option>
                        <option>Henleys</option>
                        <option>Casual Button-Down</option>
                    </select></>
                ) : (<></>)}
                {formData.type === 'Sweters' ? (<>
                    <label htmlFor="subtype">Sub-Type</label>
                    <select type="text" name="subtype" id="subtype" placeholder="subtype of product" value={formData.subtype}
                        onChange={handleChange} >
                        <option hidden selected> -- select --</option>
                        <option>Pullover</option>
                        <option>Caridgans</option>
                        <option>Polos</option>
                        <option>Vests</option>
                    </select></>
                ) : (<></>)}
                {formData.type === 'Jeans' ? (<>
                    <label htmlFor="subtype">Sub-Type</label>
                    <select type="text" name="subtype" id="subtype" placeholder="subtype of product" value={formData.subtype}
                        onChange={handleChange} >
                        <option hidden selected> -- select --</option>
                        <option>Regular</option>
                        <option>Fit</option>
                        <option>Skinny-Fit</option>
                        <option>Wrangler</option>
                    </select></>
                ) : (<></>)}
                {formData.type === 'Pants' ? (<>
                    <label htmlFor="subtype">Sub-Type</label>
                    <select type="text" name="subtype" id="subtype" placeholder="subtype of product" value={formData.subtype}
                        onChange={handleChange} >
                        <option hidden selected> -- select --</option>
                        <option>Dress</option>
                        <option>Casual</option>
                        <option>Jogging</option>
                    </select></>
                ) : (<></>)}
                {formData.type === 'Shorts' ? (<>
                    <label htmlFor="subtype">Sub-Type</label>
                    <select type="text" name="subtype" id="subtype" placeholder="subtype of product" value={formData.subtype}
                        onChange={handleChange} >
                        <option hidden selected> -- select --</option>
                        <option>Cargo</option>
                        <option>Denim</option>
                        <option>Flat-Form</option>
                        <option>Pleated</option>
                    </select></>
                ) : (<></>)}

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
