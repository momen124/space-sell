interface MetaData {
  total: number;
  currentPage: number;
  eachPage: number;
  lastPage: number;
}
interface APIResponse<T> {
  status: number;
  data: T;
  meta: MetaData;
}

type Exceptions = string;

interface APIError {
  status: number;
  errors: {
    property: string;
    constraints: Record<string, string>;
    children?: APIError["errors"][];
  }[];
  message: string;
  exception: Exceptions;
}
