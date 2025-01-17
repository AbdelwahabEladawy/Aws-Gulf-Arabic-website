import { useState } from 'react';

export default function Toggle() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <div className="flex w-max ms-8 mx-0">
                <div className="relative sm:left-20 left-10 inline-block w-12 h-6">
                    <input 
                        checked={isChecked} 
                        onChange={() => setIsChecked(!isChecked)} 
                        id="switch-component-blue" 
                        type="checkbox" 
                        className="peer appearance-none w-12 h-6 bg-slate-600 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300 "  
                    />
                    <label 
                        htmlFor="switch-component-blue" 
                        className="absolute top-0 right-[50%]  w-6 h-6 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer">
                    </label>
                </div>
            </div>
        </>
    );
}