import React, { Fragment } from 'react'

import Icon from 'antd/lib/icon'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Divider from 'antd/lib/divider'
import Typography from 'antd/lib/typography'
import Card, { CardProps } from 'antd/lib/card'
import Meta, { CardMetaProps } from 'antd/lib/card/Meta'

import styles from 'components/cards/stays/style.module.less'
import 'components/cards/stays/style.less'

interface IStaysComponentProps extends CardProps, CardMetaProps {
	imagesrc: string
	imagealt: string
	place: string
}

const StaysComponent: React.FC<IStaysComponentProps> = ({
	imagealt,
	title,
	description,
	hoverable,
	loading,
	place,
	imagesrc
}) => {
	return (
		<Card
			className={`stays_card ${styles.stays_card}`}
			data-testid="stayology_stays_card"
			bordered={false}
			hoverable={hoverable}
			loading={loading}
			cover={
				<React.Fragment>
					<img alt={imagealt} src={imagesrc} />
					<Icon className={styles.stays_like} type="heart" theme="twoTone" twoToneColor="#eb2f96" />
				</React.Fragment>
			}>
			<Row gutter={4}>
				<Col span={24}>
					<small>Stay in {place}</small>
				</Col>
			</Row>
			<Row gutter={4}>
				<Col span={16}>
					<Meta className={styles.stays_description} title={title} description={description} />
				</Col>
				<Col span={8}>
					<Meta
						className={styles.stays_priceinfo}
						title={
							<Fragment>
								<sup>
									<small>$</small>
								</sup>{' '}
								79
							</Fragment>
						}
						description={<small>per night</small>}
					/>
				</Col>
			</Row>
			<Row gutter={4}>
				<Col span={24}>
					<Icon type="star" theme="twoTone" twoToneColor="#000" />
					<Icon type="star" theme="twoTone" twoToneColor="#000" />
					<Icon type="star" theme="twoTone" twoToneColor="#000" />
					<Icon type="star" />
					<Icon type="star" />
					<Divider type="vertical" />
					<Typography.Text>213 reviews</Typography.Text>
				</Col>
			</Row>
		</Card>
	)
}

export default StaysComponent
