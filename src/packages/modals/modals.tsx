import { ModalProps } from "@/types/hooks/modals";
import { ModalContextType } from "./ModalContext";

class ModalsService {
  private modalContext: ModalContextType | null = null;

  setModalContext(context: any) {
    this.modalContext = context;
  }

  open(config: ModalProps) {
    if (this.modalContext) {
      this.modalContext.open(config);
    }
  }

  openErrorModal(config: ModalProps) {
    if (this.modalContext) {
      this.modalContext.open(config);
    }
  }

  openSuccessModal(config: ModalProps) {
    if (this.modalContext) {
      this.modalContext.open(config);
    }
  }

  openConfirmModal(config: ModalProps) {
    if (this.modalContext) {
      this.modalContext.open(config);
    }
  }

  close(id: string) {
    if (this.modalContext) {
      this.modalContext.close(id);
    }
  }

  closeAll() {
    if (this.modalContext) {
      this.modalContext.closeAll();
    }
  }
}

export const modals = new ModalsService();
