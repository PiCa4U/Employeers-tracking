import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

type FiltersProps = {
  nameFilter: string;
  setNameFilter: (name: string) => void;
  positionFilter: string;
  setPositionFilter: (position: string) => void;
  phoneFilter: string;
  setPhoneFilter: (phone: string) => void;
};

export const Filters = ({
  nameFilter,
  setNameFilter,
  positionFilter,
  setPositionFilter,
  phoneFilter,
  setPhoneFilter,
}: FiltersProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.text}>По имени</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите имя"
          value={nameFilter}  // Здесь мы передаем значение фильтра
          onChangeText={setNameFilter}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>По должности</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите должность"
          value={positionFilter}  // Здесь передаем значение фильтра
          onChangeText={setPositionFilter}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>По номеру телефона</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите номер телефона"
          value={phoneFilter}  // И здесь также
          onChangeText={setPhoneFilter}
        />
      </View>
    </View>
  );
};
