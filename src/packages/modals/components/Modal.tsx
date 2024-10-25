import { Button } from "@/components/ui/button";
import { ModalProps } from "@/types/hooks/modals";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type Props = {
  modal: ModalProps;
  close: (id: string) => void;
};

const ButtonsContainer = ({
  modal: {
    primaryButtonProps,
    secondaryButtonProps,
    showPrimaryButton = true,
    showSecondaryButton,
    closeOnPrimaryButtonClick = true,
    closeOnSecondaryButtonClick = true,
    primaryButtonAction,
    secondaryButtonAction,
    buttonsOrientation = "horizontal",
    id,
    ...modal
  },
  close,
}: Props) => {
  if (!showPrimaryButton && !showSecondaryButton) return null;
  return (
    <div
      className={cn(
        `flex gap-2`,
        {
          "flex-row":
            !buttonsOrientation || buttonsOrientation === "horizontal",
          "flex-col": buttonsOrientation === "vertical",
        },
        modal.classNames?.buttonsContainer
      )}
    >
      {showPrimaryButton && (
        <Button
          variant="dark"
          {...primaryButtonProps}
          className={cn(
            "flex-1",
            modal.classNames?.primaryButton,
            primaryButtonProps?.className
          )}
          onClick={(ev) => {
            primaryButtonProps?.onClick?.(ev);
            primaryButtonAction?.()
            if (closeOnPrimaryButtonClick) close(id);
          }}
        >
          {primaryButtonProps?.children || "Confirm"}
        </Button>
      )}
      {showSecondaryButton && (
        <Button
          variant="outline"
          {...secondaryButtonProps}
          className={cn(
            "flex-1",
            modal.classNames?.secondaryButton,
            secondaryButtonProps?.className
          )}
          onClick={(ev) => {
            secondaryButtonProps?.onClick?.(ev);
            secondaryButtonAction?.()
            if (closeOnSecondaryButtonClick) close(id);
          }}
        >
          {secondaryButtonProps?.children || "Cancel"}
        </Button>
      )}
    </div>
  );
};

export default function Modal({ modal, close }: Props) {
  return (
    <div
      key={modal.id}
      className={cn(
        "fixed inset-0 flex items-center justify-center",
        modal.classNames?.root
      )}
    >
      <Button
        variant={"ghost"}
        className="bg-black bg-opacity-50 z-10 h-screen w-screen absolute top-0 bottom-0 right-0 left-0"
        onClick={() => {
          if (modal.closeOnClickOutside ?? true) {
            close(modal.id);
          }
        }}
      />
      <motion.div
        className={cn(
          `bg-white p-6 rounded-md z-50 flex flex-col gap-4`,
          modal.classNames?.modalRoot
        )}
        style={{ width: modal?.fullScreen ? "full" : modal.size || "auto" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {modal.icon && (
          <div className={cn(modal.classNames?.iconContainer)}>
            {modal.icon}
          </div>
        )}
        <div className={cn(modal.classNames?.contentContainer)}>
          {modal.title && (
            <h2 className={cn(`text-lg font-bold`, modal.classNames?.title)}>
              {modal.title}
            </h2>
          )}
          {modal.subTitle && (
            <h4 className={cn(`text-base font-medium`, modal.classNames?.subTitle)}>
              {modal.subTitle}
            </h4>
          )}
          {modal.content && <>{modal.content}</>}
        </div>
        {modal.children}
        <ButtonsContainer modal={modal} close={close} />
      </motion.div>
    </div>
  );
}
