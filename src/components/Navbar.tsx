import { useRouter } from 'next/router'
import Image from 'next/image'
import logo_dog from "../../public/logo_dog.png"
import {FC} from 'react'
import { Page } from '@/interfaces/interface'

const navigation: Page[] = [
    {id: 1, title: 'Kawaii Movies', path: '/'},
    {id: 2, title: 'My Favorites', path: '/favorites'},
]

const Navbar: FC = () => {
    const {push, pathname} = useRouter()
    return (
    <nav className='p-2 px-10 flex w-screen h-24 bg-amber-300 max-mini:px-5'>
        <div className='pr-10'>
        <Image src={logo_dog} width={103} height={103} alt='logo_dog' placeholder='blur' className='min-w-103'></Image>
        </div>
        
        <div className='pt-6 max-small:w-52 max-small:pt-2 max-mini:pt-2 max-mini:w-44'> 
            {navigation.map(({id, title, path})  => (<button key={id} className={pathname==path ? 'focus:text-amber-100 mr-8 hover:text-amber-100 duration-300 max-mini:mr-2' : 'mr-8 hover:text-amber-100 duration-300 max-mini:mr-2' } onClick={()=> push(path)}>{title}</button>))}
        </div>         
    </nav>
)}

export default Navbar