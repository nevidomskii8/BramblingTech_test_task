import { defineMessages } from 'react-intl';

export const scope = 'reactlocalization.app';

export default defineMessages({
  projectHeader: {
    id: `${scope}.header`,
    defaultMessage: 'Localization in Create React App',
  },
  projectFooter: {
    id: `${scope}.footer`,
    defaultMessage: 'Love you 3000',
  },
  projectFilterId: {
      id: `${scope}.id`,
      defaultMessage: 'Id'
  },
  projectFilterAge: {
      id: `${scope}.age`,
      defaultMessage: 'Age'
  },
  projectFilterName: {
      id: `${scope}.name`,
      defaultMessage: 'Name'
  },
  projectFilterAscending: {
      id: `${scope}.ascending`,
      defaultMessage: 'Ascending'
  },
  projectFilterDiscending: {
      id: `${scope}.discending`,
      defaultMessage: 'Discending'
  },
  projectTabel: {
      id: `${scope}.tabel`,
      defaultMessage: 'Tabel'
  },
  projectPreview: {
      id: `${scope}.preview`,
      defaultMessage: 'discending'
  },
});