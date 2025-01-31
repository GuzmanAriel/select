import {useSelector} from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectTournamentById } from '../features/tournaments/tournamentsSlice';

const TounramentDetailsPage = () => {
    const { tournamentId } = useParams();
    const tournament = useSelector(selectTournamentById(tournamentId));
    console.log('%csrc/pages/TournamentDetailsPage.js:9 object', 'color: #007acc;', tournament);
    return (
        <Container>
             {tournamentId}
        </Container>
    );
};

export default TounramentDetailsPage;