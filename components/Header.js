import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { 
    HomeIcon,
    InformationCircleIcon
 } from '@heroicons/react/outline'

function Header() {

    const headerItems = [
        {
            title: "HOME",
            icon: HomeIcon,
            url: "/"
        },
        {
            title: "ABOUT",
            icon: InformationCircleIcon,
            url: "/about"
        }
      ];

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow flex-start max-w-2xl ">
            {headerItems.map((item, index) =>  (
                <HeaderItem 
                    key={index} 
                    title={item.title} 
                    Icon={item.icon} 
                    url={ item.url}
                />
            ))}
        </div>
        <Image
            alt="Genericflix logo"
            src="/logo.png"
            className="object-contain"
            width={174}
            height={43}
        />
    </header>
  )
}

export default Header