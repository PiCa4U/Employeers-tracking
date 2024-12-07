import { type Namespace } from 'i18next';
import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = <NS extends Namespace = 'translation'>(
  ...[moduleName]: NS extends 'translation' ? [moduleName?: NS] : [moduleName: NS]
) => {
  const translation = useI18nTranslation<NS>((moduleName || 'translation') as NS);

  return translation;
};
