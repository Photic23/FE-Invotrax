"use client";

import ProductTable from "@/components/produk-table";

export default function ProductPage() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Daftar Produk</h1>
      <ProductTable />
    </div>
  );
}
