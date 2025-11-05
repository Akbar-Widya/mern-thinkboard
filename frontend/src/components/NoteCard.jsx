import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router"
import { formatDate } from "../lib/utils"

const NoteCard = ({ note }) => {
  return (
    <Link to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200
      border-t-4 border-solid border-[#00FF90]"
    >
      <div className="card-body">
         <h3 className="card-title text-base-content">{note.title}</h3>
         <p className="text-base-content/70 line-clamp-3">{note.content}</p>
         <div>
            <span className="text-sm text-base0content/60">
               {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
               <PenSquareIcon className="size-4" />
               <button className="btn btn-ghost btn-cs text-error">
                  <Trash2Icon className="size-4" />
               </button>
            </div>
         </div>
      </div>
    </Link>
  )
}

export default NoteCard
