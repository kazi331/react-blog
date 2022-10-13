import { Link } from "react-router-dom"

const MenuItem = ({to, icon, title }) => {
    return (
        <Link to={to} className="category">
            <span> {icon} </span>
            <span> {title} </span>
        </Link>
    )
}

export default MenuItem