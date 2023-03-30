export default async function handler(req, res) {
  const isGET = ['get', 'head'].includes(req.method.toLowerCase())
  if (!isGET) {
    return res.status(404).send('Not found')
  }

  res.setHeader('content-type', 'text/plain')

  // @TODO - Remove debugging logs
  console.log('returning 200 for healthcheck')
  return res.status(200).send('ok')
}
