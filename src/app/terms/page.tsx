"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const TermsPage = () => {
  const { messages } = useLanguage();

  return (
    <>
      <Breadcrumb
        pageName={messages.footer.legal.terms || "Conditions d'utilisation"}
        description={`Dernière mise à jour : 13/03/2025`}
      />

      <section className="bg-slate-50 dark:bg-slate-900 py-12">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4">
              <div className="mx-auto max-w-4xl">
                <div className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-8 md:p-12">
                  <header className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">Conditions d'utilisation</h1>
                    <p className="text-sm text-body-color">Dernière mise à jour : 13/03/2025</p>
                  </header>

                  <article className="max-w-none">
                    <div className="grid gap-4">
                      <section id="acceptation" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">1</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Acceptation des conditions</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">En accédant et en utilisant le site web d'Unleash Lab, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable du respect des lois locales applicables.</p>
                            <p className="mt-2 text-sm text-body-color text-justify">Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser ou accéder à ce site. Les matériaux contenus dans ce site web sont protégés par le droit d'auteur et les marques applicables.</p>
                          </div>
                        </div>
                      </section>

                      <section id="licence" className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">2</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Licence d'utilisation</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Unleash Lab vous accorde une licence limitée, non exclusive et non transférable pour télécharger temporairement une copie des matériaux sur le site web d'Unleash Lab pour un usage personnel, non commercial et transitoire uniquement.</p>
                            <p className="mt-2 text-sm text-body-color text-justify">Cette licence ne comprend pas :</p>
                            <ul className="mt-2 text-sm text-body-color ml-4 list-disc">
                              <li>La modification ou la copie des matériaux</li>
                              <li>L'utilisation des matériaux à des fins commerciales</li>
                              <li>Toute tentative de décompiler ou de désosser tout logiciel contenu sur le site web d'Unleash Lab</li>
                              <li>La suppression de tout droit d'auteur ou autres notations de propriété des matériaux</li>
                              <li>Le transfert des matériaux à une autre personne ou la mise en miroir des matériaux sur un autre serveur</li>
                            </ul>
                            <p className="mt-2 text-sm text-body-color text-justify">Cette licence sera automatiquement résiliée si vous violez l'une de ces restrictions et peut être résiliée par Unleash Lab à tout moment.</p>
                          </div>
                        </div>
                      </section>

                      <section id="clause" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">3</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Clause de non-responsabilité</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Les matériaux sur le site web d'Unleash Lab sont fournis "tels quels". Unleash Lab ne donne aucune garantie, expresse ou implicite, et décline et annule par la présente toutes les autres garanties, y compris, sans limitation, les garanties implicites ou les conditions de qualité marchande, d'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.</p>
                            <p className="mt-2 text-sm text-body-color text-justify">En outre, Unleash Lab ne garantit ni ne fait aucune représentation concernant l'exactitude, les résultats probables, ou la fiabilité de l'utilisation des matériaux sur son site web ou autrement liés à ces matériaux ou sur tout site lié à ce site.</p>
                          </div>
                        </div>
                      </section>

                      <section id="limitations" className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">4</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Limitations</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">En aucun cas, Unleash Lab ou ses fournisseurs ne seront responsables des dommages (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'incapacité d'utiliser les matériaux sur le site web d'Unleash Lab, même si Unleash Lab ou un représentant autorisé d'Unleash Lab a été informé oralement ou par écrit de la possibilité de tels dommages.</p>
                          </div>
                        </div>
                      </section>

                      <section id="revisions" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">5</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Révisions et errata</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Les matériaux apparaissant sur le site web d'Unleash Lab peuvent inclure des erreurs techniques, typographiques ou photographiques. Unleash Lab ne garantit pas que les matériaux de son site web sont exacts, complets ou à jour. Unleash Lab peut modifier les matériaux contenus sur son site web à tout moment sans préavis. Unleash Lab ne s'engage pas à mettre à jour les matériaux.</p>
                          </div>
                        </div>
                      </section>

                      <section id="liens" className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">6</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Liens</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Unleash Lab n'a pas examiné tous les sites liés à son site web et n'est pas responsable du contenu de ces sites liés. L'inclusion de tout lien n'implique pas l'approbation par Unleash Lab du site. L'utilisation de tout site web lié est aux risques et périls de l'utilisateur.</p>
                          </div>
                        </div>
                      </section>

                      <section id="modifications" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">7</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Modifications des conditions d'utilisation</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Unleash Lab peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version actuelle de ces conditions d'utilisation.</p>
                          </div>
                        </div>
                      </section>

                      <section id="loi" className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">8</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Loi applicable</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Toute réclamation relative au site web d'Unleash Lab sera régie par les lois de la Suisse, sans égard à ses dispositions en matière de conflit de lois.</p>
                          </div>
                        </div>
                      </section>

                      <section id="contact" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">9</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Contact</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter :</p>
                            <address className="not-italic mt-2 text-sm text-body-color">
                              <strong>Unleash Lab</strong>
                              <br />1 Rue Gustave-Moynier
                              <br />1202 Genève, Suisse
                              <br />Email: <a className="text-primary" href="mailto:contact@unleash-lab.tech">contact@unleash-lab.tech</a>
                            </address>
                            <div className="mt-4">
                              <a href="mailto:contact@unleash-lab.tech" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95">Contactez-nous</a>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
