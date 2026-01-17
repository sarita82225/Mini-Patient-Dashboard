import { useRouter } from 'next/router'
import { useGetTreatmentsQuery } from '@/store/api'
import Link from 'next/link'
import { useState } from 'react'


export default function TreatmentsPage() {
    const router = useRouter()
    const { id } = router.query

    const [typeFilter, setTypeFilter] = useState('')
    const [dateFilter, setDateFilter] = useState('')



    const { data, isLoading } = useGetTreatmentsQuery(id as string, {
        skip: !id,
    })

    const normalizeDate = (date: string) =>
    new Date(date).toISOString().split('T')[0]

    const filteredTreatments = (data || []).filter((t) => {
        if ((typeFilter && t.type !== typeFilter) || ((dateFilter && normalizeDate(t.date) !== dateFilter))) return false
        return true
    })

    if (isLoading) return <p className="p-4">Loading...</p>


    return (
        <div className="p-6 max-w-xl mx-auto">
            <Link href="/patients" className="text-blue-500">Back</Link>
            <h1 className="text-2xl font-bold my-4">Treatment History</h1>

            {/* Filter Section */}

            <div className="filters">
                <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="">All Types</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Filling">Filling</option>
                    <option value="Root Canal">Root Canal</option>
                </select>

                {/*  Date Filter Section */}

                <input
                type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                />

                {/*  Reset Filter */}

                <button onClick={() => {
                    setTypeFilter('')
                    setDateFilter('')
                }}
                >
                    Clear Filters
                </button>

            </div>
            {filteredTreatments?.length === 0 && <p>No treatments found..</p>}
            <div className="table-container">
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
                    <thead style={{ backgroundColor: "#f5f5f5",color:"blue",borderBottom: "1px solid #ccc"  }}>
                        <tr>
                            <th><strong>T_type</strong></th>
                            <th><strong>T_date</strong></th>
                            <th><strong>T_cost</strong></th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>

                        {filteredTreatments?.map((t) => (
                            <tr key={t.id} style={{ borderBottom: "1px solid #ccc" }}>
                                <td> {t.type}</td>
                                <td>{t.date}</td>
                                <td>{t.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
