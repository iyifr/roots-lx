const apiKey = import.meta.env.API_KEY
import axios, { AxiosInstance } from 'axios'

const baseURL = `https://${apiKey}.mockapi.io/api/v1`

const api: AxiosInstance = axios.create({
	baseURL,
})

// Define the response and error types
interface ApiResponse<T> {
	data: T
}

// Define the CRUD operations
export const apiService = {
	async get<T>(
		url: string,
		params: object = { page: 1, limit: 20 }
	): Promise<T> {
		const response = await api.get<ApiResponse<T>>(url, {
			params: { ...params },
		})
		return response.data.data
	},

	async post<T>(url: string, data: any): Promise<T> {
		const response = await api.post<ApiResponse<T>>(url, data)
		return response.data.data
	},

	async put<T>(url: string, data: any): Promise<T> {
		const response = await api.put<ApiResponse<T>>(url, data)
		return response.data.data
	},

	async delete<T>(url: string): Promise<T> {
		const response = await api.delete<ApiResponse<T>>(url)
		return response.data.data
	},
}
