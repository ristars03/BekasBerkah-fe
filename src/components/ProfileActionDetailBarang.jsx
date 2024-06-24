import { Link } from 'react-router-dom';
import { useState } from 'react';


export const ProfileActionDetailBarang = () => {
    const [isAvailable, setIsAvailable] = useState(true);

    const toggleAvailability = () => {
        setIsAvailable(!isAvailable);
    };

    return (
        <div className="py-6 rounded-lg border border-zinc-100 items-center gap-8 inline-flex mt-5 px-4 ml-48">
            <div className="flex">
                <img className="w-[550px] h-[550px] relative" src="/src/assets/TasSekolah.svg" alt="Tas Sekolah" />
                <div className="flex-col justify-start items-start gap-6 inline-flex ml-4 w-full">
                    <div className="w-full flex justify-between items-center pt-10">
                        <div
                            onClick={toggleAvailability}
                            className={`w-40 h-10 flex items-center rounded-full p-1 cursor-pointer ${isAvailable ? 'bg-green-500' : 'bg-gray-500'
                                }`}
                        >
                            <div
                                className={`bg-white w-8 h-8 rounded-full shadow-md transform ${isAvailable ? '' : 'translate-x-full'
                                    }`}
                                style={{ transition: 'transform 0.3s ease' }}
                            />
                            <span className={`ml-3 text-white ${isAvailable ? '' : 'hidden'}`}>
                                Tersedia
                            </span>
                            <span className={`ml-3 text-white ${isAvailable ? 'hidden' : ''}`}>
                                Tidak Tersedia
                            </span>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-8 flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-neutral-800 text-2xl font-medium">Tas Sekolah</div>
                            <div className="w-[200px] text-green-600 text-[32px] font-medium">Rp. 78.000</div>
                        </div>
                    </div>
                    <div className="w-[500px] h-[274px] bg-white flex-col justify-end items-start flex">
                        <div className="h-[37px] bg-white flex-col justify-center items-start inline-flex">
                            <div className="elf-stretch justify-start items-start inline-flex">
                                <div className="px-6 py-2 border-b border-green-700 justify-center items-center gap-2.5 flex">
                                    <Link to='/src/pages/PageActionProfileBarang' className="w-20 text-center text-neutral-400 font-medium hover:text-green-700 ">Deskripsi</Link>
                                </div>
                                <div className="px-6 py-2 justify-center items-center gap-2.5 flex">
                                    <div className="w-20 text-center text-green-700 font-medium underline">Detail</div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[5px] bg-white flex-col justify-start items-start inline-flex">
                            <div className="h-[250px] flex-col justify-start items-start gap-2 flex">
                                <div className="flex-col justify-start items-start flex">
                                    <div className=" bg-white flex-col justify-start items-start gap-2 flex">
                                        <div className="px-1 justify-start items-start gap-2 inline-flex">
                                            <div className="justify-center items-start gap-2 inline-flex">
                                                <div className=" text-neutral-400 text-sm">Jangka Waktu Pemakaian Barang : </div>
                                            </div>
                                            <div className="w-[186px] flex-col justify-start items-start gap-[3px] inline-flex">
                                                <div className="justify-start items-start gap-[11px] inline-flex">
                                                    <div className=" w-[52px] h-[17px] text-neutral-800 text-sm">5 Bulan </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="justify-start items-start gap-2.5 inline-flex">
                                            <div className="text-neutral-400 text-sm">Berat Barang :</div>
                                            <div className="text-neutral-800 text-sm">200 gram</div>
                                        </div>
                                        <div className="justify-start items-start gap-2.5 inline-flex">
                                            <div className="text-neutral-400 text-sm">Bahan :</div>
                                            <div className="text-neutral-800 text-sm">Kanvas Premium</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3 justify-start items-start inline-flex">
                                    <div className="text-neutral-800 text-sm">Analisa Hasil Kelayakan :</div>
                                </div>
                                <div className="justify-start items-start gap-2 inline-flex">
                                    <div className="text-neutral-400 text-sm">Layak Pakai :</div>
                                    <div className="text-neutral-800 text-sm">98/100</div>
                                </div>
                                <div className="justify-start items-start gap-2 inline-flex">
                                    <div className="text-neutral-400 text-sm">Noda :</div>
                                    <div className="text-neutral-800 text-sm">10/100</div>
                                </div>
                                <div className="justify-start items-start gap-2 inline-flex">
                                    <div className="text-neutral-400 text-sm">Kusut :</div>
                                    <div className="text-neutral-800 text-sm">20/100</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProfileActionDetailBarang;
