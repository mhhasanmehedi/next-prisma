const Loading = () => {
  return (
    <div className="flex flex-col gap-5">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div key={item} className="h-24 animate-pulse bg-gray-200"></div>
      ))}
    </div>
  );
};

export default Loading;
