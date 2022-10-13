import Cards from '../comp/Cards';
const Home = () => {

  return (
    <div className='container'>
    <div className='home'>
      <div className="filter-bar">
        <div className="left">
          <button>Relevant</button>
          <button>Latest</button>
          <button>Top</button>
        </div>
        <div className="right">
          <button>Week</button>
          <button>Month</button>
          <button>Year</button>
          <button>Infinity</button>
        </div>
      </div>
      <Cards />
    </div>
    </div>
  )
}

export default Home