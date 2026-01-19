 'use client'
import { useRouter } from 'next/router'
import { useGetTreatmentsQuery } from '@/store/api'
import Link from 'next/link'
import { useState } from 'react'
import { Table, Select, DatePicker, Button, Card, Typography, Spin, Empty, Space } from 'antd'
import dayjs from 'dayjs'

const { Title } = Typography

export default function TreatmentsPage() {
  const router = useRouter()
  const { id } = router.query

  const [typeFilter, setTypeFilter] = useState<string>()
  const [dateFilter, setDateFilter] = useState<string>()

  const { data = [], isLoading } = useGetTreatmentsQuery(id as string, {
    skip: !id,
  })

  const normalizeDate = (date: string) => dayjs(date).format('YYYY-MM-DD')

  const filteredTreatments = data.filter((t) => {
    if (typeFilter && t.type !== typeFilter) return false
    if (dateFilter && normalizeDate(t.date) !== dateFilter) return false
    return true
  })

  const columns = [
    {
      title: 'Treatment Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => dayjs(date).format('DD MMM YYYY'),
    },
    {
      title: 'Cost (€)',
      dataIndex: 'cost',
      key: 'cost',
      render: (cost: number) => `€ ${cost}`,
    },
  ]

  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 24 }}>
      <Link href="/ ">← Back to Patients</Link>
      <Title level={3} style={{ marginTop: 16 }}>
        Treatment History
      </Title>

      {/* Filters Section */}
      <Card style={{ marginBottom: 24 }}>
        <Space wrap>
          <Select
            allowClear
            placeholder="Filter by type"
            style={{ width: 180 }}
            value={typeFilter}
            onChange={(value) => setTypeFilter(value)}
            options={[
              { label: 'Cleaning', value: 'Cleaning' },
              { label: 'Filling', value: 'Filling' },
              { label: 'Root Canal', value: 'Root Canal' },
            ]}
          />

          <DatePicker
            placeholder="Filter by date"
            onChange={(date) =>
              setDateFilter(date ? date.format('YYYY-MM-DD') : "")
            }
          />

          <Button
            onClick={() => {
              setTypeFilter("")
              setDateFilter("")
            }}
          >
            Clear Filters
          </Button>
        </Space>
      </Card>

      {/* Treatments Table */}
      <Card>
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <Spin size="large" />
          </div>
        ) : filteredTreatments.length === 0 ? (
          <Empty description="No treatments found" />
        ) : (
          <Table
            columns={columns}
            dataSource={filteredTreatments}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        )}
      </Card>
    </div>
  )
}


 
     
