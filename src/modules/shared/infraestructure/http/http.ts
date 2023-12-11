import { QueryParams } from "../../domain/QueryParams"
import formatQueryParams from "./formatQuery"

const headers = {
  'Content-Type': 'application/json'
}

const getOne = async <T>(url: string) => {
  const response = await fetch(`${url}`, {
    method: 'GET',
    headers
  })
  return await response.json() as T
}

const get = async <T>(url: string, queryParams?: QueryParams) => {
  const response = await fetch(`${url}?${formatQueryParams(queryParams)}`, {
    method: 'GET',
    headers
  })
  
  return {
    data: await response.json() as T,
    total: parseInt(response?.headers.get("x-total-count") || "0" )
  }
}

const post = async <T>(url: string, body: object) => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
  return await response.json() as T
}

const put = async <T>(url: string, body?: object) => {
  const response = await fetch(url, { 
    method: 'PUT',
    headers,
    body: JSON.stringify(body)
  })
  return await response.json() as T
}

const _delete = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers
  })
  return await response.json() as T
}

export const http = {
  get,
  getOne,
  post,
  put,
  delete: _delete
}