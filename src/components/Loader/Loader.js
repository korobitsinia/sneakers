import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
	<ContentLoader
		speed={2}
		width={150}
		height={230}
		viewBox="0 0 150 210"
		backgroundColor="#c2c2c2"
		foregroundColor="#fff"
	>
		<rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
		<rect x="0" y="103" rx="10" ry="10" width="150" height="20" />
		<rect x="0" y="140" rx="10" ry="10" width="100" height="20" />
		<rect x="0" y="180" rx="10" ry="10" width="70" height="30" />
		<rect x="100" y="180" rx="10" ry="10" width="50" height="30" />
	</ContentLoader>
)

export default Loader