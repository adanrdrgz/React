import React, {useState} from 'react'
import Error from './Error'

const Form = ({setQuery}) => {

    const [term, setTerm] = useState('');
    const [error, setError] = useState(false);

    const searchImage = e => {
        e.preventDefault();

        //validation

        if(term.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        
        //send term to APP

        setQuery(term);
    }

    return ( 
        <form
            onSubmit={searchImage}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search any image, ex: football or cafe"
                        onChange= { e => setTerm(e.target.value)}
                   />
                </div>

                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>

            {error? <Error message="Field must be filled" /> : null}
        </form>
     );
}
 
export default Form;