import React, { Component } from 'react'
import StaysComponent from 'components/cards/stays'

class Homepage extends Component {
	render = () => {
		return (
			<div>
				<div className="stayology-stays">
					<StaysComponent
						place="Istanbul"
						loading={false}
						hoverable={true}
						imagesrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						imagealt="title iamge"
						title="dodo duck"
						description="dodo duck lives here"
					/>
				</div>
			</div>
		)
	}
}

export default Homepage
