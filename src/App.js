import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Navinshorts from "./component/Navinshorts.js";
import NewsContent from "./component/NewsContent/NewsContent";
import apikey from "./data/config";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} />

      <NewsContent
        setLoadMore={setLoadMore}
        loadmore={loadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />

      <Footer />
    </div>
  );
}

export default App;
