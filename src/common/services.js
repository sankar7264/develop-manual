import axios from 'axios'

export async function getHeader() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/acf/v2/options/header`
  )

  return res.data
}

export async function getFooter() {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/acf/v2/options/footer`
  )

  return res.data
}

export async function getMainNavigation() {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v1/mega-menu`
  )

  return res.data
}

export async function getPageData(path) {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v2/pages/?slug=${path}`
  )

  return res.data
}
