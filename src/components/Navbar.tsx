//now create a nav bar component in center menu like (HOME , CATORGIES , MEN"S, WOMEN"S, jewllery, Perfume, BLOG, HOtOFFER) responsive for mobile and desktop usin text-gray-900 text-[14px] font-semibold 


export default function Navbar() {
    return (
        <div className='container p-4 border-b border-gray-200'>
            <div className='flex justify-center  items-center'>
                <div className='hidden flex lg:flex gap-4'>
                    <a href='#' className='text-gray-900 text-[14px] font-semibold'>HOME</a>
                    <a href='#' className='text-gray-900 text-[14px] font-semibold'>CATORGIES</a>
                    <a href='#' className='text-gray-900 text-[14px] font-semibold '>MEN's</a>
                    <a href='#' className='text-gray-900 text-[14px] font-semibold' >JEWLLERY</a>
                    <a href='#' className='text-gray-900 text-[14px] font-semibold'>PERFUME</a>
                    <a href='#' className='text-gray-900 text-[14px] font-semibold'>BLOG</a>
                    <a href='#' className='text-gray-900 text-[14px] font-semibold'>HOT OFFER</a>
                </div>
                <div className='lg:hidden'>
                    <button className='text-gray-900 text-[14px] font-semibold'>MENU</button>
                </div>
            </div>
        </div>
    )
};