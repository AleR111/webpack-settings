import axios from "axios";

export interface IApiClient {
  post<TRequest, TResponse>(
    path: string,
    object: TRequest,
    // config?: RequestConfig
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(
    path: string,
    object: TRequest
  ): Promise<TResponse>;
  put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>;
  get<TResponse>(path: string): Promise<TResponse>;
}

class Request {
  async get<TResponse>(url: string, config?: object): Promise<TResponse> {
    try {
    return axios.get(url, config);
    } catch (e) {
return Promise.reject(e)
    }
  }

  async post(utl: string, body: object, config?: object): Promise<string> {
    return axios.post(utl, body, config);
  }

  async delete(url: string, config?: object): Promise<string> {
    return axios.delete(url, config);
  }

  async put(utl: string, body: object, config?: object): Promise<string> {
    return axios.put(utl, body, config);
  }

  async patch(utl: string, body: object, config?: object): Promise<string> {
    return axios.patch(utl, body, config);
  }
}

export const requests = new Request();
