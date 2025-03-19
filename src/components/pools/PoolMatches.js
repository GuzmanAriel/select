import React from "react";
import { Table, Row, Col } from "reactstrap";

const PoolMatches = () => {
  const teams = [
    { name: "Thunder Strikers" },
    { name: "Blazing Hawks" },
    { name: "Iron Titans" },
    { name: "Shadow Wolves" },
    { name: "Storm Breakers" },
    { name: "Crimson Raiders" },
  ];

  // Generate all possible matches where each team plays against each other once
  const matches = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matches.push({
        team1: teams[i].name,
        team2: teams[j].name,
        set1: [Math.floor(Math.random() * 10) + 12, 21], // Fake set scores (12-21)
        set2: [Math.floor(Math.random() * 10) + 12, 21], // Fake set scores (12-21)
      });
    }
  }

  return (
    <div className="matches">
      <h3>Volleyball Tournament Matches</h3>
      <Row>
        
            {matches.map((match, index) => (
                <Col sm="12" md="6">
                    <div className="match" key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                    <h5>Match {index + 1}</h5>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>Team</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><strong>{match.team1}</strong></td>
                            <td>{match.set1[0]}</td>
                            <td>{match.set2[0]}</td>
                        </tr>
                        <tr>
                            <td><strong>{match.team2}</strong></td>
                            <td>{match.set1[1]}</td>
                            <td>{match.set2[1]}</td>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                </Col>
            ))}
        
      </Row>
      
    </div>
  );
};

export default PoolMatches;
