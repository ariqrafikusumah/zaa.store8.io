import React, { useState, useEffect } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db } from '../../database/firebase';
import { ref, onValue } from "firebase/database";

export default function MobileLegend_8() {

    // ** Modal Petunjuk
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ** Loading Screen
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);

    // ** Input Value ID & Zone
    const [inputValue, setInputValue] = useState('');
    const [user_id, setUser_id] = useState('');
    const [zone_id, setZone_id] = useState('');
    const [errorUser_id, setErrorUser_id] = useState('');
    const [errorZone_id, setErrorZone_id] = useState('');

    // ** Max Input Number 10 Digit
    const handleChangeUser_id = (event) => {
        const inputNumberUser_id = event.target.value.replace(/\D/g, '');
        // Remove non-numeric characters from the input
        if (inputNumberUser_id.length <= 10) {
            setUser_id(inputNumberUser_id);
            setErrorUser_id('');
        } else {
            setErrorUser_id('Bagian ini dapat diisi maksimal 10 karakter');
        }
    };

    // ** Max Input Number 5 Digit
    const handleChangeZone_id = (event) => {
        const inputNumberZone_id = event.target.value.replace(/\D/g, '');
        // Remove non-numeric characters from the input
        if (inputNumberZone_id.length <= 5) {
            setZone_id(inputNumberZone_id);
            setErrorZone_id('');
        } else {
            setErrorZone_id('Bagian ini dapat diisi maksimal 5 karakter');
        }
    };

    // ** Generate Code RefId
    const generateRandomValue = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    };

    // ** Read Phone-Whatsapp
    const [phone, setPhone] = useState('');
    useEffect(() => {
        onValue(ref(db, '/phone-whatsapp'), (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                const phoneArr = Object.values(data).map((item) => item.phone);
                setPhone(phoneArr);
                setisLoading(false);
            } else {
                setisError(true);
            }
        })
    }, []);

    // ** Read Data APi category
    const [dataCategory, setDataCategory] = useState([]);
    const id = '-NOQFV4o7ZV2Xzhe7aSr';

    useEffect(() => {
        onValue(ref(db, `/categories/${id}`), (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                setDataCategory([data]);
                setisLoading(false);
            } else {
                setisError(true);
                console.log("gagal");
            }
        })
    }, [id]);

    // ** Read Data APi product
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        onValue(ref(db, `/product-ml-8`), (snapshot) => {
            setDataProduct([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((item) => {
                    setDataProduct((oldArray) => [...oldArray, item].sort((a, b) => a.code.localeCompare(b.code)));
                });
                setisLoading(false);
            } else {
                setisError(true);
            }
        })
    }, []);

    // ** Read Data APi payment-qris
    const [dataPaymentQris, setDataPaymentQris] = useState([]);

    useEffect(() => {
        onValue(ref(db, `/payment-qris`), (snapshot) => {
            setDataPaymentQris([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((item) => {
                    setDataPaymentQris((oldArray) => [...oldArray, item]);
                });
                setisLoading(false);
            } else {
                setisError(true);
            }
        })
    }, []);

    // ** Read Data APi payment-bank
    const [dataPaymentBank, setDataPaymentBank] = useState([]);

    useEffect(() => {
        onValue(ref(db, `/payment-bank`), (snapshot) => {
            setDataPaymentBank([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((item) => {
                    setDataPaymentBank((oldArray) => [...oldArray, item]);
                });
                setisLoading(false);
            } else {
                setisError(true);
            }
        })
    }, []);

    // ** Read Data APi payment-wallet
    const [dataPaymentWallet, setDataPaymentWallet] = useState([]);

    useEffect(() => {
        onValue(ref(db, `/payment-wallet`), (snapshot) => {
            setDataPaymentWallet([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((item) => {
                    setDataPaymentWallet((oldArray) => [...oldArray, item]);
                });
            } else {
                setisError(true);
            }
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(handleSubmit);

        const phone_whatsapp = phone;
        const user_id = event.target.user_id.value;
        const zone_id = event.target.zone_id.value;
        const category = event.target.category.value;
        const sub_category = event.target.sub_category.value;
        const productsId = document.querySelector('input[name="product"]:checked');
        const productsValue = document.querySelector('input[name="product"]:checked').value;
        const products = productsId.id;
        const products_price = productsValue;
        const paymentId = document.querySelector('input[name="payment"]:checked');
        const paymentValue = document.querySelector('input[name="payment"]:checked').value;
        const payment = paymentId.id;
        const payment_number_account = paymentValue;
        const nama = event.target.nama.value;
        const randomValue = generateRandomValue();
        setInputValue(randomValue);
        const url = `https://wa.me/${phone_whatsapp}?text=*›%20Game*%20%3A%20${encodeURIComponent(category)}%20${encodeURIComponent(sub_category)}%0A*›%20Order%20ID*%20%3A%20${encodeURIComponent(user_id)}%20(%20${encodeURIComponent(zone_id)}%20)%0A*›%20Item*%20%3A%20${encodeURIComponent(products)}%0A*›%20Pembayaran%20via*%20%3A%20${encodeURIComponent(payment)}%20${encodeURIComponent(payment_number_account)}%0A*›%20Total*%20%3A%20Rp%20${encodeURIComponent(products_price)}%2C-%0A*›%20Nama Costumer*%20%3A%20${encodeURIComponent(nama)}%0A*›%20RefId*%20%3A%20%60%60%60S2302160${encodeURIComponent(randomValue)}%60%60%60%0A%0AKirim%20Bukti%20Pembayaran%20Disini%20ya%0AJika%20sudah%20ketik%20*DONE%20TF%20MIN*%0A%0A*_Best%20regards_*%0A*zaastore8*%0Ahttps%3A%2F%2Fzaastore8.netlify.app`;
        window.open(url);

    };

    if (isLoading) return (
        <div className="text-center mt-5">
            <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
    else if (dataCategory, dataProduct, dataPaymentQris, dataPaymentBank, dataPaymentWallet && !isError)
        return (
            <>
                <div>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 xl:px-52 lg:px-32 md:px-5 sm:px-5 xs:px-2 mt-3'>
                        <div className=' rounded-xl xl:w-96 lg:w-96 lg:h-72'>
                            <div className='xl:px-auto xl:py-auto '>
                                {dataCategory.map((item) => (
                                    <>
                                        <div key={item} >
                                            <img className='h-32 w-32 rounded-xl' src={item.thumbnail} alt={item.category} />
                                            <h1 className='text-lg font-bold'>{item.category} - {item.sub_category}</h1>
                                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                    </>
                                ))}
                                <div className='flex flex-cols-2 gap-2 mt-3'>
                                    <div>
                                        <a href="https://apps.apple.com/app/id1160056295?country=my" target="_blank" rel="noopener noreferrer">
                                            <img src="https://d1qgcmfii0ptfa.cloudfront.net/S/content/mobile/images/app_store_coda.png" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=com.mobile.legends&country=my" target="_blank" rel="noopener noreferrer">
                                            <img src="https://d1qgcmfii0ptfa.cloudfront.net/S/content/mobile/images/google_play_coda.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-0 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>1</span>&nbsp;Masukkan User ID
                                        </div>
                                        <div className='xl:grid xl:grid-cols-2 lg:grid-cols-1 lg:grid md:grid-cols-2 md:grid sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 xss:grid xss:grid-cols-1 gap-x-8 gap-y-4 px-2 py-2 mb-2'>
                                            <div className="relative">
                                                {dataCategory.map((item) => (
                                                    <>
                                                        <div key={item}>
                                                            <input type="text" name="category" id="category" value={item.category} hidden />
                                                            <input type="text" name="sub_category" id="sub_category" value={item.sub_category} hidden />
                                                        </div>
                                                    </>
                                                ))}
                                                <input type="number" id="user_id" name='user_id' className="block border hover:ring-blue-500 hover:border-blue-500 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " maxLength="10" value={user_id} onChange={handleChangeUser_id} required />
                                                <label htmlFor="user_id" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Masukkan User ID</label>
                                                {errorUser_id && <div className="errorUser_id text-sm text-red-500 sm:mb-3">{errorUser_id}</div>}
                                            </div>
                                            <div className="relative">
                                                <input type="number" id="zone_id" name='zone_id' className="block border hover:ring-blue-500 hover:border-blue-500 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " maxLength="5" value={zone_id} onChange={handleChangeZone_id} required />
                                                <label htmlFor="zone_id" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">( Zone ID )</label>
                                                {errorZone_id && <div className="errorZone_id text-sm text-red-500">{errorZone_id}</div>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className='px-2'>
                                                <div className=' font-thin italic text-justify text-xs mb-2'>
                                                    Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678 (1234).
                                                </div>
                                                <Button className="flex gap-2 mt-3 text-white bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleShow}>
                                                    Petunjuk
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>2</span>&nbsp;Pilih Nominal Top Up
                                        </div>
                                        <div className='grid w-full gap-6 md:grid-cols-2 xs:grid-cols-2 mt-3'>
                                            {dataProduct.map((item) => (
                                                <>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='product' id={item.product_name} value={item.price} required />
                                                        <label htmlFor={item.product_name} className='inline-flex peer-checked:shadow-xl items-center justify-between w-full p-2 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100'>
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-bold'>{item.product_name}</div>
                                                                <div className='w-full text-sm italic'>Rp {item.price},-</div>
                                                            </div>
                                                            <img className='w-6 h-6 ml-3' src={item.picture} alt={item.product_name} />
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>3</span>&nbsp;Pilih Pembayaran
                                        </div>
                                        {dataPaymentQris.map((item) => (
                                            <>
                                                <div className='mt-3'>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='payment' id={item.qris_name} value={item.qris_img} required />
                                                        <label htmlFor={item.qris_name} className='inline-flex peer-checked:shadow-xl items-center justify-between w-full p-4 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100'>
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-semibold'>{item.qr_qris}</div>
                                                                <div className='w-full text-sm italic'>A/n {item.qris_name}</div>
                                                            </div>
                                                            <img className='w-32 h-full ml-3' src={item.picture} alt="" />
                                                        </label>
                                                    </div>
                                                </div>

                                            </>
                                        ))}
                                        {dataPaymentBank.map((item) => (
                                            <>
                                                <div className='mt-3'>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='payment' id={item.bank_name} value={item.number_account} required />
                                                        <label htmlFor={item.bank_name} className="inline-flex peer-checked:shadow-xl items-center justify-between w-full p-4 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100">
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-semibold'>{item.bank_name}</div>
                                                                <div className='w-full text-sm italic'>A/n {item.first_name} {item.last_name}</div>
                                                            </div>
                                                            <img className='w-32 h-full ml-3' src={item.picture} alt={item.bank_name} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                        {dataPaymentWallet.map((item) => (
                                            <>
                                                <div className='mt-3'>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='payment' id={item.wallet_name} value={item.number_account} required />
                                                        <label htmlFor={item.wallet_name} className="inline-flex peer-checked:shadow-xl items-center justify-between w-full p-4 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100">
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-semibold'>{item.wallet_name}</div>
                                                                <div className='w-full text-sm italic'>A/n {item.first_name} {item.last_name}</div>
                                                            </div>
                                                            <img className='w-32 h-full ml-3' src={item.picture} alt={item.wallet_name} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>4</span>&nbsp;Beli
                                        </div>
                                        <div>
                                            <div className="relative mt-3">
                                                <input type="text" id="costumer" name='nama' className="block border hover:ring-blue-500 hover:border-blue-500 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label htmlFor="costumer" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Masukkan Nama Anda</label>
                                            </div>
                                            <div>
                                                {/* <Recaptcha
                                                    sitekey={key}
                                                    render="explicit"
                                                    verifyCallback={verifyCallback}
                                                    onloadCallback={callback}
                                                /> */}
                                            </div>
                                            <div>
                                                <input type="text" value={inputValue} name="kode_order" hidden />
                                                <button type="submit" className="flex gap-2 mt-3 text-white bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><ShoppingCartIcon className="w-5 h-5" /> Beli</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    {dataCategory.map((item) => (
                        <>
                            <div key={item}>
                                <img className='h-full w-full rounded-lg' src={item.petunjuk} alt={item.category} />
                            </div>
                        </>
                    ))}
                </Modal>
            </>
        );
    else {
        return (
            <>
                <div>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 xl:px-52 lg:px-32 md:px-5 sm:px-5 xs:px-2 mt-3'>
                        <div className=' rounded-xl xl:w-96 lg:w-96 lg:h-72'>
                            <div className='xl:px-auto xl:py-auto '>
                                {dataCategory.map((item) => (
                                    <>
                                        <div key={item} >
                                            <img className='h-32 w-32 rounded-xl' src={item.thumbnail} alt={item.category} />
                                            <h1 className='text-lg font-bold'>{item.category} - {item.sub_category}</h1>
                                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                    </>
                                ))}
                                <div className='flex flex-cols-2 gap-2 mt-3'>
                                    <div>
                                        <a href="https://apps.apple.com/app/id1160056295?country=my" target="_blank" rel="noopener noreferrer">
                                            <img src="https://d1qgcmfii0ptfa.cloudfront.net/S/content/mobile/images/app_store_coda.png" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=com.mobile.legends&country=my" target="_blank" rel="noopener noreferrer">
                                            <img src="https://d1qgcmfii0ptfa.cloudfront.net/S/content/mobile/images/google_play_coda.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-0 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>1</span>&nbsp;Masukkan User ID
                                        </div>
                                        <div className='xl:grid xl:grid-cols-2 lg:grid-cols-1 lg:grid md:grid-cols-2 md:grid sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 xss:grid xss:grid-cols-1 gap-x-8 gap-y-4 px-2 py-2 mb-2'>
                                            <div className="relative">
                                                {dataCategory.map((item) => (
                                                    <>
                                                        <div key={item}>
                                                            <input type="text" name="category" id="category" value={item.category} hidden />
                                                            <input type="text" name="sub_category" id="sub_category" value={item.sub_category} hidden />
                                                        </div>
                                                    </>
                                                ))}
                                                <input type="number" id="user_id" name='user_id' className="block border hover:ring-blue-500 hover:border-blue-500 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " maxLength="10" value={user_id} onChange={handleChangeUser_id} required />
                                                <label htmlFor="user_id" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Masukkan User ID</label>
                                                {errorUser_id && <div className="errorUser_id text-sm text-red-500 sm:mb-3">{errorUser_id}</div>}
                                            </div>
                                            <div className="relative">
                                                <input type="number" id="zone_id" name='zone_id' className="block border hover:ring-blue-500 hover:border-blue-500 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " maxLength="5" value={zone_id} onChange={handleChangeZone_id} required />
                                                <label htmlFor="zone_id" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">( Zone ID )</label>
                                                {errorZone_id && <div className="errorZone_id text-sm text-red-500">{errorZone_id}</div>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className='px-2'>
                                                <div className=' font-thin italic text-justify text-xs mb-2'>
                                                    Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678 (1234).
                                                </div>
                                                <Button className="flex gap-2 mt-3 text-white bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleShow}>
                                                    Petunjuk
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>2</span>&nbsp;Pilih Nominal Top Up
                                        </div>
                                        <div className='grid w-full gap-6 md:grid-cols-2 xs:grid-cols-2 mt-3'>
                                            {dataProduct.map((item) => (
                                                <>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='product' id={item.product_name} value={item.price} required />
                                                        <label htmlFor={item.product_name} className='inline-flex peer-checked:shadow-xl items-center justify-between w-full p-2 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100'>
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-bold'>{item.product_name}</div>
                                                                <div className='w-full text-sm italic'>Rp {item.price},-</div>
                                                            </div>
                                                            <img className='w-6 h-6 ml-3' src={item.picture} alt={item.product_name} />
                                                        </label>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>3</span>&nbsp;Pilih Pembayaran
                                        </div>
                                        {dataPaymentQris.map((item) => (
                                            <>
                                                <div className='mt-3'>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='payment' id={item.qris_name} value={item.qris_img} required />
                                                        <label htmlFor={item.qris_name} className='inline-flex peer-checked:shadow-xl items-center justify-between w-full p-4 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100'>
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-semibold'>{item.qr_qris}</div>
                                                                <div className='w-full text-sm italic'>A/n {item.qris_name}</div>
                                                            </div>
                                                            <img className='w-32 h-full ml-3' src={item.picture} alt="" />
                                                        </label>
                                                    </div>
                                                </div>

                                            </>
                                        ))}
                                        {dataPaymentBank.map((item) => (
                                            <>
                                                <div className='mt-3'>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='payment' id={item.bank_name} value={item.number_account} required />
                                                        <label htmlFor={item.bank_name} className="inline-flex peer-checked:shadow-xl items-center justify-between w-full p-4 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100">
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-semibold'>{item.bank_name}</div>
                                                                <div className='w-full text-sm italic'>A/n {item.first_name} {item.last_name}</div>
                                                            </div>
                                                            <img className='w-32 h-full ml-3' src={item.picture} alt={item.bank_name} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                        {dataPaymentWallet.map((item) => (
                                            <>
                                                <div className='mt-3'>
                                                    <div key={item}>
                                                        <input type="radio" className='hidden peer' name='payment' id={item.wallet_name} value={item.number_account} required />
                                                        <label htmlFor={item.wallet_name} className="inline-flex peer-checked:shadow-xl items-center justify-between w-full p-4 text-gray-500 border peer-checked:ring-blue-500 peer-checked:ring-2 border-gray-200 rounded-lg cursor-pointer peer-checked:text-gray-900 peer-checked:bg-blue-100 hover:text-gray-900 hover:bg-gray-100">
                                                            <div className='block'>
                                                                <div className='w-full text-sm font-semibold'>{item.wallet_name}</div>
                                                                <div className='w-full text-sm italic'>A/n {item.first_name} {item.last_name}</div>
                                                            </div>
                                                            <img className='w-32 h-full ml-3' src={item.picture} alt={item.wallet_name} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                                    <div className='xl:px-5 xl:py-5 lg:px-5 lg:py-5 md:px-5 md:py-5 sm:px-5 sm:py-5 xs:px-2 xs:py-2 mb-3'>
                                        <div className='font-bold text-lg'>
                                            <span className='border border-blue-500 bg-blue-500 px-2 text-white rounded-full'>4</span>&nbsp;Beli
                                        </div>
                                        <div>
                                            <div className="relative mt-3">
                                                <input type="text" id="costumer" name='nama' className="block border hover:ring-blue-500 hover:border-blue-500 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label htmlFor="costumer" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Masukkan Nama Anda</label>
                                            </div>
                                            <div>
                                                {/* <Recaptcha
                                                sitekey={key}
                                                render="explicit"
                                                verifyCallback={verifyCallback}
                                                onloadCallback={callback}
                                            /> */}
                                            </div>
                                            <div>
                                                <input type="text" value={inputValue} name="kode_order" hidden />
                                                <button type="submit" className="flex gap-2 mt-3 text-white bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><ShoppingCartIcon className="w-5 h-5" /> Beli</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    {dataCategory.map((item) => (
                        <>
                            <div key={item}>
                                <img className='h-full w-full rounded-lg' src={item.petunjuk} alt={item.category} />
                            </div>
                        </>
                    ))}
                </Modal>
            </>
        )
    }
}