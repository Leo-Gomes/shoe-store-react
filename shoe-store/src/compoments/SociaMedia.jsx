import FbIcon from '../assets/icon-facebook.svg'
import InstaIcon from '../assets/icon-insta.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
export const SocialMedia = () =>{
    
    return(
        <div className='flex w-[20%] justify-between'>
            <a href=""><img src={FbIcon} alt="Icon-Facebook" /></a>
            <a href=""><img src={InstaIcon} alt="Icon-Instagram" /></a>
            <a href=""><img src={TwitterIcon} alt="Icon-Twitter" /></a>
        </div>
    )
}