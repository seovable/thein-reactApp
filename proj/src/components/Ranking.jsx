const teams = [
  { rank: 1, name: "두산", win: 51, lose: 28 },
  { rank: 2, name: "기아", win: 49, lose: 30 },
  { rank: 3, name: "삼성", win: 46, lose: 33 },
  { rank: 4, name: "롯데", win: 44, lose: 35 },
  { rank: 5, name: "KT", win: 42, lose: 37 },
];

function Ranking() {
  return (
    <>
      <h2>📊 KBO 순위</h2>

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
          {teams.map((team) => (
            <tr key={team.rank}>
              <td>{team.rank}</td>
              <td>{team.name}</td>
              <td>{team.win}</td>
              <td>{team.lose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Ranking;