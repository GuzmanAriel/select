import {useSelector} from 'react-redux';
import Slider from "../components/slider/Slider";
import {selectFeaturedTournaments} from '../features/tournaments/tournamentsSlice';

  const SelectTournamentsPage = () => {
    const featuredTournaments = useSelector(selectFeaturedTournaments);
console.log('%csrc/pages/SelectTournamentsPage.js:7 featuredTournaments', 'color: #007acc;', featuredTournaments);
    return (
        <div className="ts-alignment">
             <h1 className="mb-5">Austin Select Tournaments</h1>
             
            <Slider featuredTournaments={featuredTournaments}/>
        </div>
        
    )
}

export default SelectTournamentsPage;