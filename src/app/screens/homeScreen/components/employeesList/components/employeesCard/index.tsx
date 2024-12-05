import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';

type EmployeesCardProps = {
  name: string;
  phone: string;
  position: string;
  employeeId: string;
};

type RootStackParamList = {
  Home: undefined;
  Movements: { employeeId: string; name: string; phone: string; position: string };
};

export const EmployeesCard = ({
  name,
  phone,
  position,
  employeeId,
}: EmployeesCardProps) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Movements'>>();

  const handlePress = () => {
    navigation.navigate('Movements', {
      employeeId,
      name,
      phone,
      position,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.positionText}>{position}</Text>
      <Text style={styles.phoneText}>{phone}</Text>
    </Pressable>
  );
};
