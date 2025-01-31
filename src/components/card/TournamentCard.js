import {useState, useEffect} from 'react';
import {
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
  } from 'reactstrap';
  
  import {useSpring, animated} from 'react-spring';
  import CurrentTournamentCardBody from './CurrentTournamentCardBody';
  import FutureTournamentCardBody from './FutureTournamentCardBody';
  import PastTournamentCardBody from './PastTournamentCardBody';

const TournamentCard = ({ item, tournamentDate }) => {
    
    const [toggle, setToggle] = useState(false);
    console.log('%csrc/components/card/TournamentCard.js:16 tournamentDate', 'color: #007acc;', tournamentDate);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <Col sm="6">
            <animated.div style={animatedStyle}>
                <Card className="bg-transparent mb-5">
                {tournamentDate === 'current' && <CurrentTournamentCardBody item={item} />}
                {tournamentDate === 'future' && <FutureTournamentCardBody item={item} />}
                {tournamentDate === 'past' && <PastTournamentCardBody item={item} />}
                    
                </Card>
            </animated.div>
        </Col>

    )
        
    
}

export default TournamentCard;