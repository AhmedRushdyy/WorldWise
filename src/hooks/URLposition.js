import { useSearchParams } from "react-router-dom";

export function URLposition() {
  const [param, setParam] = useSearchParams();
  const lat = param.get("lat");
  const lng = param.get("lng");
  return { lat, lng };
}
