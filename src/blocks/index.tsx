import CommonBlocks from './common'
import FormatBlocks from './format'

export function GetTheBlock(name: string) {
  switch (name) {
    case 'core/audio': return CommonBlocks.Audio
    case 'core/cover': return CommonBlocks.Cover
    case 'core/file': return CommonBlocks.File
    case 'core/gallery': return CommonBlocks.Gallery
    case 'core/heading': return CommonBlocks.Heading
    case 'core/image': return CommonBlocks.Image
    case 'core/list': return CommonBlocks.List
    case 'core/paragraph': return CommonBlocks.Paragraph
    case 'core/quote': return CommonBlocks.Quote
    case 'core/video': return CommonBlocks.Video

    case 'core/code': return FormatBlocks.Code
    case 'core/html': return FormatBlocks.Html
    case 'core/preformatted': return FormatBlocks.Preformatted
    case 'core/pullquote': return FormatBlocks.Pullquote
    default: return null
  }
}

export default {
  ...CommonBlocks,
}