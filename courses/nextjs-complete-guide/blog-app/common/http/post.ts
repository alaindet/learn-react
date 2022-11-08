export async function httpPost<PayloadType = any, ResponseType = any>(
  url: string,
  payload: PayloadType,
): Promise<ResponseType> {
  const rawResponse = await fetch('/api/contact', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return await rawResponse.json();
}
