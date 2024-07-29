import { StaffInfoTypes } from "@/shared/types/staffTypes"
import { StaffAbout } from "./StaffAbout"
import { StaffImg } from "./StaffImg"
import { getData } from "@/shared/utils/utils"
import { FC} from "react"
import { StaffFilms } from "./StaffFilms"

interface StaffInfoProps {
    staffInfo: StaffInfoTypes
    status:string
}

export const StaffInfo: FC<StaffInfoProps> = ({ staffInfo,status}) => {
    const staffAboutInfo = staffInfo && [
        { id: 1, title: 'Карьера', label: staffInfo.profession || '-' },
        { id: 2, title: 'Рост', label: staffInfo.growth > 0 ? staffInfo.growth + "см" : '-' },
        { id: 3, title: 'Возраст', label: staffInfo.age + ' ' + 'лет' || '-' },
        { id: 4, title: 'Дата Рождения', label: staffInfo.birthday !== null || undefined ? getData(staffInfo?.birthday) : '-' },
        { id: 5, title: 'Место Рождения', label: staffInfo.birthplace || '-' },
        { id: 6, title: 'Всего фильмов', label: staffInfo.films.length || '-' }
    ]

    return (
        <>
            {staffInfo && (
                <div className="p-10 flex gap-11 items-start">
                    <StaffImg status = {status} img={staffInfo.posterUrl} />
                    <StaffAbout status = {status} nameRu={staffInfo.nameRu} nameEn={staffInfo.nameEn} staffAboutInfo={staffAboutInfo} />
                    <StaffFilms status={status} films={staffInfo.films} />
                </div>

            )}
        </>
    )
}