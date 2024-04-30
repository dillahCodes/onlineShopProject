import { Skeleton } from "antd";

const CardProductDisplaySkeleton = () => {
  return (
    <div className="w-full">
      {/* image card */}
      <div className="w-full rounded-[inherit]">
        <Skeleton.Image
          active
          className="object-cover w-full rounded-[inherit] rounded-b-none"
        />
      </div>
      <div className="w-full p-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton.Input active className="h-3 font-medium font-space-grotesk" key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardProductDisplaySkeleton;
