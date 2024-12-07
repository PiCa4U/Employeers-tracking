import React, { useState } from "react";
import { View, Text, Pressable, Modal, Switch } from "react-native";
import { styles } from "./styles";

import { Settings } from "../../../../../packages/shared/assets/icons/Settings";
import { useTranslation } from "../../../../../packages/shared/hooks";

type HomePageHeaderProps = {
    isMap: boolean;
    setIsMap: (isMap: boolean) => void;
    isFilters: boolean;
    setIsFilters: (isFilters: boolean) => void;
};

export const HomePageHeader = ({
  isMap,
  setIsMap,
  isFilters,
  setIsFilters,
}: HomePageHeaderProps) => {
  const { t,i18n } = useTranslation("translation");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  const onList = () => {
    setIsMap(false);
  };

  const onMap = () => {
    setIsMap(true);
  };

  const onFilter = () => {
    setIsFilters(!isFilters);
  };

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
          <Text style={[styles.buttonsText, !isMap && { color: "#306FE3" }]}>
            {t("HomePage.header.buttons.list")}
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.buttons,
            isMap && { backgroundColor: "#FFFFFF", borderColor: "#306FE3", borderWidth: 1 },
          ]}
          onPress={onMap}
        >
          <Text style={[styles.buttonsText, isMap && { color: "#306FE3" }]}>
            {t("HomePage.header.buttons.map")}
          </Text>
        </Pressable>
        <Pressable onPress={toggleModal}>
          <Settings />
        </Pressable>
      </View>
      <Pressable style={styles.filterButton} onPress={onFilter}>
        <Text style={styles.buttonsText}>{t("HomePage.header.buttons.filters")}</Text>
      </Pressable>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t("HomePage.header.settings.language")}</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Русский</Text>
              <Switch
                value={isEnglish}
                onValueChange={toggleLanguage}
              />
              <Text style={styles.switchLabel}>English</Text>
            </View>
            <Pressable style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>{t("HomePage.header.settings.close")}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
