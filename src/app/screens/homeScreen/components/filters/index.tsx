import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import {useTranslation} from "../../../../../packages/shared/hooks";

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
  const { t } = useTranslation("translation");

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.text}>{t("HomePage.header.filters.byName")}</Text>
        <TextInput
          style={styles.input}
          placeholder={`${t("HomePage.header.filters.namePlaceholder")}`}
          value={nameFilter}
          onChangeText={setNameFilter}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>{t("HomePage.header.filters.byPosition")}</Text>
        <TextInput
          style={styles.input}
          placeholder={`${t("HomePage.header.filters.posPlaceholder")}`}
          value={positionFilter}
          onChangeText={setPositionFilter}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>{t("HomePage.header.filters.byPhone")}</Text>
        <TextInput
          style={styles.input}
          placeholder={`${t("HomePage.header.filters.phonePlaceholder")}`}
          value={phoneFilter}
          onChangeText={setPhoneFilter}
        />
      </View>
    </View>
  );
};
