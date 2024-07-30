import { FC } from "react"
import { Skeleton } from "@/shared/ui/skeleton"

interface StaffAboutProps {
    nameRu: string,
    nameEn: string,
    staffAboutInfo: { id: number, title: string, label: string | number }[],
    status: string
}

export const StaffAbout: FC<StaffAboutProps> = ({ nameRu, nameEn, staffAboutInfo, status }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <h3 className="text-[40px] text-white">
                    {status === 'loading' ? <Skeleton className="rounded-md w-[200px] h-[40px]" /> : nameRu}
                </h3>
                <h4 className="text-[18px] text-[#999999]">
                    {status === 'loading' ? <Skeleton className="rounded-md mt-2 w-[150px] h-[18px]" /> : nameEn}
                </h4>
            </div>
            <div className="pt-10">
                <h3 className="text-[22px] text-white">О персоне</h3>
                <div className="flex flex-col space-y-4 mt-4">
                    {status === 'loading' ? (
                        Array(5).fill(0).map((_, index) => (
                            <div key={index} className="flex justify-between gap-10">
                                <h3 className="text-[#999999]">
                                    <Skeleton className="rounded-md w-[100px] h-[20px]" />
                                </h3>
                                <h4 className="text-white">
                                    <Skeleton className="rounded-md w-[150px] h-[20px]" />
                                </h4>
                            </div>
                        ))
                    ) : (
                        staffAboutInfo.map(item => (
                            <div key={item.id} className="flex justify-between gap-10">
                                <h3 className="text-[#999999]">{item.title}</h3>
                                <h4 className="text-white">{item.label}</h4>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
