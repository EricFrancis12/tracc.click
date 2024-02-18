import { Button, ButtonProps } from "@chakra-ui/react";
import { CSSProperties } from "react";
import NextLink, { LinkProps } from "next/link";

export type ButtonLinkProps = LinkProps & ButtonProps & {
  style?: CSSProperties
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  style,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref style={style}>
      <Button {...props}>{children}</Button>
    </NextLink>
  )
}
