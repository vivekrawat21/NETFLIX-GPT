import Logo from "../assets/Netflix_Logo_CMYK.png"
const Header = () => {
  return (
      <div>
          <img src={Logo} alt="logo" className="absolute w-56  px-7 py-4 bg-gradient-to-b from-black z-10"  />
    </div>
  )
}

export default Header