function MatchCard({ game }) {
  return (
    <div className="match-card">
      <h3>
        {game.home} ⚾ {game.away}
      </h3>

      <p>{game.stadium}</p>

      <strong>{game.time}</strong>
    </div>
  );
}

export default MatchCard;