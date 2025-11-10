"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const PrivacyPage = () => {
  const { messages } = useLanguage();

  return (
    <>
      <Breadcrumb
        pageName={messages.footer.legal.privacy || "Politique de confidentialité"}
        description={`Dernière mise à jour : 13/03/2025`}
      />

      <section className="bg-slate-50 dark:bg-slate-900 py-12">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4">
              <div className="mx-auto max-w-4xl">
                <div className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-8 md:p-12">
                  <header className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                      Politique de confidentialité
                    </h1>
                    <p className="text-sm text-body-color">Dernière mise à jour : 13/03/2025</p>
                  </header>

                  <div className="mb-6">
                    <p className="prose prose-sm prose-neutral dark:prose-invert max-w-none text-justify">
                      Chez Unleash Lab, nous accordons une grande importance à la protection de vos données personnelles. Cette politique explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous visitez notre site ou utilisez nos services.
                    </p>
                  </div>

                  <article className="max-w-none">
                    <div className="grid gap-4">
                      {/* Section card helper */}

                      <section id="introduction" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">1</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Introduction</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Chez Unleash Lab, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services.</p>
                            <p className="mt-2 text-sm text-body-color text-justify">En utilisant notre site web et nos services, vous consentez aux pratiques décrites dans cette politique de confidentialité. Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications prendront effet dès leur publication sur notre site web.</p>
                          </div>
                        </div>
                      </section>

                      <section id="collecte" className="p-4 rounded-lg bg-white dark:bg-zinc-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">2</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Collecte des données</h3>
                            <p className="mt-2 text-sm text-body-color">Nous collectons les informations que vous nous fournissez directement lorsque vous :</p>
                            <ol className="list-decimal ml-6 mt-2 text-sm text-body-color">
                              <li>Remplissez un formulaire de contact</li>
                              <li>Vous inscrivez à notre newsletter</li>
                              <li>Participez à nos enquêtes ou sondages</li>
                              <li>Interagissez avec nous via les réseaux sociaux</li>
                            </ol>
                            <p className="mt-2 text-sm text-body-color text-justify">Ces informations peuvent inclure votre nom, adresse e-mail, numéro de téléphone, nom de l'entreprise et toute autre information que vous choisissez de nous fournir.</p>
                            <p className="mt-2 text-sm text-body-color text-justify">Nous collectons également automatiquement certaines informations lorsque vous visitez notre site web, notamment votre adresse IP, type de navigateur, pages visitées, temps passé sur le site, et autres données de navigation.</p>
                          </div>
                        </div>
                      </section>

                      <section id="utilisation" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">3</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Utilisation des données</h3>
                            <p className="mt-2 text-sm text-body-color">Nous utilisons les informations collectées pour :</p>
                            <ul className="mt-2 text-sm text-body-color ml-4 list-disc">
                              <li>Répondre à vos demandes et vous fournir les services demandés</li>
                              <li>Personnaliser et améliorer votre expérience sur notre site</li>
                              <li>Vous envoyer des communications marketing si vous y avez consenti</li>
                              <li>Analyser l'utilisation de notre site et améliorer nos services</li>
                              <li>Détecter et prévenir les activités frauduleuses</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="partage" className="p-4 rounded-lg bg-white dark:bg-zinc-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">4</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Partage des données</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec :</p>
                            <ul className="mt-2 text-sm text-body-color ml-4 list-disc">
                              <li>Nos prestataires de services qui nous aident à exploiter notre site et à fournir nos services</li>
                              <li>Les autorités légales lorsque la loi l'exige</li>
                              <li>En cas de fusion, acquisition ou vente d'actifs, vos données peuvent être transférées à la nouvelle entité</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section id="securite" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">5</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Sécurité des données</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.</p>
                          </div>
                        </div>
                      </section>

                      <section id="droits" className="p-4 rounded-lg bg-white dark:bg-zinc-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">6</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Vos droits</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Conformément au Règlement Général sur la Protection des Données (RGPD) et à d'autres lois applicables sur la protection des données, vous disposez des droits suivants :</p>
                            <ul className="mt-2 text-sm text-body-color ml-4 list-disc">
                              <li>Droit d'accès à vos données personnelles</li>
                              <li>Droit de rectification des données inexactes</li>
                              <li>Droit à l'effacement de vos données</li>
                              <li>Droit à la limitation du traitement</li>
                              <li>Droit à la portabilité des données</li>
                              <li>Droit d'opposition au traitement</li>
                            </ul>
                            <p className="mt-2 text-sm text-body-color text-justify">Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail suivante : <a className="text-primary" href="mailto:contact@unleash-lab.tech">contact@unleash-lab.tech</a>.</p>
                          </div>
                        </div>
                      </section>

                      <section id="cookies" className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">7</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Cookies</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent de reconnaître votre navigateur et de recueillir des informations sur votre utilisation du site.</p>
                            <p className="mt-2 text-sm text-body-color text-justify">Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si les cookies sont désactivés.</p>
                          </div>
                        </div>
                      </section>

                      <section id="contact" className="p-4 rounded-lg bg-white dark:bg-zinc-800 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">8</div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white">Contact</h3>
                            <p className="mt-2 text-sm text-body-color text-justify">Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter :</p>
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

export default PrivacyPage;
