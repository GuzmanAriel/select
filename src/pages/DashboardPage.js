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
  import {selectAllTournaments } from '../features/tournaments/tournamentsSlice';
  
  const Dashboard = (props) => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("1");
    const tournaments = useSelector(selectAllTournaments);
  
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
             {
             tournaments.map((tournament)=> (
              <TournamentCard/>
              ))
             }
              
            </Row>
          </TabPane>
          <TabPane tabId="2">
           <Row>
            <TournamentCard/>
           </Row>
             
          </TabPane>
          <TabPane tabId="3">
            <Row>
             <TournamentCard/>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  };
  
  export default Dashboard;
  