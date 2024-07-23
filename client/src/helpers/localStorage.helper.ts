
export function getTokenFromLocalStorage(): string {
  const token = localStorage.getItem("token");
  return token || "";
}


export function setTokenToLocalStorage(key: string, token: string): void {
  localStorage.setItem(key, token);
}


export function removeTokenFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
