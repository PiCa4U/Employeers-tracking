import {IPoint, IRoute} from "../model/repositories";

export const formatFullName = (fullName: string) => {
  const nameParts = fullName.split(' ');

  if (nameParts.length !== 3) {
    return fullName;
  }

  const [lastName, firstName, patronymic] = nameParts;

  const formattedName = `${lastName} ${firstName[0]}. ${patronymic[0]}.`;

  return formattedName;
}

type Coordinates = {
  lat: number;
  lng: number;
};

export const haversineDistance = (coord1: Coordinates, coord2: Coordinates): number => {
  const R = 6371;
  const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;

  const dLat = toRadians(coord2.lat - coord1.lat);
  const dLng = toRadians(coord2.lng - coord1.lng);

  const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(coord1.lat)) *
      Math.cos(toRadians(coord2.lat)) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const calculateRouteDistance = (route: { dt: number; lat: number; lng: number }[]): string => {
  let totalDistance = 0;

  for (let i = 0; i < route.length - 1; i++) {
    const coord1 = { lat: route[i].lat, lng: route[i].lng };
    const coord2 = { lat: route[i + 1].lat, lng: route[i + 1].lng };

    totalDistance += haversineDistance(coord1, coord2);
  }

  const roundedDistance = totalDistance.toFixed(2);
  return `${roundedDistance} км`;
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
  };
  return date.toLocaleDateString('ru-RU', options);
};

export const formatTimeRange = (startTimestamp: number, endTimestamp: number): string => {
  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const startTime = formatTime(startTimestamp);
  const endTime = formatTime(endTimestamp);

  return `${startTime} - ${endTime}`;
};

export const formatTimeDifference = (startDt: number, endDt: number): string => {
  const diffInMinutes = Math.floor((endDt - startDt) / (1000 * 60));

  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;

  if (hours > 0) {
    return minutes > 0 ? `${hours} ч ${minutes} мин` : `${hours} ч`;
  }
  return `${minutes} мин`;
};

export const calculateAverageSpeed = (distance: number, timeInMinutes: number): string => {
  if (timeInMinutes === 0) return "0 км/ч";

  const timeInHours = timeInMinutes / 60;
  const averageSpeed = distance / timeInHours;

  return `${averageSpeed.toFixed(2)} км/ч`;
};

export const groupRoutesByDate = (
    routes: IRoute[]
): Record<string, { route: IPoint[]; originalIndex: number }[]> => {
  return routes.reduce((acc, routeItem, index) => {
    const date = formatDate(routeItem.route[0].dt);

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push({
      route: routeItem.route,
      originalIndex: index,
    });

    return acc;
  }, {} as Record<string, { route: IPoint[]; originalIndex: number }[]>);
};

