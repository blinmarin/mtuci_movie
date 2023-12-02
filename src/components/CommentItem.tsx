import { CommentariyData } from "@/interfaces/storage";
import { FC } from 'react'


const CommentItem: FC<CommentariyData> = ({ data }) => {
    return (
        <div className="flex justify-center mb-5 max-medium:text-lg w-screen">
            <div className="border-4 border-amber-800 bg-amber-25 rounded-xl p-5 w-650 max-half:w-10/12">
                <div className="text-amber-800 text-lg">{data.comentator_value}:</div>
                <div className="text-amber-800">{data.comment_value}</div>
            </div>

        </div>


    )
}

export default CommentItem