export const formatFullName = (fullName: string) => {
  const nameParts = fullName.split(' ');

  if (nameParts.length !== 3) {
    return fullName;
  }

  const [lastName, firstName, patronymic] = nameParts;

  const formattedName = `${lastName} ${firstName[0]}. ${patronymic[0]}.`;

  return formattedName;
}
