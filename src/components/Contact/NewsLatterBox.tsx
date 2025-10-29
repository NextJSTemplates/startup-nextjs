const NewsLatterBox = () => {
  return (
    <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        Informations de Contact
      </h2>
      <ul className="space-y-6 text-base font-medium text-body-color dark:text-body-color-dark">
        <li>
          <strong className="block text-dark dark:text-white">Adresse</strong>
          Unleash Lab Sàrl <br />
          1 Rue Gustave-Moynier <br />
          1202 Genève, Suisse
        </li>
        <li>
          <strong className="block text-dark dark:text-white">Email</strong>
          <a href="mailto:contact@unleash-lab.tech" className="hover:underline">
            contact@unleash-lab.tech
          </a>
        </li>
        <li>
          <strong className="block text-dark dark:text-white">Téléphone</strong>
          <a href="tel:+41784744219" className="hover:underline">
            +41 78 474 42 19
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NewsLatterBox;