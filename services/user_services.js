import { BASE_URL, SEARCH_USER, STR_AUTH } from "../etc/constants";

export const countUserFollowers = async (setter, user) => {
  fetch(`${BASE_URL}/users/${user.login}/followers?${STR_AUTH}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const total = data.length
      setter(total)
    })
    .catch(err => console.log(err))
}

export const countUserFollowing = async (setter, user) => {
  fetch(`${BASE_URL}/users/${user.login}/following`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const total = data.length
      setter(total)
    })
    .catch(err => console.log(err))
}

export const searchUser = (keyword, selectedPage, resultSetter) => {
  if (keyword.length > 2) {
    fetch(BASE_URL + SEARCH_USER + '?per_page=12&q=' + keyword + '&page=' + selectedPage + '&' + STR_AUTH)
      .then(res => res.json())
      .then(data => {
        resultSetter(data)
      })
      .catch(err => {
        console.log(err)

        if (err.message) {
          alert(err.message)
        }
      })
  } else {
    resultSetter(null)
  }
}

export const getUserRepos = (user, setter) => {
  fetch(`${BASE_URL}/users/${user.login}/repos?${STR_AUTH}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setter(data)
    })
    .catch(err => console.log(err))
}

export const getUserFollowers = (user, setter) => {
  fetch(`${BASE_URL}/users/${user.login}/followers?${STR_AUTH}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setter(data)
    })
    .catch(err => console.log(err))
}

export const getUserFollowing = (user, setter) => {
  fetch(`${BASE_URL}/users/${user.login}/following?${STR_AUTH}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setter(data)
    })
    .catch(err => console.log(err))
}

export const getUserDetails = (username, setter) => {
  fetch(`${BASE_URL}/users/${username}?${STR_AUTH}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null
      }
    })
    .then(data => {
      setter(data)
    })
    .catch(err => console.log(err))
}