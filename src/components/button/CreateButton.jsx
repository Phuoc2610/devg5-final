import { useState } from "react";
import { FaPlusCircle, FaCheck } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const CreateButton = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [createProgress, setCreateProgress] = useState(0);
    const [isCreated, setIsCreated] = useState(false);
    const handleCreateClick = () => {
        setIsCreating(true);
        setCreateProgress(0);
        setIsCreated(false);
        const interval = setInterval(() => {
          setCreateProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => {
                setIsCreating(false);
                setIsCreated(true);
              }, 500);
              return 100;
            }
            return prev + 5;
          });
        }, 50);
      };
    return (
        <div>
            <button
                onClick={handleCreateClick}
                disabled={isCreating}
                aria-label="Create Item"
                className="relative w-36 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg
          shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
            >
                {isCreating ? (
                    <>
                        <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                        {createProgress}%
                    </>
                ) : isCreated ? (
                    <>
                        <FaCheck className="mr-2 text-white" />
                        Successfully!
                    </>
                ) : (
                    <>
                        <FaPlusCircle className="mr-2" />
                        Create
                    </>
                )}
                {isCreating && (
                    <div
                        className="absolute bottom-0 left-0 h-1 bg-white rounded-b-lg transition-all duration-100"
                        style={{ width: `${createProgress}%` }}
                    />
                )}
            </button>
        </div>
    )
}

export default CreateButton