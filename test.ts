import { equal } from 'assert'
import { getContentType, getExtension } from './'

equal(getContentType('jpg'), 'image/jpeg')
equal(getExtension('image/jpeg'), 'jpg')
