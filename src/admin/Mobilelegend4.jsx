import React, { useState, useEffect } from 'react'
import { uid } from 'uid'
import { db } from '../database/firebase'
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import { FloatingLabel, Form, FormControl } from 'react-bootstrap';
import { set, ref, onValue, remove, update } from "firebase/database";


function Mobilelegend4() {
    const [dataTabel, setDataTabel] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const [product_name, setProduct_name] = useState([]);
    const [price, setPrice] = useState([]);
    const [picture, setPicture] = useState([]);
    const [code, setCode] = useState([]);
    const [tempUuid, setTempUuid] = useState([]);

    // ** Read 
    useEffect(() => {
        onValue(ref(db, `/product-ml-4`), (snapshot) => {
            let timerInterval
            Swal.fire({
                title: 'Memuat data !',
                html: 'I will close in <b></b> milliseconds.',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
            setisLoading(false);
            setDataTabel([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((item) => {
                    setDataTabel((oldArray) => [...oldArray, item].sort((a, b) => a.code.localeCompare(b.code)));
                });
            } else {
                setisError(true);
            }
        });
        console.log("Data has been Read to database");
    }, []);

    // ** Delete
    const handleDelete = (item) => {
        remove(ref(db, `/product-ml-4/${item.uuid}`));
    };

    //** Update
    const handleUpdate = (item) => {
        console.log(
            'Update Button',
            'uuid :', item.uuid,
            'product name :', item.product_name,
            'price :', item.price,
            'picture :', item.picture,
            'code :', item.code
        );
        setModalShow2(true, item.uuid);
        setProduct_name(item.product_name);
        setPrice(item.price);
        setPicture(item.picture);
        setCode(item.code);
        setTempUuid(item.uuid);
    };

    if (isLoading)
        return (
            <div className="text-center mt-5">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    else if (dataTabel && !isError)
        return (
            <>
                <div>
                    <div className="container xl:px-52 lg:px-32 md:px-5 xs:px-5 mt-5">
                        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 mt-3" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a href="/admin/dashboard-admin" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 ">
                                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        <a href="/admin/mobile-legend-4" className="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2 ">Product Games</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        <a href="/admin/mobile-legend-4" className="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2 ">Mobile Legends</a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <div className='text-3xl font-bold mb-4 mt-10'>
                            Produk Mobile Legends
                        </div>
                        <div>
                            <button className=" rounded-full"><PlusCircleIcon className="w-8 hover:text-indigo-500 " onClick={() => setModalShow(true)} /></button>
                            <TambahData
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                        <div>
                            <div className="overflow-x-auto rounded-lg">
                                <table className="table-auto border-collapse">
                                    <thead className="bg-gray-50">
                                        <tr className="bg-gray-200 text-gray-700">
                                            <th className="py-2 px-4 border">No</th>
                                            <th className="py-2 px-4 border">Nama Produk</th>
                                            <th className="py-2 px-4 border">Harga (Rp)</th>
                                            <th className="py-2 px-4 border">Gambar</th>
                                            <th className="py-2 px-4 border">Kode Produk</th>
                                            <th className="py-2 px-4 border">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {dataTabel.map((item, index) => {
                                            return (
                                                <>
                                                    <tr key={item.uuid}>
                                                        <td className="px-6 py-4 whitespace-nowrap border">
                                                            <div className="text-sm font-medium text-gray-900">{index + 1}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap border">
                                                            <div className="text-sm font-medium text-gray-900">{item.product_name}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap border">
                                                            <div className="text-sm text-gray-500">Rp {item.price}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap border">
                                                            <div className="text-sm px-3 text-gray-500"><img className="w-8" src={item.picture} alt={item.product_name} /></div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap border">
                                                            <div className="text-sm font-medium text-gray-900">{item.code}</div>
                                                        </td>
                                                        <td className="flex px-6 py-4 whitespace-nowrap border">
                                                            <div>
                                                                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleUpdate(item)} >
                                                                    Edit
                                                                </button>
                                                                <EditData
                                                                    show={modalShow2}
                                                                    onHide={() => setModalShow2(false)}
                                                                    product_name={product_name}
                                                                    price={price}
                                                                    picture={picture}
                                                                    code={code}
                                                                    uuid={tempUuid}
                                                                />
                                                            </div>
                                                            <div>
                                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleDelete(item)}>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    else {
        return (
            <>
                <div>
                    <div className="container xl:px-52 lg:px-32 md:px-5 xs:px-5 mt-5">
                        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 mt-3" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a href="/admin/Dashboard-Admin" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 ">
                                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        <a href="/admin/mobile-legend-4" className="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2 ">Product Games</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        <a href="/admin/mobile-legend-4s" className="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2 ">Mobile Legends</a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <div className='text-3xl font-bold mb-4 mt-10'>
                            Produk Mobile Legends
                        </div>
                        <div>
                            <button className=" rounded-full"><PlusCircleIcon className="w-8 hover:text-indigo-500 " onClick={() => setModalShow(true)} /></button>
                            <TambahData
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                        <div className="overflow-x-auto rounded-lg">
                            <table className="table-auto border-collapse">
                                <thead className="bg-gray-50">
                                    <tr className="bg-gray-200 text-gray-700">
                                        <th className="py-2 px-4 border">No</th>
                                        <th className="py-2 px-4 border">Nama Produk</th>
                                        <th className="py-2 px-4 border">Harga (Rp)</th>
                                        <th className="py-2 px-4 border">Gambar</th>
                                        <th className="py-2 px-4 border">Kode Produk</th>
                                        <th className="py-2 px-4 border">Actions</th>
                                    </tr>
                                </thead>
                            </table>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <div divclassName="px-6 py-4 text-center whitespace-nowrap border text-sm font-medium text-gray-900">Tidak Ada Data</div>
                            </tbody>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


function TambahData(props) {
    const [product_name, setProduct_name] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");
    const [code, setCode] = useState("");

    const handleDataChange1 = (e) => {
        setProduct_name(e.target.value)
    }
    const handleDataChange2 = (e) => {
        setPrice(e.target.value)
    }
    const handleDataChange3 = (e) => {
        setPicture(e.target.value)
    }
    const handleDataChange4 = (e) => {
        setCode(e.target.value)
    }
    // ** Write
    const handleOnSubmit = () => {
        const uuid = uid();
        set(ref(db, `/product-ml-4/${uuid}`), {
            product_name,
            price,
            picture,
            code,
            uuid,
        });
        setProduct_name("");
        setPrice("");
        setPicture("");
        setCode("");
        window.location.reload();
        props.onHide('');
    }
    return (
        <>
            <Form onSubmit={handleOnSubmit}>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Tambah Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel
                            controlId="floatingProduct_name"
                            label="Nama Produk"
                            className="mb-3"
                        >
                            <FormControl type="text" value={product_name} onChange={handleDataChange1} placeholder='Nama Produk' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Harga Produk"
                            className="mb-3"
                        >
                            <FormControl type="text" value={price} onChange={handleDataChange2} placeholder='Harga Produk' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPicture"
                            label="URL gambar (https://example.com/)"
                            className="mb-3"
                        >
                            <FormControl type="url" value={picture} onChange={handleDataChange3} placeholder='URL gambar (https://example.com/)' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingCode"
                            label="Kode Produk"
                            className="mb-3"
                        >
                            <FormControl type="text" value={code} onChange={handleDataChange4} placeholder='Kode Produk' />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='bg-red-500' onClick={props.onHide}>Close</Button>
                        <Button type='submit' onClick={handleOnSubmit} className='bg-indigo-500 '>Save</Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}

function EditData(props) {
    const [product_name, setProduct_name] = useState(props.product_name || "");
    const [price, setPrice] = useState(props.price || "");
    const [picture, setPicture] = useState(props.picture || "");
    const [code, setCode] = useState(props.code || "");
    const [tempUuid, setTempUuid] = useState(props.uuid || "");

    useEffect(() => {
        setProduct_name(props.product_name || "");
    }, [props.product_name]);

    useEffect(() => {
        setPrice(props.price || "");
    }, [props.price]);

    useEffect(() => {
        setPicture(props.picture || "");
    }, [props.picture]);

    useEffect(() => {
        setCode(props.code || "");
    }, [props.code]);

    useEffect(() => {
        // Update nilai tempUuid saat props.uuid berubah
        setTempUuid(props.uuid || "");
    }, [props.uuid]);

    const handleDataChange1 = (e) => {
        setProduct_name(e.target.value)
    }
    const handleDataChange2 = (e) => {
        setPrice(e.target.value)
    }
    const handleDataChange3 = (e) => {
        setPicture(e.target.value)
    }
    const handleDataChange4 = (e) => {
        setCode(e.target.value)
    }

    // ** Update
    const handleSubmitChange = (e) => {
        console.log("tempUuid :", product_name, price, picture, code, tempUuid);
        e.preventDefault();
        if (tempUuid) {
            update(ref(db, `/product-ml-4/${tempUuid}`), {
                product_name,
                price,
                picture,
                code,
                uuid: tempUuid,
            });
            setProduct_name('');
            setPrice('');
            setPicture('');
            setCode('');
            window.location.reload();
            props.onHide();
        }
    };
    return (
        <>
            <Form onSubmit={handleSubmitChange}>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    animation={false}
                    backdrop="static"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel
                            controlId="floatingProduct_name"
                            label="Nama Produk"
                            className="mb-3"
                        >
                            <FormControl type="text" value={product_name} onChange={handleDataChange1} placeholder='Nama Produk' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPrice"
                            label="Harga Produk"
                            className="mb-3"
                        >
                            <FormControl type="text" value={price} onChange={handleDataChange2} placeholder='Harga Produk' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPicture"
                            label="URL gambar (https://example.com/)"
                            className="mb-3"
                        >
                            <FormControl type="url" value={picture} onChange={handleDataChange3} placeholder='URL gambar (https://example.com/)' />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingCode"
                            label="Kode Produk"
                            className="mb-3"
                        >
                            <FormControl type="text" value={code} onChange={handleDataChange4} placeholder='Kode Produk' />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='bg-red-500' onClick={props.onHide}>Close</Button>
                        <Button type='submit' onClick={handleSubmitChange} className='bg-indigo-500 '>Save</Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}
export default Mobilelegend4



