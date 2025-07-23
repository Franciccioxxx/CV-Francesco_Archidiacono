import React, { useState } from "react";

function CardSection({ title, icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 transition-all duration-300">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
          <i className={`fas ${icon}`}></i> {title}
        </h3>
        <span className="text-blue-500">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="mt-4 text-sm text-gray-700">{children}</div>}
    </div>
  );
}

export default function CVFrancesco() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {/* Left Column */}
        <div className="space-y-6">
          <CardSection title="Contatti" icon="fa-envelope">
            <p>Email: <a href="mailto:flarchidiacono@gmail.com" className="text-blue-600 hover:underline">flarchidiacono@gmail.com</a></p>
            <p>Posizione: Avellino (remoto)</p>
            <p>Età: 19 anni</p>
            <p>Aspirante Prompt Engineer</p>
          </CardSection>

          <CardSection title="Lingue" icon="fa-language">
            <ul className="list-disc ml-5">
              <li>Italiano: madrelingua</li>
              <li>Inglese: fluente</li>
              <li>Francese: base</li>
            </ul>
          </CardSection>

          <CardSection title="Competenze personali" icon="fa-lightbulb">
            <ul className="list-disc ml-5 space-y-1">
              <li>Affidabile, organizzato, autodidatta</li>
              <li>Ottima comunicazione scritta</li>
              <li>Pensiero analitico</li>
              <li>Curioso verso AI e HCI</li>
              <li>Semplifica concetti complessi</li>
            </ul>
          </CardSection>

          <CardSection title="Interessi" icon="fa-heart">
            <ul className="list-disc ml-5 space-y-1">
              <li>Intelligenza Artificiale</li>
              <li>Lettura e scrittura</li>
              <li>Volontariato</li>
              <li>Prompt design</li>
            </ul>
          </CardSection>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          <CardSection title="Profilo" icon="fa-user-circle">
            <p>
              Individuo curioso e motivato con forti competenze comunicative e digitali.
              Appassionato di intelligenza artificiale, modelli linguistici e interazione uomo-macchina.
              Particolare interesse per il prompt engineering e l'influenza del linguaggio sulle performance AI.
              Alla ricerca di opportunità remote per contribuire a progetti AI con le mie capacità analitiche e organizzative.
            </p>
          </CardSection>

          <CardSection title="Formazione" icon="fa-graduation-cap">
            <p>
              <strong>Diploma AFM - Amministrazione, Finanza e Marketing</strong><br />
              Istituto Enrico Fermi, Vallata (AV)
              <br />
              <span className="text-gray-500 text-sm">Autodidatta in strumenti AI (ChatGPT, Claude, Gemini) e tecniche di prompt design</span>
            </p>
          </CardSection>

          <CardSection title="Esperienza" icon="fa-briefcase">
            <ul className="list-disc ml-5 space-y-2">
              <li>Ripetizioni private di inglese per studenti medie e superiori</li>
              <li>
                <strong>Assistente Virtuale e Utente di AI tools</strong><br />
                Freelance – 2023 - presente<br />
                Gestione email, calendario, viaggi, documenti, presentazioni<br />
                Sviluppo prompt, scrittura assistita da AI, supporto alla ricerca
              </li>
            </ul>
          </CardSection>

          <CardSection title="Competenze tecniche" icon="fa-cogs">
            <ul className="list-disc ml-5 space-y-1">
              <li>Prompt design (ChatGPT, Gemini, Claude)</li>
              <li>Content generation e sintesi con LLM</li>
              <li>Informatica base (Office, Google Workspace)</li>
              <li>Scrittura persuasiva e strutturata</li>
              <li>Gestione social media</li>
            </ul>
          </CardSection>
        </div>
      </div>
    </div>
  );
}

