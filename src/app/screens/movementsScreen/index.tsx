import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { Arrow } from '../../../packages/shared/assets/icons/arrow';
import { formatFullName, groupRoutesByDate } from '../../../packages/shared/utils';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../packages/shared/model/repositories';
import employeesData from '../../../packages/shared/mocks/data.json';
import { MovementsCard } from './components/movementsCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MovementsScreen = ({ route }: any) => {
  const { employeeId } = route.params;

  const { goBack } = useNavigation<NavigationProps<'Movements'>>();

  const foundEmployee = employeesData.employees.find((emp) => emp.id === employeeId);

  if (!foundEmployee) return null;

  const handleBack = () => {
    goBack();
  };

  const groupedRoutes = groupRoutesByDate(foundEmployee.routes);

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{formatFullName(foundEmployee.name)}</Text>
          <Pressable onPress={handleBack} style={styles.arrowContainer}>
            <Arrow />
          </Pressable>
        </View>
        {Object.entries(groupedRoutes).map(([date, routes]) => (
            <MovementsCard key={date} date={date} routes={routes} employeeId={foundEmployee.id} />
        ))}
      </SafeAreaView>
  );
};
