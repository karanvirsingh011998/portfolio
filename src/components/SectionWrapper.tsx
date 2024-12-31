import { ReactNode } from "react";

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default SectionWrapper;
