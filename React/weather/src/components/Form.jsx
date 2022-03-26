import React, {useState} from 'react'


const Form = ({search, setSearch, setConsult}) => {
    
  
    const [error, setError] = useState(false)

    const handleChange = e => {

        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {

        e.preventDefault()
        
        if(city.trim() === '' || country.trim() === ''){
            setError(true)
            return;
        }

        setConsult(true);
        setError(false);
    }

    const {city, country} = search

    return ( 
        <form
            onSubmit={handleSubmit}
        >

            {error ? <p className="red darken-4">All fields required</p> : null}
            <div className=" input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    onChange={handleChange}
                >
                    <option value="">--- Select Country ---</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit" 
                    value="Get Weather"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"/>
            </div>
        </form>
     );
}
 
export default Form;