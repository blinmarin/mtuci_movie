import { IFilmData } from "@/interfaces/interface"
import { Commentariy } from "@/interfaces/storage"
import { getLocalStorage, setLocalStorage } from "@/services/storage.service"
import { FC, useState, useEffect } from "react"
import CommentItem from "./CommentItem"
import Image from "next/image"
import commentDog from '../../public/favicon.png'


const Comments: FC<IFilmData> = ({ movie }) => {

    let [comments, setComments] = useState('')
    let [comentators, setComentators] = useState('')
    let [storageData, setStorageData] = useState([{ comentator_value: '', comment_value: '' }])


    useEffect(() => {
        setStorageData(JSON.parse(String(getLocalStorage(movie.movie.id))))
    }, [])


    function createStor(newComment: Commentariy) {
        let stor: [Commentariy]
        let data = getLocalStorage(movie.movie.id)
        if (data) {
            stor = JSON.parse(data)
            stor.push(newComment)
        }
        else {
            stor = [newComment]
        }
        setStorageData(stor)
        return (stor)
    }


    function writeComment() {
        if (typeof window !== 'undefined') {

            let newComment = {
                comentator_value: comentators,
                comment_value: comments
            }
            setLocalStorage(String(movie.movie.id), JSON.stringify(createStor(newComment)))
            setComments('')
            setComentators('')

        }

    }



    return (
        <div>
            <div className="flex flex-col w-650 px-20 pt-5 max-medium:text-lg max-half:px-10 max-half:w-screen">
                <div className="mb-5">Leave a comment</div>

                <div className="flex">
                    <p className="mr-5">Your name:</p>
                    <input className='w-60 h-10 text-amber-800 bg-amber-25 border-4 border-amber-800 rounded-xl p-2 text-lg focus:border-amber-300 outline-none mb-5 max-mini:w-full' type='text' value={comentators} onChange={event => setComentators(event.target.value)}></input>
                </div>
                <textarea className='w-500 h-24 text-amber-800 bg-amber-25 border-4 border-amber-800 rounded-xl p-2 text-lg focus:border-amber-300 outline-none mb-5 max-half:w-full' value={comments} onChange={event => setComments(event.target.value)}></textarea>
                <div className="flex flex-row-reverse">
                    <button className="w-60 h-10 bg-amber-800 text-amber-100 rounded-xl p-1 text-xl font-medium  hover:bg-amber-300 hover:text-amber-800 hover:scale-110 hover:transition hover:duration-500 max-medium:text-lg" onClick={writeComment}>Leave a comment</button>
                </div>
            </div>



            <div className="flex flex-col items-center  m-10 max-medium:text-lg">

                <Image src={commentDog} width={160} height={160} alt='page_dog' className="" placeholder='blur'></Image>
                <div className="mb-5" >Comments</div>
                {storageData ? storageData.map((data) => <CommentItem data={data} />) : <div className="mb-10 max-mini:text-center">There are no comments yet. Become the first!</div>}
            </div>
                




            
        </div>
    )
}

export default Comments