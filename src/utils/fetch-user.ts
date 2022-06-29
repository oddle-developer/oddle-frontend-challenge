import { GITHUB_ENDPOINT } from 'config'
import { axiosConfig } from 'config/axios'
import queryString from 'query-string'
import { IUser, Query } from 'types'

export async function searchhUserWithDetail(
  query: Query
): Promise<Record<any, any>> {
  const { data } = await axiosConfig.get(
    `${GITHUB_ENDPOINT}/search/users?${queryString.stringify(query)}`
  )

  const { items: userList, total_count: totalCount } = data
  const userListWithPopulateFieldsPromises = userList.map((user: IUser) => {
    return axiosConfig.get(`${GITHUB_ENDPOINT}/users/${user.login}`)
  })

  const userListWithPopulateFields = await Promise.all(
    userListWithPopulateFieldsPromises
  )
  const finalUserList = userListWithPopulateFields.map(
    (response) => response.data
  )

  return { totalCount, userList: finalUserList }
}
