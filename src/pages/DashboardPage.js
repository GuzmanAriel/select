import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
  } from 'reactstrap';
  import { useState } from 'react';
  import { selectAllTournaments} from '../utils/tournaments/tournamentLists';
  
  const Dashboard = (props) => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("1");
    const tournaments = selectAllTournaments();
  
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
              <Col sm="6">
                <Card className="bg-transparent border-1 border-white">
                <img
                    alt="Sample"
                    src="https://picsum.photos/200/80"
                  />
                  <CardBody>
                    <CardTitle className="fw-bold card-title">First of Season Tournament</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional
                      content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </CardBody>
                </Card>
              </Col>

              <Col sm="6">
                <Card>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to additional
                    content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to additional
                    content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to additional
                    content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to additional
                    content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to additional
                    content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  };
  
  export default Dashboard;
  