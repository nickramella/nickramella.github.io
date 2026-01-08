"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectIsSmallScreen } from '@/lib/rootSlice';

interface ModalProps {
    title: string;
    children?: React.ReactNode;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  height: "80%",
  overflow: "scroll",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: "15px",
  boxShadow: 24,
  color: "black"
};

const DemoModal: React.FC<React.PropsWithChildren<ModalProps>> = ({title, children}: ModalProps) => {
  const isSmallScreen = useSelector(selectIsSmallScreen);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        aria-label="Open Pay Demo"
        className="bg-[#353738] px-3 rounded-2xl border border-white font-bold text-left h-40 w-40 hover:cursor-pointer">
        {title}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isSmallScreen ? {...style, width: "100vw"} : style}>
          <div className="px-6 py-3 flex justify-between items-center bg-blue-400">
            <h1 className="font-bold text-xl">{title}</h1>
            <button aria-label="Close Modal" onClick={handleClose} className="hover:cursor-pointer"><CloseIcon /></button>
          </div>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export default DemoModal;