import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const {detailPengadaanId} = await request.json()
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/penawaran-pengadaan/${detailPengadaanId}/`)
    //const response = await fetch(`http://127.0.0.1:8000/api/penawaran-pengadaan/3/`)
    return NextResponse.json(response);
    
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching detail: detail tidak ditemukan' }, { status: 500 });
  }
}