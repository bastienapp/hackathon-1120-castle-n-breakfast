import { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapContext } from '../contexts/MapContext';
import './Map.css';

export default function Map() {
  const castles = useContext(MapContext);
  return (
    <MapContainer center={[47.36, -1.8]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {castles.map((castle) => {
        console.log(castle);
        return (
          <Marker position={[castle.latitude, castle.longitude]}>
            <Popup>{`${castle.raison_sociale.split('-')[0]}`}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
