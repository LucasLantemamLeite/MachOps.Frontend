import { Image } from "../../Shared/Components/Image";
import { Input } from "../../Shared/Components/Input";
import "./NavBarStyle.scss";

export function NavBar() {
  return (
    <>
      <nav>
        <div>
          <Image staticImage={"AppLogoIcon"} width="170px" />
        </div>
        <div className="navbar__div-filter">
          <div>
            <Image staticImage={"SearchIcon"} width="30px" />
          </div>
          <Input placeholder={"Busque uma máquina aqui..."} />
        </div>
      </nav>
    </>
  );
}
