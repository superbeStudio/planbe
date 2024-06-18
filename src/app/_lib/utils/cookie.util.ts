export function getApiTokenFromCookie(cookie: string | undefined) {
  if (cookie === undefined) return undefined;

  const value = `; ${cookie}`;
  const parts = value.split(`; api-token=`);
  if (parts.length === 2) return parts?.pop()?.split(";").shift();
}
