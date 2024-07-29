import { AppDispatch, RootState } from "@/app/store/store"
import { Header } from "@/components/Header/Header"
import { StaffInfo } from "@/components/Staff/StaffInfo"
import { onGetStaffById } from "@/shared/api/staffApiById"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { FC } from "react"
import { Film, StaffInfoTypes } from "@/shared/types/staffTypes"
import { MoviesCarousel } from "@/components/Staff/MoviesCarousel"



export const StaffPage: FC = () => {
    const { staffId } = useParams()
    const { staffInfo, staffInfoStatus } = useSelector((state: RootState) => state.staffSlice)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(onGetStaffById(staffId as any))
    }, [staffId])

    return (
        <div className="container">
            <header>
                <Header />
            </header>
            <main className="bg-[#202020] max-w-[1200px] min-h-[900px] m-auto my-10 rounded-lg">
                <StaffInfo status={staffInfoStatus} staffInfo={staffInfo as StaffInfoTypes} />
                <MoviesCarousel staffId={staffId as any} films={staffInfo?.films as Film[]} />
            </main>
        </div>

    )
}