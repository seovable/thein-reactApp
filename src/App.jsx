import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import RankingTable from "./components/RankingTable";
import Footer from "./components/Footer";

import games from "./data/games";

function App() {
  return (
    <>
      <Header />

      <Hero />

      <section className="game-section">
        <h2>🏟 오늘의 경기</h2>

        {games.map((game, index) => (
          <MatchCard key={index} game={game} />
        ))}
      </section>
      <RankingTable />
      <Footer />
    </>
  );
}

export default App;