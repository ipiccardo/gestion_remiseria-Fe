import React from 'react';

interface CustomFormInputProps {
    type: string;
    name: string;
    value: any;
    onChange?: (value: any) => void;
    checked?: boolean;
}

const CustomInput: React.FC<CustomFormInputProps> = ({
    type,
    name,
    value,
    onChange,
    checked,
}) => {
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newValue = e.target.value;
            onChange(newValue);
        }
    };

    return (
        <div className='flex flex-col gap-2 w-full'>
            <label className='text-gray-800'>{name}</label>
            <input
                value={value}
                type={type}
                name={name}
                onChange={onChangeInput}
                checked={checked}
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700'
            />
        </div>
    );
};

export default CustomInput;