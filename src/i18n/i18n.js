import i18next from 'i18next';

export default i18next.init({
    interpolation: {
        escapeValue: false // React already does escaping
    },
    lng: 'bg',
    resources: {
        en: {
            translation: {
                news: 'News',
                club: 'Club',
                team: 'Team',
                season: 'Season',
                gallery: 'Gallery',
                contacts: 'Contacts',
                dobrudja: 'HC Dobrudja Dobrich',
                'loko-varna': 'HC Lokomotiv Varna',
                chardafon: 'HC Chardafon Gabrovo',
                'spartak-varna': 'HC Spartak Varna',
                osam: 'HC Osam Lovech',
                'pirin-gd': 'HC Pirin G.D.',
                fregata: 'HC Fregata',
                'loko-gorna': 'HC Lokomotiv G.O.',
                nsa: 'HC NSA Sofia',
                matches: 'Matches',
                wins: 'Wins',
                draws: 'Draws',
                loses: 'Loses',
                diff: 'Goal Difference',
                points: 'Points'
            }
        },
        bg: {
            translation: {
                news: 'Новини',
                club: 'Клуб',
                team: 'Отбор',
                season: 'Сезон',
                gallery: 'Галерия',
                contacts: 'Контакти',
                dobrudja: 'ХК Добруджа Добрич',
                'loko-varna': 'ХК Локомотив Варна',
                chardafon: 'ХК Чардафон Габрово',
                'spartak-varna': 'ХК Спартак Варна',
                osam: 'ХК Осъм Ловеч',
                'pirin-gd': 'ХК Пирин-94 Г.Д.',
                fregata: 'ХК Фрегата Бургас',
                'loko-gorna': 'ХК Локомотив Г.О.',
                nsa: 'ХК НСА София',
                matches: 'Mачове',
                wins: 'Победи',
                draws: 'Равни',
                loses: 'Загуби',
                diff: 'Голова Разлика',
                points: 'Точки'
            }
        }
    }
})