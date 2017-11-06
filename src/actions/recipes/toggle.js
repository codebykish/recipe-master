export const TOGGLE_LIKE = 'TOGGLE_LIKE'

export default (recipeId) => {
  return {
    type: TOGGLE_LIKE,
    payload: recipeId
  }
}
