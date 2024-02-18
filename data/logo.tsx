import Image from "next/image";
import LogoNoBg from '../public/static/images/logo-no-bg.png';

export const Logo: React.FC = (props) => {
  return (
    <Image
      alt='Logo'
      src={LogoNoBg}
      height={50}
      width={50}
    />
  )
}
