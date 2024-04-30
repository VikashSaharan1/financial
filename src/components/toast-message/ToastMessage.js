import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = (message, messageType) => {
    if(messageType === "success") {
        toast.success(message, {
        });
    } else if(messageType === "error") {
        toast.error(message, {
        });
    } else if(messageType === "warning") {
        toast.warning(message, {
        });
    } else if(messageType === "info") {
        toast.info(message, {
        });
    }

};

export default showToastMessage