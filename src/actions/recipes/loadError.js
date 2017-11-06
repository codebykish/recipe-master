export const LOAD_ERROR = 'LOAD_ERROR'

export default (loadError) => {
  return {
    type: LOAD_ERROR,
    payload: error
  }
}
