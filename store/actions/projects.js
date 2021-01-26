export const ACTION_GET_PROJECT_INFO = 'ACTION_GET_PROJECT_INFO';
export const ACTION_RESET_PROJECT = 'ACTION_RESET_PROJECT';

export const actionGetProjectInfo = (payload) => ({
  type: ACTION_GET_PROJECT_INFO,
  payload,
});

export const actionResetProject = () => ({
  type: ACTION_RESET_PROJECT,
});

// quand je voudrais ajouter dans le back
// le back retourne la liste d'objet
// ensuite un nouveau get project pour setter la nouvelle liste
