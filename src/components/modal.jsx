/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose, width = 40, title }) {
    useEffect(() => {
        const handlePressEsc = e => {
            if (e.keyCode === 27) {
                onClose?.();
            }
        };
        document.addEventListener('keydown', handlePressEsc);
        return () => document.removeEventListener('keydown', handlePressEsc);
    }, [onClose]);

    return (
        <>
            {open ? createPortal(
                <>
                    <div className="fixed inset-0 bg-white opacity-70 z-30"></div>
                    <div className="fixed inset-0 z-40" onMouseDown={onClose}>
                        <div className="flex justify-center items-center min-h-screen">
                            <div
                                className="bg-[#464646] rounded-lg shadow-lg"
                                style={{ width: `${width}rem` }}
                                onMouseDown={e => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center p-4 border-b">
                                    <button className="invisible">&#10005;</button>
                                    <h5 className="text-2xl font-medium text-white">{title}</h5>
                                    <button onClick={onClose}>&#10005;</button>
                                </div>
                                <div className="p-4">{children}</div>
                            </div>
                        </div>
                    </div>
                </>,
                document.getElementById('modal')
            )
                : null}
        </>
    );
}