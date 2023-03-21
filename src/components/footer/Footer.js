import React from 'react'
import { makeStyles } from 'tss-react/mui'
import Sponsors from 'src/components/footer/Sponsors'
import theme from 'src/styles/theme'
import NewsLetter from 'src/components/footer/NewsLetter'
import BottomMenu from 'src/components/footer/BottomMenu'
import SocialMedia from 'src/components/footer/SocialMedia'
import Image from 'next/image'
import { Grid } from '@mui/material'
import { color, fontSize } from '@mui/system'
import Link from '../Link'

const useStyles = makeStyles(theme)((props) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: '15px',
    width: '100%',
  },
  footerContainer: {
    margin: '208px auto 10px auto',
    maxWidth: '95%',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1128px',
    },
  },
  govContainer: {
    backgroundColor: theme.palette.presidio.color.BAKER_BEACH_WHITE,
  },
  gov: {
    margin: '0px auto',
    padding: '16px 0px',
    maxWidth: '95%',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1128px',
    },
  },
  govText: {
    fontSize: '12px',
  },
  gItem: {
    marginTop: '-7px',
    '& a': {
      fontSize: '12px',
      color: 'black',
      textDecoration: 'underline',
    },
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
      <div className={classes.govContainer}>
        <div className={classes.gov}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Image src="/assets/us.png" width="28px" height="21.16px" />
            </Grid>
            <Grid xs zeroMinWidth className={classes.gItem} item>
              <div>
                <span className={classes.govText}>
                  {data.footer.usa_gov_text.substring(
                    0,
                    data.footer.usa_gov_text.indexOf('<')
                  )}
                </span>
                <Link href="#">USA.gov</Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Footer
