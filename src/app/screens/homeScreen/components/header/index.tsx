import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

import { Settings } from "../../../../../packages/shared/assets/icons/Settings";

type HomePageHeaderProps = {
  isMap: boolean
  setIsMap: (isMap: boolean) => void
  isFilters: boolean
  setIsFilters: (isFilters: boolean) => void
};

export const HomePageHeader = ({
  isMap,
  setIsMap,
  isFilters,
  setIsFilters,
}: HomePageHeaderProps) => {
  const onList = () => {
    setIsMap(false);
  };

  const onMap = () => {
    setIsMap(true);
  };

  const onFilter = () => {
    setIsFilters(!isFilters)
  }
  return (
    <View style={styles.container}>
      <View style={styles.navTabs}>
        <Pressable
          style={[
            styles.buttons,
            !isMap && { backgroundColor: "#FFFFFF", borderColor: "#306FE3", borderWidth: 1 },
          ]}
          onPress={onList}
        >
          <Text
            style={[
              styles.buttonsText,
              !isMap && { color: "#306FE3" },
            ]}
          >
            Список
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.buttons,
            isMap && { backgroundColor: "#FFFFFF", borderColor: "#306FE3", borderWidth: 1 },
          ]}
          onPress={onMap}
        >
          <Text
            style={[
              styles.buttonsText,
              isMap && { color: "#306FE3" },
            ]}
          >
            Карта
          </Text>
        </Pressable>
        <Settings />
      </View>
      <Pressable style={styles.filterButton} onPress={onFilter}>
        <Text style={styles.buttonsText}>Фильтры</Text>
      </Pressable>
    </View>
  );
};
