import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
});

const iconBox = style({
  width: '80px',
  height: '80px',
  borderRadius: '28px',
  backgroundColor: '#F2F3F5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '9rem',
});

const icon = style({});

globalStyle(`${icon} > svg`, {
  width: '48px',
  height: '48px',
});

export const appSt = {
  bottomBtn,
  container,
  iconBox,
  icon,
};
