import React, { useState } from "react";
import { FaTrash, FaSpinner, FaCheck } from "react-icons/fa";

const DeleteButton = () => {
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);

    const handleDelete = async () => {
        setIsDeleteLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsDeleteSuccess(true);
            setTimeout(() => setIsDeleteSuccess(false), 2000);
        } catch (err) {
            console.log("Failed to delete item");
        } finally {
            setIsDeleteLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleDelete}
                disabled={isDeleteLoading}
                aria-label="Delete item"
                className={`
            relative flex items-center justify-center gap-2
            px-4 py-3 rounded-lg font-semibold text-white
            transform transition-all duration-200
            ${isDeleteSuccess ? "bg-green-500" : "bg-red-500"}
            hover:bg-red-600 active:scale-95
            disabled:opacity-70 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2
            shadow-lg hover:shadow-xl
          `}
            >
                {isDeleteLoading ? (
                    <FaSpinner className="animate-spin h-5 w-5" />
                ) : isDeleteSuccess ? (
                    <>
                        <FaCheck className="h-5 w-5" />
                        <span>Deleted</span>
                    </>
                ) : (
                    <>
                        <FaTrash className="h-5 w-5" />
                        <span>Delete</span>
                    </>
                )}
            </button>

        </div>
    )
}

export default DeleteButton;