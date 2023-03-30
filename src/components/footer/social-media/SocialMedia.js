import Image from 'next/image'
import { makeStyles } from 'tss-react/mui'
import Twitter from 'src/components/icons/TwitterIcon'
import theme from 'src/styles/theme'
import FbIcon from 'src/components/icons/FbIcon'
import InstagramIcon from 'src/components/icons/InstagramIcon'
import LinkdinIcon from 'src/components/icons/LinkdinIcon'
import YoutubeIcon from 'src/components/icons/YoutubeIcon'
import Link from 'next/link'
import { Link_Target } from 'src/common/constants'

const useStyles = makeStyles(theme)((props) => ({
  socialMediaBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'left',
    padding: '0px',
    flex: 'none',
    flexGrow: '0',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '19px',
    flex: 'none',
    order: '0',
    flexGrow: '0',
  },
  copyRightText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '8px',
    flex: 'none',
    order: '1',
    flexGrow: '0',
  },
  socialMedia: {
    display: 'inline-flex',
    marginTop: '30px',
  },
  copyRight: {
    ...theme.typography.helperText,
    justifyContent: 'start',
    paddingTop: '30px',
    color: theme.palette.presidio.color.NEAR_WHITE,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'end',
      marginTop: '17px',
      padding: '12px 0px',
    },
    '& a': {
      color: theme.palette.presidio.color.NEAR_WHITE,
      marginLeft: '5px',
      textDecoration: 'underline',
    },
  },
  link: {
    color: theme.palette.presidio.color.NEAR_WHITE,
  },
}))
const SocialMedia = (props) => {
  const { classes } = useStyles(props)
  const { data } = props
  return (
    <div className={classes.socialMediaBlock}>
      {data.footer.social_menu.count > 0 ? (
        <div className={classes.socialLinks}>
          {Object.values(data.footer.social_menu.menu_items).map((i) => {
            if (i.title === 'Facebook') {
              return (
                <div className={classes.socialMedia}>
                  <Link href={i.url}>
                    <FbIcon />
                  </Link>
                </div>
              )
            }
            if (i.title === 'Youtube') {
              return (
                <div className={classes.socialMedia}>
                  <Link href={i.url}>
                    <YoutubeIcon />
                  </Link>
                </div>
              )
            }
            if (i.title === 'Twitter') {
              return (
                <div className={classes.socialMedia}>
                  <Link href={i.url}>
                    <Twitter />
                  </Link>
                </div>
              )
            }
            if (i.title === 'Linkdin') {
              return (
                <div className={classes.socialMedia}>
                  <Link href={i.url}>
                    <LinkdinIcon />
                  </Link>
                </div>
              )
            }
            if (i.title === 'Instagram') {
              return (
                <div className={classes.socialMedia}>
                  <Link href={i.url}>
                    <InstagramIcon />
                  </Link>
                </div>
              )
            }
            return ''
          })}
        </div>
      ) : (
        ''
      )}
      <div className={classes.copyRightText}>
        <span className={classes.copyRight}>
          &#169; {data.footer.copy} |
          <Link
            target={Link_Target[data.footer['privacy_&_policy'].url.target]}
            href={data.footer['privacy_&_policy'].url}
          >
            {data.footer['privacy_&_policy'].title}
          </Link>
        </span>
      </div>
    </div>
    // <Grid container>
    //   {data.footer.social_menu.count > 0 ? (
    //     <Grid item md={6} sm={12}>
    //       <Grid container justifyContent="flex-start" alignItems="center">
    //         <Grid item>
    //           {Object.values(data.footer.social_menu.menu_items).map((i) => {
    //             if (i.title === 'Facebook') {
    //               return (
    //                 <div className={classes.socialMedia}>
    //                   <Link href={i.url}>
    //                     <FbIcon />
    //                   </Link>
    //                 </div>
    //               )
    //             }
    //             if (i.title === 'Youtube') {
    //               return (
    //                 <div className={classes.socialMedia}>
    //                   <Link href={i.url}>
    //                     <YoutubeIcon />
    //                   </Link>
    //                 </div>
    //               )
    //             }
    //             if (i.title === 'Twitter') {
    //               return (
    //                 <div className={classes.socialMedia}>
    //                   <Link href={i.url}>
    //                     <Twitter />
    //                   </Link>
    //                 </div>
    //               )
    //             }
    //             if (i.title === 'Linkdin') {
    //               return (
    //                 <div className={classes.socialMedia}>
    //                   <Link href={i.url}>
    //                     <LinkdinIcon />
    //                   </Link>
    //                 </div>
    //               )
    //             }
    //             if (i.title === 'Instagram') {
    //               return (
    //                 <div className={classes.socialMedia}>
    //                   <Link href={i.url}>
    //                     <InstagramIcon />
    //                   </Link>
    //                 </div>
    //               )
    //             }
    //             return ''
    //           })}
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   ) : (
    //     ''
    //   )}

    //   <Grid item md={6} sm={12}>
    //     <Grid
    //       className={classes.copyRight}
    //       container
    //       justifyContent="flex-end"
    //       alignItems="center"
    //     >
    //       <Grid item>
    //         <span>
    //           &#169; {data.footer.copy} |
    //           <Link
    //             target={Link_Target[data.footer['privacy_&_policy'].url.target]}
    //             href={data.footer['privacy_&_policy'].url}
    //           >
    //             {data.footer['privacy_&_policy'].title}
    //           </Link>
    //         </span>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  )
}

export default SocialMedia
