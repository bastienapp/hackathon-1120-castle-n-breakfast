import Map from './components/Map';
import { MapContextProvider } from './contexts/MapContext';

export default function App() {
  return (
    <div className='App'>
      <MapContextProvider>
        <Map />
      </MapContextProvider>
    </div>
  );
}
