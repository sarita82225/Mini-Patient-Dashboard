import Link from 'next/link'
import { useGetPatientsQuery } from '@/store/api'



export default function PatientsPage() {
const { data, isLoading } = useGetPatientsQuery()


if (isLoading) return <p className="p-4">Loading...</p>


return (
<div className="">
<h1 className="">Patients</h1>
<ul className="space-y-3">
{data?.map((p) => (
<li key={p.id} className="">
<Link href={`/patients/${p.id}`}>
<div className="list-item ">
<strong>{p.name}</strong> 
</div>
</Link>
</li>
))}
</ul>
</div>
)
}