import React, { useState } from 'react';
import { View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';

import { HomePageHeader } from './components/header';
import { EmployeesMap } from './components/employeesMap';

import employeesData from '../../../packages/mocks/data.json';
import { EmployeesList } from './components/employeesList';
import { Filters } from './components/filters';

export const HomeScreen = () => {
  const [isMap, setIsMap] = useState<boolean>(false);
  const [isFilters, setIsFilters] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [positionFilter, setPositionFilter] = useState<string>('');
  const [phoneFilter, setPhoneFilter] = useState<string>('');

  const areFiltersApplied = () => {
    return nameFilter || positionFilter || phoneFilter;
  };

  const filterEmployees = () => {
    if (!areFiltersApplied()) return employeesData.employees;

    return employeesData.employees.filter((employee) => {
      return (
        (nameFilter ? employee.name.includes(nameFilter) : true) &&
        (positionFilter ? employee.position.includes(positionFilter) : true) &&
        (phoneFilter ? employee.phone.includes(phoneFilter) : true)
      );
    });
  };

  const filteredEmployees = filterEmployees();

  const closeFilters = () => {
    setIsFilters(false);
  };

  return (
    <TouchableWithoutFeedback onPress={closeFilters}>
      <View style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#306FE3" />
        <HomePageHeader
          isMap={isMap}
          setIsMap={setIsMap}
          isFilters={isFilters}
          setIsFilters={setIsFilters}
        />
        <View style={styles.container}>
          {isFilters && (
            <View style={styles.filterContainer}>
              <Filters
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                positionFilter={positionFilter}
                setPositionFilter={setPositionFilter}
                phoneFilter={phoneFilter}
                setPhoneFilter={setPhoneFilter}
              />
            </View>
          )}
          {isMap ? (
            <EmployeesMap employeesData={filteredEmployees} />
          ) : (
            <EmployeesList employeesData={filteredEmployees} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
