import { View } from "react-native"

import { EmployeesCard } from "./components/employeesCard"

import { styles } from "./styles"

import type { IUserMovement } from "../../../../../packages/model/repositories"

type EmployeesListProps = {
  employeesData: IUserMovement[]
}

export const EmployeesList = ({
  employeesData
}: EmployeesListProps) => {
  return (
    <View style={styles.container}>
      {employeesData.map(employee =>
        <EmployeesCard 
          key={employee.id} 
          name={employee.name} 
          phone={employee.phone}
          position={employee.position}
          employeeId={employee.id}
        />
      )}
    </View>
  )
}
