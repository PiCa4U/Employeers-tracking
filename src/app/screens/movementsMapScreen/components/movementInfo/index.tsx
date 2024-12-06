import { Pressable, Text, View, Linking } from "react-native";
import { styles } from "./style";
import type { IUserMovement } from "../../../../../packages/model/repositories";
import {
    calculateAverageSpeed,
    calculateRouteDistance,
    formatDate,
    formatTimeDifference,
    formatTimeRange
} from "../../../../../packages/utils";

type MovementInfoProps = {
    foundEmployee: IUserMovement;
    index: number;
};

const makeCall = (phoneNumber: string) => {
  const phoneUrl = `tel:${phoneNumber}`;
  Linking.canOpenURL(phoneUrl).then((supported) => {
    if (supported) {
      Linking.openURL(phoneUrl);
    } else {
      console.error("Телефонный вызов не поддерживается на этом устройстве.");
    }
  });
};

const sendWhatsAppMessage = (phoneNumber: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

  Linking.canOpenURL(whatsappUrl).then((supported) => {
    if (supported) {
      Linking.openURL(whatsappUrl);
    } else {
      console.error("WhatsApp не установлен или не поддерживается на этом устройстве.");
    }
  });
};

export const MovementInfo = ({ foundEmployee, index }: MovementInfoProps) => {
  const route = foundEmployee.routes[index].route;

  const date = `${formatDate(route[0].dt)}, ${formatTimeRange(route[0].dt, route[route.length - 1].dt)}`;
  const time = formatTimeDifference(route[0].dt, route[route.length - 1].dt);
  const distance = calculateRouteDistance(route);

  const timeInMinutes = Math.floor((route[route.length - 1].dt - route[0].dt) / (1000 * 60));
  const averageSpeed = calculateAverageSpeed(parseFloat(distance), timeInMinutes);

  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Продолжительность</Text>
          <Text style={styles.resultsText}>{time}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Расстояние</Text>
          <Text style={styles.resultsText}>{distance}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Средняя скорость</Text>
          <Text style={styles.resultsText}>{averageSpeed}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.writeButton}
          onPress={() => sendWhatsAppMessage(foundEmployee.phone, "Добрый день, подскажите пожалуйста, какой номер обращения у вас сейчас в работе?")}
        >
          <Text style={styles.writeText}>Написать</Text>
        </Pressable>
        <Pressable
          style={styles.callButton}
          onPress={() => makeCall(foundEmployee.phone)}
        >
          <Text style={styles.callText}>Позвонить</Text>
        </Pressable>
      </View>
    </View>
  );
};
