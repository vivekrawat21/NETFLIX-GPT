import Header from "../components/Header"
import Form from "../components/Form"
import { useRouteSafe } from "../utils/hooks/useRouteSafe"

const SignUp = () => {
  useRouteSafe("signup");
  return (
    <>
      <div className="relative h-screen w-full bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg')" }}>
        <Header />
        <div className="flex-grow flex justify-center items-center mt-8 ">
          <Form signup={true} />
        </div>
      </div>
    </>
  )
}

export default SignUp;