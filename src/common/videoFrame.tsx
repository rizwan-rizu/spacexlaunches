import { Box } from '@mui/material'

interface iComponentProps {
  youtubeId: string,
}

const VideoFrame = (props: iComponentProps) => {
  // alert(props.youtubeId);
  return (
    <Box className="video-responsive">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  )
}

export default VideoFrame