import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { View, Pressable, Text, StatusBar } from 'react-native';
import { Arrow } from '../../../packages/assets/icons/arrow';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../packages/model/repositories';
import { formatFullName } from '../../../packages/utils';
import employeesData from '../../../packages/mocks/data.json';
import {MovementInfo} from "./components/movementInfo";
import {MovementsStart} from "../../../packages/assets/icons/MovementsStart";
import {MovementsEnd} from "../../../packages/assets/icons/MovementsEnd";

export const MovementsMapScreen = ({ route }: any) => {
  const { employeeId, index } = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Movements'>>();

  const foundEmployee = employeesData.employees.find((emp) => emp.id === employeeId);

  if (!foundEmployee) return null;

  const handleBack = () => {
    navigation.navigate('Movements', { employeeId });
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
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#306FE3" />
      <Pressable style={styles.header} onPress={handleBack}>
        <View style={styles.arrowContainer}>
          <Arrow />
        </View>
        <Text style={styles.headerText}>{`Передвижения ${formatFullName(foundEmployee.name)}`}</Text>
      </Pressable>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={initialRegion}
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
    </View>
  );
};
