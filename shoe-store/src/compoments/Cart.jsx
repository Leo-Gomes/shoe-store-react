import CartImg from '../../public/cart.svg'

export const Cart = () => {
    return(
    <div className='relative cursor-pointer'>
        <img src={CartImg} alt="Carrinho"/>
        <div className='rounded-full bg-primary text-[8px] text-center   text-white px-[2px] absolute top-0 right-0'>
            2
        </div>
    </div>
    )
}