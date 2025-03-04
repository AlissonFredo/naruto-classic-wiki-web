import { Link } from "react-router";

const List = ({ items = [], baseUrl = "" }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-x-50 gap-y-20">
        {items.length == 0 &&
          Array.from({ length: 6 }).map((_, key) => (
            <div key={key} className="animate-pulse">
              <div className="size-50 rounded-full bg-gray-200"></div>
              <div className="mt-8 h-4 rounded bg-gray-200"></div>
            </div>
          ))}

        {items.length != 0 &&
          items.map((item, key) => (
            <div
              key={key}
              className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <Link to={`${baseUrl}/${item.id}`} className="grid justify-items-center">
                <div
                  className="size-50 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.url})` }}
                ></div>
                <h2 className="mt-8 rounded text-center text-white font-bold uppercase">
                  {item.name}
                </h2>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
