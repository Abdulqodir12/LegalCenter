import "../LegalCenter/index.css";
import React from "react";

const LegalCenter = () => {
    return (
        <div className='container '>
            {/* Header start */}

            <div className=' Header-list d-flex'>
                <a href='#'>
                    <img
                        className='SiteLogo'
                        src='..//../../public/LLc.png'
                        alt='LLC'
                        width={160}
                        height={63}
                    />
                </a>

                <p className='Legal'>International Legal Center</p>

                <p className='SideLogotext'>
                    Первый цифровой международный юридический центр
                </p>

                <a className='Header-tel' href='tel:+901320612'>
                    8 (800) 511-37-68
                </a>

                <button type='' class='btn-header'>
                    Войти
                </button>

                <img
                    className='mobilni-img'
                    src='../../../public/smartfon.png'
                    width={12.74}
                    height={22}
                    alt='rasm'
                />
                <img
                    className='mobilni-menyu'
                    src='../../../public/menyu.png'
                    width={22}
                    height={22}
                    alt='menyu'
                />
            </div>

            {/* Header end */}

            {/* Nav start */}

            <nav className='site-nav'>
                <ul className='site-nav-item'>
                    <li className='nav-list d-flex'>
                        <a className='nav-link' href='#'>
                            О компании
                        </a>
                        <a className='nav-link' href='#'>
                            Услуги
                        </a>
                        <a className='nav-link' href='#'>
                            Sirius
                        </a>
                        <a className='nav-link' href='#'>
                            Тарифы
                        </a>
                        <a className='nav-link' href='#'>
                            FAQ
                        </a>
                        <a className='nav-link' href='#'>
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Nav end */}

            {/* Main Section start */}

            <section className='main-section'>
                <div className='section-wrapper'>
                    <div className=' d-flex section-wrapper-text'>
                        <div className=' yuridic-container '>
                            <h2 className='section-name'>
                                Юридический полис ILC — быстрое решение сложных
                                вопросов 24/7
                            </h2>
                            <p className='main-section-wrapper-text'>
                                Ваша личная команда профессиональных юристов,
                                которая всегда под рукой. А также доступ к
                                бонусам партнерской программы — доход до $260 с
                                каждого полиса, купленного по вашему
                                приглашению.
                            </p>

                            <button className='main-section-wrapper-button'>
                                Попробовать бесплатно
                            </button>
                        </div>

                        <img
                            className='Section-img'
                            src='../../../public/section-img.png'
                            width={438}
                            height={488}
                            alt='rasm'
                        />
                        <img
                            className='section-img-group'
                            src='../../../public/Group.png'
                            width={145}
                            height={145}
                            alt='rasm'
                        />

                        <img
                            className='section-img-doira'
                            src='../../../public/doira.png'
                            width={112}
                            height={112}
                            alt='doira'
                        />

                        <img
                            className='img-yulduz'
                            src='../../../public/Group 291.svg'
                            width={197}
                            height={132}
                            alt='rasm'
                        />

                        <span className='doxod'>Доxод</span>
                        <span className='dollar'>до $260</span>
                        <span className='section-span-text'>
                            с каждого полиса
                        </span>

                        <div className='div-qolib'>
                            <div className='biz-haqimizda'>
                                <img
                                    className='section-soat'
                                    src='../../../public/Ellipse 4.png'
                                    width={40}
                                    height={40}
                                    alt='rasm'
                                />
                                <img
                                    className='section-soat2'
                                    src='../../../public/soat.png'
                                    width={28.936}
                                    height={28.936}
                                    alt='rasm'
                                />
                                <img
                                    className='section-oy'
                                    src='../../../public/oy.png'
                                    width={16.611}
                                    height={27.467}
                                    alt='rasm'
                                />
                                <img
                                    className='section-rang-img'
                                    src='../../../public/rang.png'
                                    width={40}
                                    height={40}
                                    alt='rasm'
                                />
                                <img
                                    className='dollar-elipse15'
                                    src='../../../public/Ellipse 15.png'
                                    width={33.339}
                                    height={33.191}
                                    alt='rasm'
                                />
                                <img
                                    className='dollar-elipse4'
                                    src='../../../public/Ellipse 4.png'
                                    width={33.339}
                                    height={33.191}
                                    alt='rasm'
                                />

                                <img
                                    className='span-dollar'
                                    src='../../../public/$.png'
                                    width={13.677}
                                    height={9.362}
                                    alt='rasm'
                                />

                                <ul>
                                    <li className='d-flex'>
                                        <p className='haqimizda'>
                                            Юридическая поддержка 24/7
                                        </p>

                                        <p className='haqimizda2'>
                                            Множество возможностей в одном
                                            полисе
                                        </p>
                                        <p className='haqimizda3'>
                                            Бонусы партнерской программы
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='section-yurist-jamoa d-flex'>
                        <div className='section-jamoa-wrapper'>
                            <img
                                className='section-jamoa-logo'
                                src='../../../public/LLC.png'
                                width={187}
                                height={59}
                                alt='logo'
                            />

                            <h3 className='section-jamoa-title'>
                                Ваша личная online команда юристов
                            </h3>
                            <p className='section-jamoa-text'>
                                Мы предоставляем комплексный консалтинговый
                                сервис с полисной системой обслуживания для
                                частных клиентов и для бизнеса, с использованием
                                новейших цифровых технологий.
                            </p>
                        </div>
                        <ul>
                            <li className=' section-klientlar-container  d-flex'>
                                <div className='section-jamoa-klentlar'>
                                    <p className='section-klentlar-soni'>
                                        100+<sub>тыс</sub>
                                    </p>
                                    <p className='section-klentlar-text'>
                                        Клиентов <br /> по всему миру
                                    </p>
                                </div>

                                <div className='section-jamoa-tajriba'>
                                    <p className='section-jamoa-tajriba-yili'>
                                        15<sub>лет</sub>
                                    </p>
                                    <p className='section-jamoa-tajriba-text'>
                                        Опытных юристов в штате
                                    </p>
                                    <img
                                        className='section-jamoa-tajriba-img'
                                        src='./../../../public/klient img.png'
                                        width={159}
                                        height={159}
                                        alt='rasm'
                                    />
                                </div>
                            </li>

                            <li className=' section-jamoa-tarjriba  d-flex'>
                                <div className='section-jamoa-tajribali-hodmlar'>
                                    <p className='section-tajribali-hodimlar'>
                                        50+
                                    </p>
                                    <p className='section-jamoa-tajribali-hodimlar-text'>
                                        Опытных юристов в штате
                                    </p>
                                    <img
                                        className='section-jamoa-hodmlar-img'
                                        src='./../../../public/klient img.png'
                                        width={39}
                                        height={39}
                                        alt='rasm'
                                    />
                                </div>

                                <div className='section-jamoa-sirius'>
                                    <p className='section-klentlar-sirius'>
                                        SIRIUS
                                    </p>
                                    <p className='section-sirius-text'>
                                        Система на базе искусственного
                                        интеллекта
                                    </p>
                                    <img
                                        className='section-jamoa-sirius-img'
                                        src='./../../../public/klient img.png'
                                        width={25}
                                        height={25}
                                        alt='rasm'
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='section-yordam-beramiz'>
                    <div className='section-yordam-beramiz-wrapper'>
                        <h3 className='section-wrapper-title'>
                            Даём поддержку
                        </h3>

                        <ul className='section-wrapper-loyihalar d-flex'>
                            <li className='section-wrapper-loyihalar-list'>
                                <img
                                    className='loyihalar-list-biznes-img'
                                    src='../../../public/biznes img.png'
                                    width={159}
                                    height={128}
                                    alt='rasm'
                                />

                                <h2 className='loyihalar-list-title'>
                                    Бизнесу
                                </h2>
                                <p className='loyihalar-list-text'>
                                    Услуги профессиональных юристов для вашей
                                    компании по фиксированному тарифу — это в
                                    несколько раз выгоднее, чем содержать свой
                                    штат.
                                </p>
                            </li>
                            <li className='section-wrapper-loyihalar-list'>
                                <img
                                    className='loyihalar-list-startup-img'
                                    src='../../../public/start up imj.png'
                                    width={166.881}
                                    height={129}
                                    alt='rasm'
                                />

                                <h3 className='loyihalar-list-title2'>
                                    StartUP проектам
                                </h3>
                                <p className='loyihalar-list-text2'>
                                    Эксперты ILC помогут выбрать оптимальную
                                    правовую форму для ведения бизнеса,
                                    оптимизировать налоги и подготовить
                                    необходимый пакет документов.
                                </p>
                            </li>
                            <li className='section-wrapper-loyihalar-list'>
                                <img
                                    className='loyihalar-list-chas-img'
                                    src='../../../public/famly img.png'
                                    width={161.352}
                                    height={128}
                                    alt='rasm'
                                />

                                <h3 className='loyihalar-list-title3'>
                                    Частным клиентам
                                </h3>
                                <p className='loyihalar-list-text3'>
                                    Оперативные решения сложных вопросов в
                                    режиме онлайн: ДТП, наследство, страховые
                                    споры, земельные и имущественные процессы,
                                    защита прав.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='section-afzalliklar'>
                    <div className='section-afzalliklar-wrapper'>
                        <h2 className='section-afzalliklar-wrapper-title'>
                            Преимущества сервиса
                        </h2>

                        <div className='section-wrapper-start'>
                            <ul className='d-flex'>
                                <li>
                                    <div className='section-wrapper-start-intelekt'>
                                        {/* <form>
                                            <input
                                                className=' section-wrapper-intelekt-input form-control'
                                                type='text'
                                                name='intelekt'
                                                placeholder='Чем могу вам помочь ?'></input>
                                        </form> */}
                                        <p
                                            className=' section-wrapper-intelekt-input
                                             '>
                                            Чем могу вам помочь ?
                                        </p>
                                        <button className='section-wrapper-intelekt-button'>
                                            Задайте вопрос
                                        </button>
                                        <img
                                            className='section-wrapper-intelekt-smart-img'
                                            src='../../../public/sirius smart.png'
                                            width={219}
                                            height={410}
                                            alt='smart'
                                        />

                                        <img
                                            className='section-wrapper-intelekt-smart-img2'
                                            src='../../../public/smartfon.png'
                                            width={178.973}
                                            height={397.159}
                                            alt='smart'
                                        />
                                        <img
                                            className='section-wrapper-intelekt-smart-img3'
                                            src='../../../public/sirius smart rang.png'
                                            width={160}
                                            height={375}
                                            alt='smart'
                                        />
                                        <img
                                            className='section-wrapper-intelekt-smart-img4'
                                            src='../../../public/sirius doira.png'
                                            width={150}
                                            height={158}
                                            alt='smart'
                                        />
                                        <p className='section-wrapper-intelekt-smart-img-sirius'>
                                            SIRIUS
                                        </p>
                                    </div>
                                </li>
                                <li className='section-wrapper-start-sirius'>
                                    <h3 className='section-wrapper-start-sirius-title'>
                                        SIRIUS
                                    </h3>
                                    <div className='section-wrapper-start-sirius-text-container'>
                                        <p cllasNaem='section-wrapper-start-sirius-container-text'>
                                            — первый полноценный искусственный
                                            интеллект, самостоятельно
                                            консультирующий людей по любым
                                            юридическим вопросам в режиме
                                            реального времени.
                                        </p>
                                        <p className='section-wrapper-start-sirius-container-text1'>
                                            Sirius анализирует входящий запрос и
                                            оперативно генерирует
                                            квалифицированный ответ на основании
                                            юридической логики.
                                        </p>
                                        <p className='section-wrapper-start-sirius-container-text2'>
                                            Доступ к системе предоставляется
                                            владельцу полиса в личном кабинете
                                            на нашем сайте.
                                        </p>
                                    </div>
                                </li>
                                <li className='section-wrapper-start-sirius-text'>
                                    <div className='   d-flex  align-items-center'>
                                        <img
                                            className='section-wrapper-start-sirius-text-img'
                                            src='../../../public/goloc.png'
                                            width={12}
                                            height={6.576}
                                            alt='rasm'
                                        />
                                        <p className='section-wrapper-start-sirius-text-text'>
                                            работает 24/7
                                        </p>
                                    </div>
                                    <div className='d-flex  align-items-center'>
                                        <img
                                            className='section-wrapper-start-sirius-text-img'
                                            src='../../../public/goloc.png'
                                            width={12}
                                            height={6.576}
                                            alt='rasm'
                                        />
                                        <p className='section-wrapper-start-sirius-text-text'>
                                            100% точность и корректность ответов
                                        </p>
                                    </div>
                                    <div className='d-flex  align-items-center'>
                                        <img
                                            className='section-wrapper-start-sirius-text-img'
                                            src='../../../public/goloc.png'
                                            width={12}
                                            height={6.576}
                                            alt='rasm'
                                        />
                                        <p className='section-wrapper-start-sirius-text-text'>
                                            при необходимости, подключает живого
                                            специалиста
                                        </p>
                                    </div>
                                    <div className='d-flex  align-items-center'>
                                        <img
                                            className='section-wrapper-start-sirius-text-img mt-3'
                                            src='../../../public/goloc.png'
                                            width={12}
                                            height={6.576}
                                            alt='rasm'
                                        />
                                        <p className='section-wrapper-start-sirius-text-text mt-3'>
                                            не берет больничный и никогда не
                                            уволится
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <ul className='section-afzalliklar-wrapper-item d-flex'>
                                <li className='section-afzalliklar-wrapper-item-list'>
                                    <img
                                        className=' section-afzalliklar-wrapper-item-list-chat-img'
                                        src='../../../public/chat 1.png'
                                        width={58}
                                        height={58}
                                        alt='chat'
                                    />
                                    <h4 className='section-afzalliklar-wrapper-item-list-title'>
                                        Удобный формат
                                    </h4>
                                    <p className='section-afzalliklar-wrapper-item-list-text'>
                                        Консультируем 24/7 в любом удобном
                                        формате: чат, аудио-звонок, c помощью
                                        искусственного интеллекта Sirius в
                                        личном кабинете.
                                    </p>
                                </li>
                                <li className='section-afzalliklar-wrapper-item-list'>
                                    <img
                                        className=' section-afzalliklar-wrapper-item-list-chat-img'
                                        src='../../../public/dolllr.png'
                                        width={75}
                                        height={58}
                                        alt='chat'
                                    />
                                    <h4 className='section-afzalliklar-wrapper-item-list-title'>
                                        Доступная цена
                                    </h4>
                                    <p className='section-afzalliklar-wrapper-item-list-text'>
                                        Выбирайте комфортный для себя пакет
                                        юридической поддержки, оплачивая только
                                        то, что действительно нужно.
                                    </p>
                                </li>
                                <li className='section-afzalliklar-wrapper-item-list'>
                                    <img
                                        className=' section-afzalliklar-wrapper-item-list-chat-img'
                                        src='../../../public/kalkulyatr.png'
                                        width={44}
                                        height={62}
                                        alt='chat'
                                    />
                                    <h4 className='section-afzalliklar-wrapper-item-list-title'>
                                        Налоговый калькулятор
                                    </h4>
                                    <p className='section-afzalliklar-wrapper-item-list-text'>
                                        Точный расчет налоговой нагрузки за
                                        считанные минуты с помощью телеграм-бота
                                        ILC_tax — это быстро и удобно!
                                    </p>
                                </li>
                                <li className='section-afzalliklar-wrapper-item-list'>
                                    <img
                                        className=' section-afzalliklar-wrapper-item-list-chat-img'
                                        src='../../../public/dokument.png'
                                        width={41}
                                        height={59}
                                        alt='chat'
                                    />
                                    <h4 className='section-afzalliklar-wrapper-item-list-title'>
                                        Конструктор документов
                                    </h4>
                                    <p className='section-afzalliklar-wrapper-item-list-text'>
                                        Доступ к более чем 9500 готовых и
                                        проработанных документов для бизнеса —
                                        бесплатно!
                                    </p>
                                </li>
                                <li className='section-afzalliklar-wrapper-item-list'>
                                    <img
                                        className=' section-afzalliklar-wrapper-item-list-chat-img'
                                        src='../../../public/quluf.png'
                                        width={62}
                                        height={62}
                                        alt='chat'
                                    />
                                    <h4 className='section-afzalliklar-wrapper-item-list-title5'>
                                        Бесплатный доступ для всех, кто
                                        зарегистрируется
                                    </h4>
                                    <p className='section-afzalliklar-wrapper-item-list-text'>
                                        Конструктор с ограниченным количеством
                                        документов на базе телеграм-бота
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='section-tarif'>
                    <div className='section-tarif-wrapper'>
                        <div className='section-tarif-wrapper-container'>
                            <h2 className='section-tarif-wrapper-title'>
                                Тарифы
                            </h2>
                            <p className='section-tarif-wrapper-text'>
                                для всех и для каждого
                            </p>
                            <div className='d-flex'>
                                <button className='tarif-oy'>1 месяц</button>
                                <button className='tarif-yil'>Год</button>
                            </div>

                            <div className='section-tarif-wrapper-bepul'>
                                <ul>
                                    <li cllasName='section-tarif-wrapper-bepul-list '>
                                        <h3 className='section-tarif-wrapper-bepul-osson-title '>
                                            Легкий старт
                                        </h3>
                                        <p className='section-tarif-wrapper-bepul-osson-text'>
                                            Бесплатно
                                        </p>
                                        <p className='section-tarif-wrapper-bepul-osson-text2'>
                                            Для ознакомления с сервисом и его
                                            возможностями
                                        </p>
                                    </li>
                                    <li className='section-tarif-wrapper-bepul-list2 '>
                                        <p className='section-tarif-wrapper-bepul-list2-title'>
                                            Для Вас доступно
                                        </p>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='bepul-2 d-flex align-items-center '>
                                                    <img
                                                        className='section-tarif-wrapper-bepul-list2-img1   '
                                                        src='../../../public/goloc.png'
                                                        width={7.393}
                                                        height={7.393}
                                                        alt='rasm'
                                                    />
                                                    <span className='section-tarif-wrapper-bepul-list2-text1'>
                                                        Конструктор документов
                                                    </span>
                                                </div>
                                                <div className=' bepul-2  d-flex align-items-center '>
                                                    <img
                                                        className='section-tarif-wrapper-bepul-list2-img2   '
                                                        src='../../../public/goloc.png'
                                                        width={7.393}
                                                        height={7.393}
                                                        alt='rasm'
                                                    />
                                                    <span className='section-tarif-wrapper-bepul-list2-text2'>
                                                        Личный кабинет (базовая
                                                        версия)
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='bepul-2 d-flex align-items-center '>
                                                    <img
                                                        className='section-tarif-wrapper-bepul-list2-img3   '
                                                        src='../../../public/goloc.png'
                                                        width={7.393}
                                                        height={7.393}
                                                        alt='rasm'
                                                    />
                                                    <span className='section-tarif-wrapper-bepul-list2-text3'>
                                                        Sirius
                                                    </span>
                                                </div>
                                                <div className=' bepul-2  d-flex align-items-center '>
                                                    <img
                                                        className='section-tarif-wrapper-bepul-list2-img4   '
                                                        src='../../../public/goloc.png'
                                                        width={7.393}
                                                        height={7.393}
                                                        alt='rasm'
                                                    />
                                                    <span className='section-tarif-wrapper-bepul-list2-text4'>
                                                        Личный кабинет (базовая
                                                        версия)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className='section-tarif-wrapper-kabinet'>
                                    <a
                                        className='section-tarif-wrapper-kabinet-link'
                                        href='#'>
                                        <span className='q'>
                                            Подробнее в личном кабинете
                                        </span>

                                        <img
                                            className='section-tarif-wrapper-kabinet-img'
                                            src='../../../public/strelka.png'
                                            width={14.801}
                                            height={16}
                                            alt='rasm'
                                        />
                                    </a>

                                    <button
                                        type='submit'
                                        className='section-tarif-wrapper-kabinet-button'>
                                        Оставить заявку
                                    </button>
                                </div>

                                <ul>
                                    <li className='section-tarif-list-standart d-flex '>
                                        <div className='section-tarif-standart '>
                                            <h3 className='section-tarif-standart-title'>
                                                Стандарт
                                            </h3>
                                            <p className='section-tarif-standart-jismoniy'>
                                                Для физических лиц
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy'>
                                                $28/месяц
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy-sizuchun'>
                                                Для Вас доступно
                                            </p>
                                            <div className=' section-tarif-standart-text1-container1  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text0'>
                                                    Бесплатная телефонная линия
                                                    + функция “перезвоните мне”
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container2 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Доступ к первому
                                                    юридическому интеллекту
                                                    Sirius 24/7
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container3 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Личный кабинет (полная
                                                    версия)
                                                </p>
                                            </div>
                                            <div className='  section-tarif-standart-text1-container4 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Конструктор документов
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container5  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Устные и письменные
                                                    консультации юристов 24/7
                                                </p>
                                            </div>

                                            <a
                                                className='section-tarif-standart-link'
                                                href='#'>
                                                Подробнее в личном кабинете
                                                <img
                                                    className='section-tarif-standart-link-img'
                                                    src='../../../public/strelka.png'
                                                    width={14.801}
                                                    height={16}
                                                    alt='rasm'
                                                />
                                            </a>
                                            <button
                                                type='submit'
                                                className='section-tarif-standart-button'>
                                                Оставить заявку
                                            </button>
                                        </div>

                                        <div className='section-tarif-standart'>
                                            <h3 className='section-tarif-konsultant-title'>
                                                бизнес-консультант
                                            </h3>
                                            <p className='section-tarif-standart-frilanser'>
                                                Для частных лиц и фрилансеров
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy'>
                                                $38/месяц
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy-sizuchun'>
                                                Для Вас доступно
                                            </p>
                                            <div className=' section-tarif-standart-text1-container1  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text0'>
                                                    Бесплатная телефонная линия
                                                    + функция “перезвоните мне”
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container2 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-frilanser-text2'>
                                                    Доступ к первому
                                                    юридическому интеллекту
                                                    Sirius 24/7
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container3 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standar-text1'>
                                                    Пакет документов для
                                                    открытия бизнеса в РФ
                                                </p>
                                            </div>
                                            <div className='  section-tarif-standart-text1-container4 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Сопровождение сделок
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container5  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Устные и письменные
                                                    консультации юристов 24/7
                                                </p>
                                            </div>

                                            <a
                                                className='section-tarif-standart-link'
                                                href='#'>
                                                Подробнее в личном кабинете
                                                <img
                                                    className='section-tarif-standart-link-img'
                                                    src='../../../public/strelka.png'
                                                    width={14.801}
                                                    height={16}
                                                    alt='rasm'
                                                />
                                            </a>
                                            <button
                                                type='submit'
                                                className='section-tarif-standart-button'>
                                                Оставить заявку
                                            </button>
                                        </div>
                                    </li>
                                    <li className='section-tarif-list-standart d-flex '>
                                        <div className='section-tarif-standart3 '>
                                            <h3 className='section-tarif-premium-title'>
                                                бизнес-премиум
                                            </h3>
                                            <p className='section-tarif-standart-jismoniy'>
                                                Для среднего бизнеса
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy'>
                                                $49/месяц
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy-sizuchun'>
                                                Для Вас доступно
                                            </p>
                                            <div className=' section-tarif-standart-text1-container1  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text0'>
                                                    Разработка уникальных
                                                    договоров любой сложности
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container2 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Доступ к первому
                                                    юридическому искусственному
                                                    интеллекту Sirius — 24/7
                                                </p>
                                            </div>
                                            <div className=' section-tarif-standart-text1-container3 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-premium-text3'>
                                                    Регистрация компаний и
                                                    открытия счетов в РФ
                                                </p>
                                            </div>
                                            <div className='  section-tarif-standart-text1-container4 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Сопровождение сделок любой
                                                    сложности
                                                </p>
                                            </div>
                                            <div className=' section-tarif-premium-text1-container5  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-standart-text1'>
                                                    Устные и письменные
                                                    консультации юристов 24/7
                                                </p>
                                            </div>

                                            <a
                                                className='section-tarif-premium-link'
                                                href='#'>
                                                Подробнее в личном кабинете
                                                <img
                                                    className='section-tarif-standart-link-img'
                                                    src='../../../public/strelka.png'
                                                    width={14.801}
                                                    height={16}
                                                    alt='rasm'
                                                />
                                            </a>
                                            <button
                                                type='submit'
                                                className='section-tarif-standart-button'>
                                                Оставить заявку
                                            </button>
                                        </div>

                                        <div className='section-tarif-standart4'>
                                            <h3 className='section-tarif-konsultant-title'>
                                                международный бизнес
                                            </h3>
                                            <p className='section-tarif-standart-frilanser'>
                                                Для ведения бизнеса за рубежом﻿
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy'>
                                                $98/месяц
                                            </p>
                                            <p className='section-tarif-standart-jismoniy-oy-sizuchun'>
                                                Для Вас доступно
                                            </p>
                                            <div className=' section-tarif-mejdunarodniy-text1-container1  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-mejdunarodniy-standart-text1'>
                                                    Разработка уникальных
                                                    договоров любой сложности
                                                </p>
                                            </div>
                                            <div className=' section-tarif-mejdunarodni-text1-container2 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-mejdunarodni-text2'>
                                                    Консультации и сопровождение
                                                    по регистрации компаний и
                                                    банковских счетов по всему
                                                    миру
                                                </p>
                                            </div>
                                            <div className=' section-tarif-mejdunarodni-text1-container3 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-mejdunarodni-text3'>
                                                    Оказание юридических услуг
                                                    на английском языке
                                                </p>
                                            </div>
                                            <div className='  section-tarif-standart-mejdunarodni-container4 d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-mejdunarodniy-text4'>
                                                    Консультации по
                                                    международному праву
                                                </p>
                                            </div>
                                            <div className=' section-tarif-mejdunarodniy-text1-container5  d-flex align-items-baseline'>
                                                <img
                                                    className='section-tarif-standart-img1'
                                                    src='../../../public/goloc.png'
                                                    width={7.055}
                                                    height={7.055}
                                                    alt='rasm'
                                                />
                                                <p className='section-tarif-mejdunarodniy-text5'>
                                                    Сопровождение сделок любой
                                                    сложности
                                                </p>
                                            </div>

                                            <a
                                                className='section-tarif-mejdunarodni-link'
                                                href='#'>
                                                Подробнее в личном кабинете
                                                <img
                                                    className='section-tarif-standart-link-img'
                                                    src='../../../public/strelka.png'
                                                    width={14.801}
                                                    height={16}
                                                    alt='rasm'
                                                />
                                            </a>
                                            <button
                                                type='submit'
                                                className='section-tarif-standart-button'>
                                                Оставить заявку
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='section-hamkor'>
                        <img
                            className='section-hamkor-img1'
                            src='../../../public/bacround.png'
                            width={1440}
                            height={372}
                            alt='rasm'
                        />
                        <img
                            className='section-hamkor-img2'
                            src='../../../public/bacround img.png'
                            width={350}
                            height={391}
                            alt='rasm'
                        />
                        <h2 className='section-hamkor-title'>
                            Станьте партнером ILC
                        </h2>
                        <p className='section-hamkor-text'>
                            и зарабатывайте на рекомендациях в любое время, из
                            любой точки мира
                        </p>
                    </div>
                </div>

                <ul>
                    <li className='section-hamkorlarga-list1 d-flex align-items-center'>
                        <img
                            className='section-hamkorlar-imkonyatlar-img'
                            src='../../../public/keng audiotorya.png'
                            width={218}
                            height={119}
                            alt='rasm'
                        />

                        <div className='section-hamkorlar-imkonyatlar-text0'>
                            <h3 className='section-hamkorlar-imkonyatlar-title'>
                                Высокие бонусы
                            </h3>
                            <p className='section-hamkorlar-imkonyatlar-text1'>
                                Вы получаете до 35% от стоимости каждого полиса,
                                который был куплен по вашей рекомендации.
                            </p>
                            <p className='section-hamkorlar-imkonyatlar-text2'>
                                К примеру: юридический полис “Международный
                                бизнес” стоит $750/год, с него вы зарабатываете
                                $260.
                            </p>
                        </div>
                    </li>
                    <li className='section-hamkorlarga-list2 d-flex align-items-center'>
                        <img
                            className='section-hamkorlar-imkonyatlar-img2'
                            src='../../../public/foydali mahsulot.png'
                            width={186}
                            height={127}
                            alt='rasm'
                        />

                        <div className='section-hamkorlar-imkonyatlar-text0'>
                            <h3 className='section-hamkorlar-imkonyatlar-title2'>
                                Полезный продукт
                            </h3>
                            <p className='section-hamkorlar-imkonyatlar-text2-1'>
                                Сервис ILC — это ваша личная команда юристов,
                                которая работает в формате “здесь и сейчас”,
                                24/7, без выходных.
                            </p>
                            <p className='section-hamkorlar-imkonyatlar-text2-2'>
                                Нужна помощь? Всего 1 клик и персональный юрист
                                ILC уже решает ваш вопрос.
                                <b>
                                    {" "}
                                    Это в несколько раз дешевле и быстрее, чем
                                    искать частного специалиста.{" "}
                                </b>
                            </p>
                        </div>
                    </li>
                    <li className='section-hamkorlarga-list2 d-flex align-items-center'>
                        <img
                            className='section-hamkorlar-imkonyatlar-img3'
                            src='../../../public/kotta bonus.png'
                            width={219}
                            height={106}
                            alt='rasm'
                        />

                        <div className='section-hamkorlar-imkonyatlar-text0'>
                            <h3 className='section-hamkorlar-imkonyatlar-titl3'>
                                Широкая аудитория
                            </h3>
                            <p className='section-hamkorlar-imkonyatlar-text3-1'>
                                Качественная юридическая помощь нужна абсолютно
                                всем: бизнесу, семьям, крупным компаниям,
                                экспертам и частным лицам.
                            </p>
                            <p className='section-hamkorlar-imkonyatlar-text3-2'>
                                Рекомендуя полис ILC, вы помогаете людям
                                оперативно решать жизненные задачи в 1 клик.
                            </p>
                        </div>
                    </li>
                    <li className='section-hamkorlarga-list4 d-flex align-items-center'>
                        <img
                            className='section-hamkorlar-imkonyatlar-img4'
                            src='../../../public/trenning.png'
                            width={219}
                            height={159}
                            alt='rasm'
                        />

                        <div className='section-hamkorlar-imkonyatlar-text0'>
                            <h3 className='section-hamkorlar-imkonyatlar-title4'>
                                Обучение и поддержка
                            </h3>
                            <p className='section-hamkorlar-imkonyatlar-text4-1'>
                                Вы получите доступ в личный кабинет с подробной
                                информацией о том, как:
                            </p>

                            <ul className='section-hamkorlar-imkonyatlar-text4-2-container'>
                                <li className='section-hamkorlar-imkonyatlar-text4-2'>
                                    эффективно привлекать клиентов,
                                </li>
                                <li className='section-hamkorlar-imkonyatlar-text4-2'>
                                    отслеживать конверсию,
                                </li>
                                <li className='section-hamkorlar-imkonyatlar-text4-2'>
                                    повышать свой доход,
                                </li>
                                <li className='section-hamkorlar-imkonyatlar-text4-2'>
                                    обналичивать средства и многое другое.
                                </li>
                            </ul>

                            <p className='section-hamkorlar-imkonyatlar-text4-3'>
                                Мы поддержим вас на всех этапах.
                            </p>
                        </div>
                    </li>
                    <li>
                        <button className='section-hamkorlar-imkonyatlar-button text-align-center'>
                            Стать партнером
                        </button>
                    </li>
                </ul>
                <div>
                    <div className='section-osson-boshlash'>
                        <h2 className='section-osson-boshlash-title'>
                            Начать легко
                        </h2>
                        <div className='section-osson-boshlash-wrapper  d-flex'>
                            <div className='section-osson-boshlash-royhat'>
                                <dir className='section-osson-boshlash-wrapper-royhat '>
                                    <p className='section-osson-boshlash-wrapper-royhat-1  '>
                                        1
                                    </p>
                                    <h3 className='section-osson-boshlash-wrapper-royhat-1-title'>
                                        Регистрация
                                    </h3>
                                    <p className='section-osson-boshlash-wrapper-royhat-1-text'>
                                        Заполните простую форму для участия в
                                        программе и активируйте клиентский
                                        пакет.
                                    </p>
                                </dir>
                                <div className='section-osson-boshlash-wrapper-royhat2'>
                                    <p className='section-osson-boshlash-wrapper-royhat-1  '>
                                        2
                                    </p>
                                    <h3 className='section-osson-boshlash-wrapper-royhat-1-title'>
                                        Обучение
                                    </h3>
                                    <p className='section-osson-boshlash-wrapper-royhat-2-text'>
                                        Вас ждут полезные обучающие материалы, с
                                        помощью которых вы легко сможете
                                        монетизировать свое время.
                                    </p>
                                </div>
                            </div>

                            <div className='section-osson-boshlash-wrapper-royhat-strategiya'>
                                <img
                                    className='section-osson-boshlash-wrapper-royhat-strategiya-img'
                                    src='../../../public/strategiya.png'
                                    width={231}
                                    height={161}
                                    alt='rasm'
                                />
                                <p className='section-osson-boshlash-wrapper-royhat-3  '>
                                    3
                                </p>
                                <h3 className='section-osson-boshlash-wrapper-royhat-3-title'>
                                    Стратегия
                                </h3>
                                <p className='section-osson-boshlash-wrapper-royhat-3-text'>
                                    Воспользуйтесь подробным и понятным
                                    алгоритмом действий для достижения классных
                                    результатов.
                                </p>
                            </div>

                            <div className='section-osson-boshlash-wrapper-royhat-target'>
                                <img
                                    className='section-osson-boshlash-wrapper-royhat-target-img'
                                    src='../../../public/target.png'
                                    width={55}
                                    height={55}
                                    alt='rasm'
                                />
                                <h3 className='section-osson-boshlash-wrapper-royhat-3-title'>
                                    Результат
                                </h3>
                                <p className='section-osson-boshlash-wrapper-royhat-4-text'>
                                    Зарабатывайте до 35% с каждой покупки полиса
                                    по вашей партнерской ссылке с первых дней
                                    после регистрации.
                                </p>
                                <button className='section-osson-boshlash-wrapper-royhat-button'>
                                    Начать зарабатывать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        
                
                    <div className='section-hamkorlaruchun-bashorat'>
                        <div className='section-hamkorlaruchun-bashorat-wrapper d-flex'>
                            <h2 className='section-hamkorlaruchun-bashorat-wrapper-title'>
                                Прогнозы партнерской программы на 2021 год
                            </h2>
                            <div className='section-hamkorlaruchun-bashorat-container d-flex align-items-baseline'>
                                <div className='section-hamkorlaruchun-bashorat1'>
                                    <p className='section-hamkorlaruchun-bashorat1-title'>
                                        $2 млн.
                                    </p>
                                    <p className='section-hamkorlaruchun-bashorat1-text'>
                                        Заработают партнеры ILC
                                    </p>
                                </div>
                                <div className='section-hamkorlaruchun-bashorat2'>
                                    <p className='section-hamkorlaruchun-bashorat1-title2'>
                                        10 000+
                                    </p>
                                    <p className='section-hamkorlaruchun-bashorat1-text2'>
                                        Полисов будет оформлено по партнерским
                                        ссылкам
                                    </p>
                                </div>
                                <div className='section-hamkorlaruchun-bashorat3'>
                                    <p className='section-hamkorlaruchun-bashorat1-title3'>
                                        800+
                                    </p>
                                    <p className='section-hamkorlaruchun-bashorat1-text3'>
                                        Партнеров присоединится к нам
                                    </p>
                                </div>
                                <div className='section-hamkorlaruchun-bashorat4'>
                                    <p className='section-hamkorlaruchun-bashorat1-title4'>
                                        $1500
                                    </p>
                                    <p className='section-hamkorlaruchun-bashorat1-text4'>
                                        Средний доход партнера в месяц
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
               
                  
                   
            
                <div className='section-rahbar'>
                    <div className='section-rahbar-wrapper d-flex'>
                        {/* <div > */}
                        <img
                            className='section-rahbar-wrapper-img-img'
                            src='../../../public/Aleksandr.jpg'
                            width={468}
                            height={584}
                            alt='rasm'
                        />
                        {/* <div className='section-rahbar'> */}

                        {/* </div> */}

                        {/* </div> */}

                        <div className='section-rahbar-wrapper-img  '>
                            <div className='section-rahbar-wrapper-text-container'>
                                <p className='section-rahbar-wrapper-container-text1'>
                                    Руководитель ООО ILC
                                </p>
                                <h3 className='section-rahbar-wrapper-container-title'>
                                    Александр Орлов
                                </h3>
                                <p className='section-rahbar-wrapper-container-text2'>
                                    10 лет в управлении и юриспуденции
                                </p>

                                <ul>
                                    <li>
                                        <p className='section-rahbar-wrapper-container-text3'>
                                            Мы стараемся окружить заботой и
                                            создать максимально комфортные
                                            условия для развития каждого
                                            партнера
                                        </p>
                                    </li>
                                    <li className='section-rahbar-list-text'>
                                        личный наставник
                                    </li>
                                    <li className='section-rahbar-list-text'>
                                        пошаговое обучение
                                    </li>
                                    <li className='section-rahbar-list-text'>
                                        готовые инструменты для продвижения
                                    </li>
                                    <li className='section-rahbar-list-text2'>
                                        и мгновенные выплаты бонусов.
                                    </li>
                                </ul>

                                <p className='section-rahbar-list-text3'>
                                    Больше деталей партнерской программы
                                    смотрите в личном кабинете после
                                    регистрации.
                                </p>

                                <button className='section-rahbar-button'>
                                    Зарегистрироваться
                                </button>
                                <dir className='aleksandr-container '>
                                    <p className='aleksandr-container-text2'>
                                        <b className='vergul'> “</b> <br />Я
                                        лично буду поддерживать вас на всех
                                        этапах развития в программе. Обращайтесь
                                        ко мне с любым вопросом email.
                                    </p>
                                </dir>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main Section end */}

            {/* Main Footer Start */}
            <footer className='main-section'>
                <p className='footer-chiziq'></p>

                <div className='footer-wrapper d-flex'>
                    <div className='footer-logo d-flex   '>
                        <img
                            className='footer-logo-img'
                            src='../../../public/LLC.png'
                            width={125}
                            height={55}
                            alt='logo'
                        />
                        <p className='footer-logo-text1'>
                            International Legal Center
                        </p>
                        <p className='footer-logo-text2'>
                            Первый цифровой международный юридический центр
                        </p>
                    </div>
                    <div className='footer-logo-link'>
                        <a className='footer-img-link' href='#'>
                            <img
                                className='footer-vk-link'
                                src='../../../public/vk 1.png'
                                width={18}
                                height={18}
                                alt='rasm'
                            />
                        </a>
                        <a className='footer-img-link' href='#'>
                            <img
                                className='footer-vk-link'
                                src='../../../public/instagram — копия 1.png'
                                width={18}
                                height={18}
                                alt='rasm'
                            />
                        </a>
                        <a className='footer-img-link' href='#'>
                            <img
                                className='footer-vk-link'
                                src='../../../public/twitter 1.png'
                                width={18}
                                height={18}
                                alt='rasm'
                            />
                        </a>
                        <a className='footer-img-link' href='#'>
                            <img
                                className='footer-vk-link4'
                                src='../../../public/facebook-letter-logo 1.png'
                                width={18}
                                height={18}
                                alt='rasm'
                            />
                        </a>
                    </div>
                </div>

                <div className='elektron-manzil d-flex align-items-center'>
                    <p className='elektron-manzil-text1'>
                        ©2021 «International Legal Center» | Разработано:
                        effex-it.com
                    </p>
                    <p className='elektron-manzil-text2'>
                        Политика конфиденциальности
                    </p>
                    <p className='elektron-manzil-text3'>
                        Пользовательское соглашение
                    </p>
                </div>
            </footer>

            {/* Main Footer Start */}
        </div>
    );
};

export default LegalCenter;
