'use client'

import { useParams } from "next/navigation";
import UpdateProductForm from "@/components/update-produk-form";

export default function EditProductPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  
  return (
    <div className="container py-8">
      <UpdateProductForm productId={productId} />
    </div>
  );
}