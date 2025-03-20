
interface ButtonProps {
    label: string;
    textColor?: string
    buttonHeight?: number
    BackColor?: string
    BorderColor?: string
    BW?: number
    isLoading?: boolean;
    onClick?: () => void
    MW?:string
    none?: string
    disabled?:boolean 
    width?: string
}

const Button: React.FC<ButtonProps> = ({ disabled, label, textColor, buttonHeight, BackColor, BorderColor, BW, onClick, isLoading, none, width="w-[100%]" }) => {
    
    return (
        <button disabled={disabled} onClick={onClick} style={{ height: buttonHeight || 56, backgroundColor: BackColor || '#116EFC', borderColor: BorderColor || 'none', borderWidth: BW || 0, opacity: isLoading ? 0.5 : 1,  display:none || 'flex'  }} className={`cursor-pointer flex items-center justify-center rounded-[12px] w-full ${width}  `}>
            <p className="text-[14px] font-semibold leading-[19.5px] text-center text-[#FFFFFF]" style={{ color: textColor || 'white' }} >{label}</p>
        </button>
    );
}

export default Button;




