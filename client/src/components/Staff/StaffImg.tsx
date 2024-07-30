import { Skeleton } from "@/shared/ui/skeleton"
import { FC } from "react"

interface StaffImgProps {
    img: string,
    status: string
}

export const StaffImg: FC<StaffImgProps> = ({ img, status }) => {
    return (
        <div className="max-w-[300px]">
            {status === 'loading' && (
                <Skeleton className="w-[300px] h-[300px] rounded-lg" />
            )}
            {status === 'idle' && (
                <img src={img} className="object-cover rounded-lg" />
            )
            }
        </div>
    )
}