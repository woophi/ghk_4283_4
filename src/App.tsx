import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag('event', 'connect_click', {
      variant_name: 'ghk_4283_1',
    });
    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.iconBox}>
          <CDNIcon name="glyph_eagle_m" className={appSt.icon} />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '8px' }} tag="h1" view="small" font="system" weight="medium">
          Не нашли ИНН
        </Typography.TitleResponsive>

        <div>
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Без него не сможем продолжить. ИНН можно передать через Госуслуги или актуализировать данные в офисе банка
          </Typography.Text>
          <Typography.Text view="primary-small" color="secondary">
            Нажимая «Подключить к банку», вы соглашаетесь на{' '}
            <a
              href="https://alfabank.st/site-upload/aa/d9/1677/Consent_3022025.pdf"
              style={{ color: '#2A77EF', textDecoration: 'none' }}
              target="_blank"
              onClick={() => {
                window.gtag('event', 'agreement_doc_click', {
                  variant_name: 'ghk_4283_1',
                });
              }}
            >
              обработку персональных данных
            </a>
          </Typography.Text>
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Подключить Госуслуги
        </ButtonMobile>
      </div>
    </>
  );
};
