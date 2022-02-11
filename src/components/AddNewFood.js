import { useState } from "react";
import '../App.css'





function AddNewFood({ bd, setBd }) {

    

    const [addForm, setAddForm] = useState({
        name: '',
        calories: '',
        image: '',
        quantity: 0
    })



    const handleForm = (e) => {
        e.preventDefault()
        setBd([...bd, addForm])
        console.log(e.currentTarget.name.value)
        let form = document.querySelector('form')
        form.classList.add("hide")
        form.classList.remove("show")
        
    }

    //pegando todos os campos do form
    /* const handleName = (event) => {
        setAddForm({...addForm, 'name' : event.target.value }) 
    }
    const handleCal = (event) => {
        setAddForm({...addForm, 'calories' : event.target.value }) 
    }
    const handleImg = (event) => {
        setAddForm([{...addForm, 'image' : event.target.value} ]) 
    } */
     // achar um jeito mais fácil de iterar o event.target.name

     const handleChange = (event) => {
         setAddForm({ ...addForm, [event.target.name]: event.target.value})
     }


    console.log(bd)
    return (
        <div className="form">
            <form
                className="field hide"
                onSubmit={handleForm}
            >
                <label className="label">Name</label>
                <input
                    placeholder="Food Name"
                    type="text"
                    className="input is-small"
                    required
                    name="name"
                    onChange={handleChange}
                    value={addForm.name}
                />

                <label className="label">Cal</label>
                <input
                    placeholder="Calories"
                    type='number'
                    className="input is-small"
                    required
                    name="calories"
                    onChange={handleChange}
                />

                <label className="label">IMG</label>
                <input
                    placeholder="ex: https://..."
                    type="text"
                    className="input is-small"
                    name="image"
                    onChange={handleChange}
                />
                <button
                    className="button is-danger is-small"
                >SEND!</button>

            </form>
        </div>
    );
}

export default AddNewFood;