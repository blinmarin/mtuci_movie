import Footer from "./Footer"
import Navbar from "./Navbar"
import { IProps } from "@/interfaces/interface"


const Layout = ({children}: IProps) => (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )

export default Layout