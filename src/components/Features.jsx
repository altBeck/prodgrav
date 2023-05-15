
const Features = () => {
  return (
    <div id="features" className="">
      <p className="max-w-7xl mx-auto font-heading md:text-6xl text-4xl font-medium text-fontGreen md:py-20 py-16">ProdGrav is for...</p>

      <div className="md:w-screen mx-auto bg-blackGreen md:py-20 py-12"
      >
        <div className="md:max-w-7xl mx-auto md:flex">
          <div className="hover:text-blackGreen text-white border-slaten border hover:bg-slaten md:w-[400px] rounded-xl px-10 py-8 md:mr-5 m-3"> 
            <p className="text-3xl font-heading pb-2">Investors</p>
            <ul className="md:p-4 list-disc">
              <li className="md:p-2">Unique investment opportunities in unreleased tech products.</li>
              <li className="md:p-2">High potential returns in innovative products.</li>
              <li className="md:p-2">Diversify portfolio with various industries.</li>
              <li className="md:p-2">Support entrepreneurship and tech development.</li>
            </ul>
          </div>

          <div className="hover:text-blackGreen text-white border-slaten border hover:bg-slaten md:w-[400px] rounded-xl px-10 py-8 md:mr-5 m-3"> 
            <p className="text-3xl font-heading pb-2">Entrepreneurs</p>
            <ul className="md:p-4 list-disc">
              <li className="md:p-2">Funding opportunity for unreleased tech products.</li>
              <li className="md:p-2">Partnership and support from experienced team for guidance.</li>
              <li className="md:p-2">Increased exposure to potential customers and investors.</li>
              <li className="md:p-2">Collaboration with other entrepreneurs for potential growth and partnerships.</li>
            </ul>
          </div>

          <div className="hover:text-blackGreen text-white border-slaten border hover:bg-slaten md:w-[400px] rounded-xl px-10 py-8 md:mr-5 m-3"> 
            <p className="text-3xl font-heading pb-2">Product Managers</p>
            <ul className="md:p-4 list-disc">
              <li className="md:p-2">Diverse range of products to choose from to meet specific needs and goals for company growth.</li>
              <li className="md:p-2">Opportunity for early feedback to shape product direction.</li>
              <li className="md:p-2">Reduced time to market with pre-developed products.</li>
              <li className="md:p-2">Potential for strategic partnerships with entrepreneurs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features