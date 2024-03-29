import React, {useContext, useState} from 'react';
import {CategoriesContext} from '../context/CategoriesContext';
import {RecipesContext} from '../context/RecipesContext';

const Form = () => {

    const [query, setQuery] = useState({
        name: '',
        category: ''
    });

    const { categories } = useContext(CategoriesContext);
    const { searchQuery, setConsult } = useContext(RecipesContext);

    const getRecipeData = e => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                searchQuery(query);
                setConsult(true);
                
            }}
        >
            <fieldset className="text-center">
                <legend>Search Beverages by Category or Ingredient</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="name"
                        className="form-control"
                        type="text" 
                        placeholder="Search by Ingredient"
                        onChange={getRecipeData}    
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-control" 
                        name="category"
                        onChange={getRecipeData}
                    >
                        <option value="">--- Select Category ---</option>
                        {categories.map(cat => (
                            <option 
                                key={cat.strCategory} 
                                value={cat.strCategory} 
                            >{cat.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Search Beverage"    
                    />
                </div>
            </div>

    

        </form>
    );
}

export default Form;