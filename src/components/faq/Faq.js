import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { makeStyles } from 'tss-react/mui'
import PropTypes from 'prop-types'
import theme, { SECONDARY_COLOR } from 'src/styles/theme'
import ChevronDown from 'src/components/icons/ChevronDown'
import { rem } from 'src/common/utils/css'

const useStyles = makeStyles()(() => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    background: `${SECONDARY_COLOR.LIGHT[40]}`,
  },
  // @TODO - Remove commented code
  // backgroundColorLayer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   height: '100%',
  //   width: '100%',
  //   background: `${SECONDARY_COLOR.LIGHT[40]}`,
  // },
  // backgroundImageLayer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   height: '100%',
  //   width: '100%',
  //   background: `url("/assets/Faq-Background.png")`,
  //   backgroundPosition: 'bottom right',
  //   backgroundCover: 'cover',
  //   backgroundSize: '85% 60%',
  //   backgroundRepeat: 'no-repeat',
  //   zIndex: 1,
  //   opacity: '0.3',
  // },
  backgroundImageLayer: {
    position: 'absolute',
    bottom: -100,
    right: 0,
    height: '65%',
    width: '85%',
    zIndex: 1,
    opacity: '0.3',
  },
  faqContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: rem(24),
    zIndex: 10,
    padding: `${rem(40)} ${rem(24)}`,
    [theme.breakpoints.up('md')]: {
      padding: rem(40),
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      padding: `${rem(64)} ${rem(40)}`,
    },
    [theme.breakpoints.up('xl')]: {
      padding: `${rem(64)} ${rem(157)}`,
    },
  },
  moduleHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    color: theme.palette.primary.dark,
    padding: rem(0),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '33%',
    },
    [theme.breakpoints.up('xl')]: {
      padding: `0 0 0 ${rem(96)}`,
    },
  },
  moduleContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(18),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '67%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
    },
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(16),
  },
  accordionCategory: {
    color: theme.palette.primary.dark,
  },
  accordion: {
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: '2px',
  },
  accordionSummary: {
    ...theme.typography.label,
    color: theme.palette.primary.dark,
    padding: `0 ${rem(12)}`,
    '&: hover': {
      color: SECONDARY_COLOR.DARK[80],
    },
    '.Mui-expanded': {
      color: SECONDARY_COLOR.DARK[80],
    },
    // To maintain gap between summary and expand icon
    '.MuiAccordionSummary-expandIconWrapper': {
      marginLeft: rem(10),
    },
  },
  accordionDetails: {
    ...theme.typography.body.default,
    padding: `0 0 ${rem(12)} ${rem(12)}`,
    color: theme.palette.presidio.color.DARK_GRAY,
    marginRight: rem(25),
  },
}))

const Faq = (props) => {
  const { classes } = useStyles(props)

  const { data } = props

  // guards
  if (!data || Object.keys(data).length === 0) {
    return null
  }

  const { faq, title, section_id } = data

  return (
    <div className="module" id={section_id} data-id="section">
      <div className={classes.wrapper}>
        {/* @TODO - Remove following div */}
        {/* <div className={classes.backgroundColorLayer} /> */}
        <div className={classes.backgroundImageLayer}>
          <Image
            src="/assets/Faq-Background.webp"
            alt="background pattern"
            layout="fill"
          />
        </div>

        <div className={classes.faqContainer}>
          <Typography variant="h2" className={classes.moduleHeader}>
            {title}
          </Typography>

          <div className={classes.moduleContent}>
            {faq &&
              faq.container &&
              faq.container.length !== 0 &&
              faq.container.map(({ heading, qna }, index) => (
                <div
                  className={classes.accordionContainer}
                  key={`${heading}${index}`}
                >
                  {heading && (
                    <Typography
                      variant="h3"
                      className={classes.accordionCategory}
                    >
                      {heading}
                    </Typography>
                  )}

                  {qna &&
                    qna.length !== 0 &&
                    qna.map(({ question, answer }, idx) => (
                      <Accordion
                        className={classes.accordion}
                        disableGutters
                        key={`${question}${idx}`}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ChevronDown
                              height="6"
                              width="12"
                              color={theme.palette.primary.dark}
                            />
                          }
                          aria-controls={`panel-${question}-${idx}`}
                          id={`panel-${question}-${idx}`}
                          className={classes.accordionSummary}
                        >
                          {question}
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className={classes.accordionDetails}>
                            {answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq

Faq.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    faq: PropTypes.shape({
      container: PropTypes.array,
    }),
    section_id: PropTypes.string,
  }),
}
