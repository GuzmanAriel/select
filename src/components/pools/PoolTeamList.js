import { Table } from 'reactstrap';

const PoolTeamList = () => { 
    const teams = [
        { place: 1, team_name: "Thunder Strikers", wins: 10, losses: 2 },
        { place: 2, team_name: "Blazing Hawks", wins: 9, losses: 3 },
        { place: 3, team_name: "Iron Titans", wins: 8, losses: 4 },
        { place: 4, team_name: "Shadow Wolves", wins: 7, losses: 5 },
        { place: 5, team_name: "Storm Breakers", wins: 6, losses: 6 },
        { place: 6, team_name: "Crimson Raiders", wins: 6, losses: 6 },
    ];

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
                    {teams.map((team) => (
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
