import dayjs from 'dayjs'
import 'dayjs/locale/ko'

export const formatDate = (date: string, format: string = 'YYYY.MM.DD') => dayjs(date).locale('ko').format(format)
