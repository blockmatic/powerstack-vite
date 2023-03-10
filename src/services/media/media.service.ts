import { Cloudinary, type CloudinaryImage } from '@cloudinary/url-gen'
import { quality } from '@cloudinary/url-gen/actions/delivery'

import { clientEnv } from '~/config/client'

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: clientEnv.cloudinary,
})

export const getCloudinaryImage = (image_id: string): CloudinaryImage => {
  const image = cld.image(image_id)
  image.addFlag('progressive:semi')

  return image
}

export const getCloudinaryVideo = (videoId: string, videoQuality?: number) => {
  const video = cld.video(videoId)

  return videoQuality ? video.delivery(quality(videoQuality)) : video
}
