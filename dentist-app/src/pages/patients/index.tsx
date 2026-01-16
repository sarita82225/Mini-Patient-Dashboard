import Link from 'next/link'
import { useGetPatientsQuery } from '@/store/api'


export default function PatientsPage() {
const { data, isLoading } = useGetPatientsQuery()


if (isLoading) return <p className="p-4">Loading...</p>


return (
<div className="p-6 max-w-xl mx-auto">
<h1 className="text-2xl font-bold mb-4">Patients</h1>
<ul className="space-y-3">
{data?.map((p) => (
<li key={p.id} className="border p-3 rounded hover:bg-gray-100">
<Link href={`/patients/${p.id}`}>
<div className="cursor-pointer">
<strong>{p.name}</strong> (Age: {p.age})
</div>
</Link>
</li>
))}
</ul>
</div>
)
}