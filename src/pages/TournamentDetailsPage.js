import {useSelector} from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectTournamentById } from '../features/tournaments/tournamentsSlice';
import FirstPlaceIcon from '../assets/images/first-place.svg';
import SecondPlaceIcon from '../assets/images/second-place.svg';
import ThirdPlaceIcon from '../assets/images/third-place.svg';



const TounramentDetailsPage = () => {
    const { tournamentId } = useParams();
    const tournament = useSelector(selectTournamentById(tournamentId));
    console.log('%csrc/pages/TournamentDetailsPage.js:9 object', 'color: #007acc;', tournament);
    return (
     <Container className="mt-5 ts-alignment">
        <div className="mt-5 tournament-details position-relative" style={{
            background: "url('https://picsum.photos/1000/400')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="full-overlay"></div>

            <div className="tournament-details__heading position-relative">
                <h1>{tournament?.name}</h1>
                <h2>{tournament?.date_utc} || {tournament?.start_time}</h2>
                {tournament?.prizes && (
                    <div className="tournament-details__prizes">
                        <div>
                            <img src={FirstPlaceIcon} alt="first place icon"/> {tournament?.first_place_prize}
                        </div>
                        <div>
                            <img src={SecondPlaceIcon} alt="second place icon"/> {tournament?.second_place_prize}
                        </div>
                        <div>
                            <img src={ThirdPlaceIcon} alt="third place icon"/> {tournament?.third_place_prize}
                        </div>

                    </div>
                )}
                
            </div>
        </div>
        <div className="tournament-details__details">
            <Row>
                <Col sm="12" md="6">
                    <div>
                        <p><b>Tournament Type:</b> BYO4</p>
                    </div>
                </Col>
                <Col sm="12" md="6">
                    <div>
                        <p><b>Playoff Type:</b> BYO4</p>
                    </div>
                </Col>
                <Col sm="12" md="6">
                    <div>
                        <p><b>Location:</b> BYO4</p>
                    </div>
                </Col>
                <Col sm="12" md="6">
                    <div>
                        <p><b>Total Teams:</b> BYO4</p>
                    </div>
                </Col>
            </Row>
        </div>
        
      </Container>
    );
};

export default TounramentDetailsPage;