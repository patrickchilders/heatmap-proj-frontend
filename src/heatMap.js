import {useEffect} from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';



function Heatmap(props){
   const map = useMap()
   useEffect(() => {
     const points = props.addressPoints
     ? props.addressPoints.map((p) => {
       return [p[0], p[1], p[2]]; // lat lng intensity
       })
     : [];
     L.heatLayer(points).addTo(map);
   }, []);
   return null;
}

export default Heatmap;
