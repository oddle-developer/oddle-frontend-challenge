import axios from 'axios'
import { GITHUB_ENDPOINT } from '.'

export const axiosConfig = axios.create({
  baseURL: GITHUB_ENDPOINT,
})

axiosConfig.defaults.timeout = 1000 * 20 // Unit: milliseconds

axiosConfig.defaults.headers.common['Authorization'] =
  'token ' + process.env.NEXT_PUBLIC_GITHUB_TOKEN || 'Empty token'
