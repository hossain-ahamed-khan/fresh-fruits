
export default function Modal({ isVisible, onClose, children }) {

    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    }

    return (
        <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
            <div className='w-[480px] flex flex-col'>
                <div className='bg-white py-3 px-8 rounded-xl'>
                    <div className='flex justify-end'>
                        <button onClick={() => onClose()}>X</button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
