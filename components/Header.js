import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { 
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
 } from '@heroicons/react/outline'

function Header() {

    const headerItems = [
        {
            title: "HOME",
            icon: HomeIcon
        },
        {
            title: "TRENDING",
            icon: LightningBoltIcon
        },
        {
            title: "VERIFIED",
            icon: BadgeCheckIcon
        },
        {
            title: "COLLECTIONS",
            icon: CollectionIcon
        },
        {
            title: "SEARCH",
            icon: SearchIcon
        },
        {
            title: "ACCOUNT",
            icon: UserIcon
        }
      ]

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl ">
            {headerItems.map(item =>  <HeaderItem title={item.title} Icon={item.icon} /> )}
        </div>
        <Image
            src="/logo.png"
            className="object-contain"
            width={174}
            height={43}
        />
    </header>
  )
}

export default Header