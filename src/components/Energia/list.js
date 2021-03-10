import Scroll from '../Shared/Scroll';

function Card({ img, description }) {
  return (
    <div style={{ height: '380px' }} className="w-80 bg-white text-blue-sky-night mr-5 rounded-3xl flex flex-col items-center">
      <div>
        <img src={img} alt="" width="150" />
      </div>
      <div className="px-8">
        <p className="font-serif font-bold text-2xl text-dark pt-2">{description}</p>
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
