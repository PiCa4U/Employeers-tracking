import React from 'react';
import { View, Text, Pressable, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Arrow } from '../../../packages/assets/icons/arrow';
import { formatFullName } from '../../../packages/utils';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../packages/model/repositories';

export const MovementsScreen = ({ route }: any) => {
  const { employeeId, name, phone, position } = route.params;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Movements', 'Movements map'>>();

  const handleBack = () => {
    navigation.navigate('Home');
  };

  const handleMapNav = () => {
    navigation.navigate('Movements map', {
      name,
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#306FE3" />
      <Pressable style={styles.header} onPress={handleBack}>
        <View style={styles.arrowContainer}>
          <Arrow />
        </View>
        <Text style={styles.headerText}>{formatFullName(name)}</Text>
      </Pressable>
      <Pressable onPress={handleMapNav}>
        <Text>TEXT</Text>
      </Pressable>
    </View>
  );
};
