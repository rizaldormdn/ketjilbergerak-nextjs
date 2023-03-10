import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Link from 'next/link'

type props = {
     style: string
}
const MediaSosial = ({ style }: props) => {
     return (
          <>
               <Link href={''}><FacebookIcon className={style} /></Link>
               <Link href={''}><TwitterIcon className={style} /></Link>
               <Link href={''}><InstagramIcon className={style} /></Link>
               <Link href={''}><LinkedInIcon className={style} /></Link>
               <Link href={''}><YouTubeIcon className={style} /></Link>
          </>
     )
}
export default MediaSosial