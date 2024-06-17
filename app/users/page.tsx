import React from 'react';
import TableData from './TableData';
import Link from 'next/link';
// import { useRouter } from 'next/router';

interface Props{
    searchParams: {sortOrder: string};
}

const UserPage = async ({searchParams: {sortOrder}}: Props) => {
    
    // const router = useRouter();
    // const { sortOrder } = router.query;
    // console.log(sortOrder);
    

  return (
    <div>
        <Link href={'/users/new'} className='btn'>Create User</Link>
        <TableData sortOrder={sortOrder} />
    </div>
  )
}

export default UserPage;