// tslint:disable: max-line-length
import React from 'react';
import skillWrapper, { BaseSkillProps } from '../BaseSkill';
import api, { Res, StoreReq } from '../../../lib/api';
import { renderNerClasses, intentsClasses } from '../utils';

const config: BaseSkillProps<StoreReq, Res> = {
  title: 'Intent classification',
  desc: <p>
    Intent classification recognizes intents based on users utterance.
     
     <br/><br/>
    Classes: {renderNerClasses(intentsClasses)}
    </p>,
  docker: 'deeppavlov/intents_en',
  inputs: [{
    title: 'Enter text',
    type: 'text',
    name: 'question',
  }],
  examples: [{
    question: 'Show me the forecast for my upcoming weekend',
  }, {
    question: 'Find me the I, Robot television show',
  }, {
    question: 'Can I get some Russian cuisine at a restaurant with Shari and I?',
  }, {
    question: 'Add Diamonds to my roadtrip playlist',
  }, {
    question: 'Play the last track from Beyoncé off Spotify',
  }, {
    question: 'Give 6 stars to Of Mice and Men',
  }, {
    question: 'Tell me what movies are showing at 7am at the closest movie house',
  }],
  api: api('https://7007.lnsigo.mipt.ru/model'),
  renderAnswer: { type: 'intent', colors: intentsClasses },
};

const Intent = skillWrapper<StoreReq, Res>('intenten');
export default function () {
  return <Intent {...config}/>;
}
