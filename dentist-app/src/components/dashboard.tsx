"use client";

import { Layout, Typography } from "antd";
import { useState } from "react";
import PatientsPage from "../pages/patients/index";
import TreatmentsPage from "../pages/patients/[id]";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function DashboardLayout() {
 // const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Title style={{ color: "#fff", margin: 0 }} level={3}>
          Dentist Dashboard
        </Title>
      </Header>

      <Layout>
        <Sider width={320}>
          <PatientsPage />
        </Sider>

        <Content style={{ padding: 24 }}>
          <TreatmentsPage/>
        </Content>
      </Layout>
    </Layout>
  );
}