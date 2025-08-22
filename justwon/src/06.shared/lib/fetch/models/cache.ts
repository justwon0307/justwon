export type FetchCacheConfigType = {
  ttl?: number; // seconds
  tags?: string[]; // Cache tags for invalidation
};
