import { Nav, Header, Features, Footer } from './components';

function App() {

  return (
    <>
      <div className="2xl:mx-auto">
        <div>
          <Nav />
          <Header />
          <Features />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
