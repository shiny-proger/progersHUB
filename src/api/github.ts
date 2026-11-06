const BASE_URL = import.meta.env.VITE_GITHUB_API_URL
export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}
type GitHubErrorBody = {
  message: string
}
export async function request<T>(path: string, signal?: AbortSignal): 
Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  })

  if (!response.ok) {
        let message = `Ошибка запроса: ${response.status}`
        try {
        const body: GitHubErrorBody = await response.json()
        message = body.message
        } catch {
        // тело ответа не JSON: оставляем стандартное сообщение
        }
        throw new ApiError(response.status, message)
    }
    return response.json()
}
