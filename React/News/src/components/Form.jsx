import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import {PropTypes} from 'prop-types';

const Form = ({setCategory}) => {

    //submit form, category to app.jsx
    const searchNews = e => {
        e.preventDefault();

        setCategory(category);
    }

    const options = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertaiment', label: 'Entertaiment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]

    //custom hook
    const [category, SelectNews] = useSelect('general', options);

    return ( 
        <div className={`${styles.browser} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>
                        Search news by category
                    </h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
        
     );
}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}
export default Form;