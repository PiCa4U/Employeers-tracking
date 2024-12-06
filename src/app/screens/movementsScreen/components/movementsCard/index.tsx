import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import type {IPoint, NavigationProps} from "../../../../../packages/shared/model/repositories";
import {calculateRouteDistance, formatTimeRange} from "../../../../../packages/shared/utils";

type MovementRoute = { route: IPoint[]; originalIndex: number };

type MovementsCardProps = {
  routes: MovementRoute[];
  employeeId: string;
  date: string;
};

export const MovementsCard = ({ routes, date, employeeId }: MovementsCardProps) => {
  const navigation = useNavigation<NavigationProps<'Movements'>>();

  const handleMapNav = (originalIndex: number) => {
    navigation.navigate('MovementsMap', {
      employeeId,
      index: originalIndex,
    });
  };

  return (
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
        </View>
        {routes.map(({ route, originalIndex }, localIndex) => (
            <Pressable
                key={localIndex}
                onPress={() => handleMapNav(originalIndex)}
                style={styles.rangeContainer}
            >
              <View style={styles.rangeDistance}>
                <Text style={styles.range}>
                  {formatTimeRange(route[0].dt, route[route.length - 1].dt)}
                </Text>
                <Text style={styles.distance}>{calculateRouteDistance(route)}</Text>
              </View>
            </Pressable>
        ))}
        <View style={styles.divider} />
      </View>
  );
};
