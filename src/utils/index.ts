export function normalizeSearchTerm(str: string): string {
  return str.trim().split(' ').join('').toLowerCase()
}
