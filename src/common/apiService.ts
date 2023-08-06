import axios, { AxiosInstance } from 'axios'

const baseURL = `https://64cd3152bb31a268409a79cd.mockapi.io/api/v1`

const api: AxiosInstance = axios.create({
	baseURL,
})

// Define the response and error types
type ApiResponse<T> = T

// Define the CRUD operations
export const apiService = {
	async get<T>(url: string, params: object = { page: 1, l: 12 }): Promise<T> {
		const response = await api.get<ApiResponse<T>>(url, {
			params: { ...params },
		})
		console.log(response)
		return response.data
	},

	async post<T>(url: string, data: any): Promise<T> {
		const response = await api.post<ApiResponse<T>>(url, data)
		return response.data
	},

	async put<T>(url: string, data: any): Promise<T> {
		const response = await api.put<ApiResponse<T>>(url, data)
		return response.data
	},

	async delete<T>(url: string): Promise<T> {
		const response = await api.delete<ApiResponse<T>>(url)
		return response.data
	},
}
