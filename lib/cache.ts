type CacheEntry<T> = {
  data: T
  expiry: number
}

class Cache<T> {
  private store: { [key: string]: CacheEntry<T> } = {}
  private defaultTTL: number

  constructor(defaultTTL: number = 60 * 60 * 1000) { // Default TTL: 1 hour
    this.defaultTTL = defaultTTL
  }

  set(key: string, value: T, ttl: number = this.defaultTTL): void {
    this.store[key] = {
      data: value,
      expiry: Date.now() + ttl
    }
  }

  get(key: string): T | null {
    const entry = this.store[key]
    if (!entry) return null
    if (entry.expiry < Date.now()) {
      delete this.store[key]
      return null
    }
    return entry.data
  }

  clear(): void {
    this.store = {}
  }
}

export const apiCache = new Cache()

