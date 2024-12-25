export const SectionHeader = ({
    title,
    eyebrow,
    deskription,
}: {
    title: string;
    eyebrow: string;
    deskription: string;
}) => {
    return (
        <>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-300 to-emerald-300 text-center text-transparent bg-clip-text">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          {deskription}
        </p>
        </>
    )
}