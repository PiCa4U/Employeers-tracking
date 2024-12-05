// Точка маршрута
export interface IPoint {
    dt: number; // Время в формате timestamp
    lng: number; // Долгота
    lat: number; // Широта
  }

  // Маршрут, состоящий из точек
  export interface IRoute {
    route: IPoint[];
    startTime: string;
    endTime: string;
  }

  // Движение сотрудника
  export interface IUserMovement {
    id: string; // Идентификатор сотрудника
    name: string; // Имя сотрудника
    phone: string; // Телефон сотрудника
    position: string;
    routes: IRoute[]; // Список маршрутов
  }

  export interface RootStackParamList {
    Home: undefined;
    Movements: { employeeId: string; name: string; phone: string; position: string };
  }

