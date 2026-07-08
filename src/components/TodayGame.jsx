const games = [
  {
    home: "두산",
    away: "기아",
    time: "18:30",
  },
  {
    home: "롯데",
    away: "삼성",
    time: "18:30",
  },
  {
    home: "SSG",
    away: "KT",
    time: "18:30",
  },
];

function TodayGame() {
  return (
    <>
      <h2>🏟 오늘의 경기</h2>

      {games.map((game, index) => (
        <div className="gameCard" key={index}>
          <h3>
            {game.home} vs {game.away}
          </h3>

          <p>{game.time}</p>
        </div>
      ))}
    </>
  );
}

export default TodayGame;