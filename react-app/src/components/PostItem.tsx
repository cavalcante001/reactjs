import { Category } from "../types/Category";
type Props = {
  data: Category[];
};

export const PostItem = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-5">
      {data.map((item) => (
        <div>
          <p>{item.name}</p>
          <img src={item.img} className="w-10" />
        </div>
      ))}
    </div>
  );
};
