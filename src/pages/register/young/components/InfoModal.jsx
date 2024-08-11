import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import AccountInfo from "./AccountInfo";
import CheckCardInfo from "./CheckCardInfo";
export default function InfoModal({
  isOpen,
  onClose,
  currentSlide,
  accountCheck,
  setAccountCheck,
  cardCheck,
  setCardCheck,
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent
          maxH="80vh"
          overflowY="auto"
          sx={{
            overflow: "auto",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {currentSlide === 5 ? (
            <AccountInfo
              accountCheck={accountCheck}
              setAccountCheck={setAccountCheck}
            />
          ) : (
            <CheckCardInfo cardCheck={cardCheck} setCardCheck={setCardCheck} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
