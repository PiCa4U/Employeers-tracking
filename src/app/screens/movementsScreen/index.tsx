import React from 'react';
import { View, Text, Pressable, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Arrow } from '../../../packages/assets/icons/arrow';
import { formatFullName } from '../../../packages/utils';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../packages/model/repositories';
import employeesData from '../../../packages/mocks/data.json';
import {MovementsCard} from "./components/movementsCard";

export const MovementsScreen = ({ route }: any) => {
  const { employeeId } = route.params;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Movements'>>();

  const foundEmployee = employeesData.employees.find((emp) => emp.id === employeeId);

  if(!foundEmployee) return null
  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#306FE3" />
      <Pressable style={styles.header} onPress={handleBack}>
        <View style={styles.arrowContainer}>
          <Arrow />
        </View>
        <Text style={styles.headerText}>{formatFullName(foundEmployee.name)}</Text>
      </Pressable>
        {foundEmployee.routes.map((route, index) =>
          <MovementsCard key={index} route={route} employeeId={foundEmployee.id} index={index}/>)
        }
    </View>
  );
};
