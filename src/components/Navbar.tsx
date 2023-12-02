import { useRouter } from 'next/router'
import Image from 'next/image'
import logo_dog from "../../public/logo_dog.png"
import {FC} from 'react'
import { Page } from '@/interfaces/interface'

const navigation: Page[] = [
    {id: 1, title: 'Kawaii Movies', path: '/'},
]

const Navbar: FC = () => {
    const {push, pathname} = useRouter()
    return (
    <nav className='p-2 px-10 flex w-screen h-24 bg-amber-300 max-mini:px-5'>
        <div className='pr-10'>
        <Image src={logo_dog} width={103} height={103} alt='logo_dog' placeholder='blur'></Image>
        </div>
        <div className='pt-6 hover:text-amber-100 duration-300'>
            {navigation.map(({id, title, path})  => (<button key={id} className={pathname==path ? 'focus:text-amber-100' : '' } onClick={()=> push(path)}>{title}</button>))}
        </div>         
    </nav>
)}

export default Navbar