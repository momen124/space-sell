import { ButtonProps } from "@/components/ui/button";
import type React from "react";
import { ComponentPropsWithoutRef } from "react";

type BaseModalProps = {
  id: string;

  title?: string;
  subTitle?: string;
  content?: string;
  icon?: React.ReactNode;

  children?: React.ReactNode | undefined;

  classNames?: {
    root?: string;
    modalRoot?: string;

    contentContainer?: string;
    title?: string;
    subTitle?: string;
    content?: string;
    iconContainer?: string;

    buttonsContainer?: string;
    primaryButton?: string;
    secondaryButton?: string;
  };

  fullScreen?: boolean;
  size?: ComponentPropsWithoutRef<"div">["style"] extends React.CSSProperties
    ? React.CSSProperties["width"]
    : never;

  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;

  buttonsOrientation?: "vertical" | "horizontal";

  showPrimaryButton?: boolean;
  primaryButtonProps?: ButtonProps;
  primaryButtonAction?: () => void;
  closeOnPrimaryButtonClick?: boolean;

  showSecondaryButton?: boolean;
  secondaryButtonProps?: ButtonProps;
  secondaryButtonAction?: () => void;
  closeOnSecondaryButtonClick?: boolean;
};

type ModalProps = BaseModalProps;

export type { BaseModalProps, ModalProps };
