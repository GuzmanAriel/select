import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
  } from 'reactstrap';
  import { useState } from 'react';
import PoolTeamList from './PoolTeamList';
import PoolMatches from './PoolMatches';

const Pools = (props) => { 
    const [activeTab, setActiveTab] = useState("1"); 
    
    // Function to toggle the active tab
    const toggleTab = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };

    return (
        <div>
             <Nav tabs className="border-0 pool-tabs">
                <NavItem>
                    <NavLink
                    className={`${activeTab === "1" ? "active" : ""} `}
                    onClick={() => toggleTab("1")}
                    >
                    Pool 1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => toggleTab("2")}
                    >
                    Pool 2
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab} className="mt-5">
                <TabPane tabId="1">
                    <Row>
                       <PoolTeamList/>
                       <div className="mt-5">
                         <PoolMatches />
                       </div>
                       
                    
                    </Row>
            </TabPane>
            <TabPane tabId="2">
                    <Row>
                        This would be the pools
                    
                    </Row>
            </TabPane>
            <TabPane tabId="3">
                    <Row>
                        This would be the playoff bracket
                    
                    </Row>
            </TabPane>
            </TabContent>
        </div>
    );
}

export default Pools;
