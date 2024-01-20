import PropTypes from 'prop-types'

function Item({marca, ano}){
    return (
        <>
            <li>{marca} - {ano}</li>
        </>
    )
}

Item.propTypes ={
    marca: PropTypes.string.isRequired,
    ano: PropTypes.number,

}

Item.defaultProps = {
    ano: "Cadê o ano?"
}

export default Item;