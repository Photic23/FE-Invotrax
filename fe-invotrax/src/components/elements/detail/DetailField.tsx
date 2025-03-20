
export const DetailField: React.FC<{
	namaField: string;
	isiField: string;
}> = ({ namaField, isiField }) => {
	return (
        <div className="pb-2 pt-3">
            <h1 className="text-sm font-medium pb-1">{namaField}</h1>
            <p className="text-sm font-medium">{isiField}</p>
        </div>
	);
};
