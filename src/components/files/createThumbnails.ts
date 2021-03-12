const genericThumbnails: { [key: string]: string } = {
  image: 'noun_Image_1570203.png',
  doc: 'noun_word_3515287.png',
  docx: 'noun_word_3515287.png',
  pdf: 'noun_PDF_3283219.png',
  text: 'noun_word_3515287.png',
  msword: 'noun_word_3515287.png',
  file: 'noun_File_3764922.png',
}

import * as config from '../../config.json'
import path from 'path'
import fs from 'fs'
const sharp = require('sharp')
const pdf2image = require('pdf2image')
const { thumbnailMaxWidth, thumbnailMaxHeight } = config

interface ThumbnailInput {
  filesPath: string
  unique_id: string
  basename: string
  ext: string
  mimetype: string
}

const createThumbnail = async ({
  filesPath,
  unique_id,
  basename,
  ext,
  mimetype,
}: ThumbnailInput) => {
  const { type, subtype } = splitMimetype(mimetype)

  const origFilePath = path.join(filesPath, `${basename}_${unique_id}${ext}`)
  const thumbnailFilePath = path.join(filesPath, `${basename}_${unique_id}_thumb`) // No ext, added after conversion

  if (type === 'image') {
    try {
      const { format } = await sharp(origFilePath)
        .resize(thumbnailMaxWidth, thumbnailMaxHeight, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .toFile(thumbnailFilePath)
      await fs.rename(thumbnailFilePath, `${thumbnailFilePath}.${format}`, () => {})
      return `${basename}_${unique_id}_thumb.${format}`
    } catch {
      return getGenericThumbnailPath(type)
    }
  } else if (mimetype === 'application/pdf') {
    const options = {
      density: 100,
      outputType: 'png',
      outputFormat: `${filesPath}/%s_thumb`,
      pages: '1',
      width: thumbnailMaxWidth,
      height: thumbnailMaxHeight,
    }
    try {
      // const result = await
      pdf2image.convertPDF(origFilePath, options).then((result: any) => console.log(result))
      // console.log(result)
      // await fs.rename(`${thumbnailFilePath}.1.png`, `${thumbnailFilePath}.png`, () => {})
      return `${basename}_${unique_id}_thumb.png`
    } catch {
      return getGenericThumbnailPath('pdf')
    }
  } else if (['.pdf', '.doc', '.docx'].includes(ext))
    return getGenericThumbnailPath(`_/${ext.replace('.', '')}`)
  else return getGenericThumbnailPath(mimetype)
}

const splitMimetype = (mimetype: string) => {
  // To-do: parse correctly if mimetype has parameter
  // (e.g. type/subtype;parameter=value)
  const [type, subtype] = mimetype.split('/')
  return { type, subtype }
}

const getGenericThumbnailPath = (mimetype: string) => {
  const { type, subtype } = splitMimetype(mimetype)
  if (subtype in genericThumbnails) return genericThumbnails[subtype]
  if (type in genericThumbnails) return genericThumbnails[type]
  return genericThumbnails.file
}

export default createThumbnail
