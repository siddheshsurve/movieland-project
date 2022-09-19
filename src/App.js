import {useEffect} from "react";

//ac7bb0fb

const API_URL = 'https://www.omdbapi.com?apikey=ac7bb0fb'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <>
            <h1>App is here</h1>
        </>
    )
}

export default App;