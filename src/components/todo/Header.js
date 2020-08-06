import React from "react"
class Header extends React.Component {
    render() {
        const headerStyle = {
            padding: '20px 0',
            lineHeight: '2em'

        }
        return (
            <header style={headerStyle}>
                <h1 style={{ fontSize: '25px', marginBottom: '15px' }}>This is header</h1>
                <p style={{ fontSize: '20px' }}>Some description here.</p>
            </header>
        )
    }
}
export default Header