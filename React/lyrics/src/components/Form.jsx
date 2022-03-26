import React, {useState} from 'react';


const Form = ({setLyricsQuery}) => {

    const [query, setQuery] = useState({
        artist: '',
        song: ''
    })
    const [error, setError] = useState(false);

    const {artist, song} = query;
    
    //read input content
    const updateState = e => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        })
    }

    const apiRequest = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            setError(true);
            return;
        }

        //send to App

        setLyricsQuery(query);

    }

    return (
        <div className="bg-info">
            <div className="container">
            { error ? <p className="alert alert-danger text-center p-2">All fields must be filled</p> : null}
                <div className="row">
                   
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={apiRequest}
                    >

                        <fieldset>
                            <legend className="text-center"> Song Lyrics</legend>
                        
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                            
                            
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={updateState}
                                            value={song}
                                        />

                                    </div>
                                </div>

                            </div>
                           
                           <button 
                            type="submit"
                            className="btn btn-primary float-right"
                           >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;