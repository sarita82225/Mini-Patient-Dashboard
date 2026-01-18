'use client';
import Link from 'next/link'
import { useGetPatientsQuery } from '@/store/api'
import { List, Card, Typography, Spin, Empty } from 'antd'

const { Title, Text } = Typography



export default function PatientsPage() {
const { data, isLoading } = useGetPatientsQuery()


if (isLoading) {
  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <Spin size="large" />
    </div>
  )
}

return (
<div style={{ maxWidth: 500, margin: 'auto', padding: 16 }}>
      <Title level={3}>Patients Dashboard</Title>
        <Card>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(patient) => (
              <Link href={`/patients/${patient.id}`} key={patient.id}>
                <List.Item
                  style={{
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                      '#f5f5f5')
                  }
                   onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                      'transparent')
                  }
                >
                     <List.Item.Meta
                    title={<Text strong>{patient.name}</Text>}
                    description={
                      <Text type="secondary">Age:{patient.age}</Text>
                    }
                  />
                </List.Item>
              </Link>
            )}
          />
          </Card>
      
    </div>
  )
}

