import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps"

import { styles } from "./styles";
import type { IUserMovement } from "../../../../../packages/model/repositories";
import { View, Text } from "react-native";
import { LocationIcon } from "../../../../../packages/assets/icons/LocationIcon";
import { formatFullName } from "../../../../../packages/utils";

type EmployeesMapProps = {
  employeesData: IUserMovement[]
}

export const EmployeesMap = ({
  employeesData,
}: EmployeesMapProps) => {
  const [region, setRegion] = useState<
    { latitude: number; longitude: number; latitudeDelta: number; longitudeDelta: number } | null
  >(null);
  const [markers, setMarkers] = useState<
    { id: string; name: string; lat: number; lng: number }[]
  >([]);

  useEffect(() => {
    const updatedMarkers = (employeesData)
      .map((employee) => {
        const lastRoute = employee.routes[employee.routes.length - 1];
        const lastPoint = lastRoute.route[lastRoute.route.length - 1];
        return {
          id: employee.id,
          name: employee.name,
          lat: lastPoint.lat,
          lng: lastPoint.lng,
        };
      });

    setMarkers(updatedMarkers);

    if (updatedMarkers.length > 0) {
      setRegion({
        latitude: updatedMarkers[0].lat,
        longitude: updatedMarkers[0].lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, []);

  if (!region) {
    return null;
  }

  return (
    <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.lat,
            longitude: marker.lng,
          }}
          title={marker.name}
        >
          {/* <View style={styles.customMarker}>
            <Text style={styles.markerText}>{formatFullName(marker.name)}</Text>
            <LocationIcon />
          </View> */}
        </Marker>
      ))}
    </MapView>
  )
}
