import { headers } from "next/headers";

export function isInitialRender() {
  return headers().get("accepted")?.includes("text/html");
}
