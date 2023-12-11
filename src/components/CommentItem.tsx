import { CommentariyData} from "@/interfaces/storage";
import { FC } from 'react'
import DeleteIcon from "./DeleteIcon";


const CommentItem: FC<CommentariyData> = ({data}) => {
    return (
        <div className="flex justify-center mb-5 max-medium:text-lg w-screen">
            <div className="flex flex-row justify-between items-center border-4 border-amber-800 bg-amber-25 rounded-xl p-5 w-650 max-half:w-10/12">
                <div>
                    <div className="text-amber-800 text-lg">{data.comentator_value}:</div>
                    <div className="text-amber-800 break-all">{data.comment_value}</div>
                </div>
                <div>
                    <DeleteIcon data={data}/>
                </div>
                

            </div>

        </div>


    )
}

export default CommentItem