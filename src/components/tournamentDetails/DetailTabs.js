import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
  } from 'reactstrap';
  import { useState } from 'react';
import TeamList from '../teamList/TeamList';
import Pools from '../pools/Pools';

  const DetailTabs = (props) => { 
    const {teams, totalTeams, total_pools} = props;
    const [activeTab, setActiveTab] = useState("1"); 
    
      // Function to toggle the active tab
      const toggleTab = (tab) => {
        if (activeTab !== tab) {
          setActiveTab(tab);
        }
      };

    return (
        <>
         <Nav tabs className="border-0">
          <NavItem>
            <NavLink
              className={`${activeTab === "1" ? "active" : ""} `}
              onClick={() => toggleTab("1")}
            >
              Teams
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => toggleTab("2")}
            >
              Pools
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => toggleTab("3")}
            >
              Playoffs
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab} className="mt-5">
            <TabPane tabId="1">
                <Row>
                    <TeamList teams={teams} totalTeams={totalTeams}/>
                
                </Row>
          </TabPane>
          <TabPane tabId="2">
                <Row>
                    <Pools />
                
                </Row>
          </TabPane>
          <TabPane tabId="3">
                <Row>
                    This would be the playoff bracket
                
                </Row>
          </TabPane>
        </TabContent>

        
        </>
    )
       
  }

  export default DetailTabs;