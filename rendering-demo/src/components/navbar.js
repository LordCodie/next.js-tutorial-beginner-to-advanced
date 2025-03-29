import { NavLinks } from "./nav-links"
import { NavSearch } from "./nav-search"

export const Navbar = () => {
    console.log("Navar rendered")
    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}