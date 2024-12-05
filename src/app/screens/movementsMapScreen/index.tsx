import MapView from "react-native-maps"
import { View, Pressable, Text, StatusBar } from "react-native"
import { Arrow } from "../../../packages/assets/icons/arrow"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../../packages/model/repositories"
import { formatFullName } from "../../../packages/utils"


export const MovementsMapScreen = ({ route }: any) => {
    const { employeeId, name, phone, position } = route.params;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Movements'>>();

  const handleBack = () => {
    navigation.navigate('Movements');
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#306FE3" />
      <Pressable style={styles.header} onPress={handleBack}>
        <View style={styles.arrowContainer}>
          <Arrow />
        </View>
        <Text style={styles.headerText}>{formatFullName(name)}</Text>
      </Pressable>
      <MapView style={{width: "100%", height: "100%"}}>

      </MapView>
    </View>

  )
}
