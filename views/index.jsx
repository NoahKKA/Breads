const React = require('react')
const Default = require('./layouts/deafult')

function Index ({breads}) {
    return (
      <Default>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        <ul>
            {
                breads.map((bread, index) => {
                    return (<li></li>)
                })
            }
        </ul>
      </Default>
    )
}

module.exports = Index
