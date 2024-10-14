import { toast as nativeToast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toast = ({ title, description }: { title: string, description: string }) => {
  nativeToast.info(`${title}: ${description}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
