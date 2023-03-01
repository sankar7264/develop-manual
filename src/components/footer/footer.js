import React from 'react'
import { makeStyles } from 'tss-react/mui'
import Sponsors from 'src/components/footer/sponsors'
import theme from 'src/styles/theme'
import NewsLetter from 'src/components/footer/newsLetter'
import BottomMenu from 'src/components/footer/bottomMenu'
import SocialMedia from 'src/components/footer/socialMedia'
import data from 'src/common/footerData.json'

const useStyles = makeStyles(theme)((props) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: '15px',
    width: '100%',
  },
  footerContainer: {
    margin: '208px auto',
    maxWidth: '85%',
  },
}))
function Footer(props) {
  const { classes } = useStyles(props)
  return (
    <div className={classes.footerParent}>
      <NewsLetter />
      <div className={classes.footer}>
        <div className={classes.footerContainer}>
          <BottomMenu data={data.footer.footer_menu} />
          <Sponsors />
          <hr />
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Footer
