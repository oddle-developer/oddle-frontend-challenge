export const checkIsFavorite = (user, favorites) => {
  const isFavorite = favorites.find(item => item.login === user.login)
  return isFavorite
}