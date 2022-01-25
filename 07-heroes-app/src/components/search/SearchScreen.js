import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
// import { heroes } from "../../data/heroes";
import { getHeroByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";



export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

   


    
    const [ formValues, handleInputChange] = useForm( {
        searchText: q 
    } ); 

    const {searchText} = formValues;

    const heroesFileted =  useMemo(() => getHeroByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="row">

                <div className="col-5">

                    <h4>Buscar</h4>
                    <hr/>

                    <form>
                        <input
                            type={'text'}
                            placeholder="Buscar heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                            onClick={(e) => handleSearch(e)}
                        >
                            Buscar...
                        </button>
                    </form>

                </div>

                <div className="col-7">

                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (q==='') 
                        ? <div className="alert alert-info">Buscar un heroe</div> : (heroesFileted.length === 0) && 
                        <div className="alert alert-danger">No hay resultados de: {q}</div>
                    }

                    {
                        heroesFileted.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                                
                            />
                        ))
                    }

                </div>
            
            </div>            
        </>
    )
}
