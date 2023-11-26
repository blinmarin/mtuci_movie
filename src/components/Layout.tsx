import Navbar from "./Navbar"
import { IProps } from "@/interfaces/interface"


const Layout = ({children}: IProps) => (
        <>
            <Navbar />
            {children}
        </>
    )

export default Layout