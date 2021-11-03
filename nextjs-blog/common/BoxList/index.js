import Link from 'next/link'

const BoxList = ({list}) =>{
    const {name,path} = list
    return(
        <div>
            <Link href={path}>{name}</Link>
        </div>
    )
}

export default BoxList