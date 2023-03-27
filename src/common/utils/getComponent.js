// @TODO - Remove this test component post fixing return statements of getComponent()
const Test = ({ data }) => <h2>{JSON.stringify(data.section_id)}</h2>

const MODULES = {
  SEGMENTED_CONTROl: 'segmented_control',
  FAQ: 'faq',
  QUICK_LINKS: 'quick_links',
}

Object.freeze(MODULES)

// @TODO - Replace Test with Correct components

export function getComponent(acf_fc_layout) {
  switch (acf_fc_layout) {
    case MODULES.QUICK_LINKS:
      return ({ data }) => <Test key={data.section_id} data={data} />
    default:
      break
  }
  return null
}
