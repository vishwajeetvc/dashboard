
export default function Button({ label, className, fat, onClick }) {
    return (<>
        <span
            onClick={onClick}
            className={`font-[700] text-[18px]  text-white
            ${fat ? 'border rounded-full px-10 py-2 hover:scale-105 transition-all hover:bg-white hover:text-black duration-900 ' : ''}
             hover:cursor-pointer ${className}
             `}>
            {label}
        </span>
    </>)
}
