import FetchCountries from "../components/FetchCountries";
import Top from "../components/Top";
const Home = () => {
  return (
    <div>
      <div className="title">
        <h1>Countries API</h1>

        <p>Made by Gia Marqueses</p>
        <hr />
      </div>

      <FetchCountries />
      <Top />
    </div>
  );
};

export default Home;
