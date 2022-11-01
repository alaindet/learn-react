export async function postJson<PayloadType = any, ReturnType = any>(
  url: string,
  payload: PayloadType,
): Promise<ReturnType> {

  const rawResponse = await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return await rawResponse.json();
}
