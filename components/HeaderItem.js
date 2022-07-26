import Link from "next/link";

function HeaderItem({title, Icon, url}) {
  return (
    <Link href={url}>
      <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20">
          <Icon className="h-8 mb-1 mt-5 hover:text-white group-hover:animate-bounce" />
          <p 
              className="tracking-widest opacity-0 group-hover:opacity-100"
          >
              {title}
          </p>
      </div>
    </Link>
  )
}

export default HeaderItem