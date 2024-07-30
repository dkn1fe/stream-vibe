import { forwardRef, useState } from 'react'
import PhoneInput from 'react-phone-number-input'

const CustomInput = forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
    <input
        {...props}
        ref={ref}
        style={{
            padding: '10px',
            width: '100%',
            border: '1px solid #262626',
            borderRadius: '8px',
            backgroundColor: '#141414',
            color: 'white',
        }}
    />
))

const CustomPhoneInput = () => {
    const [value, setValue] = useState<string>()

    return (
        <PhoneInput
            defaultCountry='PL'
            international
            value={value}
            onChange={setValue}
            inputComponent={CustomInput}
            placeholder='Enter phone number'
        />
    )
}

export default CustomPhoneInput