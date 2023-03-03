import Link from "next/link"
export function Footer({isMobile}) {

    return (
        <footer className="p-4">
            <p className="text-gray-300 text-sm text-center mobile:text-xs">Copyright © 2023 - Matheus Fernandes Nutri. Todos os direitos reservados.</p>
            {!isMobile && <span className="text-gray-300 text-center block text-xs mobile:mt-4">HAS Desenvolvimento de Software - <Link href='http://yalearaujo.com.br'>www.yalearaujo.com.br</Link></span>}
        </footer>
        )

}