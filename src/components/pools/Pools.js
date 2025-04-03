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
  
  const Pools = ({ pools }) => {
    const [activeTab, setActiveTab] = useState("0");
  
    const toggleTab = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
  
    return (
      <div>
        <Nav tabs className="border-0 pool-tabs">
          {pools?.map((pool, idx) => (
            <NavItem key={idx}>
              <NavLink
                className={activeTab === idx.toString() ? "active" : ""}
                onClick={() => toggleTab(idx.toString())}
              >
                Pool {pool.pool_id}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
  
        <TabContent activeTab={activeTab} className="mt-5">
          {pools?.map((pool, idx) => (
            <TabPane tabId={idx.toString()} key={idx}>
              <Row>
                <PoolTeamList teams={pool.teams} />
                <div className="mt-5">
                  <PoolMatches matches={pool.matches} />
                </div>
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </div>
    );
  };
  
  export default Pools;
  