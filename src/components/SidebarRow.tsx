'use client'

import { DocumentData } from 'firebase/firestore'
import { usePathname, useRouter } from 'next/navigation'


type Props = {
    doc: DocumentData;
}

function SidebarRow({doc}: Props) {
    const router = useRouter();
    const pathname = usePathname();


  return (
    <li 
        onClick={() => router.push(`search/${doc.id}`)}
    >
      <div>
        <p>{doc.data().search}</p>
      </div>
    </li>
  )
}

export default SidebarRow
