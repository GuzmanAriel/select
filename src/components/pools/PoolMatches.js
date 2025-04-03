import React from "react";
import { Table, Row, Col } from "reactstrap";

const PoolMatches = ({ matches }) => {
  if (!matches || matches.length === 0) {
    return <p>No matches scheduled for this pool yet.</p>;
  }

  return (
    <div className="matches">
      <h3>Pool Matches</h3>
      <Row>
        {matches.map((match, index) => (
          <Col sm="12" md="6" key={index}>
            <div
              className="match"
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
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
                    <td>{match.set1?.[0] ?? "-"}</td>
                    <td>{match.set2?.[0] ?? "-"}</td>
                  </tr>
                  <tr>
                    <td><strong>{match.team2}</strong></td>
                    <td>{match.set1?.[1] ?? "-"}</td>
                    <td>{match.set2?.[1] ?? "-"}</td>
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
