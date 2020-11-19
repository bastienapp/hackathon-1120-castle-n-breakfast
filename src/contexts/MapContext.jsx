import { createContext, useState, useEffect } from 'react';
import { fetchCastles } from '../api/castleApi';

export const MapContext = createContext([]);

export function MapContextProvider(props) {
  const [castles, setCastles] = useState([]);

  useEffect(() => {
    async function fetch() {
      setCastles(await fetchCastles());
    }
    fetch();
  }, []);

  return (
    <MapContext.Provider value={castles}>{props.children}</MapContext.Provider>
  );
}
