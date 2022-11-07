import Link from 'next/link'

export default function NavBar(){
    return (
        <nav>
            <Link href='/'>Home</Link>{" | "}
            <Link passHref href='/resume.pdf'><a target='_blank' rel="noopener noreferrer">Resume</a></Link>
        </nav>
    )
}