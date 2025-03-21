import { Button } from "@/components/ui/button"

export const ButtonPengadaan: React.FC<{
  content: string;
}> = ({content}) => {
  return (
    <div>
      <Button>{content}</Button>
    </div>
  );
};
