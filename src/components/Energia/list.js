import Scroll from '../Shared/Scroll';

function Card({ img, description }) {
  return (
    <div style={{ height: '300px' }} className="w-52 bg-white text-blue-sky-night mr-5 rounded-3xl flex flex-col items-center">
      <div>
        <img src={img} alt="" width="150" />
      </div>
      <div className="px-8">
        <p className="font-sans font-normal text-dark text-base pt-2">{description}</p>
      </div>
    </div>
  )
}

export default function CardList({ data }) {
  return (
    <Scroll>
      <div className="flex flex-row">
        {data.map((value, key) => (
          <Card {...value} key={key} />
        ))}
      </div>
    </Scroll>
  )
}
