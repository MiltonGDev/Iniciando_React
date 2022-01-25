import { Routes, Route} from "react-router-dom";

import { Navbar } from "../components/ui/Navbar"
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from "../components/hero/HeroScreen";


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">

                <Routes>
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                    
                    <Route path="search" element={<SearchScreen />} />
                    
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            
            </div>


        </>
    )
}
