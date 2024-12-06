import {StackScreenProps} from "@react-navigation/stack";

export interface IPoint {
    dt: number;
    lng: number;
    lat: number;
  }

  export interface IRoute {
    route: IPoint[];
  }

  export interface IUserMovement {
    id: string;
    name: string;
    phone: string;
    position: string;
    routes: IRoute[];
  }

  export type RootStackParamList = {
    Home: undefined;
    MovementsMap: { employeeId: string, index: number};
    Movements: { employeeId: string};
  }

  export type RootScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
    RootStackParamList,
    T
  >;

  export type NavigationProps<T extends keyof RootStackParamList> = RootScreenProps<T>['navigation'];

  export type RouteProps<T extends keyof RootStackParamList> = RootScreenProps<T>['route'];

