import {FlatList, ListRenderItem, View} from "react-native"

import { EmployeesCard } from "./components/employeesCard"

import { styles } from "./styles"

import type { IUserMovement } from "../../../../../packages/shared/model/repositories"
import {FC, useCallback} from "react";

type EmployeesListProps = {
  employeesData: IUserMovement[]
}

export const EmployeesList:FC<EmployeesListProps> = ({
  employeesData
}) => {

  const renderItem = useCallback<ListRenderItem<IUserMovement>>(({item}) =>
      <EmployeesCard
          key={item.id}
          name={item.name}
          phone={item.phone}
          position={item.position}
          employeeId={item.id}
      />,[])

  return (<FlatList keyExtractor={(item)=>item.id} renderItem={renderItem} data={employeesData} style={styles.container}/>)
}
