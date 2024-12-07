import React, {FC} from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { View, Pressable, Text, StatusBar } from 'react-native';
import { Arrow } from '../../../packages/shared/assets/icons/arrow';
import { styles } from './styles';
import { RootScreenProps} from '../../../packages/shared/model/repositories';
import { formatFullName } from '../../../packages/shared/utils';
import employeesData from '../../../packages/shared/mocks/data.json';
import {MovementInfo} from "./components/movementInfo";
import {MovementsStart} from "../../../packages/shared/assets/icons/MovementsStart";
import {MovementsEnd} from "../../../packages/shared/assets/icons/MovementsEnd";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTranslation} from "../../../packages/shared/hooks";

export const MovementsMapScreen:FC<RootScreenProps<'MovementsMap'>> = ({ route, navigation }) => {
  const { employeeId, index } = route.params;
  const { t } = useTranslation("translation");

  const foundEmployee = employeesData.employees.find((emp) => emp.id === employeeId);

  if (!foundEmployee) return null;

  const handleBack = () => {
    navigation.goBack();
  };

  const routeItem = foundEmployee.routes[index];

  if (!routeItem) return null;

  const routeCoordinates = routeItem.route.map((point) => ({
    latitude: point.lat,
    longitude: point.lng,
  }));

  const startPoint = routeCoordinates[0];
  const endPoint = routeCoordinates[routeCoordinates.length - 1];

  const initialRegion = {
    latitude: startPoint.latitude,
    longitude: startPoint.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={handleBack}>
        <View style={styles.arrowContainer}>
          <Arrow />
        </View>
        <Text style={styles.headerText}>{`${t("MovementsMap.header.movements")} ${formatFullName(foundEmployee.name)}`}</Text>
      </Pressable>
      <MapView
        style={styles.map}
        region={initialRegion}
      >
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#306FE3"
          strokeWidth={3}
        />
        <Marker coordinate={startPoint} title="Start">
          <MovementsStart/>
        </Marker>
        <Marker coordinate={endPoint} title="End">
          <MovementsEnd/>
        </Marker>
      </MapView>
      <MovementInfo foundEmployee={foundEmployee} index={index}/>
    </SafeAreaView>
  );
};
