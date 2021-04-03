import axios from 'axios';

// tslint:disable: max-line-length
import React from 'react';
import skillWrapper, { BaseSkillProps } from '../BaseSkill';

import { Res } from '../../../lib/api';
interface Req {
  text: string;
  question: string;
}

const config: BaseSkillProps<Req, Res> = {
  title: 'Text QA',
  desc: <p>
    The Question Answering component answers a question based on a given context
     (e.g, a paragraph of text), where the answer to the question is a segment of the context.
     
    </p>,
  docker: 'deeppavlov/squad_en',
  inputs: [{
    title: 'Enter text',
    type: 'textarea',
    name: 'text',
  }, {
    title: 'Question',
    type: 'text',
    name: 'question',
  }],
  examples: [{
    text: 'Bundeskanzlerin Angela Merkel (CDU) hat einem Medienbericht zufolge bereits am Freitag vergangener Woche vom erneuten Anpassungsbedarf beim Impfstoff von Astrazeneca erfahren - vier Tage vor der bundesweiten Entscheidung, das Präparat nur noch Menschen über 60 Jahren zu spritzen.',
    question: 'Wer ist die Bundeskanzlerin?',
  }, {
    text: `Sri Lanka was known from the beginning of British colonial rule as Ceylon (/sɪˈlɒn/, US also /seɪˈlɒn/).
    A nationalist political movement arose in the country in the early 20th century to obtain political independence, which was granted in 1948; the country became a republic and adopted its current name in 1972.
    Sri Lanka's recent history has been marred by a 26-year civil war, which ended decisively when the Sri Lanka Armed Forces defeated the Liberation Tigers of Tamil Eelam (LTTE) in 2009.
    The current constitution stipulates the political system as a republic and a unitary state governed by a semi-presidential system.
    It has had a long history of international engagement, as a founding member of the South Asian Association for Regional Cooperation (SAARC), and a member of the United Nations, the Commonwealth of Nations, the G77, and the Non-Aligned Movement.
    Along with the Maldives, Sri Lanka is one of only two South Asian countries rated "high" on the Human Development Index (HDI), with its HDI rating and per capita income the highest among South Asian nations.
    The Sri Lankan constitution accords Buddhism the "foremost place", although it does not identify it as a state religion. Buddhism is given special privileges in the Sri Lankan constitution.`,
    question: 'What is SAARC?',
  }, {
    text: `Der Bundespräsident hat seine erste Impfung gegen Corona erhalten, und man könnte meinen, eine weitere Nebenwirkung des ominösen AstraZeneca-Vakzins sei politische Enthemmung. In seiner Fernsehansprache zum zweiten Ostern in der Pandemie wählt Frank-Walter Steinmeier, der des staatstragenden Schwurbelns sonst durchaus mächtig ist, deutliche Worte: Er konstatiert eine demokratische Vertrauenskrise, rügt die politisch Verantwortlichen für Fehler und fordert nach den jüngsten Querelen, sie sollten sich zusammenraufen. Es ist ein Rüffel, von dem sich die Kanzlerin genau so gemeint fühlen darf wie ihr längst in den Wahlkampfmodus übergetretener Koalitionspartner und sämtliche Ministerpräsidenten, mit Kanzlerambitionen oder ohne.

    Frank-Walter Steinmeier hat sich, wie es die Tradition des Amtes will, selten in die Tagespolitik eingemischt: Einmal musste er, um aus einem Bundestagswahlergebnis auch eine Regierung entstehen zu lassen; einmal mahnte er auf dem Höhepunkt des Union-Streits um die Migration zur Mäßigung.
    
    Die Intervention jetzt ist besonders weitreichend, weil Steinmeier sich in einer Krise zu einem Anwalt der Bürger macht und sich mit ihnen über die Politik empört. Das ist legitim, aber ein schmaler Grat, auf dem schon Vorgänger wie Richard von Weizsäcker oder Horst Köhler nicht immer trittfest waren. Indem er das Ende seiner Rede nutzt, auch die Bürger in die Verantwortung für das große Ganze zu nehmen, tappt Steinmeier unterm Strich nicht in die Falle eines leichtfertigen Populismus. Aber stellenweise ist es ganz schön knapp.`,
    question: 'Wer ist Steinmeier?',
  }, {
    text: `Su área de distribución comprende casi toda Sudamérica al este de los Andes en las cuencas del río Orinoco, del Amazonas y del Río de la Plata; cubriendo desde el este de Venezuela y la Guyana hasta Uruguay y el norte y centro de Argentina.
    Pueden vivir en diferentes tipos de hábitat, pero muestran preferencia por algunos en concreto. Suelen encontrarse cerca de lagos, ríos, marismas o manglares.
    También necesitan un suelo firme para dormir, idealmente con una vegetación espesa que les sirve de protección.
    Para alimentarse no tienen problema en adentrarse por la sabana y herbazales.
    La mayor densidad de población de carpinchos se encuentra en las extensas zonas húmedas de Sudamérica, como el Pantanal, o la región de los Llanos del norte del continente, bañada por el río Orinoco. Viven mayoritariamente en las llanuras, pero también habitan en altitudes de hasta 1300 metros por sobre el nivel del mar.
    En comparación con otras especies animales de Sudamérica, las capibaras toleran bastante bien los cambios de hábitat provocados por la actividad humana, y también pueden sobrevivir en zonas transformadas en plantaciones o pastos.`,
    question: 'What countries do capybara live in?',
  },],
  api: async (stateReq: Req) => {
    const req = {
      context_raw: [stateReq.text],
      question_raw: [stateReq.question],
    };
    return await axios.post('https://7014.lnsigo.mipt.ru/model', req);
  },
  renderAnswer: { type: 'textqa' },
};

const TexqQA = skillWrapper<Req, Res>('textqamu');
export default function () {
  return <TexqQA {...config}/>;
}
