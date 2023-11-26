import Film from "@/components/screens/Film"
import { useRouter } from "next/router"
import { NextPage } from "next"

const FilmPage: NextPage = () => { 
    const {asPath, pathname} = useRouter()
    console.log(asPath, pathname)

    return <Film />
}

export default FilmPage