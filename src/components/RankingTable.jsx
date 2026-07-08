import ranking from "../data/ranking";

function RankingTable() {
  return (
    <>
      <h2>📊 팀 순위</h2>

      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>팀</th>
            <th>승</th>
            <th>패</th>
          </tr>
        </thead>

        <tbody>
          {ranking.map((team) => (
            <tr key={team.rank}>
              <td>{team.rank}</td>
              <td>{team.team}</td>
              <td>{team.win}</td>
              <td>{team.lose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RankingTable;