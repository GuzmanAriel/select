import {useSelector} from 'react-redux';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
  } from 'reactstrap';
  import { useState } from 'react';
  import TournamentCard from '../components/card/TournamentCard';
  import {selectCurrentTournaments, selectPastTournaments, selectFutureTournaments } from '../features/tournaments/tournamentsSlice';
  
  const Dashboard = (props) => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("1");
    const currentTournaments = useSelector(selectCurrentTournaments);
    const pastTournaments = useSelector(selectPastTournaments);
    const futureTournaments = useSelector(selectFutureTournaments);



  
    // Function to toggle the active tab
    const toggleTab = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
  
    return (
      <div id="dashboard" className="ts-dashboard">
        <Nav tabs className="border-0">
          <NavItem>
            <NavLink
              className={`${activeTab === "1" ? "active" : ""} `}
              onClick={() => toggleTab("1")}
            >
              Current
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => toggleTab("2")}
            >
              Upcoming
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => toggleTab("3")}
            >
              Past
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="mt-5">
          <TabPane tabId="1">
            <Row>
            {currentTournaments.map((item, idx) => {
                 return (
                    item && (
                            <TournamentCard item={item} tournamentDate="current" key={`current-tournament${idx}`}/>
                    )
                );
            })}
              
            </Row>
          </TabPane>
          <TabPane tabId="2">
           <Row>
           {futureTournaments.map((item, idx) => {
                 return (
                    item && (
                            <TournamentCard item={item} tournamentDate="future" key={`current-tournament${idx}`}/>
                    )
                );
            })}
           </Row>
             
          </TabPane>
          <TabPane tabId="3">
            <Row>
            {pastTournaments.map((item, idx) => {
                 return (
                    item && (
                            <TournamentCard item={item} tournamentDate="past" key={`current-tournament${idx}`}/>
                    )
                );
            })}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  };
  
  export default Dashboard;
  