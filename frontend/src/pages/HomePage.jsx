import NoteCard from "../components/NoteCard";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
   const [isRateLimited, setIsRateLimited] = useState(false);
   const [notes, setNotes] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      const fetchNotes = async () => {
         try {
            const res = await axios.get("http://localhost:5001/api/notes");
            setNotes(res.data);
            setIsRateLimited(false);
            setIsLoading(false);
         } catch (error) {
            console.error("Error fetching notes");
            console.error(error);
            if (error.response?.status === 429) {
               setIsRateLimited(true);
            } else {
               toast.error("Failed to load notes");
            }
         } finally {
            setIsLoading(false);
         }
      };

      fetchNotes();
   }, []);

   return (
      <div>
         <Navbar className="min-h-screen" />

         {isRateLimited && <RateLimitedUI />}
         
         <div className="max-w-7xl mx-auto p-4 mt-6">
            {isLoading && <div className="text-center text-primary py-10">Loading notes...</div>}

            {notes.length > 0 && !isRateLimited && (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {notes.map((note) => (
                     <NoteCard key={note.id} note={note} />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default HomePage;
