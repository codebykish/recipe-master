export const LOADING = 'LOADING'

export default (loading) => {
  return {
    type: LOADING,
    payload: loading
  }
}
