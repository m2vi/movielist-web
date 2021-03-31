import useThemeDetector from './useThemeDetector';

function Favicon(props) {
  return (
    <>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/logo/dark/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/logo/dark/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/logo/dark/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/logo/dark/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/logo/dark/favicon/safari-pinned-tab.svg'
        color='#000000'
      />
      <link rel='shortcut icon' href='/logo/dark/favicon/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta
        name='msapplication-config'
        content='/logo/dark/favicon/browserconfig.xml'
      />
      <meta name='theme-color' content='#ffffff' />
    </>
  );
}

function autoFavicon() {
  const isDarkTheme = useThemeDetector();

  return <Favicon type={isDarkTheme ? 'dark' : 'light'} />;
}

export default autoFavicon;

{
  /* 
  
<link rel="apple-touch-icon" sizes="180x180" href="/logo/light/favicon/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/logo/light/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/logo/light/favicon/favicon-16x16.png" />
<link rel="manifest" href="/logo/light/favicon/site.webmanifest" />
<link rel="mask-icon" href="/logo/light/favicon/safari-pinned-tab.svg" color="#8743ff" />
<link rel="shortcut icon" href="/logo/light/favicon/favicon.ico" />
<meta name="msapplication-TileColor" content="#8743ff" />
<meta name="msapplication-config" content="/logo/light/favicon/browserconfig.xml" />
<meta name="theme-color" content="#ffffff"></meta> 

*/
}

{
  /* 
  
<link rel="apple-touch-icon" sizes="180x180" href="/logo/colored/favicon/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/logo/colored/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/logo/colored/favicon/favicon-16x16.png" />
<link rel="manifest" href="/logo/colored/favicon/site.webmanifest" />
<link rel="mask-icon" href="/logo/colored/favicon/safari-pinned-tab.svg" color="#ffffff" />
<link rel="shortcut icon" href="/logo/colored/favicon/favicon.ico" />
<meta name="msapplication-TileColor" content="#0a0a0a" />
<meta name="msapplication-config" content="/logo/colored/favicon/browserconfig.xml" />
<meta name="theme-color" content="#ffffff"></meta> 

*/
}

{
  /*

<link rel="apple-touch-icon" sizes="180x180" href="/logo/dark/favicon/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/logo/dark/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/logo/dark/favicon/favicon-16x16.png" />
<link rel="manifest" href="/logo/dark/favicon/site.webmanifest" />
<link rel="mask-icon" href="/logo/dark/favicon/safari-pinned-tab.svg" color="#000000" />
<link rel="shortcut icon" href="/logo/dark/favicon/favicon.ico" />
<meta name="msapplication-TileColor" content="#000000" />
<meta name="msapplication-config" content="/logo/dark/favicon/browserconfig.xml" />
<meta name="theme-color" content="#ffffff" />

*/
}
