import axios from "axios";

class Request {
  async get(url: string, config?: object): Promise<any> {
    return axios.get(url, config);
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
