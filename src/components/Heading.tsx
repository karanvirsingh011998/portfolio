const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      {title}
    </h2>
  );
};

export default Heading;
