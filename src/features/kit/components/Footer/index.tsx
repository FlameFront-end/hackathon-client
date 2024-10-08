import type { CSSProperties, FC } from 'react'
import { Layout, Row, Col, Typography } from 'antd'

const { Footer: FooterAnt } = Layout
const { Link } = Typography

const styles: CSSProperties | any = {
    footer: { backgroundColor: '#002140', color: '#fff' },
    link: { color: '#fff' },
    row: { marginTop: 20 },
    col: { color: '#fff' }
}

const Footer: FC = () => {
    return (
        <FooterAnt style={styles.footer}>
            <Row gutter={[16, 16]} justify='space-between' align='middle'>
                <Col>
                    <Link style={styles.link}>About Us</Link>
                </Col>
                <Col>
                    <Link style={styles.link}>Contact Us</Link>
                </Col>
                <Col>
                    <Link style={styles.link}>Terms of Service</Link>
                </Col>
                <Col>
                    <Link style={styles.link}>Privacy Policy</Link>
                </Col>
            </Row>
            <Row style={styles.row} justify='center'>
                <Col>
                    <span style={styles.col}>© 2023 BSO. All rights reserved.</span>
                </Col>
            </Row>
        </FooterAnt>
    )
}

export default Footer
