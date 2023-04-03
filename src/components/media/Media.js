/* eslint-disable no-nested-ternary */
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import YouTube from 'react-youtube'
import Image from 'next/image'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

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
  const isHero = variant === 'hero'

  // custom sizing for media component used in hero banner.
  // fixed (large or small) for normal media component.
  const finalWidth = isHero ? width : size === Size.LARGE ? '744px' : '361px'
  const finalHeight = isHero ? height : size === Size.LARGE ? '581px' : '271px'

  return (
    <Box sx={{ width: finalWidth, height: finalHeight, position: 'relative' }}>
      {isVideo && (
        <YouTube
          className={isHero && classes.videoBox}
          iframeClassName={isHero && classes.bannerVideoFrame}
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
