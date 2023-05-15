import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <div className="container flex flex-wrap justify-between items-center mx-auto py-10">
      <img src={logo} alt="logo" className="w-[280px]"/>

      <div className="hidden font-body md:block">
        <button className="mr-1 border-2 border-darkenGreen text-darkenGreen"><a href="#features">Why ProdGrav?</a></button>
        <button className="bg-darkenGreen text-white">Request Invite</button>
      </div>
    </div>
  )
}

export default Nav