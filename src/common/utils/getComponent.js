import QuickLinks from 'src/components/quick-links/QuickLinks'

const MODULES = {
  QUICK_LINKS: 'quick_links',
}

Object.freeze(MODULES)

export function getComponent(acf_fc_layout) {
  switch (acf_fc_layout) {
    case MODULES.QUICK_LINKS:
      return ({ data }) => <QuickLinks key={data.section_id} data={data} />
    default:
      break
  }
  return null
}
