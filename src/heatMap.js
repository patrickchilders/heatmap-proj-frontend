import {useEffect} from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';



function Heatmap(props){
   const map = useMap()
   useEffect(() => {
    //  let latlongBounds = map.getBounds();
    //  let apiBounds = [
    //    [latlongBounds.getNorthWest().lat, latlongBounds.getNorthWest().long],
    //    [latlongBounds.getNorthEast().lat, latlongBounds.getNorthEast().long],
    //    [latlongBounds.getSouthWest().lat, latlongBounds.getSouthWest().long],
    //    [latlongBounds.getSouthEast().lat, latlongBounds.getSouthEast().long]
    //  ];
    var points = [];
    fetch('https://heatmap-proj-backend.herokuapp.com/geoip')
      .then(res => res.json())
      .then((data) => {

        points = data.map((point) => {
          return [parseFloat(point[0]), parseFloat(point[1]), 1];
        })
        .filter((point) => {
            return !isNaN(point[0]) && !isNaN(point[1]);
        });
        L.heatLayer(points).addTo(map);
      })
      .catch(error => {
        console.log(error);
      });
   }, []);
   return null;
}

export default Heatmap;
