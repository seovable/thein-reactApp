function TeamCard({ team }) {
  return (
    <div className="card">
      <h2>{team.rank}위</h2>

      <h3>{team.name}</h3>

      <p>승 : {team.win}</p>

      <p>패 : {team.lose}</p>
    </div>
  );
}

export default TeamCard;