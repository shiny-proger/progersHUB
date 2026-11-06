export type Owner = {
  login: string
  id: number
  avatar_url: string
  html_url: string
}
export type License = {
  key: string
  name: string
  spdx_id: string | null
}
export type Repo = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  homepage: string | null
  language: string | null
  fork: boolean
  archived: boolean
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  default_branch: string
  created_at: string
  updated_at: string
  pushed_at: string | null
  topics?: string[]
  license: License | null
  owner: Owner
}

