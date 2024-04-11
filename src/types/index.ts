export interface ResponseApiPlantsProps {
  data: PlantsDataProps[];
  to: number;
  per_page: number;
  current_page: number;
  from: number;
  last_page: number;
  total: number;
}

export interface PlantsDataProps {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name: string[];
  cycle: string;
  watering: string;
  sunlight: string[];
  default_image?: DefaultImagePlantsProps;
}

export interface DefaultImagePlantsProps {
  license: number;
  license_name: string;
  license_url: string;
  original_url: string;
  regular_url: string;
  medium_url: string;
  small_url: string;
  thumbnail: string;
}

// export interface AxiosResponse {
//   data: ResponseApiPlantsProps;
//   status: number;
//   statusText: string;
//   headers: Headers;
//   config: Config;
//   request: Request;
// }

// export interface Headers {
//   "cache-control": string;
//   "content-type": string;
// }

// export interface Config {
//   transitional: Transitional;
//   adapter: string[];
//   transformRequest: unknown[];
//   transformResponse: unknown[];
//   timeout: number;
//   xsrfCookieName: string;
//   xsrfHeaderName: string;
//   maxContentLength: number;
//   maxBodyLength: number;
//   env: unknown;
//   headers: Headers2;
//   method: string;
//   url: string;
// }

// export interface Transitional {
//   silentJSONParsing: boolean;
//   forcedJSONParsing: boolean;
//   clarifyTimeoutError: boolean;
// }

// export interface Headers2 {
//   Accept: string;
// }
