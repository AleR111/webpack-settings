import axios from "axios";

class Request {
  get = (url: string, config?: object): Promise<any> => {
    return axios.get(url, config);
  };

  post = (utl: string, body: object, config?: object): Promise<string> => {
    return axios.post(utl, body, config);
  };

  delete = (url: string, config?: object): Promise<string> => {
      return axios.delete(url, config)
  }

  put = (utl: string, body: object, config?: object): Promise<string> => {
      return axios.put(utl, body, config);
  };

    patch = (utl: string, body: object, config?: object): Promise<string> => {
        return axios.patch(utl, body, config);
    };
}

export const requests = new Request();
