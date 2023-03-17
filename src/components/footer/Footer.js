import React from 'react'
import { makeStyles } from 'tss-react/mui'
import Sponsors from 'src/components/footer/Sponsors'
import theme from 'src/styles/theme'
import NewsLetter from 'src/components/footer/NewsLetter'
import BottomMenu from 'src/components/footer/BottomMenu'
import SocialMedia from 'src/components/footer/SocialMedia'

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
  const { data } = props
  return (
    <div className={classes.footerParent}>
      <NewsLetter NewsLetterData={data.footer.news_letter} />
      <div className={classes.footer}>
        <div className={classes.footerContainer}>
          <BottomMenu data={data.footer.footer_menu.menu_items} />
          <Sponsors
            largeLogo={data.footer.our_sponser_large}
            smallLogo={data.footer.our_sponser_small}
          />
          <hr />
          <SocialMedia data={data} />
        </div>
      </div>
    </div>
  )
}

export default Footer
