import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import PropTypes from 'prop-types'
import theme from 'src/styles/theme'
import SearchIcon from 'src/components/icons/Search'

const useStyles = makeStyles()((_theme, props) => ({
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
  },
  searchIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    // padding: '2px 0px 6px 0px', // figma override
  },
  searchbar: {
    [theme.breakpoints.up('lg')]: {
      cursor: 'pointer',
      background: 'transparent',
      padding: '8px 8px 4px 8px', // this needs to be similar to other tabs inside tab container
      marginBottom: '2px', // because we have this margin for other tabs for active tab feature
      outline: 'none',
      fontSize: '1.125rem !important', // figma override
      // fontSize: '1.5rem !important', // figma
      '&:focus': {
        outline: 'none',
        border: 'none',
      },
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem !important', // figma override
    },
  },
}))

const Search = (props) => {
  const { classes } = useStyles(props)

  const { iconColor, iconWidth, iconHeight, showIconOnly, label } = props

  // Icon size is different on lg and xl screens
  const xlUp = useMediaQuery(() => theme.breakpoints.up('xl'))

  return (
    <div className={classes.searchContainer}>
      <span
        onClick={() => console.log('Search clicked!')}
        onKeyDown={() => console.log('Search clicked!')}
        className={classes.searchIcon}
      >
        {xlUp ? (
          <SearchIcon width={30} height={30} color={iconColor} />
        ) : (
          <SearchIcon width={iconWidth} height={iconHeight} color={iconColor} />
        )}
      </span>
      {!showIconOnly && (
        <Typography variant="h4" className={classes.searchbar}>
          {label}
        </Typography>
      )}
    </div>
  )
}

export default Search

Search.propTypes = {
  iconColor: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  showIconOnly: PropTypes.bool,
  label: PropTypes.string,
}
