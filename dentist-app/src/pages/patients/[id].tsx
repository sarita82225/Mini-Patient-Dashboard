import { useRouter } from 'next/router'
import { useGetTreatmentsQuery } from '@/store/api'
import Link from 'next/link'


export default function TreatmentsPage() {
const router = useRouter()
const { id } = router.query


const { data, isLoading } = useGetTreatmentsQuery(id as string, {
skip: !id,
})


if (isLoading) return <p className="p-4">Loading...</p>


return (
<div className="p-6 max-w-xl mx-auto">
<Link href="/patients" className="text-blue-500">← Back</Link>
<h1 className="text-2xl font-bold my-4">Treatment History</h1>
{data?.length === 0 && <p>No treatments found.</p>}
<ul className="space-y-3">
{data?.map((t) => (
<li key={t.id} className="border p-3 rounded">
<strong>{t.type}</strong>
<div className="text-sm text-gray-500">{t.date}</div>
</li>
))}
</ul>
</div>
)
}