import {useSelector} from 'react-redux';
import Slider from "../components/slider/Slider";
import {selectFeaturedTournaments} from '../features/tournaments/tournamentsSlice';

  const SelectTournamentsPage = () => {
    const featuredTournaments = useSelector(selectFeaturedTournaments);

    return (
        <div className="ts-alignment ts-select-tournaments">
             <h1 className="mb-5 text-center">Austin Select Tournaments</h1>
             
            <Slider featuredTournaments={featuredTournaments}/>
        </div>
        
    )
}

export default SelectTournamentsPage;