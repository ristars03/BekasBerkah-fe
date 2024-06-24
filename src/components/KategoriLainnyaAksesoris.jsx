import { Link } from 'react-router-dom';

export const KategoriLainnyaAksesoris = () => {
    return (
        <div className='px-12 flex flex-col gap-5 py-12'>
            <h2 className='text-3xl font-bold'>Kategori</h2>
            <div className='grid grid-cols-3 gap-5'>
                <Link to="/src/pages/PageSepatu" className='text-xl rounded-lg font-medium bg-gradient-to-r from-amber-800 to-amber-500  flex p-5 h-[80px] py-2 text-white'>Sepatu</Link>
                <Link to="/src/pages/PageBuku" className='text-xl rounded-lg font-medium bg-gradient-to-r from-green-800 to-green-500  flex p-5 h-[80px] py-2 text-white'>Buku</Link>
                <Link to="/src/pages/PageAlatMusik" className='text-xl rounded-lg font-medium bg-gradient-to-r from-pink-800 to-pink-500  flex p-5 h-[80px] py-2 text-white'>Alat Musik</Link>
            </div>
        </div>
    )
}

export default KategoriLainnyaAksesoris;