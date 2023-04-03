import React from 'react'
import { makeStyles } from 'tss-react/mui'
import Sponsors from 'src/components/footer/sponsors/Sponsors'
import theme from 'src/styles/theme'
import NewsLetter from 'src/components/footer/news-letter/NewsLetter'
import BottomMenu from 'src/components/footer/bottom-menu/BottomMenu'
import SocialMedia from 'src/components/footer/social-media/SocialMedia'
import Image from 'next/image'
import Link from 'next/link'
import { Link_Target } from 'src/common/constants'
import PropTypes from 'prop-types'

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
  govSiteContainer: {
    backgroundColor: theme.palette.presidio.color.BAKER_BEACH_WHITE,
  },
  govSite: {
    margin: '0px auto',
    padding: '16px 0px',
    maxWidth: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
    flex: 'none',
    alignSelf: 'stretch',
    flexGrow: '0',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1128px',
    },
  },
  govSiteText: {
    ...theme.typography.helperText,
  },
  govSiteLink: {
    marginTop: '-7px',
    '& a': {
      ...theme.typography.helperText,
      color: 'black',
      textDecoration: 'underline',
    },
  },
}))
function Footer(props) {
  const { classes } = useStyles(props)
  const { data = {} } = props || {}

  // guards
  if (Object.keys(data).length === 0) {
    return null
  }
  // visibility of sponsores block
  const SponsorsBlock =
    data.footer.our_sponser_large && data.footer.our_sponser_small

  return (
    <div>
      <NewsLetter NewsLetterData={data.footer.news_letter} />
      <div className={classes.footer}>
        <div className={classes.footerContainer}>
          <BottomMenu data={data.footer.footer_menu.menu_items} />
          {SponsorsBlock && (
            <Sponsors
              largeLogo={data.footer.our_sponser_large}
              smallLogo={data.footer.our_sponser_small}
              title={data.footer.our_sponsors_title}
            />
          )}

          <hr />
          <SocialMedia data={data} />
        </div>
      </div>
      <div className={classes.govSiteContainer}>
        <div className={classes.govSite}>
          <Image
            src="/assets/us.png"
            alt="US flag image"
            width="28px"
            height="21.16px"
          />
          <div className={classes.govSiteLink}>
            <span data-testid="govText" className={classes.govSiteText}>
              {data.footer.usa_gov_text}
            </span>
            <Link
              target={Link_Target[data.footer.usa_gov_link.target]}
              href={data.footer.usa_gov_link.url}
            >
              {data.footer.usa_gov_link.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

Footer.propTypes = {
  data: PropTypes.shape({
    footer: PropTypes.shape({
      our_sponsors_title: PropTypes.string,
      our_sponser_large: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
      our_sponser_small: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
      social_menu: PropTypes.object,
      copy: PropTypes.string,
      news_letter: PropTypes.object,
      usa_gov_text: PropTypes.string,
      usa_gov_link: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    }),
  }),
}
