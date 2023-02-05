import React from 'react'
import '../styles/form.css'

export default function UploadForm() {

    const submitForm = () => {
        alert('hola')
    }
  return (
    <div>
                <form className="form-product" onSubmit={submitForm}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="name of product" />
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" placeholder="price of product" />
                    <label htmlFor="name">URL Image</label>
                    <input type="text" name="image" id="image" placeholder="image of product" />
                    <label htmlFor="name">Is Tendency?</label>
                    <input type="checkbox" name="tendency" id="tendency" placeholder="tendency of product" />
                    <label htmlFor="name">Is Offer?</label>
                    <input type="checkbox" name="offer" id="offer" placeholder="offer of product" />
                    <button style={{marginTop: '10px'}} type="submit">Upload product</button>
                </form>
            </div>
  )
}
