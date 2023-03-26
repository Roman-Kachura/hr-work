import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className='container'>
                <div className={`${style.footerInfo} flex-sb-c`}>
                    <div className={style.infoItem}>
                        <h2 className={style.title}>HR-work.services</h2>
                        <h3 className={style.subtitle}>Сервис для поиска работы</h3>
                    </div>
                    <div className={style.infoItem}>
                        <p>Лучший Сервис для поиска работы в ЕС</p>
                        <p>Сопровождаем на всех этапах трудоустройства</p>
                    </div>
                    <div className={style.infoItem}>
                        <p>Для HR агентств и прямых работодателей</p>
                        <p>Хотите <a href='src/components'>разместить ваши вакансии</a> в нашей базе?</p>
                    </div>
                    <div className={style.infoItem}>
                        <p>HR менеджер сейчас Online</p>
                        <p className={style.infoNumber}>+375 (44) 711-24-64</p>
                    </div>
                </div>
                <div className={style.footerSite}>
                    Хочешь такой же сайт? Переходи на <a href='/'>наш сайт</a>
                </div>
            </div>
        </footer>
    )
}