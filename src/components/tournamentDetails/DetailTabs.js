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
import { DoubleElimination, SingleElimination } from '../brackets/SingleElimination';

  const DetailTabs = (props) => { 
    const {teams, totalTeams, total_pools, pools, eliminationType} = props;
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
                    <Pools poolsTotal={total_pools} pools={pools} teams={teams}/>   
                </Row>
          </TabPane>
          <TabPane tabId="3">
                <Row>
                  {/* {
                    eliminationType === "Single" ? (
                      <SingleElimination />
                    ) : (
                      <DoubleElimination />
                    )
                  } */}
                </Row>
          </TabPane>
        </TabContent>

        
        </>
    )
       
  }

  export default DetailTabs;