import { AppDispatch } from "@/app/store/store";
import { cn } from "@/shared/lib/lib";
import { Slider } from "@/shared/ui/slider";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FC } from 'react'

interface ChooseOptionProps {
    handleChoose: (num: number) => number,
    title: string,
    min: number,
    max: number,
    step: number,
    defaultValue: number
}

export const ChooseOption: FC<ChooseOptionProps> = ({ handleChoose, title, min, max, step, defaultValue }) => {
    const [value, setValue] = useState(defaultValue);
    const dispatch = useDispatch<AppDispatch>();

    const handleValue = (value: number[]) => {
        const invertedValue = max - value[0] + min;
        setValue(invertedValue);
        dispatch(handleChoose(invertedValue));
    };

    const sliderWidth = 100;
    const thumbPosition = ((value - min) / (max - min)) * sliderWidth;

    return (
        <div className="w-full relative">
            <h3 className="text-white text-xl mb-10">{title}</h3>
            <div className="relative mb-4">
                <div
                    className="absolute -top-9 transform -translate-x-1/2 text-white text-xs font-bold transition-all duration-100 bg-indigo-600 rounded-full py-1 px-2 shadow-lg"
                    style={{ left: `calc(${thumbPosition}%)` }}
                >
                    {value}
                </div>
                <Slider
                    defaultValue={[max - defaultValue + min]}
                    max={max}
                    min={min}
                    value={[max - value + min]}
                    onValueChange={handleValue}
                    step={step}
                    className={cn('w-[100%] mx-auto cursor-pointer')}
                    inverted={true} 
                />
            </div>
        </div>
    );
};
