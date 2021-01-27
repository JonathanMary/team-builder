import React from 'react';



 function Form(props){

    const { onSubmit, onChange } = props;

    return (
        <form onSubmit={onSubmit}>
            <input name="name" type="text" placeholder="name..." id="nameInput" onChange={onChange}></input><br />
            <input name="email" type="email" placeholder="email..." id="emailInput" onChange={onChange}></input><br />
            <select name="role" onChange={onChange}>
                <option value="">-- role --</option>
                <option value="backend engineer">backend engineer</option>
                <option value="frontend engineer">frontend engineer</option>
                <option value="designer">designer</option>
                <option value="product manager">product manager</option>
            </select>
            <div className="submit">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form;