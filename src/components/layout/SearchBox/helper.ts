import { IProduct } from "@/types/productTypes";

export interface ISearchState {
  loading: boolean;
  error: null | string;
  searchProducts: IProduct[];
  showResults: boolean;
}

export enum SearchActionTypes {
  SEARCH_RESET = "SEARCH_RESET",
  SEARCH_REQUEST = "SEARCH_REQUEST",
  SEARCH_SUCCESS = "SEARCH_SUCCESS",
  SEARCH_FAIL = "SEARCH_FAIL",
  SEARCH_SHOW_RESULTS = "SEARCH_SHOW_RESULTS",
}

interface SearchRequestAction {
  type: SearchActionTypes.SEARCH_REQUEST;
}

interface SearchSuccessAction {
  type: SearchActionTypes.SEARCH_SUCCESS;
  payload: IProduct[];
}

interface SearchFailAction {
  type: SearchActionTypes.SEARCH_FAIL;
  payload: string;
}

interface SearchResetAction {
  type: SearchActionTypes.SEARCH_RESET;
}

interface SearchShowResultsAction {
  type: SearchActionTypes.SEARCH_SHOW_RESULTS;
  payload: boolean;
}

export type SearchAction =
  | SearchRequestAction
  | SearchSuccessAction
  | SearchFailAction
  | SearchResetAction
  | SearchShowResultsAction;
export const initialState: ISearchState = {
  loading: false,
  error: null,
  searchProducts: [],
  showResults: false,
};
export const searchReducer: React.Reducer<ISearchState, SearchAction> = (
  state,
  action
) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SearchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchProducts: action.payload,
      };
    case SearchActionTypes.SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SearchActionTypes.SEARCH_RESET:
      return {
        ...state,
        loading: false,
        error: null,
        searchProducts: [],
      };
    case SearchActionTypes.SEARCH_SHOW_RESULTS:
      return {
        ...state,
        showResults: action.payload,
      };
    default:
      return state;
  }
};
