import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Page_number } from '@/interfaces/interface'

import pag_left from "../../public/pagination_left.png"
import pag_right from '../../public/pagination_right.png'

const Pagination: FC<Page_number> = ({ page_number }) => {


    return (
        <div className='flex h-40 w-screen justify-center items-center [&>*]:mx-5'>
            <Link href={`${page_number - 1}`}>
                <Image src={pag_left} width={80} height={80} alt='logo_dog' className='hover:scale-125 transition duration-500' placeholder='blur'></Image>
            </Link>

            <Link className={page_number - 2 > 0 ? 'flex justify-center items-center w-10 h-10 bg-amber-800 text-amber-100 rounded-3xl hover:bg-amber-100 hover:text-amber-800' : 'hidden'} href={`${page_number - 2}`}>{page_number - 2}</Link>
            <Link className={page_number - 1 > 0 ? 'flex justify-center items-center w-10 h-10 bg-amber-800 text-amber-100 rounded-3xl hover:bg-amber-100 hover:text-amber-800' : 'hidden'} href={`${page_number - 1}`}>{page_number - 1}</Link>

            <Link className='flex justify-center items-center w-10 h-10 bg-amber-100 text-amber-800 rounded-3xl hover:bg-amber-800 hover:text-amber-100' href={`${page_number}`}>{page_number}</Link>

            <Link className='flex justify-center items-center w-10 h-10 bg-amber-800 text-amber-100 rounded-3xl hover:bg-amber-100 hover:text-amber-800' href={`${page_number + 1}`}>{page_number + 1}</Link>
            <Link className='flex justify-center items-center w-10 h-10 bg-amber-800 text-amber-100 rounded-3xl hover:bg-amber-100 hover:text-amber-800' href={`${page_number + 2}`}>{page_number + 2}</Link>

            <Link className='hover:w-90 h-90 duration-300' href={`${page_number + 1}`}>
                <Image src={pag_right} width={80} height={80} alt='logo_dog' className='hover:scale-125 transition duration-500' placeholder='blur'></Image>
            </Link>

        </div>

    )
}

export default Pagination