import { useEffect, useState } from "react";
import "./App.css";

// import axios from "axios";
import { fetchArticlesWithTopic } from "./articles-api";

import ArticleList from "./ArticleList/ArticleList";

// ============================================== Task 1 ============================== //

// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>

//       {articles.length > 0 && (
//         <ul>
//           {articles.map(({ objectID, url, title }) => (
//             <li key={objectID}>
//               <a href={url} target="_blank" rel="noreferrer noopener">
//                 {title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;

// ============================================== Task 2: ArticleList component ============================== //
// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// export default App;

// ============================================== Task 3: Loading ============================== //

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         // 1. Встановлюємо індикатор в true перед запитом
//         setLoading(true);
//         const response = await axios.get(
//           "https://hn.algolia.com/api/v1/search?query=react"
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Тут будемо обробляти помилку
//       } finally {
//         // 2. Встановлюємо індикатор в false після запиту
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// export default App;

// ============================================== Task 4: Loading error ============================== //

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "https://hn.algolia.com/api/v1/search1?query=react"
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Встановлюємо стан error в true
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
//       {error && (
//         <p style={{ fontSize: 20, color: "red" }}>
//           Whoops, something went wrong! Please try reloading this page!
//         </p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// export default App;

// ============================================== Task 5: Delegating responsibilities ============================== //
export function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        // 2. Використовуємо HTTP-функцію
        const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}

export default App;
