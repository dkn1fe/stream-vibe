import { AppDispatch } from "@/app/store/store"
import { Genres } from "@/components/Genres/Genres"
import { Header } from "@/components/Header/Header"
import { genresApi } from "@/shared/api/genresApi"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

export const GenresPage = () => {
   const {genre} = useParams()
   const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
         dispatch(genresApi())
    },[])

    return (
        <div className="container">
            <header>
                <Header />
            </header>
            <main className="pt-4">
              <Genres genre = {genre as string}/>
            </main>
        </div>
    )
}