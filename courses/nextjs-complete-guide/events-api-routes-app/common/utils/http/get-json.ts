export async function getJson<ReturnType = any>(url: string): Promise<ReturnType> {
  const rawResponse = await fetch(url);
  return await rawResponse.json();
}
