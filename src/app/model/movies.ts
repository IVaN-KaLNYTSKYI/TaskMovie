import {ResultsMovie} from "./results-movies";

export interface Movies {
  page:number
  results:ResultsMovie[]
  total_pages:number
  total_results:number
}
