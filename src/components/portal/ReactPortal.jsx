import { createPortal } from 'react-dom';


function ReactPortal({ ModalBack }) {
    return createPortal(ModalBack, document.getElementById("root-modal"))
}

export default ReactPortal