export interface ISearchRepoRequestState {
  type: String;
  searchString: string;
}

interface IResponse {
  id: number;
  full_name: string;
  star_count: number;
}

export interface ISearchRepoResponseState {
  type: String;
  response: IResponse;
}
