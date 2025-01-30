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

const TournamentCard = ({ item }) => {
    const { name, date_utc, start_time, tournament_type, playoff_elimination_type, location} = item;
    const [toggle, setToggle] = useState(false);
    console.log('%csrc/components/card/TournamentCard.js:17 name', 'color: #007acc;', name);

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
                    <CardBody>
                        <img className="w-100 card-image" src="https://picsum.photos/200/300"/>
                        <div className="border-b-1 border-white justify-content-between mb-4 card-bottom">
                            <CardTitle className="fw-bold mb-2 card-title">{name}</CardTitle>
                                <div className="d-flex align-items-end">
                                    <span className="calendar-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"/></svg>
                                    </span>
                                    <span className="font-weight-light card-date-time">{date_utc} | {start_time}</span>
                                </div>
                                <div className="d-flex align-items-end mb-2">
                                    <span className="location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                    </span>
                                    <span>{location}</span>
                                </div>
                            <CardText className="d-flex justify-content-between">
                                <div>{tournament_type} | {playoff_elimination_type}</div>
                            </CardText>
                        </div>
                        
                        
                    </CardBody>
                </Card>
            </animated.div>
        </Col>

    )
        
    
}

export default TournamentCard;