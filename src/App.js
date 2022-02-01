import React from "react"

import { CurriculumVitae } from "./Components/CurriculumVitae"

import 'bootstrap/dist/css/bootstrap.min.css'
import './Css/App.css'

import Photo from './Image/photo.jpg'

export const App = (props) => {
  const DATA = {
    bio: {
      photo: Photo,
      fio: 'Мошкин Юрий Алексеевич',
      position: 'Junior backend developer',
      geo: 'КУЗБАСС, г.Юрга (возможны командировки)',
    },
    contacts: {
      tel: '+7(900)100-10-10',
      email: 'admin@belko42.ru',
      vk: 'bikeauto',
    },
    pay: {
      rub: '35000₽',
      usd: '$450',
      eur: '€400',
      shedule: [
        'Сменный график',
        'Полный рабочий день',
        'Неполный рабочий день',
        'Гибкий график',
        'Ненормированный рабочий день',
      ],
    },
    languages: {
      lang: [
        { name: 'Русский (родной)', percent: 99 },
        { name: 'English (Basic, Technical)', percent: 10 },
      ]
    },
    skills: {
      skill: [
        {name: 'Владение компьютером', percent: 95},
        {name: 'HTML5 / CSS3', percent: 85},
        {name: 'BOOTSTRAP >= 4.5', percent: 80},
        {name: 'GIT (Version Control Systems)', percent: 70},
        {name: 'Bash / Console', percent: 40},
        {name: 'Docker', percent: 30},
        {name: 'PHP >= 5.2', percent: 60},
        {name: 'Node.JS', percent: 50},
        {name: 'Express.JS', percent: 90},
        {name: 'React.JS', percent: 30},
        {name: 'MySQL', percent: 50},
        {name: 'MongoDB', percent: 50},
        {name: 'PostgreSQL', percent: 50},
        {name: 'C++ / C#', percent: 10},
      ]
    },
    computer: {
      cpu: 'Intel XEON E5-2689',
      ram: '16GB',
      gpu: 'NVIDIA GeForce GTX750',
    },
    software: {
      soft: [
        'Windows 10 PRO build 1909',
        'Visual Studio Code (VSC)',
        'Adobe Illustrator',
        'Paint.NET',
      ]
    },
    personal: {
      nationality: 'Российская федерация',
      education: 'Среднее',
      birthday: '1997/02/25',
      gender: 'Мужской',
      marital: 'Холост',
    },
    expirience: {
      main: [
        {
          position: 'Fullstack разработчик',
          company: 'Авто-Мото магазин запчастей (AUTOAVENU / MOTOAVENU)',
          city: 'г.Москва',
          period: ['2013/02/01', null],
          details: 'Разработка и обслуживание сайтов с нуля, написание программ, ремонт и обслуживание компьютерной техники, настройка ПО.',
          skills: [
            'HTML5 / CSS3',
            'BOOTSTRAP',
            'NodeJS',
            'ExpressJS',
            'PostgreSQL',
          ],
        },
        {
          position: 'Системный администратор',
          company: 'Тату студия «сТАТУс»',
          city: 'г.Юрга',
          period: ['2020/09/01', null],
          details: 'Обслуживание компьютерной техники 5+ ед.',
        },
        {
          position: 'Системный администратор',
          company: 'Такси «Фунтик/Casper»',
          city: 'г.Юрга',
          period: ['2020/11/01', null],
          details: 'Обслуживание компьютерной техники 2+ ед.',
        },
      ],
      more: [
        {
          position: 'Менеджер отдела продаж',
          company: 'Goodline (ООО "Е-Лайт-Телеком")',
          city: 'г.Юрга',
          period: ['2015/05/01', '2015/08/01'],
          details: 'Продажа продуктов сетевого провайдера: Интернет, кабельное ТВ, ТВ приставки и т.п. В ходе работы, проходил курсы по холодным продажам.',
        },
        {
          position: 'Владелец бизнеса (магазин Автозапчастей / франшиза Yandex.Taxi)',
          company: 'Индивидуальный Предприниматель',
          city: 'г.Юрга',
          period: ['2016/08/26', '2019/05/15'],
          details: 'Открытие и развитие с нуля, с последующей продажей, готового бизнеса. В ходе работы, изучил основы бухгалтерии, ведения бизнеса, текущие аспекты законодательства НК РФ и ТК РФ.',
        },
      ],
    },
    details: {
      driver: 'Отсутствуют',
      free: 'Изучаю профильную литературу, создаю и проектирую свою систему управления умным домом(с нуля), помимо изучения профильных материалов, занимаюсь ремонтом компьютерной техники и изучаю основы сварочных работ, так же имею очень большой кругозор, следовательно интересуюсь многими темами.',
      qualities: [
        'Амбициозность',
        'Коммуникабельность',
        'Вежливость',
        'Готовность помочь',
        'Открытость',
        'Умение работать в команде',
        'Стрессоустойчивость',
        'Аккуратность',
        'Бережливость',
        'Cтремление к саморазвитию',
      ]
    }
  }
  return (
    <>
      <CurriculumVitae data={DATA} />
    </>
  )
}