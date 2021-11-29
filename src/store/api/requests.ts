import axios from "axios";
import { Respons, RequestConfig } from "./interfaces";

class Request {
  async get<TData>(
    url: string,
    config?: RequestConfig,
  ): Promise<Respons<TData>> {
    const response = await axios.get(url, config);
    const responseData: Respons<TData> = {
      data: response.data,
      status: response.status,
      headers: response.headers,
      statusText: response.statusText,
    };

    return responseData;
  }

  async post<TRequest, TData>(
    url: string,
    body: TRequest,
    config?: RequestConfig,
  ): Promise<Respons<TData>> {
    const response = await axios.post(url, body, config);
    const responseData: Respons<TData> = {
      data: response.data,
      status: response.status,
      headers: response.headers,
      statusText: response.statusText,
    };

    return responseData;
  }

  async put<TRequest, TData>(
    url: string,
    body: TRequest,
    config?: RequestConfig,
  ): Promise<Respons<TData>> {
    const response = await axios.put(url, body, config);
    const responseData: Respons<TData> = {
      data: response.data,
      status: response.status,
      headers: response.headers,
      statusText: response.statusText,
    };

    return responseData;
  }

  async delete<TData>(
    url: string,
    config?: RequestConfig,
  ): Promise<Respons<TData>> {
    const response = await axios.delete(url, config);
    const responseData: Respons<TData> = {
      data: response.data,
      status: response.status,
      headers: response.headers,
      statusText: response.statusText,
    };

    return responseData;
  }
}

export const requests = new Request();
