import { Suspense } from 'react';
import SearchClient from './SearchClient'; // ✅ gunakan ./ untuk relative path


export default function Page() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
