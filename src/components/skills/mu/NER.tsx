// tslint:disable: max-line-length
import React from 'react';
import skillWrapper, { BaseSkillProps } from '../BaseSkill';
import api, { Res, StoreReq } from '../../../lib/api';
import { renderNerClasses, ontonotesClasses } from '../utils';

const config: BaseSkillProps<StoreReq, Res> = {
  title: 'Name Entity Recognition',
  desc: <div>
    Named Entity Recognition (NER) classifies tokens in text into predefined categories (tags), such as <b>person names</b>, <b>quantity expressions</b>, <b>percentage expressions</b>, <b>names of locations</b>, <b>organizations</b>, as well as expression of <b>time</b>, <b>currency</b> and others. 
    <br/>
    Number of defined classes depends on the language.
    <br/>
    <br/>
    Click on an entity to see its class description
    <br/>
    Classes: {renderNerClasses(ontonotesClasses)}
    </div>,
  docker: 'deeppavlov/ner_ml',
  inputs: [{
    title: 'Question',
    type: 'textarea',
    name: 'question',
  }],
  examples: [{
    question: `Icy conditions have swept across eastern Australia, bringing snow to areas as far north as subtropical Queensland. Australia's Bureau of Meteorology described it as a "rare" sight, noting the state had not experienced significant snowfall since 2015. Severe weather warnings have also been issued for a 1,000km (620 miles) stretch of coast which includes Sydney. Meteorologist Lachlan Stone said the snowfall in Queensland was an unusual occurrence in a state with a sub-tropical to tropical climate.`,
  },],
  api: api('https://7013.lnsigo.mipt.ru/model'),
  renderAnswer: { type: 'ner', colors: ontonotesClasses },
};

const NER = skillWrapper<StoreReq, Res>('nermu');
export default function () {
  return <NER {...config}/>;
}
