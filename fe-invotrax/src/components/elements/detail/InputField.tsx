import { Input } from "@/components/ui/input";

export const InputField: React.FC<{
	namaField: string;
    placeholder: string;
}> = ({ namaField, placeholder }) => {
	return (
        <div className="pb-1 pt-3">
            <h1 className="text-sm font-medium pb-2">{namaField}</h1>
            <Input placeholder={placeholder}/>
        </div>
	);
}; 