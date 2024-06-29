import axios from 'axios';

export const BASE_URL_DEV: string = 'http://localhost:3000/v1';

export enum HttpVerbs {
  GET = 'GET',
}

export type HttpVerbsConfig = {
  [HttpVerbs.GET]: (
    endPoint: string,
    onSuccess: (result: any) => void,
    onFailure: (error: Error) => void,
  ) => void;
};

export const apiService = (): HttpVerbsConfig => {
  const httpRequest: HttpVerbsConfig = {
    [HttpVerbs.GET]: async (endPont: string, onSuccess, onFailure) => {
      const url = `${BASE_URL_DEV}${endPont}`;
      try {
        const result = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        onSuccess(result.data);
      } catch (error: any) {
        onFailure(error);
        throw error;
      }
    },
  };
  return httpRequest;
};
