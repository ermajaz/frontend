import {
    MapContainer,
    TileLayer,
    Polyline,
    Marker,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

interface LatLng {
  lat: number;
  lng: number;
}


// ✅ Fix Leaflet marker icons
const defaultIcon = L.icon({
    iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = defaultIcon;

// 🗺️ Animated Polyline Component
const AnimatedPolyline = ({
    positions,
    isInView,
}: {
    positions: LatLng[];
    isInView: boolean;
}) => {
    const [animatedPath, setAnimatedPath] = useState<LatLng[]>([]);
    const map = useMap();

    useEffect(() => {
        if (!isInView || !positions || positions.length < 2) return;

        let i = 0;
        const interval = setInterval(() => {
            setAnimatedPath(positions.slice(0, i + 1));
            i++;
            if (i >= positions.length) clearInterval(interval);
        }, 100);

        if (positions.length >= 2) {
            try {
                const bounds = positions.map((p) => [p.lat, p.lng]) as [
                    number,
                    number
                ][];
                map.fitBounds(bounds, { padding: [40, 40] });
            } catch (err) {
                console.warn("Invalid map bounds:", err);
            }
        }

        return () => clearInterval(interval);
    }, [isInView, positions, map]);

    if (!positions || positions.length < 2) return null;
    return <Polyline positions={animatedPath} color="#10B981" weight={4} />;
};

function Map({ destination, route, isInView }: { destination: { id: string }, route: LatLng[], isInView: boolean }) {


    return (
        <MapContainer
            key={`${destination.id}`}
            zoom={7}
            scrollWheelZoom={false}
            className="w-full h-full"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <AnimatedPolyline positions={route} isInView={isInView} />
            <Marker position={route?.[0]} />
            <Marker position={route?.[route.length - 1]} />
        </MapContainer>
    );
}

export default Map;