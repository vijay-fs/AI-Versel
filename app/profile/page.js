'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import {useRouter} from 'next/navigation'
import Profile from "@components/Profile"
const MyProfile = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const [promptData, setPromptData] = useState([])
    useEffect(() => {
        const fetchPrompts = async () => {
          const res = await fetch(`/api/users/${session?.user.id}/posts`)
          console.log(res); // Log the response object
          const data = await res.json();
          console.log(data); // Log the parsed data
          setPromptData(data);
        }
        if (session?.user.id) fetchPrompts();
      }, [session?.user.id]);
      

    const handleEdit = (promptData) => {
router.push(`/update-prompt?id=${promptData._id}`)
    }
    const handleDelete = async (promptToDelete) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?")
        if(hasConfirmed){
            try{
            const res = await fetch(`/api/prompt/${promptToDelete._id.toString()}`, {
                method: "DELETE",
            })
            const filteredPrompts = promptData.filter((p) => p._id !== promptToDelete._id);
            setPromptData(filteredPrompts);

        }catch(error){
            console.log(error)
        }
    }
    } 
  return (
    <Profile
    name={session?.user.name}
    desc = "Welcome to your personalized profile page."
    data = {promptData}
    handleEdit = {handleEdit}
    handleDelete = {handleDelete}
    />
  )
}

export default MyProfile