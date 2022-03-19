import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
  children: ReactElement;
  activeClassName: string;
  shouldMatchHref?: boolean;
}

export function ActiveLink({ children, activeClassName, shouldMatchHref = false, ...rest }: ActiveLinkProps) {
  
  const { asPath } = useRouter()

  const className = asPath === rest.href
  ? activeClassName
  : '';

  let isActive = false

  if ( shouldMatchHref && ( asPath === rest.href || asPath === rest.as ) ) {
    isActive = true;
  }

  if (!shouldMatchHref && ( asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)) )){
    isActive = true;
  }

  return(

    <Link {...rest}>
      {cloneElement(children, {
        className,
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>

  )

}