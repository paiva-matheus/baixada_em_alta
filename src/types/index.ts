export interface News {
  id: string;
  title: string;
  description: string;
  content: string; 
  news_url: string;
  image_url?: string | null; 
  createdAt: string;
}

export interface CreateNewsRequest {
  title: string;
  description: string;
  content: string; 
  news_url: string;
  image_url?: string; 
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface WorkerRights {
  title: string;
  description: string;
  details: string[];
}