
import { Check, ChevronsUpDown } from "lucide-react"
import { FC } from "react"
import { cn } from "@/shared/lib/lib"
import { Button } from "@/shared/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/shared/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shared/ui/popover"
import {genreList} from "@/shared/utils/genreList"
import { useDispatch} from "react-redux"
import { AppDispatch } from "@/app/store/store"
import { chooseGenresFilm } from "@/app/store/genresSlice"
import { useState } from "react"

interface ChooseGenreProps{
    genre:string
}

export const  ChooseGenre:FC<ChooseGenreProps> = ({genre}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(genre)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="pt-4">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        {value
                            ? genreList.find((genre) => genre.title === value)?.title
                            : "Select Genre"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search Genre..." />
                        <CommandList>
                            <CommandEmpty>No genre found.</CommandEmpty>
                            <CommandGroup>
                                {genreList.map((genre) => (
                                    <CommandItem
                                        key={genre.id}
                                        value={genre.title}

                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                            dispatch(chooseGenresFilm(genre.label))
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === genre.title ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {genre.title}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
