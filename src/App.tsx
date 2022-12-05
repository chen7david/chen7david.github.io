import { Avatar, Button, Card, Col, Layout, Menu, Row, Space } from 'antd'
import React, { useState } from 'react'
import Icon, {
  HomeOutlined,
  UserOutlined,
  ShopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'

const { Header, Footer, Sider, Content } = Layout

const menuItems = [
  {
    key: '1',
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    key: '2',
    label: 'Profile',
    icon: <UserOutlined />,
  },
  {
    key: '3',
    label: 'Store',
    icon: <ShopOutlined />,
  },
]

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu mode="inline" theme="dark" items={menuItems}></Menu>
      </Sider>

      <Layout>
        <Header>
          <Icon type="menu" style={{ fontSize: '16px', color: '#FFF' }} />
          <MenuUnfoldOutlined
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '16px', color: '#FFF' }}
          />
        </Header>
        <Content style={{ padding: 10 }}>
          main content
          <Row>
            <Col>
              <Space>
                <Card
                  title="Default size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Card
                  size="small"
                  title="Small size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
