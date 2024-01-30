import { useLocation } from "react-router-dom";

export function useSearch() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const readParam = (paramName) => urlParams.get(paramName);
  const writeParam = (paramName) => urlParams.writeParam(paramName);
  return { readParam, writeParam };
}
