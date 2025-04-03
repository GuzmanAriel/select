import { Table } from 'reactstrap';

const PoolTeamList = ({ teams }) => { 
    // BACKEND WORK - Order needs to be determined by wins and losses (standings)
    return (
        <div>
            <h3>Summary</h3>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Team Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                    </tr>
                </thead>
                <tbody>
                    {teams?.map((team) => (
                        <tr key={team.place}>
                            <th scope="row">{team.place}</th>
                            <td>{team.team_name}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PoolTeamList;
