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
    let points = [];
    fetch('https://heatmap-proj-backend.herokuapp.com/geoip')
      .then(res => res.json())
      .then((data) => {
        points = data.map((point) => {
          return [parseFloat(point[0]), parseFloat(point[1])];
        });
     })

    //  const points = props.addressPoints
    //  ? props.addressPoints.map((p) => {
    //    return [p[0], p[1], p[2]]; // lat lng intensity
    //    })
    //  : [];
    L.heatLayer(points).addTo(map);
   }, []);
   return null;
}

export default Heatmap;
