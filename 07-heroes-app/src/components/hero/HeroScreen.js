import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { getHeroById } from "../../helpers/getHeroesById";
import { heroImage } from "../../helpers/heroImages";




export const HeroScreen = () => {

    const {heroeId} = useParams();

    const hero = useMemo( () => getHeroById(heroeId), [heroeId] ); 
    

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1)
    }

    if (!hero){
        return <Navigate to='/' />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    // const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="row mt-5">

            <div className="col-4">

                <img 
                src={ heroImage(`./${heroeId}.jpg`) }
                alt={superhero}
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />

            </div>

            <div className="col-8 animate__animated animate__fadeIn">

                <h3>{superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> {first_appearance}
                    </li>
                </ul> 

                <h5 className="mt-4">Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info"
                onClick={handleReturn}
                
                >
                    Return
                </button>

            </div>

        </div>
    )
}