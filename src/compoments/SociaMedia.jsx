import FbIcon from '../assets/icon-facebook.svg'
import InstaIcon from '../assets/icon-insta.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
export const SocialMedia = () =>{
    
    return(
        <div className='flex w-[20%] justify-between'>
            <a href="https://www.facebook.com/digitalcollegebr/" target="_blank"><img src={FbIcon} alt="Icon-Facebook" /></a>
            <a href="https://www.instagram.com/digitalcollegebr/" target="_blank"><img src={InstaIcon} alt="Icon-Instagram" /></a>
            <a href="https://x.com/eaicollegers" target="_blank"><img src={TwitterIcon} alt="Icon-Twitter" /></a>
        </div>
    )
}