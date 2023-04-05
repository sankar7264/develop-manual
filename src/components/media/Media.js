/* eslint-disable no-nested-ternary */
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import YouTube from 'react-youtube'
import Image from 'next/image'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import rem from 'src/common/utils/css/'
import useMediaQuery from '@mui/material/useMediaQuery'
import theme from 'src/styles/theme'

export const MediaType = {
  IMAGE: 'image',
  VIDEO: 'video',
}

export const Size = {
  LARGE: 'large',
  SMALL: 'small',
}

const useStyles = makeStyles()((props) => ({
  videoBox: {
    position: 'relative',
    zIndex: -99,
    height: '100%',
  },
  bannerVideoFrame: {
    width: '100%',
    height: '100%',
  },
}))

function Media(props) {
  const { classes } = useStyles()

  // width and height required only if variant is set to "hero".
  const { variant, mediaType, image, video, width, height, size } = props

  const isVideo = mediaType === MediaType.VIDEO
  const isImage = mediaType === MediaType.IMAGE
  const isLarge = size === Size.LARGE
  const isHero = variant === 'hero'

  const mdUp = useMediaQuery(() => theme.breakpoints.up('md'))
  const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'))
  const xlUp = useMediaQuery(() => theme.breakpoints.up('xl'))

  const sizes = {
    small: {
      sm: {
        width: '327px',
        height: '237px',
      },
      md: {
        width: '419px',
        height: '319px',
      },
      lg: {
        width: '462px',
        height: '354px',
      },
      xl: {
        width: '361px',
        height: '271px',
      },
    },
    large: {
      sm: {
        width: '327px',
        height: '237px',
      },
      md: {
        width: '640px',
        height: '483px',
      },
      lg: {
        width: '705px',
        height: '483px',
      },
      xl: {
        width: '744px',
        height: '581px',
      },
    },
  }

  let finalWidth
  let finalHeight

  if (isHero) {
    finalWidth = width
    finalHeight = height
  } else if (xlUp) {
    finalWidth = isLarge ? sizes.large.xl.width : sizes.small.xl.width
    finalHeight = isLarge ? sizes.large.xl.height : sizes.small.xl.height
  } else if (lgUp) {
    finalWidth = isLarge ? sizes.large.lg.width : sizes.small.lg.width
    finalHeight = isLarge ? sizes.large.lg.height : sizes.small.lg.height
  } else if (mdUp) {
    finalWidth = isLarge ? sizes.large.md.width : sizes.small.md.width
    finalHeight = isLarge ? sizes.large.md.height : sizes.small.md.height
  } else {
    finalWidth = isLarge ? sizes.large.sm.width : sizes.small.sm.width
    finalHeight = isLarge ? sizes.large.sm.height : sizes.small.sm.height
  }

  return (
    <Box
      sx={{
        width: isHero ? finalWidth : rem(finalWidth),
        height: isHero ? finalHeight : rem(finalHeight),
        position: 'relative',
      }}
    >
      {isVideo && (
        <YouTube
          className={isHero ? classes.videoBox : undefined}
          iframeClassName={isHero ? classes.bannerVideoFrame : undefined}
          videoId={video.videoId}
          opts={{
            width: finalWidth,
            height: finalHeight,
            playerVars: {
              playlist: video.videoId,
              controls: video.videoControls.controls ? 1 : 0,
              autoplay: !!video.videoControls.autoPlay,
              loop: !!video.videoControls.loop,
              fs: !!video.videoControls.allowFullScreen,
              mute: !!video.videoControls.muteByDefault,
            },
          }}
          onReady={video?.onReady}
        />
      )}
      {isImage && image.url && (
        <Image
          src={image.url}
          objectFit="cover"
          layout="fill"
          alt={image.alt}
        />
      )}
    </Box>
  )
}
export default Media

Media.propTypes = {
  variant: PropTypes.oneOf(['hero', 'normal']),
  mediaType: PropTypes.oneOf([MediaType.IMAGE, MediaType.VIDEO]),
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.oneOf([Size.LARGE, Size.SMALL]),
  image: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
  }),
  video: PropTypes.shape({
    videoId: PropTypes.string,
    videoControls: PropTypes.shape({
      autoPlay: PropTypes.bool,
      controls: PropTypes.bool,
      loop: PropTypes.bool,
      allowFullScreen: PropTypes.bool,
      muteByDefault: PropTypes.bool,
    }),
  }),
}
