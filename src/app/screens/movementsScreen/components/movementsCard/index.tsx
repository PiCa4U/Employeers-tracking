import {Pressable, Text, View} from "react-native"
import type {IRoute} from "../../../../../packages/shared/model/repositories";
import {calculateRouteDistance, formatDate, formatTimeRange} from "../../../../../packages/shared/utils";
import {styles} from "./styles";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import type {RootStackParamList} from "../../../../../packages/shared/model/repositories";

type MovementsCardProps = {
  route: IRoute
  employeeId: string
  index: number
}
export const MovementsCard = ({route, employeeId, index}: MovementsCardProps) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Movements'>>();

  const handleMapNav = () => {
    navigation.navigate('MovementsMap', {
      employeeId,
      index
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{formatDate(route.route[0].dt)}</Text>
      </View>
      <Pressable onPress={handleMapNav} style={styles.rangeContainer}>
        <View style={styles.rangeDistance}>
          <Text style={styles.range}>{formatTimeRange(route.route[0].dt, route.route[route.route.length - 1].dt)}</Text>
          <Text style={styles.distance}>{calculateRouteDistance(route.route)}</Text>
        </View>
      </Pressable>
    </View>
  )
}
