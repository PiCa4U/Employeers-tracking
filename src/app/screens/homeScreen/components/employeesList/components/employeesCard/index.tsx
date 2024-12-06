import React, {FC} from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import {RootScreenProps} from "../../../../../../../packages/shared/model/repositories";

type EmployeesCardProps = {
  name: string;
  phone: string;
  position: string;
  employeeId: string;
};


export const EmployeesCard:FC<EmployeesCardProps> = ({
  name,
  phone,
  position,
  employeeId,
}) => {

  const {navigate} = useNavigation<RootScreenProps<'MovementsMap'>['navigation']>();

  const handlePress = () => {
    navigate('Movements', {
      employeeId,
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
