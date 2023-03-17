import axios from 'axios'

// @TODO - Replace endpoint with env variables

export async function getHeader() {
  const res = await axios.get(
    `https://wpvip-presidio-gov.go-vip.net/wp-json/acf/v2/options/header`
  )

  return res.data
}

export async function getFooter() {
  const res = await axios(
    `https://wpvip-presidio-gov.go-vip.net/wp-json/acf/v2/options/footer`
  )

  return res.data
}

export async function getMainNavigation() {
  const res = await axios(
    `https://wpvip-presidio-gov.go-vip.net/wp-json/wp/v1/mega-menu`
  )

  return res.data
}
