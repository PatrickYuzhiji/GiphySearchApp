import React, { useState, useEffect } from 'react';
import './App.css';
import GifGrid from './components/GifGrid';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TermContext from './contexts/TermContext';
import GifListContext from './contexts/GifListContext';
import LoadingContext from './contexts/LoadingContext';
import PageContext from './contexts/PageContext';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import Pager from './components/Pager';
import { getTrendingGifs, searchGifs } from './services/giphyApi';

function App() {
  const [term, setTerm] = useState(''); // The current search term
  const [gifList, setGifList] = useState([]); // The returned GIF data
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchGifs = async () => {
      setIsLoading(true);
      try {
        if (term.trim() === '') {
          const trendingGifs = await getTrendingGifs(16, page * 16);
          setGifList(trendingGifs);
        } else {
          const searchResults = await searchGifs(term, 16, page * 16);
          setGifList(searchResults);
        }
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    // Whenever 'term' or 'page' changes, fetch the correct data
    fetchGifs();
  }, [term, page]);

  return (
    <div className="app-container">
      <TermContext.Provider value={[term, setTerm]}>
        <GifListContext.Provider value={[gifList, setGifList]}>
          <LoadingContext.Provider value={[isLoading, setIsLoading]}>
            <PageContext.Provider value={[page, setPage]}>
              <Header />
              <SearchBar />
              <Pager />
              {isLoading ? <Loader /> : <GifGrid />}
              <Pager />
            </PageContext.Provider>
          </LoadingContext.Provider>
        </GifListContext.Provider>
      </TermContext.Provider>
    </div>
  );
}

export default App;
