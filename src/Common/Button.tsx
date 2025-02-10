
interface ButtonProps {
    label: string;
    textColor?: string
    buttonHeight?: number
    BackColor?: string
    BorderColor?: string
    BW?: number
    isLoading?: boolean;
    onClick?: () => void
    MW?:number
    none?: string
}

const Button: React.FC<ButtonProps> = ({ label, textColor, buttonHeight, BackColor, BorderColor, BW, onClick, isLoading, MW, none }) => {
    return (
        <div onClick={onClick} style={{ height: buttonHeight || 56, backgroundColor: BackColor || '#116EFC', borderColor: BorderColor || 'none', borderWidth: BW || 0, opacity: isLoading ? 0.5 : 1, maxWidth:MW || 169, display:none || 'flex'  }} className="cursor-pointer flex items-center justify-center rounded-[12px] w-full">
            <p className="text-[14px] font-semibold leading-[19.5px] text-center text-[#FFFFFF]" style={{ color: textColor || 'white' }} >{label}</p>
        </div>
    );
}

export default Button;




